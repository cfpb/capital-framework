'use strict';

const Expandable = require( './Expandable' );
const ExpandableGroup = require( './ExpandableGroup' );

// polyfill for ie9 compatibility
require( 'classlist-polyfill' );

Expandable.init();
ExpandableGroup.init();
