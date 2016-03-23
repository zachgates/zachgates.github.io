$(document).ready(function () {
	$(window).on("resize", resize);
	resize();
	beginLanding();
});

/* Calculate viewport width and height. */

calcFull = function () {
	return [
		$(window).width(),
		$(window).height(),
	];
}

calcFullPx = function () {
	return calcFull().map(function (e) {
		return e + "px";
	});
}

/* Calculate padding needed to center an element. */

calcPadPx = function (elem) {
	var full = calcFull();
	var w = (full[0] - $(elem).width())  / 2 + "px",
		h = (full[1] - $(elem).height()) / 2 + "px";
	return [w, h];
}

/* Handle resize of viewport. */

resize = function () {
	handleCover(...calcFullPx());
	handleCenter();
}

/* Handle "cover" class during resize. */

handleCover = function (w, h) {
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

/* Handle "center" class during resize. */

handleCenter = function () {
	function applyPad (needw, needh) {
		var pad = calcPadPx(this);
		$(this).css({
			left: (needw || true) ? pad[0] : "",
			top : (needh || true) ? pad[1] : "",
		});
	}
	$("div.center").each(applyPad);                  // Center width and height.
	$("div.center-w").each(applyPad, [false, true]); // Center width-only.
	$("div.center-h").each(applyPad, [true, false]); // Center height-only.
}

/* Handle landing animation. */

beginLanding = function () {
	var iters = 0,
		bgs = [
			"#a87bca", // Purple
			"#7b97ca", // Blue
			"#7bcaa4", // Green
			"#c9ca7b", // Yellow
			"#ca9c7b", // Orange
			"",        // Red
		];
	function swapColor () {
		$("div#intro-overlay").css("background-color", bgs[iters % bgs.length]);
		iters++;
	}
	$("div#intro-overlay").fadeIn(6000);
	setInterval(swapColor, 6000);
}