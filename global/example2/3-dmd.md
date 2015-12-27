## Functions

<dl>
<dt><a href="#one">one()</a></dt>
<dd><p>A simple example written in the default <code>--example-lang</code> (javascript)</p>
</dd>
<dt><a href="#two">two()</a></dt>
<dd><p>An example written in a different lang to the default (json)</p>
</dd>
<dt><a href="#three">three()</a></dt>
<dd><p>An example with no code, just text</p>
</dd>
<dt><a href="#four">four()</a></dt>
<dd><p>Another text example, using the <code>@lang off</code> sub-tag..</p>
</dd>
<dt><a href="#five">five()</a></dt>
<dd><p>An example with text and code, with no fenced-code blocks</p>
</dd>
<dt><a href="#six">six()</a></dt>
<dd><p>An example with text and code, with fenced-code block and no lang set</p>
</dd>
<dt><a href="#seven">seven()</a></dt>
<dd><p>An example with text and code, with fenced-code block and <code>js</code> lang set</p>
</dd>
<dt><a href="#eight">eight()</a></dt>
<dd><p>An example with text and code, with fenced-code block and <code>json</code> lang set</p>
</dd>
</dl>

<a name="one"></a>
## one()
A simple example written in the default `--example-lang` (javascript)

**Kind**: global function  
**Example**  
```js
var result = one()
```
<a name="two"></a>
## two()
An example written in a different lang to the default (json)

**Kind**: global function  
**Example**  
```json
{
    "clive": "yeah?"
}
```
<a name="three"></a>
## three()
An example with no code, just text

**Kind**: global function  
**Example**  
```js
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether the example text is, or is not source code.
```
<a name="four"></a>
## four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is plain text but it has not been formatted using the default 
`--example-lang` of javascript because the `@example @lang off` was used..
<a name="five"></a>
## five()
An example with text and code, with no fenced-code blocks

**Kind**: global function  
**Example**  
```js
Here, i introduce the example: 

var result = five()
```
<a name="six"></a>
## six()
An example with text and code, with fenced-code block and no lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```
var result = six()
```
<a name="seven"></a>
## seven()
An example with text and code, with fenced-code block and `js` lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```js
var result = seven()
```
<a name="eight"></a>
## eight()
An example with text and code, with fenced-code block and `json` lang set

**Kind**: global function  
**Example**  
this function returns data like:

```json
{
    "yeah": "gets?"
}
```
