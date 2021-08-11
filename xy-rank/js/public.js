$(function () {
    // tab
    $('.tab_menu').find('li').on('click', function () {
        var times = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parents('.tab_box').find('.sub_box').eq(times).show().siblings().hide();
    })
	
	$('.tab_menu').find('span').on('click', function () {
	    var times = $(this).index();
	    $(this).addClass('current').siblings().removeClass('current');
	    $(this).parents('.tab_box').find('.sub_box').eq(times).show().siblings().hide();
	})
	
	$('.tfBox').find('li').hover(function() {
		$(this).find('.tBox').removeClass('hide').siblings('.fBox').addClass('hide');
		$(this).siblings().find('.tBox').addClass('hide').siblings('.fBox').removeClass('hide');
	});
	// zx
	$('.itabMenu').find('span').on('click', function () {
	    var times = $(this).index();
	    $(this).addClass('current').siblings().removeClass('current');
	    $(this).parents('.itabBox').find('.isubBox').eq(times).show().siblings().hide();
	})

	$('.isubMenu').find('span').on('click', function () {
	    var times = $(this).index();
	    $(this).addClass('current').siblings().removeClass('current');
	    $(this).parents('.isubBox').find('ul').eq(times).show().siblings().hide();
	})
    // indexslider
    var sliderLength = $('.slider').find('li').length,sliderWidth = $('.slider').find('li').width(),dot = 0,dotCont = ' ',slider = '';
    $('.slider').find('ul').css({'width':sliderWidth*sliderLength});
    for(dot ; dot < sliderLength ; dot++){
    	dotCont += '<i></i>';
    }
    $('.slider').find('.dot').append(dotCont);
    $('.slider').find('.dot i').first().addClass('current');
    $('.slider').find('.dot').on('click','i',function(){
    	slider = $(this).index();
    	sliderMove();
    });
    var zidong = setInterval( run , 3000 );
    function run(){
    	slider++;
    	if( slider > sliderLength-1){
    		slider = 0;
    	};
    	sliderMove();
    };
    $('.slider').hover(function(){
    	clearInterval(zidong);
    },function(){
    	zidong = setInterval( run , 3000 );
    });
    function sliderMove(){
    	$('.slider').find('.dot i').eq(slider).addClass('current').siblings().removeClass('current');
    	$('.slider').find('ul').stop().animate({'left': -sliderWidth*slider},500);
    }	
	
	// hj
	if($('.itopic').length>0){
		function moveAnimated(moveElement, targetLeft) {
			clearInterval(moveElement.timeId);
			moveElement.timeId = setInterval(function() {
				var currentLeft = moveElement.offsetLeft;
				var step = 10;
				step = currentLeft < targetLeft ? step : -step;
				currentLeft += step;
				if (Math.abs(targetLeft - currentLeft) > Math.abs(step)) {
					moveElement.style.left = currentLeft + "px";
				} else {
					clearInterval(moveElement.timeId);
					moveElement.style.left = targetLeft + "px";
				}
			}, 8)
		}
		
		var imgWidth = $(".caroList div").width();
		var circleIndex = 0;
		$(".caroList div").each(function(i) {
			$(".caroDot").append("<span></span>");
			$(".caroDot>span:last").attr("index", i);
		})
		$(".caroDot>span:first").attr("class", "on");
		$(".caroList div:first").clone(true).appendTo($(".caroList"))
		$(".caroPre").on("click", function() {
			if (circleIndex == 0) {
				circleIndex = $(".caroDot>span").length;
				$(".caroList").css("left", -circleIndex * imgWidth + "px");
			}
			circleIndex--;
			moveAnimated($(".caroList")[0], -circleIndex * imgWidth)
			$(".caroDot>span").attr("class", "")
			$(".caroDot span:eq(" + circleIndex + ")").attr("class", "on");
		
		})
		
		function clickRight() {
			if (circleIndex == $(".caroList").children().length - 1) {
				circleIndex = 0;
				$(".caroList").css("left", "0px");
			}
			circleIndex++;
			moveAnimated($(".caroList")[0], -circleIndex * imgWidth)
			if (circleIndex == $(".caroList").children().length - 1) {
				$(".caroDot>span:first").attr("class", "on");
				$(".caroDot>span:last").attr("class", "");
			} else {
				$(".caroDot>span").attr("class", "")
				$(".caroDot span:eq(" + circleIndex + ")").attr("class", "on");
			}
		}
		$(".caroNext").on("click", clickRight)	
	}	
		
	$(".tpTab").html() ? ($(".tpTab .navCur").css("left", $('.tpTab ul .current').position().left)) : null;
	$('.tpTab ul li').on('mouseenter', function(){
	  var cur = null;
	  $('.tpTab ul li').each(function(i, e) {
	    if ($(this).hasClass("current")) {
	      $(this).addClass("navLoad");
	      $(this).removeClass("current");
	      cur = i;
	    } else if ($(this).hasClass("navLoad")) {
	      cur = i;
	    }
	  })
	  var _this = $(this),
	      _left  = _this.position().left,
	      _type = _this.data('type');
	  $('#navCur').stop().animate({
	      left: _left + 'px'
	  }, 500);  
	  _this.one('mouseleave', function(){
	    $('.tpTab ul li').eq(cur).addClass("navLoad");
	    $('#navCur').stop().animate({
	        left: $('.tpTab ul .navLoad').position().left + 'px'
	    }, 500, function() {
	      $('.tpTab ul li').eq(cur).addClass("current").removeClass("navLoad");
	    });
	  })  
	});	

	// TOP
	$('.backTop').click(function () {$('body,html').animate({"scrollTop": 0}, 600);});
	$(window).scroll(function () { if ($(window).scrollTop() > 600) { $('.backTop').fadeIn();  } else { $('.backTop').hide(); }; });
	
	 $(".nsCopy span").on("click", function() {
	    var pageUrl = location.href;
	    $("input[name=pageUrl]").val(pageUrl)
	    var inputTxt = $("input[name=pageUrl]");
	    inputTxt.select();
	    document.execCommand("copy");
	    alert("复制成功！")
	  })


if($("img[osrc]")){lazy_load_img_init();other_lazy_load_img_init()} 
 
})
var lazy_load_timer=null;
var lazy_load_obj=null;
function lazy_load_img(){window.clearTimeout(lazy_load_timer);lazy_load_timer=window.setTimeout(function(){var o_list=lazy_load_obj.filter(":visible");if(o_list.length){var v_h=$(window).height()+$(document).scrollTop()+100;o_list.each(function(i){if($(this).offset().top<v_h){$(this).attr("src",$(this).attr("osrc"));lazy_load_obj=lazy_load_obj.not($(this).removeAttr("osrc"));};});};if(!lazy_load_obj.length){lazy_load_img_remove();}},0);};
function lazy_load_img_remove(){lazy_load_timer=null;lazy_load_obj=null;$(self).unbind("scroll",lazy_load_img);$(self).unbind("resize",lazy_load_img);if($.isFunction(self.other_lazy_load_img_remove)){other_lazy_load_img_remove();};};
function lazy_load_img_init(){lazy_load_obj=$("img[osrc]");if(lazy_load_obj.length){$(self).scroll(lazy_load_img);$(self).resize(lazy_load_img);if($.isFunction(self.other_lazy_load_img_init)){other_lazy_load_img_init();};lazy_load_img();};};
 function other_lazy_load_img_init(){$("body section").bind("mouseenter",lazy_load_img);$("body .fBox").bind("mouseenter",lazy_load_img);$("body section").bind("click",lazy_load_img);};
