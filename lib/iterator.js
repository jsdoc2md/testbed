'use strict'
const fs = require('fs')
const path = require('path')

exports.getTree = getTree
exports.getDirTree = getDirTree

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

function getFileInfos (dir) {
  return readdir(dir)
    .then(files => {
      const statPromises = files.map(file => stat(path.resolve(dir, file)))
      return Promise.all(statPromises)
    })
}

function getFiles (dir) {
  return getFileInfos(dir)
    .then(fileInfos => {
      return fileInfos.filter(file => file.stats.isFile())
    })
}

function getDirs (dir) {
  return getFileInfos(dir)
    .then(fileInfos => {
      return fileInfos
        .filter(file => file.stats.isDirectory())
        .map(file => file.path)
    })
}

function getTree (dir) {
  return getFileInfos(dir)
    .then(fileInfos => {
      const files = fileInfos
        .filter(file => file.stats.isFile())
        .map(file => file.path)
      const dirs = fileInfos.filter(file => file.stats.isDirectory())

      const processDirPromises = dirs.map(dir => getTree(dir.path))
      processDirPromises.push(Promise.resolve(files))
      return Promise.all(processDirPromises)
        .then(output => {
          const flattened = output.reduce((prev, curr) => prev.concat(curr), [])
          return flattened
        })
    })
}

function getDirTree (dir) {
  return getDirs(dir)
    .then(dirs => {
      const getDirPromises = dirs.map(dir => getDirTree(dir))
      getDirPromises.unshift(Promise.resolve(dirs))
      return Promise.all(getDirPromises)
        .then(output => {
          return output.reduce((prev, curr) => prev.concat(curr), [])
        })
    })
}
