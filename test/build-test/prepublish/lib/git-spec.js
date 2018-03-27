process.env = {
  GH_PROD_BRANCH: 'master',
  GH_DEV_BRANCH: 'canary',
  GH_TOKEN: false
};

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const childProcess = require('child-process-promise');
const path = require('path');
const rootPath = require('../root-path');
const libPath = path.join(rootPath, 'scripts', 'npm', 'prepublish', 'lib');
const util = require(libPath);
let execStub;

chai.use(sinonChai);

describe('checkoutMaster', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should checkout the `master` branch', () => {
    util.git.checkoutMaster();

    expect(execStub).to.be.calledWith('git checkout master');
  });
});

describe('checkBranch', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should create a commit message using the passed version', () => {
    util.git.checkBranch();

    expect(execStub).to.be.calledWith('git rev-parse --abbrev-ref HEAD');
  });
});

describe('commit', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should create a commit message using the passed version', () => {
    util.git.commit('1.0.0');

    expect(execStub).to.be.calledWith('git commit -am "1.0.0"');
  });

  it('should create a default commit message if no version is passed', () => {
    util.git.commit();

    expect(execStub).to.be.calledWith(
      'git commit -am "Auto-incrementing version"'
    );
  });
});

describe('tag', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should tag the corresponding commit with the passed version', () => {
    util.git.tag('1.0.0');

    expect(execStub).to.be.calledWith('git tag -a 1.0.0 -m "1.0.0"');
  });
});

describe('push', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('pushes the commits and tags to the remote branch', () => {
    const repoURL = 'git+ssh://git@github.com/cfpb/capital-framework.git';
    return util.git.push(repoURL).then(() => {
      expect(execStub.firstCall).to.be.calledWithExactly(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git master'
      );
      expect(execStub.secondCall).to.be.calledWithExactly(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git ' +
          'master:canary'
      );
      expect(execStub.thirdCall).to.be.calledWithExactly(
        'git push git+ssh://git@github.com/cfpb/capital-framework.git --tags'
      );
    });
  });

  it('pushes the commits and tags to the remote branch when a token exists', () => {
    process.env.GH_TOKEN = 'testToken';
    const repoURL = 'git+ssh://git@github.com/cfpb/capital-framework.git';
    return util.git.push(repoURL).then(() => {
      expect(execStub.firstCall).to.be.calledWithExactly(
        'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" master'
      );
      expect(execStub.secondCall).to.be.calledWithExactly(
        'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" ' +
          'master:canary'
      );
      expect(execStub.thirdCall).to.be.calledWithExactly(
        'git push ' +
          '"https://testToken@github.com/cfpb/capital-framework.git" --tags'
      );
    });
  });
});
