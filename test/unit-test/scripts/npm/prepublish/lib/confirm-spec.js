process.env.CONTINUOUS_INTEGRATION = false;

const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
const opts = {
  prompt: 'Publish the components?',
  yes:    'Publishing the components to npm...',
  no:     'Aborting. See ya!'
};

describe( 'confirm', () => {
  xit( 'should continue if the user replies with "yes"', () => {
    // TODO: Figure out how to pass user replies to the command line.
    util.confirm( opts ).then( () => {
      expect( true ).toBe( false );
    } );
  } );

  xit( 'should abort if the user replies with "no"', () => {
    // TODO: Figure out how to pass user replies to the command line.
    util.confirm( opts ).then( () => {
      expect( true ).toBe( false );
    } );
  } );

  it( 'should continue if we’re in a CLI environment', () => {
    const processSpy = jest.spyOn( process, 'exit' ).mockImplementation();
    process.env.CONTINUOUS_INTEGRATION = true;
    return util.confirm( opts ).then( () => {
      expect( processSpy ).not.toHaveBeenCalledWith( 1 );
    } );
  } );
} );
