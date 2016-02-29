'use strict'
const fs = require('fs')
const path = require('path')
const Task = require('work').Task
const walkBack = require('walk-back')

class BaseTask extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: ${new.target.name}`,
      context: { folder: folder, options: {} }
    })
  }

  loadConfig (configPath) {
    const getConfig = require('config-master')
    this.context.options = getConfig(configPath, { startFrom: this.context.folder })
  }

  getOutputStream (outputFile) {
    return fs.createWriteStream(path.resolve(this.context.folder, outputFile))
  }
}

class Jsdoc extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('jsdoc-api')
    const jsdoc = require('jsdoc-api')
    const folder = this.context.folder
    const options = this.context.options || {}
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
    options.pedantic = true

    const stream = jsdoc
      .createExplainStream(options)
      .on('error', reject)
      .on('readable', () => {
        stream.pipe(this.getOutputStream('1-jsdoc.json'))
          .on('close', resolve)
      })
  }
}

class JsdocParse extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('jsdoc-parse')
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const options = this.context.options
    options.src = options.src ? path.resolve(folder, options.src) : path.resolve(folder, '0-src.js')

    jsdocParse(options)
      .on('error', reject)
      .pipe(this.getOutputStream('2-jsdoc-parse.json'))
      .on('close', resolve)
  }
}

class Dmd extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('dmd')
    const dmd = require('dmd')
    const options = this.context.options
    const folder = this.context.folder
    if (options.template) {
      options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    }
    const inputFile = path.resolve(folder, '2-jsdoc-parse.json')
    const inputStream = fs.createReadStream(inputFile, 'utf8')

    inputStream
      .pipe(dmd(options))
      .on('error', reject)
      .pipe(this.getOutputStream('3-dmd.md'))
      .on('close', resolve)
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.Dmd = Dmd
