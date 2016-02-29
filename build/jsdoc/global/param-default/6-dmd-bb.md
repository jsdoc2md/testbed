## paramDefaults([option])
Lots of params with default values.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [option] | object |  |  |
| [option.one] | number | `1` | [option.one=1] |
| [option.one] | string | `"\"1\""` | [option.one="1"] |
| [option.one] | string | `1` | [option.one=1] |
| [option.flag] | boolean | `true` | [option.flag=true] |
| [option.func] |  | `function()` | {function} - [option.func=function(){}] |
| [option.func] | function | `function(){}` | [option.func=function(){}] |
| [option.func] | function ⎮ string | `function(){}` | [option.func=function(){}] |
| [option.func] | string ⎮ function | `"function(){}"` | [option.func=function(){}] |
| [option.one] | RegExp | `/regex/` | [option.one=/regex/] |
| [option.arr] | Array | `[ 1, 2, 3 ]` | [option.arr=[ 1, 2, 3 ]] |
| [option.arr] | string ⎮ Array | `"[ 1, 2, 3 ]"` | [option.arr=[ 1, 2, 3 ]] |
| [option.arr] | Array ⎮ string | `[ 1, 2, 3 ]` | [option.arr=[ 1, 2, 3 ]] |
| [option.generator] | generator | `*function(){}` | [option.generator=*function(){}] |
| [option.binary] | binary | `0b11` | [option.binary=0b11] |
| [option.octal] | octal | `0o440` | [option.octal=0o440] |
| [option.hex] | hex | `0xFF` | [option.hex=0xFF] |
| [option.template] | template | ``test`` | [option.template=`test`] |
| [option.whitespace] | string | `"\"  \""` | [option.whitespace="  "] |
| [option.null] | null | `` | [option.null=null] |

