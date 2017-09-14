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



showData();
function showData(){
	ajaxGet("second.json",fn);
	function fn(msg){
		var str = "";
		var str1 = "";
		var str2 = "";
		var str3 = "";
		var arr = JSON.parse(msg);
		var a = arr.freedom.second;
		var b = arr.outer.first;
		var c = arr.sea.third;
		var d = arr.snow.forth;
		
		//console.log(arr.snow.forth[4].src);
		for(var i = 0 ; i < a.length ; i++){
			str += `<img src="${a[i].src}" />`
		}
		$("#leisureImage").html(str);
		for(var j = 0 ; j < b.length ; j++){
			str1 += `<img src="${b[j].src}" />`
		}
		$("#outerImage").html(str1);
		for(var k = 0 ; k < c.length ; k++){
			str2 += `<img src="${c[k].src}" />`
		}
		$("#beachImage").html(str2);
		for(var l = 0 ; l < d.length ; l++){
			str3 += `<img src="${d[l].src}" />`
		}
		$("#snowImage").html(str3);
		
		$(".img img").mouseenter(function(){
			var top = $(this).offset().top;
			$(this).stop().animate({"opacity":.8},500)
		}).mouseleave(function(){
			$(this).stop().animate({"opacity":1},500)
		})
	}
}

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
