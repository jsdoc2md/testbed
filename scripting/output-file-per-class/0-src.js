import jsdoc2md from 'jsdoc-to-markdown'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import url from 'node:url'
const __dirname = url.fileURLToPath(path.dirname(import.meta.url))

const inputFile = `${__dirname}/src/example.js`
const templateData = await jsdoc2md.getTemplateData({ files: inputFile })

/* reduce templateData to an array of class names */
const classNames = templateData.filter(i => i.kind === 'class').map(i => i.name)

/* create a documentation file for each class */
for (const className of classNames) {
  const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`
  console.log(`rendering ${className}, template: ${template}`)
  const output = await jsdoc2md.render({ data: templateData, template })
  await fs.writeFile(`${__dirname}/${className}.md`, output)
}
