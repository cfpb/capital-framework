const srcPath = require( '../src-path' );

let domClosest;

let testBlockA;
let testBlockB;
let testBlockC;
let testBlockD;
let UNDEFINED;

const HTML_SNIPPET = `
  <section id="test-block-a">
    <div id="test-block-b">
      <div id="test-block-c" >
        <div id="test-block-d"></div>
      </div>
    </div>
  </section>
`;

describe( 'dom-closest', () => {

  beforeAll( () => {
    document.body.innerHTML = HTML_SNIPPET;
    domClosest = require( srcPath + '/utilities/dom-closest' ).closest;
    testBlockA = document.getElementById( 'test-block-a' );
    testBlockB = document.getElementById( 'test-block-b' );
    testBlockC = document.getElementById( 'test-block-c' );
    testBlockD = document.getElementById( 'test-block-d' );
  } );

  it( 'should find the current DOM node if the node matches the selector',
    () => {
      let element = domClosest( testBlockD, 'div' );
      expect( element === testBlockD ).toBe( true );
      element = domClosest( testBlockD, 'div div' );
      expect( element === testBlockD ).toBe( true );
    }
  );

  it( 'should return null if a node isn\'t found', () => {
    let element = domClosest( testBlockA, '.test-block' );
    expect( element === null ).toBe( true );
    element = domClosest( testBlockA, 'div.test' );
    expect( element === null ).toBe( true );
  } );

  it( 'should return the correct parent node', () => {
    let element = domClosest( testBlockD, 'section' );
    expect( element === testBlockA ).toBe( true );
    element = domClosest( testBlockC, 'section > div' );
    expect( element === testBlockB ).toBe( true );
  } );

  it( 'should use the native closest method if it exists', () => {
    const spy = testBlockD.closest = jest.fn();
    domClosest( testBlockD, 'section' );
    expect( spy ).toHaveBeenCalled();
  } );

  it( 'should use the correct matches method', () => {
    const spy = jest.fn();
    delete testBlockD.closest;
    testBlockD.matches = UNDEFINED;
    testBlockD.webkitMatchesSelector = spy;
    domClosest( testBlockD, 'section' );
    expect( spy ).toHaveBeenCalled();

    testBlockD.webkitMatchesSelector = UNDEFINED;
    spy.mockReset();
    testBlockD.mozMatchesSelector = spy;
    domClosest( testBlockD, 'section' );
    expect( spy ).toHaveBeenCalled();

    testBlockD.mozMatchesSelector = UNDEFINED;
    spy.mockReset();
    testBlockD.msMatchesSelector = spy;
    domClosest( testBlockD, 'section' );
    expect( spy ).toHaveBeenCalled();
  } );
} );
