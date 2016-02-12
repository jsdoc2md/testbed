#!/usr/bin/env node
'use strict'
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const command = require('../lib/command')
const Task = require('work').Task
const fsIterable = require('../lib/iterator')

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true, defaultOption: true }
])

const options = cli.parse()

function getFolderQueue () {
  if (options.folders) {
    return Promise.resolve(makeFolderQueue(options.folders))
  } else {
    return fsIterable.getDirTree('./build')
      .then(folderList => makeFolderQueue(folderList))
  }
}

/**
 * @param {string[]} - array of folder paths
 * @returns {Queue} - queue of 'process folder' commands
 */
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

getFolderQueue().then(queue => {
  queue
    .on('error', err => console.log('Queue Error: ', err.message))
    .process()
})

// process.on('unhandledRejection', (err, p) => {
//   console.error('UNHANDLED', err.stack || err)
// })
