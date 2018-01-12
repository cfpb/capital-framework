const sinon = require( 'sinon' );
const chai = require( 'chai' );
const expect = chai.expect;
const sinonChai = require( 'sinon-chai' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let processExitStub;
let processOnStub;
// let printErrorStub;

chai.use( sinonChai );

describe( 'index', () => {
  beforeEach( () => {
    processExitStub = sinon.stub( process, 'exit' );
    processOnStub = sinon.stub( process, 'on' );
    // printErrorStub = sinon.stub( printLn, 'error' );
  } );

  afterEach( () => {
    processExitStub.restore();
    processOnStub.restore();
    // printErrorStub.restore();
  } );

  xit( 'should print an error', () => {
    // TODO: Figure out how to stub SIGINT through the process stub
    processOnStub.returns( 'SIGINT' );
    util.printLn.info( 'foo' );

    expect( processExitStub ).to.be.calledWith( 1 );
  } );
} );
