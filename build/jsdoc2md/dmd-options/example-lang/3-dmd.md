***note:*** I can't show the source code and dmd output in this example, because nested fenced-code blocks [do not render correctly](https://github.com/vmg/redcarpet/issues/208).. 

# jsdoc-parse output
```json
[
  {
    "id": "one",
    "longname": "one",
    "name": "one",
    "kind": "function",
    "scope": "global",
    "description": "A simple example with some code.. it will format using the language specified by `--example-lang`",
    "params": [],
    "examples": [
      "var result = one()"
    ],
    "meta": {
      "lineno": 6,
      "filename": "0-src.js",
      "path": "/Users/lloyd/Documents/jsdoc2md/testbed/build/jsdoc2md/dmd-options/example-lang"
    },
    "order": 0
  },
  {
    "id": "two",
    "longname": "two",
    "name": "two",
    "kind": "function",
    "scope": "global",
    "description": "An example that already contains a fenced-code block (language `json`)",
    "params": [],
    "examples": [
      "here is the example:\n```json\n{\n    \"clive\": \"yeah?\"\n}\n```"
    ],
    "meta": {
      "lineno": 18,
      "filename": "0-src.js",
      "path": "/Users/lloyd/Documents/jsdoc2md/testbed/build/jsdoc2md/dmd-options/example-lang"
    },
    "order": 1
  },
  {
    "id": "three",
    "longname": "three",
    "name": "three",
    "kind": "function",
    "scope": "global",
    "description": "An example with no code, just text",
    "params": [],
    "examples": [
      "This example is just some plain text, no code format or syntax highlighting required here."
    ],
    "meta": {
      "lineno": 25,
      "filename": "0-src.js",
      "path": "/Users/lloyd/Documents/jsdoc2md/testbed/build/jsdoc2md/dmd-options/example-lang"
    },
    "order": 2
  },
  {
    "id": "four",
    "longname": "four",
    "name": "four",
    "kind": "function",
    "scope": "global",
    "description": "Another text example, using the `@lang off` sub-tag..",
    "params": [],
    "examples": [
      "@lang off\nThis example is just some plain text, no code format or syntax highlighting required here."
    ],
    "meta": {
      "lineno": 32,
      "filename": "0-src.js",
      "path": "/Users/lloyd/Documents/jsdoc2md/testbed/build/jsdoc2md/dmd-options/example-lang"
    },
    "order": 3
  },
  {
    "id": "five",
    "longname": "five",
    "name": "five",
    "kind": "function",
    "scope": "global",
    "description": "A simple example using `@example @lang hbs` to specify handlebars as the language",
    "params": [],
    "examples": [
      "@lang hbs\nhello {{name}}, welcome to {{country}}."
    ],
    "meta": {
      "lineno": 39,
      "filename": "0-src.js",
      "path": "/Users/lloyd/Documents/jsdoc2md/testbed/build/jsdoc2md/dmd-options/example-lang"
    },
    "order": 4
  }
]
```

# with `--example-lang js` set
## rendered
<a name="one"></a>

### one()
A simple example with some code.. it will format using the language specified by `--example-lang`

**Kind**: global function  
**Example**  
```js
var result = one()
```
<a name="two"></a>

### two()
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

### three()
An example with no code, just text

**Kind**: global function  
**Example**  
```js
This example is just some plain text, no code format or syntax highlighting required here.
```
<a name="four"></a>

### four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is just some plain text, no code format or syntax highlighting required here.
<a name="five"></a>

### five()
A simple example using `@example @lang hbs` to specify handlebars as the language

**Kind**: global function  
**Example**  
```hbs
hello {{name}}, welcome to {{country}}.
```

# with `--example-lang none` set
## rendered
<a name="one"></a>

### one()
A simple example with some code.. it will format using the language specified by `--example-lang`

**Kind**: global function  
**Example**  
```none
var result = one()
```
<a name="two"></a>

### two()
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

### three()
An example with no code, just text

**Kind**: global function  
**Example**  
```none
This example is just some plain text, no code format or syntax highlighting required here.
```
<a name="four"></a>

### four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is just some plain text, no code format or syntax highlighting required here.
<a name="five"></a>

### five()
A simple example using `@example @lang hbs` to specify handlebars as the language

**Kind**: global function  
**Example**  
```hbs
hello {{name}}, welcome to {{country}}.
```
