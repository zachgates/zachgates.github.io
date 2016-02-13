$(document).ready(function () {

	$("div#tagline").fadeIn(1500);

	$("div#main-photo-cont img#center").animate({
		top: "0px",
		opacity: "1",
	}, 1000);

	$("div#main-photo-cont img#center").siblings().animate({
		left: "0px",
		opacity: "1",
	}, 1000, function () {
		$("div.header").slideDown(500);
	});

});