var type, size, cond;
var prices = {
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

$(document).ready(function () {

	$("div#main-content").fadeIn(1000, function () {
		$("div.header").slideDown(500);
	});
	
	type = $("div#info span#type").text();
	size = $("div#info span#size").text();
	cond = $("div#info span#cond").text();
	
	console.log(prices[type][size][cond]);

});