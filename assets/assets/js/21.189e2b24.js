(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{378:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cookie-和-session机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session机制"}},[s._v("#")]),s._v(" cookie 和 session机制")]),s._v(" "),a("p",[a("strong",[s._v("http是无状态的协议")]),s._v("。但有时候我们需要提供特殊化服务。cookie 就是一种弥补无状态的机制。")]),s._v(" "),a("h2",{attrs:{id:"cookie机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie机制"}},[s._v("#")]),s._v(" cookie机制")]),s._v(" "),a("p",[s._v("cookie的特殊信息已文本文件的方式存储在客户端中。客户端通过在请求头中加入cookie来成为该客户端的标识。")]),s._v(" "),a("p",[s._v("cookie的设置和读取: "),a("code",[s._v("document.cookie")]),s._v("。设置了新的cookie不会覆盖旧的cookie。设置的时候，最好用 "),a("code",[s._v("encodeURIComponent()")]),s._v(" 函数来格式化参数。cookie 不应该超过 4kb 大小")]),s._v(" "),a("p",[s._v("cookie还可以通过分号，添加 path 和 expires 选项：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("path： 当前这个cookie 作用的页面有哪些")]),s._v(" "),a("li",[s._v("expires： 当前cookie有效时间范围 - "),a("code",[s._v("toUTCString()")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// +1 day from nowlet date = new Date(Date.now() + 86400e3);")]),s._v("\n\ndate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toUTCString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user=John; expires="')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// max-age: 如果设置为负数或者0，cookie被删除")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cookie will die +1 hour from now")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user=John; max-age=3600"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// delete cookie (let it expire right now)")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user=John; max-age=0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// secure: 默认情况，如果我们在 http://site.com 里设置cookie，https://site.com 也会出现该cookie。但如果设置了 secure, 则只会在 https 中传输。")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user=John; secure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("samesite：防止XSRF攻击的安全属性。 同 referer 类似:")]),s._v(" "),a("ul",[a("li",[s._v("samesite = strict 等同于 只写 samesite。get请求也不允许通过。")]),s._v(" "),a("li",[s._v("samesite = lax 只有同时符合下面条件时，才可以发送cookie\n"),a("ul",[a("li",[s._v("允许 get 方法 。 注意：基本上 get方法只是用来 reading ，而不应该进行数据写操作等")]),s._v(" "),a("li",[s._v("这个操作会改变 浏览器中地址 的url。 iframe 不是top-level navigation。js发送的请求也不会改变导航地址，因为也不符合")])])])]),s._v(" "),a("p",[s._v("httponly：服务器端设置 set-cookie 为 httpOnly，这个属性导致js无法访问cookie。 document.cookie 无法显示。所以也是被保护的。\n附加： 关于cookie 的函数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("name.replace(/([.$?*|{}()[]\\\\/+^])/g, '\\$1')")]),s._v(" 是将name中的 regex 关键字进行转义。")]),s._v(" "),a("li",[a("code",[s._v('new RegExp("(?:^|; )"+ formatName + "=( (;)*)")')]),s._v(" 行开头或者“; ”(注意：分号后面有一个空格)开头到不包含；的全部字符串")]),s._v(" "),a("li",[a("code",[s._v("decodeURIComponent()")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(?:^|; )"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\\\\"),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/+^])/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\$1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=( (;))"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("decodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("options\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expires "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expires"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toUTCString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" optionKey "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('";"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" optionKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" optionValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optionKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("optionValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" optionValue\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" updatedCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max-age'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h3",{attrs:{id:"第三方cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方cookie"}},[s._v("#")]),s._v(" 第三方cookie")]),s._v(" "),a("p",[s._v("第三方cookie主要用于追踪用户和广告投放。他们紧紧的联系在了 domain。所以abs.com 如果在不同的网站被访问了，它都可以轻松追踪到用户。 google由于侵犯隐私被罚款，开始禁用safari的第三方cookie。")]),s._v(" "),a("p",[s._v("注意：我们加载了一个第三方的脚本，比如 "),a("code",[s._v('<script src="https://google-analytics.com/analytics.js">')]),s._v("，并且该脚本中执行了 "),a("code",[s._v("document.cookie")]),s._v(" ，它们不是第三方 cookie。")]),s._v(" "),a("p",[s._v("脚本设置的cookie，不管脚本是由何处加载，cookie都属于当前主机")]),s._v(" "),a("p",[s._v("三方cookie的用处")]),s._v(" "),a("ul",[a("li",[s._v("前端日志打点:大多数 Web 站点都会引用一些第三方 SDK 来进行前端异常或性能监控，这些 SDK 会通过一些接口将监控到的信息上传到他们的服务器。一般它们都需要标识每个用户来方便排查问题或者统计 UV 数据，所以当你一此请求这个站点的时候，它们可能会在你的站点上 set 一个 Cookie，后续所有的日志上报请求都会带上这个 Cookie 。由于一般这些第三方 SDK 都是用于监控的通用服务，它们肯定会拥有自己独立的域名，比如 log.com，它在你的域名 mysite.com 下种下的 Cookie 就属于第三方 Cookie。")]),s._v(" "),a("li",[s._v("广告营销-facebook pixel:自己的网站中嵌入facebook pixel 代码，当你在浏览各个网站后，再登录facebook， facebook就会关联你的cookie，分析你的行为记录。")]),s._v(" "),a("li",[s._v("无处不在的的 mmstat:比如，我们在浏览百度、优酷、天猫等网站时，都能看到几个 .mmstat.com 这个域下的 Cookie。.mmstat.com 应该就是阿里旗下的大数据营销平台阿里妈妈旗下的域名（只是个人猜测）。打开阿里妈妈首页，可以看到，其号称是更懂消费者的数据金矿，已经建立起5亿用户的身份识别体系。你的每一次搜索、每一次购买、都会让它变的更精准，下一次你就收到更精准的推荐。")])]),s._v(" "),a("p",[s._v("三方cookie被禁用后的解决方案:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将第三方cookie改为第一方cookie，然后将cookie不在作为cookie传输，而是作为参数发起请求。")])]),s._v(" "),a("li",[a("p",[s._v("浏览器指纹")]),s._v(" "),a("ul",[a("li",[s._v("通过浏览器的系统配置等多个属性结合")]),s._v(" "),a("li",[s._v("canvas指纹：不同浏览器的图形处理引擎，对抗锯齿等算法不同，在画布上渲染文字等，再通过 toDataURL 导出，就会得到指纹")]),s._v(" "),a("li",[s._v("webGl：不同的驱动和设备组合，得到唯一的值")]),s._v(" "),a("li",[s._v("综合上面的问题：client.js 这个库就会利用上面的参数，生成唯一的uuid给你。")])])])]),s._v(" "),a("p",[s._v("总结：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("document.cookie")]),s._v(" 可以获取到cookies\n"),a("ul",[a("li",[s._v("键值对必须被encoded")]),s._v(" "),a("li",[s._v("写操作值只修改提供的cookies,不会覆盖其它结果")]),s._v(" "),a("li",[s._v("单个网站 cookie的上限是4kb，20+条数")])])]),s._v(" "),a("li",[s._v("cookie 参数\n"),a("ul",[a("li",[s._v("path = /; cookie只有在当前路径之下才可见")]),s._v(" "),a("li",[s._v("domain = site.com ; 默认cookie 只有在当前 domain 下才可见")]),s._v(" "),a("li",[s._v("expires 或者 max-age  有效期限。或者用来删除cookie")]),s._v(" "),a("li",[s._v("secure 使得cookie 在允许在 https 中使用")]),s._v(" "),a("li",[s._v("samesite 禁止浏览器发送coookie 给第三方网站，防止 xsrf 跨站请求伪造攻击")])])]),s._v(" "),a("li",[s._v("其它\n"),a("ul",[a("li",[s._v("第三方cookie可以通过设置浏览器关闭")])])])]),s._v(" "),a("h2",{attrs:{id:"session机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session机制"}},[s._v("#")]),s._v(" session机制")]),s._v(" "),a("p",[s._v("运作在服务器中")]),s._v(" "),a("ul",[a("li",[s._v("客户端第一次访问服务器时，将客户的登录信息保存在服务器端")]),s._v(" "),a("li",[s._v("当用户访问站点其它页面时，可以根据用户状态做出相应提示和拦截")]),s._v(" "),a("li",[s._v("seesion的存放有多种形式：内存、缓存、数据库")])]),s._v(" "),a("p",[s._v("session的存放：")]),s._v(" "),a("ol",[a("li",[s._v("内存")]),s._v(" "),a("li",[s._v("cookie本身\n"),a("ul",[a("li",[s._v("session非加密的存储在客户端")]),s._v(" "),a("li",[s._v("浏览器cookies总是有大小限制")])])]),s._v(" "),a("li",[s._v("redis缓存中等")]),s._v(" "),a("li",[s._v("数据库")])]),s._v(" "),a("p",[s._v("session 依赖于 cookie传输，但如果浏览器禁止cookie后，如何解决？ URL地址重写")])])}),[],!1,null,null,null);t.default=e.exports}}]);