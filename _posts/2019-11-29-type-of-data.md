---
title: 数据类型
date: 2019-11-29 11:40:45
categories:
- javascript
tags:
- javascript
- javascript_basic
---
数据类型可以分为原始-对象类型、拥有-不拥有方法、可变-不可变几种。其中null、undefined比较特殊。

## 1. 原始类型 / 对象类型

- 原始类型：`number`、`boolean`、`string`、`null`、`undefined`、`symbol` (ES6)
- 对象类型：Object、Array、Function、....

## 2. 可以/不可以拥有方法

- 拥有方法:`object、number、string、boolean、symbol`
- 无法拥有方法: `null、和undefined`

## 3. mutable / immutable 类型

- immutable：number、boolean、null、undefined 不可以变。 string 可以看做是字符串组成的数组，但是javascript可以访问字符串任意位置的文本，但并未提供修改内容的方法。
- mutable：对象和数组属于可变类型

## null & undefined

- null: javascript 关键字，表示空值。
- undefined: 是预定的全局变量，并不是关键字。 undefined 在 ES3 中是可读可写的。ES5中修正为只读。

```javascript
null == undefined  // true
null === undefined  // false
```
