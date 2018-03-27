const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const path = require('path');
const rootPath = require('../root-path');
const libPath = path.join(rootPath, 'scripts', 'npm', 'prepublish', 'lib');
const util = require(libPath);
const options = util.getArgs;
const logSymbols = require('log-symbols');
const chalk = require('chalk');
let consoleStub;

chai.use(sinonChai);

describe('print', () => {
  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should log a success message', () => {
    util.printLn.success('Yay, it worked');

    expect(consoleStub).to.be.calledWith(
      '  ' + logSymbols.success + ' Yay, it worked'
    );
  });

  it('should log an error message', () => {
    util.printLn.error('Shoot, something broke');

    expect(consoleStub).to.be.calledWith(
      '  ' + logSymbols.error + ' Shoot, something broke'
    );
  });

  it('should log a dimmed message', () => {
    util.printLn.console('Shoot, something broke');

    expect(consoleStub).to.be.calledWith(
      chalk.dim('        Shoot, something broke')
    );
  });

  xit('should log with four spaces of indentation', () => {
    // TODO: Figure out how to stub the getArgs options
    const optionsStub = sinon.stub(options, 'silent');
    optionsStub.returns(true);

    util.printLn.info('Here’s four spaces of indentation');

    expect(consoleStub).to.be.calledWith(
      '    ' + logSymbols.info + ' Shoot, something broke'
    );
    optionsStub.restore();
  });
});
