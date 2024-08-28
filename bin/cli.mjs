#!/usr/bin/env node
import { getDirTree } from '../lib/dir-tree.mjs'
import getConfig from 'config-master'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import jsdoc2md from 'jsdoc-to-markdown'

/**
 * Load config in one file then potential extend it with config from a second
 */
function loadConfig (configPath, another, folder) {
  const options = Object.assign(getConfig(configPath, { startFrom: folder }))
  if (another) {
    Object.assign(options, getConfig(another, { startFrom: folder }))
  }
  return options
}

let folders = process.argv.slice(2)
if (!folders.length) {
  folders = await getDirTree('./build')
}

for (const folder of folders) {
  console.log('Processing folder: ' + folder)
  const options = loadConfig('jsdoc2md', 'dmd', folder)
  if (options.template) {
    /* the options.template in dmd expects a template string */
    options.template = await fs.readFile(path.resolve(folder, options.template), 'utf8')
  }
  if (options.configure) {
    options.configure = path.resolve(folder, options.configure)
  }
  options.files = options.files ? path.resolve(folder, options.files) : path.resolve(folder, '0-src.js')
  options['no-cache'] = true
  const outputFile = options.outputFile || '3-dmd.md'
  let output
  try {
    output = await jsdoc2md.render(options)
    await fs.writeFile(path.resolve(folder, outputFile), output)
  } catch (err) {
    console.error('FAILED', folder)
    console.error(err)
  }
}
