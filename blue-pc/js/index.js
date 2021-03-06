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
      let popupsHtml = '<div class="orderBox hide"> <i class="popupsClose icon"></i> <div class="orderBg"></div> <div class="order clearfix"> <p>????????????</p> <input type="text" name="phone" class=""  placeholder="?????????????????????"> <p class="errTips"></p> <div class="nextBtn">??????</div> </div> <div class="orderWin hide"> <div class="clearfix"> <i class="icon"></i> <p>????????????</p> <p>????????????????????????????????????~</p> </div> <a href="" title="" class="knowBtn">??????????????????</a> </div> </div> <div class="privacyStatement hide"> <i class="popupsClose icon"></i> <div class="topBg icon"> <p>????????????</p> </div> <div class="stateBox"> <div class="state"> <p class="tlt">???????????????????????????????????????</p> <p>?????????????????????????????????????????????????????????????????????????????????????????37???????????????????????????37???????????????/????????????????????????????????????????????????????????????????????????????????????37?????????????????????37???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p> <p>??????????????????????????????????????????<br> ???????????????????????????????????????????????????<br> ????????????????????????Cookie???????????????<br> ??????????????????????????????????????????????????????????????????<br> ??????????????????????????????????????????<br> ?????????????????? ????????????????????????????????????/?????????????????????<br> ????????????????????????????????????/?????????????????????<br> ???????????????????????????????????????????????????<br> ???????????????????????????<br> ?????????????????????<br> ???????????????????????? </p> </div> </div> </div> <div class="permissionStatement hide"> <i class="popupsClose icon"></i> <div class="topBg icon"> <p>????????????</p> </div> <div class="stateBox"> <div class="state"> <p class="tlt">???????????????????????????????????????</p> <p>??????????????????<br>????????????????????????????????????SD???????????????</p> <p>???????????????????????????<br>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p> <p>?????????????????????<br>????????????????????????????????????????????????</p> <p>???????????????????????????<br>??????????????????????????????????????????????????????????????????????????????????????????ID??????????????????????????????????????????????????????</p> <p>??????????????????<br>??????????????????????????????????????????????????????????????????????????????</p> <p>??????WLAN??????<br>??????????????????WLAN??????????????????</p> <p>????????????<br>??????????????????????????????</p> <p>????????????<br>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p> </div> </div> </div> <div class="feedback hide"> <i class="popupsClose2 icon"></i> <div class="topBg icon"> <p>????????????</p> </div> <div class="feBack"> <p>????????????</p> <div class="info"> <div class="checkbox"> <input type="checkbox" id="checkbox1" data-value="1" name="checkbox[]"> <label for="checkbox1">??????????????????????????????????????????</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox2" data-value="2" name="checkbox[]"> <label for="checkbox2">????????????????????????</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox3" data-value="3" name="checkbox[]"> <label for="checkbox3">?????????????????????????????????</label> </div> <div class="checkbox"> <input type="checkbox" id="checkbox4" data-value="4" name="checkbox[]"> <label for="checkbox4">?????????????????????????????????</label> </div> </div> <p>????????????</p> <textarea name="remake" placeholder="?????????????????????"></textarea> <p>????????????</p> <input type="tel" name="tel" placeholder="????????????????????????QQ??????"> <input type="button" class="submit popupsIcon" name="submit" value="??????"> </div> </div> <div class="feedback feedbackSuccess hide"> <i class="popupsClose2 icon"></i> <div class="topBg icon"> <p>????????????</p> </div> <div class="bottom"> <i class="icon"></i> <p>????????????</p> <p>????????????????????????????????????</p> <div class="knowBtn">????????????</div> </div> </div>';

      $("body #popupsBox").append(popupsHtml);
    })();
  }

  // ??????
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

  // ???????????????????????????
  function isPoneAvailable(tel) {
      var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(tel)) {
          return false;
      } else {
          return true;
      }
  }

  // ???????????????????????????
  function telResult(telText) {
    var result = isPoneAvailable(telText);//????????????????????????
    if (result === false) {
			$("#popupsBox .orderBox .order input[type=text]").addClass("err")
			$(".orderBox .order .errTips").html("*???????????????????????????")
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
        alert('??????id????????????');return false;
    }
    let game_name = $("input[name='game_name']").val().trim();
    if (game_name == ''){
        alert('????????????????????????');return false;
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
          let result = JSON.parse(res); //???JSON??????????????????JSON??????
          if (result.code == 0) {
            $(".orderBox .order .errTips").html(result.msg);
            return false;
          } else if (result.code == 200) {
              //????????????
            $(".orderBox .order").addClass("hide");
            $(".orderBox .orderWin").removeClass("hide");
          } else if (result.code == 300) {
            //?????????
            $(".orderBox .order").addClass("hide");
            $(".orderBox .hasOrder").removeClass("hide");
          } else if (result.code == 400) {
            //????????????
            $(".orderBox .order .errTips").html("??????????????????????????????~");
          }
        }
      })
    } 
  })
	
	// ????????????
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
			alert('????????????????????????');
			return;
	  }
  
	  let tel = $.trim($("#popupsBox .feedback input[type=tel]").val());
	  if (!tel) {
		alert('????????????????????????QQ??????!');
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
			mySwiper.slideTo(index, 500, false);//??????????????????slide????????????1???
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