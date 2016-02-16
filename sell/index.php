<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/cdn/css/font-awesome.min.css" />
		<link rel="stylesheet" href="/cdn/css/quicksand.css" />
		<link rel="stylesheet" href="/cdn/css/sell.css" />
		<script src="/cdn/js/jquery.js"></script>
		<script src="/cdn/js/sell.js"></script>
	</head>
	<body>
		<div class="header">
			<div id="inner-cont">
				<span id="home">
					<a href="/">
						<i class="fa fa-home" title="Edit"></i>
					</a>
				</span>
				<span id="sell-mobile">
					<a href="/quote">
						<i class="fa fa-mobile" title="Edit"></i>
					</a>
				</span>
				<span id="twitter">
					<a href="http://twitter.com/zachgates7">
						<i class="fa fa-twitter" title="Edit"></i>
					</a>
				</span>
			</div>
		</div>
		<div id="main-content">
			<div id="info">
				<?php
					$types = array("iPhone 5c", "iPhone 5", "iPhone 5s", "iPhone 6", "iPhone 6 Plus", "iPhone 6s", "iPhone 6s Plus");
					$sizes = array("8GB", "16GB", "32GB", "64GB", "128GB");
					$conds = array("Poor", "Fair", "Excellent");
					if (isset($_GET["type"]) && isset($_GET["size"]) && isset($_GET["cond"])) { 
						if (in_array("$_GET['type']", $types) && in_array("$_GET['size']", $sizes) && in_array("$_GET['cond']", $conds)) {
							echo "<span id='type'>$type</span><br><span id='size'>$size</span><br><span id='cond'>$cond</span>";
						} else {
							echo "<script>window.location.href='/';</script>";
						}
					}
				?>
			</div>
		</div>
	</body>
</html>