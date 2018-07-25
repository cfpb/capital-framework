/* ==========================================================================
   Table initialization code.
   ========================================================================== */


const Table = require( './Table' );

// TODO: Don't init within cf-tables, init where cf-tables is used
const components = Table.init();

module.exports = {
  components
};
