const sinon = require( 'sinon' );
const chai = require( 'chai' );
const expect = chai.expect;
const sinonChai = require( 'sinon-chai' );
const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

chai.use( sinonChai );

describe( 'getNpmVersion', () => {
  beforeEach( () => {
    execStub = sinon.stub( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.restore();
  } );

  it( 'should return an NPM package', () => {
    util.getNpmVersion( 'cf-core' ).then( data => {
      expect( data.name ).to.be( 'cf-core' );
      expect( data.description ).to.be( 'Capital Framework core styles' );
    } );
  } );
} );
