## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

${
  Array.from(docs).reduce((prev, curr) => prev + '\n\n-\n\n' + curr.index())
}

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
