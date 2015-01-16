/* resizer solution */

function resizewindow() {
	if ($('.logo-overlay').length == 0){
		$('body').prepend('<div class="logo-overlay"><div class="centered-logo"></div></div>');
	}

	setTimeout(function() {
		$('.logo-overlay').remove();
	}, 1000);
}