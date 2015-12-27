/* class instance property docs not output if `@module` specified  */

/**
 * @module something
 */

/**
 * create something
 */
class Something {
  /**
   * constructor description
   */
  constructor () {
    /**
     * a value
     * @type {number}
     */
    this.whatever = 1
  }

  /**
   * one 
   */
  one () {}
}
