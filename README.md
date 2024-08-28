# testbed

A collection of jsdoc examples to test your changes on.

1. Make changes to dmd, jsdoc-parse, whatever
1. Checkout https://github.com/jsdoc2md/testbed
1. In the testbed project folder run `npm install`
1. Replace the relevant packages with your local projects
    1. Run `npm link /path/to/your/dmd/fork`
    1. `npm link` jsdoc-api and/or jsdoc-to-markdown if you made changes there too.
1. Run `node bin/cli.mjs`. This runs jsdoc2md against all the test fixtures in the `build` directory.
1. Run `git status`.
    1. git status shows no changes
        1. Well done, your local changes didn't break the jsdoc2md output!
    1. git status shows changes
        1. You broke something. If that was not intentional, fix the issue in your dmd fork and return to step 5.

## Verify

All output produced by jsdoc2md needs to be verified as correct on these platforms:

1. github.com
2. npmjs.org
