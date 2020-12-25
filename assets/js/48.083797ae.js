(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{406:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态资源版本更新与缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源版本更新与缓存"}},[t._v("#")]),t._v(" 静态资源版本更新与缓存")]),t._v(" "),s("p",[t._v("之前在一个github的issue里看到有人问为什么不用query的方式来清除缓存。发布者给了这篇文章。最近在总结缓存相关的内容时，又想起这件事，特意重新看一下，再理解一遍。")]),t._v(" "),s("p",[t._v("前端优化的一个手段就是开启缓存，然而就要面临另一个挑战：如何更新这些缓存？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("添加 query 的形式修改链接。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a.js?v=1.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("query的形式其实是资源覆盖。那么在高访问的网站中，就会导致一个问题，覆盖时的关联文件总是有一个发布的先后顺序。")]),t._v(" "),s("ol",[s("li",[t._v("在覆盖间隔期间访问的用户，会有引用错误，比如最新的index.html和旧的a.js，从而报错。")]),t._v(" "),s("li",[t._v("因为是覆盖的方式，可能会引发CDN缓存攻击。例如v=1.0.0不难推测之后的版本信息，提前构造一串这样的缓存请求，就会导致CDN中的缓存错误，同上。")]),t._v(" "),s("li",[t._v("且版本回滚时，需要回滚 html + js。")])])]),t._v(" "),s("li",[s("p",[t._v("基于文件内容的hash冗余")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("不是覆盖式的，可以先上线静态资源，再上线html，不存在间隙问题；")]),t._v(" "),s("li",[t._v("版本回滚，无需回滚a.js, 只需回滚页面即可；")]),t._v(" "),s("li",[t._v("由于静态资源版本号是文件内容的 hash，因此所有静态资源可以开启永久强缓存，只有更新了内容的文件才会缓存失效，缓存利用率大增；")]),t._v(" "),s("li",[t._v("修改静态资源后会在线上产生新的文件，一个文件对应一个版本，因此不会受到构造 CDN 缓存形式的攻击。")])])])]),t._v(" "),s("p",[t._v("webpack中给出了几种不同的hash方式：")]),t._v(" "),s("ul",[s("li",[t._v("hash： 跟整个项目的构建相关，构建生成的文件hash值都是一样的，只要项目里有文件更改，整个项目构建的hash值都会更改")]),t._v(" "),s("li",[t._v("chunkhash: 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的hash值。")]),t._v(" "),s("li",[t._v("contenthash： 由文件内容产生的hash值，内容不同产生的contenthash值也不一样。")])]),t._v(" "),s("p",[t._v("总结： 文件内容的hash冗余机制有一个问题，按照正常的发布流程就可能会造成线上文件的冗余。可以用定时清理机制。")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://www.infoq.cn/article/front-end-engineering-and-performance-optimization-part1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("静态资源版本更新与缓存"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);