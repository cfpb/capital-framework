/* ==========================================================================
   Settings for project environment.
   Used by JavaScript gulp build process and JavaScript test configuration.
   ========================================================================== */

'use strict';

/**
 * @description
 * Browser list for autoprefixer, see https://github.com/ai/browserslist.
 * Support output lists can be viewed via copy/pasting into http://browserl.ist.
 * @param {string} codeType - The code to support. Either 'js' or 'css'.
 * @returns {array} List of supported browser strings.
 */
function getSupportedBrowserList( codeType ) {
  let supportList;
  if ( codeType === 'js' ) {
    supportList = [
      'last 2 version',
      'Edge >= 11',
      'ie >= 8',
      'android 4',
      'BlackBerry 7',
      'BlackBerry 10'
    ];
  } else if ( codeType === 'css' ) {
    supportList = [
      'last 2 version',
      'Edge >= 11',
      'ie >= 8',
      'android 4',
      'BlackBerry 7',
      'BlackBerry 10'
    ];
  } else {
    const msg = `Browser support not found for code type! ` +
                `Should 'js' or 'css' to be passed to ` +
                `environment.getSupportedBrowserList(…)?`;
    throw new Error( msg );
  }
  return supportList;
}

module.exports = {
  getSupportedBrowserList: getSupportedBrowserList
};
