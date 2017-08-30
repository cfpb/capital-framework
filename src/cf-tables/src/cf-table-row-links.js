
/* ==========================================================================
   Table Row Links

   Mixin for adding row link click functionality to table organism.

   ========================================================================== */

'use strict';

var closest = require( 'atomic-component/src/utilities/dom-closest' ).closest;

var TableRowLinks = {

  events: {
    'click tbody tr': 'onRowLinkClick'
  },

  ui: {
    base: '.o-table__row-links'
  },

  /**
   * Handle a click of the table.
   *
   * @param {Object} event Mouse event for click on the table.
   */
  onRowLinkClick: function( event ) {
    var target = event.target;
    if( target && target.tagName === 'A' ) {
      return
    }
    target = closest( event.target, 'tr' );
    var link = target.querySelector( 'a' );
    if( link ) window.location = link.getAttribute( 'href' );
  }
};

module.exports = TableRowLinks;
