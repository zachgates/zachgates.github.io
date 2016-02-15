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
	
	self.prices = {
		"iPhone 5c": {
			"8GB": {
				"Poor": "20",
				"Fair": "60",
				"Excellent": "75",
			},
			"16GB": {
				"Poor": "25",
				"Fair": "70",
				"Excellent": "80",
			},
			"32GB": {
				"Poor": "25",
				"Fair": "70",
				"Excellent": "80",
			},
		},
		"iPhone 5": {
			"16GB": {
				"Poor": "20",
				"Fair": "70",
				"Excellent": "85",
			},
			"32GB": {
				"Poor": "25",
				"Fair": "75",
				"Excellent": "90",
			},
			"64GB": {
				"Poor": "25",
				"Fair": "75",
				"Excellent": "90",
			},
		},
		"iPhone 5s": {
			"16GB": {
				"Poor": "45",
				"Fair": "95",
				"Excellent": "115",
			},
			"32GB": {
				"Poor": "45",
				"Fair": "100",
				"Excellent": "125",
			},
			"64GB": {
				"Poor": "45",
				"Fair": "110",
				"Excellent": "135",
			},
		},
		"iPhone 6": {
			"16GB": {
				"Poor": "100",
				"Fair": "200",
				"Excellent": "240",
			},
			"64GB": {
				"Poor": "110",
				"Fair": "210",
				"Excellent": "240",
			},
			"128GB": {
				"Poor": "110",
				"Fair": "225",
				"Excellent": "250",
			},
		},
		"iPhone 6 Plus": {
			"16GB": {
				"Poor": "140",
				"Fair": "250",
				"Excellent": "275",
			},
			"64GB": {
				"Poor": "140",
				"Fair": "250",
				"Excellent": "280",
			},
			"128GB": {
				"Poor": "140",
				"Fair": "255",
				"Excellent": "285",
			},
		},
		"iPhone 6s": {
			"16GB": {
				"Poor": "140",
				"Fair": "340",
				"Excellent": "375",
			},
			"64GB": {
				"Poor": "140",
				"Fair": "345",
				"Excellent": "380",
			},
			"128GB": {
				"Poor": "140",
				"Fair": "345",
				"Excellent": "380",
			},
		},
		"iPhone 6s Plus": {
			"16GB": {
				"Poor": "160",
				"Fair": "365",
				"Excellent": "",
			},
			"64GB": {
				"Poor": "160",
				"Fair": "370",
				"Excellent": "410",
			},
			"128GB": {
				"Poor": "160",
				"Fair": "380",
				"Excellent": "425",
			},
		},
	}
	
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
			$("div#value span").text("$" + self.prices[self.phone][self.storage][self.condition]);
			$("a#next-button").attr("href", "/sell/?type=" + self.phone + "&size=" + self.storage + "&cond=" + self.condition)
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