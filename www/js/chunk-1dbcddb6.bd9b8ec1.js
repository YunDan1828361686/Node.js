(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dbcddb6"],{"16e0":function(t,a,n){},"4d18":function(t,a,n){"use strict";n("b8e7")},"57f2":function(t,a,n){var s,e;!function(o,i){s=i,e="function"===typeof s?s.call(a,n,a,t):s,void 0===e||(t.exports=e)}(0,(function(t,a,n){var s=function(t,a,n,s,e,o){for(var i=0,l=["webkit","moz","ms","o"],r=0;r<l.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[l[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[r]+"CancelAnimationFrame"]||window[l[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var n=(new Date).getTime(),s=Math.max(0,16-(n-i)),e=window.setTimeout((function(){t(n+s)}),s);return i=n+s,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var u=this;for(var c in u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},o)o.hasOwnProperty(c)&&(u.options[c]=o[c]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof t?document.getElementById(t):t,u.startVal=Number(a),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,s||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(e)||2e3,u.formatNumber=function(t){var a,n,s,e;if(t=t.toFixed(u.decimals),t+="",a=t.split("."),n=a[0],s=a.length>1?u.options.decimal+a[1]:"",e=/(\d+)(\d{3})/,u.options.useGrouping)for(;e.test(n);)n=n.replace(e,"$1"+u.options.separator+"$2");return u.options.prefix+n+s+u.options.suffix},u.easeOutExpo=function(t,a,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+a},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(t){var a=u.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=a:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=a:this.d.innerHTML=a},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var a=t-u.startTime;u.remaining=u.duration-a,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(a,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(a,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(a/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(a/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),a<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){return u.callback=t,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=a,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(t){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(t),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};return s}))},"5b17":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("Row",{attrs:{gutter:14}},[a("i-col",{attrs:{span:"3"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"waterdrop"}}),t._v("\n          count-to组件基础用法\n        ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{end:2534}})],1)])],1)],1),a("i-col",{staticClass:"padding-left-10",attrs:{span:"5"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"code"}}),t._v("\n            可添加左右文字\n          ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{end:2534}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"paintbucket"}}),t._v("\n            自定义样式\n          ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"settings"}}),t._v("\n            设置数据格式\n          ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{end:2534,"count-class":"count-text","unit-class":"unit-class",decimals:2}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1),a("Row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v("\n          转换单位简化数据\n        ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{simplify:!0,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-shuffle-strong"}}),t._v("\n          自定义单位\n        ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{simplify:!0,unit:t.unit,end:253,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：253 => ")])]),a("count-to",{attrs:{simplify:!0,unit:t.unit,end:2534,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：2534 => ")])]),a("count-to",{attrs:{simplify:!0,unit:t.unit,end:257678,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：257678 => ")])])],1)])],1)],1),a("i-col",{staticClass:"padding-left-10",attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"android-stopwatch"}}),t._v("\n          可异步更新数据\n        ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{end:t.asynEndVal,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1),a("Row",{staticStyle:{"margin-top":"14px"},attrs:{gutter:14}},[a("i-col",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n          综合实例\n        ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{delay:500,simplify:!0,unit:t.unit2,end:t.integratedEndVal,"count-class":"count-text","unit-class":"unit-class"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1)],1)},e=[],o=n("9349"),i={name:"count_to_page",components:{CountTo:o["a"]},data:function(){return{end:0,unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval((function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())}),2e3)}},mounted:function(){this.init()}},l=i,r=(n("4d18"),n("2877")),u=Object(r["a"])(l,s,e,!1,null,null,null);a["default"]=u.exports},9349:function(t,a,n){"use strict";var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"count-to-wrapper"},[t._t("left"),a("p",{staticClass:"content-outer"},[a("span",{class:["count-to-count-text",t.countClass],attrs:{id:t.counterId}},[t._v(t._s(t.init))]),a("i",{class:["count-to-unit-text",t.unitClass]},[t._v(t._s(t.unitText))])]),t._t("right")],2)},e=[],o=(n("c5f6"),n("57f2")),i=n.n(o),l=(n("16e0"),{name:"CountTo",props:{init:{type:Number,default:0},startVal:{type:Number,default:0},end:{type:Number,required:!0},decimals:{type:Number,default:0},decimal:{type:String,default:"."},duration:{type:Number,default:2},delay:{type:Number,default:0},uneasing:{type:Boolean,default:!1},usegroup:{type:Boolean,default:!1},separator:{type:String,default:","},simplify:{type:Boolean,default:!1},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}},countClass:{type:String,default:""},unitClass:{type:String,default:""}},data:function(){return{counter:null,unitText:""}},computed:{counterId:function(){return"count_to_".concat(this._uid)}},methods:{getHandleVal:function(t,a){return{endVal:parseInt(t/Math.pow(10,this.unit[a-1][0])),unitText:this.unit[a-1][1]}},transformValue:function(t){var a=this.unit.length,n={endVal:0,unitText:""};if(t<Math.pow(10,this.unit[0][0]))n.endVal=t;else for(var s=1;s<a;s++)t>=Math.pow(10,this.unit[s-1][0])&&t<Math.pow(10,this.unit[s][0])&&(n=this.getHandleVal(t,s));return t>Math.pow(10,this.unit[a-1][0])&&(n=this.getHandleVal(t,a)),n},getValue:function(t){var a=0;if(this.simplify){var n=this.transformValue(t),s=n.endVal,e=n.unitText;this.unitText=e,a=s}else a=t;return a}},mounted:function(){var t=this;this.$nextTick((function(){var a=t.getValue(t.end);t.counter=new i.a(t.counterId,t.startVal,a,t.decimals,t.duration,{useEasing:!t.uneasing,useGrouping:t.useGroup,separator:t.separator,decimal:t.decimal}),setTimeout((function(){t.counter.error||t.counter.start()}),t.delay)}))},watch:{end:function(t){var a=this.getValue(t);this.counter.update(a)}}}),r=l,u=n("2877"),c=Object(u["a"])(r,s,e,!1,null,null,null),d=c.exports;a["a"]=d},b8e7:function(t,a,n){}}]);