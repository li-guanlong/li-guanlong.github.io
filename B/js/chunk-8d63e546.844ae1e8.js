(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d63e546"],{"466d":function(t,e,r){"use strict";var n=r("c65b"),a=r("d784"),c=r("825a"),i=r("50c4"),u=r("577e"),o=r("1d80"),s=r("dc4a"),l=r("8aa5"),f=r("14c3");a("match",(function(t,e,r){return[function(e){var r=o(this),a=void 0==e?void 0:s(e,t);return a?n(a,e,r):new RegExp(e)[t](u(r))},function(t){var n=c(this),a=u(t),o=r(e,n,a);if(o.done)return o.value;if(!n.global)return f(n,a);var s=n.unicode;n.lastIndex=0;var h,d=[],v=0;while(null!==(h=f(n,a))){var p=u(h[0]);d[v]=p,""===p&&(n.lastIndex=l(a,i(n.lastIndex),s)),v++}return 0===v?null:d}]}))},"498a":function(t,e,r){"use strict";var n=r("23e7"),a=r("58a8").trim,c=r("c8d2");n({target:"String",proto:!0,forced:c("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("e330"),a=r("1d80"),c=r("577e"),i=r("5899"),u=n("".replace),o="["+i+"]",s=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=c(a(e));return 1&t&&(r=u(r,s,"")),2&t&&(r=u(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},"8c24":function(t,e,r){"use strict";r("ca80")},b5a6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[r("Icon",{attrs:{type:"md-trash",size:"24"}}),t._v("缓存清理")],1),r("Button",{attrs:{type:"success",ghost:""},on:{click:t.clearMUrl}},[t._v("清理M全部")]),r("Button",{attrs:{type:"warning",ghost:""},on:{click:t.clearPcUrl}},[t._v("清理PC全部")]),r("Input",{attrs:{search:"","enter-button":"清理指定URL",placeholder:"请输入指定url..."},on:{"on-search":t.clearUrl},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)},a=[],c=(r("ac1f"),r("466d"),r("498a"),r("365c")),i=r("3786"),u={data:function(){return{url:""}},methods:{getClearCacheData:function(t){var e=this;c["a"].clearCache(t).then((function(t){0==t.code?e.$Message.success({content:t.msg,duration:3}):e.$Message.error({content:t.msg,duration:5})})).catch((function(t){e.$Notice.error({desc:t})}))},clearUrl:function(){var t=/^http:\/\//i,e=/^https:\/\//i,r=this.url.trim().match(t)||this.url.trim().match(e);if(""===this.url.trim())this.$Message.warning({content:"请输入需清除缓存的url",duration:3});else if(r){var n=Object(i["b"])(),a=this.url,c={token:n,type:2,url:a};this.getClearCacheData(c)}else this.$Message.warning({content:"请输入正确的url",duration:3})},clearMUrl:function(){var t=Object(i["b"])(),e={token:t,type:1};this.getClearCacheData(e)},clearPcUrl:function(){var t=Object(i["b"])(),e={token:t,type:3};this.getClearCacheData(e)}}},o=u,s=(r("8c24"),r("2877")),l=Object(s["a"])(o,n,a,!1,null,"1c4c2477",null);e["default"]=l.exports},c8d2:function(t,e,r){var n=r("5e77").PROPER,a=r("d039"),c=r("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!c[t]()||i[t]()!==i||n&&c[t].name!==t}))}},ca80:function(t,e,r){}}]);
//# sourceMappingURL=chunk-8d63e546.844ae1e8.js.map