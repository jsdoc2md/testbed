#!/usr/bin/env node
'use strict'
const Queue = require('work').Queue
const Task = require('work').Task
const command = require('../lib/command')
const fsIterable = require('../lib/iterator')
const tool = require('command-line-tool')
const arrayify = require('array-back')

const defs = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'folders', type: String, multiple: true, defaultOption: true },
  { name: 'v1', type: Boolean },
  { name: 'v2', type: Boolean },
  { name: 'bb', type: Boolean },
  { name: 'bb2', type: Boolean },
  { name: 'jsdoc', type: Boolean },
  { name: 'parse', type: Boolean },
  { name: 'parse2', type: Boolean },
  { name: 'dmd', type: Boolean },
  { name: 'dmd2', type: Boolean }
]
const { options, usage } = tool.getCli(defs, { header: 'Options', optionList: defs })

if (options.help) tool.stop(usage)

function getFolderList () {
  if (options.folders) {
    return Promise.resolve(options.folders)
  } else {
    return fsIterable.getDirTree('./build')
      .catch(tool.halt)
  }
}

function buildQueue (folderList, createTasks) {
  createTasks = arrayify(createTasks)
  const queue = new Queue({ maxConcurrent: 10 })
  if (createTasks.length) {
    folderList.forEach(dir => {
      const taskQueue = new Queue()
      createTasks.forEach(createTask => {
        taskQueue.push(createTask(dir))
      })
      const task = new Task(function (resolve, reject) {
        taskQueue
          .on('shift', task => console.log(task.name))
          .on('complete', resolve)
          .on('error', reject)
          .process()
      })
      queue.push(task)
    })
  } else {
    folderList.forEach(dir => {
      queue.push(createTasks[0](dir))
    })
  }
  queue.on('shift', task => { if (task.name) console.log(task.name) })
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
    } else if (options.bb) {
      queue = buildQueue(folderList, dir => new command.Dmd(dir, {
        plugin: 'dmd-bitbucket',
        outputFile: '4-dmd-bb.md'
      }))
    } else if (options.parse2) {
      queue = buildQueue(folderList, dir => new command.JsdocParse2(dir))
    } else if (options.dmd2) {
      queue = buildQueue(folderList, dir => new command.Dmd2(dir))
    } else if (options.bb2) {
      queue = buildQueue(folderList, dir => new command.Dmd2(dir, {
        decorations: 'dmd-bitbucket2',
        outputFile: '7-dmd2-bb2.md'
      }))
    } else if (options.v1) {
      queue = buildQueue(folderList, [
        dir => new command.JsdocParse(dir),
        dir => new command.Dmd(dir)
      ])
    } else if (options.v2) {
      queue = buildQueue(folderList, [
        dir => new command.JsdocParse2(dir),
        dir => new command.Dmd2(dir)
      ])
    }
    if (queue) queue.process()
  })
  .catch(tool.halt)
