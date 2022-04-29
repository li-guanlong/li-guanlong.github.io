// common
$(function() {
	// nav
	(function() {
			var wSum=0,
					scrollW=0,
					cur = 0;

			$("nav ul li").each(function(index){
					$(this).children("a").hasClass("current") ? cur = index : null;
					wSum += $(this).width();
			});

			scrollW = wSum - $("nav ul").width();
			cur>3 ? navScroll(scrollW) : null;

			function navScroll(scrollW) {
					$("nav ul").scrollLeft(scrollW)
			};
	})();

	// header popups
	$('header .menu').on('click', function () {	
		$('.headerNav').toggle();
		$('.mask').toggle();
		if ($(this).hasClass('current')) {
			$('.menu').removeClass('current')
		} else {
			$('.menu').addClass('current')
		}
	})

	$(document).ready(function() {
		$('.mask').height($('.wrap').height());
	})

	getScrollTop();

	$(document).on("scroll" ,function() {
		getScrollTop()
	})

	function getScrollTop() {
		let sT = $('html').scrollTop() + $('body').scrollTop();
		sT>600 ? $(".scrollTop").removeClass("hide").css("opacity", 1) : $(".scrollTop").addClass("hide");
	}

	$(".scrollTop").on("click", function() {
		$(".scrollTop").animate({
			opacity: 0
		}, 800)

		var $page = $('html,body');
    var distance = $('html').scrollTop() + $('body').scrollTop();
    var time = 800;
    var intervalTime = 10;
    var itemDistance = distance/(time/intervalTime);
    var intervalId = setInterval(function () {
      distance -= itemDistance
      if(distance<=0) {
        clearInterval(intervalId)
      }
      $page.scrollTop(distance)
    }, intervalTime)
	})
})

// indexPage
$(function() {
  if($(".slider").length>0) {
    var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			slidesPerView: "auto",
			// autoplay: true,
			spaceBetween: 8,
			centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
			},
		});
  }

	if($(".index_10").length>0) {
		let h = $(".index_10 .box div").height()-60,
				s = 0;
		
		setInterval(() => {
			if(s<h) {
					$(".index_10 .box div").css('top', `-${++s}px`)
			} else {
					s = 0
			}
		}, 100);
	}

	$(".cs_3 .rankBar i").on("click", function() {
		let i = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".cs_3 .rankBarBox>div").eq(i).removeClass("hide").siblings().addClass("hide");
	})
})

// rankPage
$(function() {
  if($(".slider2").length>0) {
    var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			slidesPerView: "auto",
			autoplay: true,
			spaceBetween: 8,
			centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
			},
		});
  }
})

//zxPage
$(function() {
	$(".zxBox .tabBar span").on("click", function() {
		let i = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".zxBox .ulBox>ul").eq(i).removeClass("hide").siblings().addClass("hide");
	})

  $('.zxD_1 .cont').find('img').on('click',function(){
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = new Array();
		$.each($(".zxD_1 .cont img"), function(i, v) {
				$(v).attr("rel", i);
				items.push({
						src: $(v).attr("src"),
						w: $(v).width(),
						h: $(v).height()
				});
		});
		var options = {
						index: parseInt($(this).attr("rel")) 
		};
		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	});

	if($(".zxD_1").length>0) {
    (function() {
      let pswp = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div> <div class="pswp__scroll-wrap"> <div class="pswp__container" style="transform: translate3d(-1680px, 0px, 0px);"> <div class="pswp__item" style="display: block; transform: translate3d(2100px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(42px, 253px, 0px) scale(1);"><img class="pswp__img" src="https://imgaes.51pgzs.com/bdgame/202103/30/1617069084_7.jpg" style="backface-visibility: hidden; opacity: 1; width: 292px; height: 161px;"></div></div> <div class="pswp__item" style="transform: translate3d(1260px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(42px, 253px, 0px) scale(1);"><img class="pswp__img" src="https://imgaes.51pgzs.com/bdgame/202103/30/1617069083_5.jpg" style="backface-visibility: hidden; opacity: 1; width: 292px; height: 161px;"></div></div> <div class="pswp__item" style="display: block; transform: translate3d(1680px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(42px, 253px, 0px) scale(1);"><img class="pswp__img" src="https://imgaes.51pgzs.com/bdgame/202103/30/1617069084_7.jpg" style="backface-visibility: hidden; opacity: 1; width: 292px; height: 161px;"></div></div> </div> <div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter">2 / 3</div> <button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div> </div> </div> </div> </div> <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div> </div> </div> </div> </div>';

      $("body").append(pswp);
    })();
  }
})

