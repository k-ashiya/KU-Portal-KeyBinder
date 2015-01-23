// ==UserScript==
// @name        KU Portal KeyBinder
// @namespace   http://hanakimi-ikepara.hotcom-web.com
// @description 京都大学の全学生共通ポータルにログイン後の画面で、キー操作一つで各リンクへ飛ぶためのExtension
// @include     https://student.iimc.kyoto-u.ac.jp/list.html
// @version     2
// @grant       none
// ==/UserScript==

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
