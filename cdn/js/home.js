var bgLoop,
	cbg = 0,
	background2colors = {
		0: [
			"#ffffff",
			"#0b2327",
			"#98021f",
			"#ffffff",
			"#000000",
		],
		1: [
			"#7de6e8",
			"#29283e",
			"#c19e50",
			"#ffffff",
			"#26233e",
		],
	},
	available = Object.keys(background2colors).map(parseFloat),
	active = ["currbg", "nextbg"];

var nextBackground = function () {
	// Check background exists
	cbg += 1;
	if (!available.includes(cbg)) {
		cbg = 0;
	}
	
	// Handle background
	$("div#" + active[1]).css("background-image", "url('/cdn/img/background" + cbg + ".jpg')");
	$("div#" + active[0]).fadeOut(1000);
	$("div#" + active[1]).fadeIn(1000);
	
	// Handle colors
	colors = background2colors[cbg];
	$("div.inner-main").css("background-color", colors[0]);
	$("div.inner-main").css("color", colors[1]);
	$("div#tagline").css("background-color", colors[2]);
	$("div#tagline").css("color", colors[3]);
	$("div.inner-main").css("border-color", colors[4]);
	
	// Handle setup
	active.reverse()
}

$(document).ready(function () {

	$("div#main-photo-cont").hide();
	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#intro-cont").fadeIn(500, function () {
				$("div#full-cont").fadeIn(500);
				var bgLoop = setInterval(nextBackground, 60000);
			});
		});
	});

});