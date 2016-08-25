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

    if (options.configure) options.configure = path.resolve(folder, options.configure)
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
    options.pedantic = true
    options.cache = true

    jsdoc
      .explain(options)
      .then(explainOutput => JSON.stringify(explainOutput, null, '  '))
      .then(explainOutput => explainOutput.replace(/Users\/lloydb/g, 'Users/lloyd'))
      .then(explainOutput => fs.writeFile(path.resolve(folder, '1-jsdoc.json'), explainOutput))
      .then(resolve)
      .catch(reject)
  }
}

class JsdocParse extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('jsdoc-parse')
    const jsdocParse = require('jsdoc-parse')
    const folder = this.context.folder
    const options = this.context.options

    fs.readFile(path.resolve(folder, '1-jsdoc.json'), 'utf8')
      .then(JSON.parse)
      .then(jsdocData => jsdocParse(jsdocData, options))
      .then(data => fs.writeFile(path.resolve(folder, '2-jsdoc-parse.json'), JSON.stringify(data, null, '  ')))
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

    fs.readFile(inputFile, 'utf8')
      .then(JSON.parse)
      .then(jsdocParseData => dmd(jsdocParseData, options))
      .then(dmdOutput => fs.writeFile(path.resolve(this.context.folder, outputFile), dmdOutput))
      .then(resolve)
      .catch(reject)
  }
}

class Jsdoc2md extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('dmd')
    const jsdoc2md = require('jsdoc-to-markdown')
    const options = this.context.options
    const folder = this.context.folder
    if (options.template) {
      options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    }
    if (options.configure) options.configure = path.resolve(folder, options.configure)
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
    const outputFile = options.outputFile || '3-dmd.md'

    jsdoc2md.render(options)
      .then(output => output.replace(/Users\/lloydb/g, 'Users/lloyd'))
      .then(output => fs.writeFile(path.resolve(this.context.folder, outputFile), output))
      .then(resolve)
      .catch(reject)
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.Dmd = Dmd
exports.Jsdoc2md = Jsdoc2md
