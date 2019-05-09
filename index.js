/**
 * banner 图片滚动
 */

$(function () {
	var n = 0;
	var b = $(".banner_img li").length;
	var c = b * 100;
	var d = 1 / b * 100;
	$(".banner_img").width(c + "%");
	$(".banner_img li").width(d + "%");
	$(".banner_list").width(b * 30);
	if (b > 1) {
		for (var i = 0; i < b; i++) {
			var listSpan = $("<span></span>")
			$(".banner_list").append(listSpan);
		}
	}
	$(".banner_list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");

	function rollEnvent() {
		if (n == b - 1) {
			var ctPosit = (n + 1) * 100;
			$(".banner_wrap").append($(".banner_img").clone());
			$(".banner_img:last").css("left", "100%");
			$(".banner_img:first").animate({
				"left": "-" + ctPosit + "%"
			}, 1000);
			$(".banner_img:last").animate({
				"left": "0"
			}, 1000);
			var setTime0 = setTimeout(function () {
				$(".banner_wrap .banner_img:first").remove();
			}, 1000);
			n = 0;
			$(".banner_list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
		} else {
			n++;
			var ctPosit = n * 100;
			$(".banner_img").animate({
				"left": "-" + ctPosit + "%"
			}, 1000);
			$(".banner_list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
		}
	}
	var slidesetInterval = setInterval(rollEnvent, 3000);
	$(".banner_wrap").hover(function () {
		clearInterval(slidesetInterval);
	}, function () {
		slidesetInterval = setInterval(rollEnvent, 3000);
	})
	$(".banner_right").click(function () {
		if (n == b - 1) {
			var ctPosit = (n + 1) * 100;
			$(".banner_wrap").append($(".banner_img").clone());
			$(".banner_img:last").css("left", "100%");
			$(".banner_img:first").animate({
				"left": "-" + ctPosit + "%"
			}, 1000);
			$(".banner_img:last").animate({
				"left": "0"
			}, 1000);
			var setTime0 = setTimeout(function () {
				$(".banner_wrap .banner_img:first").remove();
			}, 1000);
			n = 0;
			$(".banner_list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
		} else {
			n++;
			var ctPosit = n * 100;
			$(".banner_img").animate({
				"left": "-" + ctPosit + "%"
			}, 1000);
			$(".banner_list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
		}
	});
	$(".banner_left").click(function () {
		if (n == 0) {
			var stPosit = b * 100;
			var etPosit = (b - 1) * 100;
			$(".banner_wrap").prepend($(".banner_img").clone());
			$(".banner_img:first").css("left", "-" + stPosit + "%");
			$(".banner_img:last").animate({
				"left": "100%"
			}, 1000);
			$(".banner_img:first").animate({
				"left": "-" + etPosit + "%"
			}, 1000);
			var setTime0 = setTimeout(function () {
				$(".banner_wrap .banner_img:last").remove();
			}, 1000);
			n = b - 1;
			$(".banner_list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
		} else {
			n--;
			var ctPosit = n * 100;
			$(".banner_img").animate({
				"left": "-" + ctPosit + "%"
			}, 1000);
			$(".banner_list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
		}
	});
	$(".banner_list span").click(function () {
		var indexS = $(this).index();
		n = indexS;
		var ctPosit = n * 100;
		$(".banner_img").animate({
			"left": "-" + ctPosit + "%"
		}, 1000);
		$(this).addClass("spcss").siblings("span").removeClass("spcss");
	})
});
$(function () {
	$(".banner_img img").css("display", "none")
	$(".banner_img li").each(function (e) {
		$(".banner_img li:eq(" + e + ")").css("backgroundImage", "url(" + $(".banner_img li:eq(" + e + ")").find("img").attr("src") + ")");
	});
});