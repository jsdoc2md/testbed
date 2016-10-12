## `jsdoc2md --param-list-format list`
<a name="request"></a>

### request(options)
Makes a request to a secure web server.

**Kind**: global function  
**Params**

- options <code>object</code> | <code>string</code> - `options` can be an object or a string. If options is a string, it is automatically parsed with url.parse(). All options from `http.request()` are valid.
    - [.host] <code>string</code> <code> = &quot;localhost&quot;</code> - A domain name or IP address of the server to issue the request to. Defaults to 'localhost'.
    - [.family] <code>number</code> <code> = 4</code> - IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
    - [.path] <code>string</code> <code> = &quot;/&quot;</code> - Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future.
    - [.rejectUnauthorized] <code>boolean</code> <code> = true</code> - If true, the server certificate is verified against the list of supplied CAs. An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent.



* * *

## `jsdoc2md --param-list-format list` no params
<a name="noParams"></a>

### noParams()
this func has no params

**Kind**: global function  


* * *

## `jsdoc2md --param-list-format table`
<a name="request"></a>

### request(options)
Makes a request to a secure web server.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> &#124; <code>string</code> |  | `options` can be an object or a string. If options is a string, it is automatically parsed with url.parse(). All options from `http.request()` are valid. |
| [options.host] | <code>string</code> | <code>&quot;localhost&quot;</code> | A domain name or IP address of the server to issue the request to. Defaults to 'localhost'. |
| [options.family] | <code>number</code> | <code>4</code> | IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used. |
| [options.path] | <code>string</code> | <code>&quot;/&quot;</code> | Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future. |
| [options.rejectUnauthorized] | <code>boolean</code> | <code>true</code> | If true, the server certificate is verified against the list of supplied CAs. An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent. |


