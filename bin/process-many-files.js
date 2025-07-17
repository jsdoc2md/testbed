import jsdoc2md from 'jsdoc-to-markdown'

/* Check jsdoc2md can handle huge amounts of input */

const result = await jsdoc2md.render({ files: process.argv.slice(2) })

/* Example commands */
// node bin/process-many-files.js build/jsdoc/global/**/*.js build/jsdoc2md/**/*.js build/jsdoc/commonjs/**/*.js
// node bin/process-many-files.js ~/Documents/*/*/*.js
