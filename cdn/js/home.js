$(document).ready(function () {

	$("div#main-photo-cont").hide();

	$("body").fadeIn(1000, function () {
		$("div.header").slideDown(750, function () {
			$("div#main-photo-cont").fadeIn(500);
		});
	});

});