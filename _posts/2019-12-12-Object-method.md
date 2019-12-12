---
title: Object的那些个方法
date: 2019-12-12 14:48:26
categories:
- javascript
tags:
- javascript_basic
---

JavaScript 内置的Object对象的实用方法。

## 概览

![Object](/images/Object.png)

## Object.defineProperty

直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
`Object.defineProperty(obj, prop, descriptor)`

### 属性描述符

| 描述符       | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| configurable | 是否可配置。默认：false。 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除 |
| enumerable   | 是否可枚举。默认：false。                                    |
| value        | 属性的值。默认：undefined                                    |
| writable     | 是否可写。默认：false。也就是value能不能被赋值运算符改变，但赋值不会报错。 |
| get          | 默认：undefined。访问该属性时，该方法会被执行，方法执行时没有参数传入。 |
| set          | 默认：undefined。属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。 |

1. value，writable 不能和get，set共存

2. 这些属性不一定是自身的，也可能是继承来的

3. **如果一个属性的enumerable为false，下面三个操作不会取到该属性:**

   - for…in循环（也包括枚举原型链中的属性）

   - Object.keys方法

   - JSON.stringify方法

4. 如果需要获取对象自身的所有属性，不管enumerable的值，可以使用 **Object.getOwnPropertyNames **方法。

5. for/of 和 for...in的不同之处

   for...of 循环，遍历所有数据结构的统一的方法。

   一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 for...of 循环遍历它的成员。也就是说，for...of 循环内部调用的是数据结构的 Symbol.iterator 方法。

   for...of 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如 arguments 对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。

6. 对象字面量赋值默认都为true。Object.defineProperty默认都为false。

7. get和set是vue2.0实现数据监听的方法。也是数组为什么不能侦听变化的原因。

## Object.defineProperties

```javascript
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

## Object.create

创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
`Object.create(proto[, propertiesObject])`

- `Object.create(null)` 建一个原型为null的空对象,也就是它不会有任何继承的方法和属性。

```javascript
Object.create = Object.create || function(obj){
    var F = function(){};
    F.property = obj;
    return new F();
}
```

## Object.assign

方法用于将所有「 可枚举属性 」的值从一个或多个源对象复制到目标对象。它将返回目标对象。

`Object.assign(target, …sources)`

- 是一个浅拷贝
- 不会在source对象值为 null 或 undefined 的时候抛出错误
- Symbol类型的属性会被拷贝
- 继承属性和不可枚举属性不会被拷贝
- source 为原始类型时：null 和 undefined 会被忽略，只有字符串的包装对象才可能有自身可枚举属性。
- 源对象属性是不可写的话，assign会导致异常
- 异常会打断后续拷贝任务
- 不会拷贝访问器，而是直接返回访问器的值。

## Object.entries

对象自身可枚举属性的键值对数组

```javascript
let source = {
    name: 'fiona',
    age: 24
}

let obj = Object.create(source)

obj.sex = 'female'
obj.weight = 53

console.log(Object.entries(obj))   // [ [ 'sex', 'female' ], [ 'weight', 53 ] ]


for (let k in obj) {
    console.log(k)
}

```

## Object.fromEntries

把键值对列表转换为一个对象。

```javascript
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
```
