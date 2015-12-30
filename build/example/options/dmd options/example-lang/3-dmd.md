## Functions

<dl>
<dt><a href="#one">one()</a></dt>
<dd><p>A simple example with some code.. it will format using the language specified by <code>--example-lang</code></p>
</dd>
<dt><a href="#two">two()</a></dt>
<dd><p>An example that already contains a fenced-code block (language <code>json</code>)</p>
</dd>
<dt><a href="#three">three()</a></dt>
<dd><p>An example with no code, just text</p>
</dd>
<dt><a href="#four">four()</a></dt>
<dd><p>Another text example, using the <code>@lang off</code> sub-tag..</p>
</dd>
<dt><a href="#five">five()</a></dt>
<dd><p>A simple example using <code>@example @lang hbs</code> to specify handlebars as the language</p>
</dd>
</dl>

<a name="one"></a>
## one()
A simple example with some code.. it will format using the language specified by `--example-lang`

**Kind**: global function  
**Example**  
```js
var result = one()
```
<a name="two"></a>
## two()
An example that already contains a fenced-code block (language `json`)

**Kind**: global function  
**Example**  
here is the example:
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
This example is just some plain text, no code format or syntax highlighting required here.
```
<a name="four"></a>
## four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is just some plain text, no code format or syntax highlighting required here.
<a name="five"></a>
## five()
A simple example using `@example @lang hbs` to specify handlebars as the language

**Kind**: global function  
**Example**  
```hbs
hello {{name}}, welcome to {{country}}.
```
