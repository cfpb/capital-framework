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
  var getElement;

  module( 'cf-tables', {
    // This will run before each test in this module.
    setup: function() {
      getElement = document.querySelector.bind( document );
      this.testOne = getElement( '#test-one' );
    }
  });

  test( '".sort-up class sorts on load', function( assert ) {
    expect( 3 );

    ok(
      getElement('#test-one tbody tr:nth-child(1) td:nth-child(3)').innerText.trim() === '1.2 mi',
      'Row 1 is correct'
    );

    ok(
      getElement('#test-one tbody tr:nth-child(5) td:nth-child(3)').innerText.trim() === '2.6 mi',
      'Row 3 is correct'
    );

    ok(
      getElement('#test-one tbody tr:nth-child(7) td:nth-child(3)').innerText.trim() === '11.1 mi',
      'Row 7 is correct'
    );

  } );


  test( 'Column sorts low-to-high on click ', function() {
    expect( 3 );
    getElement('#lang-sort').click();
    ok(
      getElement('#test-one tbody tr:nth-child(1) td:nth-child(2)').innerText.trim() === 'English',
      'Row 1 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(4) td:nth-child(2)').innerText.trim() === 'English, French, Spanish',
      'Row 4 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(7) td:nth-child(2)').innerText.trim() === 'English, Spanish',
      'Row 7 is correct'
    );
  });

  test( 'Column sorts high-to-low on second click ', function() {
    expect( 3 );
    getElement('#lang-sort').click();
    ok(
      getElement('#test-one tbody tr:nth-child(7) td:nth-child(2)').innerText.trim() === 'English',
      'Row 7 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(4) td:nth-child(2)').innerText.trim() === 'English, French, Spanish',
      'Row 4 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(1) td:nth-child(2)').innerText.trim() === 'English, Spanish',
      'Row 1 is correct'
    );
  });

  test( 'Column sorts low-to-high on click for "number" sort type', function() {
    expect( 3 );
    getElement('#dist-sort').click();
    ok(
      getElement('#test-one tbody tr:nth-child(1) td:nth-child(3)').innerText.trim() === '1.2 mi',
      'Row 1 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(5) td:nth-child(3)').innerText.trim() === '2.6 mi',
      'Row 3 is correct'
    );
    ok(
      getElement('#test-one tbody tr:nth-child(7) td:nth-child(3)').innerText.trim() === '11.1 mi',
      'Row 7 is correct'
    );
  });


}());
