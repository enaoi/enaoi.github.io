---
title: 浏览器重绘和重排
date: 2019-12-04 15:58:26
categories:
- javascript
tags:
- javascript_basic
---

在浏览器中，DOM的实现和ECMAScript的实现是分离的。比如 在IE中，ECMAScrit的实现在jscript.dll中，而DOM的实现在mshtml.dll中；在Chrome中使用WebKit中的 WebCore处理DOM和渲染，但ECMAScript是在V8引擎中实现的，其他浏览器的情况类似。所以通过JavaScript代码调用DOM接口，相当于两个独立模块的交互。相比较在同一模块中的调用，这种跨模块的调用其性能损耗是很高的。但DOM操作对性能影响最大其实还是因为它导致了浏览器的`重绘（repaint）`和 `重排（reflow）`。

关于重绘和重排对性能的影响：[《浏览器的工作原理：新式网络浏览器幕后揭秘》](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

重绘：页面某些元素的颜色背景色的修改。
重排：元素的位置或尺寸发生变化，浏览器需要重新计算渲染树。
重排的代价比重绘的代价高很多，以下操作会导致重绘或重排：

- 增加、删除和修改可见DOM元素
- 页面初始化的渲染
- 移动DOM元素
- 修改CSS样式，改变DOM元素的尺寸
- DOM元素内容改变，使得尺寸被撑大
- 浏览器窗口尺寸改变
- 浏览器窗口滚动

这些操作都是DOM操作中比较常见的。
现代浏览器会针对重排或重绘做性能优化，比如，把DOM操作积累一批后统一做一次重排或重绘。
**但在有些情况下，浏览器会立即重排或重绘。**
比如请求如下的DOM元素布局信息：offsetTop/Left/Width/Height、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()或 currentStyle。因为这些值都是动态计算的，所以浏览器需要尽快完成页面的绘制，然后计算返回值，从而打乱了重排或重绘的优化。

## 优化办法

1.合并多次的DOM操作为单次的DOM操作

```javascript
element.style.borderColor = '#f00';
element.style.borderStyle = 'solid';
element.style.borderWidth = '1px';

//good
element.style.cssText += 'border: 1px solid #f00;';

//best 更利于维护
element.className += 'empty';
```

2.使用文档片段createDocumentFragment()
html

```javascript
<ul id='fruit'>
  <li> apple </li>
  <li> orange </li>
</ul>

```

js

```javascript
var lis = document.getElementById('fruit');
var li = document.createElement('li');
li.innerHTML = 'apple';
lis.appendChild(li);

var li = document.createElement('li');
li.innerHTML = 'watermelon';
lis.appendChild(li);

 //两次添加会容易造成页面闪动
 //优化

var fragment = document.createDocumentFragment();

var li = document.createElement('li');
li.innerHTML = 'apple';
fragment.appendChild(li);

var li = document.createElement('li');
li.innerHTML = 'watermelon';
fragment.appendChild(li);

document.getElementById('fruit').appendChild(fragment);
```

3.通过隐藏后操作DOM来减少渲染次数

```javascript
var myElement = document.getElementById('myElement');
myElement.style.display = 'none';
// 一些基于myElement的大量DOM操作
//...
myElement.style.display = 'block';
```

4.克隆DOM元素到内存中
把页面上的DOM元素克隆一份到内存中，然后再在内存中操作克隆的元素，操作完成后使用此克隆元素替换页面中原来的DOM元素。在内存中操作克隆元素不会引起页面上的性能损耗。

```javascript
var old = document.getElementById('myElement');
var clone = old.cloneNode(true);
// 一些基于clone的大量DOM操作
//...
old.parentNode.replaceChild(clone, old);
```

5.将动画效果的DOM元素脱离页面布局流

- 使用 **绝对位置[absolute或者fixed]** 定位页面上的动画元素，将其脱离文档流
- 让元素动起来。当它扩大时，会临时覆盖部分页面。但这只是页面一个小区域的重绘过程，不会产生重排并重绘页面的大部分内容。
- 当动画结束时恢复定位，从而只会下移一次文档的其他元素

6.谨慎取得DOM元素的布局信息

```JavaScript
for (var i=0; i < len; i++) {
    myElements[i].style.top = targetElement.offsetTop + i*5 + 'px';
}

<!--如果存在重复调用，最佳的做法是尽量把这些值缓存在局部变量中-->

var targetTop = targetElement.offsetTop;
for (var i=0; i < len; i++) {
    myElements[i].style.top = targetTop+ i*5 + 'px';
}

```

```JavaScript
var newWidth = div1.offsetWidth + 10;
div1.style.width = newWidth + 'px';

var newHeight = myElement.offsetHeight + 10; // 强制页面重排
myElement.style.height = newHeight + 'px'; // 又会重排一次

<!--取得DOM元素的布局信息提前，因为浏览器会优化连续的DOM操作-->

var newWidth = div1.offsetWidth + 10;
var newHeight = myElement.offsetHeight + 10;

div1.style.width = newWidth + 'px';
myElement.style.height = newHeight + 'px';
```

7.使用事件托管方式绑定事件
在DOM元素上绑定事件会影响页面的性能，一方面，绑定事件本身会占用处理时间，另一方面，浏览器保存事件绑定，所以绑定事件也会占用内存。页面中元素绑定的事件越多，占用的处理时间和内存就越大，性能也就相对越差，所以在页面中绑定的事件越少越好。一个优雅的手段是使用事件托管方式，即利用事件冒泡机制，只在父元素上绑定事件处理，用于处理所有子元素的事件，在事件处理函数中根据传入的参数判断事件源元素，针对不同的源元素做不同的处理。这样就不需要给每个子元素都绑定事件了，管理的事件绑定数量变少了，自然性能也就提高了。

```JavaScript
// 获取父节点，并添加一个click事件
document.getElementById('list').addEventListener("click",function(e) {

    // 检查事件源元素
    if(e.target && e.target.nodeName.toUpperCase == "LI") {

         // 针对子元素的处理 ...
    }
});


<!--jQuery-->
$( "table" ).on( "click", "td", function() {
    // 针对子元素的处理 ...
    $( this ).toggleClass( "chosen" );
});

```
