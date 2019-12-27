---
title: 渲染引擎工作流程
date: 2019-12-04 15:58:26
categories:
- browser
tags:
- browser
---

浏览器内核包括渲染引擎和JS引擎，由于js引擎越来越独立，内核就倾向于只指渲染引擎。

## 渲染引擎工作流

```graph
graph LR
A[解析HTML构建DOM树]-->B[构建渲染树]
B-->C[渲染树布局阶段]
C-->D[绘制渲染树]
```

- 将HTML标签解析成由多个DOM元素对象节点组成的且具有节点父子关系的DOM树结构。
- 根据DOM树结构的每个节点顺序提取计算使用的CSS规则并且重新计算DOM树结构的样式数据，生成一个带样式描述的DOM渲染树
- 主要是元素的布局属性生效（position、float、margin等）
- 绘制阶段主要是颜色、背景、文本等样式信息应用到每个节点上。

**不同浏览器会有些许差异：**

webkit内核渲染主流程
![webkit render](/images/weibkit_render.png)

google内核渲染主流程
![google render](/images/google_render.png)

### 解析

将文档转化为代码可以使用的结构，解析的结果代表了文档结构的节点树，也称为解析树。解析器分两个结构：词法分析和语法分析。词法分析负责将输入内容分解为有效标记符号；语法分析对语言应用语法规则，从而构建解析树。

1. HTML解析器：该阶段结束，浏览器会将文档状态设置为完成，一个加载onload事件将随之触发。
2. CSS解析器
3. 处理脚本和样式表的顺序
   1. 脚本： 同步，async 和 defer 脚本的加载各有不同。参考之前的文章。
   2. 预解析：在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。
   3. 样式表：应用样式表不会更改 DOM 树，因此似乎没有必要等待样式表并停止文档解析。但脚本在文档解析阶段会请求样式信息。如果当时还没有加载和解析样式，脚本就会获得错误的回复。解决方案：Firefox， 在样式表加载和解析的过程中，会禁止所有脚本。WebKit，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，才会禁止该脚本。

### 构建渲染树

**作用：**按照正确的顺序绘制内容。根据 display 属性的不同，针对同一个 DOM 节点应创建什么类型的呈现器。

**与DOM树区别：**
    - 非可视化的 DOM 元素不会插入渲染树中，例如`head`元素。如果元素的`display`属性值为`none`，那么也不会显示在渲染树中（但是`visibility`属性值为`hidden`的元素仍会显示）
    - 有一些 DOM 元素对应多个可视化对象。它们往往是具有复杂结构的元素，无法用单一的矩形来描述，如`select`；关于多呈现器的例子是格式无效的 HTML
    - 渲染对象对应于 DOM 节点，但在树中所在的位置与 DOM 节点不同：浮动定位和绝对定位的元素

**计算样式：**计算渲染对象的可视化属性，就是计算每个元素的样式属性。 难点：样式数据大；元素匹配复杂；应用规则涉及到复杂的层叠规则。css权重：`!important` > `内联样式规则(权重1000)` > `id选择器(权重100)`>`类选择器(权重10)`>`元素选择器(权重1)`

### 布局

渲染树并不包含位置和大小信息，计算这些信息的过程称为布局或重排。

HTML采用基于流的布局模型，只需要遍历一次就可以计算出所有的几何信息。处于流后面位置的元素不会影响前面元素的几何特征。布局可以按照从左至右，从上至下的顺序遍历文档。 布局是个递归的过程，它从根渲染器开始然后递归遍历所有子渲染器，具有子渲染器的渲染器继续递归遍历遍历所有子渲染器。每个渲染器都有一个“layout”或“reflow”方法，每个渲染器都会调用需要进行布局的子代的layout方法。

#### Dirty位系统

**作用：**避免细小的变化影响整体布局。 如果渲染器发生了变化或者其子代发生了变化就会被标注为”dirty”或children are dirty，需要进行布局。

