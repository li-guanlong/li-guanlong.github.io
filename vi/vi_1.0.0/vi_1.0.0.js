/**
 * View Image / created by Mr.boring007 / 1.0.0 / 2021.12.23
 * config 参数调用说明
 * limitType 上传图片类型限制 --- selectable(默认：'jpg|jpeg|png|gif') --- string --- 例：jpg|jpeg|png|gif(类型用|隔开)
 * limitSize 绑定的事件类型 --- selectable(默认：2) --- int --- 例：2(默认单位M)
 * uploading 是否显示上传 --- selectable(默认：true) --- boolean --- 例：true或者false
 * callback 点击上传执行事件 --- selectable --- function --- 执行函数默认返回待上传图片files数组
 */

VI = (function() {
  "use strict"
  const vi = function(config) {
    this._config = config;
    this._init();//入口函数
    this._setParams(config);//参数配置
  };

  vi.prototype = {
    constructor: vi,
    _init: function() {
      this.root = document.getElementById("vi-box");//获取根元素
      this._setBaseBody();//基础结构搭建
      this._monitorUpload();//监听图片change事件
      this._delPreImg();//删除预览图片
      const vi_upload_btn = document.getElementById("vi-upload-btn");//绑定上传事件
      vi_upload_btn.onclick = () => {this._executeCallback()};
    },
    _setBaseBody() {
      this.root.innerHTML = `<div class="vi-upload" id="vi-content1"><input type="file" multiple="multiple" id="vi-upload-1"><div class="vi-first-screen"><i class="vi-icon-cloud"></i><p class="vi-tip">点击或将文件拖拽到这里上传</p></div></div><div class="hide" id="vi-content2"><div class="vi-uploadListBox" id="viUploadListBox"></div><div class="vi-uploadMsgBox"><button type="button" id="vi-upload-btn"><span>开始上传</span></button><div>当前选中<span id="vi-img-num"> 0 </span>张图 | 总计<span id="vi-img-size"> 0.00 </span>MB | 已上传<span> 0 </span>张图 | 共消耗<span> 0.000 </span>MB流量</div></div></div>`
    },
    _monitorUpload: function() {
      const _this = this;
      this.root.onchange = function(e) {
        _this._limitCheckout(e)
      }
    },
    _setParams: function(config) {
      this.preImgList = [];
      this.imgFileList = [];
      this.limitType = config.limitType || 'jpg|jpeg|png|gif';
      this.limitSize = config.limitSize || 2;
      this.callback = config.callback;
    },
    _limitCheckout: function(e) {
      const files = e.target.files;
      if(Object.values(files).length>0) {
        Object.values(files).forEach(ele => {
          const file = ele,
                name = file.name,
                size = file.size/1048576,
                type = file.type,
                limitTypeReg = new RegExp('.('+this.limitType+')$'),
                limitSize = this.limitSize;

          
          const isRepeat = this.imgFileList.some(ele1 => {
            return ele1.name == name
          })

          if (!limitTypeReg.test(type)) {// 类型校验
            alert(`请传${this.limitType}图片`)
          } else if (size > limitSize ) {
            alert(`单张图片不能超过${limitSize}M`)
          } else if (isRepeat) {// 重复上传校验
            alert('图片已存在请勿重复选择')  
          } else {
            let fr = new FileReader();
            fr.onload = () => {
              this.imgFileList.push(ele);
              this.preImgList.push({"src":fr.result, "size": size,});
              this._showContentJudge()
              this._setPreImg();
              this._getUploadImgMsg();
            };
            fr.readAsDataURL(ele)
          }
        })
      }
    },
    _showContentJudge: function() {
      if(this.imgFileList.length>0) {
        document.getElementById("vi-content1").classList.add("hide")
        document.getElementById("vi-content2").classList.remove("hide")
      } else {
        document.getElementById("vi-content2").classList.add("hide")
        document.getElementById("vi-content1").classList.remove("hide")
      }
    },
    _setPreImg: function() {
      const preImgBody = document.getElementById("viUploadListBox");
      let preImgHtml = '';
      this.preImgList.forEach((ele,index) => {
        preImgHtml += `<div class="vi-upload-list">
                          <img src="${ele.src}" alt="">
                          <div class="vi-upload-list-cover">
                            <i class="vi-icon-del" index=${index}></i>
                            <span>${ele.size.toFixed(3)*1}MB</span>
                          </div>
                        </div> `
      })
      preImgHtml += `<div class="vi-upload-small">
                       <input type="file" multiple="multiple" id="vi-upload-2">
                       <i class="vi-icon-camera"></i>
                     </div>`
      preImgBody.innerHTML = preImgHtml
    },
    _delPreImg: function() {
      const _this = this;
      const preImgParent = document.getElementById("viUploadListBox");
      preImgParent.onclick = function(e) {
        const isDel = e.target.classList.contains('vi-icon-del');
        if(isDel) {
          const delIndex = e.target.getAttribute('index');
          _this.imgFileList.splice(delIndex, 1);
          _this.preImgList.splice(delIndex, 1);
          _this._setPreImg();
          _this._showContentJudge();
          _this._getUploadImgMsg();
        }
      }
    },
    _getUploadImgMsg: function() {
      let imgSizeSum = 0;
      this.imgFileList.forEach(ele => {
        imgSizeSum+=(ele.size/1048576)
      })
      document.getElementById("vi-img-size").innerHTML = imgSizeSum.toFixed(3);
      document.getElementById("vi-img-num").innerHTML =this.imgFileList.length;
    },
    _executeCallback: function() {
      this.callback(this.imgFileList)
    }
  };
  return vi;
})()