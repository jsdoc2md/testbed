#!/usr/bin/env node
'use strict'
const Queue = require('work').Queue
const Task = require('work').Task
const command = require('../lib/command')
const fsIterable = require('../lib/iterator')
const arrayify = require('array-back')
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')

const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'folders', type: String, multiple: true, defaultOption: true },
  { name: 'jsdoc', type: Boolean },
  { name: 'parse', type: Boolean },
  { name: 'dmd', type: Boolean },
  { name: 'v1', type: Boolean },
  { name: 'bb', type: Boolean }
]
const options = commandLineArgs(optionDefinitions)

if (options.help) {
  const usage = commandLineUsage([ { header: 'Options', optionList: optionDefinitions }])
  console.error(usage)
  process.exit(0)
}

async function getFolderList () {
  if (options.folders) {
    return options.folders
  } else {
    return fsIterable.getDirTree('./build')
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

async function start () {
  const folderList = await getFolderList()
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
  } else if (options.v1) {
    queue = buildQueue(folderList, dir => new command.Jsdoc2md(dir))
  }
  return queue && queue.process()
}
start()
