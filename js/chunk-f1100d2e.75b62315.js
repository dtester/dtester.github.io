(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1100d2e"],{"6a0a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar__container"},[s("section",{staticClass:"sidebar__section profile"},[s("c-avatar",{staticClass:"profile__avatar",attrs:{src:t.getAccount.avatar,size:"100",radius:"50%"}}),s("div",{staticClass:"profile__name"},[t._v(t._s(t.getAccount.name))]),s("div",{staticClass:"profile__stack"},[t._v(t._s(t.getAccount.stack))]),s("div",{staticClass:"profile__rate"},[t._v(t._s(t.getAccount.price))])],1),s("section",{staticClass:"sidebar__section"},[s("nav",{class:["menu",{"menu--active":~t.getActive}],style:{"--menu-index":t.getActive}},t._l(t.menu,(function(e,a){return s("router-link",{key:a,class:["menu__item",{"menu__item--active":t.getActive===a}],attrs:{to:e.route}},[e.icon?s(e.icon,{tag:"component",staticClass:"menu__icon"}):t._e(),s("span",{staticClass:"menu__label"},[t._v(t._s(e.label))])],1)})),1)]),s("section",{staticClass:"sidebar__section"},[s("c-tags",{staticClass:"sidebar__tags",attrs:{items:t.getTags}})],1)])])},n=[],c=(s("c740"),s("b0c0"),s("d3b7"),s("5530")),i=s("2f62"),r={name:"l-sidebar",components:{cAvatar:function(){return s.e("chunk-69de1583").then(s.bind(null,"df3a"))},cTags:function(){return s.e("chunk-32a7f9e4").then(s.bind(null,"3855"))}},props:{menu:{type:Array,required:!0}},computed:Object(c["a"])({},Object(i["b"])({getWorks:"worklist/getWorks",getProjects:"worklist/getProjects",getTags:"worklist/getTags",getAccount:"account/get"}),{getActive:function(){var t=this;return this.menu.findIndex((function(e){return e.route.name===t.$route.name}))}})},o=r,u=(s("c305"),s("2877")),l=Object(u["a"])(o,a,n,!1,null,"2eb35091",null);e["default"]=l.exports},"98a3":function(t,e,s){},c305:function(t,e,s){"use strict";var a=s("98a3"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-f1100d2e.75b62315.js.map