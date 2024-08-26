import jsdoc2md from 'jsdoc-to-markdown'

// node bin/process-many-files.js build/jsdoc/global/**/*.js build/jsdoc2md/**/*.js build/jsdoc/commonjs/**/*.js
// node bin/process-many-files.js ~/Documents/*/*/*.js
const result = await jsdoc2md.render({ files: process.argv.slice(2) })
