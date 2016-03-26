$(document).ready(function () {
	$(window).on("resize", resize);
	resize();
	beginLanding();
	redirectAnchors();
	setupScene();
	setupSkills();
	setTimeout(redirect, 250);
});

/* Calculate viewport width and height */

var calcFull = function () {
	return [
		$(window).width(),
		$(window).height(),
	];
}

var calcFullPx = function () {
	return calcFull().map(function (e) {
		return e + "px";
	});
}

/* Calculate padding needed to center an element */

var calcPadPx = function (elem) {
	var full = calcFull();
	var w = (full[0] - $(elem).width())  / 2 + "px",
		h = (full[1] - $(elem).height()) / 2 + "px";
	return [w, h];
}

/* Handle resize of viewport */

var resize = function () {
	handleCover(...calcFullPx());
	handleCenter();
}

/* Handle "cover" class during resize */

var handleCover = function (w, h) {
	$("div.cover").css({               // Exact cover.
		width: w,
		height: h,
	});
	$("div.cover-m").css({             // Minimum cover.
		maxWidth: w,
		minHeight: h,
	});
	$("div.cover-w").css({width:  w}); // Cover width.
	$("div.cover-h").css({height: h}); // Cover height.
}

/* Handle "center" class during resize */

var handleCenter = function () {
	function applyPad (needw, needh) {
		var pad = calcPadPx(this);
		if (needw || false) {
			$(this).css("left", pad[0]);
		}
		if (needh || false) {
			$(this).css("top", pad[1]);
		}
	}
	$("div.center").each(applyPad, [true, true]);    // Center width and height.
	$("div.center-w").each(applyPad, [true, false]); // Center width-only.
	$("div.center-h").each(applyPad, [false, true]); // Center height-only.
}

/* Setup */

var setupScene = function () {
	$("div.cont-section span.media").each(function () {
		$(this).css("height", $(this).width() + "px");
	});
}

/* Handle landing animation */

var beginLanding = function () {
	var iters = 0,
		bgs = [
			"#a87bca", // Purple
			"#7b97ca", // Blue
			"#7bcaa4", // Green
			"#c9ca7b", // Yellow
			"#ca9c7b", // Orange
			"#ca7b88", // Red
		];
	function swapColor () {
		$(".accent").css("background-color", bgs[iters % bgs.length]);
		iters++;
	}
	/*
	$("div#intro-overlay").fadeIn(1000, function () {
		swapColor();
		setInterval(swapColor, 6000);
	});
	*/
	swapColor();
	setInterval(swapColor, 6000);
}

/* Handle links */

var redirectAnchors = function () {
	$("div#sidebar a").each(function () {
		var loc = this.href.split("/").pop();
		this.href = "javascript:scrollTo('" + loc + "')"
	});
}

var redirect = function () {
	var loc = window.location.hash.replace("#/", "");
	scrollTo(loc == "" ? "intro" : loc);
}

var scrollTo = function (query) {
	var pos = $("#" + query).offset().top;
	$("html, body").animate({scrollTop: pos});
	window.location.hash = "#/" +(query == "intro" ? "" : query);
}

/* Setup chart */

var setupSkills = function () {
	var skillsCont = $("canvas#skills-chart").get(0).getContext("2d"),
		p2l = {"100":"Master","80":"Expert","60":"Proficient","40":"Familiar","20":"Beginner"}
	var skillsChart = new Chart(skillsCont).Bar({
			labels: [
				"Python",
				"Django",
				"PHP",
				"HTML",
				"CSS",
				"JavaScript",
				"jQuery",
				"Objective-C",
				"Git",
				"Windows",
				"OS X",
				"Linux",
				"Photoshop",
				"Vim",
				"Wordpress",
				"Chrome",
			],
			datasets: [
				{
					fillColor: "#7b97ca",
					strokeColor: "#7b97ca",
					data: [
						100,
						80,
						60,
						100,
						80,
						80,
						80,
						60,
						100,
						80,
						100,
						100,
						80,
						80,
						60,
						100,
					]
				}
			],
		},
		{
			responsive : true,
			scaleOverride: true,
			scaleSteps: 5,
			scaleStepWidth: 20,
			scaleStartValue: 0,
			scaleShowHorizontalLines: false,
			scaleShowVerticalLines: false,
			barValueSpacing: $(this).width() * 0.0075,
			tooltipTemplate: '<%= {"100":"Master","80":"Expert","60":"Proficient","40":"Familiar","20":"Beginner"}[value] %>',
			scaleFontSize: 14,
		});
}