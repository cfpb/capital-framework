const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
const fs = require( 'fs' );

const FIXTURE_PATH = path.join( __dirname, '/../fixtures/' );
let writeStub;

const changelogExpectPath = path.join( FIXTURE_PATH, 'changelog-expected.md' );
const changelogFixturePath = path.join( FIXTURE_PATH, 'changelog.md' );
// eslint-disable-next-line no-sync
const changelogExpected = fs.readFileSync( changelogExpectPath, 'utf8' );

describe( 'changelog', () => {
  beforeEach( () => {
    fs.writeFile = jest.fn();
    writeStub = jest.spyOn( fs, 'writeFile' );
  } );

  afterEach( () => {
    writeStub.mockRestore();
  } );

  it( 'Calls the fs utility with the correct arguments', () => {
    util.changelog( changelogFixturePath, '2018-01-03', '1.1.0' );

    expect( writeStub ).toHaveBeenCalledWith(
      FIXTURE_PATH + 'changelog.md',
      changelogExpected,
      'utf8'
    );
  } );
} );
