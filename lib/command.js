'use strict'
const fs = require('fs')
const path = require('path')
const Task = require('work').Task

class Jsdoc extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: jsdoc`,
      context: { folder: folder }
    })
  }

  executor (resolve, reject) {
    const jsdoc = require('jsdoc-api')
    const folder = this.context.folder
    const inputFile = path.resolve(folder, '0-src.js')
    const outputFile = path.resolve(folder, '1-jsdoc.json')

    if (fs.existsSync(inputFile)) {
      const outputStream = fs.createWriteStream(outputFile)

      jsdoc
        .createExplainStream({ files: inputFile })
        .on('error', err => {
          reject(`skipping ${this.name} [${err.message}]`)
        })
        .pipe(outputStream)
        .on('close', function () {
          resolve()
        })
    } else {
      resolve()
    }
  }
}

class JsdocParse extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: jsdoc-parse`,
      context: { folder: folder }
    })
    const configPath = path.resolve(folder, '.jsdoc-parse.json')
    if (fs.existsSync(configPath)) {
      this.context.options = require(configPath)
    }
  }

  executor (resolve, reject) {
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const outputFile = path.resolve(folder, '2-jsdoc-parse.json')
    const outputStream = fs.createWriteStream(outputFile)

    const options = this.context.options || {}
    options.src = path.resolve(folder, options.src) || path.resolve(folder, '0-src.js')
    console.log(options)
    jsdocParse(options)
      .pipe(outputStream)
      .on('close', function () {
        resolve()
      })
  }
}

class Dmd extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: dmd`,
      context: { folder: folder }
    })
    const configPath = path.resolve(folder, '.dmd.json')
    if (fs.existsSync(configPath)) {
      const options = require(configPath)
      if (options.template) {
        options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
      }
      this.context.options = options
    }
  }

  executor (resolve, reject) {
    const dmd = require('dmd')
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const inputFile = path.resolve(folder, '2-jsdoc-parse.json')
    const inputStream = fs.createReadStream(inputFile, 'utf8')
    const outputFile = path.resolve(folder, '3-dmd.md')
    const outputStream = fs.createWriteStream(outputFile)

    inputStream
      .pipe(dmd(this.context.options))
      .pipe(outputStream)
      .on('close', function () {
        resolve()
      })
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.Dmd = Dmd
