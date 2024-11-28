/**
 * Deprecated but without a comment.
 *
 * @deprecated
 */
function deprecatedFunction (one) {}

/**
 * Deprecated with a comment.
 *
 * @deprecated The method is deprecated just because.
 */
function deprecatedFunction2 (one) {}

/**
 * A function that's not deprecated - for comparison.
 */
function notDeprecated (one) {}

/**
 * @summary Creates a new something for an organization
 * @name create
 * @public
 * @function
 *
 * @deprecated Deprecated. Use `something.else` instead.
 * @description This method adds a thing to an organization by their usename.
 *
 * @param {Object} options - Some param text.
 * @param {String|Number} options.organization - Some param text.
 * @param {String} options.username - Some param text. Some param text.
 * @param {String} [options.roleName="member"] - Some param text. Some param text. Some param text.
 *
 * @fulfil {Object} - organization membership
 * @returns {Promise}
 *
 * @example
 * something.action({ organization: "myorg", username: "user123", roleName: "member" }).then(function(membership) {
 *  console.log(membership)
 * })
 */
function moreDetail () {}
