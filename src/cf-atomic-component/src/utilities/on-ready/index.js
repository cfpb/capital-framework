/* ==========================================================================
   On Ready

   Utility for triggering functions only after the page is loaded

   ========================================================================== */

const _readyFunctions = [];

/**
 * Checks if the document is ready, if it is, trigger the passed function,
 * if not, push the function to an array to be triggered after the page
 * is loaded.
 * @param {Function} fn -
 *   Function to run only after the DOM has completely loaded.
 * @returns {Array} List of functions to run after the DOM has loaded.
 */
function onReady( fn ) {
  // Ensure we passed a function as the argument
  if ( typeof fn !== 'function' ) {
    return [];
  }

  /*
    If the ready state is already complete, run the passed function,
    otherwise add it to our saved array.
  */
  if ( document.readyState === 'complete' ) {
    fn();
  } else {
    _readyFunctions.push( fn );
  }

  // When the ready state changes to complete, run the passed function
  document.onreadystatechange = function() {
    if ( document.readyState === 'complete' ) {
      for ( let i = 0, l = _readyFunctions.length; i < l; i++ ) {
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
