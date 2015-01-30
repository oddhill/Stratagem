(function($) {

// Run once when the DOM is ready (page load)
$(document).ready(function() {

	$('a.example').click(function () {
		$('body').addClass('go');
	});

	$('select').on('change', function() {
		var animation = $(this).find(':selected').attr('class');
		$('#logo').attr('class', '').addClass(animation);
	});

});

})(jQuery);
