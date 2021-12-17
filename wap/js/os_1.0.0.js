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

let a = new oS([
	{handlers: "os_1", performer: "os_options_1"}, //首页选项卡
	{handlers: "os_2", performer: "os_options_2"}, 
	{handlers: "os_3", performer: "os_options_3"},
	{handlers: "os_4", performer: "os_options_4"},
	{handlers: "os_5", performer: "os_options_5"},
	{handlers: "os_6", performer: "os_options_6"},
	{handlers: "os_7", performer: "os_options_7"},
	{handlers: "os_8", performer: "os_options_8"},
	{handlers: "os_9", performer: "os_options_9"},
	{handlers: "os_10", performer: "os_options_10",},
	{handlers: "os_11", event: "mouseenter",},
	{handlers: "os_12", event: "mouseenter",},
	{handlers: "os_13", event: "mouseenter",},
	{handlers: "os_14", event: "mouseenter",},
	{handlers: "os_15", event: "mouseenter",},
	{handlers: "os_16", event: "mouseenter",},
	{handlers: "os_17", performer: "os_options_17",}, //会员充值页选项卡
	{handlers: "os_18", callback: function() {
		let sum = $(this).find(".price span").html();
    $(this).parent().parent().find(".payBox .sum em").html(sum);
	}},
	{handlers: "os_19", callback: function() {
		let sum = $(this).find(".price span").html();
    $(this).parent().parent().find(".payBox .sum em").html(sum);
	}},
	{handlers: "os_20", type: 1, callback: function() {
		$(".tryMemberBox").addClass("hide");
		$(".memberSpeedBox").removeClass("hide");
		$(".downBox .downMsg .speeding").removeClass("hide");
		$(".downBox .downLine .speeding").removeClass("hide");

		let count = 60;
		let timer = setInterval(function() {
			if (count>0) {
				count--;
				$(".memberSpeedBox p span").html(count+"秒");
			} else {
				clearInterval(timer);
				$(".memberSpeedBox p").html("您的提速权限已试用完毕！");
				$(".downBox .downMsg .speeding").addClass("hide");
				$(".downBox .downLine .speeding").addClass("hide");
			}
		}, 1000);

	}},
]);
console.log(a) //获取实例内部参数