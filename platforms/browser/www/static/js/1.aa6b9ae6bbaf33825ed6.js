webpackJsonp([1],{"0CRY":function(t,e){},DbHP:function(t,e,n){t.exports=n.p+"static/img/start_1.ead5767.jpg"},I0MY:function(t,e,n){(function(e){"use strict";function n(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];for(var i=0;i<e.length;i++)for(var s=e[i],o=Object.keys(s),r=0;r<o.length;r++){var a=o[r];t[a]=s[a]}return t}function i(){return{type:Object,default:function(){return{}}}}e="default"in e?e.default:e;var s=["up","down","left","right","horizontal","vertical","all"];var o={},r={},a=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown","pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","press","pressup","rotate","rotatestart","rotatemove","rotateend","rotatecancel","swipe","swipeleft","swiperight","swipeup","swipedown","tap"],c={pan:"pan",panstart:"pan",panmove:"pan",panend:"pan",pancancel:"pan",panleft:"pan",panright:"pan",panup:"pan",pandown:"pan",pinch:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",pinchin:"pinch",pinchout:"pinch",press:"press",pressup:"press",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe",tap:"tap"},h={props:{options:i(),tapOptions:i(),panOptions:i(),pinchOptions:i(),pressOptions:i(),rotateOptions:i(),swipeOptions:i(),tag:{type:String,default:"div"},enabled:{default:!0,type:[Boolean,Object]}},mounted:function(){this.$isServer||(this.hammer=new e.Manager(this.$el,this.options),this.recognizers={},this.setupBuiltinRecognizers(),this.setupCustomRecognizers(),this.updateEnabled(this.enabled))},destroyed:function(){this.$isServer||this.hammer.destroy()},watch:{enabled:{deep:!0,handler:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];(t=this).updateEnabled.apply(t,e)}}},methods:{setupBuiltinRecognizers:function(){for(var t=0;t<a.length;t++){var e=a[t];if(this._events[e]){var i=c[e],s=n({},o[i]||{},this[i+"Options"]);this.addRecognizer(i,s),this.addEvent(e)}}},setupCustomRecognizers:function(){for(var t=Object.keys(r),e=0;e<t.length;e++){var i=t[e];if(this._events[i]){var s=n({},r[i],this[i+"Options"]||{});this.addRecognizer(i,s,{mainGesture:s.type}),this.addEvent(i)}}},addRecognizer:function(t,n,i){void 0===i&&(i={});var o,r=i.mainGesture;if(!this.recognizers[t]){var a=new(e[(o=r||t,o.charAt(0).toUpperCase()+o.slice(1))])(function(t){var n=t.direction;if("string"==typeof n){var i="DIRECTION_"+n.toUpperCase();s.indexOf(n)>-1&&e.hasOwnProperty(i)?t.direction=e[i]:console.warn("[vue-touch] invalid direction: "+n)}return t}(n));this.recognizers[t]=a,this.hammer.add(a),a.recognizeWith(this.hammer.recognizers)}},addEvent:function(t){var e=this;this.hammer.on(t,function(n){return e.$emit(t,n)})},updateEnabled:function(t,e){if(!0===t)this.enableAll();else if(!1===t)this.disableAll();else if("object"==typeof t)for(var n=Object.keys(t),i=0;i<n.length;i++){var s=n[i];this.recognizers[s]&&(t[s]?this.enable(s):this.disable(s))}},enable:function(t){var e=this.recognizers[t];e.options.enable||e.set({enable:!0})},disable:function(t){var e=this.recognizers[t];e.options.enable&&e.set({enable:!1})},toggle:function(t){var e=this.recognizers[t];e&&(e.options.enable?this.disable(t):this.enable(t))},enableAll:function(t){this.toggleAll({enable:!0})},disableAll:function(t){this.toggleAll({enable:!1})},toggleAll:function(t){for(var e=t.enable,n=Object.keys(this.recognizers),i=0;i<n.length;i++){var s=this.recognizers[n[i]];s.options.enable!==e&&s.set({enable:e})}},isEnabled:function(t){return this.recognizers[t]&&this.recognizers[t].options.enable}},render:function(t){return t(this.tag,{},this.$slots.default)}},u=!1,l={config:o,customEvents:r};l.install=function(t,e){void 0===e&&(e={});var i=e.name||"v-touch";t.component(i,n(h,{name:i})),u=!0}.bind(l),l.registerCustomEvent=function(t,e){void 0===e&&(e={}),u?console.warn("\n      [vue-touch]: Custom Event '"+t+"' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "):(e.event=t,r[t]=e,h.props[t+"Options"]={type:Object,default:function(){return{}}})}.bind(l),l.component=h,t.exports=l})(n("rxKx"))},QA4S:function(t,e){},b2Lv:function(t,e){},hEN5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("I0MY");var i={data:function(){return{searchVal:"",preArr:["1","2","3","4","5"]}},methods:{closePop:function(){this.$emit("hideSearchPop")},search:function(){console.log(this.searchVal)}},mounted:function(){}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchPop"},[n("div",{staticClass:"mint-search"},[n("div",{staticClass:"mint-searchbar"},[n("div",{staticClass:"mint-searchbar-inner"},[n("i",{staticClass:"mintui back-icon",on:{click:t.closePop}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],ref:"input",staticClass:"mint-searchbar-core",attrs:{type:"search",placeholder:"奔跑吧！少年"},domProps:{value:t.searchVal},on:{click:function(e){t.visible=!0},input:function(e){e.target.composing||(t.searchVal=e.target.value)}}}),t._v(" "),n("i",{staticClass:"mintui mintui-search",on:{click:t.search}})])])]),t._v(" "),n("div",{staticClass:"searchHis"},[n("div",{staticClass:"searchHis-title"},[t._v("搜索记录")]),t._v(" "),n("div",{staticClass:"searchHisListBox"},t._l(10,function(e){return n("div",{staticClass:"searchHisItem"},[t._v("\n        勇敢的心\n      ")])}))])])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("0CRY")},null,null).exports,r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activity"},[t.datalist?n("div",{staticClass:"actItemList"},t._l(t.datalist,function(e,i){return n("div",{key:i,staticClass:"actItem"},[t._m(0,!0),t._v(" "),t._m(1,!0)])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"actItem-top"},[e("img",{attrs:{src:n("DbHP")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"actItem-bottom"},[e("span",[this._v("运动吧！少年")])])}]};var a=n("VU/8")({data:function(){return{}},props:{datalist:null}},r,!1,function(t){n("b2Lv")},null,null).exports,c={components:{homeHeader:n("AbIv").a,searchPop:o,activity:a},data:function(){return{active:"0",isTop:!1,list:[],allLoaded:!1,bottomStatus:"",topStatus:"",translate:0,moveTranslate:0,showUserPop:!1,showSearchPop:!1}},methods:{handleBottomChange:function(t){this.bottomStatus=t},loadBottom:function(){var t=this;setTimeout(function(){var e=t.list[t.list.length-1];if(e<30)for(var n=1;n<=10;n++)t.list.push(e+n);else t.allLoaded=!0;t.$refs.loadmore.onBottomLoaded()},1500)},handleTopChange:function(t){this.moveTranslate=1,this.topStatus=t},translateChange:function(t){var e=+t;this.translate=e.toFixed(2),this.moveTranslate=(1+e/70).toFixed(2)},loadTop:function(){var t=this;setTimeout(function(){for(var e=t.list[0],n=1;n<=20;n++)t.list.unshift(e-n);t.$refs.loadmore.onTopLoaded()},1500)},handleUserPop:function(){this.showUserPop=!0},hideUserPop:function(){this.showUserPop=!1},handleSearchPop:function(){this.showSearchPop=!0},hideSearchPop:function(){this.showSearchPop=!1},tapHandle:function(t,e,n){}},watch:{},mounted:function(){var t,e,n;t=document.querySelector(".home-container"),e=document.querySelector(".home-tabbar"),n=e.offsetTop,t.addEventListener("scroll",function(){t.scrollTop>=n?e.classList.add("fixed"):e.classList.remove("fixed")})},created:function(){for(var t=1;t<=10;t++)this.list.push(t)}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{ref:"container",staticClass:"home-container"},[i("statu-bar"),t._v(" "),i("home-header",[i("div",{staticClass:"search-box",attrs:{slot:"right"},on:{click:function(e){t.handleSearchPop()}},slot:"right"},[i("img",{attrs:{src:n("GY9m")}})])]),t._v(" "),i("div",{staticClass:"home-tabbar"},[i("mt-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("mt-tab-item",{attrs:{id:"0"}},[t._v("\n          热门\n        ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"1"}},[t._v("\n          校内\n        ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"}},[t._v("\n          校外\n        ")])],1)],1),t._v(" "),i("div",{staticClass:"home-tab"},[i("div",{staticClass:"home-tab-container"},[i("mt-tab-container",{staticClass:"page-tabbar-tab-container",attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("mt-tab-container-item",{attrs:{id:"0"}},[i("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded},on:{"translate-change":t.translateChange,"top-status-change":t.handleTopChange,"bottom-status-change":t.handleBottomChange}},[i("activity",{attrs:{datalist:t.list}}),t._v(" "),i("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[i("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.allLoaded,expression:"!allLoaded"}],staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.bottomStatus,expression:"bottomStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.bottomStatus}},[t._v("↑")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[i("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.allLoaded,expression:"allLoaded"}],staticClass:"bottomTip",attrs:{slot:"bottom"},slot:"bottom"},[i("span",{staticClass:"bottomTip-line"}),i("span",{staticClass:"bottomTip-text"},[t._v("我也是有底线的！！")]),i("span",{staticClass:"bottomTip-line"})])],1)],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"1"}},[t._v("\n            热门\n          ")]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"2"}})],1)],1)])],1),t._v(" "),i("mt-popup",{staticClass:"searchPop",attrs:{position:"right",modal:!1,"popup-transition":"popup-slide"},model:{value:t.showSearchPop,callback:function(e){t.showSearchPop=e},expression:"showSearchPop"}},[i("search-pop",{directives:[{name:"touch",rawName:"v-touch:tap",value:t.tapHandle,expression:"tapHandle",arg:"tap"}],on:{hideSearchPop:t.hideSearchPop}})],1)],1)},staticRenderFns:[]};var u=n("VU/8")(c,h,!1,function(t){n("QA4S")},null,null);e.default=u.exports},rxKx:function(t,e,n){var i;!function(s,o,r,a){"use strict";var c,h=["","webkit","Moz","MS","ms","o"],u=o.createElement("div"),l="function",p=Math.round,d=Math.abs,f=Date.now;function v(t,e,n){return setTimeout(w(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(g(t,n[e],n),!0)}function g(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=s.console&&(s.console.warn||s.console.log);return o&&o.call(s.console,i,n),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var T=y(function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)(!n||n&&t[i[s]]===a)&&(t[i[s]]=e[i[s]]),s++;return t},"extend","Use `assign`."),b=y(function(t,e){return T(t,e,!0)},"merge","Use `assign`.");function E(t,e,n){var i,s=e.prototype;(i=t.prototype=Object.create(s)).constructor=t,i._super=s,n&&c(i,n)}function w(t,e){return function(){return t.apply(e,arguments)}}function _(t,e){return typeof t==l?t.apply(e&&e[0]||a,e):t}function C(t,e){return t===a?e:t}function S(t,e,n){g(A(e),function(e){t.addEventListener(e,n,!1)})}function P(t,e,n){g(A(e),function(e){t.removeEventListener(e,n,!1)})}function x(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function I(t,e){return t.indexOf(e)>-1}function A(t){return t.trim().split(/\s+/g)}function O(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function z(t){return Array.prototype.slice.call(t,0)}function R(t,e,n){for(var i=[],s=[],o=0;o<t.length;){var r=e?t[o][e]:t[o];O(s,r)<0&&i.push(t[o]),s[o]=r,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function D(t,e){for(var n,i,s=e[0].toUpperCase()+e.slice(1),o=0;o<h.length;){if((i=(n=h[o])?n+s:e)in t)return i;o++}return a}var N=1;function M(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var k="ontouchstart"in s,L=D(s,"PointerEvent")!==a,Y=k&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),F=25,X=1,H=2,U=4,V=8,j=1,q=2,W=4,$=8,B=16,G=q|W,Z=$|B,K=G|Z,Q=["x","y"],J=["clientX","clientY"];function tt(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){_(t.options.enable,[t])&&n.handler(e)},this.init()}function et(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,o=e&X&&i-s==0,r=e&(U|V)&&i-s==0;n.isFirst=!!o,n.isFinal=!!r,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=nt(e));s>1&&!n.firstMultiple?n.firstMultiple=nt(e):1===s&&(n.firstMultiple=!1);var o=n.firstInput,r=n.firstMultiple,c=r?r.center:o.center,h=e.center=it(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=at(c,h),e.distance=rt(c,h),function(t,e){var n=e.center,i=t.offsetDelta||{},s=t.prevDelta||{},o=t.prevInput||{};e.eventType!==X&&o.eventType!==U||(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)}(n,e),e.offsetDirection=ot(e.deltaX,e.deltaY);var u=st(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=d(u.x)>d(u.y)?u.x:u.y,e.scale=r?(l=r.pointers,p=i,rt(p[0],p[1],J)/rt(l[0],l[1],J)):1,e.rotation=r?function(t,e){return at(e[1],e[0],J)+at(t[1],t[0],J)}(r.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,s,o,r=t.lastInterval||e,c=e.timeStamp-r.timeStamp;if(e.eventType!=V&&(c>F||r.velocity===a)){var h=e.deltaX-r.deltaX,u=e.deltaY-r.deltaY,l=st(c,h,u);i=l.x,s=l.y,n=d(l.x)>d(l.y)?l.x:l.y,o=ot(h,u),t.lastInterval=e}else n=r.velocity,i=r.velocityX,s=r.velocityY,o=r.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=o}(n,e);var l,p;var v=t.element;x(e.srcEvent.target,v)&&(v=e.srcEvent.target);e.target=v}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function nt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:e,center:it(e),deltaX:t.deltaX,deltaY:t.deltaY}}function it(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,s=0;s<e;)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:p(n/e),y:p(i/e)}}function st(t,e,n){return{x:e/t||0,y:n/t||0}}function ot(t,e){return t===e?j:d(t)>=d(e)?t<0?q:W:e<0?$:B}function rt(t,e,n){n||(n=Q);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return Math.sqrt(i*i+s*s)}function at(t,e,n){n||(n=Q);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return 180*Math.atan2(s,i)/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(M(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&P(this.element,this.evEl,this.domHandler),this.evTarget&&P(this.target,this.evTarget,this.domHandler),this.evWin&&P(M(this.element),this.evWin,this.domHandler)}};var ct={mousedown:X,mousemove:H,mouseup:U},ht="mousedown",ut="mousemove mouseup";function lt(){this.evEl=ht,this.evWin=ut,this.pressed=!1,tt.apply(this,arguments)}E(lt,tt,{handler:function(t){var e=ct[t.type];e&X&&0===t.button&&(this.pressed=!0),e&H&&1!==t.which&&(e=U),this.pressed&&(e&U&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:X,pointermove:H,pointerup:U,pointercancel:V,pointerout:V},dt={2:"touch",3:"pen",4:"mouse",5:"kinect"},ft="pointerdown",vt="pointermove pointerup pointercancel";function mt(){this.evEl=ft,this.evWin=vt,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(ft="MSPointerDown",vt="MSPointerMove MSPointerUp MSPointerCancel"),E(mt,tt,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=pt[i],o=dt[t.pointerType]||t.pointerType,r="touch"==o,a=O(e,t.pointerId,"pointerId");s&X&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):s&(U|V)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var gt={touchstart:X,touchmove:H,touchend:U,touchcancel:V},yt="touchstart",Tt="touchstart touchmove touchend touchcancel";function bt(){this.evTarget=yt,this.evWin=Tt,this.started=!1,tt.apply(this,arguments)}E(bt,tt,{handler:function(t){var e=gt[t.type];if(e===X&&(this.started=!0),this.started){var n=function(t,e){var n=z(t.touches),i=z(t.changedTouches);e&(U|V)&&(n=R(n.concat(i),"identifier",!0));return[n,i]}.call(this,t,e);e&(U|V)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Et={touchstart:X,touchmove:H,touchend:U,touchcancel:V},wt="touchstart touchmove touchend touchcancel";function _t(){this.evTarget=wt,this.targetIds={},tt.apply(this,arguments)}E(_t,tt,{handler:function(t){var e=Et[t.type],n=function(t,e){var n=z(t.touches),i=this.targetIds;if(e&(X|H)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,o,r=z(t.changedTouches),a=[],c=this.target;if(o=n.filter(function(t){return x(t.target,c)}),e===X)for(s=0;s<o.length;)i[o[s].identifier]=!0,s++;s=0;for(;s<r.length;)i[r[s].identifier]&&a.push(r[s]),e&(U|V)&&delete i[r[s].identifier],s++;if(!a.length)return;return[R(o.concat(a),"identifier",!0),a]}.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var Ct=2500,St=25;function Pt(){tt.apply(this,arguments);var t=w(this.handler,this);this.touch=new _t(this.manager,t),this.mouse=new lt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function xt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)},Ct)}}E(Pt,tt,{handler:function(t,e,n){var i="touch"==n.pointerType,s="mouse"==n.pointerType;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)(function(t,e){t&X?(this.primaryTouch=e.changedPointers[0].identifier,xt.call(this,e)):t&(U|V)&&xt.call(this,e)}).call(this,e,n);else if(s&&function(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],o=Math.abs(e-s.x),r=Math.abs(n-s.y);if(o<=St&&r<=St)return!0}return!1}.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var It=D(u.style,"touchAction"),At=It!==a,Ot="auto",zt="manipulation",Rt="none",Dt="pan-x",Nt="pan-y",Mt=function(){if(!At)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||s.CSS.supports("touch-action",n)}),t}();function kt(t,e){this.manager=t,this.set(e)}kt.prototype={set:function(t){"compute"==t&&(t=this.compute()),At&&this.manager.element.style&&Mt[t]&&(this.manager.element.style[It]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,function(e){_(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(I(t,Rt))return Rt;var e=I(t,Dt),n=I(t,Nt);if(e&&n)return Rt;if(e||n)return e?Dt:Nt;if(I(t,zt))return zt;return Ot}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,s=I(i,Rt)&&!Mt[Rt],o=I(i,Nt)&&!Mt[Nt],r=I(i,Dt)&&!Mt[Dt];if(s){var a=1===t.pointers.length,c=t.distance<2,h=t.deltaTime<250;if(a&&c&&h)return}if(!r||!o)return s||o&&n&G||r&&n&Z?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Lt=1,Yt=2,Ft=4,Xt=8,Ht=Xt,Ut=16;function Vt(t){this.options=c({},this.defaults,t||{}),this.id=N++,this.manager=null,this.options.enable=C(this.options.enable,!0),this.state=Lt,this.simultaneous={},this.requireFail=[]}function jt(t){return t&Ut?"cancel":t&Xt?"end":t&Ft?"move":t&Yt?"start":""}function qt(t){return t==B?"down":t==$?"up":t==q?"left":t==W?"right":""}function Wt(t,e){var n=e.manager;return n?n.get(t):t}function $t(){Vt.apply(this,arguments)}function Bt(){$t.apply(this,arguments),this.pX=null,this.pY=null}function Gt(){$t.apply(this,arguments)}function Zt(){Vt.apply(this,arguments),this._timer=null,this._input=null}function Kt(){$t.apply(this,arguments)}function Qt(){$t.apply(this,arguments)}function Jt(){Vt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function te(t,e){return(e=e||{}).recognizers=C(e.recognizers,te.defaults.preset),new ee(t,e)}Vt.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Wt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)?this:(t=Wt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return-1===O(e,t=Wt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=Wt(t,this);var e=O(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<Xt&&i(e.options.event+jt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=Xt&&i(e.options.event+jt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Lt)))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!_(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Ht|Ut|32)&&(this.state=Lt),this.state=this.process(e),this.state&(Yt|Ft|Xt|Ut)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E($t,Vt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(Yt|Ft),s=this.attrTest(t);return i&&(n&V||!s)?e|Ut:i||s?n&U?e|Xt:e&Yt?e|Ft:Yt:32}}),E(Bt,$t,{defaults:{event:"pan",threshold:10,pointers:1,direction:K},getTouchAction:function(){var t=this.options.direction,e=[];return t&G&&e.push(Nt),t&Z&&e.push(Dt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,o=t.deltaX,r=t.deltaY;return s&e.direction||(e.direction&G?(s=0===o?j:o<0?q:W,n=o!=this.pX,i=Math.abs(t.deltaX)):(s=0===r?j:r<0?$:B,n=r!=this.pY,i=Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return $t.prototype.attrTest.call(this,t)&&(this.state&Yt||!(this.state&Yt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=qt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(Gt,$t,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Yt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(Zt,Vt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ot]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(U|V)&&!s)this.reset();else if(t.eventType&X)this.reset(),this._timer=v(function(){this.state=Ht,this.tryEmit()},e.time,this);else if(t.eventType&U)return Ht;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ht&&(t&&t.eventType&U?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),E(Kt,$t,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Yt)}}),E(Qt,$t,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:G|Z,pointers:1},getTouchAction:function(){return Bt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(G|Z)?e=t.overallVelocity:n&G?e=t.overallVelocityX:n&Z&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&d(e)>this.options.velocity&&t.eventType&U},emit:function(t){var e=qt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(Jt,Vt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[zt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&X&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=U)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||rt(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=v(function(){this.state=Ht,this.tryEmit()},e.interval,this),Yt):Ht}return 32},failTimeout:function(){return this._timer=v(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ht&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),te.VERSION="2.0.7",te.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Kt,{enable:!1}],[Gt,{enable:!1},["rotate"]],[Qt,{direction:G}],[Bt,{direction:G},["swipe"]],[Jt],[Jt,{event:"doubletap",taps:2},["tap"]],[Zt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function ee(t,e){var n;this.options=c({},te.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(L?mt:Y?_t:k?Pt:lt))(n,et),this.touchAction=new kt(this,this.options.touchAction),ne(this,!0),g(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ne(t,e){var n,i=t.element;i.style&&(g(t.options.cssProps,function(s,o){n=D(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}ee.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&Ht)&&(s=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||s&&n!=s&&!n.canRecognizeWith(s)?n.reset():n.recognize(t),!s&&n.state&(Yt|Ft|Xt)&&(s=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Vt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=O(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return g(A(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return g(A(t),function(t){e?n[t]&&n[t].splice(O(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ne(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(te,{INPUT_START:X,INPUT_MOVE:H,INPUT_END:U,INPUT_CANCEL:V,STATE_POSSIBLE:Lt,STATE_BEGAN:Yt,STATE_CHANGED:Ft,STATE_ENDED:Xt,STATE_RECOGNIZED:Ht,STATE_CANCELLED:Ut,STATE_FAILED:32,DIRECTION_NONE:j,DIRECTION_LEFT:q,DIRECTION_RIGHT:W,DIRECTION_UP:$,DIRECTION_DOWN:B,DIRECTION_HORIZONTAL:G,DIRECTION_VERTICAL:Z,DIRECTION_ALL:K,Manager:ee,Input:tt,TouchAction:kt,TouchInput:_t,MouseInput:lt,PointerEventInput:mt,TouchMouseInput:Pt,SingleTouchInput:bt,Recognizer:Vt,AttrRecognizer:$t,Tap:Jt,Pan:Bt,Swipe:Qt,Pinch:Gt,Rotate:Kt,Press:Zt,on:S,off:P,each:g,merge:b,extend:T,assign:c,inherit:E,bindFn:w,prefixed:D}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=te,(i=function(){return te}.call(e,n,e,t))===a||(t.exports=i)}(window,document)}});
//# sourceMappingURL=1.aa6b9ae6bbaf33825ed6.js.map