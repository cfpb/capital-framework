/* ==========================================================================
   Settings for webpack JavaScript bundling system.
   ========================================================================== */

const BROWSER_LIST = require( './browser-list-config' );
const webpack = require( 'webpack' );
const UglifyWebpackPlugin = require( 'uglifyjs-webpack-plugin' );

// Constants
const COMMON_BUNDLE_NAME = 'common.js';

/* Commmon webpack 'module' option used in each configuration.
   Runs code through Babel and uses global supported browser list. */
const COMMON_MODULE_CONFIG = {
  rules: [ {
    use: {
      loader: 'babel-loader?cacheDirectory=true',
      options: {
        presets: [ [ 'env', {
          targets: {
            browsers: BROWSER_LIST.LAST_2_PLUS_IE_9_AND_UP
          },
          debug: false
        } ] ]
      }
    }
  } ]
};

/* Set warnings to true to show linter-style warnings.
   Set mangle to false and beautify to true to debug the output code. */
const COMMON_UGLIFY_CONFIG = new UglifyWebpackPlugin( {
  parallel: true,
  uglifyOptions: {
    ie8: false,
    ecma: 5,
    warnings: false,
    mangle: true,
    output: {
      comments: false,
      beautify: false
    }
  }
} );

const STATS_CONFIG = {
  stats: {
    entrypoints: false
  }
};

const commonConf = {
  cache: true,
  module: COMMON_MODULE_CONFIG,
  mode: 'production',
  output: {
    filename: '[name]'
  },
  plugins: [
    COMMON_UGLIFY_CONFIG
  ],
  stats: STATS_CONFIG.stats
};

module.exports = commonConf;
