(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1041"],{"43f2":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("Card",{attrs:{shadow:""}},[a("p",[a("b",[e._v("支持使用slot-scope进行自定义列渲染内容")])]),a("p",[e._v("\n      文档请看\n      "),a("a",{attrs:{href:"https://github.com/lison16/tree-table-vue"}},[e._v("https://github.com/lison16/tree-table-vue")])]),a("tree-table",{attrs:{border:!0,selectable:!0,"expand-type":!1,columns:e.columns,data:e.data,"expand-key":"sex"},on:{"checkbox-click":e.getCheckedProp},scopedSlots:e._u([{key:"likes",fn:function(l){return[a("Button",{on:{click:function(a){return e.handle(l)}}},[e._v("123")])]}}])})],1)],1)},s=[],i=(a("6d57"),a("06a2"),a("2aa3"),a("9d37")),o={name:"tree_table_page",data:function(){return{columns:[Object(i["a"])({title:"序号",key:"id",headerAlign:"center",align:"center",width:100},"align","center"),{title:"name",key:"name",headerAlign:"center",align:"center",minWidth:200},{title:"sex",key:"sex",headerAlign:"center",minWidth:50},{title:"score",key:"score",headerAlign:"center",align:"center",minWidth:50},{title:"likes",key:"likes",minWidth:200,type:"template",headerAlign:"center",align:"center",template:"likes"}],data:[{id:"1",name:"Jack",sex:"male",likes:["football","basketball"],score:10,children:[{id:"1-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{id:"1-1-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"1-1-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{id:"1-1-2-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"1-1-2-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{id:"1-1-2-2-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"1-1-2-2-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]}]},{id:"1-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{id:"2",name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{id:"2-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{id:"2-1-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"2-1-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{id:"2-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{id:"2-2-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"2-2-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]},{id:"3",name:"Tom",sex:"male",likes:["football","basketball"],score:20},{id:"4",name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{id:"4-1",name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{id:"4-2",name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}],selectedData_1:new Set}},methods:{handle:function(e){console.log(e,this.selectedData_1)},getCheckedProp:function(e){var l=this;try{this.selectedData_1.forEach((function(a){if(a.id==e.id)throw l.selectedData_1.delete(a),new Error("return")})),this.selectedData_1.add(e)}catch(a){console.log("取消掉了")}}}},n=o,c=a("5511"),r=Object(c["a"])(n,t,s,!1,null,null,null);l["default"]=r.exports}}]);