// otherPage
$(function() {
	// 选项卡切换
	$('.xgzt>p').find('span').on('click', function () {
		var times = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents('.xgzt').find('.sub_box').eq(times).show().siblings().hide();
	})

	$('.loadbig>p').find('span').on('click', function () {
		$(this).addClass('current').siblings().removeClass('current');
	})

	$(".loadbig>p>span").on("click", function () {
		var h1 = $(".loadbig .cont").offset().top;
		var h2 = $(".loadbig .loadinter").offset().top;
		var h3 = $(".loadbig .xglv").offset().top;
		var h4 = $(".loadbig .hotgame").offset().top;
		var h5 = $(".loadbig .xgzt").offset().top;
		if ($(this).hasClass("jj")) {
			$("html,body").animate({scrollTop: h1}, 800)
		} else if ($(this).hasClass("xx")) {
			$("html,body").animate({scrollTop: h2}, 800)
		} else if ($(this).hasClass("xg")) {
			$("html,body").animate({scrollTop: h3}, 800)
		} else if ($(this).hasClass("rm")) {
			$("html,body").animate({scrollTop: h4}, 800)
		} else if ($(this).hasClass("tl")) {
			$("html,body").animate({scrollTop: h5}, 800)
		}
	})

	// 详情页底部漂浮
	$(window).on("scroll", function() {
		setFixedBox_gd();
	});

	function setFixedBox_gd() {
		let sT = $(document).scrollTop();
		sT>300 ? $(".pfbox").removeClass("hide") : $(".pfbox").addClass("hide");
	}

})

// 隐私开关
$(document).on("click", "#popupsBox .gPrivacy .know", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox .orderBox").addClass("hide");
    $("#popupsBox .permissionStatement").addClass("hide");
    $("#popupsBox .gPrivacy").addClass("hide");
})
$(".powerBtn2").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .gPrivacy").removeClass("hide");
})






