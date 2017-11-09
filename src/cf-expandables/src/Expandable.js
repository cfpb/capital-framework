/* ==========================================================================
   Expandable Organism
   ========================================================================== */

'use strict';

const domClassList = require( 'cf-atomic-component/src/utilities/dom-class-list' );
const addClass = domClassList.addClass;
const contains = domClassList.contains;
const removeClass = domClassList.removeClass;
const ExpandableTransition = require( 'cf-atomic-component/src/utilities/transition/ExpandableTransition' );
const Organism = require( 'cf-atomic-component/src/components/Organism' );

const Expandable = Organism.extend( {
  ui: {
    base:    '.o-expandable',
    target:  '.o-expandable_target',
    content: '.o-expandable_content',
    header:  '.o-expandable_header'
  },

  classes: {
    targetExpanded:  'o-expandable_target__expanded',
    targetCollapsed: 'o-expandable_target__collapsed'
  },

  events: {
    'click .o-expandable_target': 'onExpandableClick'
  },

  transition:      null,

  initialize:        initialize,
  onExpandableClick: onExpandableClick,
  toggleTargetState: toggleTargetState
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  const customClasses = {
    BASE_CLASS:   'o-expandable_content__transition',
    EXPANDED:     'o-expandable_content__expanded',
    COLLAPSED:    'o-expandable_content__collapsed',
    OPEN_DEFAULT: 'o-expandable_content__onload-open'
  };

  const transition = new ExpandableTransition( this.ui.content, customClasses );
  this.transition = transition.init();

  if ( contains( this.ui.content, customClasses.OPEN_DEFAULT ) ) {
    addClass( this.ui.target, this.classes.targetExpanded );
  } else {
    addClass( this.ui.target, this.classes.targetCollapsed );
  }
}

/**
 * Event handler for when an expandable is clicked.
 */
function onExpandableClick() {
  this.transition.toggleExpandable();
  this.toggleTargetState( this.ui.target );
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
