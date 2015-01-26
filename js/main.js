(function($) {

// Run whenever the DOM tree is changed, e.g. through AJAX/AHAH
Drupal.behaviors.ODDBABY = {
  attach: function (context, settings) {

  }
}

// Run once when the DOM is ready (page load)
$(document).ready(function() {

  // If SVG is not supported replace it with png version
  if(!Modernizr.svg) { /* Check modernizr for svg support */
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png'); /* Replace suffixes with .png */
    });
  }

});

})(jQuery);
