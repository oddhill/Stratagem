(function($) {

// Run once when the DOM is ready (page load)
$(document).ready(function() {

  $('.line').click(function () {
    $('.wrapper-docu').toggleClass('open');
  });

  $('.wrapper-button .regular').click(function () {
    $('.wrapper-docu').toggleClass('active');
  });
});

})(jQuery);
