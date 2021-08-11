/*** Nokersang 2016-11 ***/

var console=console||{log:function(){}};

document.oncontextmenu=function(e){var e=e||event;if(e.shiftKey&&e.ctrlKey){return true;};var name=e.srcElement?e.srcElement.tagName.toLowerCase():e.target.tagName.toLowerCase();var text=document.selection?document.selection.createRange().text:document.getSelection();if(name=="input"){var type=e.srcElement?e.srcElement.type.toLowerCase():e.target.type.toLowerCase();if(type=="text"||type=="password"){return true;}else{return false;};}else if(name=="textarea"){return true;}else if(text.length&&name!="a"&&name!="img"&&name!="strong"){return true;}else{return false;};};

var _noker_cookie_control={e:function(ms){if(isNaN(ms)||ms<0){ms=0};var t=new Date();t.setTime(t.getTime()+ms);return t.toGMTString();},c:function(n,v,e,p,d,s){document.cookie=n+"="+encodeURI(v)+(e?(';expires='+e):'')+(p?(';path='+p):'')+(d?(';domain='+d):'')+((s)?';secure':'');},d:function(n,p,d){if(this.g(n)){document.cookie=n+"="+((p)?(";path="+p):'')+((d)?(";domain="+d):'')+";expires=Mon,01-Jan-2006 00:00:01 GMT";}},g:function(n){var c=document.cookie.split("; ");var t="";for(var i=0;i<c.length;i++){t=c[i].split("=");if(n==t[0]){return decodeURI(t[1]);};};return "";}};

var _noker_lazy_load_img={set:{d:30,e:30,b:[]},o:[],p:function(){var l=_noker_lazy_load_img;window.clearTimeout(l.t);l.t=window.setTimeout(function(){var o=l.o.filter(":visible");if(o.length){var h=$(window).height()+$(document).scrollTop()+l.set.e;o.each(function(i,e){var o=$(e);if(o.offset().top<h){o.attr("src",o.attr("osrc"));l.o=l.o.not(o.removeAttr("osrc"));};});};if(!l.o.length){l.e();};},l.set.d);},e:function(){var l=this;l.t=null;$(self).off("scroll",l.p).off("resize",l.p).off("orientationchange",l.p);$.each(l.set.b,function(i,n){$(document).off(n[0],n[1],l.p);});},init:function(set){var l=this;l.o=$("img[osrc]");if(l.o.length){$.extend(l.set,set);$(self).on("scroll",l.p).on("resize",l.p).on("orientationchange",l.p);$.each(l.set.b,function(i,n){$(document).on(n[0],n[1],l.p);});l.p();};}};

var _noker_focus_pic={set:{begin:0,interval:6000,speed:300},change:function(c){var f=this;var i=f.e.filter(".active").index();if(i<0){i=0;f.e.eq(i).addClass("active")};if(c==i){return false;};var l=f.a.length;var w=f.o.width();if(c=="auto"){c=(i+1)%l;}var v=c-i;if(v>0){v="-="+Math.abs(v*w);}else if(v<0){v="+="+Math.abs(v*w);};f.e.eq(c).addClass("active").siblings("em").removeClass("active");f.c.stop(true,true).animate({"left":v},f.set.speed);},init:function(set){var f=this;$.extend(f.set,set);f.o=$(f.set.id);f.c=$(".content",f.o);f.a=$("a",f.c);if(f.a.length<2){return false;};f.e="";f.a.each(function(i,e){f.e+="<em></em>";});f.e=$(f.e);f.e.appendTo(f.o).wrapAll("<div class=\"pagination\"></div>").hover(function(){f.change($(this).index());},function(){});f.o.hover(function(){window.clearInterval(f.t);},function(){f.t=window.setInterval(function(){f.change("auto");},f.set.interval);}).mouseleave();f.change(f.set.begin);}};

