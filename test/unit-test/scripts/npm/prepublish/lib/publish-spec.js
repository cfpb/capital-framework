const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

describe( 'publish', () => {
  beforeEach( () => {
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'publish the passed component to NPM', () => {
    util.publish( 'cf-core' );

    expect( execStub ).toBeCalledWith(
      'npm publish',
      { cwd: './tmp/cf-core' }
    );
  } );
} );
