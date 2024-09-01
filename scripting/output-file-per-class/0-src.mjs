import jsdoc2md from 'jsdoc-to-markdown'
import { promises as fs } from 'node:fs'
import path from 'path'

/* input and output paths */
const inputFile = process.argv[2] || 'src/example.js'

/* get template data */
const templateData = await jsdoc2md.getTemplateData({ files: inputFile })

/* reduce templateData to an array of class names */
const classNames = templateData.filter(i => i.kind === 'class').map(i => i.name)

/* create a documentation file for each class */
for (const className of classNames) {
  const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`
  console.log(`rendering ${className}, template: ${template}`)
  const output = await jsdoc2md.render({ data: templateData, template: template })
  await fs.writeFile(path.resolve(`${className}.md`), output)
}
