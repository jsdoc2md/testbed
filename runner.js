#!/usr/bin/env node
'use strict'
const jsdoc = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const Task = require('work').Task
const commandLineArgs = require('command-line-args')
const tool = require('command-line-tool')

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true }
])

const options = cli.parse()

const file = {
  SRC: '0-src.js',
  JSDOC: '1-jsdoc.json',
  JSDOCPARSE: '2-jsdoc-parse.json',
  DMD: '3-dmd.md'
}

function * makeFolderList () {
  const folders = [ 'amd', 'commonjs', 'global' ]
  for (let one of folders) {
    for (let two of fs.readdirSync(one)) {
      yield path.join(one, two)
    }
  }
}

const queue = new Queue()
const folderList = options.folders || makeFolderList()

for (let folder of folderList) {
  queue.push(new Task(jsdocResolver, { name: `${folder}: jsdoc`, data: { dir: folder } }))
  queue.push(new Task(jsdocParseResolver, { name: `${folder}: jsdoc-parse`, data: { dir: folder } }))
  queue.push(new Task(dmdResolver, { name: `${folder}: dmd`, data: { dir: folder } }))
}

queue
  .on('shift', task => console.log(task.name))
  .process()

function jsdocResolver (deferred) {
  const files = path.resolve(this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOC))
  jsdoc
    .createExplainStream({ files: files })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function jsdocParseResolver (deferred) {
  const files = path.resolve(this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOCPARSE))
  jsdocParse({ src: files })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function dmdResolver (deferred) {
  const inputStream = fs.createReadStream(path.resolve(this.data.dir, file.JSDOCPARSE), 'utf8')
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.DMD))
  inputStream
    .pipe(dmd())
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

process.on('unhandledRejection', err => {
  tool.stop(err.stack, 1)
})
