#!/usr/bin/env node
import { getDirTree } from '../lib/dir-tree.mjs'
import Jsdoc2md from '../lib/command.mjs'
import { Job, Queue } from 'work/index.mjs'

async function getFolderList (folders) {
  if (folders.length) {
    return folders
  } else {
    return getDirTree('./build')
  }
}

async function start () {
  const [...folders] = process.argv.slice(2)
  const folderList = await getFolderList(folders)
  const queue = new Queue({ maxConcurrency: 10 })
  for (const dir of folderList) {
    const job = new Jsdoc2md()
    job.args = [dir]
    // job.onFail = new Job({
    //   fn: (err, job) => {
    //     console.error('Fail: ' + err.message)
    //   }
    // })
    queue.add(job)
  }
  return queue.process()
}

start().catch(console.error)
