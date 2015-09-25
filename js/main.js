(function($) {

// Run once when the DOM is ready (page load)
$(document).ready(function() {

  $('.line').click(function () {
    $('.wrapper-docu').toggleClass('open');
  });

  $('.wrapper-button .regular').click(function () {
    $('body').toggleClass('active');
  });

  $('body').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
    $('body').removeClass('non-active-modal');
  });

  $('.innermodal a').click(function () {
    $('body').addClass('non-active-modal');
    $('body').removeClass('active-modal');
  });

  $('.run-modal-example').click(function () {
    $('body').addClass('active-modal');
  });
});

})(jQuery);
