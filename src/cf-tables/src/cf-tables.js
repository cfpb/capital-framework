/**
 * cf-tables
 * https://github.com/cfpb/cf-tables
 *
 * A public domain work of the Consumer Financial Protection Bureau
 */

global.jQuery = require('jquery');

( function( $ ) {
  'use strict';

  var SortableTable = function( table, options ) {
    /*  At the moment, there are no default settings, but here's an object
        for their future use! */
    var defaults = {},
    // settings is defaults combined with user options
    settings = {},
    // rows is an Array of Arrays, serving as a model of the table
    rows = [],
    $table = $( table ),
    $sortButtons = $table.find( '.sortable' );

    /**
     * Initializes the SortableTable
     * @param { object } options - Customizble options object
     */
    function _init( options ) {
      settings = $.extend( {}, defaults, options );
      _clickHandler();
      // If the following classes exist, start by sorting those columns.
      $table.find( '.sortable__start-up, .sortable__start-up' ).click();
    }

    /**
     * Sorting function for Array.sort()
     *
     * @param { number } sign - A number where a negative number indicates a
     * reverse sort.
     * @param { sortType } sortType - A string used for sort types. By default,
     * the values are sorted by their native type. If this value is set to
     * 'number', then the cells' numeric values are used.
     * @returns function - A function to be used by the Array.sort method, where
     * the parameters 'a' and 'b' is each an Array (of Arrays) to be sorted
     */

    function _arraySorter( sign, sortType ) {
      return function( a, b ) {
        // Set a and b to the first Array in each Array-of-Arrays
        a = a[0];
        b = b[0];

        // For number sort, convert a & b to numbers.
        if ( sortType === 'number' ) {
          a = Number( a.replace( /[^\d.-]/g, '' ) );
          b = Number( b.replace( /[^\d.-]/g, '' ) );
        }

        // Sort the values
        if ( a < b ) {
          return sign * -1;
        }
        if ( a > b ) {
          return sign;
        }
        return 0;
      };
    }

    /**
     * Updates internal model of table (rows[])
     * @param { number } index - The index of the column used for sorting,
     * which is used as the "key" for rows[] - it is set as the only value
     * in the first array.
     */
    function _getRows( index ) {
      var child = index + 1;
      // Clear the model
      rows.length = 0;
      // Find the value in each row of the column we're sorting by,
      // add it to the rows Array
      $table.find( 'tbody tr' ).each( function() {
        // indices count from 0, but nth-child counts from 1
        var key = $( this ).find( 'td:nth-child(' + child + ')' ).text().trim();
        rows.push( [ key, $( this ) ] );
      } );
    }

    /**
     * Updates the table in the DOM
     * @param { number } index - The index of the column used for sorting
     */
    function _updateTable( index ) {
      // Empty the tbody to prepare for sorted rows
      $table.find( 'tbody' ).empty();

      // Insert sorted rows
      for ( var i = 0; i < rows.length; i++ ) {
        $table.find( 'tbody' ).append( rows[i][1] );
      }
    }

    /**
     * Handler for click events on the column header
     * No parameters - uses SortableTable properties, updates the DOM.
     */
    function _clickHandler() {
      $sortButtons.on( 'click', function() {
        var $button = $( this ),
            $headercell = $button.closest( 'th, td' ),
            $table = $headercell.closest( '.table__sortable' ),
            sortType = $button.attr( 'data-sort_type' ),
            sign = 1,
            $firstChild = $table.find( 'tr:first-child' ),
            index = $firstChild.children( 'th, td' ).index( $headercell );

        _getRows( index );

        // Determine sign
        if ( $button.hasClass( 'sorted-up' ) || $button.hasClass( 'sortable__start-down' ) ) {
          sign = -1;
        }

        $sortButtons.removeClass( 'sortable__start-down sortable__start-up' );
        $sortButtons.removeClass( 'sorted-down sorted-up' );

        // Add correct class
        if ( sign === 1 ) {
          $button.addClass( 'sorted-up' );
        } 
        else {
          $button.addClass( 'sorted-down' );
        }

        // Perform the row sort
        rows.sort( _arraySorter( sign, sortType ) );

        _updateTable( index );

      } );
    }

    _init( options );

  };

  /**
   * Instatiates the SortableTable
   * @param { object } options - An options object
   * @returns { object } Attached objects for each matched element
   */
  $.fn.sortableTable = function( options ) {
    return this.each( function() {
      ( options || ( options = {} ) ).$element = $( this );
      var scol = new SortableTable( this, options );
    } );
  };

  $( document ).ready( function() {
    $( '.table__sortable' ).sortableTable();
  } );


}( jQuery ) );
