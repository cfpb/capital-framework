const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const path = require('path');
const rootPath = require('../root-path');
const libPath = path.join(rootPath, 'scripts', 'npm', 'prepublish', 'lib');
const fixturesPath = path.join(
  rootPath,
  'test',
  'build-test',
  'prepublish',
  'fixtures'
);
const util = require(libPath);
const fs = require('fs');
let writeStub;

chai.use(sinonChai);

// eslint-disable-next-line no-sync
const changelogExpected = fs.readFileSync(
  fixturesPath + '/changelog-expected.md',
  'utf8'
);

describe('changelog', () => {
  beforeEach(() => {
    writeStub = sinon.stub(fs, 'writeFile');
  });

  afterEach(() => {
    writeStub.restore();
  });

  it('Calls the fs utility with the correct arguments', () => {
    util.changelog(fixturesPath + '/changelog.md', '2018-01-03', '1.1.0');

    expect(writeStub).to.be.calledWith(
      fixturesPath + '/changelog.md',
      changelogExpected,
      'utf8'
    );
  });
});
