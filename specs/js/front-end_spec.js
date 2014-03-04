describe("My project", function() {

  jasmine.getFixtures().fixturesPath = 'specs/js/fixtures';

  beforeEach(function() {
    loadFixtures('sample_fixture.html');
  });

  it("should contain a 'bar' list", function() {
    expect( $('#jasmine-fixtures') ).toContain('ul.bar');
  });

  it("should contain a 'bar' list with five list items", function() {
    expect( $('#jasmine-fixtures ul.bar li').length ).toEqual( 5 );
  });

});