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



//放大镜
$("#smallImages li").bind("mouseenter",function(){
	var index = $(this).index();
	$("#smallbox img").eq(index).show().siblings("img").hide();
	$("#bigbox img").eq(index).show().siblings("img").hide();
})
$("#smallbox").on({
	mouseenter : function(){
		$("#bigbox").show().css("z-index",999);
		$("#mask").show();
	},
	mouseleave : function(){
		$("#bigbox").hide();
		$("#mask").hide();
	},
	mousemove : function(e){
		var e = e || event;
		var x = e.pageX - $("#smallbox").offset().left - $("#mask").width()/2;
		var y = e.pageY - $("#smallbox").offset().top - $("#mask").height()/2;
		var maxL = $("#smallbox").width() - $("#mask").width();
		var maxT = $("#smallbox").height() - $("#mask").height();
		x =Math.min( maxL , Math.max( 0 ,x ) ); 
		y =Math.min( maxT , Math.max( 0 ,y ) ); 
		$("#mask").css({
			left : x , 
			top : y
		})
			
		//大图宽度/小图宽度 = 大图left/ x
		var bigImgX = x*$("#bigbox img").eq(0).width()/$("#smallbox").width();
		var bigImgY = y*$("#bigbox img").eq(0).height()/$("#smallbox").height();
		$("#bigbox img").css({
			left : -bigImgX,
			top : -bigImgY
		})
	}
})
//右边导航栏
$("#close").mousedown(function(){
	$("#nav-right").css("display","none");
})
$("#nav-right").delegate("a:not(:first)","mouseenter",function(){
	var index = $(this).index();
	$("#nav-right a").eq(index).css("background-position-x",-68)
})
$("#nav-right").delegate("a:not(:first)","mouseleave",function(){
	var index = $(this).index();
	$("#nav-right a").eq(index).css("background-position-x",0)
})
//点击回到顶部
$("#nav-right a:last").click(function(){
		 //$(document).scrollTop(0)
	$("body,html").animate({"scrollTop" : 0},1000)
})
//点击查看物流
$("#right-middle p").eq(1).find("a").mouseenter(function(){
	$("#wuliu").show().css("z-index",22);
}).mouseleave(function(){
	$("#wuliu").hide()
})
//二维码出现
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop >= 550){
		$("#nav-left").css({"position":"fixed","top":350,"left":0}).show();
	}else{
		$("#nav-left").hide();
	}
	if(sTop > 850){
		$("#evaluate").css({"position":"fixed","top":0,"left":132,"z-index":33})
	}else{
		$("#evaluate").css({"position":"absolute","top":0,"left":0})
	}
	//点击商品信息

	$("#evaluate>a").click(function(){
		if(sTop > 850){
			document.body.scrollTop = 850
		}
		var index = $(this).index();
		$(this).css({"background":"#ea7514","color":"#fff"}).siblings().css({"background":"#efefef","color":"#000000"});
		$("#message-left>div").eq(index).show().siblings().hide();
	})
	$("#promise>div").mouseenter(function(){
		var num = $(this).index();
		if(num == 2){
			$(this).find("img").css({"position":"absolute","top":-134,"left":5*(-130)}).siblings().css({"position":"absolute","top":0,"left":5*(-130)})
		}else{
			$(this).find("img").css({"position":"absolute","top":-134,"left":num*(-130)}).siblings().css({"position":"absolute","top":0,"left":num*(-130)});
		}
		$("#fasion>div").eq(num).show().siblings().hide();
	//点击a标签时，evaluate固定在顶端
			
	}).mouseleave(function(){
		var num1 = $(this).index();
		if(num1 == 2){
			$(this).find("img").css({"position":"absolute","top":0,"left":5*(-130)}).siblings().css({"position":"absolute","top":0,"left":5*(-130)});
		}else{
			$(this).find("img").css({"position":"absolute","top":0,"left":num1*(-130)}).siblings().css({"position":"absolute","top":0,"left":num1*(-130)});
		}
	})
	
})
$("#img1").click(function(){
	var index = $("#s1").html();
	if(index == 1){
		$("#s1").html("1");
	}else{
		index--;
		$("#s1").html(index)
	}
})
$("#img2").click(function(){
	var index = $("#s1").html();
	index++;
	$("#s1").html(index)
})


$(window).load(function(){
	var cookieInfo = getCookie("key");
	if(cookieInfo.length == 0){
		$("#red").html(0);
		var html = 0;
	}else{
		var html = cookieInfo[0].count;
		$("#red").html(html);
	}
	$(".buy").click(function(){
		html++;
		$("#red").html(html);
		var str = location.href;
		var arr = str.split("?")[1];
		var pid = arr.split("&")[0].split("=")[1];
		var psrc = arr.split("&")[1].split("=")[1];
		console.log(pid)
		console.log(psrc)
		var arr = [];
		var _json = {
			id:pid,
			src:psrc,
			count:1
		}
		console.log(_json)
		var flag = true;
		var cookieInfo = getCookie("key");
		if( cookieInfo.length != 0 ){
			arr = cookieInfo;
			for(var i in arr){
				if(_json.id == arr[i].id){
					arr[i].count++;
					flag = false;
				}
			}
		}
		if(flag){
				arr.push(_json)
			}
		setCookie("key",JSON.stringify(arr))
	})
})
















var sum = 0;
$("#right-bottom ol li").eq(0).click(function(){
	sum++;
	$("#nav-right div").html(sum)
	//起点坐标
	/*var startPoint = {
		x : $("#right-bottom ol li").eq(0).offset().Left + $("#right-bottom ol li").eq(0).width/2,
		y : $("#right-bottom ol li").eq(0).offset().top
	}
	//终点坐标
	 var endPoint = {
		x : $("#nav-right div").offset().left + 20,
		y : $("#nav-right div").offset().top
	}
	 //最高点 
	var topPoint = {
		x : endPoint.x - 100 ,
		y : endPoint.y - 80
	}
	//根据三点坐标确定抛物线的系数
	var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
				
	var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
				
	var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
	//创建商品
	//获取商品起始点坐标
	var x = startPoint.x;
	var y = startPoint.y;
	var good = document.createElement("div");
	good.style.position = "absolute";
	good.style.left = x + "px";
	good.style.top = y +"px";
	document.body.appendChild(good);
	good.style.width = "20px";
	good.style.height = "20px";
	good.style.background = "orange";
	//商品移动  根据抛物线轨迹移动
	var timer = setInterval(function(){
		x = x + 5;
		y = a*x*x + b*x + c;
		good.style.left = x + "px";
		good.style.top = y + "px";
		if( x > endPoint.x ){
			good.remove();
			clearInterval( timer );
			$("#nav-right div").html(++sum)
		}
	},30)*/
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