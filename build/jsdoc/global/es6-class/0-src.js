'use strict'
/**
 * a global class
 */
class GlobalClass {
  /**
   * the global class constructor
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
 * the child of global class
 * @extends GlobalClass
 */
class GlobalChildClass extends GlobalClass {
  constructor () {
    super()
    /** an instance property */
    this.propThree = 1
  }

  /** overridden child methodTwo */
  methodTwo () {}
}

const a = new GlobalClass(1, 2)
const b = new GlobalChildClass(1, 2)
