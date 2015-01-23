$(document).keydown(function(e){
	c = e.keyCode;
	switch (c) {
		case 69:
			open($("#elearning").prev().children("a").attr("href"), "_blank");
			break;
		case 75:
			open($("#kulasis").prev().children("a").attr("href"), "_blank");
			break;
		case 76:
			open($("#mykuline").prev().children("a").attr("href"), "_blank");
			break;
		case 77:
			open($("#kumoi").prev().children("a").attr("href"), "_blank");
			break;
		case 80:
			open($("#panda").prev().children("a").attr("href"), "_blank");
			break;
		default:
			break;
	}
});