function other_lazy_load_img_remove(){$("body section").unbind("mouseenter",lazy_load_img);$("body .fBox").unbind("mouseenter",lazy_load_img);$("body section").unbind("click",lazy_load_img);};



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b4b48ebc65f323495338f604ee140a22";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f733d361f1c4b1a5bf61769bce0f927a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


$(function(){
	var baseUrl = "https://www.xyzs.com/";

//下载按钮
if ($('.downbtn').length > 0) {

	
    var obj = $('.downbtn');
    var id   = obj.attr('id');
    var type = obj.attr('type');

    var reportUrl = "https://linkwe.dzyms.cn/";
    $.get(baseUrl + 'downs/detail/'+id+'/'+type+'/', function(res){
        var result = $.parseJSON(res);
        if (result.code == 1) {
            //view report
            $.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
                '&url='+encodeURIComponent(window.location.href));

            if (result.data.and_url) {
                obj.find('.btnAnd').show().click(function(){
                    $.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys=and');
                    location.href = result.data.and_url;
                });
            }
            if (result.data.ios_url) {
                obj.find('.btnIos').show().click(function(){
                    $.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys=ios');
                    location.href = result.data.ios_url;
                });
            }
            if (result.data.pc_url) {
                obj.find('.pc').show().click(function(){
                    $.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys=pc');
                    location.href = result.data.pc_url;
                });
            }
        }
    }); 
}

})

$(function() {
	let a= new oS([
		{handlers: "hotRank", event: "mouseenter",},
		{handlers: "commonRank1", event: "mouseenter",},
		{handlers: "commonRank2", event: "mouseenter",},
		{handlers: "commonRank3", event: "mouseenter",},
		{handlers: "commonRank4", event: "mouseenter",},
		{handlers: "commonRank5", event: "mouseenter",},
		{handlers: "commonRank6", event: "mouseenter",}
	])
	console.log(a)

	let hideFlag = true;

	$(".hideRank").on("click",function() {
		if (hideFlag) {
			hideFlag = false;
			$(".hideRank").html("收起<i class='ico'></i>");
			$(".hideRank i").css("transform", "rotate(180deg)");
			$(".recommendRank .rankLists").height("auto");
		} else {
			hideFlag = true;
			$(".hideRank").html("展开<i class='ico'></i>");
			$(".hideRank i").css("transform", "rotate(0)");
			$(".recommendRank .rankLists").height("112px");
		}
	})
})

