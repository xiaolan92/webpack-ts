(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Gzxi:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return c});var s=a("o0o1"),u=a.n(s),i=a("yXPU"),r=a.n(i),n=a("mxV5"),l=a.n(n),o=function(){return new l.a({region:"oss-cn-beijing",accessKeyId:"LTAI4G4GvvKZwgrgCVguwAHz",accessKeySecret:"mDZSsy2WAXNjZfCVJkAs2T0RtJOzNF",bucket:"suixinsuiyi"})},c=function(){var s=r()(u.a.mark(function t(e,a,s){var i,r,n,l,o,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=a.file.name.split("."),r=i[i.length-1],n=new Date,l=String(n.getFullYear())+(n.getMonth()+1)+n.getDate(),o=String(n.getFullYear())+(n.getMonth()+1)+n.getDate()+n.getMilliseconds(),t.prev=1,t.next=4,e.put("backstage/".concat(l,"/").concat(s,"/").concat(o,".").concat(r),a.file,{headers:{"Content-Disposition":"inline","Content-Type":r}});case 4:return c=t.sent,t.abrupt("return",c.url);case 9:t.prev=9,t.t0=t.catch(1);case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(t,e,a){return s.apply(this,arguments)}}()},JBhL:function(t,e,a){"use strict";a.r(e);function s(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"qucklyGoods"},[s("Add",{on:{getData:a.bannerlist}}),a._v(" "),s("Register",{attrs:{"register-visible":a.registerVisible,"row-data":a.rowData},on:{getData:a.bannerlist,"update:registerVisible":function(t){a.registerVisible=t},"update:register-visible":function(t){a.registerVisible=t}}}),a._v(" "),s("div",{staticClass:"table"},[s("el-table",{staticStyle:{},attrs:{data:a.tableData.list,border:"","header-cell-style":{"text-align":"center",color:"black"},"cell-style":{"text-align":"center"}}},[s("el-table-column",{attrs:{prop:"id",label:"序号"}}),a._v(" "),s("el-table-column",{attrs:{label:"轮播图"},scopedSlots:a._u([{key:"default",fn:function(t){return[s("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.image_url}})]}}])}),a._v(" "),s("el-table-column",{attrs:{prop:"type",label:"轮播图类型"}}),a._v(" "),s("el-table-column",{attrs:{prop:"position",label:"轮播图位置"}}),a._v(" "),s("el-table-column",{attrs:{prop:"url",label:"跳转地址"}}),a._v(" "),s("el-table-column",{attrs:{prop:"status",label:"显示状态"}}),a._v(" "),s("el-table-column",{attrs:{prop:"sort",label:"排序"}}),a._v(" "),s("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a._v(" "),s("el-table-column",{attrs:{width:"200px"},scopedSlots:a._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return a.update(e.row)}}},[a._v("\n            修改轮播图\n          ")])]}}])},[s("template",{attrs:{"slot-scope":a.scope},slot:"header"},[a._v("\n          操作\n        ")])],2)],1)],1),a._v(" "),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{layout:"prev,pager,next",background:"","page-size":a.limit,total:a.tableData.total},on:{"current-change":a.changePage,"prev-click":a.prev,"next-click":a.next}})],1)],1)}s._withStripped=!0;function i(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods-container"},[a("el-button",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("\n    添加广告/轮播\n  ")]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"460px",center:"","before-close":e.close},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"轮播地址"}},[a("el-upload",{ref:"uploadTwo",staticStyle:{display:"inline"},attrs:{action:"",limit:1,"http-request":e.detailImgsUpload,"on-remove":e.removeFile,"list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"跳转地址"}},[a("div",{staticStyle:{width:"300px"}},[a("el-input",{model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"显示状态"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},e._l(e.statusList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"轮播类型"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"轮播位置"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}},e._l(e.positionList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("div",{staticStyle:{width:"300px"}},[a("el-input",{model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1)])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)}var r=a("o0o1"),n=a.n(r),l=a("yXPU"),o=a.n(l);i._withStripped=!0;var c=a("Gzxi"),u={data:function(){return{dialogVisible:!1,imageUrl:"",url:"",statusList:[{id:1,name:"可用"},{id:0,name:"禁用"}],status:"",typeList:[{id:1,name:"轮播"},{id:2,name:"商品广告"},{id:3,name:"视频广告"}],type:"",positionList:[{id:1,name:"首页"},{id:2,name:"抢单"}],position:"",sort:""}},methods:{detailImgsUpload:function(a){var s=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(Object(c.a)(),a);case 2:e=t.sent,s.imageUrl=e;case 4:case"end":return t.stop()}},t)}))()},removeFile:function(){this.imageUrl=""},confirm:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a.image_url)return a.$message({message:"请选择广告/轮播地址",type:"warning"}),t.abrupt("return");t.next=3;break;case 3:if(""===a.status)return a.$message({message:"请填写显示状态",type:"warning"}),t.abrupt("return");t.next=6;break;case 6:if(""===a.type)return a.$message({message:"请填写轮播图类型",type:"warning"}),t.abrupt("return");t.next=9;break;case 9:if(""===a.position)return a.$message({message:"请填写轮播图位置",type:"warning"}),t.abrupt("return");t.next=12;break;case 12:if(""===a.sort)return a.$message({message:"请填写排序",type:"warning"}),t.abrupt("return");t.next=15;break;case 15:return t.prev=15,t.next=18,a.axios.post("admin/addbanner",{image_url:a.imageUrl,url:a.url,status:a.status,type:a.type,position:a.position,sort:a.sort});case 18:e=t.sent,a.close(),a.$emit("getData"),a.$message({message:e.msg,type:"success"}),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(15);case 27:case"end":return t.stop()}},t,null,[[15,24]])}))()},close:function(){this.imageUrl="",this.url="",this.status="",this.type="",this.position="",this.sort="",this.dialogVisible=!1,this.$refs.uploadTwo.clearFiles()}},components:{}},p=(a("Wr1K"),a("KHd+")),d=Object(p.a)(u,i,[],!1,null,"35e1e176",null);d.options.__file="src/views/bannerlist/add.vue";function m(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods-container"},[a("el-dialog",{attrs:{visible:e.registerVisible,width:"460px",center:"","before-close":e.close},on:{"update:visible":function(t){e.registerVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{staticStyle:{height:"148px",overflow:"hidden"},attrs:{label:"轮播地址"}},[a("el-upload",{ref:"uploadTwo",staticStyle:{display:"inline"},attrs:{action:"",limit:1,"http-request":e.detailImgsUpload,"on-remove":e.removeFile,"before-upload":e.beforeUpload,"on-exceed":e.onExceed,"list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.desImgShow,expression:"desImgShow"}],staticStyle:{height:"148px",width:"148px"},attrs:{src:e.rowData.image_url}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"跳转地址"}},[a("div",{staticStyle:{width:"300px"}},[a("el-input",{model:{value:e.rowData.url,callback:function(t){e.$set(e.rowData,"url",t)},expression:"rowData.url"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"显示状态"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.rowData.status,callback:function(t){e.$set(e.rowData,"status",t)},expression:"rowData.status"}},e._l(e.statusList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"轮播类型"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.rowData.type,callback:function(t){e.$set(e.rowData,"type",t)},expression:"rowData.type"}},e._l(e.typeList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"轮播位置"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.rowData.position,callback:function(t){e.$set(e.rowData,"position",t)},expression:"rowData.position"}},e._l(e.positionList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("div",{staticStyle:{width:"300px"}},[a("el-input",{model:{value:e.rowData.sort,callback:function(t){e.$set(e.rowData,"sort",t)},expression:"rowData.sort"}})],1)])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)}var b=d.exports;m._withStripped=!0;var f={data:function(){return{dialogVisible:!1,desImgShow:!0,statusList:[{id:1,name:"可用"},{id:0,name:"禁用"}],typeList:[{id:1,name:"轮播"},{id:2,name:"商品广告"},{id:3,name:"视频广告"}],positionList:[{id:1,name:"首页"},{id:2,name:"抢单"}]}},created:function(){},props:{registerVisible:{type:Boolean,defautl:!1},rowData:{type:Object,default:function(){return{}}}},methods:{detailImgsUpload:function(a){var s=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(Object(c.a)(),a);case 2:e=t.sent,s.rowData.imageUrl=e;case 4:case"end":return t.stop()}},t)}))()},removeFile:function(){this.rowData.imageUrl=""},beforeUpload:function(){this.desImgShow=!1},onExceed:function(){this.$message({message:"只能选择一张图",type:"warning"})},confirm:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.rowData.image_url){t.next=3;break}return a.$message({message:"请选择广告/轮播地址",type:"warning"}),t.abrupt("return");case 3:return t.prev=3,t.next=6,a.axios.post("admin/savebanner",{id:a.rowData.id,image_url:a.rowData.image_url,url:a.rowData.url,status:a.rowData.status,type:a.rowData.type,position:a.rowData.position,sort:a.rowData.sort});case 6:e=t.sent,a.close(),a.$emit("getData"),a.$message({message:e.msg,type:"success"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3);case 15:case"end":return t.stop()}},t,null,[[3,12]])}))()},close:function(){this.imageUrl="",this.url="",this.status="",this.type="",this.position="",this.sort="",this.dialogVisible=!1,this.desImgShow=!0,this.$refs.uploadTwo.clearFiles(),this.$emit("update:registerVisible",!1)}},components:{}},g=(a("kgUd"),Object(p.a)(f,m,[],!1,null,"76b6d1c4",null));g.options.__file="src/views/bannerlist/register.vue";var v={data:function(){return{scope:"scope",registerVisible:!1,limit:8,pages:1,tableData:[],rowData:{}}},created:function(){this.bannerlist()},methods:{bannerlist:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.axios.get("/admin/bannerlist",{params:{limit:a.limit,page:a.pages}});case 3:e=t.sent,a.tableData=Object.assign(e.data,{list:e.data.list.map(function(t){return Object.assign(t,{status:1===t.status?"可用":"禁用",position:1===t.position?"首页":"轮播",type:1===t.type?"轮播":2===t.type?"商品广告":"视频广告"})})}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))()},update:function(t){this.registerVisible=!0,this.rowData=JSON.parse(JSON.stringify(t)),this.rowData.status="可用"===this.rowData.status?1:0,this.rowData.position="首页"===this.rowData.position?1:2,this.rowData.type="轮播"===this.rowData.type?1:"商品广告"===this.rowData.type?2:3},prev:function(){this.pages--,this.bannerlist()},changePage:function(t){this.pages=t,this.bannerlist()},next:function(){this.pages++,this.bannerlist()}},components:{Add:b,Register:g.exports}},h=(a("PkQc"),Object(p.a)(v,s,[],!1,null,"604aea05",null));h.options.__file="src/views/bannerlist/bannerlist.vue";e.default=h.exports},PkQc:function(t,e,a){"use strict";var s=a("xIs/");a.n(s).a},U1Sh:function(t,e,a){var s=a("Yq4d");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("SZ7m").default)("45b343f8",s,!1,{})},Wr1K:function(t,e,a){"use strict";var s=a("xYAt");a.n(s).a},Yq4d:function(t,e,a){(e=a("JPst")(!1)).push([t.i,".goods-container .size[data-v-76b6d1c4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:450px;margin-bottom:10px}.goods-container .size .size-item[data-v-76b6d1c4]{width:270px}\n",""]),t.exports=e},bH65:function(t,e,a){(e=a("JPst")(!1)).push([t.i,".qucklyGoods .table[data-v-604aea05]{margin-top:15px;height:700px}.qucklyGoods .pagination[data-v-604aea05]{margin-top:10px}\n",""]),t.exports=e},kgUd:function(t,e,a){"use strict";var s=a("U1Sh");a.n(s).a},vHNM:function(t,e,a){(e=a("JPst")(!1)).push([t.i,".goods-container .size[data-v-35e1e176]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:450px;margin-bottom:10px}.goods-container .size .size-item[data-v-35e1e176]{width:270px}\n",""]),t.exports=e},"xIs/":function(t,e,a){var s=a("bH65");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("SZ7m").default)("58772f62",s,!1,{})},xYAt:function(t,e,a){var s=a("vHNM");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("SZ7m").default)("6441bdde",s,!1,{})}}]);