(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-107f3710"],{"88e0":function(e,i,t){"use strict";t("f34a")},c4d3:function(e,i,t){"use strict";t.r(i);t("7f7f");var n=function(){var e=this,i=e._self._c;return i("div",[e._l(e.uploadList,(function(t){return i("div",{staticClass:"demo-upload-list"},["finished"===t.status?[i("img",{attrs:{src:t.url}}),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){return e.handleView(t.name)}}}),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){return e.handleRemove(t)}}})],1)]:[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)})),i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,multiple:"",type:"drag",action:"/api/node1/Upload"}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),i("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(i){e.visible=i},expression:"visible"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.imgurl}})])],2)},s=[],a={name:"Upload_img",data:function(){return{imgName:"",visible:!1,imgurl:String,uploadList:[]}},methods:{handleView:function(e){console.log(e),this.imgName=e,this.visible=!0},handleRemove:function(e){var i=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(i.indexOf(e),1)},handleSuccess:function(e,i){this.$refs.upLoadRef.post(this.Upload_file),200==e.code&&(this.imgurl=e.imgurl,i.url=e.imgurl,i.name=e.imgname)},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件格式 "+e.name+" 错误，请选择jpg或png。"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件  "+e.name+" 太大，不超过2M。"})},handleBeforeUpload:function(){var e=this.uploadList.length<5;return e||this.$Notice.warning({title:"最多可以上传五张照片。"}),e}},mounted:function(){this.uploadList=this.$refs.upload.fileList}},o=a,l=(t("88e0"),t("2877")),r=Object(l["a"])(o,n,s,!1,null,"41d4ab71",null);i["default"]=r.exports},f34a:function(e,i,t){}}]);