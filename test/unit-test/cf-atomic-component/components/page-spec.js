'use strict';

const srcPath = require( '../src-path' );
const chai = require( 'chai' );
const expect = chai.expect;

const HTML_SNIPPET = ``;
let page;

describe( 'Page', () => {
  beforeEach( () => {
    this.jsdom = require( 'jsdom-global' )( HTML_SNIPPET );
    page = require( srcPath + '/components/page' );
  } );

  after( () => this.jsdom() );

  // TODO: Implement tests.
} );
