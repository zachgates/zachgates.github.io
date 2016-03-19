var bgLoop,
	cbg = 0,
	background2colors = {
		0: [
			"#ffffff",
			"",
			"#98021f",
			"#ffffff",
			"#000000",
		],
		1: [
			"",
			"#ffffff",
			"",
			"",
			"",
		],
	},
	available = Object.keys(background2colors).map(parseFloat),
	active = ["currbg", "nextbg"];

var nextBackground = function () {
	// Check background exists
	if (!available.includes(cbg)) {
		cbg = 0;
	}
	
	// Handle background
	$("div#" + active[1]).css("background-image", "url('/cdn/img/background" + cbg + ".jpg')");
	$("div#" + active[0]).fadeOut(1000);
	$("div#" + active[1]).fadeIn(1000);
	
	// Handle colors
	colors = background2colors[cbg];
	$("div#intro-cont").css("background-color", colors[0]);
	$("div#intro-cont").css("color", colors[1]);
	$("div#tagline").css("background-color", colors[2]);
	$("div#tagline").css("color", colors[3]);
	$("div#intro-cont").css("border-color", colors[4]);
	
	// Handle setup
	active.reverse()
	cbg += 1;
}

$(document).ready(function () {

	$("div#main-photo-cont").hide();
	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#intro-cont").fadeIn(500, function () {
				$("div#full-cont").fadeIn(500);
				var bgLoop = setInterval(nextBackground, 30000);
			});
		});
	});

});