/* ==========================================================================
   Table Organism
   ========================================================================== */

'use strict';

const config = require( 'atomic-component/src/utilities/config' );
const Organism = require( 'atomic-component/src/components/Organism' );
const TableSortable = require( './TableSortable' );
const TableRowLinks = require( './TableRowLinks' );

const TableOrganism = Organism.extend( {

  ui: {
    base: '.o-table'
  },

  modifiers: [ TableSortable, TableRowLinks ]

} );

TableOrganism.constants.DIRECTIONS = config.DIRECTIONS;

module.exports = TableOrganism;
