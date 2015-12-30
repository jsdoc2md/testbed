'use strict'
const fs = require('fs')
const path = require('path')
const Task = require('work').Task

class BaseTask extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: ${new.target.name}`,
      context: { folder: folder, options: {} }
    })
    this.loadConfig()
  }

  loadConfig () {
    const configPath = path.resolve(this.context.folder, '.jsdoc-api.json')
    if (fs.existsSync(configPath)) {
      this.context.options = require(configPath)
    }
  }

  getOutputStream (outputFile) {
    return fs.createWriteStream(path.resolve(this.context.folder, outputFile))
  }
}

class Jsdoc extends BaseTask {
  executor (resolve, reject) {
    const jsdoc = require('jsdoc-api')
    const folder = this.context.folder
    const outputStream = this.getOutputStream('1-jsdoc.json')
    const options = this.context.options || {}
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')

    jsdoc
      .createExplainStream(options)
      .on('error', err => {
        reject(`skipping ${this.name} [${err.message}]`)
      })
      .pipe(outputStream)
      .on('close', resolve)
  }
}

class JsdocParse extends BaseTask {
  executor (resolve, reject) {
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const outputStream = this.getOutputStream('2-jsdoc-parse.json')

    const options = this.context.options
    options.src = options.src ? path.resolve(folder, options.src) : path.resolve(folder, '0-src.js')

    jsdocParse(options)
      .on('error', reject)
      .pipe(outputStream)
      .on('close', resolve)
  }
}

class Dmd extends BaseTask {
  executor (resolve, reject) {
    const dmd = require('dmd')
    const options = this.context.options
    const folder = this.context.folder
    if (options.template) {
      options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    }
    const inputFile = path.resolve(folder, '2-jsdoc-parse.json')
    const inputStream = fs.createReadStream(inputFile, 'utf8')
    const outputStream = this.getOutputStream('3-dmd.md')

    inputStream
      .pipe(dmd(options))
      .pipe(outputStream)
      .on('close', resolve)
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.Dmd = Dmd
