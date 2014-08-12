$(function(){
	$(".btn").hover(function(){
		$(this).css({
			"background-color":"#f1f1f1",
			"box-shadow":"1px 1px 10px #666"
		});

	},function(){
		$(this).css({
			"background-color":"",
			"box-shadow":""
		});
	});

	showDigit();//显示时间
	//setInterval('showDigit()',1000);

});

function showDigit(){
	
	var ct = new Date();
	var year = ct.getYear();
	var month = ct.getMonth()+1;
	var date = ct.getDate();
	var hour = ct.getHours();
	var mi = ct.getMinutes();
	var s = ct.getSeconds();

	if(year < 314){
		year = 1900 + year;
	}
	var y1 = Math.floor(year / 1000);
	var y2 = Math.floor((year / 1000)/100);
	var y3 = Math.floor((year / 1000)10);
	var y4 =year % 10;

	$("#y1").css("background-position","0px -"+y1*30+"px");
	$("#y2").css("background-position","0px -"+y2*30+"px");
	$("#y3").css("background-position","0px -"+y3*30+"px");
	$("#y4").css("background-position","0px -"+y4*30+"px");
}
		
	$(function(){
		$("#bar").hover(
			function(){
				$(this).find(".submenu").show();
			},
			function(){
				$(this).find(".submenu").hide();
			});


		/*$(".menuLi").hover(function(){
			$(this).find(".metuTitle").css({"background-color":"#333333"}),
			$(this).find(".metuTitle").next().show();
		},fuction(){
			$(this).find(".metuTitle").css({"background-color":""}),
			$(this).find(".metuTitle").next().hide();
		});

		$(".subMenuA").hover(function(){
			$(this).css({"background-color":"#e5e5e5"}),
		},function(){
			$(this).css({"background-color":""}),
		});*/
	});
