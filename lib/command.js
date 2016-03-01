'use strict'
const fs = require('then-fs')
const path = require('path')
const Task = require('work').Task

class BaseTask extends Task {
  constructor (folder, options) {
    options = options || {}
    super(null, {
      name: `${folder}: ${new.target.name}`,
      context: { folder: folder, options: options }
    })
  }

  loadConfig (configPath) {
    const getConfig = require('config-master')
    Object.assign(this.context.options, getConfig(configPath, { startFrom: this.context.folder }))
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
  getOutputStream (outputFile) {
    const outputDir = this.context.folder.replace('src/', 'jsdoc-api/')
    return fs.createWriteStream(path.resolve(outputDir, outputFile))
  }
}

class JsdocParse extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('jsdoc-parse')
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const options = this.context.options
    options.src = options.src ? path.resolve(folder, options.src) : path.resolve(folder, '0-src.js')

    const stream = jsdocParse(options)
      .on('error', reject)
      .on('readable', () => {
        stream.pipe(this.getOutputStream('2-jsdoc-parse.json'))
          .on('close', resolve)
      })
  }
}

class JsdocParse2 extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('.jsdoc-parse2.json')
    const jsdocParse = require('jsdoc-parse2')
    const folder = this.context.folder
    const options = this.context.options

    fs.readFile(path.resolve(folder, '1-jsdoc.json'), 'utf8')
      .then(JSON.parse)
      .then(jsdocData => jsdocParse.parse(jsdocData, options))
      .then(data => fs.writeFile(path.resolve(folder, '5-jsdoc-parse2.json'), JSON.stringify(data, null, '  ')))
      .then(resolve)
      .catch(reject)
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
    const outputFile = options.outputFile || '3-dmd.md'
    const inputStream = fs.createReadStream(inputFile, 'utf8')

    const stream = inputStream
      .on('error', reject)
      .pipe(dmd(options))
      .on('error', reject)
      .on('readable', () => {
        stream.pipe(this.getOutputStream(outputFile))
          .on('close', resolve)
      })
  }
}

class Dmd2 extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('.jsdoc2md.json')
    const jsdoc2md = require('jsdoc-to-markdown2')
    const options = this.context.options
    const folder = this.context.folder
    if (options.template) {
      options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    }
    const inputFile = path.resolve(folder, '4-jsdoc-parse2.json')
    const outputFile = options.outputFile || '6-dmd2.md'

    fs.readFile(inputFile, 'utf8')
      .then(content => JSON.parse(content))
      .then(array => jsdoc2md.buildTemplate(array, options))
      .then(template => jsdoc2md.buildOutput(options, template))
      .then(output => fs.writeFile(path.resolve(this.context.folder, outputFile), output))
      .catch(reject)
      .then(resolve)
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.JsdocParse2 = JsdocParse2
exports.Dmd = Dmd
exports.Dmd2 = Dmd2
