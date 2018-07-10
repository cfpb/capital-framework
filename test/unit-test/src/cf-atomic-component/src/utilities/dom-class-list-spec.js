const srcPath = require( '../src-path' );

let classList;
let classListPath;
let testBlockA;
let testBlockB;
let testBlockC;

const HTML_SNIPPET = `
  <div id="test-block-a" class="test-class test-class-a">
    <div id="test-block-b" class="test-class-b">
      <div id="test-block-c" class="test-class-c"></div>' +
    </div>
  </div>
`;

describe( 'dom-class-list', () => {

  beforeAll( () => {
    document.body.innerHTML = HTML_SNIPPET;
    classListPath = srcPath + '/utilities/dom-class-list';
    testBlockA = document.querySelector( '#test-block-a' );
    testBlockB = document.querySelector( '#test-block-b' );
    testBlockC = document.querySelector( '#test-block-c' );
  } );

  beforeEach( () => {
    classList = require( classListPath );
  } );

  it( 'should determine if the browser supports class list', () => {
    expect( classList.hasClassList ).toBe( true );
  }
  );

  it( 'should determine if an element has a particular class', () => {
    const _createElement = global.document.createElement;
    expect( classList.contains( testBlockA, 'test-class-b' ) ).toBe( false );
    expect( classList.contains( testBlockA, 'test-class-a' ) ).toBe( true );
    expect( classList.contains( testBlockA, 'test-class' ) ).toBe( true );
    document.createElement = () => {
      // Empty mock function.
    };
    delete require.cache[require.resolve( classListPath )];
    document.body.innerHTML = HTML_SNIPPET;
    classList = require( classListPath );
    expect( classList.contains( testBlockA, 'test-class-b' ) ).toBe( false );
    expect( classList.contains( testBlockA, 'test-class-a' ) ).toBe( true );
    expect( classList.contains( testBlockA, 'test-class' ) ).toBe( true );
    document.createElement = _createElement;
  }
  );

  it( 'should correctly add classes to the class list', () => {
    document.body.innerHTML = HTML_SNIPPET;
    classList = require( classListPath );
    expect( testBlockB.className.indexOf( ' test-class' ) === -1 )
      .toBe( true );
    classList.addClass( testBlockB, 'test-class' );
    expect( testBlockB.className.indexOf( 'test-class' ) > -1 ).toBe( true );
    classList.addClass( testBlockB, 'test-class', 'test-class-new' );
    expect( testBlockB.className.indexOf( 'test-class-new' ) > -1 )
      .toBe( true );
  }
  );

  it( 'should correctly remove classes to the class list', () => {
    expect( testBlockC.className.indexOf( 'test-class-c' ) > -1 )
      .toBe( true );
    classList.removeClass( testBlockC, 'test-class-c' );
    expect( testBlockC.className.indexOf( 'test-class-c' ) === -1 )
      .toBe( true );
    testBlockC.className = 'test-class-c test-class';
    classList.removeClass( testBlockC, 'test-class-c', 'test-class' );
    expect( testBlockC.className === '' ).toBe( true );
  }
  );

  it( 'should correctly toggle classes', () => {
    expect( testBlockA.className.indexOf( 'test-class-a' ) > -1 )
      .toBe( true );
    classList.toggleClass( testBlockA, 'test-class-a' );
    expect( testBlockA.className.indexOf( 'test-class-c' ) === -1 )
      .toBe( true );
    testBlockC.className = 'test-class-a';
    classList.toggleClass( testBlockC, 'test-class-c', true );
    expect( testBlockC.className === 'test-class-a test-class-c' )
      .toBe( true );
  }
  );
} );
