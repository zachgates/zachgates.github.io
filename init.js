var background2colors = {
		0: [
			"255, 255, 255",
			" 11,  35,  39",
			"152,   2,  31",
			"255, 255, 255",
			"  0,   0,   0",
		],
		1: [
			"155, 169, 179",
			" 34,  26,  19",
			"223, 190,  17",
			" 34,  26,  19",
			" 34,  26,  19",
		],
//		2: [
//			"211, 228, 237",
//			" 41,  40,  62",
//			"193, 158,  80",
//			"255, 255, 255",
//			" 38,  35,  62",
//		],
		3: [
			"211, 228, 237",
			" 31,  37,  39",
			" 84, 117,  67",
			"211, 228, 237",
			"  0,   0,   0",
		],
		4: [
			"162, 178, 190",
			" 36,  20,   5",
			" 97,  79,  79",
			"215, 216, 218",
			" 36,  20,   5",
		],
	},
	available = Object.keys(background2colors).map(parseFloat),
	active = ["currbg", "nextbg"],
	nbg,
	cbg,
	prev;

var nextBackground = function () {
	// Get background
	while (nbg == cbg || nbg == prev) {
		rand = Math.floor(Math.random() * available.length);
		nbg = available[rand];
	}
	prev = cbg;
	cbg = nbg;
	
	// Handle background
	$("div#" + active[1]).css("background-image", "url('/cdn/img/background" + nbg + ".jpg')");
	$("div#" + active[0]).fadeOut(1500);
	$("div#" + active[1]).fadeIn(1500);
	
	// Handle colors
	colors = background2colors[nbg];
	$("div.inner-main").css("background-color", "rgba(" + colors[0] + ", 0.75)");
	$("div.inner-main").css("color", "rgb(" + colors[1] + ")");
	$("div#full-cont hr").css("border-color", "rgb(" + colors[1] + ")");
	$("div.header, div#tagline").css("background-color", "rgb(" + colors[2] + ")");
	$("div#tagline").css("color", "rgb(" + colors[3] + ")");
	$("div.inner-main").css("border-color", "rgb(" + colors[4] + ")");
	$("div.header div#bottom-border, div.header a, table#jobs td").removeClass().addClass("bg" + nbg);
	
	// Handle setup
	active.reverse()
}

$(document).ready(function () {

	nextBackground();

	$("div#intro-cont, div#full-cont").hide();
	$("body").fadeIn(750, function () {
		$("div#intro-cont").fadeIn(500, function () {
			$("div#full-cont").fadeIn(500);
			$("div.header").slideDown();
			setInterval(nextBackground, 60000);
		});
	});
	
	$("div#name").hover(function () {
		$(this).css("color", $("div.header").css("background-color"));
	}, function () {
		$(this).css("color", $("div#bottom-border").css("background-color"));
	});
	
	$("div#name, div#tagline table#jobs td").click(function () {
		toSlide = $("div#intro-cont div.wrapper div#" + $(this).attr("name"));
		if (!toSlide.is(":visible")) {
			$("div#intro-cont div.wrapper div:visible").slideUp(function () {
				toSlide.slideDown();
			});
		}
	});
	
	if ($("div#blog ul#post-list li").size() < 1) {
		$("div#blog").remove();
	}
	
	if ($("div#full-cont div.wrapper div.section").size() < 1) {
		$("div#full-cont").remove();
	}

});