#!/usr/bin/env node
'use strict'
const jsdoc = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const Task = require('work').Task

const file = {
  SRC: '0-src.js',
  JSDOC: '1-jsdoc.json',
  JSDOCPARSE: '2-jsdoc-parse.json',
  DMD: '3-dmd.md'
}

const globalList = fs.readdirSync('./global')
const queue = new Queue()

globalList.forEach(dir => {
  queue.push(new Task(jsdocResolver, { name: dir, data: { dir: dir } }))
  queue.push(new Task(jsdocParseResolver, { name: dir, data: { dir: dir } }))
  queue.push(new Task(dmdResolver, { name: dir, data: { dir: dir } }))
})
queue.process()

function jsdocResolver (deferred) {
  const files = path.resolve('global', this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve('global', this.data.dir, file.JSDOC))
  jsdoc
    .createExplainStream({ files: files })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function jsdocParseResolver (deferred) {
  const files = path.resolve('global', this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve('global', this.data.dir, file.JSDOCPARSE))
  jsdocParse({ src: files })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function dmdResolver (deferred) {
  const inputStream = fs.createReadStream(path.resolve('global', this.data.dir, file.JSDOCPARSE), 'utf8')
  const outputStream = fs.createWriteStream(path.resolve('global', this.data.dir, file.DMD))
  inputStream
    .pipe(dmd())
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}
