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

  if($(".homeContent_4").length>0) {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      // spaceBetween: 6,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      slidesPerView: "auto",
      autoplay:true,
      loop : true,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  if($(".homeContent_4.app").length>0) {
    var galleryThumbs = new Swiper('.gallery-thumbs2', {
      // spaceBetween: 6,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top2', {
      slidesPerView: "auto",
      // autoplay:true,
      loop : true,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
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
