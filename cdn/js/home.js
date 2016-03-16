$(document).ready(function () {

	$("div#main-photo-cont").hide();
	$("div.header").slideDown(500, function () {
		$("div#main-photo-cont").fadeIn(500);
	});

});