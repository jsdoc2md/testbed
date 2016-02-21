'use strict'

/**
 * sort-by scope, category
 * @class
 */
function Something () {
  /**
   * @type {number}
   */
  this.one = 1

  /**
   * @type {number}
   */
  this.two = 2

  /**
   * @type {number}
   * @category inner-consts
   */
  const three = 3

  /**
   * @type {number}
   * @category inner-consts
   */
  const four = 4

  /**
   * @type {number}
   * @category inner-consts-two
   */
  const five = 5
}

/**
 * @param {number}
 * @returns {number}
 * @category yeah-functions
 */
Something.prototype.funcOne = function (one) {}

/**
 * @param {number}
 * @returns {number}
 * @category yeah-functions
 */
Something.prototype.funcTwo = function (one) {}

/**
 * @param {number}
 * @returns {number}
 * @category no-functions
 */
Something.prototype.funcThree = function (one) {}

/**
 * @param {number}
 * @returns {number}
 */
Something.staticFunc = function () {}

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
