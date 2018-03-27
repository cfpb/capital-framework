'use strict';

const srcPath = require('../src-path');
const chai = require('chai');
const expect = chai.expect;
const config = require(srcPath + '/utilities/config');

describe('config', () => {
  it('should return the proper configurations and constants', () => {
    expect(config.DIRECTIONS).to.be.an('object');
    expect(config.TYPES).to.be.an('object');
    expect(config.PREFIXES).to.be.an('object');
    expect(config.UNDEFINED).to.be.an('undefined');
    expect(config.NO_OP_FUNCTION).to.be.an('function');
    expect(config.NO_OP_FUNCTION()).to.be.an('undefined');
  });
});
