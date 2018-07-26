import { simulateEvent } from '../../../../util/simulate-event';
const Expandable = require(
  '../../../../../src/cf-expandables/src/Expandable'
);

const HTML_SNIPPET = `
<div class="o-expandable-group o-expandable-group__accordion"
     id="test-group-one">

    <div class="o-expandable o-expandable__padded" id="test-subject-one">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>

    <div class="o-expandable o-expandable__padded" id="test-subject-two">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
`;

let expandableDom1;
let expandableDom2;

describe( 'Expandable', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    Expandable.init();
    expandableDom1 = document.querySelector( '#test-subject-one' );
    expandableDom2 = document.querySelector( '#test-subject-two' );
  } );

  describe( 'initial state', () => {
    it( 'should have collapsed content', () => {
      expect( expandableDom1.getAttribute( 'data-bound' ) ).toBe( 'true' );

      const contentDom = expandableDom1.querySelector(
        '.o-expandable_content'
      );
      expect( contentDom.offsetHeight ).toBe( 0 );
      expect( contentDom.style.maxHeight ).toBe( '' );
      expect( contentDom.classList.contains(
        'o-expandable_content__expanded'
      ) ).toBe( false );
      expect( contentDom.classList.contains(
        'o-expandable_content__collapsed'
      ) ).toBe( true );
    } );
  } );

  describe( 'interactions', () => {
    it( 'should expand on click', () => {
      const targetDom = expandableDom1.querySelector( '.o-expandable_target' );
      simulateEvent( 'click', targetDom );
      const contentDom = expandableDom1.querySelector(
        '.o-expandable_content'
      );
      expect( contentDom.style.maxHeight ).not.toBe( '' );
      expect( contentDom.classList.contains(
        'o-expandable_content__expanded'
      ) ).toBe( true );
      expect( contentDom.classList.contains(
        'o-expandable_content__collapsed'
      ) ).toBe( false );
    } );

    it( 'should go back to initial state on second click', () => {
      const targetDom = expandableDom1.querySelector( '.o-expandable_target' );
      simulateEvent( 'click', targetDom );
      simulateEvent( 'click', targetDom );
      const contentDom = expandableDom1.querySelector(
        '.o-expandable_content'
      );
      expect( contentDom.offsetHeight ).toBe( 0 );
      expect( contentDom.style.maxHeight ).toBe( '0' );
      expect( contentDom.classList.contains(
        'o-expandable_content__expanded'
      ) ).toBe( false );
      expect( contentDom.classList.contains(
        'o-expandable_content__collapsed'
      ) ).toBe( true );
    } );

    it( 'should swap open expandable on accordion click', () => {
      const targetDom1 = expandableDom1.querySelector( '.o-expandable_target' );
      const targetDom2 = expandableDom2.querySelector( '.o-expandable_target' );
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom2 );

      const contentDom1 = expandableDom1.querySelector(
        '.o-expandable_content'
      );
      expect( contentDom1.style.maxHeight ).toBe( '0' );
      expect( contentDom1.classList.contains(
        'o-expandable_content__expanded'
      ) ).toBe( false );
      expect( contentDom1.classList.contains(
        'o-expandable_content__collapsed'
      ) ).toBe( true );

      const contentDom2 = expandableDom2.querySelector(
        '.o-expandable_content'
      );
      expect( contentDom2.style.maxHeight ).not.toBe( '' );
      expect( contentDom2.classList.contains(
        'o-expandable_content__expanded'
      ) ).toBe( true );
      expect( contentDom2.classList.contains(
        'o-expandable_content__collapsed'
      ) ).toBe( false );
    } );
  } );
} );
