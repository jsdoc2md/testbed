/**
 * ES6 Class (with sub-class) exported indirectly by a variable on module.exports.
 * @module es6-class
 */

/**
 * a class exported from a module
 * @alias module:es6-class
 */
class ExportedClass {
  /**
   * the class constructor
   * @param {number} - first param
   * @param {string} - second param
   * @throws {string} A serious error occurred.
   * @example
   * var one = 1
   */
  constructor (one, two) {
    /**
     * an instance property
     * @type {number}
     */
    this.propOne = 1
  }

  /** a static method */
  static shat () {}

  /** parent method one */
  methodOne () {}
  /** parent method two */
  methodTwo () {}
}

/**
 * the child of exported class
 * @extends ExportedClass
 */
class ChildClass extends ExportedClass {
  constructor () {
    /** an instance property */
    this.propThree = 1
  }
}

module.exports = ExportedClass
