---
title: 浏览器URL处理以及javascript加载和执行时间线
date: 2019-12-04 16:28:44
categories:
- browser
tags:
- browser
---
当你在浏览器地址栏输入url，敲击回车后，发生了什么？文档返回后，浏览器如何执行脚本？

## 浏览器处理URL请求过程

1. 在接收到用户输入的网址后，浏览器会开启一个线程来处理这个请求，对用户输入的URL地址进行分析判断，如果是HTTP协议就按照HTTP协议方式来处理。

2. 调用浏览器引擎中的对应方法，比如webView中的loadUrl方法，分析并加载这个URL地址。

3. 通过DNS解析获取该网站地址对应的IP地址，查询完成后，连同浏览器的Cookie、userAgent等信息向网站目的IP发出GET请求。

4. 进行HTTP会话，浏览器客户端向Web服务端发送报文。

5. 进入网站后台上的Web服务器处理请求，如：Apache、Tomcat、Node.js等服务器。

6. 进入部署好的后端应用，如PHP、Java、JavaScript、Python等后端程序，找到对应的请求处理逻辑，这期间可能会读取服务器缓存或查询数据库等。

7. 服务器请求并返回响应报文，如果浏览器访问过该页面，缓存上有对应资源，会与服务器最后修改记录对比，一致则返回304，否则返回200和对应内容。

8. 浏览器开始下载HTML文档(响应报头为200时)或者从本地缓存读取文件内容。

9. 浏览器根据下载接收到的HTML文件解析结构建立DOM文档树，并根据HTML中标记请求下载指定的MIME类型文件（CSS、JavaScript文件等）。同时设置缓存等内容。

10. 页面开始解析渲染DOM，CSS根据规则解析并结合DOM文档树进行网页内容布局和绘制渲染，JavaScript根据DOM API操作DOM，并读取浏览器缓存、执行事件绑定等，页面整个展示完成。

## 同步、异步和延迟脚本

html解析器遇到`script`元素时，默认必须先执行脚本，然后再恢复文档的解析和渲染。

这对于内联脚本没什么问题，但对于src引入的外部文件，这意味着脚本之后的文档在该脚本下载和执行前，会阻塞 页面 UI的渲染。

### defer 和 async

defer 和 async 属性都会使浏览器在下载脚本时，继续解析和渲染文档。

- defer 属性：浏览器延迟执行脚本，直到文档的载入和解析完成，并可以操作。 可以获取所有的DOM，保持顺序完成。

- async属性：浏览器可以尽快执行脚本，而不用在下载脚本时，阻塞文档解析。也就是说脚本执行的时候DOM还没有被编译，所以有可能无法访问DOM结构，且是乱序的。

#### 优先级

  同时存在 defer 和 async ： async 优先，defer 被忽略。

#### 低版本方案

不支持async属性的浏览器，可以动态创建script元素，并把它插入到浏览器，来实现异步载入和执行。

```javascript
function loadasync(url){
  var head = document.getElementByTagName("head")[0];
  var s = document.createElement("script");
  s.src = url;
  head.appendChild(s);
}
```

Google Analytics 和 Google+ Badge 都使用了这种异步加载代码，但是是立即执行函数，基本模式如下：

 ```javascript
 (function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    a.src = 'js/jquery.min.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s,x);
})();
 ```

但是这种加载方法会在加载执行完之前阻止onload事件的触发。我们可以在onload时异步加载

```javascript
(function () {
    function async_load() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        a.src = 'js/jquery.min.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s,x);
    }

    if(window.attachEvent){
        window.attachEvent('onload',async_load);
    }else{
        window.addEventListener('load',async_load,false);
    }

})();
```

## JavaScript执行时间线

1. Web浏览器创建Document对象,开始解析web页面，解析HTML 元素和它们的文本内容后添加Element 对象和 Text 节点到文档中。这个阶段 `document.readystate = 'loading'`。

2. 遇到非async/defer的同步脚本文件时，这些脚本会**同步执行**。**并且在脚本下载和执行时解析器会暂停**。

3. 遇到`async`属性的脚本时，开始下载，但解析器不会等待下载，而是继续解析。**async脚本会在下载完成后尽快执行。所有的异步脚本🈲️使用document.write()方法。**

4. 文档解析完成，`document.readystate = 'interactive'`

5. 所有`defer`属性的延迟脚本，**按照它们在文档中出现的顺序执行**。异步脚本也可能会在这个时间执行。延迟脚本能访问完整的文档树，🈲️使用document.write()方法

