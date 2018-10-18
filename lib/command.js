const fs = require('fs').promises
const path = require('path')
const Task = require('work').Task

class Jsdoc2md extends Task {
  constructor (folder, options) {
    options = options || {}
    super(null, {
      name: `${folder}: ${new.target.name}`,
      context: { folder: folder, options: options }
    })
  }

  loadConfig (configPath, another) {
    const getConfig = require('config-master')
    this.context.options = Object.assign(getConfig(configPath, { startFrom: this.context.folder }))
    if (another) {
      Object.assign(this.context.options, getConfig(another, { startFrom: this.context.folder }))
    }
  }

  getOutputStream (outputFile) {
    return fs.createWriteStream(path.resolve(this.context.folder, outputFile))
  }

  executor (resolve, reject) {
    this.loadConfig('jsdoc2md', 'dmd')
    const jsdoc2md = require('jsdoc-to-markdown')
    const options = this.context.options
    const folder = this.context.folder
    if (options.template) {
      options.template = fs.readFileSync(path.resolve(folder, options.template), 'utf8')
    }
    if (options.configure) options.configure = path.resolve(folder, options.configure)
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
    options['no-cache'] = true
    const outputFile = options.outputFile || '3-dmd.md'
    jsdoc2md.render(options)
      .then(output => output.replace(/Users\/lloydb/g, 'Users/lloyd'))
      .then(output => fs.writeFile(path.resolve(this.context.folder, outputFile), output))
      .then(resolve)
      .catch(reject)
  }
}

exports.Jsdoc2md = Jsdoc2md
