(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3813482a"],{"042b":function(e,t,a){},1067:function(e,t,a){},"498a":function(e,t,a){"use strict";var i=a("23e7"),r=a("58a8").trim,s=a("c8d2");i({target:"String",proto:!0,forced:s("trim")},{trim:function(){return r(this)}})},a840:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[1==e.reviewType?a("h3",[a("Icon",{attrs:{type:"ios-boat",size:"24"}}),e._v("审核游戏")],1):a("h3",[a("Icon",{attrs:{type:"ios-boat-outline",size:"24"}}),e._v("审核应用")],1),a("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":130}},[a("div",{staticClass:"formBox highLight"},[a("FormItem",{staticClass:"big",attrs:{label:"退稿原因",prop:"remark"}},[a("Input",{model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),a("Button",{staticStyle:{height:"33px","margin-left":"10px"},attrs:{type:"warning"},on:{click:e.returnManuscript}},[e._v("退回稿件")])],1),2==e.reviewType?a("div",{staticClass:"formBox"},[a("FormItem",{attrs:{label:"来源",prop:"state"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.source_id,callback:function(t){e.$set(e.formValidate,"source_id",t)},expression:"formValidate.source_id"}},[a("Option",{attrs:{value:"0"}},[e._v("选择来源")]),e._l(e.formArr.app_source,(function(t,i){return a("Option",{key:i,attrs:{value:i}},[e._v(e._s(t))])}))],2)],1),a("FormItem",{staticClass:"default",attrs:{label:"来源URL",prop:"source_url"}},[a("Input",{attrs:{placeholder:"http:// 或 https://开头",disabled:""},model:{value:e.formValidate.source_url,callback:function(t){e.$set(e.formValidate,"source_url",t)},expression:"formValidate.source_url"}})],1)],1):e._e(),a("div",{staticClass:"formBox"},[a("FormItem",{staticClass:"small nameBox",attrs:{label:e.curName+"名称",prop:"name"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),a("FormItem",{staticClass:"fgameBox",attrs:{label:"主库"+e.curName,prop:"fgame"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.fgame,callback:function(t){e.$set(e.formValidate,"fgame",t)},expression:"formValidate.fgame"}})],1),a("FormItem",{attrs:{label:"是否原创",prop:"original"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.original,callback:function(t){e.$set(e.formValidate,"original",t)},expression:"formValidate.original"}},[a("Option",{attrs:{value:"1"}},[e._v("是")]),a("Option",{attrs:{value:"2"}},[e._v("否")])],1)],1),a("FormItem",{attrs:{label:e.curName+"状态",prop:"state"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.state,callback:function(t){e.$set(e.formValidate,"state",t)},expression:"formValidate.state"}},[a("Option",{attrs:{value:"1"}},[e._v("正常")]),a("Option",{attrs:{value:"2"}},[e._v("下架")]),a("Option",{attrs:{value:"3"}},[e._v("删除")])],1)],1)],1),a("FormItem",{staticClass:"default",attrs:{label:"网页SEO标题",prop:"title"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),a("FormItem",{staticClass:"default",attrs:{label:"网页SEO关键词",prop:"keywords"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.keywords,callback:function(t){e.$set(e.formValidate,"keywords",t)},expression:"formValidate.keywords"}})],1),a("FormItem",{staticClass:"big",attrs:{label:"网页SEO描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:14},disabled:""},model:{value:e.formValidate.description,callback:function(t){e.$set(e.formValidate,"description",t)},expression:"formValidate.description"}})],1),a("FormItem",{staticClass:"small",attrs:{label:e.curName+"评分",prop:"game_score"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.game_score,callback:function(t){e.$set(e.formValidate,"game_score",t)},expression:"formValidate.game_score"}})],1),a("div",{staticClass:"formBox"},[a("FormItem",{staticClass:"default",attrs:{label:e.curName+"厂商",prop:"platname"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.platname,callback:function(t){e.$set(e.formValidate,"platname",t)},expression:"formValidate.platname"}})],1),a("FormItem",{attrs:{label:"语言类型",prop:"language"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.language,callback:function(t){e.$set(e.formValidate,"language",t)},expression:"formValidate.language"}},e._l(e.formArr.ag_language,(function(t,i){return a("Option",{key:i,attrs:{value:i}},[e._v(e._s(t))])})),1)],1)],1),a("FormItem",{attrs:{label:"安全提示"}},[a("CheckboxGroup",{model:{value:e.formValidate.safetitle,callback:function(t){e.$set(e.formValidate,"safetitle",t)},expression:"formValidate.safetitle"}},e._l(e.formArr.safetitleList,(function(t,i){return a("Checkbox",{key:i,attrs:{label:i,disabled:""}},[e._v(e._s(t))])})),1)],1),a("div",{staticClass:"formBox"},[a("FormItem",{staticClass:"small",attrs:{label:"安卓版本号",prop:"and_ver"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.and_ver,callback:function(t){e.$set(e.formValidate,"and_ver",t)},expression:"formValidate.and_ver"}})],1),a("FormItem",{staticClass:"small",attrs:{label:"安卓包大小",prop:"and_size"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.and_size,callback:function(t){e.$set(e.formValidate,"and_size",t)},expression:"formValidate.and_size"}})],1),a("Select",{staticStyle:{marginLeft:"5px",width:"80px"},attrs:{disabled:""},model:{value:e.formValidate.and_unit,callback:function(t){e.$set(e.formValidate,"and_unit",t)},expression:"formValidate.and_unit"}},e._l(e.formArr.pack_unit,(function(t,i){return a("Option",{key:i,attrs:{value:i}},[e._v(e._s(t))])})),1),a("FormItem",{attrs:{label:"是否合作",prop:"cooperation"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.cooperation,callback:function(t){e.$set(e.formValidate,"cooperation",t)},expression:"formValidate.cooperation"}},[a("Option",{attrs:{value:"1"}},[e._v("是")]),a("Option",{attrs:{value:"2"}},[e._v("否")])],1)],1)],1),a("div",{staticClass:"formBox"},[a("FormItem",{staticClass:"default",attrs:{label:"安卓下载地址",prop:"and_url"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.and_url,callback:function(t){e.$set(e.formValidate,"and_url",t)},expression:"formValidate.and_url"}})],1),a("Button",{staticStyle:{height:"32px","margin-left":"10px"},attrs:{type:"info"}},[e._v("M地址")])],1),a("div",{staticClass:"formBox"},[a("FormItem",{staticClass:"small",attrs:{label:"ios版本号",prop:"ios_ver"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.ios_ver,callback:function(t){e.$set(e.formValidate,"ios_ver",t)},expression:"formValidate.ios_ver"}})],1),a("FormItem",{staticClass:"small",attrs:{label:"ios包大小",prop:"ios_size"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.ios_size,callback:function(t){e.$set(e.formValidate,"ios_size",t)},expression:"formValidate.ios_size"}})],1),a("Select",{staticStyle:{marginLeft:"5px",width:"80px"},attrs:{disabled:""},model:{value:e.formValidate.ios_unit,callback:function(t){e.$set(e.formValidate,"ios_unit",t)},expression:"formValidate.ios_unit"}},e._l(e.formArr.pack_unit,(function(t,i){return a("Option",{key:i,attrs:{value:i}},[e._v(e._s(t))])})),1)],1),a("FormItem",{staticClass:"big",attrs:{label:"ios下载地址",prop:"ios_url"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.ios_url,callback:function(t){e.$set(e.formValidate,"ios_url",t)},expression:"formValidate.ios_url"}})],1),a("FormItem",{staticClass:"big",attrs:{label:"pc下载地址",prop:"pc_url"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.pc_url,callback:function(t){e.$set(e.formValidate,"pc_url",t)},expression:"formValidate.pc_url"}})],1),a("FormItem",{attrs:{label:e.curName+"类型",prop:"type"}},[a("RadioGroup",{model:{value:e.formValidate.type,callback:function(t){e.$set(e.formValidate,"type",t)},expression:"formValidate.type"}},e._l(e.formArr.game_type,(function(t,i){return a("Radio",{key:i,attrs:{label:i,disabled:""}},[e._v(e._s(t))])})),1)],1),a("div",{staticClass:"formBox"},[a("FormItem",{attrs:{label:"推荐设置",prop:"recom"}},[a("Select",{attrs:{disabled:""},model:{value:e.formValidate.recom,callback:function(t){e.$set(e.formValidate,"recom",t)},expression:"formValidate.recom"}},e._l(e.formArr.game_recom,(function(t,i){return a("Option",{key:i,attrs:{value:i}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"下载数量",prop:"fictitious_down"}},[a("Input",{attrs:{disabled:""},model:{value:e.formValidate.fictitious_down,callback:function(t){e.$set(e.formValidate,"fictitious_down",t)},expression:"formValidate.fictitious_down"}})],1)],1),a("FormItem",{attrs:{label:e.curName+"内容介绍",prop:"introduce"}},[a("Editor",{ref:"editorConfig",attrs:{getEditorContent:e.formValidate.introduce,getEditorType:1,getEditorId:"editorContainer_1"}})],1),a("FormItem",{attrs:{label:"日志"}},[a("Editor",{ref:"editorDataConfig",attrs:{getEditorContent:e.formValidate.journal?e.formValidate.journal[0]:"",getEditorType:2,getEditorId:"editorContainer_2"}})],1),a("FormItem",{attrs:{label:"历史日志"}},[a("Editor",{ref:"editorDataHistoryConfig",attrs:{getEditorContent:e.formValidate.journal?e.formValidate.journal[1]:"",getEditorType:2,getEditorId:"editorContainer_3"}})],1),a("FormItem",{staticClass:"big",attrs:{label:"小编推荐",prop:"comment"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:15},disabled:""},model:{value:e.formValidate.comment,callback:function(t){e.$set(e.formValidate,"comment",t)},expression:"formValidate.comment"}})],1),a("FormItem",{staticClass:"big",attrs:{label:"重要提示",prop:"tip"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:15},disabled:""},model:{value:e.formValidate.tip,callback:function(t){e.$set(e.formValidate,"tip",t)},expression:"formValidate.tip"}})],1),a("FormItem",{attrs:{label:"评论",prop:"discuss"}},[a("Input",{staticStyle:{margin:"0 6px 6px 0",width:"19%"},attrs:{value:e.discussArr[0],maxlength:300,"show-word-limit":"",type:"textarea",rows:4,placeholder:"评论不能字数超过300",disabled:""},model:{value:e.discussArr[0],callback:function(t){e.$set(e.discussArr,0,t)},expression:"discussArr[0]"}}),a("Input",{staticStyle:{margin:"0 6px 6px 0",width:"19%"},attrs:{value:e.discussArr[1],maxlength:300,"show-word-limit":"",type:"textarea",rows:4,placeholder:"评论不能字数超过300",disabled:""},model:{value:e.discussArr[1],callback:function(t){e.$set(e.discussArr,1,t)},expression:"discussArr[1]"}}),a("Input",{staticStyle:{margin:"0 6px 6px 0",width:"19%"},attrs:{value:e.discussArr[2],maxlength:300,"show-word-limit":"",type:"textarea",rows:4,placeholder:"评论不能字数超过300",disabled:""},model:{value:e.discussArr[2],callback:function(t){e.$set(e.discussArr,2,t)},expression:"discussArr[2]"}}),a("Input",{staticStyle:{margin:"0 6px 6px 0",width:"19%"},attrs:{value:e.discussArr[3],maxlength:300,"show-word-limit":"",type:"textarea",rows:4,placeholder:"评论不能字数超过300",disabled:""},model:{value:e.discussArr[3],callback:function(t){e.$set(e.discussArr,3,t)},expression:"discussArr[3]"}}),a("Input",{staticStyle:{margin:"0 6px 6px 0",width:"19%"},attrs:{value:e.discussArr[4],maxlength:300,"show-word-limit":"",type:"textarea",rows:4,placeholder:"评论不能字数超过300",disabled:""},model:{value:e.discussArr[4],callback:function(t){e.$set(e.discussArr,4,t)},expression:"discussArr[4]"}})],1),a("FormItem",{attrs:{label:"是否预约",prop:"is_yuyue"}},[a("RadioGroup",{model:{value:e.formValidate.is_yuyue,callback:function(t){e.$set(e.formValidate,"is_yuyue",t)},expression:"formValidate.is_yuyue"}},[a("Radio",{attrs:{label:"1",disabled:""}},[e._v("是")]),a("Radio",{attrs:{label:"0",disabled:""}},[e._v("否")])],1)],1),a("FormItem",{staticClass:"default",attrs:{label:"权限提示层",prop:"p_permission"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:15},disabled:""},model:{value:e.formValidate.p_permission,callback:function(t){e.$set(e.formValidate,"p_permission",t)},expression:"formValidate.p_permission"}})],1),a("FormItem",{attrs:{label:"关联标签",prop:"tags"}},[e.formArr.tags&&e.formArr.tags.length>0?e._l(e.formArr.tags,(function(t,i){return a("Tag",{directives:[{name:"show",rawName:"v-show",value:i<e.tagsLimitNum,expression:"idx<tagsLimitNum"}],key:i,attrs:{name:t.name}},[e._v(e._s(t.name))])})):e._l(["","","","","","","",""],(function(t,i){return a("Tag",{directives:[{name:"show",rawName:"v-show",value:i<e.tagsLimitNum,expression:"idx<tagsLimitNum"}],key:i,staticStyle:{width:"60px"},attrs:{name:t.name}},[e._v(e._s(t.name))])}))],2),a("FormItem",{staticClass:"big",attrs:{label:"视频地址"}},[a("Input",{attrs:{type:"textarea",rows:4,disabled:""},model:{value:e.formValidate.video,callback:function(t){e.$set(e.formValidate,"video",t)},expression:"formValidate.video"}})],1),a("div",{staticClass:"formBox"},[a("FormItem",{attrs:{label:"icon图片(160x160)",prop:"gimg"}},[a("img",{staticClass:"defaultImg",attrs:{src:e.curIconUrl,alt:""}})]),a("FormItem",{attrs:{label:"视频封面图"}},[a("img",{staticClass:"defaultImg",attrs:{src:e.curVideoCoverUrl,alt:""}})])],1),a("FormItem",{attrs:{label:e.curName+"截图"}},[e.formArr.gameImageList.length>0?a("div",{staticClass:"uploadlistBox"},e._l(e.formArr.gameImageList,(function(t,i){return a("div",{key:i,staticClass:"upload-list"},[a("img",{attrs:{src:t,title:"item"}}),a("div",{staticClass:"upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(a){return e.handleView(t)}}})],1)])})),0):a("div",{staticClass:"noImg"},[a("Icon",{attrs:{type:"ios-images-outline",size:"52"}}),a("p",[e._v("暂无截图")])],1),a("Modal",{attrs:{title:"图片预览"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?a("img",{staticStyle:{width:"100%","max-height":"600px"},attrs:{src:e.preImgHref}}):e._e(),a("p",{staticStyle:{textAlign:"center",overflow:"hidden"},attrs:{slot:"footer"},slot:"footer"},[e._v("截图预览")])])],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:e.reviewSuccess}},[e._v("审核通过")])],1)],1),a("BackTop")],1)},r=[],s=(a("b0c0"),a("a4d3"),a("e01a"),a("ac1f"),a("1276"),a("159b"),a("498a"),a("365c")),o=a("3786"),l=a("ceb0"),n={inject:["reload"],data:function(){return{formValidate:{id:"",name:"",fgame:"",title:"",state:"",original:"",keywords:"",description:"",game_score:"",platname:"",language:"",safetitle:[],common_id:"",and_ver:"",and_size:"",and_unit:"",and_url:"",and_lock:"",cooperation:"",is_down:"",ios_ver:"",ios_size:"",ios_unit:"",ios_url:"",pc_url:"",type:"",recom:"",fictitious_down:"",comment:"",tip:"",is_yuyue:"",p_permission:"",tags:"",check_updateTime:"0",icon:"",introduce:"",journal:[],gameImageIds:"",source_id:"0",source_url:""},formArr:{ag_language:[],game_recom:[],game_type:[],pack_unit:[],safetitleList:[],tags:[],gameImageList:[]},visible:!1,discussArr:["","","","",""],reviewType:1,curVideoCoverUrl:"",curIconUrl:"",preImgHref:"",remark:"",curName:"游戏",tagsLimitNum:8}},created:function(){var e=this;this.reviewType=this.$route.query.type,this.curName=1==this.$route.query.type?"游戏":"应用",this.tagsLimitNum=1==this.$route.query.type?8:4;var t=1==this.$route.query.type?"editReviewGame":"editReviewApp",a=Object(o["b"])(),i=2,r=this.$route.query.id,l={token:a,type_c:i,id:r};s["a"][t](l).then((function(t){if(0==t.code){var a=t.data.gameInfo,i=a.id,r=void 0===i?"":i,s=a.name,o=a.fgame,l=a.title,n=a.state,d=a.original,m=a.keywords,c=a.description,u=a.game_score,p=a.platname,f=void 0===p?"":p,_=a.language,v=a.safetitle,g=a.common_id,b=a.is_down,V=a.type,y=a.recom,x=a.fictitious_down,h=a.comment,w=a.cooperation,I=a.tip,k=a.discuss,$=a.is_yuyue,C=a.p_permission,A=a.tags,F=a.icon,S=a.introduce,N=a.journal,O=a.video,z=a.video_cover,R=a.source_id,E=a.source_url,L=a.status,B=t.data.packInfo||{},T=B.and_ver,j=void 0===T?"":T,q=B.and_size,G=void 0===q?"":q,U=B.and_unit,H=void 0===U?"1":U,M=B.and_url,D=void 0===M?"":M,J=B.and_lock,P=void 0===J?"":J,K=B.ios_ver,Q=void 0===K?"":K,W=B.ios_size,X=void 0===W?"":W,Y=B.ios_unit,Z=void 0===Y?"1":Y,ee=B.ios_url,te=void 0===ee?"":ee,ae=B.pc_url,ie=void 0===ae?"":ae,re=t.data.config,se=re.ag_language,oe=re.game_recom,le=re.game_type,ne=re.pack_unit,de=re.app_type,me=re.app_source,ce=t.data.img;e.curIconUrl=F,e.curVideoCoverUrl=z,e.remark=3==L&&t.data.review?t.data.review.remark:"";var ue=v?v.split(","):[];e.formValidate={id:r,name:s,fgame:o,title:l,state:n,original:d,keywords:m,description:c,game_score:u,platname:f,language:_,safetitle:ue,common_id:g,and_ver:j,and_size:G,and_unit:H,and_url:D,and_lock:P,cooperation:w,is_down:b,ios_ver:Q,ios_size:X,ios_unit:Z,ios_url:te,pc_url:ie,type:V,recom:y,fictitious_down:x,comment:h,tip:I,is_yuyue:$,p_permission:C,tags:A,check_updateTime:"0",icon:F,introduce:S,journal:N,video:O,source_id:R,source_url:E},e.formArr={ag_language:se,game_recom:oe,game_type:le||de,pack_unit:ne,safetitleList:t.data.config.safetitle,tags:t.data.tagInfo,gameImageList:ce,app_source:me},k&&k.length>0&&k.forEach((function(t,a){e.discussArr[a]=t})),e.$refs.editorConfig.editor1.disable(),e.$refs.editorDataConfig.editor2.disable(),e.$refs.editorDataHistoryConfig.editor2.disable()}else e.$Notice.error({desc:t.msg})}))},methods:{returnManuscript:function(){var e=this;if(""!=this.remark.trim()){this.$Spin.show();var t=1==this.reviewType?"editReviewGame":"editReviewApp",a=1==this.reviewType?"/review/reviewGame":"/review/reviewApp",i=Object(o["b"])(),r=1,l=1*this.$route.query.id,n=this.remark,d={token:i,type_c:r,id:l,remark:n};console.log(d,t,a),s["a"][t](d).then((function(t){e.$Spin.hide(),0==t.code?(e.$Notice.success({title:"退稿成功"}),e.$router.push({path:a})):(e.$router.push({path:a}),e.$Notice.error({title:t.msg}))}))}else this.$Message.warning("请输入退稿原因")},reviewSuccess:function(){var e=this;this.$Spin.show();var t=1==this.reviewType?"/review/reviewGame":"/review/reviewApp",a=Object(o["b"])(),i=this.reviewType,r=this.$route.query.id,l={token:a,type:i,id:r};s["a"].approved(l).then((function(a){e.$Spin.hide(),0==a.code?(e.$router.push({path:t}),e.$Notice.success({title:a.msg})):(e.$router.push({path:t}),e.$Notice.error({title:a.msg}))}))},handleView:function(e){this.preImgHref=e,this.visible=!0}},components:{Editor:l["a"]}},d=n,m=(a("cad5"),a("e369"),a("2877")),c=Object(m["a"])(d,i,r,!1,null,"37f39409",null);t["default"]=c.exports},c8d2:function(e,t,a){var i=a("5e77").PROPER,r=a("d039"),s=a("5899"),o="​᠎";e.exports=function(e){return r((function(){return!!s[e]()||o[e]()!==o||i&&s[e].name!==e}))}},cad5:function(e,t,a){"use strict";a("1067")},e369:function(e,t,a){"use strict";a("042b")}}]);
//# sourceMappingURL=chunk-3813482a.a99704bc.js.map