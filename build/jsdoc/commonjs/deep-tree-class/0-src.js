/**
 * Exports a farm. Documents inner classes.
 * @module farm
 */

/**
 * The farm
 * @alias module:farm
 */
class Farm {
 /**
  * the constructor
  */
  constructor () {
    /**
     * farm equipment
     * @type module:farm~Equipment
     */
    this.equipment = new Equipment()
  }
}

/**
* Equipment class
*/
class Equipment {
 constructor () {
   /**
    * the tractor
    * @type module:farm~Tractor
    */
   this.tractor = new Tractor()
 }
}

/**
* Tractor class
*/
class Tractor {
  constructor () {
    /**
     * engine details
     */
    this.engine = {
      /**
       * who built
       */
      manufacturer: 'one',
      /**
       * the size
       */
      size: 2
    }
  }

  /**
   * a static property on Tractor
   */
  static something () {}
}

module.exports = Farm
