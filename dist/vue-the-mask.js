(function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["VueTheMask"]=n():t["VueTheMask"]=n()})("undefined"!==typeof self?self:this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="34d8")}({"0503":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"1a21":function(t,n,e){var r,o,i,c=e("d38d"),u=e("549f"),a=e("4bf7"),f=e("4436"),s=e("2b0f"),l=s.process,p=s.setImmediate,v=s.clearImmediate,d=s.MessageChannel,h=s.Dispatch,m=0,y={},_="onreadystatechange",b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},g=function(t){b.call(t.data)};p&&v||(p=function(t){var n=[],e=1;while(arguments.length>e)n.push(arguments[e++]);return y[++m]=function(){u("function"==typeof t?t:Function(t),n)},r(m),m},v=function(t){delete y[t]},"process"==e("5a5f")(l)?r=function(t){l.nextTick(c(b,t,1))}:h&&h.now?r=function(t){h.now(c(b,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=g,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",g,!1)):r=_ in f("script")?function(t){a.appendChild(f("script"))[_]=function(){a.removeChild(this),b.call(t)}}:function(t){setTimeout(c(b,t,1),0)}),t.exports={set:p,clear:v}},"1a7f":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"1c70":function(t,n,e){var r=e("833a"),o=e("4906"),i=e("ac91");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t),c=e.resolve;return c(n),e.promise}},"1e2b":function(t,n,e){var r=e("2b0f"),o=e("7325"),i=e("62f8"),c=e("0503")("src"),u="toString",a=Function[u],f=(""+a).split(u);e("87f3").inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,c)||o(e,c,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,u,function(){return"function"==typeof this&&this[c]||a.call(this)})},2621:function(t,n,e){var r=e("c203"),o=e("4175")("iterator"),i=e("f71d");t.exports=e("87f3").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},2631:function(t,n,e){"use strict";var r=e("3f3e");t.exports=function(t,n){return!!t&&r(function(){n?t.call(null,function(){},1):t.call(null)})}},"27a3":function(t,n,e){var r=e("2b0f"),o=e("1a21").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e("5a5f")(c);t.exports=function(){var t,n,e,f=function(){var r,o;a&&(r=c.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var s=u.resolve(void 0);e=function(){s.then(f)}}else e=function(){o.call(r,f)};else{var l=!0,p=document.createTextNode("");new i(f).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},"2b0f":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"2bf5":function(t,n,e){var r=e("2b0f"),o=r.navigator;t.exports=o&&o.userAgent||""},"2df0":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"34d8":function(t,n,e){"use strict";var r;(e.r(n),"undefined"!==typeof window)&&((r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js$/))&&(e.p=r[1]));e("6fb8"),e("4fc4");var o={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}};function i(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0;t=t||"",n=n||"";var o,i=0,c=0,u="";while(i<n.length&&c<t.length){o=n[i];var a=r[o],f=t[c];a&&!a.escape?(a.pattern.test(f)&&(u+=a.transform?a.transform(f):f,i++),c++):(a&&a.escape&&(i++,o=n[i]),e&&(u+=o),f===o&&c++,i++)}var s="";while(i<n.length&&e){if(o=n[i],r[o]){s="";break}s+=o,i++}return u+s}e("381f");function c(t,n,e){return n=n.sort(function(t,n){return t.length-n.length}),function(r,o){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;while(c<n.length){var u=n[c];c++;var a=n[c];if(!(a&&t(r,a,!0,e).length>u.length))return t(r,u,i,e)}return""}}var u=function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0;return n?Array.isArray(n)?c(i,n,r)(t,n,e,r):i(t,n,e,r):t};function a(t){var n=document.createEvent("Event");return n.initEvent(t,!0,!0),n}var f=function(t,n){var e=n.value||{};if((Array.isArray(e)||"string"===typeof e)&&(e={mask:e,tokens:o}),"INPUT"!==t.tagName.toLocaleUpperCase()){var r=t.getElementsByTagName("input");if(1!==r.length)throw new Error("v-mask directive requires 1 input, found "+r.length);t=r[0]}t.oninput=function(n){if(n.isTrusted){var r=t.selectionEnd,o=t.value[r-1];t.value=u(t.value,e.mask,!0,e.tokens);while(r<t.value.length&&t.value.charAt(r-1)!==o)r++;t===document.activeElement&&(t.setSelectionRange(r,r),setTimeout(function(){t.setSelectionRange(r,r)},0)),t.dispatchEvent(a("input"))}};var i=u(t.value,e.mask,!0,e.tokens);i!==t.value&&(t.value=i,t.dispatchEvent(a("input")))},s={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o}}},directives:{mask:f},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;var n=u(t,this.mask,this.masked,this.tokens);n!==this.lastValue&&(this.lastValue=n,this.$emit("input",n))}}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},p=[];function v(t,n,e,r,o,i,c,u){t=t||{};var a=typeof t.default;"object"!==a&&"function"!==a||(t=t.default);var f,s="function"===typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId=i),c?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(s.functional){s._injectStyles=f;var l=s.render;s.render=function(t,n){return f.call(n),l(t,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:s}}var d=!1,h=null,m=null,y=null,_=v(s,l,p,d,h,m,y),b=_.exports;function g(t){t.component(b.name,b),t.directive("mask",f)}var x=g;"undefined"!==typeof window&&window.Vue&&window.Vue.use(g),e.d(n,"TheMask",function(){return b}),e.d(n,"mask",function(){return f}),e.d(n,"tokens",function(){return o});n["default"]=x},"381f":function(t,n,e){"use strict";var r=e("b91d"),o=e("2df0"),i=e("a367"),c=e("3f3e"),u=[].sort,a=[1,2,3];r(r.P+r.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!e("2631")(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"3f3e":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4175:function(t,n,e){var r=e("7ae6")("wks"),o=e("0503"),i=e("2b0f").Symbol,c="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};u.store=r},4436:function(t,n,e){var r=e("4906"),o=e("2b0f").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"46a4":function(t,n,e){var r=e("833a"),o=e("e41e"),i=e("994d"),c=Object.defineProperty;n.f=e("74a4")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},4740:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},4906:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"4bf7":function(t,n,e){var r=e("2b0f").document;t.exports=r&&r.documentElement},"4fc4":function(t,n,e){"use strict";var r,o,i,c,u=e("5d5e"),a=e("2b0f"),f=e("d38d"),s=e("c203"),l=e("b91d"),p=e("4906"),v=e("2df0"),d=e("fabb"),h=e("9e61"),m=e("c045"),y=e("1a21").set,_=e("27a3")(),b=e("ac91"),g=e("972a"),x=e("2bf5"),w=e("1c70"),j="Promise",k=a.TypeError,S=a.process,E=S&&S.versions,T=E&&E.v8||"",O=a[j],P="process"==s(S),M=function(){},A=o=b.f,C=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[e("4175")("species")]=function(t){t(M,M)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof n&&0!==T.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{u?(o||(2==t._h&&V(t),t._h=1),!0===u?e=r:(s&&s.enter(),e=u(r),s&&(s.exit(),c=!0)),e===n.promise?f(k("Promise-chain cycle")):(i=F(e))?i.call(e,a,f):a(e)):f(r)}catch(t){s&&!c&&s.exit(),f(t)}};while(e.length>i)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&N(t)})}},N=function(t){y.call(a,function(){var n,e,r,o=t._v,i=U(t);if(i&&(n=g(function(){P?S.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=P||U(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},U=function(t){return 1!==t._h&&0===(t._a||t._c).length},V=function(t){y.call(a,function(){var n;P?S.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},$=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw k("Promise can't be resolved itself");(n=F(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,f(I,r,1),f($,r,1))}catch(t){$.call(r,t)}}):(e._v=t,e._s=1,R(e,!1))}catch(t){$.call({_w:e,_d:!1},t)}}};C||(O=function(t){d(this,O,j,"_h"),v(t),r.call(this);try{t(f(I,this,1),f($,this,1))}catch(t){$.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e("c977")(O.prototype,{then:function(t,n){var e=A(m(this,O));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=P?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(I,t,1),this.reject=f($,t,1)},b.f=A=function(t){return t===O||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:O}),e("edba")(O,j),e("bb63")(j),c=e("87f3")[j],l(l.S+l.F*!C,j,{reject:function(t){var n=A(this),e=n.reject;return e(t),n.promise}}),l(l.S+l.F*(u||!C),j,{resolve:function(t){return w(u&&this===c?O:this,t)}}),l(l.S+l.F*!(C&&e("8f92")(function(t){O.all(t)["catch"](M)})),j,{all:function(t){var n=this,e=A(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=A(n),r=e.reject,o=g(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},"549f":function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},"5a5f":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"5d5e":function(t,n){t.exports=!1},"62f8":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"6fb8":function(t,n,e){var r=e("46a4").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in o||e("74a4")&&r(o,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},7325:function(t,n,e){var r=e("46a4"),o=e("1a7f");t.exports=e("74a4")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"74a4":function(t,n,e){t.exports=!e("3f3e")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},7730:function(t,n,e){var r=e("f74a"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"7ae6":function(t,n,e){var r=e("87f3"),o=e("2b0f"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("5d5e")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"833a":function(t,n,e){var r=e("4906");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"87f3":function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},"8f92":function(t,n,e){var r=e("4175")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},"8fc8":function(t,n,e){var r=e("f71d"),o=e("4175")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"972a":function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"994d":function(t,n,e){var r=e("4906");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"9e61":function(t,n,e){var r=e("d38d"),o=e("fe05"),i=e("8fc8"),c=e("833a"),u=e("7730"),a=e("2621"),f={},s={};n=t.exports=function(t,n,e,l,p){var v,d,h,m,y=p?function(){return t}:a(t),_=r(e,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=u(t.length);v>b;b++)if(m=n?_(c(d=t[b])[0],d[1]):_(t[b]),m===f||m===s)return m}else for(h=y.call(t);!(d=h.next()).done;)if(m=o(h,_,d.value,n),m===f||m===s)return m};n.BREAK=f,n.RETURN=s},a367:function(t,n,e){var r=e("4740");t.exports=function(t){return Object(r(t))}},ac91:function(t,n,e){"use strict";var r=e("2df0");function o(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},b91d:function(t,n,e){var r=e("2b0f"),o=e("87f3"),i=e("7325"),c=e("1e2b"),u=e("d38d"),a="prototype",f=function(t,n,e){var s,l,p,v,d=t&f.F,h=t&f.G,m=t&f.S,y=t&f.P,_=t&f.B,b=h?r:m?r[n]||(r[n]={}):(r[n]||{})[a],g=h?o:o[n]||(o[n]={}),x=g[a]||(g[a]={});for(s in h&&(e=n),e)l=!d&&b&&void 0!==b[s],p=(l?b:e)[s],v=_&&l?u(p,r):y&&"function"==typeof p?u(Function.call,p):p,b&&c(b,s,p,t&f.U),g[s]!=p&&i(g,s,v),y&&x[s]!=p&&(x[s]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},bb63:function(t,n,e){"use strict";var r=e("2b0f"),o=e("46a4"),i=e("74a4"),c=e("4175")("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},c045:function(t,n,e){var r=e("833a"),o=e("2df0"),i=e("4175")("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},c203:function(t,n,e){var r=e("5a5f"),o=e("4175")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},c977:function(t,n,e){var r=e("1e2b");t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},d38d:function(t,n,e){var r=e("2df0");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},e41e:function(t,n,e){t.exports=!e("74a4")&&!e("3f3e")(function(){return 7!=Object.defineProperty(e("4436")("div"),"a",{get:function(){return 7}}).a})},edba:function(t,n,e){var r=e("46a4").f,o=e("62f8"),i=e("4175")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},f71d:function(t,n){t.exports={}},f74a:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},fabb:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},fe05:function(t,n,e){var r=e("833a");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t["return"];throw void 0!==i&&r(i.call(t)),n}}}})});