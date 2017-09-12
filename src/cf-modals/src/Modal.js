/* ==========================================================================
   Modal Organism
   ========================================================================== */

'use strict';

const bind = require( 'atomic-component/src/utilities/function-bind' ).bind;
const UNDEFINED = require( 'atomic-component/src/utilities/config' ).UNDEFINED;
const Organism = require( 'atomic-component/src/components/Organism' );

const ModalOrganism = Organism.extend( {

  isAlertModal: false,

  firstFocusElm: null,

  classes: {
    isVisible: 'o-modal__visible'
  },

  events: {
    'click .o-modal': 'onModalClick'
  },

  ui: {
    base:         '.o-modal',
    backdrop:     '.o-modal_backdrop',
    container:    '.o-modal_container',
    closeButton:  '.o-modal_close',
    body:         '.o-modal_body',
    footerSubmit: '.o-modal_footer submit',
    footerButton: '.o-modal_footer button'
  },

  initialize: initialize,

  onModalClick:  onModalClick,

  onWindowKeyPressed: null,

  show: show,
  hide: hide
} );

/**
 * Run this once when the component is initialized.
 */
function initialize() {
  // TODO: Fix line is temporary till AtomicComponent sets this.ui.base
  //       to equal this.element.
  this.ui.base = this.element;

  // Bind the event handler function for the window to this modal.
  this.onWindowKeyPressed = bind( _onWindowKeyPressed, this );

  // Check the dialog role (either 'dialog' or 'alertdialog').
  // Set it to 'dialog' if the role is not found.
  const role = this.ui.base.getAttribute( 'role' );
  if ( role === UNDEFINED ) {
    this.ui.base.setAttribute( 'role', 'dialog' );
  } else if ( role === 'alertdialog' ) {
    this.isAlertModal = true;
    this.firstFocusElm = _getFirstFocusElm( this.ui.body,
                                            this.ui.footerSubmit,
                                            this.ui.footerButton,
                                            this.ui.closeButton );
  }

  // If the `o-modal__visible` class is present, initialize `show` modal state.
  if ( this.contains( this.ui.base, this.classes.isVisible ) ) {
    this.show();
  }
}

/**
 * Handle a click of the modal to see if something that should close the modal
 * was clicked.
 * @param  {MouseEvent} evt - The mouse event object with the event target.
 */
function onModalClick( evt ) {
  const target = evt.target;
  const hideTargets = [
    this.ui.container,
    this.ui.backdrop,
    this.ui.closeButton,
    this.ui.footerSubmit,
    this.ui.footerButton
  ];

  if ( hideTargets.indexOf( target ) !== -1 ) {
    this.hide();
  }

  // If anything but the submit button is trying to close the model,
  // prevent the default behavior.
  if ( target !== this.ui.footerSubmit ) {
    evt.preventDefault();
  }
}

/**
 * Perform JavaScript initialization to show the modal.
 */
function show() {
  this.ui.base.setAttribute( 'aria-hidden', 'false' );

  // Focus the first user actionable element if this is an alert modal.
  if ( this.isAlertModal ) {
    this.firstFocusElm.focus();
  }

  window.addEventListener( 'keyup', this.onWindowKeyPressed );
}

/**
 * Perform JavaScript cleanup to hide the modal.
 */
function hide() {
  this.ui.base.setAttribute( 'aria-hidden', 'true' );
  this.removeClass( this.ui.base, this.classes.isVisible );
  window.removeEventListener( 'keyup', this.onWindowKeyPressed );
}

/**
 * Event handler for key presses.
 * @param {KeyboardEvent} evt - The keyboard event object with the keyCode.
 */
function _onWindowKeyPressed( evt ) {
  // Escape key was pressed, close the modal.
  if ( evt.keyCode === 27 ) {
    this.hide();
  }
}

/**
 * Retrieve the first element within a modal that should receive focus.
 * This should be the first `<input>` if one is present. If not,
 * it should be the first `<button>`. If neither of those are found,
 * the modal's close button is returned.
 * @param {HTMLNode} body - The modals `o-modal_body`.
 * @param {HTMLNode} footerSubmit -
 *   The first submit button in the modal's `o-modal_footer`.
 * @param {HTMLNode} footerButton -
 *   The first button in the modal's `o-modal_footer`.
 * @param {HTMLNode} closeButton - The modal's `o-modal_close` button.
 * @returns {HTMNLNode} The element to focus when the modal opens.
 */
function _getFirstFocusElm( body, footerSubmit, footerButton, closeButton ) {

  if ( body === null || closeButton === null) {
    const msg = 'Modals must have a body (o-modal_body)! ' +
                'and a close button (o-modal_close)'
    throw new Error( msg );
  }

  // This will get focus first when the modal opens.
  // Check for the first <input> within the body.
  let firstFocusElm;

  // Check for the first of an <input>, <submit>, <button>, and close button.
  const focusElms = [
    body.querySelector( 'input' ), footerSubmit, footerButton, closeButton
  ];

  for ( let i = 0, len = focusElms.length; i < len; i++ ) {
    firstFocusElm = focusElms[i];
    if ( firstFocusElm !== null ) {
      break;
    }
  }

  return firstFocusElm;
}

module.exports = ModalOrganism;
