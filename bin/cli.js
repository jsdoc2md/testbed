#!/usr/bin/env node
async function getFolderList (folders) {
  const dirTree = require('../lib/dir-tree')
  if (folders.length) {
    return folders
  } else {
    return dirTree.getDirTree('./build')
  }
}

async function start () {
  const work = require('work')
  const Jsdoc2md = require('../lib/command')
  const Job = work.Job
  const Queue = work.Queue

  const [...folders] = process.argv.slice(2)
  const folderList = await getFolderList(folders)
  const queue = new Queue({ maxConcurrency: 10 })
  for (const dir of folderList) {
    // console.log(dir)
    const cmd = new Jsdoc2md()
    const job = new Job(cmd.run.bind(cmd))
    job.args = [dir]
    job.onFail = new Job((err, job) => {
      console.error('Fail: ' + err.message)
    })
    queue.add(job)
  }
  return queue.process()
}

start().catch(console.error)
