webpackJsonp([8],{Unbu:function(t,e){},V3sP:function(t,e){},e0cv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"followItem"},[t._m(0),t._v(" "),t.showBtn?n("div",{staticClass:"followItem-btn"},[n("mt-button",{nativeOn:{click:function(e){t.cancleFollow()}}},[t._v("取消关注")])],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"followItem-user"},[e("div",{staticClass:"followItem-user-avatar"},[e("img",{attrs:{src:n("KP/3")}})]),this._v(" "),e("div",{staticClass:"followItem-user-name"},[this._v("WTFAYM")])])}]};var l=n("VU/8")({props:{showBtn:{default:!0}},data:function(){return{}},methods:{cancleFollow:function(){}}},a,!1,function(t){n("Unbu")},null,null);e.default=l.exports},"na5+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{followItem:n("e0cv").default},data:function(){return{tabIndex:"0"}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"follow-page"},[n("statu-bar"),t._v(" "),n("detail-header",{attrs:{title:"关注"}}),t._v(" "),n("div",{staticClass:"follow-container"},[n("div",{staticClass:"follow-tab"},[n("mt-tabbar",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("mt-tab-item",{attrs:{id:"0"}},[t._v("\n          我的关注\n        ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"1"}},[t._v("\n          我的粉丝\n        ")])],1)],1),t._v(" "),n("div",{staticClass:"follow-tab-container"},[n("mt-tab-container",{attrs:{swipeable:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("mt-tab-container-item",{attrs:{id:"0"}},t._l(15,function(t,e){return n("follow-item",{key:e})})),t._v(" "),n("mt-tab-container-item",{attrs:{id:"1"}},t._l(15,function(t,e){return n("follow-item",{key:e,attrs:{showBtn:!1}})}))],1)],1)])],1)},staticRenderFns:[]};var s=n("VU/8")(a,l,!1,function(t){n("V3sP")},null,null);e.default=s.exports}});
//# sourceMappingURL=8.f4d8d5552b2605fe0a55.js.map