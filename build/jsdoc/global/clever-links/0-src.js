/**
 * `@link` tag behaviour with `--clever-links` enabled.
 *
 * - link: {@link https://www.example.com}.
 * - linkcode: {@linkcode https://www.example.com}.
 * - linkplain: {@linkplain https://www.example.com}.
 *
 * Link to a function:
 * - link: {@link anotherFn}
 * - linkcode: {@linkcode anotherFn}
 * - linkplain: {@linkplain anotherFn}
 *
 * @see {@link https://github.com/jsdoc2md/dmd/pull/86|This PR}
 */
function cleverLinks () {}

/**
 * Another function being linked to.
 */
function anotherFn () {}

