webpackJsonp([0],[,,,,,,,,,,function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=e(11),i=(n(s),e(13)),r=n(i),o=e(4),u=n(o),l=e(15),c=n(l),d=e(16),p=n(d),v=e(17),m=n(v),_=e(30),f=n(_),h=e(1),x=(n(h),e(131)),g=n(x),C=e(151),b=n(C),M=e(152),k=(n(M),e(153)),w=n(k);u.default.use(r.default),u.default.use(p.default),u.default.use(c.default),u.default.use(b.default,g.default);var y=new p.default({routes:f.default});new w.default;new u.default({el:"#app",render:function(t){return t(m.default)},router:y})},function(t,a){},,,,,,function(t,a,e){var n=e(0)(e(18),e(29),null,null,null);t.exports=n.exports},function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0}),e(19);var s=e(20),i=n(s),r=e(23),o=n(r);a.default={components:{NavMenu:i.default,Container:o.default}}},function(t,a){},function(t,a,e){function n(t){e(21)}var s=e(0)(null,e(22),n,"data-v-a945b95e",null);t.exports=s.exports},function(t,a){},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-menu",{attrs:{"default-active":"1",id:"nav-menu",theme:"dark"}},[e("div",{attrs:{id:"daiti"}}),t._v(" "),e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e("h1",[t._v(" Web gis")])])],1),t._v(" "),e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[t._v("绘制地图api")]),t._v(" "),e("el-menu-item",{attrs:{index:"1-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-1"}},[t._v("绘制地图")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-2"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-2"}},[t._v("地图添加控件")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-3"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-3"}},[t._v("地图设定中心")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-4"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-4"}},[t._v("地图获取中心点")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-5"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-5"}},[t._v("地图获取zoom")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-6"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-6"}},[t._v("添加鼠标经纬度")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-7"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-7"}},[t._v("添加缩放控件")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-8"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-8"}},[t._v("添加缩略图控件")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-9"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/page1-9"}},[t._v("添加比例尺控件")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"2"}},[e("template",{slot:"title"},[t._v("地图绘制点(自定义图片)")]),t._v(" "),e("el-menu-item",{attrs:{index:"2-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page2/page2-1"}},[t._v("自定义画点(添加图片)")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"3"}},[e("template",{slot:"title"},[t._v("地图绘制点(自己设定点)")]),t._v(" "),e("el-menu-item",{attrs:{index:"3-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page3/page3-1"}},[t._v("自定义画点(自己设定)")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"4"}},[e("template",{slot:"title"},[t._v("地图绘制线")]),t._v(" "),e("el-menu-item",{attrs:{index:"1-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page4/page4-1"}},[t._v("绘制线段并添加箭头")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1-2"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page4/page4-2"}},[t._v("绘制线段")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"5"}},[e("template",{slot:"title"},[t._v("点的事件处理")]),t._v(" "),e("el-menu-item",{attrs:{index:"5-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page5/page5-1"}},[t._v("点击点弹出信息")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"5-2"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page5/page5-2"}},[t._v("绑定点的点击事件")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"6"}},[e("template",{slot:"title"},[t._v("生成png图片")]),t._v(" "),e("el-menu-item",{attrs:{index:"6-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page6/page6-1"}},[t._v("下载图片")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"7"}},[e("template",{slot:"title"},[t._v("绘制点回放")]),t._v(" "),e("el-menu-item",{attrs:{index:"7-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page7/page7-1"}},[t._v("点的回放")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"8"}},[e("template",{slot:"title"},[t._v("绘制线特效")]),t._v(" "),e("el-menu-item",{attrs:{index:"8-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page8/page8-1"}},[t._v("线的特效")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"9"}},[e("template",{slot:"title"},[t._v("绘制高亮点")]),t._v(" "),e("el-menu-item",{attrs:{index:"9-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page9/page9-1"}},[t._v("点的闪烁")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"10"}},[e("template",{slot:"title"},[t._v("绘制热力图")]),t._v(" "),e("el-menu-item",{attrs:{index:"10-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page10/page10-1"}},[t._v("热力图展示")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"11"}},[e("template",{slot:"title"},[t._v("绘制麻点图")]),t._v(" "),e("el-menu-item",{attrs:{index:"11-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page11/page11-1"}},[t._v("麻点图(聚合点)")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"12"}},[e("template",{slot:"title"},[t._v("绘制多边形")]),t._v(" "),e("el-menu-item",{attrs:{index:"12-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page12/page12-1"}},[t._v("画多边形")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"13"}},[e("template",{slot:"title"},[t._v("绘制圆形")]),t._v(" "),e("el-menu-item",{attrs:{index:"13-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page13/page13-1"}},[t._v("画圆形")])],1)],2),t._v(" "),e("el-submenu",{attrs:{index:"14"}},[e("template",{slot:"title"},[t._v("清除页面覆盖物")]),t._v(" "),e("el-menu-item",{attrs:{index:"14-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page14/page14-1"}},[t._v("清除覆盖物")])],1)],2)],1)},staticRenderFns:[]}},function(t,a,e){var n=e(0)(e(24),e(28),null,null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(25),s=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={components:{TopBar:s.default}}},function(t,a,e){var n=e(0)(e(26),e(27),null,null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{avatar_url:"http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg"}},methods:{signOut:function(){console.log("退出登录")}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("div")},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"container"}},[e("TopBar"),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("NavMenu"),t._v(" "),e("Container")],1)},staticRenderFns:[]}},function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e(31),i=n(s),r=e(35),o=n(r),u=e(39),l=n(u),c=e(43),d=n(c),p=e(47),v=n(p),m=e(51),_=n(m),f=e(55),h=n(f),x=e(59),g=n(x),C=e(63),b=n(C),M=e(67),k=n(M),w=e(71),y=n(w),j=e(75),P=n(j),F=e(79),O=n(F),E=e(83),$=n(E),R=e(87),z=n(R),S=e(91),L=n(S),T=e(95),A=n(T),G=e(99),Z=n(G),I=e(103),N=n(I),V=e(107),J=n(V),B=e(111),H=n(B),W=e(115),q=n(W),D=e(119),K=n(D),Q=e(123),U=n(Q),X=e(127),Y=n(X);a.default=[{path:"/",component:i.default},{path:"/page1/page1-1",component:o.default},{path:"/page1/page1-2",component:l.default},{path:"/page1/page1-3",component:d.default},{path:"/page1/page1-4",component:v.default},{path:"/page1/page1-5",component:_.default},{path:"/page1/page1-6",component:h.default},{path:"/page1/page1-7",component:g.default},{path:"/page1/page1-8",component:b.default},{path:"/page1/page1-9",component:k.default},{path:"/page2/page2-1",component:y.default},{path:"/page3/page3-1",component:P.default},{path:"/page4/page4-1",component:O.default},{path:"/page4/page4-2",component:$.default},{path:"/page5/page5-1",component:z.default},{path:"/page5/page5-2",component:L.default},{path:"/page6/page6-1",component:A.default},{path:"/page7/page7-1",component:Z.default},{path:"/page8/page8-1",component:N.default},{path:"/page9/page9-1",component:J.default},{path:"/page10/page10-1",component:H.default},{path:"/page11/page11-1",component:q.default},{path:"/page12/page12-1",component:K.default},{path:"/page13/page13-1",component:U.default},{path:"/page14/page14-1",component:Y.default}]},function(t,a,e){function n(t){e(32)}var s=e(0)(e(33),e(34),n,"data-v-723cb76c",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{}},mounted:function(){this.map()},methods:{map:function(){this.$nextTick(function(){ma.drawMap({url:url,zoom:"5",minz:"3",name:"map_first"})})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map_first"}})])}]}},function(t,a,e){function n(t){e(36)}var s=e(0)(e(37),e(38),n,"data-v-74debaed",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图",mess:"这是直接根据api来绘制地图，只针对绘制地图，绘制地图可自行选择本地地图与线上地图。"}},mounted:function(){this.map()},methods:{map:function(){this.$nextTick(function(){ma.drawMap({url:url,zoom:"8"})})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(40)}var s=e(0)(e(41),e(42),n,"data-v-636fd8ef",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"添加地图控件",mess:"这是根据api来绘制地图，并添加部分控件，地图缩略图，添加地图比例尺，添加地图缩放按钮，鼠标定位等控件。"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"8",name:"map1"}),ma.mousePosition(),ma.controlZoom(),ma.controlOverviewMap(),ma.controlScaleLine()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map1"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(44)}var s=e(0)(e(45),e(46),n,"data-v-5200f6f1",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图自定义中心以及zoom值",mess:"这是根据api来绘制地图，并且根据参数来改变自己想定的地图中心以及 zoom 值"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map2"});var t=[111.1428,37.5211];ma.setCenterZoom(t,9)}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map2"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(48)}var s=e(0)(e(49),e(50),n,"data-v-409214f3",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图获取当前地图中心",mess:"这是根据api来绘制地图，并且通过api获取地图中心"}},mounted:function(){this.map()},methods:{map:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}(function(){ma.drawMap({url:url,name:"map3"});ma.getMapCenter(map)}),getCenter:function(){alert(map.getView().getCenter())}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map3"}},[e("button",{staticClass:"btn btn-primary btt",on:{click:t.getCenter}},[t._v("点击获取中心点")])]),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(52)}var s=e(0)(e(53),e(54),n,"data-v-2f2332f5",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图获取当前地图zoom值",mess:"这是根据api来绘制地图，通过api获取地图zoom"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map4"});ma.getMapZoom()},getZoom:function(){alert(map.getView().getZoom())}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map4"}},[e("button",{staticClass:"btn btn-primary btt",on:{click:t.getZoom}},[t._v("点击获取zoom值")])]),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(56)}var s=e(0)(e(57),e(58),n,"data-v-1db450f7",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图添加鼠标位置的经纬度",mess:"这是根据api来绘制地图，通过api添加鼠标经纬度"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map5"}),ma.mousePosition()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map5"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(60)}var s=e(0)(e(61),e(62),n,"data-v-0c456ef9",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图添加缩放控件",mess:"这是根据api来绘制地图，通过api添加缩放控件"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map6"}),ma.controlZoom()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map6"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(64)}var s=e(0)(e(65),e(66),n,"data-v-0a52e60a",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图添加缩略图控件",mess:"这是根据api来绘制地图，通过api添加缩略图控件"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map7"}),ma.controlOverviewMap()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map7"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(68)}var s=e(0)(e(69),e(70),n,"data-v-2d30aa06",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图添加比例尺控件",mess:"这是根据api来绘制地图，通过api添加比例尺控件"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,name:"map8"}),ma.controlScaleLine()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map8"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(72)}var s=e(0)(e(73),e(74),n,"data-v-103955f0",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图并绘制点(自定义图片)",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的点，并在点上添加自定义图片。"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map9"}),ma.drawPointTwo([115.101,38.4908],"../../../../static/image/point.png")}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map9"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(76)}var s=e(0)(e(77),e(78),n,"data-v-a8d81e1a",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图并绘制点(自己设定点)",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的点，自己设定点的状态。"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map10"}),ma.drawPointOne({pointCoordinate:[115.101,38.4908],radius:8,Scolor:"yellow",Fcolor:"red"})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map10"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(80)}var s=e(0)(e(81),e(82),n,"data-v-46ee8bf6",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图并绘制线段",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的线段,并添加箭头"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map11"}),ma.drawLine({startCoordinate:[122.0004,40.8412],endCoordinate:[115.101,38.4908],urlImage:"../../../../static/image/arrow.png",color:"blue"})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map11"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(84)}var s=e(0)(e(85),e(86),n,"data-v-357fa9f8",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图并绘制线",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的线，自己设定线的状态。"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map12"}),ma.drawLineTwo({startCoordinate:[122.0004,40.8412],endCoordinate:[115.101,38.4908],color:"blue"})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map12"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(88)}var s=e(0)(e(89),e(90),n,"data-v-3b6db20e",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图点击弹出框",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的点,并弹出框"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map13"});var t=new ol.style.Style({image:new ol.style.Icon({anchor:[.5,1],src:"../../../../static/image/point.png"})});ma.popupFun({url:"../../../../static/json/getStation.json",html:"<p>时间 : xxxxxxxxxxx</p><p>地址:xxxxxxxxxxxxxxx</p><p>人物:xxxxxxxxxxx</p>",style:t,name:"#map13"})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map13"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(92)}var s=e(0)(e(93),e(94),n,"data-v-5e4b760a",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"绘制地图并给点绑定点击事件",mess:"这是直接根据api来绘制地图，并根据api来进行绘制地图上所需的点，自己来绑定点击事件处理。"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map14"});var t=new ol.style.Style({image:new ol.style.Icon({anchor:[.5,1],src:"../../../../static/image/point.png"})}),a=function(){alert("绑定点击事件")};ma.clickPoint({url:"../../../../static/json/getStation.json",st:t,fun:a})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map14"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(96)}var s=e(0)(e(97),e(98),n,"data-v-7da3c1fc",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图截图下载保存png",mess:"这是直接根据api来绘制地图，并根据api来进行下载保存截图，格式为png格式"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map15"})},download:function(){ma.downloadPicture("mapppppp")}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map15"}},[e("button",{staticClass:"btn btn-primary btt",on:{click:t.download}},[t._v("点击截图")])]),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(100)}var s=e(0)(e(101),e(102),n,"data-v-18fe5cff",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{addMap:"地图显示点的回放",mess:"这是直接根据api来绘制地图，并根据api来进行绘制点，并进行点的回放过程"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map16"});var t={route:new ol.style.Style({stroke:new ol.style.Stroke({width:4,color:"blue"})}),icon:new ol.style.Style({image:new ol.style.Icon({anchor:[.5,1],src:"http://127.0.0.1/route_z/image/icon.png"})}),geoMarker:new ol.style.Style({image:new ol.style.Circle({radius:5,snapToPixel:!1,fill:new ol.style.Fill({color:"black"}),stroke:new ol.style.Stroke({color:"#fff",width:2})})})};s.default.get("../../../../static/json/3.json",{},function(a){function e(t){for(var a=0;a<t.length;a++)Array.isArray(t[a])?e(t[a]):l.push(t[a])}for(var n=new ol.format.GeoJSON,i=n.readFeatures(a,{featureProjection:"EPSG:3857"}),r=i.length,o=[],u=0;u<r;u++){var l=i[u].getGeometry().getCoordinates(),c=ol.proj.toLonLat(l),d=c[0],p=c[1],v=[p,d];o.push(v)}var l=[];e(o),(0,s.default)(".but").on("click",function(){ma.pointAnimate({arr:l,style:t})})})},pointAnimate:function(){console.log(this.ar)}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"map16"}},[e("button",{staticClass:"btn btt btn-primary but"},[t._v("点击回放")])])}]}},function(t,a,e){function n(t){e(104)}var s=e(0)(e(105),e(106),n,"data-v-974e0ffc",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{addMap:"地图显示线的回放",mess:"这是直接根据api来绘制地图，并根据api来进行绘制线，并进行线的回放过程"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map17"}),(0,s.default)(".but").on("click",function(){ma.lineAnimate({url:"../../../static/json/1.json",color:"blue"})})},pointAnimate:function(){console.log(this.ar)}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"map17"}},[e("button",{staticClass:" btn btt btn-primary but"},[t._v("点击回放")])])}]}},function(t,a,e){function n(t){e(108)}var s=e(0)(e(109),e(110),n,"data-v-4fb39305",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{addMap:"地图显示闪烁的点",mess:"这是直接根据api来绘制地图，并根据api来进行绘制点，并对点进行高亮显示"}},mounted:function(){this.map()},methods:{map:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}(function(){ma.drawMap({url:url,zoom:"5",name:"map18"});var t=new ol.style.Style({image:new ol.style.Circle({radius:8,stroke:new ol.style.Stroke({color:"gray"}),fill:new ol.style.Fill({color:"yellow"})})}),a=new ol.source.Vector({loader:function(){s.default.get("../../../static/json/getStation.json",{},function(t){var e=new ol.format.GeoJSON,n=e.readFeatures(t,{featureProjection:"EPSG:3857"});a.addFeatures(n);for(var i=t.features.length,r=0;r<i;r++){var o=(0,s.default)("<div></div>");o.addClass("css_animation"),(0,s.default)("#map18").append(o);for(var u=0;u<i;u++)(0,s.default)(".css_animation").show(),ma.flickerPoint([t.features[u].properties.c_longitude,t.features[u].properties.c_latitude],i)}},"json")}}),e=new ol.layer.Vector({title:"title",source:a,style:t});map.addLayer(e)}),pointAnimate:function(){console.log(this.ar)}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map18"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(112)}var s=e(0)(e(113),e(114),n,"data-v-420e513e",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图显示热力图数据",mess:"这是直接根据api来绘制地图，并根据api展示热力图数据"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"11",center:[12588264.053732201,3281389.143275307],name:"map19"}),ma.getHeatmap("../../../static/json/getHeatmap.json")}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map19"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(116)}var s=e(0)(e(117),e(118),n,"data-v-3fa289c2",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图显示麻点聚合",mess:"这是直接根据api来绘制地图，并根据api来进行绘制麻点，并对点进行聚合显示"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map20"});ma.clusterSource(50,"../../../static/json/getStation.json")}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map20"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(120)}var s=e(0)(e(121),e(122),n,"data-v-bf6787ba",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图上鼠标点击绘制多边形",mess:"这是直接根据api来绘制地图，并根据api来进行绘制多边形，鼠标点击进行绘制"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map21"}),ma.drawGeometry()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map21"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(124)}var s=e(0)(e(125),e(126),n,"data-v-00f5ee84",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1);!function(t){t&&t.__esModule}(n);a.default={data:function(){return{addMap:"地图上鼠标点击绘制圆形",mess:"这是直接根据api来绘制地图，并根据api来进行绘制圆形，鼠标点击进行绘制"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map22"}),ma.drawGeometryCircle()}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{attrs:{id:"map22"}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[]}},function(t,a,e){function n(t){e(128)}var s=e(0)(e(129),e(130),n,"data-v-619fa0e5",null);t.exports=s.exports},function(t,a){},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{addMap:"地图上刪除绘制的点和线等",mess:"这是直接根据api来绘制地图，并根据api来将绘制好的覆盖物进行删除"}},mounted:function(){this.map()},methods:{map:function(){ma.drawMap({url:url,zoom:"5",name:"map23"}),ma.drawPointOne({pointCoordinate:[115.101,38.4908],radius:8,Scolor:"yellow",Fcolor:"red"}),ma.drawLineTwo({startCoordinate:[122.0004,40.8412],endCoordinate:[115.101,38.4908]}),(0,s.default)("#remove").on("click",function(){ma.clearLayer()})}}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("span",{staticClass:"back"},[e("h2",[t._v(t._s(t.addMap))]),t._v(" "),e("h4",[t._v(t._s(t.mess))]),t._v(" "),e("b",{staticClass:"shixian"},[t._v("代码实现")]),t._v(" "),e("p",{staticClass:"diama"})])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"map23"}},[e("button",{staticClass:"btn btn-primary btt",attrs:{id:"remove"}},[t._v("清除")])])}]}},,,,,,,,,,,,,,,,,,,,,,function(t,a){t.exports=ol},function(t,a){t.exports=tool}],[10]);
//# sourceMappingURL=app.2c1451887e6c1ceb2e48.js.map