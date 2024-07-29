<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# anyBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one element in an array passes a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import anyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-any-by@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-any-by/tags). For example,

```javascript
import anyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-any-by@v0.2.2-deno/mod.js';
```

#### anyBy( x, predicate\[, thisArg] )

Tests whether at least one element in an array passes a test implemented by a `predicate` function.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 0, 0, 1, 0 ];

var bool = anyBy( x, isPositive );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ -1, -2, -3, -4 ];

var bool = anyBy( x, isPositive );
// returns false
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
function predicate( value ) {
    this.count += 1;
    return ( value > 0 );
}

var x = [ -1, -2, 3, -4 ];

var context = {
    'count': 0
};

var bool = anyBy( x, predicate, context );
// returns true

var cnt = context.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `some` method (**as defined by the ECMAScript Standard**), the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.some( predicate, thisArg )
    ```

-   If provided an array-like object without a `some` method, the function performs a linear scan and returns immediately upon encountering a truthy return value. Unlike [`Array.prototype.some`][mdn-array-some], when performing a linear scan, the function does **not** skip `undefined` elements.

-   If provided an empty array, the function returns `false`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
var isPositiveInteger = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer' ).isPrimitive;
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import anyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-any-by@deno/mod.js';

var x = bernoulli( 10, 0.1, {
    'dtype': 'int8'
});
// returns <Int8Array>

var out = anyBy( x, naryFunction( isPositiveInteger, 1 ) );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-any-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-any-by

[test-image]: https://github.com/stdlib-js/array-base-any-by/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-base-any-by/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-any-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-any-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-any-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-any-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-any-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-any-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-any-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-any-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-any-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-any-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-any-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-any-by/main/LICENSE

[mdn-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

</section>

<!-- /.links -->
