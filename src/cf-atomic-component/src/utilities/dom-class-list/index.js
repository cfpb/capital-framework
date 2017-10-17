/* ==========================================================================
   Dom class list

   Contains code copied from the following with major modifications :

   - http://stackoverflow.com/posts/18492076/revisions
   - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

   TODO: Integrate with https://github.com/wilsonpage/fastdom.  Refactor to
         eliminate redudant code.
   ========================================================================== */

'use strict';

const hasClassList = 'classList' in document.createElement( '_' );

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
  const addClassNamesArray = _sliceArgs( arguments );
  if ( hasClassList ) {
    element.classList.add.apply( element.classList, addClassNamesArray );
  } else {
    var classes = element.className.split( ' ' );
    addClassNamesArray.forEach( function( name ) {
      if ( classes.indexOf( name ) === -1 ) {
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
 * @returns {boolean} True if `element` contains class `className`.
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
  const removeClassNamesArray = _sliceArgs( arguments );
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
 * @param {string} className - CSS selector.
 * @param {boolean} forceFlag - True if `className` class
                                should be forcibly removed.
 * @returns {boolean} True if the flag existed, false otherwise.
 */
function toggleClass( element, className, forceFlag ) {
  let hasClass = false;
  if ( hasClassList ) {
    hasClass = element.classList.toggle( className );
  } else if ( forceFlag === false || contains( element, className ) ) {
    removeClass( element, forceFlag );
  } else {
    addClass( element, className );
    hasClass = true;
  }

  return hasClass;
}

// Expose public methods.
module.exports = {
  addClass: addClass,
  contains: contains,
  hasClassList: hasClassList,
  removeClass: removeClass,
  toggleClass: toggleClass
};