**全局布局和增量布局：**

- 全局布局：同步执行。影响所有渲染器的全局样式发生了改变，比如size变化；屏幕尺寸发生变化。
- 增量布局：异步执行。只对标记为dirty的渲染器布局。Firefox将增量布局的“reflow 命令”加入队列，调度程序会触发批量触发这些命令。Webkit 有一个定时器来执行增量布局，对渲染树遍历，并对有dirty标记的渲染器进行布局。

#### 布局处理

1. 父呈现器确定自己的宽度
2. 父呈现器依次处理子呈现器，并且放置子呈现器（设置 x,y 坐标）。 如果有必要，调用子呈现器的布局（如果子呈现器是 dirty 的，或者这是全局布局，或出于其他某些原因），这会计算子呈现器的高度。
3. 父呈现器根据子呈现器的累加高度以及边距和补白的高度来设置自身高度，此值也可供父呈现器的父呈现器使用。
4. 将其 dirty 位设置为 false。 宽度计算：呈现器宽度是根据容器块的宽度、呈现器样式中的“width”属性以及边距和边框计算得出的

### 绘制

遍历渲染树，并调用渲染器的“paint”方法，将渲染器的内容显示在屏幕上。绘制工具是使用用户界面基本组件完成的。

**全局绘制和增量绘制：**
在增量绘制中，部分渲染器发生变化不影响整个树。 更改后的呈现器将其在屏幕上对应的矩形区域设为无效，这导致 OS 将其视为一块“dirty 区域”，并生成“paint”事件。OS 会很巧妙地将多个区域合并成一个。在 Chrome 浏览器中，情况要更复杂一些，因为 Chrome 浏览器的呈现器不在主进程上。Chrome 浏览器会在某种程度上模拟 OS 的行为。展示层会侦听这些事件，并将消息委托给呈现根节点。然后遍历呈现树，直到找到相关的呈现器，该呈现器会重新绘制自己（通常也包括其子代）

**绘制顺序：**
绘制的顺序其实就是元素进入堆栈样式上下文的顺序。这些堆栈会从后往前绘制，因此这样的顺序会影响绘制。块呈现器的堆栈顺：背景颜色，背景图片，边框，子代，轮廓

## 重排和重绘

在浏览器中，因为渲染引擎和JS引擎是独立分离的，比如 在IE中，ECMAScrit的实现在jscript.dll中，而DOM的实现在mshtml.dll中；在Chrome中使用WebKit中的 WebCore处理DOM和渲染，但ECMAScript是在V8引擎中实现的，其他浏览器的情况类似。所以通过JavaScript代码调用DOM接口，相当于两个独立模块的交互。相比较在同一模块中的调用，这种跨模块的调用其性能损耗是很高的。但DOM操作对性能影响最大其实还是因为它导致了浏览器的`重绘（repaint）`和 `重排（reflow）`。

