/** @license Apache-2.0 */

'use strict';

/**
* The minimum biased base 2 exponent for a normal single-precision floating-point number.
*
* @module @stdlib/constants-float32-min-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT32_MIN_BASE2_EXPONENT = require( '@stdlib/constants-float32-min-base2-exponent' );
* // returns -126
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a normal single-precision floating-point number.
*
* ```text
* 1 - BIAS = -126
* ```
*
* where `BIAS = 127`.
*
* @constant
* @type {integer32}
* @default -126
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_BASE2_EXPONENT = -126|0; // eslint-disable-line id-length


// EXPORTS //

module.exports = FLOAT32_MIN_BASE2_EXPONENT;
