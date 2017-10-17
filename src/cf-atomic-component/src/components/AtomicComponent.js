/* ==========================================================================
   AtomicComponent

   Base Atomic Component

   Contains code copied from the following with major modifications :

   - Backbone.js ( http://backbonejs.org/docs/backbone.html ).
   - Marionette ( http://marionettejs.com/ ).

   ========================================================================== */

'use strict';

const assign = require( '../utilities/object-assign' ).assign;
const bind = require( '../utilities/function-bind' ).bind;
const classList = require( '../utilities/dom-class-list' );
const Delegate = require( 'dom-delegate' ).Delegate;
const Events = require( '../mixins/Events' );
const isFunction = require( '../utilities/type-checkers' ).isFunction;


/**
 * Function as the constrcutor for the AtomicComponent.
 * Sets up initial instance properties and calls
 * necessary methods to properly instantiatie component.
 *
 * @param {HTMLElement} element - The element to set as the base element.
 * @param {Object} attributes -  Hash of attributes to set on base element.
 */
function AtomicComponent( element, attributes ) {
  this.element = element;
  this.initializers = [];
  this.uId = this.uniqueId( 'ac' );
  assign( this, attributes );
  this.processModifiers();
  this.ensureElement();
  this.setCachedElements();
  this.initializers.push( this.initialize );
  this.initializers.forEach( function( func ) {
    if ( isFunction( func ) ) func.apply( this, arguments );
  }, this );
  this.trigger( 'component:initialized' );
}

