$(document).ready(function () {
	
	$("div.header").slideDown(500, function () {
		$("div#tagline").fadeIn(1000);
		
		$("div#main-photo-cont img#center").animate({
			top: "0px",
			opacity: "1",
		}, 1000);
		
		$("div#main-photo-cont img#center").siblings().animate({
			left: "12px",
			opacity: "1",
		}, 1000);
	});

});