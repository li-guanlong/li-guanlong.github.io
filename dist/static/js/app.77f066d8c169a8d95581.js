webpackJsonp([2],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},a=n("VU/8")({name:"App"},r,!1,null,null,null).exports,u=n("/ocq");o.a.use(u.a);var p=new u.a({routes:[{path:"/",name:"home",component:function(e){n.e(0).then(function(){var t=[n("GjWj")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),s=u.a.prototype.push;u.a.prototype.push=function(e){return s.call(this,e).catch(function(e){return e})};var c=n("NYxO");o.a.use(c.a);var i=new c.a.Store({state:{currentMenu:null,token:"",uid:"",page:""},mutations:{set_Info:function(e){e.token=sessionStorage.getItem("token"),e.uid=sessionStorage.getItem("uid")},selectMenu:function(e,t){console.log(t),"/order/index"!=t.path?e.currentMenu=t:e.currentMenu=null},getpage:function(e,t){e.page=t}}}),l=n("mtWM"),d=n.n(l);o.a.use(c.a,d.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:p,store:i,components:{App:a},template:"<App/>"})}},["NHnr"]);