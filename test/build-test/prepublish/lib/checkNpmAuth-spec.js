const sinon = require( 'sinon' );
const chai = require( 'chai' );
const expect = chai.expect;
const sinonChai = require( 'sinon-chai' );
const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
const printLn = util.printLn;
let execStub;
let processStub;
let printErrorStub;
let printInfoStub;

chai.use( sinonChai );

describe( 'checkNpmAuth', () => {
  beforeEach( () => {
    execStub = sinon.stub( childProcess, 'exec' );
    processStub = sinon.stub( process, 'exit' );
    printErrorStub = sinon.stub( printLn, 'error' );
    // Stubbing printLn.info avoids printing the user name mid-test
    printInfoStub = sinon.stub( printLn, 'info' );
  } );

  afterEach( () => {
    execStub.restore();
    processStub.restore();
    printErrorStub.restore();
    printInfoStub.restore();
  } );

  it( 'should warn you if you’re not logged into NPM', () => {
    // Stubbing console.error avoids printing the expected error mid-test
    const consoleStub = sinon.stub( console, 'error' );
    const errorMessage =
      'You\'re not logged into npm. You need to authorize ' +
      'this machine using `npm login`.';

    execStub.withArgs( 'npm whoami' ).rejects( 'ENEEDAUTH' );

    return util.checkNpmAuth( 'cf-core' ).then( () => {
      expect( printErrorStub ).to.be.calledWith( errorMessage );
      consoleStub.restore();
    } );
  } );

  it( 'should exit if the user is not authorized on NPM', () => {
    const errorMessage =
      'You\'re not listed as a maintainer in npm. ' +
      'Talk to a node-ledgable coworker for assistance.';

    execStub.withArgs( 'npm whoami' ).returns( { stdout: 'testUser\n' } );

    return util.checkNpmAuth( 'cf-core' ).then( () => {
      expect( printErrorStub ).to.be.calledWith( errorMessage );
    } );
  } );

  it( 'should complete if the user is authorized on NPM', () => {
    execStub.withArgs( 'npm whoami' ).returns( { stdout: 'cfpbot\n' } );

    return util.checkNpmAuth( 'cf-core' ).then( () => {
      expect( processStub ).to.not.be.calledWith( 1 );
    } );
  } );
} );
