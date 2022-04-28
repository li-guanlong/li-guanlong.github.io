$(function() {
  // detail banner
	$(".showImg").html($(".hideImg").html());

  if($(".showImg").length>0) {
    var galleryThumbs = new Swiper('.showImg .gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.showImg .gallery-top', {
      autoplay:true,
      loop : true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.btnNext',
        prevEl: '.btnPrev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
	
	// click move
  $(".detailCont_left2 .moveBar span").on("click", function () {
    var h1 = $(".detailCont_left .cont").length>0 ? $(".detailCont_left .tlt").offset().top - 10 : 0;
    var h2 = $(".detailCont_left3").length>0 ? $(".detailCont_left3").offset().top - 10 : 0;
    var h3 = $(".detailCont_left4").length>0 ? $(".detailCont_left4").offset().top - 10 : 0;
    var h4 = $(".cs_4").length>0 ? $(".cs_4").offset().top - 10 : 0;
    var h5 = $(".detailCont_left5").length>0 ? $(".detailCont_left5").offset().top - 10 : 0;
    if ($(this).hasClass("intro")) {
        $("html,body").animate({scrollTop: h1}, 800)
    } else if ($(this).hasClass("info")) {
        $("html,body").animate({scrollTop: h2}, 800)
    } else if ($(this).hasClass("vision")) {
        $("html,body").animate({scrollTop: h3}, 800)
    } else if ($(this).hasClass("hot")) {
        $("html,body").animate({scrollTop: h4}, 800)
    } else if ($(this).hasClass("similar")) {
      $("html,body").animate({scrollTop: h5}, 800)
    }
    $(this).addClass("current").siblings().removeClass("current")
  });

	// tarBar
	$(".tabBar span").on("click", function() {
		let index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parent().parent().find(".ulBox>div").eq(index).removeClass("hide").siblings().addClass("hide")
		$(this).parent().parent().find(".ulBox>ul").eq(index).removeClass("hide").siblings().addClass("hide")
	})
});

$(function() {
  if($(".detailCont_left").length>0) {
    (function() {
      let popupsHtml = '<div class="orderBox hide"> <i class="popupsClose icon"></i> <div class="orderBg"></div> <div class="order clearfix"> <p>立即预约</p> <input type="text" name="phone" class=""  placeholder="请输入手机号码"> <p class="errTips"></p> <div class="nextBtn">提交</div> </div> <div class="orderWin hide"> <div class="clearfix"> <i class="icon"></i> <p>预约成功</p> <p>上线后平台将通过短信通知~</p> </div> <a href="" title="" class="knowBtn">逛逛热门好游</a> </div> </div> <div class="privacyStatement hide"> <i class="popupsClose icon"></i> <div class="topBg icon"> <p>隐私声明</p> </div> <div class="stateBox"> <div class="state"> <p class="tlt">此应用程序需要访问以下内容</p> <p>本政策是由三七互娱旗下·广州三七网络科技有限公司（以下称为“37手游”、“我们”就37手游在其和/或其关联公司的移动手机游戏平台上所提供的产品和服务（包括37手游的网站以及37手游现在正在提供和将来可能向用户提供的游戏服务和其他网络服务，以下统称为“产品和服务”）所制定的。</p> <p>本政策将帮助您了解以下内容：<br> 一、我们如何收集和使用您的个人信息<br> 二、我们如何使用Cookie和同类技术<br> 三、我们如何共享、转让、公开披露您的个人信息<br> 四、我们如何保护您的个人信息<br> 五、您的权利 六、我们如何处理未成年人/儿童的个人信息<br> 六、我们如何处理未成年人/儿童的个人信息<br> 七、您的个人信息如何在全球范围转移<br> 八、本政策可能变更<br> 九、独立第三方<br> 十、如何联系我们 </p> </div> </div> </div> <div class="permissionStatement hide"> <i class="popupsClose icon"></i> <div class="topBg icon"> <p>权限查看</p> </div> <div class="stateBox"> <div class="state"> <p class="tlt">此应用程序需要访问以下内容</p> <p>写入外部存储<br>允许程序写入外部存储，如SD卡上写文件</p> <p>完全的网络访问权限<br>允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据。</p> <p>拍摄照片和视频<br>允许访问摄像头进行拍照或录制视频</p> <p>读取手机状态和身份<br>允许应用访问设备的电话功能。此权限可让应用确定本机号码和设备ID、是否正处于通话状态以及拨打的号码。</p> <p>查看网络状态<br>允许应用程序查看所有网络的状态。例如存在和连接的网络</p> <p>查看WLAN状态<br>允许程序访问WLAN网络状态信息</p> <p>控制震动<br>允许应用控制振动设备</p> <p>拨打电话<br>允许一个程序初始化一个电话拨号不需通过拨号用户界面需要用户确认，应用程序执行可能需要您付费。</p> </div> </div> </div> <div class="feedback hide"> <i class="popupsClose2 icon"></i> <div class="topBg icon"> <p>问题反馈</p> </div> <div class="feBack"> <p>反馈原因</p> <div class="info"> <div class="checkbox"> <input type="checkbox" id="checkbox1" data-value="1" name="checkbox[]"> <label for="checkbox1">有色情、暴力、反动等不良内容</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox2" data-value="2" name="checkbox[]"> <label for="checkbox2">有抄袭、侵权嫌疑</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox3" data-value="3" name="checkbox[]"> <label for="checkbox3">广告很多、含有不良插件</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox4" data-value="4" name="checkbox[]"> <label for="checkbox4">无法正常安装或进入游戏</label> </div> </div> <p>其他原因</p> <textarea name="remake" placeholder="请输入补充说明"></textarea> <p>联系方式</p> <input type="tel" name="tel" placeholder="请输入手机号码、QQ号码"> <input type="button" class="submit popupsIcon" name="submit" value="提交"> </div> </div> <div class="feedback feedbackSuccess hide"> <i class="popupsClose2 icon"></i> <div class="topBg icon"> <p>问题反馈</p> </div> <div class="bottom"> <i class="icon"></i> <p>提交成功</p> <p>我们会尽快解决您的反馈！</p> <div class="knowBtn">我知道了</div> </div> </div>';

      $("body #popupsBox").append(popupsHtml);
    })();
  }

  // 预约
  $(".detailCont_left1 .downBox .orderBtn").on('click', function () {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .orderBox").removeClass("hide");
  });

  $(document).on("click", ".popupsClose", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox").children().addClass("hide");
  });

	$(document).on("click", ".popupsClose2", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox").children().addClass("hide");
  });

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
			$("#popupsBox .orderBox .order input[type=text]").addClass("err")
			$(".orderBox .order .errTips").html("*请输入正确格式号码")
			return false;
    } else {
			$("#popupsBox .orderBox .order input[type=text]").removeClass("err")
      $(".orderBox .order .errTips").html("");
      return true;
    }
  }

  $(document).on("click", ".orderBox .order .nextBtn", function () {
    let telText = $(".orderBox .order input[name=phone]").val();
    let game_id = $("input[name='game_id']").val().trim();
    if (game_id == ''){
        alert('游戏id不能为空');return false;
    }
    let game_name = $("input[name='game_name']").val().trim();
    if (game_name == ''){
        alert('游戏名称不能为空');return false;
    }
    let system = $("input[name='system_version']").val().trim();

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
	
	// 权限开关
  $(".detailCont_left1 .permissionBtn").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .permissionStatement").removeClass("hide");
  })

	$(".detailCont_left3 ul li .gamePermissions").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .permissionStatement").removeClass("hide");
  })

	$(".detailCont_left3 ul li .privacyStatement").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .privacyStatement").removeClass("hide");
  })

  $(".detailCont_left1 .feedBackBtn").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .feedback").removeClass("hide");
  })

	$(document).on("click", ".submit", function () {
	  let game_id = $.trim($("input[name='game_id']").val());
	  let game_name = $.trim($("input[name='game_name']").val());
	  let type_info = $.trim($("input[name='type_info']").val());
	  let system = $.trim($("input[name='system_version']").val());
  
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
	  let remake = $.trim($(".feBack textarea[name='remake']").val());
	  $.ajax({
		url: '/downs/feedback/',
		type: 'POST',
		data: {
		  'game_id': game_id,
		  'reason': reason,
		  'system': system,
		  'tel': tel,
		  'remake': remake,
		  'type': type_info,
		  'game_name': game_name,
		},
		success: function (data) {
		  res = $.parseJSON(data);
		  if (res.code == 200) {
				$("#popupsBox .feedback").addClass("hide");
				$("#popupsBox .feedbackSuccess").removeClass("hide");
		  } else {
				alert(res.msg);
				return;
		  }
		}
	  });
	});
})

