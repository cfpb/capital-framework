process.env = {
  GH_PROD_BRANCH: 'master',
  GH_DEV_BRANCH:  'canary',
  GH_TOKEN:       false
};

const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

describe( 'checkoutMaster', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'should checkout the `master` branch', () => {
    util.git.checkoutMaster();

    expect( execStub ).toBeCalledWith( 'git checkout master' );
  } );
} );

describe( 'checkBranch', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'should create a commit message using the passed version', () => {
    util.git.checkBranch();

    expect( execStub ).toBeCalledWith( 'git rev-parse --abbrev-ref HEAD' );
  } );
} );

describe( 'commit', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'should create a commit message using the passed version', () => {
    util.git.commit( '1.0.0' );

    expect( execStub ).toBeCalledWith( 'git commit -am "1.0.0"' );
  } );

  it( 'should create a default commit message if no version is passed', () => {
    util.git.commit();

    expect( execStub ).toBeCalledWith(
      'git commit -am "Auto-incrementing version"'
    );
  } );
} );

describe( 'tag', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'should tag the corresponding commit with the passed version', () => {
    util.git.tag( '1.0.0' );

    expect( execStub ).toBeCalledWith( 'git tag -a 1.0.0 -m "1.0.0"' );
  } );
} );

describe( 'push', () => {
  beforeEach( () => {
    childProcess.exec = jest.fn();
    execStub = jest.spyOn( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.mockRestore();
  } );

  it( 'pushes the commits and tags to the remote branch', () => {
    const repoURL = 'git+ssh://git@github.com/cfpb/capital-framework.git';
    return util.git.push( repoURL ).then( () => {
      expect( execStub ).toHaveBeenCalledTimes( 3 );
      expect( execStub.mock.calls[0][0] ).toBe(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git master'
      );
      expect( execStub.mock.calls[1][0] ).toBe(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git ' +
        'master:canary'
      );
      expect( execStub.mock.calls[2][0] ).toBe(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git --tags'
      );
    } );
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
