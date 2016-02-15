/**
 * test to check deep member-indexes render ok
 *
 * @module farm
 */

/**
 * size of farm
 */
exports.size = 1000

/**
 * machinary
 */
 exports.equipment = {

   /**
    * tractor details
    */
   tractor: {
     /**
      * engine details
      */
     engine: {
       /**
        * who made it
        */
       manufacturer: 'one',

       /**
        * size of it
        */
       size: 2
     }
   }
 }
