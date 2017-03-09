'use strict'

/**
 * something
 */
class Something {
  constructor () {
    /**
     * inner constant
     */
    const three = 3

    /**
     * inner var
     */
    var four = 4

    /**
     * Inner class
     */
    const innerClass = class {}


    /**
     * Instance class
     */
    this.instanceClass = class {}
  }
}

/**
 * Static class
 */
Something.staticClass = class {}
