'use strict';

const srcPath = require('../src-path');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

let AtomicComponent;

const HTML_SNIPPET = `<div id="test-block-a" class="test-class test-class-a">
    <div id="test-block-b" class="test-class-b">
      <div id="test-block-c" class="test-class-c"></div>
   </div>
  </div>`;

describe('AtomicComponent', () => {
  before(() => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    AtomicComponent = require(srcPath + '/components/AtomicComponent');
  });

  after(() => this.jsdom());

  it('should correctly create an Atomic Component instance', () => {
    const element = document.getElementById('test-block-a');
    const initialize = sinon.spy();
    const options = {
      initialize: initialize,
      events: {
        keydown: 'keyAction'
      },
      keyAction: sinon.stub()
    };

    const atomicComponent = new AtomicComponent(element, options);
    expect(atomicComponent.element === element).to.equal(true);
    expect(atomicComponent.events).to.be.an('object');
    expect(initialize.called).to.equal(true);
    expect(atomicComponent.uId.indexOf('ac') > -1).to.equal(true);
    expect(atomicComponent.render() === atomicComponent).to.equal(true);
  });

  it('should correctly attach an element', () => {
    let atomicComponent = new AtomicComponent();
    expect(atomicComponent.element.tagName === 'DIV').to.equal(true);
    const element = document.createElement('span');
    atomicComponent = new AtomicComponent(element);
    expect(atomicComponent.element.tagName === 'SPAN').to.equal(true);
    atomicComponent = new AtomicComponent('', {
      id: 'test_id',
      className: 'test_class_name'
    });
    expect(atomicComponent.element.id === 'test_id').to.equal(true);
    expect(atomicComponent.element.className === 'test_class_name').to.equal(
      true
    );
  });

  it('should correctly create sub classes', () => {
    const subComponent = new (AtomicComponent.extend({}))();
    expect(subComponent._super === AtomicComponent.prototype).to.equal(true);
    expect(subComponent instanceof AtomicComponent).to.equal(true);
  });

  it('should add the bound attribute to passed elements', () => {
    const element = document.getElementById('test-block-a');
    const atomicComponent = new AtomicComponent(element);
    expect(element.hasAttribute('data-bound')).to.equal(true);
  });
});
