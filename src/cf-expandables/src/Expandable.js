/* ==========================================================================
   Expandable Organism
   ========================================================================== */

'use strict';

var contains = require( 'atomic-component/src/utilities/dom-class-list' ).contains;
var addClass = require( 'atomic-component/src/utilities/dom-class-list' ).addClass;
var closest = require( 'atomic-component/src/utilities/dom-closest' ).closest;
var bind = require( 'atomic-component/src/utilities/function-bind' ).bind;
var removeClass = require( 'atomic-component/src/utilities/dom-class-list' ).removeClass;
var ExpandableTransition = require( 'atomic-component/src/utilities/transition/ExpandableTransition' );
var Events = require( 'atomic-component/src/mixins/Events.js' );
var config = require( 'atomic-component/src/utilities/config' );
var Organism = require( 'atomic-component/src/components/Organism' );

var ExpandableOrganism = Organism.extend( {

  transition: null,
  accordionEvent: null,
  activeAccordion: false,
  classes: {
    targetExpanded: 'o-expandable_target__expanded',
    targetCollapsed: 'o-expandable_target__collapsed',
    groupAccordion: 'o-expandable-group__accordion',
  },

  events: {
    'click .o-expandable_target': 'onExpandableClick',
    'click .o-expandable-group__accordion .o-expandable_target': 'onToggleAccordion'
  },

  ui: {
    base: '.o-expandable',
    target: '.o-expandable_target',
    content: '.o-expandable_content',
    header: '.o-expandable_header'
  },

  initialize: function() {
    var customClasses = {
      BASE_CLASS:   'o-expandable_content__transition',
      EXPANDED:     'o-expandable_content__expanded',
      COLLAPSED:    'o-expandable_content__collapsed',
      OPEN_DEFAULT: 'o-expandable_content__onload-open'
    };

    this.transition = new ExpandableTransition( this.ui.content, customClasses ).init();

    var groupElement = closest( this.ui.target, '.' + this.classes.groupAccordion );
    if ( groupElement !== null ) {
      var fn = this.accordionClose.bind( this );
      Events.on( 'CFAccordionClose', fn );
    }
    
    if ( contains( this.ui.content, customClasses.OPEN_DEFAULT ) ) {
      addClass( this.ui.target, this.classes.targetExpanded );
    } else {
      addClass( this.ui.target, this.classes.targetCollapsed );
    }
  },

  accordionClose: function() {
    if ( this.activeAccordion === true ) {
      this.activeAccordion = false;
      this.transition.collapse();
    }
  },

  onExpandableClick: function( event ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
  },

  onToggleAccordion: function( event ) {
    var group = closest( this.ui.target, '.' + this.classes.groupAccordion );
    Events.trigger( 'CFAccordionClose' );
    this.activeAccordion = true;
  },

  toggleTargetState: function( element ) {
    if ( contains( element, this.classes.targetExpanded ) ) {
      addClass( this.ui.target, this.classes.targetCollapsed );
      removeClass( this.ui.target, this.classes.targetExpanded );
    } else {
      addClass( this.ui.target, this.classes.targetExpanded );
      removeClass( this.ui.target, this.classes.targetCollapsed );
    }
  }

} );

module.exports = ExpandableOrganism;