function recommend_game_init(){
	$("#recommend_game .label span").click(function(){$("#recommend_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
};

function recommend_tag_init(){
	$("#recommend_tag .label span").click(function(){$("#recommend_tag .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
};

function shouji_area_init(){
	$("#shouji_game .label span").click(function(){$("#shouji_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
	$("#shouji_rank .label span").hover(function(){$("#shouji_rank .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();},function(){}).first().mouseenter();
	$("#shouji_rank .box a").each(function(i,e){var r=$(e).index();if(r<3){$("<em class=\"t\">"+(r+1)+"</em>").prependTo(e);}else{$("<em>"+(r+1)+"</em>").prependTo(e);};});
};

function danji_area_init(){
	$("#danji_game .label span").click(function(){$("#danji_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
	$("#danji_rank .label span").hover(function(){$("#danji_rank .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();},function(){}).first().mouseenter();
	$("#danji_rank .box a").each(function(i,e){var r=$(e).index();if(r<3){$("<em class=\"t\">"+(r+1)+"</em>").prependTo(e);}else{$("<em>"+(r+1)+"</em>").prependTo(e);};});
};

function wangluo_area_init(){
	$("#wangluo_game .label span").click(function(){$("#wangluo_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
	$("#wangluo_rank .label span").hover(function(){$("#wangluo_rank .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();},function(){}).first().mouseenter();
	$("#wangluo_rank .box a").each(function(i,e){var r=$(e).index();if(r<3){$("<em class=\"t\">"+(r+1)+"</em>").prependTo(e);}else{$("<em>"+(r+1)+"</em>").prependTo(e);};});
};

function wangye_area_init(){
	$("#wangye_game .label span").click(function(){$("#wangye_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
	$("#wangye_rank .label span").hover(function(){$("#wangye_rank .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();},function(){}).first().mouseenter();
	$("#wangye_rank .box a").each(function(i,e){var r=$(e).index();if(r<3){$("<em class=\"t\">"+(r+1)+"</em>").prependTo(e);}else{$("<em>"+(r+1)+"</em>").prependTo(e);};});
};

function flash_area_init(){
	$("#flash_game .label span").click(function(){$("#flash_game .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();}).first().click();
	$("#flash_rank .label span").hover(function(){$("#flash_rank .content .box").eq($(this).addClass("active").siblings("span").removeClass("active").end().index()).show().siblings(".box").hide();},function(){}).first().mouseenter();
	$("#flash_rank .box a").each(function(i,e){var r=$(e).index();if(r<3){$("<em class=\"t\">"+(r+1)+"</em>").prependTo(e);}else{$("<em>"+(r+1)+"</em>").prependTo(e);};});
};

function rank_area_init(){
	$("#rank_area .area .content a").each(function(i,e){var r=$(e).index();if(r<3){if(r==0){$(e).addClass("active");};$("<em class=\"r t_"+r+"\">"+(r+1)+"</em>").prependTo(e);}else{$("<em class=\"r\">"+(r+1)+"</em>").prependTo(e);};}).hover(function(){$(this).addClass("active").siblings("a").removeClass("active");},function(){});
};

function quick_go_top_init(){
	var o=$("<a href=\"#\" id=\"quick_go_top\" title=\"返回顶部\"></a>").appendTo("body");
	o.click(function(){var $b=navigator.userAgent.indexOf("AppleWebKit")<0?$("html"):$("body");$b.animate({"scrollTop":0},700);return false;});
	$(window).resize(function(){if($(this).width()<1080){o.css({"margin-left":$(this).width()*0.5-50});}else{o.css({"margin-left":490});};}).resize();
	$(window).scroll(function(){if($(this).scrollTop()>300){o.show();}else{o.hide();};}).scroll();
};

function down_move_init(){
	if(!_noker_cookie_control.g("down_move_remind_close")){
		var o=$("<div id=\"down_move_cover\"></div><div id=\"down_move_content\"><button type=\"button\"></button></div>").appendTo("body");
		$("button",o).click(function(){
			_noker_cookie_control.c("down_move_remind_close",1,_noker_cookie_control.e(365*24*60*60*1000),"/","box.doyo.cn");
			o.remove();
		});
		o.appendTo("body");
	};
};

function debug_panel(h){
	var dp=$("#debug_panel");
	if(!dp.length){dp=$("<div id=\"debug_panel\"></div>").appendTo("body");dp.click(function(){if(!dp.data("c")){dp.data("c",1);}else{var c=dp.data("c")+1;dp.data("c",c);if(c%10>5){dp.css({width:"auto",height:"auto",opacity:1});}else{dp.css({width:10,height:10,opacity:0});};};})};
	dp.html(dp.html()+h);
};

function click_click_init(){
	var o1=$("#focus_pic .content");
	if(o1.length==1){
		$("a",o1).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_01_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o2=$("#focus_right");
	if(o2.length==1){
		$("a",o2).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_02_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o3=$("#top_link");
	if(o3.length==1){
		$("a",o3).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_03_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o4=$("#recommend_game .box:first");
	if(o4.length==1){
		$("a",o4).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_04_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o5=$("#recommend_tag .content .box:first .pic");
	if(o5.length==1){
		$("a",o5).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_05_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o6=$("#recommend_tag .content .box:first .word:eq(3)");
	if(o6.length==1){
		$("a",o6).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_06_"+($("a",o6).index(this)+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o7=$("#recommend_tag .content .box:first .word:eq(4)");
	if(o7.length==1){
		$("a",o7).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_07_"+($("a",o7).index(this)+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o8=$("#shouji_game .content .box:first");
	if(o8.length==1){
		$("a",o8).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_08_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o9=$("#wangluo_game .content .box:first");
	if(o9.length==1){
		$("a",o9).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_09_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
	var o10=$("#wangye_game .content .box:first");
	if(o10.length==1){
		$("a",o10).click(function(){
			$("<iframe src=\"http://tablet.doyo.cn/jump/click?B_I_10_"+($(this).index()+1)+"\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");
		});
	};
};

function gg_make(){
	var g=["u3044819","u3847431"];
	var s=document.createElement("script");
	s.type="text/javascript";
	s.setAttribute("smua","d=p&s=b&u="+g[Math.random()*g.length|0]+"&w=960&h=90");
	s.src="//www.nkscdn.com/smu0/o.js"
	return s;
};

function gg_init(){
	if(document.getElementById("gd_0")){
		document.getElementById("gd_0").appendChild(gg_make());
	};
	if(document.getElementById("gd_1")){
		document.getElementById("gd_1").appendChild(gg_make());
	};
};

jQuery(function($){

_noker_focus_pic.init({id:"#focus_pic"});
_noker_lazy_load_img.init({b:[["click","#recommend_game .label span"],["click","#recommend_tag .label span"],["click","#shouji_game .label span"],["mouseenter","#shouji_rank .label span"],["click","#danji_game .label span"],["mouseenter","#danji_rank .label span"],["click","#wangluo_game .label span"],["mouseenter","#wangluo_rank .label span"],["click","#wangye_game .label span"],["mouseenter","#wangye_rank .label span"],["click","#flash_game .label span"],["mouseenter","#flash_rank .label span"]]});
recommend_game_init();
recommend_tag_init();
shouji_area_init();
danji_area_init();
wangluo_area_init();
wangye_area_init();
flash_area_init();
rank_area_init();
quick_go_top_init();

click_click_init();

//临时下载搬家指引
// down_move_init();

gg_init();

debug_panel("测试页入口：");
debug_panel("<br><a href=\"/game/18693/hardware\">超高配置测试页</a>");
debug_panel("<br><a href=\"/game/11042/hardware\">较多环境测试页</a>");
debug_panel("<br><a href=\"/other/port_test.html\">客户端IE接口测试页</a>");



});

$(function() {
	
	$(".tryMemberBox i.close").click(function() {
		$(".tryMemberBox").addClass("hide");
	})

	$(".memberSpeedBox i.close").click(function() {
		$(".memberSpeedBox").addClass("hide");
	})

	// $(".tryMemberBox .tryMemberBtn").click(function() {
	// 	$(".tryMemberBox").addClass("hide");
	// 	$(".memberSpeedBox").removeClass("hide");
	// 	$(".downBox .downMsg .speeding").removeClass("hide");
	// 	$(".downBox .downLine .speeding").removeClass("hide");
	// })

	$(".downBox .downLine .cancel").click(function() {
		$(".cancelDownBox2").removeClass("hide");
	})

	$(".cancelDownBox .cancelDown .top .close").click(function() {
		$(".cancelDownBox").addClass("hide");
	})

	$(".cancelDownBox .cancelDown .btnBox div.cancel").click(function() {
		$(".cancelDownBox").addClass("hide");
	})

	$(".cancelDownBox2 .cancelDown .top .close").click(function() {
		$(".cancelDownBox2").addClass("hide");
	})

	$(".cancelDownBox .cancelDown .btnBox .sure").click(function() {
		history.go(-1)
	})

	$(".cancelDownBox2 .btnBox .delete").click(function() {
		$(".cancelDownBox").removeClass("hide");
		$(".cancelDownBox2").addClass("hide");
	})
	
	$(".downBox .downLine .pause").click(function() {
		$(".downBox .downLine .player").removeClass("hide");
		$(".downBox .downLine .pause").addClass("hide");
		clearInterval(timer);
	})

	$(".downBox .downLine .player").click(function() {
		$(".downBox .downLine .pause").removeClass("hide");
		$(".downBox .downLine .player").addClass("hide");
		setPercent();
	})

	setPercent();
	var timer;
	function setPercent() {
		let wPercent = ($(".downBox .downLine .line span em").width()/$(".downBox .downLine .line span").width()*100).toFixed(0);

		timer = setInterval(function() {
			if (wPercent< 100) {
				wPercent++;
				$(".downBox .downLine .line span em").css("width", wPercent+"%");
				$(".downBox .downLine .line span i").html(wPercent+"%")
			} else {
				clearInterval(timer);
				$(".downBox .downLine .line span").css("color", "#fff");
			}
			
		}, 20);
	}
})