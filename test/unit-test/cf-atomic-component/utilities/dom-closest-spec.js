'use strict';

const srcPath = require('../src-path');

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

let domClosest;
let sandbox;

let testBlockA;
let testBlockB;
let testBlockC;
let testBlockD;
let UNDEFINED;

const HTML_SNIPPET = `<section id="test-block-a">
    <div id="test-block-b">
      <div id="test-block-c" >
        <div id="test-block-d"></div>
      </div>
    </div>
  </section>`;

describe('dom-closest', () => {
  before(() => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    domClosest = require(srcPath + '/utilities/dom-closest').closest;
    testBlockA = document.getElementById('test-block-a');
    testBlockB = document.getElementById('test-block-b');
    testBlockC = document.getElementById('test-block-c');
    testBlockD = document.getElementById('test-block-d');
  });

  after(() => this.jsdom());

  it('should find the current DOM node if the node matches the selector', () => {
    let element = domClosest(testBlockD, 'div');
    expect(element === testBlockD).to.equal(true);
    element = domClosest(testBlockD, 'div div');
    expect(element === testBlockD).to.equal(true);
  });

  it("should return null if a node isn't found", () => {
    let element = domClosest(testBlockA, '.test-block');
    expect(element === null).to.equal(true);
    element = domClosest(testBlockA, 'div.test');
    expect(element === null).to.equal(true);
  });

  it('should return the correct parent node', () => {
    let element = domClosest(testBlockD, 'section');
    expect(element === testBlockA).to.equal(true);
    element = domClosest(testBlockC, 'section > div');
    expect(element === testBlockB).to.equal(true);
  });

  it('should use the native closest method if it exists', () => {
    const spy = (testBlockD.closest = sinon.spy());
    const element = domClosest(testBlockD, 'section');
    expect(spy.called).to.equal(true);
  });

  it('should use the correct matches method', () => {
    const spy = sinon.spy();
    delete testBlockD.closest;
    testBlockD.matches = UNDEFINED;
    testBlockD.webkitMatchesSelector = spy;
    domClosest(testBlockD, 'section');
    expect(spy.called).to.equal(true);

    testBlockD.webkitMatchesSelector = UNDEFINED;
    spy.reset();
    testBlockD.mozMatchesSelector = spy;
    domClosest(testBlockD, 'section');
    expect(spy.called).to.equal(true);

    testBlockD.mozMatchesSelector = UNDEFINED;
    spy.reset();
    testBlockD.msMatchesSelector = spy;
    domClosest(testBlockD, 'section');
    expect(spy.called).to.equal(true);
  });
});