$(function() {
    if($(".loadbig").length>0) {
        (function() {
            let popupsHtml = '<div id="popupsBox"class="hide"><div class="orderBox hide"><div class="orderBg"><p>立即预约</p></div><div class="order "><div class="orderContent"><input type="text"onkeyup="value=value.replace(/^(0+)|[^d]+/g, "")"=""placeholder="请填写预约游戏手机号"></i><p class="errTips"></p></div><div class="nextBtn">提交</div><i class="icon know"></i></div><div class="orderWin hide"><p><i class="icon"></i>预约成功，请等待通知！</p><div class="knowBtn">知道了</div></div><div class="hasOrder hide"><p>您已预约，请等待通知！</p><div class="knowBtn">知道了</div></div></div><div class="permissionStatement hide"><div class="topBg"><p>权限查看</p></div><div class="cont"><div class="state"><div class="h3">检测出此应用获取7个敏感隐私权限：</div><p>1.显示在其他应用上面</p><p>2.修改或删除存储卡中的内容</p><p>3.访问确切位置信息（使用GPS和网络进行定位）</p><p>4.录制音频</p><p>5.相机</p><p>6.读取存储卡中的内容</p><p>7.读取通话状态和移动网络信息</p><div class="h3">敏感隐私权限用途说明：</div><p>1.显示弹框、全屏界面到其他应用上面</p><p>2.允许应用修改或删除存储卡上的照片、媒体内容和文件。</p><p>3.允许应用基于GPS、基站、Wi-Fi等网络源获取位置信息。这可能会增加耗电量。</p><p>4.允许应用录制音频。</p><p>5.允许应用拍摄照片和视频。</p><p>6.允许应用读取存储卡上的照片、媒体内容和文件。</p><p>7.允许应用获取本机号码、通话状态以及拨打的号码。</p></div><div class="linear"></div></div><div class="bottom"><i class="icon know"></i></div></div><div class="feedback hide"><div class="wttop"><i class="icon feedClose"></i><p>问题反馈</p></div><div class="feBack"><p>反馈原因</p><div class="info"><div class="checkbox"><input type="checkbox"id="checkbox1"data-value="1"name="checkbox[]"><label for="checkbox1">有色情、暴力、反动等不良内容</label></div><div class="checkbox"><input type="checkbox"id="checkbox2"data-value="2"name="checkbox[]"><label for="checkbox2">有抄袭、侵权嫌疑</label></div><div class="checkbox"><input type="checkbox"id="checkbox3"data-value="3"name="checkbox[]"><label for="checkbox3">广告很多、含有不良插件</label></div><div class="checkbox"><input type="checkbox"id="checkbox4"data-value="4"name="checkbox[]"><label for="checkbox4">无法正常安装或进入游戏</label></div></div><p>其他原因</p><textarea name="remake"placeholder="请输入补充说明"></textarea><p>联系方式</p><input type="tel"name="tel"onkeyup="value=value.replace(/^(0+)|[^d]+/g, "")"=""placeholder="请输入手机号码、QQ号码"></div><input type="button"class="submit"name="submit"value="提交"></div><div class="gPrivacy hide"><div class="topBg"><p>隐私查看</p></div><div class="cont"><div class="state"><p>严格遵守法律法规，遵循以下隐私保护原则，为您提供更加安全、可靠的服务：</p><strong>1、安全可靠：</strong><p>我们竭尽全力通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。</p><strong>2、自主选择：</strong><p>我们为您提供便利的信息管理选项，以便您做出合适的选择，管理您的个人信息</p><strong>3、保护通信秘密：</strong><p>我们严格遵照法律法规，保护您的通信秘密，为您提供安全的通信服务。</p><strong>4、合理必要：</strong><p>为了向您和其他用户提供更好的服务，我们仅收集必要的信息。</p><strong>5、清晰透明：</strong><p>我们努力使用简明易懂的表述，向您介绍隐私政策，以便您清晰地了解我们的信息处理方式。</p><strong>6、将隐私保护融入产品设计：</strong><p>我们在产品和服务研发、运营的各个环节，融入隐私保护的理念。</p><strong>本《隐私政策》主要向您说明：</strong><p>我们收集哪些信息我们收集信息的用途您所享有的权利</p><strong>希望您仔细阅读《隐私政策》</strong><p>为了让您有更好的体验、改善我们的服务或经您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某些服务所收集的信息用于我们的其他服务。例如，将您在使用我们某项服务时的信息，用于另一项服务中向您展示个性化的内容或广告、用于用户研究分析与统计等服务。</p><p>若您使用服务，即表示您认同我们在本政策中所述内容。除另有约定外，本政策所用术语与《服务协议》中的术语具有相同的涵义。</p><p>如您有问题，请联系我们。</p></div><div class="linear"></div></div><div class="bottom"><i class="icon know"></i></div></div></div>';
            $("body").append(popupsHtml);
        })();
    }

    // 预约
    $(".loadbox .yy").on('click', function () {
        $("#popupsBox").removeClass("hide");
        $("#popupsBox .orderBox").removeClass("hide");
    });

    $(document).on("click", "#popupsBox .orderBox .know", function() {
        $("#popupsBox").addClass("hide");
        $("#popupsBox .orderBox").addClass("hide");
    })

    // 权限开关
    $(document).on("click", "#popupsBox .permissionStatement .know", function() {
        $("#popupsBox").addClass("hide");
        $("#popupsBox .orderBox").addClass("hide");
        $("#popupsBox .permissionStatement").addClass("hide");
        $("#popupsBox .gPrivacy").addClass("hide");
    })
    $(".powerBtn").on("click", function() {
        $("#popupsBox").removeClass("hide");
        $("#popupsBox .permissionStatement").removeClass("hide");
    })

    // 正则：判断手机号码
    function isPoneAvailable(tel) {
        var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!myreg.test(tel)) {
            return false;
        } else {
            return true;
        }
    }

    // 判断手机号是否正确
    function telResult(telText) {
        var result = isPoneAvailable(telText);//判断手机是否正确
        if (result === false) {
            $(".orderBox .order .errTips").html("*手机号输入错误")
            return false;
        } else {
            $(".orderBox .order .errTips").html("");
            return true;
        }
    }

    // trim
    $.trim = function(str) { return str == null ? '' : String.prototype.trim.call(str); };

    $(document).on("click", ".orderBox .order .nextBtn", function () {
        let telText = $(".orderBox .order input").val();
        let game_id = $("input[name='game_id']").val().trim();
        if (game_id == ''){
            alert('游戏id不能为空');return false;
        }
        let game_name = $("input[name='game_name']").val().trim();
        if (game_name == ''){
            alert('游戏名称不能为空');return false;
        }
        let system = $("input[name='system']").val().trim();

        let flag = telResult(telText);

        if(flag) {
            $.ajax({
                url: "/downs/reservation/",
                type: 'post',
                data: {
                    'phone': telText,
                    'game_id': game_id,
                    "game_name":game_name,
                    "system":system
                },
                success: function (res) {
                    let result = JSON.parse(res); //由JSON字符串转换为JSON对象
                    if (result.code == 0) {
                        $(".orderBox .order .errTips").html(result.msg);
                        return false;
                    } else if (result.code == 200) {
                        //预约成功
                        $(".orderBox .order").addClass("hide");
                        $(".orderBox .orderWin").removeClass("hide");
                    } else if (result.code == 300) {
                        //已预约
                        $(".orderBox .order").addClass("hide");
                        $(".orderBox .hasOrder").removeClass("hide");
                    } else if (result.code == 400) {
                        //预约失败
                        $(".orderBox .order .errTips").html("预约失败，请稍后再试~");
                    }
                }
            })
        }
    })

    $(document).on("click", ".submit", function () {
        let game_id = $.trim($("input[name='game_id']").val());
        let game_name = $.trim($("input[name='game_name']").val());
        let classify = $.trim($("input[name='classify']").val());

        let reason = "";
        $(".feBack input[name='checkbox[]']:checked").each(function (k, v) {
            reason += ',' + $(v).data('value')
        })

        if (!reason) {
            alert('请选择反馈原因！');
            return;
        }

        let tel = $.trim($("#popupsBox .feedback input[type=tel]").val());
        if (!tel) {
            alert('请输入手机号码、QQ号码!');
            return;
        }

        let remake = $.trim($("textarea[name='remake']").val());

        $.ajax({
            url: '/downs/feedback/',
            type: 'POST',
            data: {
                'game_id': game_id,
                'reason': reason,
                'tel': tel,
                'remake': remake,
                'type': 2,
                'game_name': game_name,
            },
            success: function (data) {
                res = $.parseJSON(data);
                if (res.code == 200) {
                    alert('反馈成功,谢谢您！');
                    $("#popupsBox").addClass("hide");
                    $("#popupsBox .feedback").addClass("hide");
                } else {
                    alert(res.msg);
                    return;
                }

            }
        });
    })

    // 反馈
    $(".loadinter .report").on('click', function () {
        $("#popupsBox").removeClass("hide");
        $("#popupsBox .feedback").removeClass("hide");
    });
    $(document).on("click", "#popupsBox .feedClose", function() {
        $("#popupsBox").addClass("hide");
        $("#popupsBox").children().addClass("hide");
    })
})