// index
$(function() {
	if($(".indexSlide").length>0){
	  var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			slidesPerView: "auto",
			autoplay: true,
			centeredSlides: true,
			allowTouchMove: false,
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
			},
			on:{
				slideChangeTransitionEnd: function(){
					var index = $('.swiper-slide-active').attr('data-swiper-slide-index');
					$('.swiper-pagination div').eq(index).addClass("active").siblings().removeClass("active")
				},
			},
	  });

		$('.swiper-pagination').on('click','div',function(){
			var index = $(this).attr("index");
			mySwiper.slideTo(index, 500, false);//切换到第一个slide，速度为1秒
			$('.swiper-pagination div').eq(index).addClass("active").siblings().removeClass("active")
		})
	};

	if($(".indexCont_1").length>0) {
		$(".gameBtn").on("click", function() {
			$(this).addClass("current");
			$(".appBtn").removeClass("current");
			$(".indexCont_1 .gameBox").removeClass("hide");
			$(".indexCont_1 .appBox").addClass("hide");
		})

		$(".appBtn").on("click", function() {
			$(this).addClass("current");
			$(".gameBtn").removeClass("current");
			$(".indexCont_1 .gameBox").addClass("hide");
			$(".indexCont_1 .appBox").removeClass("hide");
		})

		let curIndex1 = 0,
				curIndex2 = 0;
		$(".indexCont_1 .change").on("click", function() {
			if($(".gameBtn").hasClass("current")) {
				let len = $(".indexCont_1 .gameBox ul").length-1;
				curIndex1 < len ? curIndex1++ : curIndex1 = 0;
				$(".indexCont_1 .gameBox ul").eq(curIndex1).removeClass("hide").siblings().addClass("hide");
			} else {
				let len = $(".indexCont_1 .appBox ul").length-1;
				curIndex2 < len ? curIndex2++ : curIndex2 = 0;
				$(".indexCont_1 .appBox ul").eq(curIndex2).removeClass("hide").siblings().addClass("hide");
			}
		})
	}
	
	if($(".cs_6").length>0) {
		$(".cs_6 .ulBox .prev").on("click", function() {
			let ulL = $(this).parent().find("ul").css("left").split("px")[0]*1;

			if(-ulL>=258) {
				$(this).parent().find("ul").stop().animate({ left: (ulL+258)+"px"}, 300);
			} else if (-ulL<258) {
				$(this).parent().find("ul").stop().animate({ left: 0}, 300);
			}
		})

		$(".cs_6 .ulBox .next").on("click", function() {
			let ulBW = $(this).parent().width(),
					ulW = $(this).parent().find("ul li").length*258,
					ulL = $(this).parent().find("ul").css("left").split("px")[0]*1,
					ulLDiff = ulW - ulBW;

			if(ulLDiff>0 && ulLDiff>258 && ulLDiff>-ulL) {
				$(this).parent().find("ul").stop().animate({ left: (ulL-258)+"px"}, 300);
			} else if (ulLDiff>0 && ulLDiff<258) {
				$(this).parent().find("ul").stop().animate({ left: -ulLDiff+"px"}, 300);
			}
		})
	}

	$(".indexCont_2 .right .more").on("click", function() {
		if(!$(".indexCont_2 .right").hasClass("toBottom")) {
			let defaultH = $(".indexCont_2 .right").height(),
					curH = $(".indexCont_2 .right div").height(),
					h = curH - defaultH,
					t = $(".indexCont_2 .right div").css("top").split("px")[0]*1;

			if(h>0 && h>143 && h>-t) {
				$(".indexCont_2 .right>div").stop().animate({ top: (t-143)+"px"}, 300);
				t = $(".indexCont_2 .right div").css("top").split("px")[0]*1;
			} else if (h>0 && h<143) {
				$(".indexCont_2 .right>div").stop().animate({ top: -h+"px"}, 300);
				$(".indexCont_2 .right").addClass("toBottom");
			} else {
				$(".indexCont_2 .right").addClass("toBottom");
			}
		} else {
			let t = $(".indexCont_2 .right div").css("top").split("px")[0]*1;

			if(-t>=143) {
				$(".indexCont_2 .right>div").stop().animate({ top: (t+143)+"px"}, 300);
			} else if (-t<143) {
				$(".indexCont_2 .right>div").stop().animate({ top: 0}, 300);
				$(".indexCont_2 .right").removeClass("toBottom")
			}
		}
	})
})

