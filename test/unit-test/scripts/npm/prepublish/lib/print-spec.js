const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
const options = util.getArgs;
const logSymbols = require( 'log-symbols' );
const chalk = require( 'chalk' );
let consoleStub;

describe( 'print', () => {
  beforeEach( () => {
    consoleStub = jest.spyOn( console, 'log' ).mockImplementation();
  } );

  afterEach( () => {
    consoleStub.mockRestore();
  } );

  it( 'should log a success message', () => {
    util.printLn.success( 'Yay, it worked' );

    expect( consoleStub ).toBeCalledWith(
      '  ' + logSymbols.success + ' Yay, it worked'
    );
  } );

  it( 'should log an error message', () => {
    util.printLn.error( 'Shoot, something broke' );

    expect( consoleStub ).toBeCalledWith(
      '  ' + logSymbols.error + ' Shoot, something broke'
    );
  } );

  it( 'should log a dimmed message', () => {
    util.printLn.console( 'Shoot, something broke' );

    expect( consoleStub ).toBeCalledWith(
      chalk.dim( '        Shoot, something broke' )
    );
  } );

  xit( 'should log with four spaces of indentation', () => {
    // TODO: Figure out how to stub the getArgs options
    const optionsStub = jest.mock( options, 'silent' );
    optionsStub.returns( true );

    util.printLn.info( 'Here’s four spaces of indentation' );

    expect( consoleStub ).toBeCalledWith(
      '    ' + logSymbols.info + ' Shoot, something broke'
    );
    optionsStub.mockRestore();
  } );
} );
