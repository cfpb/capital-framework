'use strict';

const srcPath = require('../src-path');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

let classList;
let classListPath;
let testBlockA;
let testBlockB;
let testBlockC;
let testBlockD;
let sandbox;

const HTML_SNIPPET = `<div id="test-block-a" class="test-class test-class-a">
    <div id="test-block-b" class="test-class-b">
      <div id="test-block-c" class="test-class-c"></div>' +
    </div>
  </div>`;

describe('dom-class-list', () => {
  before(() => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    classListPath = srcPath + '/utilities/dom-class-list';
    testBlockA = document.querySelector('#test-block-a');
    testBlockB = document.querySelector('#test-block-b');
    testBlockC = document.querySelector('#test-block-c');
  });

  beforeEach(() => (classList = require(classListPath)));

  after(() => this.jsdom());

  it('should determine if the browser supports class list', () => {
    expect(classList.hasClassList).to.equal(true);
  });

  it('should determine if an element has a particular class', () => {
    const _createElement = global.document.createElement;
    expect(classList.contains(testBlockA, 'test-class-b')).to.equal(false);
    expect(classList.contains(testBlockA, 'test-class-a')).to.equal(true);
    expect(classList.contains(testBlockA, 'test-class')).to.equal(true);
    document.createElement = () => {};
    delete require.cache[require.resolve(classListPath)];
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    classList = require(classListPath);
    expect(classList.contains(testBlockA, 'test-class-b')).to.equal(false);
    expect(classList.contains(testBlockA, 'test-class-a')).to.equal(true);
    expect(classList.contains(testBlockA, 'test-class')).to.equal(true);
    document.createElement = _createElement;
  });

  it('should correctly add classes to the class list', () => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    classList = require(classListPath);
    expect(testBlockB.className.indexOf(' test-class') === -1).to.equal(true);
    classList.addClass(testBlockB, 'test-class');
    expect(testBlockB.className.indexOf('test-class') > -1).to.equal(true);
    classList.addClass(testBlockB, 'test-class', 'test-class-new');
    expect(testBlockB.className.indexOf('test-class-new') > -1).to.equal(true);
  });

  it('should correctly remove classes to the class list', () => {
    expect(testBlockC.className.indexOf('test-class-c') > -1).to.equal(true);
    classList.removeClass(testBlockC, 'test-class-c');
    expect(testBlockC.className.indexOf('test-class-c') === -1).to.equal(true);
    testBlockC.className = 'test-class-c test-class';
    classList.removeClass(testBlockC, 'test-class-c', 'test-class');
    expect(testBlockC.className === '').to.equal(true);
  });

  it('should correctly toggle classes', () => {
    expect(testBlockA.className.indexOf('test-class-a') > -1).to.equal(true);
    classList.toggleClass(testBlockA, 'test-class-a');
    expect(testBlockA.className.indexOf('test-class-c') === -1).to.equal(true);
    testBlockC.className = 'test-class-a';
    classList.toggleClass(testBlockC, 'test-class-c', true);
    expect(testBlockC.className === 'test-class-a test-class-c').to.equal(true);
  });
});
