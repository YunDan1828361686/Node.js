(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7ecd234"],{"2f21":function(e,n,t){"use strict";var a=t("79e5");e.exports=function(e,n){return!!e&&a((function(){n?e.call(null,(function(){}),1):e.call(null)}))}},"55dd":function(e,n,t){"use strict";var a=t("5ca1"),i=t("d8e8"),o=t("4bf8"),r=t("79e5"),c=[].sort,l=[1,2,3];a(a.P+a.F*(r((function(){l.sort(void 0)}))||!r((function(){l.sort(null)}))||!t("2f21")(c)),"Array",{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),i(e))}})},bb25:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e._self._c;return n("CheckboxGroup",{on:{"on-change":e.CheckboxGroup_change},model:{value:e.fruit,callback:function(n){e.fruit=n},expression:"fruit"}},[n("Checkbox",{attrs:{label:"0"}},[e._v("Name")]),n("Checkbox",{attrs:{label:"1"}},[e._v("Age")]),n("Checkbox",{attrs:{label:"2"}},[e._v("Province")])],1)},i=[],o=(t("55dd"),{data:function(){return{fruit:["0","1","2"],columns2:[{title:"Name",key:"name",width:"120"},{title:"Age",key:"age",minWidth:130},{title:"Province",key:"province",minWidth:130}],columns2_:[{title:"Name",key:"name",width:"120"},{title:"Age",key:"age",minWidth:130},{title:"Province",key:"province",minWidth:130}],data3:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",province:"America",city:"New York",zip:1e5},{name:"Jim Green",age:24,address:"Washington, D.C. No. 1 Lake Park",province:"America",city:"Washington, D.C.",zip:1e5},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",province:"Australian",city:"Sydney",zip:1e5},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",province:"Canada",city:"Ottawa",zip:1e5}]}},methods:{CheckboxGroup_change:function(e){this.columns2=[],e.sort((function(e,n){return e-n}));for(var n=0;n<e.length;n++){var t=e[n];this.columns2.push(this.columns2_[t])}}}}),r=o,c=t("2877"),l=Object(c["a"])(r,a,i,!1,null,null,null);n["default"]=l.exports}}]);