$(document).ready(function () {

	$("div#main-photo-cont").hide();

	$("body").fadeIn(750, function () {
		$("div.header").slideDown(500, function () {
			$("div#intro-cont").fadeIn(500, function () {
				$("div#full-cont").fadeIn(500);
			});
		});
	});

});