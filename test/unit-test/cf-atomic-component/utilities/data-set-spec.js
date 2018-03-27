'use strict';

const srcPath = require('../src-path');

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
let sandbox;
let baseDom;
let dataSet;

const HTML_SNIPPET = `<div data-test-value-a="testValueA"
        data-test-value-B="testValueB"
        data-testValue-C="testValueC"
        data-test-ValuE-D="testValueD"
        data-TEST-value-E="testValueE">
    testValue
  </div>`;

const datasetLookup = {
  testValueA: 'testValueA',
  testValueB: 'testValueB',
  testvalueC: 'testValueC',
  testValueD: 'testValueD',
  testValueE: 'testValueE'
};

describe('data-set', () => {
  before(() => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    dataSet = require(srcPath + '/utilities/data-set').dataSet;
  });

  after(() => this.jsdom());

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    document.body.innerHTML = HTML_SNIPPET;
    baseDom = document.querySelector('div');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have the correct keys and values when using utility', () => {
    const dataset = dataSet(baseDom);
    expect(JSON.stringify(dataset) === JSON.stringify(datasetLookup)).to.equal(
      true
    );
  });
});