// game app list
$(function() {
	$(".softwareFilter div>span").on("click", function() {
		let index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".softwareList>ul").eq(index).removeClass("hide").siblings().addClass("hide");
		$(".ztListBox>ul").eq(index).removeClass("hide").siblings().addClass("hide");
	})
})

// zx list
$(function() {
	$(".zxFilter div>span").on("click", function() {
		let index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".zxListBox>ul").eq(index).removeClass("hide").siblings().addClass("hide");
	})
})

// rank list
$(function() {
	$(".rankMid .rankBar span").on("click", function() {
		let index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".ulBox>ul").eq(index).removeClass("hide").siblings().addClass("hide");
	})

	if($(".rankTop").length>0) {
		let curIndex = 0;
		$(".rankTop .prev").on("click", function() {
			console.log(curIndex)
			if(curIndex == 0) {
				curIndex=2;
				$(".rankTop ul li:nth-child(1)").removeClass("first third").addClass("second");
				$(".rankTop ul li:nth-child(2)").removeClass("first second").addClass("third");
				$(".rankTop ul li:nth-child(3)").removeClass("second third").addClass("first");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(3)").attr("rank"));
			} else if(curIndex == 1) {
				curIndex=0;
				$(".rankTop ul li:nth-child(1)").removeClass("second third").addClass("first");
				$(".rankTop ul li:nth-child(2)").removeClass("first third").addClass("second");
				$(".rankTop ul li:nth-child(3)").removeClass("first second").addClass("third");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(1)").attr("rank"));
			} else if(curIndex == 2) {
				curIndex = 1;
				$(".rankTop ul li:nth-child(1)").removeClass("first second").addClass("third");
				$(".rankTop ul li:nth-child(2)").removeClass("second third").addClass("first");
				$(".rankTop ul li:nth-child(3)").removeClass("first third").addClass("second");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(2)").attr("rank"));
			} 
		})

		$(".rankTop .next").on("click", function() {
			console.log(curIndex)
			if(curIndex == 0) {
				curIndex+=1;
				$(".rankTop ul li:nth-child(1)").removeClass("first").addClass("third");
				$(".rankTop ul li:nth-child(2)").removeClass("second").addClass("first");
				$(".rankTop ul li:nth-child(3)").removeClass("third").addClass("second");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(2)").attr("rank"));
			} else if(curIndex == 1) {
				curIndex+=1;
				$(".rankTop ul li:nth-child(1)").removeClass("third").addClass("second");
				$(".rankTop ul li:nth-child(2)").removeClass("first").addClass("third");
				$(".rankTop ul li:nth-child(3)").removeClass("second").addClass("first");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(3)").attr("rank"));
			} else if(curIndex == 2) {
				curIndex = 0;
				$(".rankTop ul li:nth-child(1)").removeClass("second").addClass("first");
				$(".rankTop ul li:nth-child(2)").removeClass("third").addClass("second");
				$(".rankTop ul li:nth-child(3)").removeClass("first").addClass("third");
				$(".rankTop>.container>p.icon>span:nth-child(2) em").html($(".rankTop ul li:nth-child(1)").attr("rank"));
			} 
		})
	}
})

$(function() {
	getScrollTop();

	$(document).on("scroll" ,function() {
		getScrollTop()
	})

	function getScrollTop() {
		let sT = $('html').scrollTop() + $('body').scrollTop();
		sT>600 ? $(".scrollTop").removeClass("hidden").css("opacity", 1) : $(".scrollTop").addClass("hidden");
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

	// click move
  $(".indexMoveBox div").on("click", function () {
    var h1 = $(".indexCont_1").length>0 ? $(".indexCont_1").offset().top - 10 : 0;
    var h2 = $(".cs_7_game").length>0 ? $(".cs_7_game").offset().top - 10 : 0;
    var h3 = $(".indexCont_3").length>0 ? $(".indexCont_3").offset().top - 10 : 0;
    if ($(this).hasClass("hot")) {
        $("html,body").animate({scrollTop: h1}, 800)
    } else if ($(this).hasClass("game")) {
        $("html,body").animate({scrollTop: h2}, 800)
    } else if ($(this).hasClass("menu")) {
        $("html,body").animate({scrollTop: h3}, 800)
    }
    $(this).addClass("current").siblings().removeClass("current")
  });

	$(".indexMoveBox .top").on("click", function() {
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