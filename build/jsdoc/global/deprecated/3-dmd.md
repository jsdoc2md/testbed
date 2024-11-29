## Functions

<dl>
<dt><del><a href="#deprecatedFunction">deprecatedFunction()</a></del></dt>
<dd><p>Deprecated but without a comment.</p>
</dd>
<dt><del><a href="#deprecatedFunction2">deprecatedFunction2()</a></del></dt>
<dd><p>Deprecated with a comment.</p>
</dd>
<dt><a href="#notDeprecated">notDeprecated()</a></dt>
<dd><p>A function that&#39;s not deprecated - for comparison.</p>
</dd>
<dt><del><a href="#create">create(options)</a> ⇒ <code>Promise</code></del></dt>
<dd><p>This method adds a thing to an organization by their usename.</p>
</dd>
</dl>

<a name="deprecatedFunction"></a>

## ~~deprecatedFunction()~~
***Deprecated***

Deprecated but without a comment.

**Kind**: global function  
<a name="deprecatedFunction2"></a>

## ~~deprecatedFunction2()~~
***The method is deprecated just because.***

Deprecated with a comment.

**Kind**: global function  
<a name="notDeprecated"></a>

## notDeprecated()
A function that's not deprecated - for comparison.

**Kind**: global function  
<a name="create"></a>

## ~~create(options) ⇒ <code>Promise</code>~~
***Deprecated. Use `something.else` [version 1](http://www.google.com) instead.***

This method adds a thing to an organization by their usename.

**Kind**: global function  
**Summary**: Creates a new something for an organization  
**Access**: public  
**Fulfil**: <code>Object</code> - organization membership  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Some param text. |
| options.organization | <code>String</code> \| <code>Number</code> |  | Some param text. |
| options.username | <code>String</code> |  | Some param text. Some param text. |
| [options.roleName] | <code>String</code> | <code>&quot;member&quot;</code> | Some param text. Some param text. Some param text. |

**Example**  
```js
something.action({ organization: "myorg", username: "user123", roleName: "member" }).then(function(membership) {
 console.log(membership)
})
```
