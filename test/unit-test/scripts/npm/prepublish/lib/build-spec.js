const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

describe( 'build', () => {
  beforeEach( () => {
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  xit( 'should trigger a build of all CF components', () => {
    util.build();

    expect( execStub ).toHaveBeenCalledWith( 'gulp build' );
  } );

  it( 'should only trigger a build of the component that is passed', () => {
    util.build( {
      name: 'cf-typography'
    } );

    expect( execStub ).toHaveBeenCalledWith(
      'gulp build --component=cf-typography'
    );
  } );
} );
