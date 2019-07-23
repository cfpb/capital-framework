const path = require( 'path' );

/**
 * This file is a less plugin that gets included in a less file via the
 * `@plugin "cf-icons-svg-inline";` syntax.
 * The `install` function and the `function.add()` method are the hooks
 * necessary for the less preprocessor to pick this up and run it at build-time.
 * The plugin name specified in the less file, this file's filename,
 * and the name passed to `function.add()` must all be the same.
 * See http://lesscss.org/features/#plugin-atrules-feature-writing-your-first-plugin
 */

module.exports = {
  install: function( less, pluginManager, functions ) {
    functions.add( 'cf-icons-svg-inline', svgName => {
      // Retrieve this plugin script's path so we can fake __dirname.
      const thisScriptPath = less.importManager.context.pluginManager.installedPlugins[0].filename;

      // __dirname is not accessible in this script, so this fakes it.
      const __dirname = path.dirname( thisScriptPath );

      const svg = less.fs.readFileSync(
        path.join( __dirname, `./icons/${ svgName.value }.svg` ),
        'utf8'
      );

      return svg;
    } );
  }
}
