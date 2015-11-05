(function( $ ) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module( 'cf-expandables', {
    // This will run before each test in this module.
    setup: function() {
      this.$testSubjectOne = $('#test-subject-one');
      this.$testSubjectTwo = $('#test-subject-two');
      this.$testSubjectThreeA = $('#test-subject-three-a');
      this.$testSubjectThreeB = $('#test-subject-three-b');
      this.$testSubjectFour = $('#test-subject-four');
      this.$testSubjectFourA = $('#test-subject-four-a');
      this.$testSubjectFourAContent = $('#test-subject-four-a_content');
      this.$testSubjectFourB = $('#test-subject-four-b');
      this.$testSubjectFourBContent = $('#test-subject-four-b_content');
    }
  });

  test( 'Verify initial default collapsed state', function() {
    expect( 6 );
    ok(
      !$('#test-subject-one .expandable_content').is(':visible'),
      'The content should be collapsed'
    );
    ok(
      $('#test-subject-one .expandable_cue-open').is(':visible'),
      'The open cue should be visible'
    );
    ok(
      !$('#test-subject-one .expandable_cue-close').is(':visible'),
      'The close cue should be hidden'
    );
    ok(
      ( $('#test-subject-one .expandable_target').attr('aria-pressed') === 'false' ),
      'The target should have an aria-pressed attribute set to false'
    );
    ok(
      ( $('#test-subject-one .expandable_target').attr('aria-controls') === $('#test-subject-one .expandable_content').attr('id') ),
      'The target should have an aria-controls attribute set to the id attribute of the content'
    );
    ok(
      ( $('#test-subject-one .expandable_content').attr('aria-expanded') === 'false' ),
      'The content should have an aria-expanded attribute set to false'
    );
  });

  test( 'Verify initial state when using the expanded modifier', function() {
    expect( 6 );
    ok(
      $('#test-subject-two .expandable_content').is(':visible'),
      'The content should be expanded'
    );
    ok(
      $('#test-subject-two .expandable_cue-close').is(':visible'),
      'The close cue should be visible'
    );
    ok(
      !$('#test-subject-two .expandable_cue-open').is(':visible'),
      'The open cue should be hidden'
    );
    ok(
      ( $('#test-subject-two .expandable_target').attr('aria-pressed') === 'true' ),
      'The target should have an aria-pressed attribute that is true'
    );
    ok(
      ( $('#test-subject-two .expandable_target').attr('aria-controls') === $('#test-subject-two .expandable_content').attr('id') ),
      'The target should have an aria-controls attribute set to the id attribute of the content'
    );
    ok(
      ( $('#test-subject-two .expandable_content').attr('aria-expanded') === 'true' ),
      'The content should have an aria-expanded attribute set to true'
    );
  });

  asyncTest( 'Verify expandables can open after being closed by default', function() {
    expect( 5 );
    var $expandable = this.$testSubjectOne;
    $expandable.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        $expandable.find('.expandable_content').is(':visible'),
        'The content should no longer be collapsed'
      );
      ok(
        $expandable.find('.expandable_cue-close').is(':visible'),
        'The close cue should be visible'
      );
      ok(
        !$expandable.find('.expandable_cue-open').is(':visible'),
        'The open cue should be hidden'
      );
      ok(
        ( $expandable.find('.expandable_target').attr('aria-pressed') === 'true' ),
        'The target should have an aria-pressed attribute that is true'
      );
      ok(
        ( $expandable.find('.expandable_content').attr('aria-expanded') === 'true' ),
        'The content should have an aria-expanded attribute set to true'
      );
      start();
    }, 900);
  });

  asyncTest( 'Verify expandables can close after being opened by a click', function() {
    expect( 5 );
    var $expandable = this.$testSubjectOne;
    // This expandable was opened in the previous test
    $expandable.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        !$expandable.find('.expandable_content').is(':visible'),
        'The content should be collapsed'
      );
      ok(
        $expandable.find('.expandable_cue-open').is(':visible'),
        'The open cue should be visible'
      );
      ok(
        !$expandable.find('.expandable_cue-close').is(':visible'),
        'The close cue should be hidden'
      );
      ok(
        ( $expandable.find('.expandable_target').attr('aria-pressed') === 'false' ),
        'The target should have an aria-pressed attribute that is false'
      );
      ok(
        ( $expandable.find('.expandable_content').attr('aria-expanded') === 'false' ),
        'The content should have an aria-expanded attribute set to true'
      );
      start();
    }, 1800);
  });

  asyncTest( 'Verify expandables can close after being open by default', function() {
    expect( 5 );
    var $expandable = this.$testSubjectTwo;
    $expandable.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        !$expandable.find('.expandable_content').is(':visible'),
        'The content should be collapsed'
      );
      ok(
        $expandable.find('.expandable_cue-open').is(':visible'),
        'The open cue should be visible'
      );
      ok(
        !$expandable.find('.expandable_cue-close').is(':visible'),
        'The close cue should be hidden'
      );
      ok(
        ( $expandable.find('.expandable_target').attr('aria-pressed') === 'false' ),
        'The target should have an aria-pressed attribute that is false'
      );
      ok(
        ( $expandable.find('.expandable_content').attr('aria-expanded') === 'false' ),
        'The content should have an aria-expanded attribute set to true'
      );
      start();
    }, 900);
  });

  asyncTest( 'Verify expandables can open after being closed by a click', function() {
    expect( 5 );
    var $expandable = this.$testSubjectTwo;
    // This expandable was opened in the previous test
    $expandable.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        $expandable.find('.expandable_content').is(':visible'),
        'The content should no longer be collapsed'
      );
      ok(
        $expandable.find('.expandable_cue-close').is(':visible'),
        'The close cue should be visible'
      );
      ok(
        !$expandable.find('.expandable_cue-open').is(':visible'),
        'The open cue should be hidden'
      );
      ok(
        ( $expandable.find('.expandable_target').attr('aria-pressed') === 'true' ),
        'The target should have an aria-pressed attribute that is true'
      );
      ok(
        ( $expandable.find('.expandable_content').attr('aria-expanded') === 'true' ),
        'The content should have an aria-expanded attribute set to true'
      );
      start();
    }, 1800);
  });

  asyncTest( 'Verify activating expandable in accordion closes auto-opened expandable sibling', function() {
    expect( 10 );
    var $expandableA = this.$testSubjectThreeA,
        $expandableB = this.$testSubjectThreeB;
    // Note: $expandableA starts out as open by having the expandable__expanded
    // class set in the initial markup. This test activates $expandableB,
    // ensures that B opened correctly, and then ensures that A is now closed.
    $expandableB.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        $expandableB.find('.expandable_content').is(':visible'),
        'Expandable B content should no longer be collapsed'
      );
      ok(
        $expandableB.find('.expandable_cue-close').is(':visible'),
        'Expandable B close cue should be visible'
      );
      ok(
        !$expandableB.find('.expandable_cue-open').is(':visible'),
        'Expandable B open cue should be hidden'
      );
      ok(
        ( $expandableB.find('.expandable_target').attr('aria-pressed') === 'true' ),
        'Expandable B target should have an aria-pressed attribute that is true'
      );
      ok(
        ( $expandableB.find('.expandable_content').attr('aria-expanded') === 'true' ),
        'Expandable B content should have an aria-expanded attribute set to true'
      );
      ok(
        !$expandableA.find('.expandable_content').is(':visible'),
        'Expandable A content should now be collapsed'
      );
      ok(
        !$expandableA.find('.expandable_cue-close').is(':visible'),
        'Expandable A close cue should now be hidden'
      );
      ok(
        $expandableA.find('.expandable_cue-open').is(':visible'),
        'Expandable A open cue should now be visible'
      );
      ok(
        ( $expandableA.find('.expandable_target').attr('aria-pressed') === 'false' ),
        'Expandable A target should now have an aria-pressed attribute that is false'
      );
      ok(
        ( $expandableA.find('.expandable_content').attr('aria-expanded') === 'false' ),
        'Expandable A content should now have an aria-expanded attribute set to false'
      );
      start();
    }, 900);
  });

  asyncTest( 'Verify activating expandable in accordion closes click-opened expandable sibling', function() {
    expect( 10 );
    var $expandableA = this.$testSubjectThreeA,
        $expandableB = this.$testSubjectThreeB;
    // Note: $expandableB was opened by click in the previous test.
    $expandableA.find('.expandable_target').trigger('click');
    setTimeout(function() {
      ok(
        $expandableA.find('.expandable_content').is(':visible'),
        'Expandable A content should no longer be collapsed'
      );
      ok(
        $expandableA.find('.expandable_cue-close').is(':visible'),
        'Expandable A close cue should be visible'
      );
      ok(
        !$expandableA.find('.expandable_cue-open').is(':visible'),
        'Expandable A open cue should be hidden'
      );
      ok(
        ( $expandableA.find('.expandable_target').attr('aria-pressed') === 'true' ),
        'Expandable A target should have an aria-pressed attribute that is true'
      );
      ok(
        ( $expandableA.find('.expandable_content').attr('aria-expanded') === 'true' ),
        'Expandable A content should have an aria-expanded attribute set to true'
      );
      ok(
        !$expandableB.find('.expandable_content').is(':visible'),
        'Expandable B content should now be collapsed'
      );
      ok(
        !$expandableB.find('.expandable_cue-close').is(':visible'),
        'Expandable B close cue should now be hidden'
      );
      ok(
        $expandableB.find('.expandable_cue-open').is(':visible'),
        'Expandable B open cue should now be visible'
      );
      ok(
        ( $expandableB.find('.expandable_target').attr('aria-pressed') === 'false' ),
        'Expandable B target should now have an aria-pressed attribute that is false'
      );
      ok(
        ( $expandableB.find('.expandable_content').attr('aria-expanded') === 'false' ),
        'Expandable B content should now have an aria-expanded attribute set to false'
      );
      start();
    }, 1800);
  });

  test( 'Verify that expanding an expandable with nested expandables does not trigger expansion on the nested expandables', function() {
    expect( 1 );
    var expandable = this.$testSubjectFour.get( 0 ),
        $expandableAContent = this.$testSubjectFourAContent,
        $expandableBContent = this.$testSubjectFourBContent;
    expandable.expand( 0 );
    ok(
      !$expandableAContent.is(':visible') && !$expandableBContent.is(':visible'),
      'Nested expandables should remain collapsed after the parent is expanded.'
    );
  });

  test( 'Verify that expanding a nested expandable with nested expandables does not trigger expansion on the nested expandables', function() {
    expect( 1 );
    var expandableA = this.$testSubjectFourA.get( 0 ),
        $expandableBContent = this.$testSubjectFourBContent;
    expandableA.expand( 0 );
    ok(
      !$expandableBContent.is(':visible'),
      'Nested expandables should remain collapsed after the parent is expanded.'
    );
  });

  test( 'Verify that collapsing an expandable with nested expandables does not trigger collapsing on the nested expandables', function() {
    expect( 1 );
    var expandable = this.$testSubjectFour.get( 0 ),
        expandableA = this.$testSubjectFourA.get( 0 ),
        $expandableAContent = this.$testSubjectFourAContent,
        expandableB = this.$testSubjectFourB.get( 0 ),
        $expandableBContent = this.$testSubjectFourBContent;
    expandableA.expand( 0 );
    expandableB.expand( 0 );
    expandable.collapse( 0 );
    ok(
      $expandableAContent.attr('aria-expanded') === 'true' && $expandableBContent.attr('aria-expanded') === 'true',
      'Nested expandables should remain expanded after the parent is collapsed.'
    );
  });

  test( 'Verify the constrainValue method', function() {
    expect( 3 );
    ok(
      ( $.fn.expandable.constrainValue( 100, 200, 50 ) === 100 ),
      'The value 50 is less than the minimum so constrainValue should return the minimum'
    );
    ok(
      ( $.fn.expandable.constrainValue( 100, 200, 250 ) === 200 ),
      'The value 250 is more than the maximum so constrainValue should return the maximum'
    );
    ok(
      ( $.fn.expandable.constrainValue( 100, 200, 150 ) === 150 ),
      'The value 150 is between the minimum and maximum so constrainValue should return 150'
    );
  });

  test( 'Verify dynamic duration based on height', function() {
    expect( 2 );
    $('#test-subject-one .expandable_content').height( 200 );
    ok(
      ( $.fn.expandable.calculateExpandDuration( $('#test-subject-one .expandable_content').height() ) === 800 ),
      'The duration should be (height * 4) when expanding'
    );
    $('#test-subject-two .expandable_content').height( 200 ).trigger('click');
    ok(
      ( $.fn.expandable.calculateCollapseDuration( $('#test-subject-two .expandable_content').height() ) === 400 ),
      'The duration should be (height * 2) when collapsing'
    );
  });

}( jQuery ));
