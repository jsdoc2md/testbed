const fs = require('fs').promises
const path = require('path')
const Job = require('work').Job

class Jsdoc2md {
  /**
   * Load for config in one file then potential extend it with config from a second
   */
  loadConfig (configPath, another, folder) {
    const getConfig = require('config-master')
    const options = Object.assign(getConfig(configPath, { startFrom: folder }))
    if (another) {
      Object.assign(options, getConfig(another, { startFrom: folder }))
    }
    return options
  }

  async run (folder) {
    const options = this.loadConfig('jsdoc2md', 'dmd', folder)
    const jsdoc2md = require('jsdoc-to-markdown')
    if (options.template) {
      options.template = await fs.readFile(path.resolve(folder, options.template), 'utf8')
    }
    if (options.configure) {
      options.configure = path.resolve(folder, options.configure)
    }
    console.log(folder)
    options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
    options['no-cache'] = true
    const outputFile = options.outputFile || '3-dmd.md'
    const output = await jsdoc2md.render(options)
    return fs.writeFile(path.resolve(folder, outputFile), output)
  }
}

module.exports = Jsdoc2md
