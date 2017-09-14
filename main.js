$("#my").mouseenter(function(){
	$("#my").css({"background":"#fff","color":"red"});
	$("#show").css({"display":"block","z-index":334});
}).mouseleave(function(){
	$("#show").css("display","none");
	$("#my").css({"background":"none","color":"#d7d7d7"});
})
$("#nav2 li").mouseenter(function(){
	$("#d1").show().css("z-index",333);
}).mouseleave(function(){
	$("#d1").hide()
})


var timer = setInterval(autoPlay,2000);
var index = 0;
function autoPlay(){
	index++;
	if(index == $("#imgs li").length){
		index = 0;
	}
	$("#imgs li").eq(index).css("z-index",2).siblings().css("z-index",-1);
	$("ol li ").eq(index).css("background","chartreuse").siblings().css("background","#eee");
}
$("ol li").mouseover(function(){
	clearInterval(timer);
	index = $(this).index()-1;
	autoPlay();
})
$("ol li").mouseout(function(){
	timer = setInterval(autoPlay,2000);
})

$("#share dl").mouseover(function(){
	$(this).stop().animate({"left":-10},500)
}).mouseout(function(){
	$(this).stop().animate({"left":0},500);
})
$("#newest>div").mouseover(function(){
	$(this).find("img").stop().eq(0).animate({"width":610,"margin-left":-5},500);
}).mouseout(function(){
	$(this).find("img").stop().eq(0).animate({"width":600,"margin-left":0},500);
})
//尖货推荐移入移出效果
$("#recommend ul li").mouseenter(function(){
	$(this).stop().animate({"opacity":.7},200);
}).mouseleave(function(){
	$(this).stop().animate({"opacity":1},200)
})
//热荐专题移入移出
$("#special>div").mouseenter(function(){
	$(this).find("img").stop().eq(0).animate({"width":610,"margin-left":-5},500);
}).mouseleave(function(){
	$(this).find("img").stop().eq(0).animate({"width":600,"margin-left":0},500);
})
showData();
function showData(){
	ajaxGet("main.json",fn);
	function fn(msg){
		var arr = JSON.parse(msg);
		var str = "";
		for(var i = 0 ; i < arr.length ; i++){
			str += `<a href="detail.html?id=${arr[i].id}&src=${arr[i].src}"><img src="${arr[i].src}" /></a>`
		}
		$("#better").html(str);
		$("#better a").mouseenter(function(){
			$(this).find("img").css("border","1px #ccc solid");
		}).mouseleave(function(){
			$(this).find("img").css("border","none");
		})
	}
}
$("#car").mouseenter(function(){
	$("#car").animate({"opacity":.8},500);
}).mouseleave(function(){
	$("#car").animate({"opacity":1},500);
})


$("#attach>div").find("a").mouseenter(function(){
	var index = $(this).index();
	if(index == 0){
		$(this).find("img").css("top",-262)
		$("#attach p").find("img").css("display","block")
	}else{
		$(this).find("img").css("top",-262)
	}
	
}).mouseleave(function(){
	$("#attach p").find("img").css("display","none")
	$(this).find("img").css("top",-225)
})

