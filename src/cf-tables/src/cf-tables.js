
/* ==========================================================================
   TableOrganism

   ========================================================================== */

'use strict';

var config = require( 'atomic-component/src/utilities/config' );
var Organism = require( 'atomic-component/src/components/Organism' );
var TableSortable = require( './cf-table-sortable' );
var TableRowLinks = require( './cf-table-row-links' );

var TableOrganism = Organism.extend( {

  ui: {
    base: '.o-table'
  },

  modifiers: [TableSortable, TableRowLinks]

} );

TableOrganism.constants.DIRECTIONS = config.DIRECTIONS;

TableOrganism.init();

module.exports = TableOrganism;
