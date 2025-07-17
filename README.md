# testbed

A large collection of jsdoc use cases to test your changes on. The general idea is, after you have made changes to the jsdoc2md code or template, run the build script in this project to generate output for dozens of jsdoc use cases. If there are differences, you have broken something (either intentionally or not).

## General workflow

1. Make code/template changes to dmd, jsdoc-parse, whatever
1. Checkout https://github.com/jsdoc2md/testbed
1. In the testbed project folder run `npm install`
1. Examine the dep tree (`npm ls`) then link in the relevant local projects where you made changes
    1. Run `npm link ../dmd/`
    1. `npm link` jsdoc-api and/or jsdoc-to-markdown if you made changes there too.
    1. Now your testbed points to your modified code
1. Run `npm test`. This runs jsdoc2md against all the test fixtures recursively in the `build` directory.
1. Run `git status`.
    1. git status shows no changes
        1. Well done, your local changes didn't break the jsdoc2md output!
    1. git status shows changes
        1. You broke something. If that was not intentional, fix the issue in your dmd fork and return to step 5. If it was intentional, then submit a PR adding your new test case to the testbed project.

## Verify

All output produced by jsdoc2md needs to be verified as correct on these platforms at the minimum:

1. github.com
2. npmjs.org
