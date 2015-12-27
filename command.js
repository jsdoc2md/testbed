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
  return new Task(jsdocResolver, { name: `${folder}: jsdoc`, data: { dir: folder } })
}

function getJsdocParse (folder) {
  return new Task(jsdocParseResolver, { name: `${folder}: jsdoc-parse`, data: { dir: folder } })
}

function getDmd (folder) {
  return new Task(dmdResolver, { name: `${folder}: dmd`, data: { dir: folder } })
}

const file = {
  SRC: '0-src.js',
  JSDOC: '1-jsdoc.json',
  JSDOCPARSE: '2-jsdoc-parse.json',
  DMD: '3-dmd.md'
}

function jsdocResolver (deferred) {
  const files = path.resolve(this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOC))
  jsdoc
    .createExplainStream({ files: files })
    .pipe(outputStream)
    .on('close', function () {
      deferred.resolve()
    })
}

function jsdocParseResolver (deferred) {
  const files = path.resolve(this.data.dir, file.SRC)
  const outputStream = fs.createWriteStream(path.resolve(this.data.dir, file.JSDOCPARSE))
  jsdocParse({ src: files })
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
