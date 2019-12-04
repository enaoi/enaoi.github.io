---
title: 函数防抖和节流
date: 2019-12-04 15:58:26
categories:
- javascript
tags:
- javascript_basic
---

throttle 和 debounce 的定义
节流(throttle)：在 X ms内最多触发一次函数。
防抖(debounce): 在最后一次函数调用后延迟 X ms执行函数。

## 实现

debounce函数

```javascript
// 简洁版
function debounce(func, interval) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, interval || 200)
    }
}

// 高程中的案例
function debounce(func, context) {
    clearTimeout(func.tId)
    func.tId = setTimeout(function(){
        func.call(context)
    }, 100)
}

// other
function debounce(func, interval) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, interval || 200)
    }
}
```

throttle函数实现

```javascript
function throttle(func, waitTime) {
    var timeout = null;
    var previous = 0;
    var later = function () {
        previous = Date.now()
        timeout = null
        func()
    }

    return function () {
        var now = Date.now()
        var remaining = waitTime - (now - previous);
        if (remaining <= 0 || remaining > waitTime) {
            if (timeout) {
                clearTimeout(timeout)
            }
            later()
        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
    }
}
```

## 实际应用场景

主要还是根据业务需求场景。需要不断响应，但是不要在时间范围内过多的，使用throttle,比如计算页面滚动位置等。需要将一组动作打包成单个的，使用 debounce，比如需要等待用户输入停顿400ms后发起ajax请求等。

### debounce的应用

1. search 模块，比如输入的input的keyup事件

### throttle的应用

1. window.onresize事件
2. 计算页面的滚动位置
3. mousemove事件
4. 上传文件

## 第三方库

- lodash
- jquery

## 其它：Queue

```javascript
function queue(func, waitTime) {
    var funcQueue = [], isWaiting;

    var executeFunc = function (fn) {
        isWaiting = true;
        func(fn)
        setTimeout(play, waitTime)
    }

    var play = function () {
        if (funcQueue.length) {
            var fn = funcQueue.shift()
            executeFunc(fn)
        } else {
            isWaiting = false;
        }
    }

    return function (fn) {
        if (isWaiting) {
            funcQueue.push(fn)
        } else {
            executeFunc(fn)
        }
    }
}
```
