(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59d1212f"],{"159b":function(t,a,e){var n=e("da84"),i=e("fdbc"),o=e("785a"),s=e("17c2"),r=e("9112"),l=function(t){if(t&&t.forEach!==s)try{r(t,"forEach",s)}catch(a){t.forEach=s}};for(var c in i)i[c]&&l(n[c]&&n[c].prototype);l(o)},"17c2":function(t,a,e){"use strict";var n=e("b727").forEach,i=e("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},6183:function(t,a,e){"use strict";e("f223")},a640:function(t,a,e){"use strict";var n=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&n((function(){e.call(null,a||function(){throw 1},1)}))}},cd2d:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[e("Icon",{attrs:{type:"md-barcode",size:"24"}}),t._v("反馈列表")],1),e("div",{staticClass:"formBox"},[e("Select",{staticStyle:{width:"100px"},model:{value:t.formData.classify,callback:function(a){t.$set(t.formData,"classify",a)},expression:"formData.classify"}},[e("Option",{attrs:{value:"1"}},[t._v("游戏")]),e("Option",{attrs:{value:"2"}},[t._v("应用")])],1),e("span",[t._v(" : ")]),e("Select",{staticStyle:{width:"100px"},model:{value:t.formData.seltype,callback:function(a){t.$set(t.formData,"seltype",a)},expression:"formData.seltype"}},[e("Option",{attrs:{value:"game_name"}},[t._v("名称")]),e("Option",{attrs:{value:"game_id"}},[t._v("ID")])],1),e("div",{staticClass:"idbox"},[e("span"),e("Input",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.formData.selval,callback:function(a){t.$set(t.formData,"selval",a)},expression:"formData.selval"}})],1),e("div",{staticClass:"idbox"},[e("span",[t._v("手机号码/QQ号 : ")]),e("Input",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.formData.phone,callback:function(a){t.$set(t.formData,"phone",a)},expression:"formData.phone"}})],1),e("Button",{staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){return t.getData()}}},[e("Icon",{attrs:{type:"ios-search",size:"16"}}),t._v(" 搜索 ")],1)],1),e("Table",{ref:"selection",attrs:{border:"",columns:t.columns,data:t.data,loading:t.isLoading}}),e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("div",{staticStyle:{float:"right"}},[e("Page",{attrs:{total:1*t.totalPages,"show-total":"","show-elevator":"","show-sizer":""},on:{"on-page-size-change":t.changePageNum,"on-change":t.changePage}})],1)])],1)},i=[],o=(e("159b"),e("365c")),s=e("3786"),r={inject:["reload"],data:function(){return{columns:[{title:"ID",key:"id",width:80,align:"center"},{title:"名称",key:"game_name",width:200,align:"center"},{title:"id",key:"game_id",width:60,align:"center"},{title:"手机号码/QQ号码",key:"phone",width:140,align:"center"},{title:"ip",key:"ip",width:100,align:"center"},{title:"系统类型",key:"system",width:80,align:"center"},{title:"反馈理由",key:"reason_name",width:340,align:"center",render:function(t,a){if(a.row){var e=a.row.listreason_name;return t("div",{},e)}}},{title:"反馈备注",key:"remake",width:200,align:"center"},{title:"反馈时间",key:"addtime",width:140,align:"center"},{title:"预览",key:"pcmurl",width:"",align:"center",render:function(t,a){var e=a.row.m_url,n=a.row.pc_url;return t("div",[t("Button",{props:{type:"warning",size:"small"},style:{margin:"0 4px 2px 0"},on:{click:function(){window.open(n,"_blank")}}},"pc预览"),t("Button",{props:{type:"warning",size:"small"},style:{margin:"0 4px 2px 0"},on:{click:function(){window.open(e,"_blank")}}},"m预览")])}}],data:[],formData:{classify:"1",seltype:"game_name",selval:"",phone:""},isLoading:!0,page:1,per_page:10,totalPages:0,params:{},warnModal:!1,modal_loading:!1,telSelval:"",idnameSelval:""}},mounted:function(){this.getData()},methods:{getData:function(){var t=this,a=Object(s["b"])(),e=this.formData.classify||1,n=this.formData.seltype||0,i=this.formData.selval||"",r=this.formData.phone||"",l=this.page,c=this.per_page,d={token:a,classify:e,seltype:n,selval:i,phone:r,page:l,per_page:c};o["a"].feedbackList(d).then((function(a){0===a.code?(t.data=a.data.list,t.totalPages=a.data.totlerows,t.isLoading=!1,t.data.forEach((function(a){a.addtime=t.$moment(1e3*a.addtime).format("YYYY-MM-DD k:mm"),a.listreason_name="",a.reason_name.length>0&&a.reason_name.forEach((function(t){a.listreason_name+=t}))}))):t.$Notice.error({title:a.msg})}))},changePage:function(t){this.page=t,this.getData()},changePageNum:function(t){this.per_page=t,this.getData()}}},l=r,c=(e("6183"),e("2877")),d=Object(c["a"])(l,n,i,!1,null,"04f2c08b",null);a["default"]=d.exports},f223:function(t,a,e){}}]);
//# sourceMappingURL=chunk-59d1212f.31fd328e.js.map