// index
$(function() {
	if($(".sectionOne_index_qd .slide").length>0){
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
	};

	$(".tab_c_rank div").on("click", function() {
		rankTab($(this), ".sectionFive_index_qd");
	});

	$(".sectionEight_index_qd .tabNews div").on("click", function() {
		rankTab($(this), ".sectionEight_index_qd");
	});

	function rankTab(_this, target) {
		var index = _this.attr("index");
		_this.addClass("current").siblings().removeClass("current");
		$(target+" .optionsBody_"+index).removeClass("hide").siblings().addClass("hide");
	};
})

// gd
$(function() {
  // Click Move
	$(".sectionOne_gd_qd .gd_tabmenu>div").on("click", function () {
		$(this).addClass("current").siblings("div").removeClass("current");
		var h1 = $(".wrap").find(".sectionTwo_gd_qd").length>0 ? $(".sectionTwo_gd_qd").offset().top : 0;
		var h2 = $(".wrap").find(".sectionFour_gd_qd").length>0 ? $(".sectionFour_gd_qd").offset().top : 0;
		var h3 = $(".wrap").find(".sectionFive_gd_qd").length>0 ? $(".sectionFive_gd_qd").offset().top : 0;
		if ($(this).hasClass("intro")) {
				$("html,body").animate({scrollTop: h1}, 800)
		} else if ($(this).hasClass("related")) {
				$("html,body").animate({scrollTop: h2}, 800)
		} else if ($(this).hasClass("recommend")) {
				$("html,body").animate({scrollTop: h3}, 800)
		};
	})

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

  $(window).load(function () {
		// 内容展开
		if ($('.hiddenBox').find('.cont').height() < 600) {
			$('.hiddenBox .cont').addClass('auto').removeClass("hidden");
			$('.hideCont').addClass("hide");
      $('.hiddenBox .linear').addClass("hide");
		} else {
			$('.hiddenBox .cont').addClass('hidden').removeClass('auto');
			$('.hideCont').removeClass("hide").text("展开").append("<i class='icon'></i>");
      $(".hiddenBox .linear").removeClass("hide");
			$('.hideCont').on('click', function () {
				var flag = $('.hideCont').hasClass("unHideCont");
				if(!flag) {
					$('.hiddenBox .cont').addClass('auto').removeClass('hidden');
          $(".hiddenBox .linear").addClass("hide");
					$('.hideCont').addClass("unHideCont").html("收起").append("<i class='icon'></i>");
				} else {
					$('.hiddenBox .cont').addClass('hidden').removeClass('auto');
          $(".hiddenBox .linear").removeClass("hide");
					$('.hideCont').removeClass("unHideCont").html("展开").append("<i class='icon'></i>");
				}
			});
		}
	});

  // View permissions
	if($(".androidDown").length>0 || $(".iosDown").length>0) {
		$(".tlt_c_2 .report").css("display", "block")
	} else {
		$(".tlt_c_2 .report").css("display", "none")
	}

	$(".seeDetails").on("click", function() {
		if($(".androidDown").length>0 || $(".iosDown").length>0) {
			$(".seeDetails").css("display", "block");
			$("#popupsBox").removeClass("hide");
			$("#popupsBox .permissionStatement").removeClass("hide");
		} else {
			$(".seeDetails").html("暂无权限相关")
		}
	});

	$(document).on("click", ".permissionStatement .know", function() {
    $("#popupsBox").addClass("hide");
		$("#popupsBox .permissionStatement").addClass("hide");
  })

  // tab switch
	$(".sectionFive_gd_qd .recommendBar div").on("click", function() {
		$(this).addClass("current").siblings().removeClass("current");
		var index = $(this).attr("index");
		var target = index;
		$(".sectionFive_gd_qd .barCommon").eq(target).removeClass("hide").siblings().addClass("hide");
	})
})

