const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let processExitStub;
let processOnStub;
// let printErrorStub;

describe( 'index', () => {
  beforeEach( () => {
    processExitStub = jest.mock( process, 'exit' );
    processOnStub = jest.mock( process, 'on' );
    // printErrorStub = sinon.stub( printLn, 'error' );
  } );

  afterEach( () => {
    processExitStub.mockRestore();
    processOnStub.mockRestore();
    // printErrorStub.restore();
  } );

  xit( 'should print an error', () => {
    // TODO: Figure out how to stub SIGINT through the process stub
    processOnStub.returns( 'SIGINT' );
    util.printLn.info( 'foo' );

    expect( processExitStub ).toBeCalledWith( 1 );
  } );
} );
