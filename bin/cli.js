#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const tool = require('command-line-tool')
const command = require('../lib/command')
const Task = require('work').Task
const fsIterable = require('../lib/iterator')

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true, defaultOption: true }
])

const options = cli.parse()

if (options.folders) {
  makeFolderQueue(options.folders).process()
} else {
  fsIterable.getDirTree('./build')
    .then(folderList => {
      makeFolderQueue(folderList).process()
    })
}

function makeFolderQueue (folderList) {
  const folderQueue = new Queue({ maxConcurrent: 10 })
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
    folderQueue.push(task)
  }
  return folderQueue
}

process.on('unhandledRejection', (err, p) => {
  console.error(err.stack || err)
})
