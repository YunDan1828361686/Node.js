(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2190980d"],{"4ce2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div")},o=[];n("ac6a"),n("5df3"),n("96cf");function i(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}var c={name:"Promise",data:function(){return{list:[1,2,3]}},methods:{getload:function(t,e){return new Promise((function(e,n){setTimeout((function(){console.log(2),e(2+t)}),1e3)}))},loadData:function(){var t=a(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<this.list)){t.next=8;break}return n=this.list[e],t.next=5,this.getload(n,e).then((function(t){console.log(t)}));case 5:e++,t.next=1;break;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this,e=this;function n(){return r.apply(this,arguments)}function r(){return r=a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$axios("/node2/test1","post").then((function(t){var e=t.data;return e})));case 1:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}function o(){return i.apply(this,arguments)}function i(){return i=a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$axios("/node2/test2","post").then((function(t){var e=t.data;return e})));case 1:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function c(){return u.apply(this,arguments)}function u(){return u=a(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("前面"),t.next=3,n();case 3:return e=t.sent,t.next=6,o();case 6:r=t.sent,console.log(e),console.log(r),console.log("后面");case 10:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}c();var s=new Promise((function(e,n){t.$axios("/node2/test1","post").then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))})),f=new Promise((function(e,n){t.$axios("/node2/test2","post").then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}));Promise.all([s,f]).then((function(t){var e=t[0],n=t[1];console.log(e,n)}));var l=new Promise((function(t,e){request({url:"datas/dsDataSource/countSourcesNum",method:"post"}).then((function(e){t(e.data)})).catch((function(t){e(t.data)}))})),h=new Promise((function(t,e){request({url:"datas/dsTransferJobLog/queryListCurrentDay",method:"post"}).then((function(e){t(e.data)})).catch((function(t){e(t.data)}))}));function p(){return new Promise((function(t,e){setTimeout((function(){console.log(1),t(1)}),1e3)}))}function v(t){return new Promise((function(e,n){setTimeout((function(){console.log(2),e(2+t)}),1e3)}))}function d(){return y.apply(this,arguments)}function y(){return y=a(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:return e=t.sent,t.next=6,v(e);case 6:return n=t.sent,t.abrupt("return",e+n+"resolve");case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0+"reject");case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),y.apply(this,arguments)}Promise.all([l,h].map((function(t){return t.then((function(e){return t})).catch((function(t){return"0"}))}))).then((function(t){var e=t[0],n=t[1];console.log(e,n)})).catch((function(t){console.log(t)})),d().then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}},u=c,s=n("2877"),f=Object(s["a"])(u,r,o,!1,null,"1dc3e69f",null);e["default"]=f.exports},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&r.call(L,a)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;function a(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}o(this,"_invoke",{value:a})}function _(t,e,n){var r=h;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return G()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function j(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=l(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},P(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){while(n.length){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);