'use strict'
class ExampleLang extends JsdocParseCommand {
  constructor () {
    this.options = {
      src: __dirname + '/src.js',
      template: __dirname + '/template.hbs',
      'global-index-format': 'none'
    }
  }
}

module.exports = ExampleLang
