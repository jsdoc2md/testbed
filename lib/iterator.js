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

  getTree () {
    return new Promise((resolve, reject) => {
      const processDir = dir => {
        return getFiles(dir)
          .then(fileInfos => {
            const files = fileInfos.filter(f => f.stats.isFile())
            const dirs = fileInfos.filter(f => f.stats.isDirectory())
            files.forEach(file => {
              this.files.push(file.path)
            })
            const processDirPromises = dirs.map(dir => processDir(dir.path))
            return Promise.all(processDirPromises)
          })
      }
      processDir(this.root)
        .then(resolve)
        .catch(err => {
          console.error(err.stack)
          reject(err)
        })
    })
  }
  * [Symbol.iterator] () {

  }
}

const tree = new DirectoryTree('./build')

tree.getTree()
  .then(output => {
    console.log(tree)
  })
  .catch(err => {
    console.error('ERROR', err.stack)
  })
