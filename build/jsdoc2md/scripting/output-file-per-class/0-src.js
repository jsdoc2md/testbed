'use strict'
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const path = require('path')

/* input and output paths */
const inputFile = path.resolve(__dirname, 'src/example.js')
const outputDir = __dirname

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile })

/* reduce to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
  if (identifier.kind === 'class') classNames.push(identifier.name)
  return classNames
}, [])

/* create a file for each class containing only the docs for that class */
for (const className of classNames) {
  const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`
  console.log(`rendering ${className}, template: ${template}`)
  const output = jsdoc2md.renderSync({ data: templateData, template: template })
  fs.writeFileSync(path.resolve(outputDir, `${className}.md`), output)
}
