var cbg = 0;
var background2colors = {
	0: [
		"#ffffff",
		"",
		"#98021f",
		"#ffffff",
		"#000000",
	],
	1: [
		"",
		"",
		"",
		"",
		"",
	],
};
var available = Object.keys(background2colors).map(parseFloat);

var nextBackground = function () {
	// Check background exists
	if (!available.includes(cbg)) {
		cbg = 0;
	}
	
	// Handle background
	console.log(1);
	console.log("/cdn/img/background" + cbg + ".jpg");
	$("div#nextbg").css("background-image", "/cdn/img/background" + cbg + ".jpg");
	$("div#currbg").fadeOut(250);
	
	// Handle colors
	colors = background2colors[cbg];
	$("div#intro-cont").css("background-color", colors[0]);
	$("div#intro-cont").css("color", colors[1]);
	$("div#tagline").css("background-color", colors[2]);
	$("div#tagline").css("color", colors[3]);
	$("div#intro-cont").css("border-color", colors[4]);
	
	// Return next background index
	return cbg + 1;
}

$(document).ready(function () {

	$("div#main-photo-cont").hide();
	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#intro-cont").fadeIn(500, function () {
				$("div#full-cont").fadeIn(500);
				setInterval(nextBackground, 2000);
			});
		});
	});

});