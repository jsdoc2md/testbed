#!/usr/bin/env node
'use strict'
const Queue = require('work').Queue
const command = require('../lib/command')
const Task = require('work').Task
const fsIterable = require('../lib/iterator')
const tool = require('command-line-tool')

const options = tool.options([
  { name: 'folders', type: String, multiple: true, defaultOption: true },
  { name: 'v2', type: Boolean },
  { name: 'bb', type: Boolean },
  { name: 'jsdoc', type: Boolean },
  { name: 'parse', type: Boolean },
  { name: 'parse2', type: Boolean },
  { name: 'dmd', type: Boolean },
  { name: 'dmd2', type: Boolean }
])

function getFolderList () {
  if (options.folders) {
    return Promise.resolve(options.folders)
  } else {
    return fsIterable.getDirTree('./build')
      .catch(tool.halt)
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
    .push(new command.JsdocParse(folder))
    .push(new command2.BuildTemplate(folder))
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

function buildQueue (folderList, createTask) {
  const queue = new Queue({ maxConcurrent: 10 })
  folderList.forEach(dir => queue.push(createTask(dir)))
  queue.on('shift', task => console.log(task.name))
  queue.on('error', err => {
    console.log('Queue Error: ', /do not exist/.test(err.message) ? err.message : err.stack)
  })
  return queue
}

getFolderList()
  .then(folderList => {
    let queue
    if (options.jsdoc) {
      queue = buildQueue(folderList, dir => new command.Jsdoc(dir))
    } else if (options.parse) {
      queue = buildQueue(folderList, dir => new command.JsdocParse(dir))
    } else if (options.dmd) {
      queue = buildQueue(folderList, dir => new command.Dmd(dir))
    } else if (options.parse2) {
      queue = buildQueue(folderList, dir => new command.JsdocParse2(dir))
    } else if (options.dmd2) {
      queue = buildQueue(folderList, dir => new command.Dmd2(dir))
    } else if (options.bb) {
      queue = buildQueue(folderList, dir => new command.Dmd(dir, {
        plugin: 'dmd-bitbucket',
        outputFile: '6-dmd-bb.md'
      }))
    }
    if (queue) queue.process()
  })
  .catch(tool.halt)
