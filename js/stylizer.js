$( document ).ready(function() {

	$('.btn-menu').on('click', function(e){
		if ($('nav').hasClass('active')) {
			$('nav').removeClass('active');
		} else {
			$('nav').addClass('active');
		}
		e.preventDefault();
	});

});