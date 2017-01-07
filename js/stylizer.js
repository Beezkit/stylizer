$( document ).ready(function() {

		$('.btn-menu').on('click', function(e) {
			e.preventDefault();
			$('nav').menu({
				sizeW: '400px'
			});
		});

});
