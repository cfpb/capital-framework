'use strict';

const srcPath = require('../src-path');
const Events = require(srcPath + '/mixins/Events');

const chai = require('chai');
const expect = chai.expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const sinon = require('sinon');
let dom;
let mockEvent;
let spy1;
let spy2;

beforeEach(() => {
  mockEvent = { events: {} };
  mockEvent = Object.assign(mockEvent, Events);
  spy1 = sinon.spy();
  spy2 = sinon.spy();
  dom = new JSDOM(`<!DOCTYPE html>`);
});

describe('Events', function() {
  it('should add the correct methods to an object when mixed in', () => {
    expect(mockEvent.on).to.be.an('function');
    expect(mockEvent.off).to.be.an('function');
    expect(mockEvent.trigger).to.be.an('function');
  });

  it('should correctly add event listeners', () => {
    mockEvent.on('click', spy1);
    expect(mockEvent.events['click'][0] === spy1).to.equal(true);
    mockEvent.on('click', spy2);
    expect(mockEvent.events['click'][1] === spy2).to.equal(true);
    expect(mockEvent.events.hasOwnProperty('click')).to.equal(true);
  });

  it('should correctly trigger event listeners', () => {
    mockEvent = Object.assign(mockEvent, Events);
    mockEvent.on('click', spy1);
    mockEvent.trigger('click');
    expect(spy1.called).to.equal(true);
    expect(spy1.called).to.equal(true);
  });

  it('should correctly remove event listeners', () => {
    mockEvent.on('click', spy1);
    expect(mockEvent.events['click'][0] === spy1).to.equal(true);
    mockEvent.on('click', spy2);
    expect(mockEvent.events['click'][1] === spy2).to.equal(true);
    mockEvent.off('click');
    expect(mockEvent.events.hasOwnProperty('click')).to.equal(false);
    mockEvent.trigger('click');
    expect(spy1.called).to.equal(false);
    expect(spy2.called).to.equal(false);
  });
});
