'use strict'
var jsdoc2md = require('../../../')
var fs = require('fs')
var dmd = require('dmd')
var util = require('util')
var path = require('path')
var collectJson = require('collect-json')

/* paths used by this script */
var p = {
  src: path.resolve(__dirname, '../../src/*.js'),
  output: path.resolve(__dirname, './%s.md')
}

jsdoc2md({ src: p.src, json: true })
  .pipe(collectJson(function (data) {

    /* reduce the jsdoc-parse output to an array of class names */
    var classes = data.reduce(function (prev, curr) {
      if (curr.kind === 'class') prev.push(curr.name)
      return prev
    }, [])

    /* render an output file for each class */
    writeMarkdownFile(data, classes, 0)
  }))

function writeMarkdownFile (data, classes, index) {
  var className = classes[index]
  var template = util.format('{{#class name="%s"}}{{>docs}}{{/class}}', className)
  console.log(util.format(
    'rendering %s, template: %s', className, template
  ))

  var dmdStream = dmd({ template: template })
  dmdStream
    .pipe(fs.createWriteStream(util.format(p.output, className)))
    .on('close', function () {
      var next = index + 1
      if (classes[next]) {
        writeMarkdownFile(data, classes, next)
      }
    })
  dmdStream.end(JSON.stringify(data))
}
