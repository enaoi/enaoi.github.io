(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(t,_,v){"use strict";v.r(_);var r=v(25),d=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-基础"}},[t._v("#")]),t._v(" HTTP 基础")]),t._v(" "),v("p",[t._v("HTTP 消息（有的文章称之为报文）分为请求消息和响应消息两种基本分类。其中请求消息是客户端发送给服务器的用于请求服务和资源的消息，响应消息是服务器对请求消息的应答。一般来说，一个响应对应一个请求，不多也不少。")]),t._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("无链接：")]),t._v(" 无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),t._v(" "),v("li",[v("strong",[t._v("无状态：")]),t._v(" HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),t._v(" "),v("h2",{attrs:{id:"消息的基本格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息的基本格式"}},[t._v("#")]),t._v(" 消息的基本格式")]),t._v(" "),v("p",[t._v("HTTP 协议的请求消息和响应消息及其相似。HTTP 消息分为三个部分:")]),t._v(" "),v("ul",[v("li",[t._v("首行")]),t._v(" "),v("li",[t._v("头部(Header)")]),t._v(" "),v("li",[t._v("主体(Body)")])]),t._v(" "),v("p",[t._v("首行和头部就是由行分隔的ASCII文本。每行都是以一个回车符和一个换行符.")]),t._v(" "),v("h3",{attrs:{id:"首行-start-line"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首行-start-line"}},[t._v("#")]),t._v(" 首行(start line)")]),t._v(" "),v("h3",{attrs:{id:"头部-header"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#头部-header"}},[t._v("#")]),t._v(" 头部(header)")]),t._v(" "),v("h3",{attrs:{id:"主体-body"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主体-body"}},[t._v("#")]),t._v(" 主体(body)")]),t._v(" "),v("h2",{attrs:{id:"请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),v("h2",{attrs:{id:"响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),v("h2",{attrs:{id:"请求报文和响应报文的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文和响应报文的区别"}},[t._v("#")]),t._v(" 请求报文和响应报文的区别")]),t._v(" "),v("h2",{attrs:{id:"http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),v("h3",{attrs:{id:"_1xx-信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx-信息"}},[t._v("#")]),t._v(" 1XX:信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("消息")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("100 Continue")]),t._v(" "),v("td",[t._v("服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求。")])]),t._v(" "),v("tr",[v("td",[t._v("101 Switching Protocols")]),t._v(" "),v("td",[t._v("服务器转换协议：服务器将遵从客户的请求转换到另外一种协议。")])])])]),t._v(" "),v("h3",{attrs:{id:"_2xx-成功"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[t._v("#")]),t._v(" 2XX:成功")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("消息")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("200")]),t._v(" "),v("td",[t._v("请求成功。一般用于 GET 与 POST 请求")])]),t._v(" "),v("tr",[v("td",[t._v("201")]),t._v(" "),v("td",[t._v("已创建。成功请求并创建了新的资源")])]),t._v(" "),v("tr",[v("td",[t._v("202")]),t._v(" "),v("td",[t._v("已接受。已经接受请求，但未处理完成")])]),t._v(" "),v("tr",[v("td",[t._v("203")]),t._v(" "),v("td",[t._v("非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本")])]),t._v(" "),v("tr",[v("td",[t._v("204")]),t._v(" "),v("td",[t._v("无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档")])]),t._v(" "),v("tr",[v("td",[t._v("205")]),t._v(" "),v("td",[t._v("重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域")])]),t._v(" "),v("tr",[v("td",[t._v("206")]),t._v(" "),v("td",[t._v("部分内容。服务器成功处理了部分 GET 请求")])])])]),t._v(" "),v("h3",{attrs:{id:"_3xx-重定向，需要进一步操作以完成请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向，需要进一步操作以完成请求"}},[t._v("#")]),t._v(" 3XX:重定向，需要进一步操作以完成请求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("消息")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("300")]),t._v(" "),v("td",[t._v("多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择")])]),t._v(" "),v("tr",[v("td",[t._v("301")]),t._v(" "),v("td",[t._v("永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替")])]),t._v(" "),v("tr",[v("td",[t._v("302")]),t._v(" "),v("td",[t._v("临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI")])]),t._v(" "),v("tr",[v("td",[t._v("303")]),t._v(" "),v("td",[t._v("查看其它地址。与 301 类似。使用 GET 和 POST 请求查看")])]),t._v(" "),v("tr",[v("td",[t._v("304")]),t._v(" "),v("td",[t._v("未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源")])]),t._v(" "),v("tr",[v("td",[t._v("305")]),t._v(" "),v("td",[t._v("使用代理。所请求的资源必须通过代理访问")])]),t._v(" "),v("tr",[v("td",[t._v("306")]),t._v(" "),v("td",[t._v("已经被废弃的 HTTP 状态码")])]),t._v(" "),v("tr",[v("td",[t._v("307")]),t._v(" "),v("td",[t._v("临时重定向。与 302 类似。使用 GET 请求重定向")])])])]),t._v(" "),v("h3",{attrs:{id:"_4xx-客户端错误，请求包含语法错误或无法完成请求求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误，请求包含语法错误或无法完成请求求"}},[t._v("#")]),t._v(" 4XX:客户端错误，请求包含语法错误或无法完成请求求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("消息")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("400")]),t._v(" "),v("td",[t._v("客户端请求的语法错误，服务器无法理解")])]),t._v(" "),v("tr",[v("td",[t._v("401")]),t._v(" "),v("td",[t._v("请求要求用户的身份认证")])]),t._v(" "),v("tr",[v("td",[t._v("402")]),t._v(" "),v("td",[t._v("保留，将来使用")])]),t._v(" "),v("tr",[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("服务器理解请求客户端的请求，但是拒绝执行此请求")])]),t._v(" "),v("tr",[v("td",[t._v("404")]),t._v(" "),v("td",[t._v('服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面')])]),t._v(" "),v("tr",[v("td",[t._v("405")]),t._v(" "),v("td",[t._v("客户端请求中的方法被禁止")])]),t._v(" "),v("tr",[v("td",[t._v("406")]),t._v(" "),v("td",[t._v("服务器无法根据客户端请求的内容特性完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("407")]),t._v(" "),v("td",[t._v("请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权")])]),t._v(" "),v("tr",[v("td",[t._v("408")]),t._v(" "),v("td",[t._v("服务器等待客户端发送的请求时间过长，超时")])]),t._v(" "),v("tr",[v("td",[t._v("409")]),t._v(" "),v("td",[t._v("服务器完成客户端的 PUT 请求是可能返回此代码，服务器处理请求时发生了冲突")])]),t._v(" "),v("tr",[v("td",[t._v("410")]),t._v(" "),v("td",[t._v("客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置")])]),t._v(" "),v("tr",[v("td",[t._v("411")]),t._v(" "),v("td",[t._v("服务器无法处理客户端发送的不带 Content-Length 的请求信息")])]),t._v(" "),v("tr",[v("td",[t._v("412")]),t._v(" "),v("td",[t._v("客户端请求信息的先决条件错误")])]),t._v(" "),v("tr",[v("td",[t._v("413")]),t._v(" "),v("td",[t._v("由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息")])]),t._v(" "),v("tr",[v("td",[t._v("414")]),t._v(" "),v("td",[t._v("请求的 URI 过长（URI 通常为网址），服务器无法处理")])]),t._v(" "),v("tr",[v("td",[t._v("415")]),t._v(" "),v("td",[t._v("服务器无法处理请求附带的媒体格式")])]),t._v(" "),v("tr",[v("td",[t._v("416")]),t._v(" "),v("td",[t._v("客户端请求的范围无效")])]),t._v(" "),v("tr",[v("td",[t._v("417")]),t._v(" "),v("td",[t._v("服务器无法满足 Expect 的请求头信息")])])])]),t._v(" "),v("h3",{attrs:{id:"_5xx-服务器错误，服务器在处理请求的过程中发生了错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误，服务器在处理请求的过程中发生了错误"}},[t._v("#")]),t._v(" 5XX:服务器错误，服务器在处理请求的过程中发生了错误")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("消息")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("500")]),t._v(" "),v("td",[t._v("服务器内部错误，无法完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("501")]),t._v(" "),v("td",[t._v("服务器不支持请求的功能，无法完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("502")]),t._v(" "),v("td",[t._v("充当网关或代理的服务器，从远端服务器接收到了一个无效的请求")])]),t._v(" "),v("tr",[v("td",[t._v("503")]),t._v(" "),v("td",[t._v("由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中")])]),t._v(" "),v("tr",[v("td",[t._v("504")]),t._v(" "),v("td",[t._v("充当网关或代理的服务器，未及时从远端服务器获取请求")])]),t._v(" "),v("tr",[v("td",[t._v("505")]),t._v(" "),v("td",[t._v("服务器不支持请求的 HTTP 协议的版本，无法完成处理")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);