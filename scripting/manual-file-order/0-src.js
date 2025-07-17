import jsdoc2md from 'jsdoc-to-markdown'
import { promises as fs } from 'node:fs'
import path from 'path'

/* RUN THIS IN ITS FOLDER */

const output = await jsdoc2md.render({ files: ['src/one.js', 'src/two.js'] })
// console.log(output)
await fs.writeFile(path.resolve(`one-two.md`), output)

const output2 = await jsdoc2md.render({ files: ['src/two.js', 'src/one.js'] })
// console.log(output2)
await fs.writeFile(path.resolve(`two-one.md`), output2)
