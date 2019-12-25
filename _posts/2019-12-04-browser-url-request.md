---
title: 浏览器URL处理以及javascript加载和执行时间线
date: 2019-12-04 16:28:44
categories:
- javascript
tags:
- javascript_basic
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

🎈points:

- url解析中的DNS原理
- http和https协议
- 浏览器缓存的判断和清理
- jquery的ready事件，window的load事件和`DOMContentLoaded`事件的顺序
- 浏览器渲染引擎机制
