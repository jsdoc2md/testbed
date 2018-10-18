#!/usr/bin/env node
const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'folders', type: String, multiple: true, defaultOption: true },
  { name: 'jsdoc', type: Boolean },
  { name: 'parse', type: Boolean },
  { name: 'dmd', type: Boolean },
  { name: 'v1', type: Boolean },
  { name: 'bb', type: Boolean }
]

async function getFolderList (folders) {
  const dirTree = require('../lib/dir-tree')
  if (folders) {
    return folders
  } else {
    return dirTree.getDirTree('./build')
  }
}

function buildQueue (folderList, createTasks) {
  const Task = require('work').Task
  const Queue = require('work').Queue
  const arrayify = require('array-back')
  createTasks = arrayify(createTasks)
  const queue = new Queue({ maxConcurrent: 10 })
  if (createTasks.length) {
    folderList.forEach(dir => {
      const taskQueue = new Queue()
      createTasks.forEach(createTask => {
        taskQueue.push(createTask(dir))
      })
      const task = new Task((resolve, reject) => {
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
  const commandLineArgs = require('command-line-args')
  const options = commandLineArgs(optionDefinitions)
  const folderList = await getFolderList(options.folders)
  let queue
  if (options.help) {
    const commandLineUsage = require('command-line-usage')
    const usage = commandLineUsage([ { header: 'Options', optionList: optionDefinitions }])
    console.error(usage)
  } else {
    const command = require('../lib/command')
    queue = buildQueue(folderList, dir => new command.Jsdoc2md(dir))
    return queue && queue.process()
  }
}

start().catch(console.error)
