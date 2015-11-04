/**
 * cf-expandables
 * https://github.com/cfpb/cf-expandables
 *
 * A public domain work of the Consumer Financial Protection Bureau
 */

(function( $ ) {

  $.fn.expandable = function( userSettings ) {

    return $( this ).each(function() {

      var $this = $( this ),
          $target = $this.find('.expandable_target').not( $this.find('.expandable .expandable_target') ),
          $cueOpen = $this.find('.expandable_cue-open').not( $this.find('.expandable .expandable_cue-open') ),
          $cueClose = $this.find('.expandable_cue-close').not( $this.find('.expandable .expandable_cue-close') ),
          $content = $this.find('.expandable_content').not( $this.find('.expandable .expandable_content') ),
          $groupParent = $this.parents('.expandable-group'),
          accordion = $groupParent.length > 0 && $groupParent.data('accordion');

      if ( accordion ) {
        var $siblings = $this.siblings('.expandable');
      }

      this.init = function() {
        // Todo: recommend using an id on all expandables so that we can use
        // the aria-controls attribute.
        $target.attr( 'aria-controls', $content.attr('id') );
        if ( $this.hasClass('expandable__expanded') ) {
          this.expand( 0 );
        } else {
          this.collapse( 0 );
        }
        $target.on( 'click', $.proxy( this.handleClick, this ) );
      };

      this.handleClick = function( ev ) {
        ev.preventDefault();
        ev.stopPropagation();
        this.toggle();
        if ( accordion ) {
          $siblings.each( function( index, sibling ) {
            sibling.collapse();
          });
        }
      };

      this.toggle = function() {
        if ( $target.attr('aria-pressed') === 'true' ) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      this.expand = function( duration ) {
        $cueOpen.css( 'display', 'none' );
        $cueClose.css( 'display', 'inline' );
        $content.attr( 'aria-expanded', 'true' );
        $target.attr( 'aria-pressed', 'true' );
        if ( typeof duration === 'undefined' ) {
          duration = $.fn.expandable.calculateExpandDuration( $content.height() );
        }
        $this.addClass('expandable__expanded');
        $content.slideDown({
          duration: duration,
          easing: 'easeOutExpo'
        });
      };

      this.collapse = function( duration ) {
        $cueOpen.css( 'display', 'inline' );
        $cueClose.css( 'display', 'none' );
        $content.attr( 'aria-expanded', 'false' );
        $target.attr( 'aria-pressed', 'false' );
        if ( typeof duration === 'undefined' ) {
          duration = $.fn.expandable.calculateCollapseDuration( $content.height() );
        }
        $this.removeClass('expandable__expanded');
        $content.slideUp({
          duration: duration,
          easing: 'easeOutExpo'
        });
      };

      this.init();

    });

  };

  $.fn.expandable.calculateExpandDuration = function( height ) {
    return $.fn.expandable.constrainValue( 450, 900, height * 4 );
  };

  $.fn.expandable.calculateCollapseDuration = function( height ) {
    return $.fn.expandable.constrainValue( 350, 900, height * 2 );
  };

  $.fn.expandable.constrainValue = function( min, max, duration ) {
    if ( duration > max ) {
        return max;
    } else if ( duration < min ) {
        return min;
    } else {
        return duration;
    }
  };

  // Auto init
  $('.expandable').expandable();

}(jQuery));
