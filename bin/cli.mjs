#!/usr/bin/env node
import { getDirTree } from '../lib/dir-tree.mjs'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import jsdoc2md from 'jsdoc-to-markdown'
import arrayBack from 'array-back'
import util from 'node:util'
util.inspect.defaultOptions.depth = 6
util.inspect.defaultOptions.breakLength = process.stdout.columns
util.inspect.defaultOptions.maxArrayLength = Infinity

async function getConfig (folder, configPath) {
  const fullPath = path.resolve(folder, `.${configPath}.json`)
  let config = {}
  try {
    config = await fs.readFile(fullPath, 'utf8')
    config = JSON.parse(config)
  } catch (err) {
    if (err.code === 'ENOENT') {
      // config file not found - no big deal
    } else {
      throw err
    }
  }
  return config
}

/**
 * Load config in one file then potential extend it with config from a second
 */
async function loadConfig (configPath, another, folder) {
  const options = await getConfig(folder, configPath)
  if (another) {
    Object.assign(options, await getConfig(folder, another))
  }
  return options
}

let folders = process.argv.slice(2)
if (!folders.length) {
  folders = await getDirTree('./build')
}

for (const folder of folders) {
  console.log('Processing folder: ' + folder)
  const options = await loadConfig('jsdoc2md', 'dmd', folder)
  if (options.template) {
    /* the options.template in dmd expects a template string */
    options.template = await fs.readFile(path.resolve(folder, options.template), 'utf8')
  }
  if (options.configure) {
    options.configure = path.resolve(folder, options.configure)
  }
  if (options.partial) {
    options.partial = path.resolve(folder, options.partial)
  }
  if (options.helper) {
    options.helper = path.resolve(folder, options.helper)
  }
  if (options.files) {
    options.files = arrayBack(options.files).map(file => path.resolve(folder, file))
  } else {
    options.files = path.resolve(folder, '0-src.js')
    try {
      await fs.stat(options.files)
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log('No input files specified')
        continue
      } else {
        throw err
      }
    }
  }
  options['no-cache'] = true
  const outputFile = options.outputFile || '3-dmd.md'
  let output
  try {
    // console.log('OPTIONS', options)
    output = await jsdoc2md.render(options)
    await fs.writeFile(path.resolve(folder, outputFile), output)
  } catch (err) {
    console.error('FAILED', folder)
    console.error(err)
  }
}
