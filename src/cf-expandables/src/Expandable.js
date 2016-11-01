/* ==========================================================================
   Expandable Organism
   ========================================================================== */

'use strict';

var config = require( 'atomic-component/src/utilities/config' );
var ToggleExpandable = require( './ExpandableToggle' );
var Organism = require( 'atomic-component/src/components/Organism' );

var ExpandableOrganism = Organism.extend( {

  ui: {
    base: '.o-expandable'
  },

  modifiers: [ToggleExpandable]

} );

module.exports = ExpandableOrganism;