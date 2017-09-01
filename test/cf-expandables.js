'use strict';

( function( $ ) {

 /**
  *  ======== A Handy Little QUnit Reference ========
  *  http://api.qunitjs.com/
  *
  *  Test methods:
  *    module(name, {[setup][ ,teardown]})
  *    test(name, callback)
  *    expect(numberOfAssertions)
  *    stop(increment)
  *    start(decrement)
  *  Test assertions:
  *    ok(value, [message])
  *    equal(actual, expected, [message])
  *    notEqual(actual, expected, [message])
  *    deepEqual(actual, expected, [message])
  *    notDeepEqual(actual, expected, [message])
  *    strictEqual(actual, expected, [message])
  *    notStrictEqual(actual, expected, [message])
  *    throws(block, [expected], [message])
  **/

  module( 'cf-expandables', {
    setup: function() {
      this.$testSubjectOne = $( '#test-subject-one' );
      this.$testSubjectTwo = $( '#test-subject-two' );
      this.$testSubjectThreeA = $( '#test-subject-three-a' );
      this.$testSubjectThreeB = $( '#test-subject-three-b' );
      this.$testSubjectFourA = $( '#test-subject-four-a' );
      this.$testSubjectFourB = $( '#test-subject-four-b' );
    }
  } );

  test( 'Verify initial default collapsed state', function() {
    expect( 3 );
    ok(
      $( '#test-subject-one .o-expandable_content' ).innerHeight() === 0,
      'The content should be collapsed'
    );

    ok(
      $( '#test-subject-one .o-expandable_cue-open' ).is( ':visible' ),
      'The open cue should be visible'
    );

    ok(
      !$( '#test-subject-one .o-expandable_cue-close' ).is( ':visible' ),
      'The close cue should be hidden'
    );
  } );

  test( 'Verify initial state when using the expanded modifier', function() {
    expect( 3 );
    ok(
      $( '#test-subject-two .o-expandable_content' ).innerHeight() > 0,
      'The content should be expanded'
    );
    ok(
      $( '#test-subject-two .o-expandable_cue-close' ).is( ':visible' ),
      'The close cue should be visible'
    );
    ok(
      !$( '#test-subject-two .o-expandable_cue-open' ).is( ':visible' ),
      'The open cue should be hidden'
    );
  } );

  asyncTest( 'Verify expandables can open after being closed by default',
    function() {
      expect( 3 );
      var $expandable = this.$testSubjectOne;
      $expandable.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandable.find( '.o-expandable_content' ).innerHeight() > 0,
          'The content should no longer be collapsed'
        );
        ok(
          $expandable.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'The close cue should be visible'
        );
        ok(
          !$expandable.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'The open cue should be hidden'
        );
        start();
      }, 1500 );
    }
  );

  asyncTest( 'Verify expandables can close after being opened by a click',
    function() {
      expect( 3 );
      var $expandable = this.$testSubjectOne;
      // This expandable was opened in the previous test
      $expandable.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandable.find( '.o-expandable_content' ).innerHeight() === 0,
          'The content should be collapsed'
        );
        ok(
          $expandable.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'The open cue should be visible'
        );
        ok(
          !$expandable.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'The close cue should be hidden'
        );
        start();
      }, 3000 );
    }
  );

  asyncTest( 'Verify expandables can close after being open by default',
    function() {
      expect( 3 );
      var $expandable = this.$testSubjectTwo;
      $expandable.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandable.find( '.o-expandable_content' ).innerHeight() === 0,
          'The content should be collapsed'
        );
        ok(
          $expandable.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'The open cue should be visible'
        );
        ok(
          !$expandable.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'The close cue should be hidden'
        );
        start();
      }, 1500 );
    }
  );

  asyncTest( 'Verify expandables can open after being closed by a click',
    function() {
      expect( 3 );
      var $expandable = this.$testSubjectTwo;
      // This expandable was opened in the previous test
      $expandable.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandable.find( '.o-expandable_content' ).innerHeight() > 0,
          'The content should no longer be collapsed'
        );
        ok(
          $expandable.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'The close cue should be visible'
        );
        ok(
          !$expandable.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'The open cue should be hidden'
        );
        start();
      }, 3000 );
    }
  );

  test( 'Verify initial default collapsed state of expandables ' +
      'within a group',
    function() {
      expect( 6 );
      var $expandableA = this.$testSubjectThreeA,
          $expandableB = this.$testSubjectThreeB;
      ok(
        $expandableA.find( '.o-expandable_content' ).innerHeight() === 0,
        'Expandable A content should be collapsed'
      );
      ok(
        $expandableB.find( '.o-expandable_content' ).innerHeight() === 0,
        'Expandable B content should be collapsed'
      );
      ok(
        $expandableA.find( '.o-expandable_cue-open' ).is( ':visible' ),
        'Expandable A open cue should be visible'
      );
      ok(
        $expandableB.find( '.o-expandable_cue-open' ).is( ':visible' ),
        'Expandable B open cue should be visible'
      );
      ok(
        !$expandableA.find( '.o-expandable_cue-close' ).is( ':visible' ),
        'Expandable A open cue should be hidden'
      );
      ok(
        !$expandableB.find( '.o-expandable_cue-close' ).is( ':visible' ),
        'Expandable B open cue should be hidden'
      );
    }
  );

  asyncTest( 'Verify expandables within a group can open after being ' +
             'closed by default without affecting siblings',
    function() {
      expect( 6 );
      var $expandableA = this.$testSubjectThreeA,
          $expandableB = this.$testSubjectThreeB;
      // Note: $expandableA starts out as open by having the
      // expandable__expanded class set in the initial markup.
      // This test activates $expandableB, ensures that B opened correctly,
      // and then ensures that A is now closed.
      $expandableA.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandableA.find( '.o-expandable_content' ).innerHeight() > 0,
          'Expandable A content should no longer be collapsed'
        );
        ok(
          $expandableA.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable A close cue should be visible'
        );
        ok(
          !$expandableA.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable A open cue should be hidden'
        );
        ok(
          $expandableB.find( '.o-expandable_content' ).innerHeight() === 0,
          'Expandable B content should now be collapsed'
        );
        ok(
          !$expandableB.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable B close cue should now be hidden'
        );
        ok(
          $expandableB.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable B open cue should now be visible'
        );
        start();
      }, 1500 );
    }
  );

  asyncTest( 'Verify expandables within a group can close after being ' +
             'opened without affecting siblings',
    function() {
      expect( 6 );
      var $expandableA = this.$testSubjectThreeA,
          $expandableB = this.$testSubjectThreeB;
      // Note: $expandableA starts out as open by having the
      // expandable__expanded class set in the initial markup.
      // This test activates $expandableB, ensures that B opened correctly,
      // and then ensures that A is now closed.
      $expandableA.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandableA.find( '.o-expandable_content' ).innerHeight() === 0,
          'Expandable A content should no longer be collapsed'
        );
        ok(
          !$expandableA.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable A close cue should be hidden'
        );
        ok(
          $expandableA.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable A open cue should be visible'
        );
        ok(
          $expandableB.find( '.o-expandable_content' ).innerHeight() === 0,
          'Expandable B content should now be collapsed'
        );
        ok(
          !$expandableB.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable B close cue should now be hidden'
        );
        ok(
          $expandableB.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable B open cue should now be visible'
        );
        start();
      }, 3000 );
    }
  );

