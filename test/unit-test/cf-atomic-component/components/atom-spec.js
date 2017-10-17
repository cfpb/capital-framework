'use strict';

const srcPath = require( '../src-path' );
const chai = require( 'chai' );
const expect = chai.expect;

const HTML_SNIPPET = ``;
let atom;

describe( 'Atom', () => {
  before( () => {
    this.jsdom = require( 'jsdom-global' )( HTML_SNIPPET );
    atom = require( srcPath + '/components/Atom' );
  } );

  after( () => this.jsdom() );

  // TODO: Implement tests.
} );