/**
 * Options Switch Handover / created by Mr.boring007 / 1.0.0 / 2021.07.06
 * config 参数调用说明
 * handlers 事件触发对象的id --- required --- string
 * event handlers绑定的事件类型 --- selectable --- 默认click --- string
 * performer 事件执行对象的id --- selectable --- string
 * type 功能选择 --- 0(默认)选项卡 --- 1 handlers 事件触发callback --- int
 * callback 回调函数this指向事件触发的当前handlers --- selectable --- object
 * start 事件是否启动 --- selectable --- 默认启动(可自定义条件语句) --- booleans
 */
oS = (function() {
	"use strict";
	let os = function(config) {
		this._config =config;
		config.forEach((ele, i) => {
			this._setParams(i);//参数配置
			this._init(i);//入口函数
		});
	};

	os.prototype = {
		constructor: os,

		_setParams: function(i) {
			let {handlers, event, performer, type, callback, start} = this._config[i];
			this._config[i].handlers = handlers;
			this._config[i].event = event || 'click';
			this._config[i].performer = performer || "";
			this._config[i].type = type || 0;
			this._config[i].callback = callback || this._config[i].callback;
			this._config[i].start = start || true;
			this._config[i].err = [];
			this._config[i].err[0] = false;

			this.log.err(i, this); //参数检测
		},

		isStart: function(i) { //多调用模式下，当前对象是否调用
			if(this._config[i].start && !this._config[i].err[0]) this.bindEve(i);
		},

		bindEve: function(i) { //handlers绑定事件
			let _this = this;
			if (this._config[i].type === 0) {
				let prevCur = 0,
					curIndex = 0,
					binder = document.getElementById(this._config[i].handlers).children;
					
				Array.from(binder).forEach((itm, j) => {
					itm.addEventListener(this._config[i].event, function() {
						curIndex = j;
						_this.setBinderCur(this, binder, prevCur, curIndex, i);
						prevCur = j;

						if (_this._config[i].callback)_this.callbackFun(i, this); //回调函数执行
					});
				});
			} else if (this._config[i].type === 1) {
				let binder = document.getElementById(this._config[i].handlers);

				binder.addEventListener(this._config[i].event, function() {
					if (_this._config[i].callback)_this.callbackFun(i, this); //回调函数执行
				});
			}
			
		},

		setBinderCur: function(_this, binder, prevCur, curIndex, i) { //执行handlers事件
			if (prevCur != curIndex) { //避免无用渲染
				Array.from(binder).forEach(itm => {
					itm.classList.remove("current");
				})

				_this.classList.add("current");
				
				if (this._config[i].performer)this.setPerformerCur(curIndex, i); //是否执行performer事件
			}
		},

		setPerformerCur: function(curIndex, i) { //执行performer事件
			let performer = document.getElementById(this._config[i].performer).children;
			Array.from(performer).forEach(itm => {
				itm.classList.add("hide");
			});

			performer[curIndex].classList.remove("hide");
		},

		_init: function(i) { //启动
			this.isStart(i);
		},

		callbackFun: function(i, _this) { //回调函数执行
			this._config[i].callback.call(_this);
		},

		log: { //日志
			err: function(i, _this) {
				if (_this._config[i].handlers) {
					this.test_1(i, _this);
				} else {
					_this._config[i].err[0] = true;
					_this._config[i].err[1] = "运行失败：配置文件第"+ ++i +"项，缺少必要参数handlers";
				}
			},
			test_1: function(i, _this) {
				let eleExistJudge = document.getElementById(_this._config[i].handlers);
				if (eleExistJudge) {
					
					this.test_2(i, _this);
				} else {
					_this._config[i].err[0] = true;
					_this._config[i].err[1] = '运行失败：配置文件参数handlers:"'+_this._config[i].handlers+'"元素不存在';
				}
			},
			test_2: function(i, _this) {
				let typeJudge = _this._config[i].type,
						dataType = typeof typeJudge === "number" ? true : false,
						hasType = typeJudge === 0 || typeJudge === 1 ? true : false;

				if (!dataType) {
					_this._config[i].err[0] = true;
					_this._config[i].err[1] = '运行失败：配置文件参数type:'+_this._config[i].type+'数据类型错误，传入数据类型为'+typeof typeJudge+'，应为int';
				} else if (!hasType) {
					_this._config[i].err[0] = true;
					_this._config[i].err[1] = '运行失败：配置文件参数type:'+_this._config[i].type+'类型不存在';
				} else {
					_this._config[i].err[0] = false;
					_this._config[i].err[1] = "运行正常";
				};
			}
		}
	};

	return os;
})();

