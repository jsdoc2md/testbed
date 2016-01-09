/**
 * Enum with a `type` value, no individual property descriptions.
 * @readonly
 * @enum {number}
 */
var eFileType = {
  NOEXIST: 0,
  FILE: 1,
  DIR: 2
}

/**
 * enum, no type, property descriptions.
 * @enum
 */
var eType = {
  /**
  type one
  */
  ONE: 1,
  /**
  type two
  */
  TWO: 2
}

/**
 * enum function!
 * @enum
 */
function eFunction () {}

/**
 * enum function, type, properties
 * @enum {number}
 * @property {number} ONE - first
 * @property {number} TWO - second
 */
function eFunction () {}