/*
  asyncTest( 'Verify expandables within an accordion group can be ' +
             'opened and close siblings',
    function() {
      expect( 6 );
      var $expandableA = this.$testSubjectFourA,
          $expandableB = this.$testSubjectFourB;
      // Note: $expandableB was opened by click in the previous test.
      $expandableB.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {

        ok(
          $expandableB.find( '.o-expandable_content' ).innerHeight() > 0,
          'Expandable B content should no longer be collapsed'
        );

        ok(
          $expandableB.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable B close cue should be visible'
        );
        ok(
          !$expandableB.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable B open cue should be hidden'
        );
        ok(
          $expandableA.find( '.o-expandable_content' ).innerHeight() === 0,
          'Expandable A content should now be collapsed'
        );
        ok(
          !$expandableA.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable A close cue should now be hidden'
        );
        ok(
          $expandableA.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable A open cue should now be visible'
        );
        start();
      }, 1500 );
    }
  );

  asyncTest( 'Verify activating expandable in accordion closes ' +
             'click-opened expandable sibling',
    function() {
      expect( 6 );
      var $expandableA = this.$testSubjectFourA,
          $expandableB = this.$testSubjectFourB;
      // Note: $expandableB was opened by click in the previous test.
      $expandableA.find( '.o-expandable_target' ).trigger( 'click' );
      setTimeout( function() {
        ok(
          $expandableA.find( '.o-expandable_content' ).innerHeight() > 0,
          'Expandable A content should no longer be collapsed'
        );
        ok(
          $expandableA.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable A close cue should be visible'
        );
        ok(
          !$expandableA.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable A open cue should be hidden'
        );
        ok(
          $expandableB.find( '.o-expandable_content' ).innerHeight() === 0,
          'Expandable B content should now be collapsed'
        );
        ok(
          !$expandableB.find( '.o-expandable_cue-close' ).is( ':visible' ),
          'Expandable B close cue should now be hidden'
        );
        ok(
          $expandableB.find( '.o-expandable_cue-open' ).is( ':visible' ),
          'Expandable B open cue should now be visible'
        );
        start();
      }, 3000 );
    }
  );
*/
}( jQuery ) );
