const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

describe( 'gitStatus', () => {
  beforeEach( () => {
    execStub = jest.spyOn( childProcess, 'exec' ).mockImplementation();
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'should get the git status of the passed directory', () => {
    util.getGitStatus( '/some/random/directory' );

    expect( execStub ).toBeCalledWith( 'git status -s /some/random/directory' );
  } );
} );
