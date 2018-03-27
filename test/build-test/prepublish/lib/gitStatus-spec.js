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

describe('gitStatus', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should get the git status of the passed directory', () => {
    util.getGitStatus('/some/random/directory');

    expect(execStub).to.be.calledWith('git status -s /some/random/directory');
  });
});
