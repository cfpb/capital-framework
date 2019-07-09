const path = require( 'path' );

module.exports = {
  install: function( less, pluginManager, functions ) {
    functions.add( 'cf-icons-svg-inline', svgName => {
      // Retrieve this plugin scripts path so we can fake __dirname.
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