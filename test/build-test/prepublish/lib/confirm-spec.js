process.env.CONTINUOUS_INTEGRATION = false;

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const childProcess = require('child-process-promise');
const path = require('path');
const rootPath = require('../root-path');
const libPath = path.join(rootPath, 'scripts', 'npm', 'prepublish', 'lib');
const util = require(libPath);
const opts = {
  prompt: 'Publish the components?',
  yes: 'Publishing the components to npm...',
  no: 'Aborting. See ya!'
};
let execStub;
let processStub;

chai.use(sinonChai);

describe('confirm', () => {
  beforeEach(() => {
    execStub = sinon.stub(childProcess, 'exec');
    processStub = sinon.stub(process, 'exit');
  });

  afterEach(() => {
    execStub.restore();
    processStub.restore();
  });

  xit('should continue if the user replies with "yes"', () => {
    // TODO: Figure out how to pass user replies to the command line
    return util.confirm(opts).then(() => {
      expect(true).to.equal(false);
    });
  });

  xit('should abort if the user replies with "no"', () => {
    // TODO: Figure out how to pass user replies to the command line
    return util.confirm(opts).then(() => {
      expect(true).to.equal(false);
    });
  });

  it('should continue if we’re in a CLI environment', () => {
    process.env.CONTINUOUS_INTEGRATION = true;
    return util.confirm(opts).then(() => {
      expect(processStub).to.not.be.calledWith(1);
    });
  });
});
