/**
 * exporting a function pointer.. requires an @alias else exportedFunction is documented as an inner.
 * @module es6-modules-default2
 */

export default exportedFunction

/**
 * exported function
 * @alias module:es6-modules-default2
 */
function exportedFunction () {
  return 'yeah?'
}
