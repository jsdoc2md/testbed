/**
 * the farm
 */
class Farm {
 /**
  * the constructor
  */
  constructor () {
    /**
     * farm equipment
     * @type Equipment
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
    * @type Tractor
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

  static something () {}
}
