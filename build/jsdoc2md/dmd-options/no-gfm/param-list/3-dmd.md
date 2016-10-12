<a name="request"></a>

## request(options)
Pump an idiot full of volts

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>options</td><td><code>object</code> | <code>string</code></td><td></td><td><p><code>options</code> can be an object or a string. If options is a string, it is automatically parsed with url.parse(). All options from <code>http.request()</code> are valid.</p>
</td>
    </tr><tr>
    <td>[options.host]</td><td><code>string</code></td><td><code>&quot;localhost&quot;</code></td><td><p>A domain name or IP address of the server to issue the request to. Defaults to &#39;localhost&#39;.</p>
</td>
    </tr><tr>
    <td>[options.family]</td><td><code>number</code></td><td><code>4</code></td><td><p>IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.</p>
</td>
    </tr><tr>
    <td>[options.path]</td><td><code>string</code></td><td><code>&quot;/&quot;</code></td><td><p>Request path. Defaults to &#39;/&#39;. Should include query string if any. E.G. &#39;/index.html?page=12&#39;. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future.</p>
</td>
    </tr><tr>
    <td>[options.agent]</td><td><code>object</code></td><td></td><td><p>Controls Agent behavior. When an Agent is used request will default to Connection: keep-alive. Possible values:</p>
<ul>
<li>undefined (default): use globalAgent for this host and port.</li>
<li>Agent object: explicitly use the passed in Agent.</li>
<li>false: opts out of connection pooling with an Agent, defaults request to Connection: close.</li>
</ul>
</td>
    </tr>  </tbody>
</table>

