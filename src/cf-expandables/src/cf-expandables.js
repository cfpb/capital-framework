/* ==========================================================================
   Expandable Organism
   ========================================================================== */

'use strict';

var config = require( 'atomic-component/src/utilities/config' );
var Organism = require( 'atomic-component/src/components/Organism' );
var ToggleExpandable = require( './cf-expandables-toggle' );

var ExpandableOrganism = Organism.extend( {

  ui: {
    base: '.o-expandable'
  },

  modifiers: [ToggleExpandable]

} );

ExpandableOrganism.init();

module.exports = ExpandableOrganism;
