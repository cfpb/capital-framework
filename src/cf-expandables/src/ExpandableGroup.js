/* ==========================================================================
   Expandable Organism
   ========================================================================== */

'use strict';

const domClassList = require( 'cf-atomic-component/src/utilities/dom-class-list' );
const addClass = domClassList.addClass;
const contains = domClassList.contains;
const removeClass = domClassList.removeClass;
const closest = require( 'cf-atomic-component/src/utilities/dom-closest' ).closest;
const Expandable = require( './Expandable' );
const ExpandableTransition = require( 'cf-atomic-component/src/utilities/transition/ExpandableTransition' );
const Events = require( 'cf-atomic-component/src/mixins/Events.js' );
const Organism = require( 'cf-atomic-component/src/components/Organism' );

const ExpandableGroup = Organism.extend( {
  ui: {
    base:    '.o-expandable-group__accordion',
    target:  '.o-expandable'
  },

  events: {
    'click .o-expandable-group__accordion .o-expandable_target': 'onToggleAccordion'
  },

  accordionEvent:  null,
  activeAccordion: false,
  expandables: [],

  initialize:        initialize,
  accordionClose:    accordionClose,
  onToggleAccordion: onToggleAccordion
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  let expandable;
  this.ui.target.forEach( expandableDom => {
    expandable = new Expandable( expandableDom );
    expandable.transition.addEventListener('transitionEnd', function(item) {
      console.log(item)
    } );
    this.expandables.push( expandable );
  } );
}

/**
 * Event handler for when an accordion is closed.
 */
function accordionClose() {
  if ( this.activeAccordion === true ) {
    this.activeAccordion = false;
    this.transition.collapse();
  }
}

/**
 * Event handler for when an expandable is clicked as part of an accordion.
 */
function onToggleAccordion() {
  Events.trigger( 'CFAccordionClose' );
  this.activeAccordion = true;
}

module.exports = ExpandableGroup;