// 列表页滚动条

if($(".applist").scrollLeft() == 0) {
	$(".righthov").removeClass("hide")
} 
$('body').on('touchend',function(){
	if($(".applist").scrollLeft() == 0) {
		$(".lefthov").addClass("hide")
		$(".righthov").removeClass("hide")
	} else if($(".applist").scrollLeft() > 0) {
		$(".lefthov").removeClass("hide")
		$(".righthov").addClass("hide")
	} 
})

if($(".gamelist").scrollLeft() == 0) {
	$(".righthov").removeClass("hide")
} 
$('body').on('touchend',function(){
	if($(".gamelist").scrollLeft() == 0) {
		$(".lefthov").addClass("hide")
		$(".righthov").removeClass("hide")
	} else if($(".gamelist").scrollLeft() > 0) {
		$(".lefthov").removeClass("hide")
		$(".righthov").addClass("hide")
	} 
})











 // lazy_load
 function __lazyLoadImageCallback() {
	function e(t, e) {
		for (var a = 0; a < t.length; a++) e(t[a]);
	}
	var t = document.querySelectorAll("img[data-src]"),
		a = document.querySelectorAll("[data-background-image]");
	if ("IntersectionObserver" in window) {
		var n = new IntersectionObserver(function (t, r) {
			e(t, function (t) {
				if (t.isIntersecting) {
					var e = t.target,
						a = e.getAttribute("data-src"),
						n = e.getAttribute("data-background-image");
					a ? ((e.src = a), e.setAttribute("data-src", "")) : ((e.style.backgroundImage = n), e.setAttribute("data-background-image", "")), r.unobserve(e);
				}
			});
		});
		e(t, function (t) {
			n.observe(t);
		}),
			e(a, function (t) {
				n.observe(t);
			});
	} else
		e(t, function (t) {
			(t.src = t.getAttribute("data-src")), t.setAttribute("data-src", "");
		}),
			e(a, function (t) {
				(t.style.backgroundImage = t.getAttribute( "data-background-image" )), t.setAttribute("data-background-image", "");
			});
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", __lazyLoadImageCallback) : setTimeout(__lazyLoadImageCallback, 1);