// Public instance Methods and properties.
assign( AtomicComponent.prototype, Events, classList, {

  tagName: 'div',

  /**
   * Function used to process class modifiers. These should
   * correspond with BEM modifiers.
   *
   * @param {Object} attributes -  Hash of attributes to set on base element.
   * @param {Object} atomicComponent -  Base component.
   */
  processModifiers: function() {
    if ( !this.modifiers ) {
      return;
    }

    this.modifiers.forEach( function( modifier ) {
      if ( classList.contains( this.element, modifier.ui.base ) ) {
        if ( modifier.initialize ) {
          this.initializers.push( modifier.initialize );
          delete modifier.initialize;
        }
        assign( this, modifier );
      }
    }, this );
  },

  /**
   * Function used to render a template in Single Page Applications.
   *
   * @returns {AtomicComponent} An instance.
   */
  render: function() {
    return this;
  },

  /**
   * Function used to ensure and set / create the base DOM element.
   */
  ensureElement: function() {
    if ( !this.element ) { // eslint-disable-line no-negated-condition, inline-comments, max-len
      var attrs = assign( {}, this.attributes );
      attrs.id = this.id || this.u_id;
      if ( this.className ) attrs['class'] = this.className;
      this.setElement( document.createElement( this.tagName ) );
      this.setElementAttributes( attrs );
    } else {
      this.setElement( this.element );
    }
    this.element.setAttribute( 'data-bound', true );
  },

  /**
   * Function used to set the base DOM element.
   *
   * @param {HTMLElement} element - The element to set as the base element.
   * @returns {AtomicComponent} An instance.
   */
  setElement: function( element ) {
    if ( this.element ) {
      this.undelegateEvents();
    }
    this.element = element;
    this.delegateEvents();

    return this;
  },

  /**
   * Function used to set the cached DOM elements.
   *
   * @returns {Object} Hash of event names and cached elements.
   */
  setCachedElements: function() {
    var key;
    var ui = assign( {}, this.ui );
    var element;
    for ( key in ui ) {
      if ( ui.hasOwnProperty( key ) ) {
        element = this.element.querySelectorAll( ui[key] );
        if ( element.length === 1 ) {
          ui[key] = element[0];
        } else if ( element.length > 1 ) {
          ui[key] = element;
        } else {
          ui[key] = null;
        }
      }
    }
    this.ui = ui;

    return ui;
  },

  /**
   * Function used to remove the base element from the DOM
   * and unbind events.
   *
   * @returns {boolean} True if successful in tearing down component.
   */
  destroy: function() {
    if ( this.element ) {
      this.element.parentNode.removeChild( this.element );
      if ( this.element.view ) delete this.element.view;
      delete this.element;
    }
    this.undelegateEvents();
    this.trigger( 'component:destroyed' );

    return true;
  },

  /**
   * Function used to set the attributes on an element.
   *
   * @param {Object} attributes -  Hash of attributes to set on base element.
   */
  setElementAttributes: function( attributes ) {
    let property;

    for ( property in attributes ) {
      if ( attributes.hasOwnProperty( property ) ) {
        this.element.setAttribute( property, attributes[property] );
      }
    }
  },

  /**
   * Function used to up event delegation on the base element.
   * Using Dom-delegate library to enable this functionality.
   *
   * @param {Object} events - Hash of events to bind to the dom element.
   * @returns {AtomicComponent} An instance.
   */
  delegateEvents: function( events ) {
    var key;
    var method;
    var match;
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    events = events || ( events = this.events );
    if ( !events ) return this;
    this.undelegateEvents();
    this._delegate = new Delegate( this.element );
    for ( key in events ) {
      method = events[key];
      if ( isFunction( this[method] ) ) method = this[method];
      if ( !method ) continue;
      match = key.match( delegateEventSplitter );
      this.delegate( match[1], match[2], bind( method, this ) );
    }
    this.trigger( 'component:bound' );

    return this;
  },

  /**
   * Function used to set the attributes on an element.
   *
   * @param {string} eventName -  Event in which to listen for.
   * @param {string} selector - CSS selector.
   * @param {Function} listener - Callback for event.
   * @returns {AtomicComponent} An instance.
   */
  delegate: function( eventName, selector, listener ) {
    this._delegate.on( eventName, selector, listener );

    return this;
  },

  /**
   * Function used to remove events from the base element.
   *
   * @returns {AtomicComponent} An instance.
   */
  undelegateEvents: function() {
    if ( this._delegate ) {
      this._delegate.destroy();
    }
    this.element.removeAttribute( 'data-bound' );

    return this;
  },

  /**
   * Function used to set the attributes on an element.
   *
   * @param {string} prefix - String to use a prefix.
   * @returns {string} Prefixed unique id string.
   */
  uniqueId: function( prefix ) {
    return prefix + '_' + Math.random().toString( 36 ).substr( 2, 9 );
  }

} );

// Static Methods


/**
 * Function used to set the attributes on an element.
 * and unbind events.
 *
 * @param {Object} attributes -  Hash of attributes to set on base element.
 * @returns {Function} Extended child constructor function.
 */
AtomicComponent.extend = function( attributes ) {

 /**
 * Function used as constructor in order to establish inheritance
 * chain.
 * @returns {AtomicComponent} An instance.
 */
  function child() {
    this._super = AtomicComponent.prototype;
    return AtomicComponent.apply( this, arguments );
  }

  child.prototype = Object.create( AtomicComponent.prototype );
  assign( child.prototype, attributes );
  assign( child, AtomicComponent );

  if ( attributes.hasOwnProperty( 'ui' ) &&
  attributes.ui.hasOwnProperty( 'base' ) ) {
    child.selector = attributes.ui.base;
  }

  child.constants = {};

  return child;
};


/**
 * Function used to instantiate all instances of the particular
 * atomic component on a page.
 *
 * @returns {Array} List of AtomicComponent instances.
 */
AtomicComponent.init = function() {
  var elements = document.querySelectorAll( this.selector );
  var element;
  var components = [];

  for ( var i = 0; i < elements.length; ++i ) {
    element = elements[i];
    if ( element.hasAttribute( 'data-bound' ) === false ) {
      components.push( new this( element ) );
    }
  }

  return components;
};

module.exports = AtomicComponent;
