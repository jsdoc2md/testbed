/*
 * Should not document as `global`.
 * https://github.com/jsdoc2md/jsdoc-to-markdown/issues/181
 */

/**
 * exported number
 */
const pi = 3.14

/**
 * Add two values.
 */
function add (a, b) {
  return a + b
}

/**
 * Subtraction.
 */
function subtract (a, b) {
  return a - b
}

export { pi, add, subtract }
