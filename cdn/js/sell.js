function Builder () {

	// globals
	
	var self = this;
	self.sceneNames = [
		"Select A Model",
		"Select Storage Capacity",
		"Select A Condition",
		"You Are Selling:",
	];
	self.scene = 0;
	
	// locals

	self.phone = undefined;
	self.storage = undefined;
	self.condition = undefined;
	
	// functions

	self.setPhone = function (phoneType) {
		self.scene += 1;
		self.phone = phoneType;
		$("div#main-content div#scene-cont div#iphone-types").slideUp();
		$("h2#scene-title").fadeOut(500, function () {
			var scene = self.sceneNames[self.scene];
			$(this).text(scene).fadeIn(1000);
			$("div#iphone-sizes div#" + phoneType).slideDown();
		});
	}
	
	self.setStorage = function (phoneStorage) {
		self.scene += 1;
		self.storage = phoneStorage;
		$("div#iphone-sizes div#" + self.phone).slideUp();
		$("h2#scene-title").fadeOut(500, function () {
			var scene = self.sceneNames[self.scene];
			$(this).text(scene).fadeIn(1000);
			$("div#iphone-conditions").slideDown();
		});
		self.phone = $("div.phone#" + self.phone).attr("data");
	}
	
	self.setCondition = function (phoneCondition) {
		self.scene += 1;
		self.condition = phoneCondition;
		$("div#iphone-conditions").slideUp();
		$("h2#scene-title").fadeOut(500, function () {
			var scene = self.sceneNames[self.scene];
			$(this).text(scene).fadeIn(1000);
			$("div#confirmation").slideDown();
		});
		
		$("div#confirmation div#phone span").text(self.phone);
		$("div#confirmation div#storage span").text(self.storage);
		$("div#confirmation div#condition span").text(self.condition);
	}

}

$(document).ready(function () {

	$("div.header").slideDown(500, function () {
		$("div#main-content div#scene-cont").fadeIn(1000);
	});
	
	// Handle Scenes
	
	var data = new Builder();
	$("h2#scene-title").text(data.sceneNames[data.scene]).fadeIn();
	
	$("div.phone").click(function () {
		data.setPhone(this.id);
	});
	
	$("div.gb-cont").click(function () {
		data.setStorage($(this).children().attr("data"));
	});
	
	$("div.cond-cont").click(function () {
		data.setCondition($(this).children().attr("data"));
	});

});