(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{284:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("bad8e090",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(284)},287:function(t,e,n){var c=n(83)((function(i){return i[1]}));c.push([t.i,".hero--svg{height:340px;width:auto}",""]),c.locals={},t.exports=c},290:function(t,e,n){"use strict";n.r(e);var c=n(31),r=n(32),l=n(48),o=n(49),f=n(24),d=n(10),v=(n(39),n(11),n(84),n(36));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(l=(r<3?c(l):r>3?c(e,n,l):c(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(l.a)(n,t);var e=h(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"mounted",value:function(){console.log(this.$appData)}}]),n}(v.b),j=x=y([Object(v.a)({scrollToTop:!0,transition:"default"})],x),m=(n(286),n(33)),component=Object(m.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full pt-16"},[n("div",{staticClass:"grid grid-cols-2"},[n("div",{staticClass:"col-span-2 md:col-span-1 w-full md:pr-20"},[n("div",{staticClass:"flex justify-center md:justify-end"},[n("svg-icon",{staticClass:"hero--svg",attrs:{name:"hero"}})],1)]),t._v(" "),n("div",{staticClass:"col-span-2 md:col-span-1 flex-col pt-10 md:pt-32"},[n("h1",{staticClass:"text-3xl text-gray-700 mb-4"},[t._v("\n        Hi, I'm "),n("strong",[t._v(t._s(t.$appData.name))])]),t._v(" "),n("h2",{staticClass:"text-xl text-gray-600 mb-2"},[t._v("\n        "+t._s(t.$appData.headline)+"\n      ")]),t._v(" "),n("vue-typed-js",{attrs:{strings:t.$appData.headlineStacks,loop:!0,typeSpeed:50,backSpeed:20,backDelay:2e3}},[n("h2",{staticClass:"text-xl text-gray-600 mb-4"},[n("strong",{staticClass:"typing"}),t._v(". +"+t._s(t.$appData.experienceYear)+"\n          Year of Experience.\n        ")])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);