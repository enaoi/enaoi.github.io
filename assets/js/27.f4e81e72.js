(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{386:function(t,o,e){"use strict";e.r(o);var s=e(25),v=Object(s.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"日常问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日常问题"}},[t._v("#")]),t._v(" 日常问题")]),t._v(" "),e("h2",{attrs:{id:"http发出两次请求-options请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http发出两次请求-options请求"}},[t._v("#")]),t._v(" http发出两次请求-Options请求")]),t._v(" "),e("p",[t._v("现象：请求过程中，同一个接口发起了两次请求，第一次是Options请求，第二次是我们的正常请求。")]),t._v(" "),e("h3",{attrs:{id:"为什么发生两次请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么发生两次请求"}},[t._v("#")]),t._v(" 为什么发生两次请求")]),t._v(" "),e("p",[t._v("http的请求方式，包括OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE和CONNECT等八种请求方式。其中，get与post只是我们常用的请求方式。")]),t._v(" "),e("p",[t._v("options请求的官方定义：OPTIONS方法是用于请求获得由Request-URI标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户端可以在采取具体资源请求之前，决定对该资源采取何种必要措施，或者了解服务器的性能。\n也就是：在发生正式的请求之前，先进行一次预检请求。看服务端返回一些信息，浏览器拿到之后，看后台是否允许进行访问。")]),t._v(" "),e("p",[t._v("如何产生Options请求：")]),t._v(" "),e("ol",[e("li",[t._v("产生了复杂请求")]),t._v(" "),e("li",[t._v("发生了跨域")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("简单请求")]),t._v(" "),e("ol",[e("li",[t._v("请求方法是GET、HEAD或者POST，并且当请求方法是POST时，"),e("code",[t._v("Content-Type")]),t._v("必须是"),e("code",[t._v("application/x-www-form-urlencoded")]),t._v(", "),e("code",[t._v("multipart/form-data")]),t._v("或着"),e("code",[t._v("text/plain")]),t._v("中的一个值。所以一般的JSON数据格式，post方法是一个复杂请求哦。")]),t._v(" "),e("li",[t._v("请求中没有自定义HTTP头部。")])])]),t._v(" "),e("h3",{attrs:{id:"options请求有什么作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options请求有什么作用"}},[t._v("#")]),t._v(" options请求有什么作用")]),t._v(" "),e("p",[t._v("官方将头部带自定义信息的请求方式称为带预检（preflighted）的跨域请求。在实际调用接口之前，会首先发出一个options请求，检测服务端是否支持真实的请求进行跨域的请求。")]),t._v(" "),e("p",[t._v("真实请求在options请求中，通过"),e("code",[t._v("request-header")]),t._v("将 "),e("code",[t._v("Access-Control-Request-Headers")]),t._v("与"),e("code",[t._v("Access-Control-Request-Method")]),t._v("发送给后台，另外浏览器会自行加上一个"),e("code",[t._v("Origin")]),t._v("请求地址。")]),t._v(" "),e("p",[t._v("服务端在接收到预检请求后，根据资源权限配置，在"),e("code",[t._v("response-header")]),t._v("头部加入"),e("code",[t._v("access-control-allow-headers")]),t._v("（允许跨域请求的请求头）、"),e("code",[t._v("access-control-allow-methods")]),t._v("（允许跨域请求的请求方式）、"),e("code",[t._v("access-control-allow-origin")]),t._v("（允许跨域请求的域）。\n另外，服务端还可以通过"),e("code",[t._v("Access-Control-Max-Age")]),t._v("来设置一定时间内无须再进行预检请求，直接用之前的预检请求的协商结果即可。浏览器再根据服务端返回的信息，进行决定是否再进行真实的跨域请求。这个过程对于用户来说，也是透明的。\n另外在HTTP响应头，凡是浏览器请求中携带了身份信息，而响应头中没有返回"),e("code",[t._v("Access-Control-Allow-Credentials: true")]),t._v("的，浏览器都会忽略此次响应。")]),t._v(" "),e("p",[t._v("总结：只要是带自定义header的跨域请求，在发送真实请求前都会先发送OPTIONS请求，浏览器根据OPTIONS请求返回的结果来决定是否继续发送真实的请求进行跨域资源访问。所以复杂请求肯定会两次请求服务端。")]),t._v(" "),e("h3",{attrs:{id:"options请求如何避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options请求如何避免"}},[t._v("#")]),t._v(" options请求如何避免")]),t._v(" "),e("p",[t._v("1：使用代理，避开跨域。\n2：将复杂跨域请求更改为简单跨域请求。\n3：不使用带自定义配置的header头部。")])])}),[],!1,null,null,null);o.default=v.exports}}]);