// 首页
$(function() {
  if($(".homeContent_1 .slide").length>0){
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: "auto",
      autoplay: true,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  // if($(".homeContent_4").length>0) {
  //   var galleryThumbs = new Swiper('.gallery-thumbs', {
  //     slidesPerView: 1,
  //     freeMode: true,
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  //   });
  //   var galleryTop1 = new Swiper('.gallery-top', {
  //     slidesPerView: "auto",
  //     // autoplay:true,
  //     loop : true,
  //     spaceBetween: 10,
  //     thumbs: {
  //       swiper: galleryThumbs
  //     },
  //   });
  // }

  if($(".homeContent_4").length>0) {
    var galleryThumbs1 = new Swiper('.gallery-thumbs', {
      slidesPerView: 1,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop1 = new Swiper('.gallery-top', {
      slidesPerView: "auto",
      // autoplay:true,
      loop : true,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs1
      },
    });
  }

  if($(".homeContent_4.app").length>0) {
    var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
      slidesPerView: 1,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop2 = new Swiper('.gallery-top2', {
      slidesPerView: "auto",
      // autoplay:true,
      loop : true,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs2
      },
    });
  }

  //换一换
  if($(".homeContent_21 .changeBox").length>0) {
    let cur = 0;
    $('.homeContent_21 .tlt_common .change').on('click', function() {
      $('.homeContent_21 .tlt_common .change').children('i').addClass('cur')
      setTimeout(() => {
        $('.homeContent_21 .tlt_common .change').children('i').removeClass('cur')
      }, 1000)
      const length = $('.homeContent_21 .changeBox').children().length-1;
      cur = (cur+1) > length ? cur = 0 : cur+1;
      $('.homeContent_21 .changeBox ul').siblings().addClass('hidden')
      $('.homeContent_21 .changeBox ul').eq(cur).removeClass('hidden')
    })
  }
})

//专题详情
$(function() {
  $('.ztDetailContent_2 .desc .look').on("click", function() {
    $('#popupsBox').removeClass('hide')
  });
  $(".ztDetailPopups .popupsClose").on("click", function() {
    $('#popupsBox').addClass('hide')
  });
  //滚动字幕
  const h = $(".ztDetailContent_2 .desc .cover p").height()-46;
  let s = 0;
  let timer = setInterval(() => {
    if(s<h) {
      $(".ztDetailContent_2 .desc .cover p").css('top', `-${++s}px`)
    } else {
      s = 0
    }
  }, 100);
})

//资讯详情
$(function() {
  $('#newsDeCont').find('img').on('click',function(){
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = new Array();
		$.each($("#newsDeCont img"), function(i, v) {
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
})

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
})

// 游戏详情
$(function() {
  if ($("#video").length > 0) {
		$(".game-video video").on('ended', function () {
			$('.vback').show();
		});

		$('#replay').on('click', function () {
      $(this).parents('.game-video').find('video')[0].play();
      $(this).parents('.vback').hide();
		});
	};

  if ($(".btVideo").length > 0) {
		$(".btVideo video").on('ended', function () {
			$('.vback').show();
		});

		$('.show_img').on('click', '.vback', function () {
      console.log(111)
      $(this).parents('.btVideo').find('video')[0].play();
      $(this).hide();
		});
	};

  // 详情截图放大
	$('#detailCont').find('img').on('click',function(){
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = new Array();
		$.each($("#detailCont img"), function(i, v) {
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

	$(".show_img").html($('.hide_img').html());

	$('.show_img .Qimgs').find('img').on('click', function () {
    $(".show_img .Qimgs img").css("height", "");
    $(" .show_img .Qimgs img").attr("height", "");
    ImgView();
    opt.num = $(".show_img .Qimgs img").length;
    opt.iCurr = $(".show_img .Qimgs img").index(this);
    ImgAmplifier($(".show_img .Qimgs img"));
	});

  // Click Move
	$(".gdContent_3 .tabBar div").on("click", function () {
		$(this).addClass("current").siblings("div").removeClass("current");
		var h1 = $(".wrap").find(".gdContent_4").length>0 ? $(".gdContent_4").offset().top : 0;
		var h2 = $(".wrap").find(".gdContent_7").length>0 ? $(".gdContent_7").offset().top : 0;
		var h3 = $(".wrap").find(".gdContent_8").length>0 ? $(".gdContent_8").offset().top : 0;
		if ($(this).hasClass("intro")) {
				$("html,body").animate({scrollTop: h1}, 800)
		} else if ($(this).hasClass("related")) {
				$("html,body").animate({scrollTop: h3}, 800)
		} else if ($(this).hasClass("recommend")) {
				$("html,body").animate({scrollTop: h2}, 800)
		};
	})

  //换一换
  if($(".gdContent_9 .changeBox").length>0) {
    let cur = 0;
    $('.gdContent_9 .tlt_common .change').on('click', function() {
      $('.gdContent_9 .tlt_common .change').children('i').addClass('cur')
      setTimeout(() => {
        $('.gdContent_9 .tlt_common .change').children('i').removeClass('cur')
      }, 1000)
      const length = $('.gdContent_9 .changeBox').children().length-1;
      cur = (cur+1) > length ? cur = 0 : cur+1;
      $('.gdContent_9 .changeBox ul').siblings().addClass('hidden')
      $('.gdContent_9 .changeBox ul').eq(cur).removeClass('hidden')
    })
  }
})

$(function() {
  (function() {
    let popupsHtml = '<div id="popupsBox" class="hide"><div class="orderBox hide"><i class="popupsClose popupsIcon"></i> <div class="orderBg popupsIcon"><p>游戏预约</p></div> <div class="order"> <div class="orderContent"> <input type="text" onkeyup="value=value.replace(/^(0+)|[^\d]+/g, "")" placeholder="请填写预约游戏手机号"> <i class="phone popupsIcon"></i> <p class="errTips"></p> <p class="msg">游戏正式上线前，我们将通过<em>预约短信</em>提醒您</p> <p class="tip">填写的手机号仅用于游戏开测提醒</p> </div> <div class="nextBtn">立即提交</div> </div> <div class="orderWin hide"> <div class="orderContent"> <i class="popupsIcon"></i> <p>预约成功，请等待通知！</p> </div> <div class="knowBtn">知道了</div> </div> <div class="hasOrder hide"> <div class="orderContent"> <i class="popupsIcon"></i> <p>您已预约，请等待通知！</p> </div> <div class="knowBtn">知道了</div> </div> </div> <div class="permissionStatement hide"> <i class="popupsClose popupsIcon"></i> <div class="topBg popupsIcon"> <p>权限协议</p> </div> <div class="state"> <div class="h3">检测出此应用获取 7 个敏感隐私权限：</div><p>1.显示在其他应用上面</p><p>2.修改或删除存储卡中的内容</p><p>3.访问确切位置信息（使用 GPS 和网络进行定位）</p><p>4.录制音频</p><p>5.相机</p><p>6.读取存储卡中的内容</p><p>7.读取通话状态和移动网络信息</p><div class="h3">敏感隐私权限用途说明：</div><p>1.显示弹框、全屏界面到其他应用上面</p><p>2.允许应用修改或删除存储卡上的照片、媒体内容和文件。</p> <p>3.允许应用基于GPS、基站、 Wi-Fi 等网络源获取位置信息。这可能会增加耗电量。</p> <p>4.允许应用录制音频。</p><p>5.允许应用拍摄照片和视频。</p> <p>6.允许应用读取存储卡上的照片、媒体内容和文件。</p> <p>7.允许应用获取本机号码、通话状态以及拨打的号码。</p> </div> <div class="linear"></div> <div class="know">知道了</div> </div> <div class="feedback hide"> <i class="popupsClose popupsIcon"></i> <div class="topBg popupsIcon"></div> <div class="feBack"> <p>反馈原因</p> <div class="info"> <div class="checkbox"><input type="checkbox" id="checkbox1" data-value="1" name="checkbox[]"><label for="checkbox1">有色情、暴力、反动等不良内容</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox2" data-value="2" name="checkbox[]"><label for="checkbox2">有抄袭、侵权嫌疑</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox3" data-value="3" name="checkbox[]"><label for="checkbox3">广告很多、含有不良插件</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox4" data-value="4" name="checkbox[]"><label for="checkbox4">无法正常安装或进入游戏</label> </div> </div> <p>其他原因</p> <textarea name="remake" placeholder="请输入补充说明"></textarea> <p>联系方式</p> <input type="tel" name="tel" onkeyup="value=value.replace(/^(0+)|[^\d]+/g,"")" placeholder="请输入手机号码、QQ号码"> </div> <div class="linear"></div> <input type="button" class="submit" name="submit" value="提交反馈"> </div> </div>';

    $("body").append(popupsHtml);
  })();

  // 预约
  $(".gdContent_2 .btnBox .order").on('click', function () {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .orderBox").removeClass("hide");
  });

  $(document).on("click", ".popupsClose", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox").children().addClass("hide");
  });

  $(document).on("click", "#popupsBox .topBg>i.close", function() {
    $("#popupsBox").addClass("hide");
  })

  $(document).on("click", "#popupsBox .know", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox .orderBox").addClass("hide");
    $("#popupsBox .permissionStatement").addClass("hide");
  })

  $(document).on("click", "#popupsBox .orderBox .knowBtn", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox .orderBox").addClass("hide");
  })

  $(document).on("click", "#popupsBox .feedback .options>div", function() {
    $("#popupsBox").addClass("hide");
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
	$(".gdContent_5 .tlt_common .report").on('click', function () {    
		$("#popupsBox").removeClass("hide");
		$("#popupsBox .feedback").removeClass("hide");
	});
	
	// 权限开关
  $(".powerBtn").on("click", function() {
    $("#popupsBox").removeClass("hide");
    $("#popupsBox .permissionStatement").removeClass("hide");
  })

  $(document).on("click", "#popupsBox .topBg>i.close", function() {
    $("#popupsBox").addClass("hide");
    $("#popupsBox .permissionStatement").addClass("hide");
  })
})
