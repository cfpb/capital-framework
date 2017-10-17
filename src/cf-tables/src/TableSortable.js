/* ==========================================================================
   Table Sortablle

   Mixin for sorting table organism.

   ========================================================================== */

'use strict';

var config = require( 'cf-atomic-component/src/utilities/config' );
var closest = require( 'cf-atomic-component/src/utilities/dom-closest' ).closest;
var DIRECTIONS = config.DIRECTIONS;
var UNDEFINED = config.UNDEFINED;

var TableSortable = {

  classes: {
    sortDown: 'sorted-down',
    sortUp:   'sorted-up'
  },

  events: {
    'click .sortable': 'onSortableClick'
  },

  ui: {
    base:       '.o-table__sortable',
    tableBody:  'tbody',
    sortButton: '.sorted-up, .sorted-down'
  },

  /**
   * Function used to create computed and triggered properties.
   */
  initialize: function() {
    this.sortClass = UNDEFINED;
    this.sortColumnIndex = UNDEFINED;
    this.sortDirection = UNDEFINED;
    this.tableData = [];
    this.bindProperties();
    if ( this.ui.sortButton ) {
      this.sortColumnIndex = this.getColumnIndex();
      this.sortDirection =
        this.contains( this.ui.sortButton, this.classes.sortDown ) ?
        DIRECTIONS.DOWN : DIRECTIONS.UP;
      this.updateTable();
    }
  },

  /**
   * Function used to create computed and trigger properties.
   */
  bindProperties: function() {
    var sortDirection;

    Object.defineProperty( this, 'sortDirection', {
      configurable: true,
      get: function() {
        return sortDirection;
      },
      set: function( value ) {
        if ( value === DIRECTIONS.UP ) {
          this.sortClass = this.classes.sortUp;
        } else if ( value === DIRECTIONS.DOWN ) {
          this.sortClass = this.classes.sortDown;
        }
        sortDirection = value;
      }
    } );
  },

  /**
   * Function used to get the column index of the active sort column.
   *
   * @param {HTMLNode} element - The element used as the sortable.
   * @returns {number} The column index of the active sort column.
   */
  getColumnIndex: function( element ) {
    return closest( element || this.ui.sortButton, 'td, th' ).cellIndex;
  },

  /**
   * Function used to update the table data and dom.
   * @returns {boolean} TODO: Add description.
   */
  updateTable: function() {
    return this.updateTableData() && this.updateTableDom();
  },

  /**
   * Function used to get, sort, and update the table data array.
   *
   * @param {number} columnIndex - The index of the column used for sorting.
   * @returns {Array} TODO: Add description.
   */
  updateTableData: function( columnIndex ) {
    var cell;
    var rows = this.ui.tableBody.querySelectorAll( 'tr' );
    var sortType;
    this.tableData = [];
    columnIndex = columnIndex || this.sortColumnIndex;

    for ( var i = 0, len = rows.length; i < len; ++i ) {
      cell = rows[i].cells[columnIndex];
      if ( cell ) {
        cell = cell.textContent.trim();
      }
      this.tableData.push( [ cell, rows[i] ] );
    }

    sortType = this.ui.sortButton.getAttribute( 'data-sort_type' );
    this.tableData.sort( this.tableDataSorter( this.sortDirection, sortType ) );

    return this.tableData;
  },

  /**
   * Function used to update the table DOM.
   * @returns {HTMLNode} TODO: Add description.
   */
  updateTableDom: function() {
    var documentFragment;
    var tableBody = this.ui.tableBody;

    // Empty the table body to prepare for sorting the rows
    // TODO: It might make sense to use innerHTML
    // from a performance and garbage collection standpoint.
    while ( tableBody.lastChild ) {
      tableBody.removeChild( tableBody.lastChild );
    }

    documentFragment = document.createDocumentFragment();
    for ( var i = 0; i < this.tableData.length; i++ ) {
      documentFragment.appendChild( this.tableData[i][1] );
    }

    tableBody.appendChild( documentFragment );
    this.trigger( 'table:updated' );

    return tableBody;
  },

  /**
   * Function used to create a function for sorting table data.
   * Passed to Array.sort method.
   *
   * @param {number} direction - A number where a negative number indicates a
   * reverse sort.
   * @param {string} sortType - A string used for sort types. By default,
   * the values are sorted by their native type. If this value is set to
   * 'number', then the cells' numeric values are used.
   * @returns {Function} - A function to be used by the Array.sort method, where
   * the parameters 'a' and 'b' is each an Array (of Arrays) to be sorted
   */
  tableDataSorter: function( direction, sortType ) {
    return function( a, b ) {
      var sign = 1;
      var order = 0;
      var regex = /[^\d.-]/g;

      // Set a and b to the first Array in each Array-of-Arrays
      a = a[0];
      b = b[0];

      // For number sort, convert a & b to numbers.
      if ( sortType === 'number' ) {
        a = Number( a.replace( regex, '' ) );
        b = Number( b.replace( regex, '' ) );
      }

      if ( direction === DIRECTIONS.DOWN ) {
        sign = -1;
      }

      // Sort the values
      if ( a < b ) {
        order = sign * -1;
      } else if ( a > b ) {
        order = sign;
      }

      return order;
    };
  },

  /**
   * Function used as callback for the sortable click event.
   *
   * @param {Event} event - DOM event.
   * @returns {Object} - TOOD: Add description.
   */
  onSortableClick: function( event ) {
    if ( this.ui.sortButton ) {
      this.removeClass( this.ui.sortButton, this.sortClass );
    }
    if ( this.ui.sortButton === event.target ) {
      this.sortDirection = ~this.sortDirection;
    } else {
      this.ui.sortButton = event.target;
      this.sortColumnIndex = this.getColumnIndex();
      this.sortDirection = DIRECTIONS.UP;
    }
    // The active sort class is changing when the sort direction changes.
    this.addClass( this.ui.sortButton, this.sortClass );
    this.updateTable();

    return this;
  }

};

module.exports = TableSortable;
