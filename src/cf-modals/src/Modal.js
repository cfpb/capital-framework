/* ==========================================================================
   Modal Organism
   ========================================================================== */

'use strict';

const Organism = require( 'atomic-component/src/components/Organism' );

const ModalOrganism = Organism.extend( {

  insideClicked: false,

  classes: {
    isVisible: 'o-modal__visible'
  },

  events: {
    'click .o-modal_close':    'onModalCloseClick',
    'click .o-modal_backdrop': 'onModalCloseClick',
    'click .o-modal_offset':   'onModalCloseClick',
    'click .o-modal_inner':    'onModalPreventHide',
    'keydown document.body':   'onBodyKeyPressed'
  },

  ui: {
    base: '.o-modal'
  },

  initialize: initialize,

  onModalCloseClick:  onModalCloseClick,
  onModalPreventHide: onModalPreventHide
} );

/**
 * Run this once when the component is initialized.
 */
function initialize() {
  // TODO: Fix line is temporary till AtomicComponent sets this.ui.base
  //       to equal this.element.
  this.ui.base = this.element;
}

function onBodyKeyPressed( evt ) {
  console.log(evt);
}

/**
 * Handle a click to close the modal.
 * Applied to the modal close button, backdrop, and offset.
 */
function onModalCloseClick() {

  if ( this.insideClicked === false) {
    this.removeClass( this.ui.base, this.classes.isVisible );
  }
  this.insideClicked = false;
}

/**
 * Set a flag that the inside of the modal was clicked so that we can
 * prevent closing the modal when the onModalCloseClick event also fires for a
 * click on `o-modal_offset`.
 */
function onModalPreventHide() {
  this.insideClicked = true;
}

module.exports = ModalOrganism;
