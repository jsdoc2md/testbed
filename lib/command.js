'use strict'
const jsdoc = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const fs = require('fs')
const path = require('path')
const Task = require('work').Task

exports.jsdoc = getJsdoc
exports.jsdocParse = getJsdocParse
exports.dmd = getDmd

function getJsdoc (folder) {
  const task = new Task(jsdocResolver, { name: `${folder}: jsdoc`, data: { dir: folder } })
  task.promise
    .catch(err => {
      console.error(err)
    })
  return task
}

function getJsdocParse (folder, options) {
  const task = new Task(jsdocParseResolver, {
    name: `${folder}: jsdoc-parse`,
    data: {
      dir: folder,
      options: options
    }
  })
  return task
}

function getDmd (folder) {
  const task = new Task(dmdResolver, { name: `${folder}: dmd`, data: { dir: folder } })
  task.promise
    .catch(err => {
      console.error(err)
    })
  return task
}

const file = {
  SRC: '0-src.js',
  SRC_HTML: '0-src.html',
  JSDOC: '1-jsdoc.json',
  JSDOCPARSE: '2-jsdoc-parse.json',
  DMD: '3-dmd.md'
}

function jsdocResolver (deferred) {
  const files = path.resolve(this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOC))
  jsdoc
    .createExplainStream({ files: files })
    .on('error', err => {
      deferred.reject(`skipping ${this.name} [${err.message}]`)
    })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function jsdocParseResolver (deferred) {
  this.data.options = this.data.options || {}

  const files = path.resolve(this.data.dir, this.data.options.html ? file.SRC_HTML : file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOCPARSE))
  this.data.options.src = files
  // console.log(this.data)
  jsdocParse(this.data.options)
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function dmdResolver (deferred) {
  const inputStream = fs.createReadStream(path.resolve(this.data.dir, file.JSDOCPARSE), 'utf8')
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.DMD))
  inputStream
    .pipe(dmd())
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}
