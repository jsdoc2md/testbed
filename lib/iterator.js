'use strict'
const fs = require('then-fs')
const path = require('path')
const flatten = require('reduce-flatten')

exports.getTree = getTree
exports.getDirTree = getDirTree

function stat (path) {
  return fs.stat(path)
    .then(stats => ({ path, stats }))
}

function getFileInfos (dir) {
  return fs.readdir(dir)
    .then(files => {
      const statPromises = files.map(file => stat(path.resolve(dir, file)))
      return Promise.all(statPromises)
    })
}

function getFiles (dir) {
  return getFileInfos(dir)
    .then(fileInfos => fileInfos.filter(file => file.stats.isFile()))
}

function getDirs (dir) {
  return getFileInfos(dir)
    .then(fileInfos => {
      return fileInfos
        .filter(file => file.stats.isDirectory())
        .map(file => file.path)
    })
}

/**
 * @param {string} - directory path
 * @returns {Promise}
 */
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
        .then(output => output.reduce(flatten, []))
    })
}

/**
 * @param {string} - directory path
 * @returns {Promise}
 */
function getDirTree (dir) {
  return getDirs(dir)
    .then(dirs => {
      const getDirPromises = dirs.map(dir => getDirTree(dir))
      getDirPromises.unshift(Promise.resolve(dirs))
      return Promise.all(getDirPromises)
        .then(output => output.reduce(flatten, []))
    })
}
