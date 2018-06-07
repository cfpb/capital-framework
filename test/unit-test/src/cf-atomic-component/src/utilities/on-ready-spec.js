const srcPath = require( '../src-path' );

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
  beforeAll( () => {
    onReady = require( srcPath + '/utilities/on-ready' ).onReady;

    Object.defineProperty( document, 'readyState', {
      get: function() {
        return _documentState;
      }
    } );
  } );

  beforeEach( () => setDocumentState( DOCUMENT_STATES.LOADING ) );

  it( 'should return early if passed a string', () => {
    const _readyFuntions = onReady( 'foo' );
    expect( _readyFuntions.length ).toBe( 0 );
  } );

  it( 'should add a function to the saved array and trigger it' +
      'when readyState completes', () => {
    let readyReturn;
    let _readyFunctions;

    onReady( function() {
      readyReturn = 'foo';
    } );

    _readyFunctions = onReady( function() {
      readyReturn = 'foo';
    } );

    expect( _readyFunctions.length ).toBe( 2 );

    return triggerReadyState( DOCUMENT_STATES.COMPLETE )
      .then( function() {
        expect( _readyFunctions ).toBeInstanceOf( Object );
        expect( _readyFunctions.length ).toBe( 0 );
      } );
  }
  );

  it( 'should add a function to the saved array but not trigger it' +
      'if state is loading', () => {
    let readyReturn;
    let _readyFunctions;

    onReady( function() {
      readyReturn = 'foo';
    } );

    _readyFunctions = onReady( function() {
      readyReturn = 'foo';
    } );

    expect( _readyFunctions.length ).toBe( 2 );

    return triggerReadyState( DOCUMENT_STATES.LOADING )
      .then( function() {
        expect( _readyFunctions ).toBeInstanceOf( Object );
        expect( _readyFunctions.length ).toBe( 2 );
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
          expect( readyReturn ).toBe( 'foo' );
        } );
    }
  );
} );