6. 触发 `DOMContentLoaded` 事件。 `标志着程序从同步脚本执行阶段进入了异步事件驱动阶段`。**此时可能还有一步脚本没有执行完成。**

7. 如果有jquey的ready事件，此时会触发了

8. 文档解析完全完成，但浏览器还会等待其它内容载入，如：图片。**所有这些资源加载完成，且所有异步脚本完成载入和执行后,`document.readystate='complete'`。** 触发 Window 对象的 `load` 事件。

```javascript
window.onload = function () {
  console.log('window onload ')
}
document.addEventListener('DOMContentLoaded', function () {
  console.log('document DOMContentLoaded');
});
$(document).ready(function () {
  console.log('jquery read event')
})
// document DOMContentLoaded
// jquery read event
// window onload
```

## 如何计算渲染时间

`window.performance` 包含了浏览器加载阶段各种信息。
页面加载过程中的各个时间环顺序：
![performanc timing](/images/performanc_timing.png)

```javascript
const data = {
  timeOrigin: 1577341568983.8718,
  // 只有chrome浏览器有
  memory: {
    totalJSHeapSize: 19412842,
    usedJSHeapSize: 17133522,
    jsHeapSizeLimit: 2197815296
  },
  navigation: {
    // 0 正常进入页面
    // 1 通过 window.location.reload() 刷新页面
    // 2 通过浏览器的前进后退按钮进入页面
    // 255 非以上方式进入的页面
    type: 0,
    // 页面经过几次重定向跳转而来
    redirectCount: 0
  },
  timing: {
    // 在同一个浏览器上下文中，前一个网页unload的时间戳，如果无前一个网页的unload，则与fetchStart相等
    navigationStart: 1577341568983,
    // 与当前页面同域名的钱一个网页的unload的时间戳，其它都为0
    unloadEventStart: 0,
    unloadEventEnd: 0,
    // 第一个HTTP重定向发生时的时间。有跳转且是同域名的重定向才算，否则值为0
    redirectStart: 0,
    redirectEnd: 0,
    // 浏览器准备好使用 http 请求抓取文档的时间，这发生在检查本地缓存之前
    fetchStart: 1577341568993,
    // DNS 域名查询开始。如果使用了本地缓存(即无 DNS 查询)或持久连接，则与 fetchStart 值相等
    domainLookupStart: 1577341568993,
    domainLookupEnd: 1577341568993,
    // HTTP(TCP) 开始建立连接的时间，如果是持久连接，则与 fetchStart 相等
    connectStart: 1577341568993,
    // 完成三次握手
    connectEnd: 1577341568993,
    secureConnectionStart: 0,
    // HTTP 请求读取真实文档开始时间，包括从本地读取缓存
    requestStart: 1577341568995,
    // HTTP 接收响应开始的时间，包括从本地读取缓存
    responseStart: 1577341568996,
    responseEnd: 1577341568998,
    // 开始解析渲染 DOM 树时间， 此时 document.readyState变为 loading ,并抛出 readystatechange 相关事件
    domLoading: 1577341569004,
    // 完成解析 DOM 树, document.readyState 变为 interactive
    domInteractive: 1577341569195,
    // domCotentLoaded事件抛出之前
    domContentLoadedEventStart: 1577341569195,
    // domContentLoaded事件抛出之后
    domContentLoadedEventEnd: 1577341569197,
    // document.readyState 状态变为 complete
    domComplete: 1577341569205,
    // load 时间发送给文档，如果没有绑定load事件，值为0
    loadEventStart: 1577341569205,
    // load 事件的回调函数执行完毕
    loadEventEnd: 1577341569205
  }
};
```

各类指标计算：

```javascript
times.loadPage = t.loadEventEnd - t.navigationStart
// 解析 DOM 结构
times.domReady = t.domComplete - t.responseEnd
//【重要】读取页面第一个字节的时间
//【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
// TTFB 即 Time To First Byte 的意思
// 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte
times.ttfb = t.responseStart - t.navigationStart;

//【重要】内容加载完成的时间
//【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
times.request = t.responseEnd - t.requestStart;

//【重要】执行 onload 回调函数的时间
//【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？
times.loadEvent = t.loadEventEnd - t.loadEventStart;

// DNS 缓存时间
times.appcache = t.domainLookupStart - t.fetchStart;

// 卸载页面的时间
times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;

// TCP 建立连接完成握手的时间
times.connect = t.connectEnd - t.connectStart;
```

:star2: points:

- url解析中的DNS原理
- http和https协议
- 浏览器缓存的判断和清理
- jquery的ready事件，window的load事件`DOMContentLoaded`事件的顺序
- 浏览器渲染引擎机制
