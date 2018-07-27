/* ==========================================================================
   Expandable Organism
   ========================================================================== */
// polyfill for ie9 compatibility
require( 'classlist-polyfill' );

const domClassList = require(
  'cf-atomic-component/src/utilities/dom-class-list'
);
const addClass = domClassList.addClass;
const contains = domClassList.contains;
const removeClass = domClassList.removeClass;
const closest = require(
  'cf-atomic-component/src/utilities/dom-closest'
).closest;
const Events = require( 'cf-atomic-component/src/mixins/Events.js' );
const Organism = require( 'cf-atomic-component/src/components/Organism' );
const ExpandableTransition = require( './ExpandableTransition' );

const Expandable = Organism.extend( {
  ui: {
    base:    '.o-expandable',
    target:  '.o-expandable_target',
    content: '.o-expandable_content',
    header:  '.o-expandable_header'
  },

  classes: {
    targetExpanded:  'o-expandable_target__expanded',
    targetCollapsed: 'o-expandable_target__collapsed',
    group:           'o-expandable-group',
    groupAccordion:  'o-expandable-group__accordion'
  },

  events: {
    'click .o-expandable_target': 'expandableClickHandler'
  },

  transition:       null,
  isAccordionGroup: false,
  activeAccordion:  false,

  initialize:             initialize,
  expandableClickHandler: expandableClickHandler,
  toggleTargetState:      toggleTargetState
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  const transition = new ExpandableTransition(
    this.ui.content
  );
  this.transition = transition.init();

  if ( contains( this.ui.content, ExpandableTransition.CLASSES.EXPANDED ) ) {
    addClass( this.ui.target, this.classes.targetExpanded );
  } else {
    addClass( this.ui.target, this.classes.targetCollapsed );
  }

  const expandableGroup = closest(
    this.ui.target, '.' + this.classes.group
  );

  this.isAccordionGroup = expandableGroup !== null &&
    contains( expandableGroup, this.classes.groupAccordion );

  if ( this.isAccordionGroup ) {
    Events.on(
      'accordionActivated',
      _accordionActivatedHandler.bind( this )
    );
  }
}

/**
 * Event handler for when an accordion is activated
 */
function _accordionActivatedHandler() {
  if ( this.activeAccordion ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
    this.activeAccordion = false;
  }
}

/**
 * Event handler for when an expandable is clicked.
 */
function expandableClickHandler() {
  this.transition.toggleExpandable();
  this.toggleTargetState( this.ui.target );

  if ( this.isAccordionGroup ) {
    if ( this.activeAccordion ) {
      this.activeAccordion = false;
    } else {
      Events.trigger( 'accordionActivated', { target: this } );
      this.activeAccordion = true;
    }
  }
}

/**
 * Toggle an expandable to open or closed.
 * @param {HTMLNode} element - The expandable target HTML DOM element.
 */
function toggleTargetState( element ) {
  if ( contains( element, this.classes.targetExpanded ) ) {
    addClass( this.ui.target, this.classes.targetCollapsed );
    removeClass( this.ui.target, this.classes.targetExpanded );
  } else {
    addClass( this.ui.target, this.classes.targetExpanded );
    removeClass( this.ui.target, this.classes.targetCollapsed );
  }
}

module.exports = Expandable;
