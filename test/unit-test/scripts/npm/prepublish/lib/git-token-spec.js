// NOTE: Other git tests are in git-spec.js and do not set a token.
process.env = {
  GH_PROD_BRANCH: 'master',
  GH_DEV_BRANCH:  'canary',
  GH_TOKEN:       'testToken'
};

const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );

let execStub;

describe( 'push', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' ).mockImplementation();
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it(
    'pushes the commits and tags to the remote branch when a token exists',
    () => {
      process.env.GH_TOKEN = 'testToken';
      const repoURL = 'git+ssh://git@github.com/cfpb/capital-framework.git';
      return util.git.push( repoURL ).then( () => {
        expect( execStub ).toHaveBeenCalledTimes( 3 );
        expect( execStub.mock.calls[0][0] ).toBe(
          'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" master'
        );
        expect( execStub.mock.calls[1][0] ).toBe(
          'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" ' +
          'master:canary'
        );
        expect( execStub.mock.calls[2][0] ).toBe(
          'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" --tags'
        );
      } );
    }
  );
} );
