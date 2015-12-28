'use strict'
const fs = require('fs')
const path = require('path')

function readdir (dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err)
      else resolve(files)
    })
  })
}

function stat (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) reject(err)
      else resolve({ path, stats })
    })
  })
}

function getFiles (dir) {
  return readdir(dir)
    .then(files => {
      const statPromises = files.map(file => stat(path.resolve(dir, file)))
      return Promise.all(statPromises)
    })
}

class DirectoryTree {
  constructor (root) {
    this.root = root
    this.files = []
  }

  getTree (dir) {
    return getFiles(dir)
      .then(fileInfos => {
        const files = fileInfos
          .filter(file => file.stats.isFile())
          .map(file => file.path)
        const dirs = fileInfos.filter(file => file.stats.isDirectory())

        const processDirPromises = dirs.map(dir => this.getTree(dir.path))
        processDirPromises.push(Promise.resolve(files))
        return Promise.all(processDirPromises)
          .then(output => {
            const flattened = output.reduce((prev, curr) => prev.concat(curr), [])
            return flattened
          })
      })
  }
  * [Symbol.iterator] () {

  }
}

const tree = new DirectoryTree('./build')

tree.getTree('./build')
  .then(output => {
    console.log(output)
  })
  .catch(err => {
    console.error('ERROR', err.stack)
  })
