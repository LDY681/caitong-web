webpackJsonp([126],{"14s6":function(n,e,t){var s=t("G/eF");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t("FIqI")("70119c63",s,!0,{})},CMYX:function(n,e,t){"use strict";function s(n){t("14s6")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("lcoF"),i=t("2sCs"),c=t.n(i),r={mixins:[a.a],data:function(){return{}},methods:{mak:function(){var n=this;c.a.post(this.$api.staticIndex).then(function(e){"200"==e.code&&n.successMessage("生成成功!")})},del:function(){var n=this;c.a.post(this.$api.staticIndexRemove).then(function(e){"200"==e.code&&n.successMessage("删除成功!")})}},created:function(){}},l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"cms-body ",staticStyle:{"text-align":"center","padding-top":"24px"}},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexStatic",expression:"'/statically/indexStatic'"}],attrs:{type:"primary"},on:{click:n.mak}},[n._v("生成首页HTML")]),n._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexDel",expression:"'/statically/indexDel'"}],attrs:{type:"primary",plain:""},on:{click:n.del}},[n._v("删除首页HTML")])],1)},o=[],p={render:l,staticRenderFns:o},u=p,d=t("C7Lr"),m=s,v=d(r,u,!1,m,null,null);e.default=v.exports},"G/eF":function(n,e,t){e=n.exports=t("UTlt")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});