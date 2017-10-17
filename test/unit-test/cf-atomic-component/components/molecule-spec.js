'use strict';

const srcPath = require( '../src-path' );
const chai = require( 'chai' );
const expect = chai.expect;

const HTML_SNIPPET = ``;
let molecule;

describe( 'Molecule', () => {
  before( () => {
    this.jsdom = require( 'jsdom-global' )( HTML_SNIPPET );
    molecule = require( srcPath + '/components/Molecule' );
  } );

  after( () => this.jsdom() );

  // TODO: Implement tests.
} );
