const Expandable = require( './Expandable' );

// polyfill for ie9 compatibility
require( 'classlist-polyfill' );

// TODO: Don't init within cf-expandabes, init where cf-expandables is used
const components = Expandable.init();

module.exports = {
  components
};
