(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7deb7f4"],{"159b":function(e,t,a){var r=a("da84"),o=a("fdbc"),i=a("785a"),n=a("17c2"),s=a("9112"),l=function(e){if(e&&e.forEach!==n)try{s(e,"forEach",n)}catch(t){e.forEach=n}};for(var d in o)o[d]&&l(r[d]&&r[d].prototype);l(i)},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,o=a("a640"),i=o("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"25f0":function(e,t,a){"use strict";var r=a("e330"),o=a("5e77").PROPER,i=a("6eeb"),n=a("825a"),s=a("3a9b"),l=a("577e"),d=a("d039"),c=a("ad6d"),u="toString",f=RegExp.prototype,p=f[u],m=r(c),g=d((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=o&&p.name!=u;(g||h)&&i(RegExp.prototype,u,(function(){var e=n(this),t=l(e.source),a=e.flags,r=l(void 0===a&&s(f,e)&&!("flags"in f)?m(e):a);return"/"+t+"/"+r}),{unsafe:!0})},"4d63":function(e,t,a){var r=a("83ab"),o=a("da84"),i=a("e330"),n=a("94ca"),s=a("7156"),l=a("9112"),d=a("9bf2").f,c=a("241c").f,u=a("3a9b"),f=a("44e7"),p=a("577e"),m=a("ad6d"),g=a("9f7f"),h=a("6eeb"),v=a("d039"),b=a("1a2d"),y=a("69f3").enforce,k=a("2626"),V=a("b622"),x=a("fce3"),_=a("107c"),w=V("match"),I=o.RegExp,$=I.prototype,R=o.SyntaxError,E=i(m),F=i($.exec),M=i("".charAt),T=i("".replace),S=i("".indexOf),G=i("".slice),B=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,A=/a/g,O=new I(D)!==D,q=g.UNSUPPORTED_Y,L=r&&(!O||q||x||_||v((function(){return A[w]=!1,I(D)!=D||I(A)==A||"/a/i"!=I(D,"i")}))),P=function(e){for(var t,a=e.length,r=0,o="",i=!1;r<=a;r++)t=M(e,r),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+M(e,++r);return o},j=function(e){for(var t,a=e.length,r=0,o="",i=[],n={},s=!1,l=!1,d=0,c="";r<=a;r++){if(t=M(e,r),"\\"===t)t+=M(e,++r);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:F(B,G(e,r+1))&&(r+=2,l=!0),o+=t,d++;continue;case">"===t&&l:if(""===c||b(n,c))throw new R("Invalid capture group name");n[c]=!0,i[i.length]=[c,d],l=!1,c="";continue}l?c+=t:o+=t}return[o,i]};if(n("RegExp",L)){for(var z=function(e,t){var a,r,o,i,n,d,c=u($,this),m=f(e),g=void 0===t,h=[],v=e;if(!c&&m&&g&&e.constructor===z)return e;if((m||u($,e))&&(e=e.source,g&&(t="flags"in v?v.flags:E(v))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),v=e,x&&"dotAll"in D&&(r=!!t&&S(t,"s")>-1,r&&(t=T(t,/s/g,""))),a=t,q&&"sticky"in D&&(o=!!t&&S(t,"y")>-1,o&&(t=T(t,/y/g,""))),_&&(i=j(e),e=i[0],h=i[1]),n=s(I(e,t),c?this:$,z),(r||o||h.length)&&(d=y(n),r&&(d.dotAll=!0,d.raw=z(P(e),a)),o&&(d.sticky=!0),h.length&&(d.groups=h)),e!==v)try{l(n,"source",""===v?"(?:)":v)}catch(b){}return n},C=function(e){e in z||d(z,e,{configurable:!0,get:function(){return I[e]},set:function(t){I[e]=t}})},N=c(I),H=0;N.length>H;)C(N[H++]);$.constructor=z,z.prototype=$,h(o,"RegExp",z)}k("RegExp")},7156:function(e,t,a){var r=a("1626"),o=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var n,s;return i&&r(n=t.constructor)&&n!==a&&o(s=n.prototype)&&s!==a.prototype&&i(e,s),e}},8418:function(e,t,a){"use strict";var r=a("a04b"),o=a("9bf2"),i=a("5c6c");e.exports=function(e,t,a){var n=r(t);n in e?o.f(e,n,i(0,a)):e[n]=a}},"8a72":function(e,t,a){},"9a26":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[a("Icon",{attrs:{type:"ios-add-circle-outline",size:"24"}}),e._v("添加广告")],1),a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"图片描述",prop:"describe"}},[a("Input",{staticClass:"describe",model:{value:e.formValidate.describe,callback:function(t){e.$set(e.formValidate,"describe",t)},expression:"formValidate.describe"}}),a("span",[e._v("非必填选项，可不输入")])],1),a("FormItem",{attrs:{label:"开启状态",prop:"status"}},[a("RadioGroup",{model:{value:e.formValidate.status,callback:function(t){e.$set(e.formValidate,"status",t)},expression:"formValidate.status"}},e._l(e.configData.status,(function(t,r){return a("Radio",{key:r,attrs:{label:r}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"高亮状态",prop:"hlight"}},[a("RadioGroup",{model:{value:e.formValidate.hlight,callback:function(t){e.$set(e.formValidate,"hlight",t)},expression:"formValidate.hlight"}},e._l(e.configData.hlight,(function(t,r){return a("Radio",{key:r,attrs:{label:r}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"超链接",prop:"url"}},[a("Input",{model:{value:e.formValidate.url,callback:function(t){e.$set(e.formValidate,"url",t)},expression:"formValidate.url"}}),a("p",[e._v("如果图片跳转地址为非本游戏官方网站时添加，添加时地址如："),a("span",[e._v("http://www.leshu.com/")]),e._v("否则无效")])],1),a("FormItem",{attrs:{label:"图片",prop:"gimg"}},[a("div",{staticClass:"uploadBox"},[a("div",{staticClass:"upload"},[a("Icon",{attrs:{type:"ios-cloud-upload-outline",size:"18"}}),e._v(" 选择文件 ")],1),a("input",{attrs:{type:"file",name:"gimg",value:""},on:{change:function(t){return e.getFile(t)}}})]),a("i",[e._v(e._s(e.curImgMsg.name))]),a("p",[e._v("或输入图片地址：")]),a("Input",{model:{value:e.formValidate.gimg_url,callback:function(t){e.$set(e.formValidate,"gimg_url",t)},expression:"formValidate.gimg_url"}})],1),[e.isShowAddGameList?a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticClass:"remarkBox",attrs:{search:"","enter-button":"添加",placeholder:"请输入游戏或应用id"},on:{"on-search":e.getGameNameByGameId},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}}),a("Table",{attrs:{border:"",context:e.self,columns:e.columns,data:e.data}})],1):a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticClass:"textarea",attrs:{type:"textarea",autosize:{minRows:4,maxRows:12}},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}}),a("p",[a("span",[e._v("如果是礼包则必须填写礼包ID 其他为非必填选项，可不输入")])])],1)],a("FormItem",{attrs:{label:"广告类型",prop:"adType"}},[a("Select",{model:{value:e.formValidate.adType,callback:function(t){e.$set(e.formValidate,"adType",t)},expression:"formValidate.adType"}},e._l(e.configData.top_type,(function(t,r){return a("Option",{key:r,attrs:{value:r,index:r}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"排序",prop:"no"}},[a("Input",{staticClass:"no",model:{value:e.formValidate.no,callback:function(t){e.$set(e.formValidate,"no",t)},expression:"formValidate.no"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")])],1)],2)],1)},o=[],i=(a("a434"),a("159b"),a("d3b7"),a("ddb0"),a("4d63"),a("ac1f"),a("25f0"),a("365c")),n=a("3786"),s={data:function(){var e=this;return{self:this,formValidate:{describe:"",status:"1",url:"",gimg:"",gimg_url:"",remark:"",adType:"1",no:"1",hlight:""},ruleValidate:{no:[{required:!0,message:"排序不能为空",trigger:"blur"}]},curImgMsg:{},configData:{},columns:[{title:"资源id",key:"id",align:"center"},{title:"资源名称",key:"name",align:"center"},{title:"操作",key:"action",align:"center",render:function(t,a){return t("div",[t("Button",{domProps:{innerHTML:"删除"},props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.remove(a.index)}}},"Delete"),t("Button",{domProps:{innerHTML:"向上"},props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var t=a.index,r=e.data[t];0!=t&&(e.data.splice(t,1),e.data.splice(t-1,0,r),console.log(e.data))}}},"View"),t("Button",{domProps:{innerHTML:"向下"},props:{type:"primary",size:"small"},on:{click:function(){var t=a.index,r=e.data.length-1,o=e.data[t];t!=r&&(e.data.splice(t,1),e.data.splice(t+1,0,o),console.log(e.data))}}},"View")])}}],data:[],isShowAddGameList:!1}},mounted:function(){var e=this,t=Object(n["b"])(),a=1*this.$route.query.adid,r=1*this.$route.query.advtype,o=2,s={token:t,adid:a,advtype:r,type_c:o};i["a"].advertadd(s).then((function(t){0==t.code?(e.isShowAddGameList=5==t.data.adsType,e.configData=t.data.config,console.log(e.configData)):e.$Notice.error({desc:t.msg})}))},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=new FormData;if(a.append("token",Object(n["b"])()),a.append("adid",1*t.$route.query.adid),a.append("advtype",1*t.$route.query.advtype),a.append("type_c",1),a.append("gimg",t.curImgMsg),a.append("gimg_url",t.formValidate.gimg_url),a.append("status",1*t.formValidate.status),a.append("no",1*t.formValidate.no),a.append("hlight",1*t.formValidate.hlight),a.append("describe",t.formValidate.describe),a.append("url",t.formValidate.url),a.append("type",1*t.formValidate.adType),t.isShowAddGameList){var r="";t.data?(t.data.forEach((function(e){r?r=r+","+e.id:r+=e.id})),a.append("remark",r)):a.append("remark","")}else a.append("remark",t.formValidate.remark);var o=a;console.log(o.keys("gimg")),i["a"].advertaddSet(o).then((function(e){console.log(e),0==e.code&&(t.$Notice.success({title:e.msg}),t.$router.push({path:"/ad/advertset",query:{adid:t.$route.query.adid}}))}))}}))},handleReset:function(e){this.$refs[e].resetFields()},getFile:function(e){var t=e.target.files[0],a=t.type,r="jpg|jpeg|png",o=new RegExp(".("+r+")$");o.test(a)?this.curImgMsg=e.target.files[0]:this.$Message.warning("请传".concat(r,"图片"))},getGameNameByGameId:function(){var e=this;if(""==this.formValidate.remark)this.$Message.warning({background:!0,content:"请输入要查找的游戏或应用id！"});else if(0==this.formValidate.adType)this.$Message.warning({background:!0,content:"请选择广告类型！"});else{var t=Object(n["b"])(),a=this.formValidate.remark,r=this.formValidate.adType,o={token:t,gameid:a,type:r};i["a"].getGameNameByGameId(o).then((function(t){if(0==t.code){var a=!1;a=!!e.data&&e.data.some((function(t){return t.id==e.formValidate.remark})),a?e.$Message.warning({background:!0,content:"当前游戏或应用id已经添加，请不要重复添加"}):e.data.push(t.data)}else e.$Message.error({background:!0,content:t.msg})}))}},remove:function(e){this.data.splice(e,1)}}},l=s,d=(a("b0ff"),a("2877")),c=Object(d["a"])(l,r,o,!1,null,"7dc62fd4",null);t["default"]=c.exports},a434:function(e,t,a){"use strict";var r=a("23e7"),o=a("da84"),i=a("23cb"),n=a("5926"),s=a("07fa"),l=a("7b0b"),d=a("65f0"),c=a("8418"),u=a("1dde"),f=u("splice"),p=o.TypeError,m=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var a,r,o,u,f,b,y=l(this),k=s(y),V=i(e,k),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=k-V):(a=x-2,r=g(m(n(t),0),k-V)),k+a-r>h)throw p(v);for(o=d(y,r),u=0;u<r;u++)f=V+u,f in y&&c(o,u,y[f]);if(o.length=r,a<r){for(u=V;u<k-r;u++)f=u+r,b=u+a,f in y?y[b]=y[f]:delete y[b];for(u=k;u>k-r+a;u--)delete y[u-1]}else if(a>r)for(u=k-r;u>V;u--)f=u+r-1,b=u+a-1,f in y?y[b]=y[f]:delete y[b];for(u=0;u<a;u++)y[u+V]=arguments[u+2];return y.length=k-r+a,o}})},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},b0ff:function(e,t,a){"use strict";a("8a72")}}]);
//# sourceMappingURL=chunk-b7deb7f4.17f62550.js.map