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

describe('build', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
  });

  afterEach(() => {
    execStub.restore();
  });

  it('should trigger a build of all CF components', () => {
    util.build();

    expect(execStub).to.be.calledWith('gulp build');
  });

  it('should only trigger a build of the component that is passed', () => {
    util.build({
      name: 'cf-typography'
    });

    expect(execStub).to.be.calledWith('gulp build --component=cf-typography');
  });
});
