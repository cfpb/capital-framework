const srcPath = require( '../src-path' );
const dataSet = require( srcPath + '/utilities/data-set' ).dataSet;

let baseDom;

const HTML_SNIPPET = `
  <div data-test-value-a="testValueA"
        data-test-value-B="testValueB"
        data-testValue-C="testValueC"
        data-test-ValuE-D="testValueD"
        data-TEST-value-E="testValueE">
    testValue
  </div>
`;

const datasetLookup = {
  testValueA: 'testValueA',
  testValueB: 'testValueB',
  testvalueC: 'testValueC',
  testValueD: 'testValueD',
  testValueE: 'testValueE'
};

describe( 'data-set', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    baseDom = document.querySelector( 'div' );
  } );

  it( 'should have the correct keys and values when using utility', () => {
    const dataset = dataSet( baseDom );
    expect( JSON.stringify( dataset ) === JSON.stringify( datasetLookup ) )
      .toBe( true );
  } );
} );
