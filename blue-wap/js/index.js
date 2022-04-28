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