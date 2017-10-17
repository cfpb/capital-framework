'use strict';

const srcPath = require( '../src-path' );

const chai = require( 'chai' );
const expect = chai.expect;
const jsdom = require( 'jsdom-global' );
let onReady;
let _documentState;

const DOCUMENT_STATES = {
  COMPLETE: 'complete',
  LOADING:  'loading'
};

function setDocumentState( state ) {
  _documentState = state;
}

function triggerReadyState( state, time = 100 ) {

  return new Promise( function readyStateChange( resolve, reject ) {
    window.setTimeout( () => {
      setDocumentState( state );
      const readyStateEvent = new Event( 'readystatechange' );
      document.dispatchEvent( readyStateEvent );
      resolve( document );
    }, time );
  } );
}

describe( 'on-ready', function() {
  before( () => {
    this.jsdom = jsdom();
    onReady = require( srcPath + '/utilities/on-ready' ).onReady;

    Object.defineProperty( document, 'readyState', {
      get: function() {
        return _documentState;
      }
    } );
  } );

  beforeEach( () => setDocumentState( DOCUMENT_STATES.LOADING ) );

  after( () => this.jsdom() );

  it( 'should return early if passed a string',
    function() {
      const _readyFuntions = onReady( 'foo' );

      expect( _readyFuntions.length ).to.equal( 0 );
    }
  );

  it( 'should add a function to the saved array and trigger it' +
       'when readyState completes',

    function() {
      let readyReturn;
      let _readyFunctions;

      onReady( function() {
        readyReturn = 'foo';
      } );

      _readyFunctions = onReady( function() {
        readyReturn = 'foo';
      } );

      expect( _readyFunctions.length ).to.equal( 2 );

      return triggerReadyState( DOCUMENT_STATES.COMPLETE )
              .then( function() {
                expect( typeof _readyFunctions ).to.equal( 'object' );
                expect( _readyFunctions.length ).to.equal( 0 );
              } );
    }
  );

  it( 'should add a function to the saved array but not trigger it' +
       'if state is loading',

    function() {
      let readyReturn;
      let _readyFunctions;

      onReady( function() {
        readyReturn = 'foo';
      } );

      _readyFunctions = onReady( function() {
        readyReturn = 'foo';
      } );

      expect( _readyFunctions.length ).to.equal( 2 );

      return triggerReadyState( DOCUMENT_STATES.LOADING )
              .then( function() {
                expect( typeof _readyFunctions ).to.equal( 'object' );
                expect( _readyFunctions.length ).to.equal( 2 );
              } );
    }
  );

  it( 'should run the function if the page readyState has already completed',
    () => {
      let readyReturn;

      return triggerReadyState( DOCUMENT_STATES.COMPLETE )
              .then( function() {
                onReady( function() {
                  readyReturn = 'foo';
                } );
                expect( readyReturn ).to.equal( 'foo' );
              } );
    }
  );
} );
