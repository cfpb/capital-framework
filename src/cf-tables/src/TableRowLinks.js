/* ==========================================================================
   Table Row Links

   Mixin for adding row link click functionality to table organism.
   ========================================================================== */

'use strict';

const closest = require( 'atomic-component/src/utilities/dom-closest' ).closest;

const TableRowLinks = {

  events: {
    'click tbody tr': 'onRowLinkClick'
  },

  ui: {
    base: '.o-table__row-links'
  },

  onRowLinkClick: onRowLinkClick
};

/**
 * Handle a click of the table.
 *
 * @param {MouseEvent} event - Event object for click on the table.
 */
function onRowLinkClick( event ) {
  let target = event.target;

  if ( target && target.tagName === 'A' ) {
    return;
  }

  target = closest( event.target, 'tr' );
  const link = target.querySelector( 'a' );

  if ( link ) window.location = link.getAttribute( 'href' );
}

module.exports = TableRowLinks;
