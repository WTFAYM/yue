webpackJsonp([7],{"4lOa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{text:""}},props:{value:""},methods:{handleChange:function(){console.log("哈哈"),this.$emit("input",this.text)}},watch:{value:function(t){this.text=t}},created:function(){this.text=this.value}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testItem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"number"},domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},function(e){t.handleChange()}]}})])},staticRenderFns:[]};var l=n("VU/8")(a,u,!1,function(t){n("dF+/")},null,null);e.default=l.exports},L1Vb:function(t,e){},"dF+/":function(t,e){},fyrb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{textItem:n("4lOa").default},data:function(){return{value:""}},methods:{handleClick:function(){console.log(this.value)},changeValue:function(){this.value="10"}},created:function(){},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("text-item",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("button",{on:{click:function(e){t.handleClick()}}},[t._v("点击查看model值")]),t._v(" "),n("button",{on:{click:function(e){t.changeValue()}}},[t._v("点击改变model值")]),t._v(" "),n("div",{staticClass:"back"})],1)},staticRenderFns:[]};var l=n("VU/8")(a,u,!1,function(t){n("L1Vb")},null,null);e.default=l.exports}});
//# sourceMappingURL=7.52ac9bf7004635f74573.js.map