(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6eab46"],{"07ac":function(e,t,a){var n=a("23e7"),i=a("6f53").values;n({target:"Object",stat:!0},{values:function(e){return i(e)}})},"159b":function(e,t,a){var n=a("da84"),i=a("fdbc"),r=a("785a"),o=a("17c2"),s=a("9112"),c=function(e){if(e&&e.forEach!==o)try{s(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(n[u]&&n[u].prototype);c(r)},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,i=a("a640"),r=i("forEach");e.exports=r?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"25f0":function(e,t,a){"use strict";var n=a("e330"),i=a("5e77").PROPER,r=a("6eeb"),o=a("825a"),s=a("3a9b"),c=a("577e"),u=a("d039"),l=a("ad6d"),f="toString",d=RegExp.prototype,m=d[f],p=n(l),g=u((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),h=i&&m.name!=f;(g||h)&&r(RegExp.prototype,f,(function(){var e=o(this),t=c(e.source),a=e.flags,n=c(void 0===a&&s(d,e)&&!("flags"in d)?p(e):a);return"/"+t+"/"+n}),{unsafe:!0})},"4d63":function(e,t,a){var n=a("83ab"),i=a("da84"),r=a("e330"),o=a("94ca"),s=a("7156"),c=a("9112"),u=a("9bf2").f,l=a("241c").f,f=a("3a9b"),d=a("44e7"),m=a("577e"),p=a("ad6d"),g=a("9f7f"),h=a("6eeb"),v=a("d039"),b=a("1a2d"),y=a("69f3").enforce,w=a("2626"),x=a("b622"),F=a("fce3"),I=a("107c"),E=x("match"),k=i.RegExp,L=k.prototype,S=i.SyntaxError,$=r(p),R=r(L.exec),V=r("".charAt),_=r("".replace),G=r("".indexOf),O=r("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,C=/a/g,M=/a/g,A=new k(C)!==C,B=g.UNSUPPORTED_Y,N=n&&(!A||B||F||I||v((function(){return M[E]=!1,k(C)!=C||k(M)==M||"/a/i"!=k(C,"i")}))),K=function(e){for(var t,a=e.length,n=0,i="",r=!1;n<=a;n++)t=V(e,n),"\\"!==t?r||"."!==t?("["===t?r=!0:"]"===t&&(r=!1),i+=t):i+="[\\s\\S]":i+=t+V(e,++n);return i},P=function(e){for(var t,a=e.length,n=0,i="",r=[],o={},s=!1,c=!1,u=0,l="";n<=a;n++){if(t=V(e,n),"\\"===t)t+=V(e,++n);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:R(j,O(e,n+1))&&(n+=2,c=!0),i+=t,u++;continue;case">"===t&&c:if(""===l||b(o,l))throw new S("Invalid capture group name");o[l]=!0,r[r.length]=[l,u],c=!1,l="";continue}c?l+=t:i+=t}return[i,r]};if(o("RegExp",N)){for(var q=function(e,t){var a,n,i,r,o,u,l=f(L,this),p=d(e),g=void 0===t,h=[],v=e;if(!l&&p&&g&&e.constructor===q)return e;if((p||f(L,e))&&(e=e.source,g&&(t="flags"in v?v.flags:$(v))),e=void 0===e?"":m(e),t=void 0===t?"":m(t),v=e,F&&"dotAll"in C&&(n=!!t&&G(t,"s")>-1,n&&(t=_(t,/s/g,""))),a=t,B&&"sticky"in C&&(i=!!t&&G(t,"y")>-1,i&&(t=_(t,/y/g,""))),I&&(r=P(e),e=r[0],h=r[1]),o=s(k(e,t),l?this:L,q),(n||i||h.length)&&(u=y(o),n&&(u.dotAll=!0,u.raw=q(K(e),a)),i&&(u.sticky=!0),h.length&&(u.groups=h)),e!==v)try{c(o,"source",""===v?"(?:)":v)}catch(b){}return o},D=function(e){e in q||u(q,e,{configurable:!0,get:function(){return k[e]},set:function(t){k[e]=t}})},T=l(k),U=0;T.length>U;)D(T[U++]);L.constructor=q,q.prototype=L,h(i,"RegExp",q)}w("RegExp")},"6f53":function(e,t,a){var n=a("83ab"),i=a("e330"),r=a("df75"),o=a("fc6a"),s=a("d1e7").f,c=i(s),u=i([].push),l=function(e){return function(t){var a,i=o(t),s=r(i),l=s.length,f=0,d=[];while(l>f)a=s[f++],n&&!c(i,a)||u(d,e?[a,i[a]]:i[a]);return d}};e.exports={entries:l(!0),values:l(!1)}},7156:function(e,t,a){var n=a("1626"),i=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var o,s;return r&&n(o=t.constructor)&&o!==a&&i(s=o.prototype)&&s!==a.prototype&&r(e,s),e}},8418:function(e,t,a){"use strict";var n=a("a04b"),i=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?i.f(e,o,r(0,a)):e[o]=a}},8696:function(e,t,a){},a434:function(e,t,a){"use strict";var n=a("23e7"),i=a("da84"),r=a("23cb"),o=a("5926"),s=a("07fa"),c=a("7b0b"),u=a("65f0"),l=a("8418"),f=a("1dde"),d=f("splice"),m=i.TypeError,p=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var a,n,i,f,d,b,y=c(this),w=s(y),x=r(e,w),F=arguments.length;if(0===F?a=n=0:1===F?(a=0,n=w-x):(a=F-2,n=g(p(o(t),0),w-x)),w+a-n>h)throw m(v);for(i=u(y,n),f=0;f<n;f++)d=x+f,d in y&&l(i,f,y[d]);if(i.length=n,a<n){for(f=x;f<w-n;f++)d=f+n,b=f+a,d in y?y[b]=y[d]:delete y[b];for(f=w;f>w-n+a;f--)delete y[f-1]}else if(a>n)for(f=w-n;f>x;f--)d=f+n-1,b=f+a-1,d in y?y[b]=y[d]:delete y[b];for(f=0;f<a;f++)y[f+x]=arguments[f+2];return y.length=w-n+a,i}})},a640:function(e,t,a){"use strict";var n=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,a){var n=a("83ab"),i=a("5e77").EXISTS,r=a("e330"),o=a("9bf2").f,s=Function.prototype,c=r(s.toString),u=/^\s*function ([^ (]*)/,l=r(u.exec),f="name";n&&!i&&o(s,f,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},bacd:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{staticClass:"small nameBox",attrs:{label:"应用名称",prop:"name"}},[a("Input",{attrs:{clearable:""},on:{"on-change":e.autoKeyword,"on-blur":e.checkGame},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}}),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.isSearchFGame,expression:"isSearchFGame"}]},e._l(e.keywordList,(function(t,n){return a("li",{key:n,attrs:{value:t},on:{mousedown:function(a){return e.setKeyword(t)}}},[e._v(e._s(t))])})),0)],1),a("FormItem",{staticClass:"big iconBox",attrs:{label:"选择截图",prop:"img"}},[a("div",{staticClass:"uploadBox"},[a("div",{staticClass:"upload"},[a("Icon",{attrs:{type:"ios-cloud-upload-outline",size:"18"}}),e._v(" 选择文件 ")],1),a("input",{attrs:{type:"file",name:"img",value:"",multiple:"multiple"},on:{change:function(t){return e.getFile(t)}}})]),a("i",[e._v("已选择"+e._s(e.preImgList.length)+"张图片")]),a("span",{staticStyle:{color:"orange","margin-left":"20px"}},[e._v("按 Ctrl 键可一次添加多张图片 ")])]),a("FormItem",{attrs:{label:"截图预览"}},[e.preImgList.length>0?a("div",{staticClass:"uploadlistBox",attrs:{id:"uploadListBox"}},e._l(e.preImgList,(function(t,n){return a("div",{key:n,staticClass:"upload-list"},[a("img",{attrs:{src:t,title:"item.path"}}),a("div",{staticClass:"upload-list-cover",on:{click:function(t){return e.handleRemoveGameImg(n)}}},[a("Icon",{attrs:{type:"ios-trash-outline"}})],1)])})),0):a("div",{staticClass:"noImg"},[a("Icon",{attrs:{type:"ios-images-outline",size:"52"}}),a("p",[e._v("暂无截图预览")])],1)]),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("确认提交")])],1)],1)},i=[],r=(a("b0c0"),a("159b"),a("07ac"),a("4d63"),a("ac1f"),a("25f0"),a("a434"),a("365c")),o=a("3786"),s={data:function(){var e=this,t=function(t,a,n){e.imgFileList.length>0?n():e.$Message.warning("请选择图片")};return{formValidate:{name:""},ruleValidate:{name:[{required:!0,message:"请输入应用名称",trigger:"blur"}],img:[{validator:t,trigger:"blur"}]},preImgList:[],imgFileList:[],keywordList:[],isSearchFGame:!1}},created:function(){var e=this;if(this.$route.query.appid){var t=Object(o["b"])(),a=this.$route.query.appid,n=2,i={token:t,id:a,type:n};r["a"].editImg(i).then((function(t){0==t.code?e.formValidate.name=t.data.gameInfo.name:e.$Notice.error({desc:t.msg})}))}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=Object(o["b"])(),n=2,i=t.formValidate.name,s=new FormData;s.append("token",a),s.append("classify",n),s.append("name",i),s.append("imgcount",t.imgFileList.length),t.imgFileList.forEach((function(e,t){s.set("img"+(t+1),e)}));var c=s;t.$Spin.show(),r["a"].exeImg(c).then((function(e){t.$Spin.hide(),0==e.code?(t.$Notice.success({title:"添加成功"}),t.$router.push("/data/appimg")):t.$Notice.error({desc:e.msg})}))}else t.$Message.error("Fail!")}))},autoKeyword:function(e){var t=this;if(""!=e){var a=Object(o["b"])(),n=this.formValidate.name,i={token:a,name:n};r["a"].backAppList(i).then((function(e){0==e.code?e.data.length>0?(t.keywordList=e.data,t.isSearchFGame=!0):t.isSearchFGame=!1:(t.isSearchFGame=!1,t.$Notice.error({desc:e.msg}))}))}},checkGame:function(){this.isSearchFGame=!1},setKeyword:function(e){this.formValidate.name=e},getFile:function(e){var t=this,a=e.target.files;this.files=a,Object.values(a).length>0?Object.values(a).forEach((function(e){var a=e,n=e.name,i=a.type,r="jpg|jpeg|png",o=new RegExp(".("+r+")$"),s=t.imgFileList.some((function(e){return e.name==n}));if(o.test(i))if(s)t.$Message.warning("图片已存在请勿重复选择");else{t.imgFileList.push(e);var c=new FileReader;c.onload=function(){t.preImgList.push(c.result)},c.readAsDataURL(e)}else t.$Message.warning("请传".concat(r,"图片"))})):this.$Message.warning("您还没有选择图片")},handleRemoveGameImg:function(e){this.preImgList.splice(e,1),this.imgFileList.splice(e,1)}}},c=s,u=(a("c376"),a("2877")),l=Object(u["a"])(c,n,i,!1,null,"69a5d7c6",null);t["default"]=l.exports},c376:function(e,t,a){"use strict";a("8696")}}]);
//# sourceMappingURL=chunk-5b6eab46.23a6445d.js.map