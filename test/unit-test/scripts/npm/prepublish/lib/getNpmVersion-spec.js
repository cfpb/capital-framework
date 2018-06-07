const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );

describe( 'getNpmVersion', () => {
  it( 'should return an NPM package', () => {
    util.getNpmVersion( 'cf-core' ).then( data => {
      expect( data.name ).toBe( 'cf-core' );
      expect( data.description ).toBe( 'Capital Framework core styles' );
    } );
  } );
} );