关于重绘和重排对性能的影响：[《浏览器的工作原理：新式网络浏览器幕后揭秘》](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

重排的代价比重绘的代价高很多，以下操作会导致重绘或重排：

- 增加、删除和修改可见DOM元素
- 页面初始化的渲染
- 移动DOM元素
- 修改CSS样式，改变DOM元素的尺寸
- DOM元素内容改变，使得尺寸被撑大
- 浏览器窗口尺寸改变
- 浏览器窗口滚动

这些操作都是DOM操作中比较常见的。
现代浏览器会针对重排或重绘做性能优化，比如，把DOM操作积累一批后统一做一次重排或重绘。**但在有些情况下，浏览器会立即重排或重绘。**

比如请求如下的DOM元素布局信息：

- offsetTop/Left/Width/Height
- scrollTop/Left/Width/Height
- clientTop/Left/Width/Height
- getComputedStyle()/currentStyle

因为这些值都是动态计算的，所以浏览器需要尽快完成页面的绘制，然后计算返回值，从而打乱了重排或重绘的优化。

## 优化办法

1. 合并多次的DOM操作为单次的DOM操作

    ```javascript
    element.style.borderColor = '#f00';
    element.style.borderStyle = 'solid';
    element.style.borderWidth = '1px';

    //good
    element.style.cssText += 'border: 1px solid #f00;';

    //best 更利于维护
    element.className += 'empty';
    ```

2. 使用文档片段createDocumentFragment()

    ```html
    <ul id='fruit'>
    <li> apple </li>
    <li> orange </li>
    </ul>

    ```

    ```javascript
    // js
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

3. 通过隐藏后操作DOM来减少渲染次数

    ```javascript
    var myElement = document.getElementById('myElement');
    myElement.style.display = 'none';
    // 一些基于myElement的大量DOM操作
    //...
    myElement.style.display = 'block';
    ```

4. 克隆DOM元素到内存中

    把页面上的DOM元素克隆一份到内存中，然后再在内存中操作克隆的元素，操作完成后使用此克隆元素替换页面中原来的DOM元素。在内存中操作克隆元素不会引起页面上的性能损耗。

    ```javascript
    var old = document.getElementById('myElement');
    var clone = old.cloneNode(true);
    // 一些基于clone的大量DOM操作
    //...
    old.parentNode.replaceChild(clone, old);
    ```

5. 将动画效果的DOM元素脱离页面布局流

    - 使用 **绝对位置[absolute或者fixed]** 定位页面上的动画元素，将其脱离文档流
    - 让元素动起来。当它扩大时，会临时覆盖部分页面。但这只是页面一个小区域的重绘过程，不会产生重排并重绘页面的大部分内容。
    - 当动画结束时恢复定位，从而只会下移一次文档的其他元素

6. 谨慎取得DOM元素的布局信息

    ```javascript
    for (var i=0; i < len; i++) {
        myElements[i].style.top = targetElement.offsetTop + i*5 + 'px';
    }

    // 如果存在重复调用，最佳的做法是尽量把这些值缓存在局部变量中

    var targetTop = targetElement.offsetTop;
    for (var i=0; i < len; i++) {
        myElements[i].style.top = targetTop+ i*5 + 'px';
    }

    ```

    ```javascript
    var newWidth = div1.offsetWidth + 10;
    div1.style.width = newWidth + 'px';

    var newHeight = myElement.offsetHeight + 10; // 强制页面重排
    myElement.style.height = newHeight + 'px'; // 又会重排一次

    // 取得DOM元素的布局信息提前，因为浏览器会优化连续的DOM操作

    var newWidth = div1.offsetWidth + 10;
    var newHeight = myElement.offsetHeight + 10;

    div1.style.width = newWidth + 'px';
    myElement.style.height = newHeight + 'px';
    ```

7. 使用事件托管方式绑定事件

    在DOM元素上绑定事件会影响页面的性能，一方面，绑定事件本身会占用处理时间，另一方面，浏览器保存事件绑定，所以绑定事件也会占用内存。页面中元素绑定的事件越多，占用的处理时间和内存就越大，性能也就相对越差，所以在页面中绑定的事件越少越好。一个优雅的手段是使用事件托管方式，即利用事件冒泡机制，只在父元素上绑定事件处理，用于处理所有子元素的事件，在事件处理函数中根据传入的参数判断事件源元素，针对不同的源元素做不同的处理。这样就不需要给每个子元素都绑定事件了，管理的事件绑定数量变少了，自然性能也就提高了。

    ```javascript
    // 获取父节点，并添加一个click事件
    document.getElementById('list').addEventListener("click",function(e) {
        // 检查事件源元素
        if(e.target && e.target.nodeName.toUpperCase == "LI") {
            // 针对子元素的处理 ...
        }
    });

    // jquery
    $( "table" ).on( "click", "td", function() {
        // 针对子元素的处理 ...
        $( this ).toggleClass( "chosen" );
    });

    ```
