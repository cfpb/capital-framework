/* ==========================================================================
   Function bind

   Contains code copied from the following with minimal modifications:

   - https://raw.githubusercontent.com/Modernizr/Modernizr/
     74655c45ad2cd05c002e4802cdd74cba70310f08/src/fnBind.js

   ========================================================================== */

'use strict';

/**
 * Function.prototype.bind polyfill.
 *
 * @access private
 * @function bind
 * @param {Function} fn - A function you want to change `this` reference to.
 * @param {Object} context - The `this` you want to call the function with.
 * @returns {Function} The wrapped version of the supplied function.
 */
function bind( fn, context ) {
  if ( Function.prototype.bind ) {
    return fn.bind.apply( fn, Array.prototype.slice.call( arguments, 1 ) );
  }

  return function() {
    return fn.apply( context, arguments );
  };
}

// Expose public methods.
module.exports = {
  bind: bind
};
