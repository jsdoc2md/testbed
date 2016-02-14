#!/usr/bin/env node
'use strict'
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const command = require('../lib/command')
const command2 = require('../lib/command-v2')
const Task = require('work').Task
const fsIterable = require('../lib/iterator')

const cli = commandLineArgs([
  { name: 'folders', type: String, multiple: true, defaultOption: true },
  { name: 'v2', type: Boolean }
])

const options = cli.parse()

function getFolderQueue () {
  if (options.folders) {
    return Promise.resolve(makeFolderQueue(options.folders))
  } else {
    return fsIterable.getDirTree(options.v2 ? './build-v2' : './build')
      .then(folderList => makeFolderQueue(folderList))
      .catch(err => console.error(err.stack))
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
      const queue = options.v2 ? getV2Queue(folder) : getQueue(folder)
      queue
        .on('shift', task => console.log(task.name))
        .on('complete', resolve)
        .on('error', reject)
        .process()
    })
    folderQueue.push(task)
  }
  return folderQueue
}

function getQueue (folder) {
  const queue = new Queue()
  queue
    .push(new command.Jsdoc(folder))
    .push(new command.JsdocParse(folder))
    .push(new command.Dmd(folder))
  return queue
}

function getV2Queue (folder) {
  const queue = new Queue()
  queue
    .push(new command2.Jsdoc(folder))
    .push(new command2.JsdocParse(folder))
    .push(new command2.BuildTemplate(folder))
  return queue
}

getFolderQueue().then(queue => {
  queue
    .on('error', err => console.log('Queue Error: ', /do not exist/.test(err.message) ? err.message : err.stack))
    .process()
})

// process.on('unhandledRejection', (err, p) => {
//   console.error('UNHANDLED', err.stack || err)
// })
