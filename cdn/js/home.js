var bgLoop,
	cbg = 0,
	background2colors = {
		0: [
			"255, 255, 255",
			" 11,  35,  39",
			"152,   2,  31",
			"255, 255, 255",
			"  0,   0,   0",
		],
		1: [
			"187, 254, 252",
			" 41,  40,  62",
			"193, 158,  80",
			"255, 255, 255",
			" 38,  35,  62",
		],
		2: [
			"211, 228, 237",
			" 58,  79,  85",
			" 84, 117,  67",
			"211, 228, 237",
			"  0,   0,   0",
		],
		3: [
			"162, 178, 190",
			" 36,  20,   5",
			" 97,  79,  79",
			"215, 216, 218",
			" 36,  20,   5",
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
	$("div.inner-main").css("background-color", "rgba(" + colors[0] + ", 0.75)");
	$("div.inner-main").css("color", "rgb(" + colors[1] + ")");
	$("div.header, div#tagline").css("background-color", "rgb(" + colors[2] + ")");
	$("div#tagline").css("color", "rgb(" + colors[3] + ")");
	$("div.inner-main").css("border-color", "rgb(" + colors[4] + ")");
	$("div.header div#bottom-border, div.header a").removeClass().addClass("bg" + cbg);
	
	// Handle setup
	active.reverse()
}

$(document).ready(function () {

	$("div#intro-cont, div#full-cont").hide();
	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#intro-cont").fadeIn(500, function () {
				$("div#full-cont").fadeIn(500);
				var bgLoop = setInterval(nextBackground, 45000);
			});
		});
	});

});