$(document).ready(function () {

	$("div#main-photo-cont img#center, div#tagline").fadeIn(1000, function () {
		$("div#main-photo-cont img#center").siblings().fadeIn(1000, function () {
			$("div.header").slideDown(500);
		});
	});

});