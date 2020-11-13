(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{384:function(s,t,n){"use strict";n.r(t);var e=n(25),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"gzip压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gzip压缩"}},[s._v("#")]),s._v(" gzip压缩")]),s._v(" "),n("p",[s._v("服务器端进行gzip压缩的优点")]),s._v(" "),n("ol",[n("li",[s._v("降低宽带成本，加快网页加载速度")]),s._v(" "),n("li",[s._v("gogle可以直接读取gizp文件来更快的检索文件")])]),s._v(" "),n("p",[s._v("gzip传输的过程")]),s._v(" "),n("ol",[n("li",[s._v("客户端请求头中的 "),n("code",[s._v("accept-encoding")]),s._v(" 属性是否包含 gzip。 当前chrome浏览器的默认值是 gzip, deflate, br")]),s._v(" "),n("li",[s._v("Web服务器接收到浏览器的HTTP请求后，检查浏览器是否支持HTTP压缩（"),n("code",[s._v("Accept-Encoding")]),s._v(" 信息）")]),s._v(" "),n("li",[s._v("Web服务器接到request后， 生成原始的Response, 其中有原始的"),n("code",[s._v("Content-Type")]),s._v("和"),n("code",[s._v("Content-Length")])]),s._v(" "),n("li",[s._v("Web服务器通过Gzip，来对Response进行编码，编码后header中有"),n("code",[s._v("Content-Type")]),s._v("和"),n("code",[s._v("Content-Length")]),s._v("(压缩后的大小)，并且增加了"),n("code",[s._v("Content-Encoding:gzip")]),s._v(". 然后把Response发送给浏览器。")]),s._v(" "),n("li",[s._v("浏览器获取后，通过response的"),n("code",[s._v("content-encoding")]),s._v("判断否压缩，然后显示响应内容。")])]),s._v(" "),n("p",[s._v("gzip的缺陷")]),s._v(" "),n("ul",[n("li",[s._v("对jepg这类文件压缩性能不够好")])]),s._v(" "),n("p",[s._v("开启gzip压缩")]),s._v(" "),n("ul",[n("li",[s._v("nodejs 原生 zlib模块 "),n("code",[s._v("zlib.createGzip()")])]),s._v(" "),n("li",[s._v("nodejs 中间件 "),n("code",[s._v("compression")]),s._v(" "),n("ul",[n("li",[s._v("基本用法："),n("code",[s._v("app.use(compression())")])]),s._v(" "),n("li",[s._v("过滤器： "),n("code",[s._v("app.use(compression({filter: shouldCompress }))")])])])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shouldCompress")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x-no-compression'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// don't compress responses with this request header")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fallback to standard filter function")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" compression"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("koa 中间件 compress")])]),s._v(" "),n("p",[s._v("前端webpack打包  "),n("code",[s._v("compression-webpack-plugin")])])])}),[],!1,null,null,null);t.default=a.exports}}]);