(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},o={app:0},i=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49b0193b","chunk-2a71b11a":"b3738866","chunk-2e79962a":"a5203240","chunk-66d3d7ab":"5b3f3eda","chunk-f62347f6":"87a07cdd"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2a71b11a":1,"chunk-2e79962a":1,"chunk-66d3d7ab":1,"chunk-f62347f6":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2a71b11a":"02c73f39","chunk-2e79962a":"98a26775","chunk-66d3d7ab":"b2951f33","chunk-f62347f6":"71b78f1a"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],v.parentNode.removeChild(v),n(i)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){s[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(v);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}o[t]=void 0}};var v=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var v=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1136:function(t,e,n){"use strict";var a=n("60f7"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}})],1),n("router-view")],1)},o=[],i=(n("7faf"),n("2877")),r={},c=Object(i["a"])(r,s,o,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("van-grid",{attrs:{"column-num":1,gutter:0,border:!1}},[n("van-grid-item",[n("div",{staticClass:"nav",on:{click:t.golist}},[n("div",{staticClass:"nav_child"},[n("div",{staticClass:"nav_child1"}),n("div",{staticClass:"nav_child2"},[t._v("问题管理")])]),n("div",{staticClass:"nav_second"},[n("div",{staticClass:"nav_second1"},[t._v("超期")]),n("div",{staticClass:"nav_second2"},[n("div",{staticClass:"nav_second_child"},[t._v(t._s(t.timeout))])]),n("div",{staticClass:"nav_second3"},[t._v("在办")]),n("div",{staticClass:"nav_second4"},[n("div",{staticClass:"nav_second_child1"},[t._v(t._s(t.now))])]),n("div",{staticClass:"nav_second5"},[t._v("已办")]),n("div",{staticClass:"nav_second6"},[n("div",{staticClass:"nav_second_child2"},[t._v(t._s(t.succes))])])])])]),n("van-grid-item",[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav_childd"},[n("div",{staticClass:"nav_child1"}),n("div",{staticClass:"nav_child2"},[t._v("督办管理")])]),n("div",{staticClass:"nav_secondd"},[n("div",{staticClass:"nav_second1"},[t._v("超期")]),n("div",{staticClass:"nav_second2"},[n("div",{staticClass:"nav_second_child"},[t._v(t._s(t.timeout))])]),n("div",{staticClass:"nav_second3"},[t._v("在办")]),n("div",{staticClass:"nav_second4"},[n("div",{staticClass:"nav_second_child1"},[t._v(t._s(t.now))])]),n("div",{staticClass:"nav_second5"},[t._v("已办")]),n("div",{staticClass:"nav_second6"},[n("div",{staticClass:"nav_second_child2"},[t._v(t._s(t.succes))])])])])])],1),n("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"block"},[n("div",{staticClass:"block_head"},[t._v("提示")]),n("div",{staticClass:"block_body"},[t._v("你有"+t._s(t.timeout)+"项问题超期未处理")]),n("div",{staticClass:"block_floot",staticStyle:{"background-color":"#E9F6FF"}},[t._v("稍后处理")]),n("div",{staticClass:"block_floot",staticStyle:{background:"#2770B8"},on:{click:t.gopro}},[t._v("立即处理")])])])])],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"headleft"}),n("div",{staticClass:"headmid"},[t._v("问题管理")])])}],f=n("b650"),h=n("6b41"),p=n("d399"),_=n("2830"),b=n("21ab"),m=n("6e47");a["a"].use(f["a"],h["a"],p["a"],_["a"],b["a"],m["a"]);var C={name:"Home",data:function(){return{timeout:3,now:5,succes:13,show:!1}},components:{},methods:{golist:function(){this.$router.push("/prolist")},gopro:function(){this.$router.push("/prolistji")},showa:function(){0==this.timeout?this.show=!1:this.show=!0}},mounted:function(){this.showa()}},g=C,k=(n("1136"),Object(i["a"])(g,d,v,!1,null,"42f304ab",null)),w=k.exports;a["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/prolist",name:"prolist",component:function(){return n.e("chunk-2e79962a").then(n.bind(null,"48ae"))}},{path:"/prolistji",name:"prolistji",component:function(){return n.e("chunk-66d3d7ab").then(n.bind(null,"fa6e"))}},{path:"/newpro",name:"newpro",component:function(){return n.e("chunk-2a71b11a").then(n.bind(null,"c82d"))}},{path:"/subsucces",name:"subsucces",component:function(){return n.e("chunk-f62347f6").then(n.bind(null,"d6f7"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=new l["a"]({routes:y}),O=j,E=n("2f62");a["a"].use(E["a"]);var S=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=n("b970");n("157a");a["a"].use(P["a"]),a["a"].config.productionTip=!1,new a["a"]({router:O,store:S,render:function(t){return t(u)}}).$mount("#app")},"60f7":function(t,e,n){},"7faf":function(t,e,n){"use strict";var a=n("b8ff"),s=n.n(a);s.a},b8ff:function(t,e,n){}});
//# sourceMappingURL=app.e5b2e96e.js.map