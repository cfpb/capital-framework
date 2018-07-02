const srcPath = require( '../src-path' );
let AtomicComponent = require( srcPath + '/components/AtomicComponent' );

const HTML_SNIPPET = `
  <div id="test-block-a" class="test-class test-class-a">
    <div id="test-block-b" class="test-class-b">
      <div id="test-block-c" class="test-class-c"></div>
   </div>
  </div>
`;

describe( 'AtomicComponent', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    AtomicComponent = require( srcPath + '/components/AtomicComponent' );
  } );

  it( 'should correctly create an Atomic Component instance', () => {
    const element = document.getElementById( 'test-block-a' );
    const initialize = jest.fn();
    const options = {
      initialize: initialize,
      events:     {
        keydown: 'keyAction'
      },
      keyAction: jest.fn()
    };

    const atomicComponent = new AtomicComponent( element, options );
    expect( atomicComponent.element === element ).toBe( true );
    expect( atomicComponent.events ).toBeInstanceOf( Object );
    expect( initialize ).toHaveBeenCalledTimes( 1 );
    expect( atomicComponent.uId.indexOf( 'ac' ) > -1 ).toBe( true );
    expect( atomicComponent.render() === atomicComponent ).toBe( true );
  }
  );

  it( 'should correctly attach an element', () => {
    let atomicComponent = new AtomicComponent();
    expect( atomicComponent.element.tagName === 'DIV' ).toBe( true );
    const element = document.createElement( 'span' );
    atomicComponent = new AtomicComponent( element );
    expect( atomicComponent.element.tagName === 'SPAN' ).toBe( true );
    atomicComponent = new AtomicComponent( '',
      { id: 'test_id', className: 'test_class_name' }
    );
    expect( atomicComponent.element.id === 'test_id' ).toBe( true );
    expect( atomicComponent.element.className === 'test_class_name' ).toBe( true );
  }
  );

  it( 'should correctly create sub classes', () => {
    const subComponent = new ( AtomicComponent.extend( {} ) )();
    expect( subComponent._super === AtomicComponent.prototype ).toBe( true );
    expect( subComponent instanceof AtomicComponent ).toBe( true );
  }
  );

  it( 'should add the bound attribute to passed elements', () => {
    const element = document.getElementById( 'test-block-a' );
    const atomicComponent = new AtomicComponent( element );
    expect( element.hasAttribute( 'data-bound' ) ).toBe( true );
  }
  );
} );
