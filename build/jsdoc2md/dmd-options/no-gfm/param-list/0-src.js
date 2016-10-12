/**
 * Pump an idiot full of volts
 * @param options {object|string} - `options` can be an object or a string. If options is a string, it is automatically parsed with url.parse(). All options from `http.request()` are valid.
 * @param [options.host=localhost] {string} - A domain name or IP address of the server to issue the request to. Defaults to 'localhost'.
 * @param [options.family=4] {number} - IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
 * @param [options.path=/] {string} - Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future.
 * @param [options.agent] {object} - Controls Agent behavior. When an Agent is used request will default to Connection: keep-alive. Possible values:
 *
 * - undefined (default): use globalAgent for this host and port.
 * - Agent object: explicitly use the passed in Agent.
 * - false: opts out of connection pooling with an Agent, defaults request to Connection: close.
 */
function request (options) {}
