---
title: javascript运行机制(Event Loop)
date: 2019-12-19 15:40:26
categories:
- javascript
tags:
- javascript_middle
---
Javascript 是一门单线程语言，为了实现主线程的不阻塞，Event Loop 这样的方案应运而生。

## 基本概念

1. 同步任务 => 进入主线程
2. 异步任务 => 进入Event Table，注册回调函数 => 进入Event Queue
    异步任务可以继续划分为：
     - macrotask宏任务： `setTimeout`、`setInterval`、`setImmediate`、`I/O`、`UI rendering`
     - microtask微任务：`process.nextTick`、`promise`、`MutaionObserver`、`Object.observe`

💣 promise.then在不同浏览器里有细微差别，最新模拟结果都为micro task。

> 有两种event loops，一种在浏览器上下文，一种在workers中。

- 每个线程都有自己的 event loop。
- 浏览器可以有多个 event loop， browsing contexts 和 web workers 就是相互独立的。
- 所有同源的 browsing contexts 可以共用 event loop, 这样它们之间就可以相互通信。

任务执行顺序：

1. 执行主栈同步任务
2. 执行 任务对列 中的所有微任务
3. 执行一个宏任务
4. 执行任务对列中的所有微任务
5. loop...

![event loop](/images/event_loop.png)

## setTimeOut

🎈 setTimeout 时间结束后，函数才进入Event Queue。
💣  如果此时主线程正在执行任务，则等待。所以setTimeout的的时间并不是精确的执行时间。
💣  `setTimeout(fn, 0)` 并不是立即执行，而是某个任务在主线程空闲后立刻执行。
💣  即使主线程为空，也达不到0ms，大概4ms左右。

## setInterval

🎈 setInterval每隔指定的时间将注册的函数置入Event Queue。
💣 同setTimeout相似，如果setInterval的回调函数fn执行时间超过了延迟时间，则看不出来有时间间隔。

## Promise 和 process.nextTick(callback)

书面理论是这样的：

- queue可以看做一种数据结构，用以存储需要执行的函数

- timer类型的API（setTimeout/setInterval）注册的函数，等到期后进入task队列（这里不详细展开timer的运行机制）

- 其余API注册函数直接进入自身对应的task/microtask队列

- Event Loop执行一次，从task队列中拉出一个task执行

- Event Loop继续检查microtask队列是否为空，依次执行直至清空队列

💣  node11后和浏览器保持一致，之前版本中 nextTick 优先级高于 promise.then

## 浏览器中的timer

```javascript
//https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#93

double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond);

```

这里interval就是传入的数值，可以看出传入0和传入1结果都是oneMillisecond，即1ms。

所以导致下面的输出：

```javascript
setTimeout(() => {
  console.log(2)
}, 2)

setTimeout(() => {
  console.log(1)
}, 1)

setTimeout(() => {
  console.log(0)
}, 0)
```

等于 `1，0，2`

## node中的timer

```javascript
// https://github.com/nodejs/node/blob/v8.9.4/lib/timers.js#L456

if (!(after >= 1 && after <= TIMEOUT_MAX))
  after = 1; // schedule on next tick, follows browser behavior

```

node中为了保持和浏览器的一致性，也是1秒和0秒结果相同。

node中的Event Loop分阶段，阶段有先后，依次是

- expired timers and intervals，即到期的setTimeout/setInterval
- I/O events，包含文件，网络等等
- immediates，通过setImmediate注册的函数
- close handlers，close事件的回调，比如TCP连接断开
- 同步任务及每个阶段之后都会清空microtask队列
  - 优先清空next tick queue，即通过`process.nextTick`注册的函数
  - 再清空other queue，常见的如Promise
- 而和规范的区别，在于node会清空当前所处阶段的队列，即执行所有task

```javascript
setTimeout(() => {
  console.log(0)
})

setImmediate(() => {
  console.log(1)
})

```

不能保证执行顺序。问题的关键在于`setTimeout`何时到期，只有到期的`setTimeout`才能保证在`setImmediate`之前执行。

### 执行效率

从`node`的实现来看，`setTimeout`这种timer类型的API，需要创建定时器对象和迭代等操作，任务的处理需要操作小根堆，时间复杂度为**O(log(n))**。而相对的，`process.nextTick`和`setImmediate`时间复杂度为**O(1)**，效率更高。

## Vue.nextTick

vue源码内部尝试对异步队列使用原生的`Promise.then`、`MutationObserver`、`setImmediate`,如果当前执行环境不支持，就采用`setTimeout(fn, 0)`代替。参看[源码](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js)。

## MutationObserver

> 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。

[使用指南](http://javascript.ruanyifeng.com/dom/mutationobserver.html#toc1)

Nodejs中的eventLoop

![eventloop](http://img.zhufengpeixun.cn/nodesystem.png)

1. V8引擎解析JavaScript脚本。
2. 解析后的代码，调用Node API。
3. libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
4. V8引擎再将结果返回给用户。

## 参考文档

[1. Event Loop的规范和实现](https://juejin.im/post/5a6155126fb9a01cb64edb45)

[2. 从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)

[3. 这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
