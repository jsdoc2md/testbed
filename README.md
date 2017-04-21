[![view on npm](http://img.shields.io/npm/v/testbed.svg)](https://www.npmjs.org/package/testbed)
[![npm module downloads](http://img.shields.io/npm/dt/testbed.svg)](https://www.npmjs.org/package/testbed)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# testbed

A collection of jsdoc2md test fixtures.

1. Hack on your dmd fork.
1. Checkout https://github.com/jsdoc2md/testbed
1. In the testbed project folder run `npm install`
1. Run `npm link /path/to/your/dmd/fork`
1. Run `node bin/cli.js --v1`. This runs jsdoc2md against all the test fixtures in the `build` directory.
1. Run `git status`.
    1. git status shows no changes
        1. Well done, you didn't break the jsdoc2md output!
    1. git status shows changes
        1. You broke something. If that was not intentional, fix the issue in your dmd fork and return to step 5.

