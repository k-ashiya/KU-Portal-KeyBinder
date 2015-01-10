$(document).keydown(function(e){
	c = e.keyCode;
	switch (c) {
		case 69:
			open($("#elearning p:first a").attr("href"), "_blank");
			break;
		case 75:
			open($("#kulasis p:first a").attr("href"), "_blank");
			break;
		case 76:
			open($("#mykuline p:first a").attr("href"), "_blank");
			break;
		case 77:
			open($("#kumoi p:first a").attr("href"), "_blank");
			break;
		case 80:
			open($("#panda p:first a").attr("href"), "_blank");
			break;
		default:
			break;
	}
});
