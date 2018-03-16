$(function() {

	$(".list1 span").eq(0).css("background", "orange");
	$(".chaguanxi .top span").eq(0).css("background", "seagreen");
	$(".chaguanxi").hide();
	$(".search").show();
	$(".core").show();
	$(".connection").hide();
	$(".demand").on("click", function() {

		window.open('html/search/IndexGSSS.html');
	})
	$(".list1 span").on("click", function() {
		var index = $(this).index();
					alert(index)
		$(this).css("background", "orange").siblings('span').css("background", "#5881bf");
		if(index == 0) {
			$(".sousuo").attr('placeholder', '输入相关单位信息查询');
			$(".chaguanxi").hide();
			$(".search").show();
			$(".demand").on("click", function() {

				window.open('html/search/IndexGSSS.html');
			})

		} else if(index == 2) {
			$(".sousuo").attr('placeholder', '输入相关客户信息查询')
			$(".chaguanxi").hide();
			$(".search").show();
			$(".demand").on("click", function() {

				window.open('html/search/Indexlbss.html');
			})

		} else if(index == 4) {
			$(".sousuo").attr('placeholder', '输入相关客户信息查询')
			$(".chaguanxi").show();
			$(".search").hide();

		}

	})
	$(".chaguanxi .top span").on("click", function() {
		var index = $(this).index();
		$(this).css("background", "seagreen").siblings('span').css("background", "#5881bf");
		if(index == 0) {
			$(".connection").hide();
			$(".relation").show();
			$(".core").show();
		} else if(index == 2) {
			$(".connection").show();
			$(".relation").hide();
			$(".core").hide();
		}
	})

})