'use strict'

/**
 * @type {number}
 */
var another = 1

/**
 * @mixin
 */
var mixin = {
  /**
   * @type {number}
   */
  one: 1
}

/**
 * something external
 * @external ext
 */

/**
 * @namespace
 */
var object = {}

/**
 * @class
 */
function Droid () {
  /**
   * @type {number}
   */
  this.jobs = 1

  /**
   * @type {number}
   */
  this.battery = 50

  /**
   * @type {string}
   * @category standard
   */
  this.colour = 'red'

  /**
   * @type {number}
   * @category standard
   */
  this.age = 12


  /**
   * @type {number}
   * @category inner-consts
   */
  const legs = 2

  /**
   * @type {number}
   * @category inner-consts
   */
  const arms = 2

  /**
   * @type {boolean}
   * @category inner-consts-two
   */
  const human = false
}

/**
 * @param {number}
 * @returns {number}
 * @category yeah-functions
 */
Droid.prototype.move = function (one) {}

/**
 * @param {number}
 * @returns {number}
 * @category yeah-functions
 */
Droid.prototype.stop = function (one) {}

/**
 * @param {number}
 * @returns {number}
 * @category no-functions
 */
Droid.prototype.pray = function (one) {}

/**
 * @param {number}
 * @returns {boolean}
 */
Droid.repair = function () {}
