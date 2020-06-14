#!/usr/bin/env node
import { getDirTree } from '../lib/dir-tree.mjs'
import Jsdoc2md from '../lib/command.mjs'
import { Job, Queue, Loop } from 'work/index.mjs'

async function getFolderList (folders) {
  if (folders.length) {
    return folders
  } else {
    return getDirTree('./build')
  }
}

async function start () {
  const [...folders] = process.argv.slice(2)
  const job = new Job({
    name: 'getFolderList',
    fn: getFolderList,
    args: [folders],
    result: 'dirs',
    onSuccess: new Loop({
      name: 'processDirs',
      maxConcurrency: 10,
      forEach: function () { return this.scope.get('dirs') },
      argsFn: dir => dir,
      Node: Jsdoc2md
    })
  })

  job.on('state', function (state) {
    console.log(`${this.name}: ${state}`)
  })

  return job.process()
}

start().catch(console.error)
