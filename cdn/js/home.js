$(document).ready(function () {

	$("div#main-photo-cont").hide();

	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#main-photo-cont").fadeIn(500);
		});
	});

});