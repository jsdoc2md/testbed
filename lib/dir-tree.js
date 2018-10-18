const fs = require('fs').promises
const path = require('path')
const flatten = require('reduce-flatten')

exports.getTree = getTree
exports.getDirTree = getDirTree

async function stat (path) {
  const stats = await fs.stat(path)
  return { path, stats }
}

async function getFileInfos (dir) {
  const files = await fs.readdir(dir)
  return Promise.all(files.map(file => stat(path.resolve(dir, file))))
}

async function getDirs (dir) {
  const fileInfos = await getFileInfos(dir)
  return fileInfos
    .filter(file => file.stats.isDirectory())
    .map(file => file.path)
}

/**
 * Given a root directory, return all files in tree.
 * @param {string} - directory path
 * @returns {Promise}
 * @fulfil {string[]} - Fulfils with an array of file paths.
 */
async function getTree (dir) {
  const fileInfos = await getFileInfos(dir)
  const files = fileInfos
    .filter(file => file.stats.isFile())
    .map(file => file.path)
  const dirs = fileInfos.filter(file => file.stats.isDirectory())
  const processDirPromises = dirs.map(dir => getTree(dir.path))
  processDirPromises.push(Promise.resolve(files))
  const output = await Promise.all(processDirPromises)
  return output.reduce(flatten, [])
}

/**
 * Given a root directory, return all directories in tree.
 * @param {string} - directory path
 * @returns {Promise}
 * @fulfil {string[]} - Fulfils with an array of directory paths.
 */
async function getDirTree (dir) {
  const dirs = await getDirs(dir)
  const getDirPromises = dirs.map(dir => getDirTree(dir))
  getDirPromises.unshift(Promise.resolve(dirs))
  const output = await Promise.all(getDirPromises)
  return output.reduce(flatten, [])
}