// gl
$(function() {
	// Drop-down Options
	$(document).on("click",".sort_btn_1" ,function() {
		foldFun();
	});
	$(document).on("click", ".sort_btn_2", function() {
		unfoldFun();
	});
	if ($(".sectionOne_l_qd").length>0) {
		var flag = true,
				foldBody = "展开";
				unfoldBody = "收起";

		$(".sort_c_1 li").each(function(index) {
			$(this).children("a").hasClass("current") ? foldJudge(index) : null;
		});
	}

	function foldJudge(index) {
		if (index<=2) {
			foldFun();
		}
	}

	function foldFun() {
		$(".sort_btn_1").html(foldBody).append("<i class='icon'></i>").addClass("sort_btn_2").removeClass("sort_btn_1");
		$(".sort_c_1").css({"height": "1.85rem", "overflow": "hidden"});
		$(".sort_c_1 li a").css("zIndex", "0")
	}
	
	function unfoldFun() {
		$(".sort_btn_2").html(unfoldBody).append("<i class='icon'></i>").addClass("sort_btn_1").removeClass("sort_btn_2");
		$(".sort_c_1").css({"height": "auto", "overflow": "inherit"});
	}
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

// newsD

	$('.dqnewmain').find('img').on('click',function(){
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = new Array();
		$.each($(".dqnewmain img"), function(i, v) {
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


$(function(){


//下载按钮
	if ($('.downbtn').length > 0) {
		var baseUrl = "https://m.qvod.com/";
		var obj = $('.downbtn');
		var id   = obj.attr('id');
		var type = obj.attr('type');
		var reportUrl = "https://linkwe.dzyms.cn/";

		var sys = 'and';
		var u = navigator.userAgent;
		u = u.toLowerCase();
		if (u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || u.indexOf('ipod') > -1) {
			sys = 'ios';
		}

		$.get(baseUrl + '/downs/detail/'+id+'/'+type+'/', function(res){
			var result = $.parseJSON(res);
			if (result.code == 1) {
				//view report
				$.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
					'&url='+encodeURIComponent(window.location.href));

				if (result.data[sys+'_url']) {
					$(".downBtn_no").hide()
					obj.find(".down_upload_"+sys).show().click(function(){
						$.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys='+sys);
						location.href = result.data[sys+'_url'];
					});
				}
			}
		});
	}

})


//360助手点击上报
	$('.xz360_btn').click(function(){
		var url  = $(this).attr('href');
		$.get(baseUrl + '/downs/detail/'+id+'/'+type, function(res){
			var result = JSON.parse(res);
			if (result.code == 1) {
				$.getJSON(reportUrl + 'home?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
					'&adurl='+encodeURIComponent(url));
			}
		});
	});


//动态搜索
function liftSearch() {
	var keyword = $.trim($("#searchKey").val());
	var baseurl = $.trim($("#baseUrl").val());
	if (keyword) {
		$.ajax({
			url: baseurl + 'search/search/',
			type: 'POST',
			data: {
				keyword: keyword
			},
			success: function(data) {
				$('.search_wrap').hide();
				$('.search_list_wrap_div').show();
				$('.search_list_wrap').html(data);
			}
		});
	} else {
		$('.search_wrap').show();
	}
}
//点击搜索
$('#dosearch').click(function() {
	var baseurl = $.trim($("#baseUrl").val());
	var keyword = $("#searchKey").val();

	if (keyword) {window.location.href = baseurl + 'search/?key=' + encodeURI(keyword);}
});

$(document).keyup(function(event) {
	if (event.keyCode == 13) {$('#dosearch').click();}
});

$('#search_more').click(function() {
	var more = $(this);
	var baseurl = $.trim($("#baseUrl").val());
	var keyword = $.trim($("#searchKey").val());
	var page = parseInt($(this).attr('page'));
	var totpage = parseInt($(this).attr('totpage'));
	$.ajax({
		url: baseurl + 'search/',
		type: 'get',
		data: {
			key: keyword,
			page: page
		},
		success: function(res) {
			$('.search_list_wrap2').append(res);
			more.attr('page', page + 1);
			if (page + 1 >= totpage) {
				more.remove();
			}
		}
	});
});

$(function() {
	$(".head_s .back").click(function() {
		window.history.go(-1)
	})
});

// popups created
$(function() {
	(function() {
	let popupsHtml = '<div id="popupsBox" class="hide"> <div class="orderBox hide"> <i class="popupsClose popupsIcon"></i> <div class="orderBg"> <p>游戏预约</p> </div> <div class="order"> <input type="text" onkeyup="value=value.replace(/^(0+)|[^\d]+/g, "")" placeholder="请填写预约游戏手机号"> <i class="phone popupsIcon"></i> <p class="errTips"></p> <p class="msg">游戏正式上线前，我们将通过<em>预约短信</em>提醒您</p> <p class="tip">填写的手机号仅用于游戏开测提醒</p> <div class="nextBtn">立即提交</div> </div> <div class="orderWin hide"> <i class="popupsIcon"></i> <p>预约成功，请等待通知！</p> <div class="knowBtn">知道了</div> </div> <div class="hasOrder hide"> <i class="popupsIcon"></i> <p>您已预约，请等待通知！</p> <div class="knowBtn">知道了</div> </div> </div> <div class="permissionStatement hide"> <i class="popupsClose popupsIcon"></i> <div class="topBg"> <i class="logo popupsIcon"></i> <p>权限协议</p> </div> <div class="state"> <div class="h3">检测出此应用获取 7 个敏感隐私权限：</div><p>1.显示在其他应用上面</p><p>2.修改或删除存储卡中的内容</p><p>3.访问确切位置信息（使用 GPS 和网络进行定位）</p><p>4.录制音频</p><p>5.相机</p><p>6.读取存储卡中的内容</p><p>7.读取通话状态和移动网络信息</p><div class="h3">敏感隐私权限用途说明：</div><p>1.显示弹框、全屏界面到其他应用上面</p><p>2.允许应用修改或删除存储卡上的照片、媒体内容和文件。</p><p>3.允许应用基于GPS、基站、 Wi-Fi 等网络源获取位置信息。这可能会增加耗电量。</p><p>4.允许应用录制音频。</p><p>5.允许应用拍摄照片和视频。</p><p>6.允许应用读取存储卡上的照片、媒体内容和文件。</p><p>7.允许应用获取本机号码、通话状态以及拨打的号码。</p> </div> <div class="linear"></div> <div class="know">知道了</div> </div> <div class="feedback hide"> <div class="topBg"> <i class="popupsIcon logo"></i> <p>游戏反馈</p> </div> <div class="feBack"> <p>反馈原因</p> <div class="info"> <div class="checkbox"><input type="checkbox" id="checkbox1" data-value="1" name="checkbox[]"><label for="checkbox1">有色情、暴力、反动等不良内容</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox2" data-value="2" name="checkbox[]"><label for="checkbox2">有抄袭、侵权嫌疑</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox3" data-value="3" name="checkbox[]"><label for="checkbox3">广告很多、含有不良插件</label> </div> <div class="checkbox"><input type="checkbox" id="checkbox4" data-value="4" name="checkbox[]"><label for="checkbox4">无法正常安装或进入游戏</label> </div> </div> <p>其他原因</p> <textarea name="remake" placeholder="请输入补充说明"></textarea> <p>联系方式</p> <input type="tel" name="tel" onkeyup="value=value.replace(/^(0+)|[^\d]+/g, "")" placeholder="请输入手机号码、QQ号码"> </div> <div class="linear"></div> <div class="options"> <div>稍后再说</div> <input type="button" class="submit" name="submit" value="提交反馈"> </div> </div> </div>';
	$("body").append(popupsHtml);
	})();
})

// order
$(function() {
	// 预约
	$('.sectionOne_gd_qd').find('.order').on('click', function() {
		$("#popupsBox").removeClass("hide");
    $("#popupsBox .orderBox").removeClass("hide");
	});

	$(document).on("click", ".popupsClose", function() {
    $("#popupsBox").addClass("hide");
		$("#popupsBox").children().addClass("hide");
  })

  $(document).on("click", "#popupsBox .orderBox .knowBtn", function() {
    $("#popupsBox").addClass("hide");
		$("#popupsBox .orderBox").addClass("hide");
  })

	$(document).on("click", "#popupsBox .feedback .options>div", function() {
    $("#popupsBox").addClass("hide");
		$("#popupsBox .feedback").addClass("hide");
  })

	// 正则：判断手机号码
	function isPoneAvailable(tel) {  
	    var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	    if (!myreg.test(tel)) { 
	        return false;
	    } else {  
	        return true; 
	    }  
	}
	// 判断手机号是否正确
	function telResult(telText){
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
		var telText = $(".orderBox .order input").val();
		let game_id = $("input[name='game_id']").val().trim();

		let game_name =$("input[name='game_name']").val().trim();

		let system =$("input[name='system_version']").val().trim();

		if (game_id == ''){
				alert('游戏id不能为空');return false;
		}

    let flag = telResult(telText);

		if(flag) {
			$.ajax({
				url:"/downs/reservation",
				type: 'post',
				data:{
						'phone':telText,
						'game_id':game_id,
						'game_name':game_name,
						'system':system
				},
				success:function (res) {
					let result =  JSON.parse(res); //由JSON字符串转换为JSON对象
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
})

// 反馈
$(function () {
	$(".tlt_c_2 .report").on('click', function () { 
		$("#popupsBox").removeClass("hide");
    $("#popupsBox .feedback").removeClass("hide");
	});

	$(document).on("click", ".submit", function () {
	    let game_id = $.trim($("input[name='game_id']").val());
	    let game_name = $.trim($("input[name='game_name']").val());
	    let type_info = $.trim($("input[name='type_info']").val());
      let system = $.trim($("input[name='system_version']").val());
			
	    let reason = "";
	    $("input[name='checkbox[]']:checked").each(function (k, v) {
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
              'system': system,
	            'tel': tel,
	            'remake': remake,
	            'type': type_info,
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
	
});


var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?8968bbcb8bbb8c22a05452db00c86dd5";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();


var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?981057a6624d6650a181109009f03708";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();