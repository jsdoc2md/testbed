'use strict'
const fs = require('then-fs')
const path = require('path')
const Task = require('work').Task

class BaseTask extends Task {
  constructor (folder) {
    super(null, {
      name: `${folder}: ${new.target.name}`,
      context: { folder: folder, options: {} }
    })
  }

  loadConfig (configPath) {
    configPath = path.resolve(this.context.folder, configPath)
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
    this.loadConfig('.jsdoc-api.json')
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
    this.loadConfig('.jsdoc-parse.json')
    const jsdocParse = require('jsdoc-parse2')
    const folder = this.context.folder
    const options = this.context.options

    fs.readFile(path.resolve(folder, '1-jsdoc.json'), 'utf8')
      // .then(content => { console.log(content); return content})
      .then(JSON.parse)
      .then(jsdocData => jsdocParse.parse(jsdocData))
      .then(data => fs.writeFile(path.resolve(folder, '2-jsdoc-parse.json'), JSON.stringify(data, null, '  ')))
      .then(resolve)
      .catch(reject)
  }
}

class BuildTemplate extends BaseTask {
  executor (resolve, reject) {
    this.loadConfig('.jsdoc2md.json')
    const jsdoc2md = require('jsdoc-to-markdown2')
    const options = this.context.options
    const folder = this.context.folder
    // if (options.template) {
    //   options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    // }
    const inputFile = path.resolve(folder, '2-jsdoc-parse.json')

    fs.readFile(inputFile, 'utf8')
      .then(content => JSON.parse(content))
      .then(array => jsdoc2md.buildTemplate(array, options))
      .then(template => template.renderAll())
      .then(output => fs.writeFile(path.resolve(this.context.folder, '3-dmd.md'), output))
      .catch(reject)
      .then(resolve)
  }
}

exports.Jsdoc = Jsdoc
exports.JsdocParse = JsdocParse
exports.BuildTemplate = BuildTemplate
