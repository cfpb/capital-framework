/* ==========================================================================
   Atomic configurations and constants

   ========================================================================== */

'use strict';

// Bit values intended to be used for bit inversion.
const DIRECTIONS = {
  UP: 0,
  RIGHT: 1,
  DOWN: -1,
  LEFT: -2
};

// Atomic component types used for describing component hierarchy.
const TYPES = {
  PAGE: 1,
  TEMPLATE: 2,
  ORGANISM: 3,
  MOLECULE: 4,
  ATOM: 5
};

// Atomic Prefixes used for standardizing naming conventions
// across HTML, CSS, and Javascript.
const PREFIXES = {
  PAGE: 'p-',
  TEMPLATE: 't-',
  ORGANISM: 'o-',
  MOLECULE: 'm-',
  ATOM: 'a-'
};

/**
 * Function used as a non-operational method that
 * is intended to be overriden.
 *
 * @returns {undefined}.
 */
function NO_OP_FUNCTION() { return; }

let UNDEFINED;

module.exports = {
  DIRECTIONS: DIRECTIONS,
  NO_OP_FUNCTION: NO_OP_FUNCTION,
  PREFIXES: PREFIXES,
  TYPES: TYPES,
  UNDEFINED: UNDEFINED
};
