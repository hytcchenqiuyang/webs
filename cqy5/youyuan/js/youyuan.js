$(function(){
	$(".flashControl").click(function(){
		currIndex=$(this).attr("picIndex");
		showFlashImage();
	});
	$("#flash").hover(function(){

		clearInterval(timerHandle);
	},function(){
		timerHandle = setInterval("showFlashImage()",1000);
	});
	timerHandle = setInterval("showFlashImage()",1000);

});
var timerHandle;
var currIndex = 2;
function showFlashImage(){
	var curImage = $("#controlSpan" + currIndex).attr("imgurl");
	$("#flash").css("background-image",'url("' + curImage + '")');
	$(".flashControl").removeClass("currentSpan");
	$("#controlSpan" + currIndex).addClass("currentSpan");
	currIndex++
	if(currIndex ==4){
		currIndex=1;
	} 
}
