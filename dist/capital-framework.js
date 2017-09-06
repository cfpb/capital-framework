/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// List yer JS modules
	__webpack_require__(1);
	__webpack_require__(18);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Expandable = __webpack_require__( 2 );

	// polyfill for ie9 compatibility
	__webpack_require__( 17 );

	Expandable.init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* ==========================================================================
	   Expandable Organism
	   ========================================================================== */

	'use strict';

	var contains = __webpack_require__( 3 ).contains;
	var addClass = __webpack_require__( 3 ).addClass;
	var closest = __webpack_require__( 4 ).closest;
	var bind = __webpack_require__( 5 ).bind;
	var removeClass = __webpack_require__( 3 ).removeClass;
	var ExpandableTransition = __webpack_require__( 6 );
	var Events = __webpack_require__( 7 );
	var config = __webpack_require__( 10 );
	var Organism = __webpack_require__( 11 );

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Dom class list

	   Contains code copied from the following with major modifications :

	   - http://stackoverflow.com/posts/18492076/revisions
	   - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

	   TODO: Integrate with https://github.com/wilsonpage/fastdom.  Refactor to
	         eliminate redudant code.
	   ========================================================================== */

	'use strict';

	var hasClassList = 'classList' in document.createElement( '_' );

	/**
	 * Slice first element from passed arguments.
	 *
	 * @param {Arguments} args - Function arguments.
	 * @returns {Array} List of arguments.
	 */
	function _sliceArgs( args ) {
	  return Array.prototype.slice.call( args, 1 );
	}

	/**
	 * Add CSS class from an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 * @returns {HTMLNode} element - A DOM element.
	 */
	function addClass( element ) {
	  var addClassNamesArray = _sliceArgs( arguments );
	  if ( hasClassList ) {
	    element.classList.add.apply( element.classList, addClassNamesArray );
	  } else {
	    var classes = element.className.split( ' ' );
	    addClassNamesArray.forEach( function( name ) {
	      if ( classes.indexOf( name ) ===-1 ) {
	        classes.push( name );
	      }
	    } );
	    element.className = classes.join( ' ' );
	  }

	  return element;
	}

	/**
	 * Determine if element has particular CSS class.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 * @returns {Boolean} indicating if element has class.
	 */
	function contains( element, className ) {
	  className = className.replace( '.', '' );
	  if ( hasClassList ) {
	    return element.classList.contains( className );
	  }

	  return element.className.indexOf( className ) > -1;
	}

	/**
	 * Remove CSS class from an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 */
	function removeClass( element ) {
	  var removeClassNamesArray = _sliceArgs( arguments );
	  if ( hasClassList ) {
	    element.classList.remove
	    .apply( element.classList, removeClassNamesArray );
	  } else {
	    var classes = element.className.split( ' ' );
	    removeClassNamesArray.forEach( function( className ) {
	      if ( className ) {
	        classes.splice( classes.indexOf( className ), 1 );
	      }
	    } );
	    element.className = classes.join( ' ' );
	  }
	}

	/**
	 * Toggle CSS class on an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {className} className - CSS selector.
	 * @param {boolean} forceFlag - Boolean indicating whether
	                                to forcibly remove class.
	 * @returns {hasClass} Boolean indicating wether the flag existed.
	 */
	function toggleClass( element, className, forceFlag ) {
	  var hasClass = false;
	  if ( hasClassList ) {
	    hasClass = element.classList.toggle.apply( element.classList, className );
	  } else if ( forceFlag === false || contains( element, className ) ) {
	    removeClass( element, forceFlag );
	  } else {
	    addClass( element, className );
	    hasClass = true;
	  }

	  return hasClass;
	}

	// Expose public methods.
	module.exports = { addClass: addClass,
	                   contains: contains,
	                   hasClassList: hasClassList,
	                   removeClass: removeClass,
	                   toggleClass: toggleClass
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Dom closest

	   Utility for retrieving the closest DOM element that
	   matches a give selector.

	   ========================================================================== */

	'use strict';

	/**
	 * Get the nearest parent node of an elementent.
	 *
	 * @param {HTMLNode} element - A DOM elementent.
	 * @param {string} selector - CSS selector.
	 * @returns {HTMLNode} Nearest parent node that matches the selector.
	 */
	function closest( element, selector ) {
	  if ( 'closest' in element ) {
	    return element.closest( selector );
	  }

	  var matchesSelector = element.matches ||
	                        element.webkitMatchesSelector ||
	                        element.mozMatchesSelector ||
	                        element.msMatchesSelector;
	  var match;

	  while ( element ) {
	    if ( matchesSelector.bind( element )( selector ) ) {
	      match = element;
	    } else {
	      element = element.parentElement;
	    }

	    if ( match ) { return element; }
	  }

	  return null;
	}

	// Expose public methods.
	module.exports = {
	  closest: closest
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Function bind

	   Contains code copied from the following with minimal modifications :

	   - https://raw.githubusercontent.com/Modernizr/Modernizr/
	     74655c45ad2cd05c002e4802cdd74cba70310f08/src/fnBind.js

	   ========================================================================== */

	'use strict';

	/**
	 * Function.prototype.bind polyfill.
	 *
	 * @access private
	 * @function bind
	 * @param {Function} fn - A function you want to change `this` reference to.
	 * @param {Object} context - The `this` you want to call the function with.
	 * @returns {Function} The wrapped version of the supplied function.
	 */
	function bind( fn, context ) {
	  if ( Function.prototype.bind ) {
	  	return fn.bind.apply( fn, Array.prototype.slice.call( arguments, 1 ) );
	  }

	  return function() {
	    return fn.apply( context, arguments );
	  };
	}

	// Expose public methods.
	module.exports = {
	  bind: bind
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Required modules.
	var Events = __webpack_require__( 7 );
	var BaseTransition = __webpack_require__( 8 );
	var fnBind = __webpack_require__( 5 ).bind;
	var contains = __webpack_require__( 3 ).contains;
	var addClass = __webpack_require__( 3 ).addClass;
	var removeClass = __webpack_require__( 3 ).removeClass;
	var onReady = __webpack_require__( 9 ).onReady;

	// Exported constants.
	var CLASSES = {
	  BASE_CLASS:   'u-expandable-transition',
	  EXPANDED:     'u-expandable-expanded',
	  COLLAPSED:    'u-expandable-collapsed',
	  OPEN_DEFAULT: 'u-expandable-content__onload-open'
	};

	/**
	 * ExpandableTransition
	 * @class
	 *
	 * @classdesc Initializes new ExpandableTransition behavior.
	 *
	 * @param {HTMLNode} element
	 *   DOM element to apply move transition to.
	 * @param {classes} Object
	 *   An Object of custom classes to override the base classes Object
	 * @returns {ExpandableTransition} An instance.
	 */
	function ExpandableTransition( element, classes ) { // eslint-disable-line max-statements, no-inline-comments, max-len
	  var classObject = classes || CLASSES;
	  var _baseTransition = new BaseTransition( element, classObject );
	  var timer;
	  var previousHeight;
	  var isAnimating = false;

	  /**
	   * @returns {ExpandableTransition} An instance.
	   */
	  function init() {
	    _baseTransition.init();
	    var _transitionCompleteBinded = fnBind( _transitionComplete, this );
	    _baseTransition.addEventListener( BaseTransition.END_EVENT,
	                                      _transitionCompleteBinded );

	    onReady( function() {
	      if ( contains( element, classObject.OPEN_DEFAULT ) ) {
	        addClass( element, classObject.EXPANDED );
	        element.style.maxHeight = element.scrollHeight + 'px';
	      } else {
	        previousHeight = element.scrollHeight;
	        addClass( element, classObject.COLLAPSED );
	      }
	    } );

	    return this;
	  }

	  /**
	   * Handle the end of a transition.
	   */
	  function _transitionComplete() {
	    this.trigger( BaseTransition.END_EVENT, { target: this } );
	    if ( contains( element, classObject.EXPANDED ) && element.scrollHeight > previousHeight ) {
	      element.style.maxHeight = element.scrollHeight + 'px';
	    }
	  }

	  /**
	   * Toggle the expandable
	   * @returns {ExpandableTransition} An instance
	   */
	  function toggleExpandable() {
	    if ( !contains( element, classObject.COLLAPSED ) ) {
	      collapse();
	    } else {
	      expand();
	    }

	    return this;
	  }

	  /**
	   * Collapses the expandable content
	   * @returns {ExpandableTransition} An instance.
	   */
	  function collapse() {
	    previousHeight = element.scrollHeight;
	    element.style.maxHeight = '0';
	    addClass( element, classObject.COLLAPSED );
	    removeClass( element, classObject.EXPANDED );

	    return this;
	  }

	  /**
	   * Expands the expandable content
	   * @returns {ExpandableTransition} An instance.
	   */
	  function expand() {
	    element.style.maxHeight = previousHeight + 'px';
	    addClass( element, classObject.EXPANDED );
	    removeClass( element, classObject.COLLAPSED );

	    return this;
	  }

	  // Attach public events.
	  this.addEventListener = Events.on;
	  this.trigger = Events.trigger;
	  this.removeEventListener = Events.off;

	  this.animateOff = _baseTransition.animateOff;
	  this.animateOn = _baseTransition.animateOn;
	  this.halt = _baseTransition.halt;
	  this.isAnimated = _baseTransition.isAnimated;
	  this.setElement = _baseTransition.setElement;
	  this.remove = _baseTransition.remove;

	  this.init = init;
	  this.toggleExpandable = toggleExpandable;
	  this.collapse = collapse;
	  this.expand = expand;

	  return this;
	}

	// Public static properties.
	ExpandableTransition.CLASSES = CLASSES;

	module.exports = ExpandableTransition;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Events

	   Mixin to add basic event callback functionality.
	   ========================================================================== */

	'use strict';


	var Events = {

	  /**
	   * Function used to add events to an event stack.
	   *
	   * @param {string} eventName - The name of the event to add to the event stack.
	   * @param {Function} callback - Function to callback when event is triggered.
	   * @returns {object} An instance.
	   */
	  on: function( eventName, callback ) {
	    var events = this.events = this.events || {};
	    events[eventName] = this.events[eventName] || [];
	    events[eventName].push( callback );

	    return this;
	  },

	  /**
	   * Function used to remove events from an event stack.
	   *
	   * @param {string} eventName - The name of the event to remove from the event stack.
	   * @returns {object} An instance.
	   */
	  off: function( eventName ) {
	    if ( this.events && this.events[eventName] ) delete this.events[eventName];

	    return this;
	  },

	   /**
	   * Function used to trigger events that exist on the event stack.
	   *
	   * @param {string} eventName - The name of the event to trigger.
	   * @returns {object} An instance.
	   */
	  trigger: function( eventName ) {
	    var events = this.events || {};
	    if ( events.hasOwnProperty( eventName ) === false ) {
	      return this;
	    }
	    for ( var i = 0, len = events[eventName].length; i < len; i++ ) {
	      this.events[eventName][i].apply( this, arguments );
	    }

	    return this;
	  }

	};

	module.exports = Events;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Required modules.
	var Events = __webpack_require__( 7 );
	var fnBind = __webpack_require__( 5 ).bind;

	/**
	 * BaseTransition
	 * @class
	 *
	 * @classdesc Initializes new BaseTransition behavior.
	 *   This shouldn't be used directly, but instead should be
	 *   the base class used through composition by a specific transition.
	 *
	 * @param {HTMLNode} element
	 *   DOM element to apply transition to.
	 * @param {Object} classes
	 *   The classes to apply to this transition.
	 * @returns {BaseTransition} An instance.
	 */
	function BaseTransition( element, classes ) { // eslint-disable-line max-statements, no-inline-comments, max-len
	  var _classes = classes;
	  var _dom;

	  var _lastClass;
	  var _transitionEndEvent;
	  var _transitionCompleteBinded;
	  var _addEventListenerBinded;
	  var _isAnimating = false;
	  var _isFlushed = false;

	  /**
	   * @returns {BaseTransition} An instance.
	   */
	  function init() {
	    _transitionCompleteBinded = fnBind( _transitionComplete, this );
	    _addEventListenerBinded = fnBind( _addEventListener, this );
	    setElement( element );

	    return this;
	  }

	  /**
	   * Set the HTML element target of this transition.
	   * @param {HTMLNode} targetElement - The target of the transition.
	   */
	  function setElement( targetElement ) {
	    // If the element has already been set,
	    // clear the transition classes from the old element.
	    if ( _dom ) {
	      remove();
	      animateOn();
	    }
	    _dom = targetElement;
	    _dom.classList.add( _classes.BASE_CLASS );
	    _transitionEndEvent = _getTransitionEndEvent( _dom );
	  }

	  /**
	   * Add a "transition-duration: 0s" utility CSS class.
	   * @returns {BaseTransition} An instance.
	   */
	  function animateOn() {
	    if ( !_dom ) { return this; }
	    _dom.classList.remove( BaseTransition.NO_ANIMATION_CLASS );

	    return this;
	  }

	  /**
	   * Remove a "transition-duration: 0s" utility CSS class.
	   * @returns {BaseTransition} An instance.
	   */
	  function animateOff() {
	    if ( !_dom ) { return this; }
	    _dom.classList.add( BaseTransition.NO_ANIMATION_CLASS );

	    return this;
	  }

	  /**
	   * @returns {boolean} Whether the transition has a duration or not.
	   *   Returns false if this transition has not been initialized.
	   */
	  function isAnimated() {
	    if ( !_dom ) { return false; }
	    return !_dom.classList.contains( BaseTransition.NO_ANIMATION_CLASS );
	  }

	  /**
	   * Halt an in-progress animation and call the complete event immediately.
	   */
	  function halt() {
	    if ( !_isAnimating ) { return; }
	    _dom.style.webkitTransitionDuration = '0';
	    _dom.style.mozTransitionDuration = '0';
	    _dom.style.oTransitionDuration = '0';
	    _dom.style.transitionDuration = '0';
	    _dom.removeEventListener( _transitionEndEvent,
	                              _transitionCompleteBinded );
	    _transitionCompleteBinded();
	    _dom.style.webkitTransitionDuration = '';
	    _dom.style.mozTransitionDuration = '';
	    _dom.style.oTransitionDuration = '';
	    _dom.style.transitionDuration = '';
	  }

	  /**
	   * Add an event listener to the transition, or call the transition
	   * complete handler immediately if transition not supported.
	   */
	  function _addEventListener() {
	    _isAnimating = true;
	    // If transition is not supported, call handler directly (IE9/OperaMini).
	    if ( _transitionEndEvent ) {
	      _dom.addEventListener( _transitionEndEvent,
	                             _transitionCompleteBinded );
	      this.trigger( BaseTransition.BEGIN_EVENT, { target: this } );
	    } else {
	      this.trigger( BaseTransition.BEGIN_EVENT, { target: this } );
	      _transitionCompleteBinded();
	    }
	  }

	  /**
	   * Remove an event listener to the transition.
	   */
	  function _removeEventListener() {
	    _dom.removeEventListener( _transitionEndEvent, _transitionCompleteBinded );
	  }

	  /**
	   * Handle the end of a transition.
	   */
	  function _transitionComplete() {
	    _removeEventListener();
	    this.trigger( BaseTransition.END_EVENT, { target: this } );
	    _isAnimating = false;
	  }

	  /**
	   * Search for and remove initial BaseTransition classes that have
	   * already been applied to this BaseTransition's target element.
	   */
	  function _flush() {
	    for ( var prop in _classes ) {
	      if ( _classes.hasOwnProperty( prop ) &&
	           _classes[prop] !== _classes.BASE_CLASS &&
	           _dom.classList.contains( _classes[prop] ) ) {
	        _dom.classList.remove( _classes[prop] );
	      }
	    }
	  }

	  /**
	   * Remove all transition classes, if transition is initialized.
	   * @returns {boolean}
	   *   True, if the element's CSS classes were touched, false otherwise.
	   */
	  function remove() {
	    if ( _dom ) {
	      halt();
	      _dom.classList.remove( _classes.BASE_CLASS );
	      _flush();
	      return true;
	    }

	    return false;
	  }

	  /**
	   * @param {string} className - A CSS class.
	   * @returns {boolean} False if the class is already applied
	   *   or the transition is not initialized,
	   *   otherwise true if the class was applied.
	   */
	  function applyClass( className ) {
	    if ( !_dom ) { return false; }
	    if ( !_isFlushed ) {
	      _flush();
	      _isFlushed = true;
	    }

	    if ( _dom.classList.contains( className ) ) {
	      return false;
	    }

	    _removeEventListener();
	    _dom.classList.remove( _lastClass );
	    _lastClass = className;
	    _addEventListenerBinded();
	    _dom.classList.add( _lastClass );

	    return true;
	  }

	  /**
	   * @param {HTMLNode} elem
	   *   The element to check for support of transition end event.
	   * @returns {string} The browser-prefixed transition end event.
	   */
	  function _getTransitionEndEvent( elem ) {
	    if ( !elem ) {
	      var msg = 'Element does not have TransitionEnd event. It may be null!';
	      throw new Error( msg );
	    }

	    var transition;
	    var transitions = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition:    'transitionend',
	      OTransition:      'oTransitionEnd otransitionend',
	      transition:       'transitionend'
	    };

	    for ( var transitionEnd in transitions ) {
	      if ( transitions.hasOwnProperty( transitionEnd ) &&
	           typeof elem.style[transitionEnd] !== 'undefined' ) {
	        transition = transitions[transitionEnd];
	        break;
	      }
	    }
	    return transition;
	  }

	  // Attach public events.
	  this.addEventListener = Events.on;
	  this.trigger = Events.trigger;
	  this.removeEventListener = Events.off;

	  this.animateOff = animateOff;
	  this.animateOn = animateOn;
	  this.applyClass = applyClass;
	  this.halt = halt;
	  this.init = init;
	  this.isAnimated = isAnimated;
	  this.remove = remove;
	  this.setElement = setElement;

	  return this;
	}

	// Public static constants.
	BaseTransition.BEGIN_EVENT = 'transitionBegin';
	BaseTransition.END_EVENT = 'transitionEnd';
	BaseTransition.NO_ANIMATION_CLASS = 'u-no-animation';

	module.exports = BaseTransition;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/* ==========================================================================
	   On Ready

	   Utility for triggering functions only after the page is loaded

	   ========================================================================== */

	'use strict';

	var _readyFunctions = [];

	/**
	* Checks if the document is ready, if it is, trigger the passed function,
	* if not, save the function to an array to be triggered after the page is loaded
	* @param {function} fn -
	*   Function to run only after the DOM has completely loaded
	* @returns {foo} bar
	*/
	function onReady( fn ) {
	  // Ensure we passed a function as the argument
	  if ( typeof fn !== 'function' ) {
	    return;
	  }

	  // If the ready state is already complete, run the passed function,
	  // otherwise add it to our saved array
	  if ( document.readyState === 'complete' ) {
	    fn();
	  } else {
	    _readyFunctions.push( fn );
	  }

	  // When the ready state changes to complete, run the passed function
	  document.onreadystatechange = function() {
	    if ( document.readyState === 'complete' ) {
	      for ( var i = 0, l = _readyFunctions.length; i < l; i++ ) {
	        _readyFunctions[i]();
	      }
	      _readyFunctions.length = 0;
	    }
	  };

	  return _readyFunctions;
	}

	module.exports = {
	  onReady: onReady
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Atomic configurations and constants

	   ========================================================================== */

	'use strict';

	// Bit values intended to be used for bit inversion.
	var DIRECTIONS = {
	  UP: 0,
	  RIGHT: 1,
	  DOWN: -1,
	  LEFT: -2
	};

	// Atomic component types used for describing component
	// hiearchy.
	var TYPES = {
	  PAGE: 1,
	  TEMPLATE: 2,
	  ORGANISM: 3,
	  MOLECULE: 4,
	  ATOM: 5
	};

	// Atomic Prefixes used for standardizing naming conventions
	// across HTML, CSS, and Javascript.
	var PREFIXES = {
	  PAGE: 'p-',
	  TEMPLATE: 't-',
	  ORGANISM: 'o-',
	  MOLECULE: 'm-',
	  ATOM: 'a-'
	};

	/**
	 * Function used as a non-operational method that
	 * is intended to be overriden.
	 *
	 * @returns {undefined}.
	 */
	function NO_OP_FUNCTION(){ return }

	var UNDEFINED;

	module.exports = {
	  DIRECTIONS: DIRECTIONS,
	  NO_OP_FUNCTION: NO_OP_FUNCTION,
	  PREFIXES : PREFIXES,
	  TYPES : TYPES,
	  UNDEFINED: UNDEFINED
	}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   Organism

	   Organism Atomic Component

	   ========================================================================== */

	'use strict';

	var AtomicComponent = __webpack_require__( 12 );
	var TYPES = __webpack_require__( 10 ).TYPES;

	var Organism = AtomicComponent.extend( {
	  TYPE: TYPES.ORGANISM,
	  CHILD_TYPES: [TYPES.MOLECULE, TYPES.ATOM]
	} );

	module.exports = Organism;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   AtomicComponent

	   Base Atomic Component

	   Contains code copied from the following with major modifications :

	   - Backbone.js ( http://backbonejs.org/docs/backbone.html ).
	   - Marionette ( http://marionettejs.com/ ).

	   ========================================================================== */

	'use strict';

	var assign = __webpack_require__(13).assign;
	var bind = __webpack_require__(5).bind;
	var classList = __webpack_require__(3);
	var Delegate = __webpack_require__(14).Delegate;
	var Events = __webpack_require__(7);
	var isFunction = __webpack_require__(16).isFunction;


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
	    isFunction( func ) && func.apply( this, arguments );
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
	   * @returns {true} Boolean indicating successful component teardown.
	   */
	  destroy: function() {
	    if (this.element) {
	      this.element.parentNode.removeChild(this.element);
	      if (this.element.view) delete this.element.view;
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
	    var property;

	    for (property in attributes) {
	      if (attributes.hasOwnProperty(property)) {
	        this.element.setAttribute(property, attributes[property]);
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
	    this._delegate.on(eventName, selector, listener);

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
	    this.element.removeAttribute( 'data-bound' )

	    return this;
	  },

	  /**
	   * Function used to set the attributes on an element.
	   *
	   * @param {Object} prefix - String to use a prefix.
	   * @returns {string} Prefixed unique id string.
	   */
	  uniqueId: function( prefix ) {
	    return prefix + '_' + Math.random().toString(36).substr(2, 9);
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
	  assign(child.prototype, attributes);
	  assign(child, AtomicComponent);

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
	    if( element.hasAttribute( 'data-bound' ) === false ) {
	      components.push( new this( element ) );
	    }
	  }

	  return components;
	};

	module.exports = AtomicComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Assign

	   Contains code copied from the following with major modifications :

	   - https://github.com/maslennikov/shallow-extend
	     Copyright (c) 2014 Alexey Maslennikov

	   ========================================================================== */

	'use strict';

	/**
	* @param {object} object - JavaScript object.
	* @returns {boolean} True if object is plain Javascript object.
	*/
	function _isPlainObject( object ) {
	  return Object.prototype.toString.call( object ) === '[object Object]';
	}

	/**
	* Copies properties of all sources to the destination object overriding its own
	* existing properties. When assigning from multiple sources, fields of every
	* next source will override same named fields of previous sources.
	*
	* @param {Object} destination object.
	* @returns {Object} assigned destination object.
	*/
	function assign( destination ) {
	  destination = destination || {};
	  for ( var i = 1; i < arguments.length; i++ ) {
	    var source = arguments[i] || {};
	    for ( var key in source ) {
	      if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
	        var value = source[key];
	        if ( _isPlainObject( value ) ) {
	          assign( destination[key] || ( destination[key] = {} ), value );
	        } else {
	          destination[key] = value;
	        }
	      }
	    }
	  }

	  return destination;
	}

	// Expose public methods.
	module.exports = { assign: assign };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/

	'use strict';

	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(15);

	module.exports = function(root) {
	  return new Delegate(root);
	};

	module.exports.Delegate = Delegate;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*jshint browser:true, node:true*/

	'use strict';

	module.exports = Delegate;

	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {

	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }

	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}

	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;

	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }

	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }

	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;

	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }

	  return this;
	};

	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};

	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;

	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }

	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }

	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }

	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];

	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }

	  if (!selector) {
	    matcherParam = null;

	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);

	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }

	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });

	  return this;
	};

	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;

	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }

	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }

	    return this;
	  }

	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }

	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];

	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }

	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];

	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }

	  return this;
	};


	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

	  if (event[EVENTIGNORE] === true) {
	    return;
	  }

	  target = event.target;

	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }

	  root = this.rootElement;

	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }

	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];

	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }

	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }

	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }

	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }

	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};

	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};

	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));

	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}

	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}

	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}

	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/* ==========================================================================
	   Javascript Type Checkers

	   Various utility functions to check Javascript types and primitives.

	   Contains code copied from with moderate modifications:

	   https://github.com/angular/angular.js/blob/master/src/Angular.js.
	   Copyright (c) 2010-2015 Google, Inc. http://angularjs.org

	   ========================================================================== */

	'use strict';

	var _toString = Object.prototype.toString;

	/**
	 * @name isUndefined
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is undefined.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is undefined.
	 */
	function isUndefined( value ) {
	  return typeof value === 'undefined';
	}


	/**
	 * @name isDefined
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is defined.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is defined.
	 */
	function isDefined( value ) {
	  return typeof value !== 'undefined';
	}


	/**
	 * @name isObject
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is an `Object`.
	 * Unlike `typeof` in JavaScript, `null`s are not
	 * considered to be objects. Note that JavaScript arrays are objects.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is an `Object` but not `null`.
	 */
	function isObject( value ) {
	  // http://jsperf.com/isobject4
	  return value !== null && typeof value === 'object';
	}


	/**
	 * @name isString
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `String`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `String`.
	 */
	function isString( value ) {
	  return _toString.call( value ) === '[object String]';
	}


	/**
	 * @name isNumber
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `Number`.
	 *
	 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
	 *
	 * If you wish to exclude these then you can use the native
	 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
	 *                      Reference/Global_Objects/isFinite)
	 * method.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Number`.
	 */
	function isNumber( value ) {
	  return _toString.call( value ) === '[object Number]';
	}


	/**
	 * @name isDate
	 * @kind function
	 *
	 * @description
	 * Determines if a value is a date.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Date`.
	 */
	function isDate( value ) {
	  return _toString.call( value ) === '[object Date]';
	}


	/**
	 * @name isArray
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is an `Array`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is an `Array`.
	 */
	var isArray = Array.isArray || function isArray( value ) {
	  return _toString.call( value ) === '[object Array]';
	};


	/**
	 * @name isFunction
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `Function`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Function`.
	 */
	function isFunction( value ) {
	  return _toString.call( value ) === '[object Function]';
	}

	/**
	 * @name isEmpty
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is empty.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is empty.
	 */
	function isEmpty( value ) {
	  return isUndefined( value ) ||
	         value === null ||
	         isString( value ) &&
	         value.length <= 0 ||
	         ( /^\s*$/ ).test( value );
	}


	// Expose public methods.
	module.exports = {
	  isUndefined: isUndefined,
	  isDefined:   isDefined,
	  isObject:    isObject,
	  isString:    isString,
	  isNumber:    isNumber,
	  isDate:      isDate,
	  isArray:     isArray,
	  isFunction:  isFunction,
	  isEmpty:     isEmpty
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   TableOrganism

	   ========================================================================== */

	'use strict';

	var config = __webpack_require__( 19 );
	var Organism = __webpack_require__( 20 );
	var TableSortable = __webpack_require__( 29 );
	var TableRowLinks = __webpack_require__( 31 );

	var TableOrganism = Organism.extend( {

	  ui: {
	    base: '.o-table'
	  },

	  modifiers: [TableSortable, TableRowLinks]

	} );

	TableOrganism.constants.DIRECTIONS = config.DIRECTIONS;

	TableOrganism.init();

	module.exports = TableOrganism;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Atomic configurations and constants

	   ========================================================================== */

	'use strict';

	// Bit values intended to be used for bit inversion.
	var DIRECTIONS = {
	  UP: 0,
	  RIGHT: 1,
	  DOWN: -1,
	  LEFT: -2
	};

	// Atomic component types used for describing component
	// hiearchy.
	var TYPES = {
	  PAGE: 1,
	  TEMPLATE: 2,
	  ORGANISM: 3,
	  MOLECULE: 4,
	  ATOM: 5
	};

	// Atomic Prefixes used for standardizing naming conventions
	// across HTML, CSS, and Javascript.
	var PREFIXES = {
	  PAGE: 'p-',
	  TEMPLATE: 't-',
	  ORGANISM: 'o-',
	  MOLECULE: 'm-',
	  ATOM: 'a-'
	};

	/**
	 * Function used as a non-operational method that
	 * is intended to be overriden.
	 *
	 * @returns {undefined}.
	 */
	function NO_OP_FUNCTION(){ return }

	var UNDEFINED;

	module.exports = {
	  DIRECTIONS: DIRECTIONS,
	  NO_OP_FUNCTION: NO_OP_FUNCTION,
	  PREFIXES : PREFIXES,
	  TYPES : TYPES,
	  UNDEFINED: UNDEFINED
	}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   Organism

	   Organism Atomic Component

	   ========================================================================== */

	'use strict';

	var AtomicComponent = __webpack_require__( 21 );
	var TYPES = __webpack_require__( 19 ).TYPES;

	var Organism = AtomicComponent.extend( {
	  TYPE: TYPES.ORGANISM,
	  CHILD_TYPES: [TYPES.MOLECULE, TYPES.ATOM]
	} );

	module.exports = Organism;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   AtomicComponent

	   Base Atomic Component

	   Contains code copied from the following with major modifications :

	   - Backbone.js ( http://backbonejs.org/docs/backbone.html ).
	   - Marionette ( http://marionettejs.com/ ).

	   ========================================================================== */

	'use strict';

	var assign = __webpack_require__(22).assign;
	var bind = __webpack_require__(23).bind;
	var classList = __webpack_require__(24);
	var Delegate = __webpack_require__(25).Delegate;
	var Events = __webpack_require__(27);
	var isFunction = __webpack_require__(28).isFunction;


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
	    isFunction( func ) && func.apply( this, arguments );
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
	   * @returns {true} Boolean indicating successful component teardown.
	   */
	  destroy: function() {
	    if (this.element) {
	      this.element.parentNode.removeChild(this.element);
	      if (this.element.view) delete this.element.view;
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
	    var property;

	    for (property in attributes) {
	      if (attributes.hasOwnProperty(property)) {
	        this.element.setAttribute(property, attributes[property]);
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
	    this._delegate.on(eventName, selector, listener);

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
	    this.element.removeAttribute( 'data-bound' )

	    return this;
	  },

	  /**
	   * Function used to set the attributes on an element.
	   *
	   * @param {Object} prefix - String to use a prefix.
	   * @returns {string} Prefixed unique id string.
	   */
	  uniqueId: function( prefix ) {
	    return prefix + '_' + Math.random().toString(36).substr(2, 9);
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
	  assign(child.prototype, attributes);
	  assign(child, AtomicComponent);

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
	    if( element.hasAttribute( 'data-bound' ) === false ) {
	      components.push( new this( element ) );
	    }
	  }

	  return components;
	};

	module.exports = AtomicComponent;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Assign

	   Contains code copied from the following with major modifications :

	   - https://github.com/maslennikov/shallow-extend
	     Copyright (c) 2014 Alexey Maslennikov

	   ========================================================================== */

	'use strict';

	/**
	* @param {object} object - JavaScript object.
	* @returns {boolean} True if object is plain Javascript object.
	*/
	function _isPlainObject( object ) {
	  return Object.prototype.toString.call( object ) === '[object Object]';
	}

	/**
	* Copies properties of all sources to the destination object overriding its own
	* existing properties. When assigning from multiple sources, fields of every
	* next source will override same named fields of previous sources.
	*
	* @param {Object} destination object.
	* @returns {Object} assigned destination object.
	*/
	function assign( destination ) {
	  destination = destination || {};
	  for ( var i = 1; i < arguments.length; i++ ) {
	    var source = arguments[i] || {};
	    for ( var key in source ) {
	      if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
	        var value = source[key];
	        if ( _isPlainObject( value ) ) {
	          assign( destination[key] || ( destination[key] = {} ), value );
	        } else {
	          destination[key] = value;
	        }
	      }
	    }
	  }

	  return destination;
	}

	// Expose public methods.
	module.exports = { assign: assign };


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Function bind

	   Contains code copied from the following with minimal modifications :

	   - https://raw.githubusercontent.com/Modernizr/Modernizr/
	     74655c45ad2cd05c002e4802cdd74cba70310f08/src/fnBind.js

	   ========================================================================== */

	'use strict';

	/**
	 * Function.prototype.bind polyfill.
	 *
	 * @access private
	 * @function bind
	 * @param {Function} fn - A function you want to change `this` reference to.
	 * @param {Object} context - The `this` you want to call the function with.
	 * @returns {Function} The wrapped version of the supplied function.
	 */
	function bind( fn, context ) {
	  if ( Function.prototype.bind ) {
	  	return fn.bind.apply( fn, Array.prototype.slice.call( arguments, 1 ) );
	  }

	  return function() {
	    return fn.apply( context, arguments );
	  };
	}

	// Expose public methods.
	module.exports = {
	  bind: bind
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Dom class list

	   Contains code copied from the following with major modifications :

	   - http://stackoverflow.com/posts/18492076/revisions
	   - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

	   TODO: Integrate with https://github.com/wilsonpage/fastdom.  Refactor to
	         eliminate redudant code.
	   ========================================================================== */

	'use strict';

	var hasClassList = 'classList' in document.createElement( '_' );

	/**
	 * Slice first element from passed arguments.
	 *
	 * @param {Arguments} args - Function arguments.
	 * @returns {Array} List of arguments.
	 */
	function _sliceArgs( args ) {
	  return Array.prototype.slice.call( args, 1 );
	}

	/**
	 * Add CSS class from an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 * @returns {HTMLNode} element - A DOM element.
	 */
	function addClass( element ) {
	  var addClassNamesArray = _sliceArgs( arguments );
	  if ( hasClassList ) {
	    element.classList.add.apply( element.classList, addClassNamesArray );
	  } else {
	    var classes = element.className.split( ' ' );
	    addClassNamesArray.forEach( function( name ) {
	      if ( classes.indexOf( name ) ===-1 ) {
	        classes.push( name );
	      }
	    } );
	    element.className = classes.join( ' ' );
	  }

	  return element;
	}

	/**
	 * Determine if element has particular CSS class.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 * @returns {Boolean} indicating if element has class.
	 */
	function contains( element, className ) {
	  className = className.replace( '.', '' );
	  if ( hasClassList ) {
	    return element.classList.contains( className );
	  }

	  return element.className.indexOf( className ) > -1;
	}

	/**
	 * Remove CSS class from an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {string} className - CSS selector.
	 */
	function removeClass( element ) {
	  var removeClassNamesArray = _sliceArgs( arguments );
	  if ( hasClassList ) {
	    element.classList.remove
	    .apply( element.classList, removeClassNamesArray );
	  } else {
	    var classes = element.className.split( ' ' );
	    removeClassNamesArray.forEach( function( className ) {
	      if ( className ) {
	        classes.splice( classes.indexOf( className ), 1 );
	      }
	    } );
	    element.className = classes.join( ' ' );
	  }
	}

	/**
	 * Toggle CSS class on an element.
	 *
	 * @param {HTMLNode} element - A DOM element.
	 * @param {className} className - CSS selector.
	 * @param {boolean} forceFlag - Boolean indicating whether
	                                to forcibly remove class.
	 * @returns {hasClass} Boolean indicating wether the flag existed.
	 */
	function toggleClass( element, className, forceFlag ) {
	  var hasClass = false;
	  if ( hasClassList ) {
	    hasClass = element.classList.toggle.apply( element.classList, className );
	  } else if ( forceFlag === false || contains( element, className ) ) {
	    removeClass( element, forceFlag );
	  } else {
	    addClass( element, className );
	    hasClass = true;
	  }

	  return hasClass;
	}

	// Expose public methods.
	module.exports = { addClass: addClass,
	                   contains: contains,
	                   hasClassList: hasClassList,
	                   removeClass: removeClass,
	                   toggleClass: toggleClass
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/

	'use strict';

	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(26);

	module.exports = function(root) {
	  return new Delegate(root);
	};

	module.exports.Delegate = Delegate;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/*jshint browser:true, node:true*/

	'use strict';

	module.exports = Delegate;

	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {

	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }

	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}

	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;

	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }

	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }

	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;

	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }

	  return this;
	};

	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};

	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;

	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }

	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }

	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }

	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];

	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }

	  if (!selector) {
	    matcherParam = null;

	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);

	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }

	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });

	  return this;
	};

	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;

	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }

	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }

	    return this;
	  }

	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }

	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];

	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }

	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];

	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }

	  return this;
	};


	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

	  if (event[EVENTIGNORE] === true) {
	    return;
	  }

	  target = event.target;

	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }

	  root = this.rootElement;

	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }

	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];

	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }

	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }

	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }

	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }

	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};

	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};

	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));

	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}

	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}

	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}

	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Events

	   Mixin to add basic event callback functionality.
	   ========================================================================== */

	'use strict';


	var Events = {

	  /**
	   * Function used to add events to an event stack.
	   *
	   * @param {string} eventName - The name of the event to add to the event stack.
	   * @param {Function} callback - Function to callback when event is triggered.
	   * @returns {object} An instance.
	   */
	  on: function( eventName, callback ) {
	    var events = this.events = this.events || {};
	    events[eventName] = this.events[eventName] || [];
	    events[eventName].push( callback );

	    return this;
	  },

	  /**
	   * Function used to remove events from an event stack.
	   *
	   * @param {string} eventName - The name of the event to remove from the event stack.
	   * @returns {object} An instance.
	   */
	  off: function( eventName ) {
	    if ( this.events && this.events[eventName] ) delete this.events[eventName];

	    return this;
	  },

	   /**
	   * Function used to trigger events that exist on the event stack.
	   *
	   * @param {string} eventName - The name of the event to trigger.
	   * @returns {object} An instance.
	   */
	  trigger: function( eventName ) {
	    var events = this.events || {};
	    if ( events.hasOwnProperty( eventName ) === false ) {
	      return this;
	    }
	    for ( var i = 0, len = events[eventName].length; i < len; i++ ) {
	      this.events[eventName][i].apply( this, arguments );
	    }

	    return this;
	  }

	};

	module.exports = Events;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/* ==========================================================================
	   Javascript Type Checkers

	   Various utility functions to check Javascript types and primitives.

	   Contains code copied from with moderate modifications:

	   https://github.com/angular/angular.js/blob/master/src/Angular.js.
	   Copyright (c) 2010-2015 Google, Inc. http://angularjs.org

	   ========================================================================== */

	'use strict';

	var _toString = Object.prototype.toString;

	/**
	 * @name isUndefined
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is undefined.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is undefined.
	 */
	function isUndefined( value ) {
	  return typeof value === 'undefined';
	}


	/**
	 * @name isDefined
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is defined.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is defined.
	 */
	function isDefined( value ) {
	  return typeof value !== 'undefined';
	}


	/**
	 * @name isObject
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is an `Object`.
	 * Unlike `typeof` in JavaScript, `null`s are not
	 * considered to be objects. Note that JavaScript arrays are objects.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is an `Object` but not `null`.
	 */
	function isObject( value ) {
	  // http://jsperf.com/isobject4
	  return value !== null && typeof value === 'object';
	}


	/**
	 * @name isString
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `String`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `String`.
	 */
	function isString( value ) {
	  return _toString.call( value ) === '[object String]';
	}


	/**
	 * @name isNumber
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `Number`.
	 *
	 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
	 *
	 * If you wish to exclude these then you can use the native
	 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
	 *                      Reference/Global_Objects/isFinite)
	 * method.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Number`.
	 */
	function isNumber( value ) {
	  return _toString.call( value ) === '[object Number]';
	}


	/**
	 * @name isDate
	 * @kind function
	 *
	 * @description
	 * Determines if a value is a date.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Date`.
	 */
	function isDate( value ) {
	  return _toString.call( value ) === '[object Date]';
	}


	/**
	 * @name isArray
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is an `Array`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is an `Array`.
	 */
	var isArray = Array.isArray || function isArray( value ) {
	  return _toString.call( value ) === '[object Array]';
	};


	/**
	 * @name isFunction
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is a `Function`.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is a `Function`.
	 */
	function isFunction( value ) {
	  return _toString.call( value ) === '[object Function]';
	}

	/**
	 * @name isEmpty
	 * @kind function
	 *
	 * @description
	 * Determines if a reference is empty.
	 *
	 * @param {*} value Reference to check.
	 * @returns {boolean} True if `value` is empty.
	 */
	function isEmpty( value ) {
	  return isUndefined( value ) ||
	         value === null ||
	         isString( value ) &&
	         value.length <= 0 ||
	         ( /^\s*$/ ).test( value );
	}


	// Expose public methods.
	module.exports = {
	  isUndefined: isUndefined,
	  isDefined:   isDefined,
	  isObject:    isObject,
	  isString:    isString,
	  isNumber:    isNumber,
	  isDate:      isDate,
	  isArray:     isArray,
	  isFunction:  isFunction,
	  isEmpty:     isEmpty
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   Table Sortablle

	   Mixin for sorting table organism.

	   ========================================================================== */

	'use strict';

	var config = __webpack_require__( 19 );
	var closest = __webpack_require__( 30 ).closest;
	var DIRECTIONS = config.DIRECTIONS;
	var UNDEFINED = config.UNDEFINED;

	var TableSortable = {

	  classes: {
	    sortDown: 'sorted-down',
	    sortUp:   'sorted-up'
	  },

	  events: {
	    'click .sortable': 'onSortableClick'
	  },

	  ui: {
	    base:       '.o-table__sortable',
	    tableBody:  'tbody',
	    sortButton: '.sorted-up, .sorted-down'
	  },

	  /**
	   * Function used to create computed and triggered properties.
	   */
	  initialize: function() {
	    this.sortClass = UNDEFINED;
	    this.sortColumnIndex = UNDEFINED;
	    this.sortDirection = UNDEFINED;
	    this.tableData = [];
	    this.bindProperties();
	    if ( this.ui.sortButton ) {
	      this.sortColumnIndex = this.getColumnIndex();
	      this.sortDirection = this.contains( this.ui.sortButton, this.classes.sortDown )
	      					   ? DIRECTIONS.DOWN : DIRECTIONS.UP;
	      this.updateTable();
	    }
	  },

	  /**
	   * Function used to create computed and trigger properties.
	   */
	  bindProperties: function() {
	    var sortDirection;

	    Object.defineProperty( this, 'sortDirection', {
	      configurable: true,
	      get: function() {
	        return sortDirection;
	      },
	      set: function( value ) {
	        if ( value === DIRECTIONS.UP ) {
	          this.sortClass = this.classes.sortUp;
	        } else if( value === DIRECTIONS.DOWN ) {
	          this.sortClass = this.classes.sortDown;
	        }
	        sortDirection = value;
	      }
	    } );
	  },

	  /**
	   * Function used to get the column index of the active sort column.
	   *
	   * @param { HTMLNode } element - The element used as the sortable.
	   */
	  getColumnIndex: function( element ) {
	    return closest( element || this.ui.sortButton, 'td, th' ).cellIndex;
	  },

	  /**
	   * Function used to update the table data and dom.
	   */
	  updateTable: function() {
	    return this.updateTableData() && this.updateTableDom();
	  },

	  /**
	   * Function used to get, sort, and update the table data array.
	   *
	   * @param { number } columnIndex - The index of the column used for sorting.
	   */
	  updateTableData: function( columnIndex ) {
	    var cell;
	    var rows = this.ui.tableBody.querySelectorAll( 'tr' );
	    var sortType;
	    this.tableData = [];
	    columnIndex = columnIndex || this.sortColumnIndex;

	    for ( var i = 0; i < rows.length; ++i ) {
	      cell = rows[i].cells[ columnIndex ];
	      if( cell ) {
	        cell = cell.textContent.trim();
	      }
	      this.tableData.push( [ cell, rows[ i ] ] );
	    }

	    sortType = this.ui.sortButton.getAttribute( 'data-sort_type' );
	    this.tableData.sort( this.tableDataSorter( this.sortDirection, sortType ) );

	    return this.tableData;
	  },

	  /**
	   * Function used to update the table DOM.
	   */
	  updateTableDom: function() {
	    var documentFragment;
	    var tableBody = this.ui.tableBody;

	    // Empty the table body to prepare for sorting the rows
	    // TODO: It might make sense to use innerHTML
	    // from a performance and garbage collection standpoint.
	    while ( tableBody.lastChild ) {
	      tableBody.removeChild( tableBody.lastChild );
	    }

	    documentFragment = document.createDocumentFragment();
	    for ( var i = 0; i < this.tableData.length; i++ ) {
	      documentFragment.appendChild( this.tableData[i][1] );
	    }

	    tableBody.appendChild( documentFragment );
	    this.trigger( 'table:updated' );

	    return tableBody;
	  },

	  /**
	   * Function used to create a function for sorting table data.
	   * Passed to Array.sort method.
	   *
	   * @param { number } direction - A number where a negative number indicates a
	   * reverse sort.
	   * @param { sortType } sortType - A string used for sort types. By default,
	   * the values are sorted by their native type. If this value is set to
	   * 'number', then the cells' numeric values are used.
	   * @returns function - A function to be used by the Array.sort method, where
	   * the parameters 'a' and 'b' is each an Array (of Arrays) to be sorted
	   */
	  tableDataSorter : function( direction, sortType ) {
	    return function( a, b ) {
	       var sign = 1;
	       var order = 0;
	       var regex = /[^\d.-]/g;

	      // Set a and b to the first Array in each Array-of-Arrays
	      a = a[0];
	      b = b[0];

	      // For number sort, convert a & b to numbers.
	      if ( sortType === 'number' ) {
	        a = Number( a.replace( regex, '' ) );
	        b = Number( b.replace( regex, '' ) );
	      }

	      if ( direction === DIRECTIONS.DOWN ) {
	        sign = -1
	      }

	      // Sort the values
	      if ( a < b ) {
	        order =  sign * -1;
	      } else if ( a > b ) {
	        order = sign;
	      }

	      return order;
	    };
	  },

	  /**
	   * Function used as callback for the sortable click event.
	   *
	   * @param { Event } event - DOM event.
	   */
	  onSortableClick: function( event ) {
	    if( this.ui.sortButton ) {
	      this.removeClass( this.ui.sortButton, this.sortClass );
	    }
	    if ( this.ui.sortButton === event.target ) {
	      this.sortDirection = ~this.sortDirection;
	    } else {
	      this.ui.sortButton = event.target;
	      this.sortColumnIndex = this.getColumnIndex();
	      this.sortDirection = DIRECTIONS.UP;
	    }
	    // The active sort class is changing when the sort direction changes.
	    this.addClass( this.ui.sortButton, this.sortClass );
	    this.updateTable();

	    return this;
	  }

	};

	module.exports = TableSortable;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	
	/* ==========================================================================
	   Dom closest

	   Utility for retrieving the closest DOM element that
	   matches a give selector.

	   ========================================================================== */

	'use strict';

	/**
	 * Get the nearest parent node of an elementent.
	 *
	 * @param {HTMLNode} element - A DOM elementent.
	 * @param {string} selector - CSS selector.
	 * @returns {HTMLNode} Nearest parent node that matches the selector.
	 */
	function closest( element, selector ) {
	  if ( 'closest' in element ) {
	    return element.closest( selector );
	  }

	  var matchesSelector = element.matches ||
	                        element.webkitMatchesSelector ||
	                        element.mozMatchesSelector ||
	                        element.msMatchesSelector;
	  var match;

	  while ( element ) {
	    if ( matchesSelector.bind( element )( selector ) ) {
	      match = element;
	    } else {
	      element = element.parentElement;
	    }

	    if ( match ) { return element; }
	  }

	  return null;
	}

	// Expose public methods.
	module.exports = {
	  closest: closest
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* ==========================================================================
	   Table Row Links

	   Mixin for adding row link click functionality to table organism.

	   ========================================================================== */

	'use strict';

	var closest = __webpack_require__( 30 ).closest;

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
	  },

	  /**
	   * Handle initilization of Table Row Links. Added for standalone
	   * use cases.
	   *
	   */
	  init: function() {
	    var elements = document.querySelector( TableRowLinks.ui.base );
	    for ( var i = 0; i < elements.length; ++i ) {
	      if( elements[i].hasAttribute( 'data-bound' ) === false ) {
	        elements[i].addEventListener( 'click', table,
	        TableRowLinks.onRowLinkClick );
	      }
	    }
	  }
	};

	module.exports = TableRowLinks;


/***/ })
/******/ ]);