import jsdoc2md from 'jsdoc-to-markdown'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import url from 'node:url'
const __dirname = url.fileURLToPath(path.dirname(import.meta.url))

console.log(`Rendering ${__dirname}/one-two.md`)
const output = await jsdoc2md.render({ files: [`${__dirname}/src/one.js`, `${__dirname}/src/two.js`] })
await fs.writeFile(`${__dirname}/one-two.md`, output)

console.log(`Rendering ${__dirname}/two-one.md`)
const output2 = await jsdoc2md.render({ files: [`${__dirname}/src/two.js`, `${__dirname}/src/one.js`] })
await fs.writeFile(`${__dirname}/two-one.md`, output2)
