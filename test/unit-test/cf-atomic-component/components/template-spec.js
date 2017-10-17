'use strict';

const srcPath = require( '../src-path' );
const chai = require( 'chai' );
const expect = chai.expect;

const HTML_SNIPPET = ``;
let template;

describe( 'Template', function() {

  before( () => {
    this.jsdom = require( 'jsdom-global' )( HTML_SNIPPET );
    template = require( srcPath + '/components/template' );
  } );

  after( () => this.jsdom() );

  // TODO: Implement tests.
} );
