#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const tool = require('command-line-tool')
const command = require('./command')
const Task = require('work').Task

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true }
])

const options = cli.parse()

function * makeFolderList () {
  const folders = [ 'amd', 'commonjs', 'global' ]
  for (let one of folders) {
    for (let two of fs.readdirSync(one)) {
      yield path.join(one, two)
    }
  }
}

const mainQueue = new Queue({ maxConcurrent: 10 })
const folderList = options.folders || makeFolderList()

for (let folder of folderList) {
  const task = new Task(function (deferred) {
    const queue = new Queue()
    queue
      .push(command.jsdoc(folder))
      .push(command.jsdocParse(folder))
      .push(command.dmd(folder))
      .on('shift', task => console.log(task.name))
      .on('complete', deferred.resolve)
      .on('error', deferred.reject)
      .process()
  })
  mainQueue.push(task)
}

mainQueue.process()

// process.on('unhandledRejection', (err, p) => {
//   console.log('UNHANDLED', p)
//   tool.stop(err.stack || err, 1)
// })

// process.on('handledRejection', p => {
//   console.log('HANDLED', p)
// })
