#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')
const Queue = require('work').Queue
const commandLineArgs = require('command-line-args')
const tool = require('command-line-tool')
const command = require('./command')

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

const queue = new Queue()
const folderList = options.folders || makeFolderList()

for (let folder of folderList) {
  queue.push(command.jsdoc(folder))
  queue.push(command.jsdocParse(folder))
  queue.push(command.dmd(folder))
}

queue
  .on('shift', task => console.log(task.name))
  .process()

process.on('unhandledRejection', err => {
  tool.stop(err.stack, 1)
})
