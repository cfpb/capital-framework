'use strict';

const srcPath = require('../../src-path');

const chai = require('chai');
const expect = chai.expect;

const AlphaTransition = require('../' +
  srcPath +
  'utilities/transition/AlphaTransition');

describe('AlphaTransition', () => {
  let transition;

  // DOM-related settings.
  let document;
  const HTML_SNIPPET = '<div class="content-1"></div>';
  let contentDom;

  before(() => {
    this.jsdom = require('jsdom-global')(HTML_SNIPPET);
    document = window.document;
    contentDom = document.querySelector('.content-1');
    transition = new AlphaTransition(contentDom);
    transition.init();
  });

  beforeEach(() => {
    transition = new AlphaTransition(contentDom);
    transition.init();
  });

  after(() => this.jsdom());

  describe('.fadeIn()', () => {
    it('should return instance of AlphaTransition', () => {
      expect(transition.fadeIn()).to.be.instanceof(AlphaTransition);
    });

    it('should apply u-alpha-100 class', () => {
      transition.fadeIn();
      const classes = 'content-1 u-alpha-transition u-alpha-100';
      expect(contentDom.className).to.equal(classes);
    });
  });

  describe('.fadeOut()', () => {
    it('should return instance of AlphaTransition', () => {
      expect(transition.fadeOut()).to.be.instanceof(AlphaTransition);
    });

    it('should apply u-alpha-0 class', () => {
      transition.fadeOut();
      const classes = 'content-1 u-alpha-transition u-alpha-0';
      expect(contentDom.className).to.equal(classes);
    });
  });
});
