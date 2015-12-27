#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const tool = require('command-line-tool')
const command = require('../lib/command')
const Task = require('work').Task

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true }
])

const options = cli.parse()

function * makeFolderList () {
  const folders = [ 'build/amd', 'build/commonjs', 'build/global' ]
  for (let one of folders) {
    for (let two of fs.readdirSync(one)) {
      yield path.join(one, two)
    }
  }
}

const mainQueue = new Queue({ maxConcurrent: 10 })
const folderList = options.folders || makeFolderList()

for (let folder of folderList) {
  const task = new Task(function (resolve, reject) {
    const queue = new Queue()
    queue
      .push(new command.Jsdoc(folder))
      .push(new command.JsdocParse(folder))
      .push(new command.Dmd(folder))
      .on('shift', task => console.log(task.name))
      .on('complete', resolve)
      .on('error', reject)
      .process()
  })
  mainQueue.push(task)
}

mainQueue.process()
