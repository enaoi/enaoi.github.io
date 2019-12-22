---
title: 数据类型
date: 2019-12-21 19:40:45
categories:
- javascript
tags:
- javascript_basic
---
数据类型包括：数据的分类，判断和转换。其中number类型的存储和问题还等继续总结。如大数相加的问题。

## 数据分类

数据类型可以分为原始-对象类型、拥有-不拥有方法、可变-不可变几种。其中null、undefined比较特殊。

### 1. 原始类型 / 对象类型

- 原始(基本数据)类型：`number`、`boolean`、`string`、`null`、`undefined`、`symbol` (ES6)
- 对象类型：Object、Array、Function、....

### 2. 可以/不可以拥有方法

- 拥有方法:`object、number、string、boolean、symbol`
- 无法拥有方法: `null、和undefined`

### 3. mutable / immutable 类型

- immutable：number、boolean、null、undefined 不可以变。 string 可以看做是字符串组成的数组，但是javascript可以访问字符串任意位置的文本，但并未提供修改内容的方法。
- mutable：对象和数组属于可变类型

### null & undefined

- null: javascript 关键字，从逻辑角度看，null表示一个空指针对象。这也是`typeof null`返回“object”的一个原因。
- undefined: 是预定的全局变量，并不是关键字。 undefined 在 ES3 中是可读可写的。ES5中修正为只读。在var对其申明，但未赋值时，其值就是undefined。

```javascript
null == undefined  // true
null === undefined  // false
```

## 基本数据类型

### Boolean 类型

1. 区分大小写，也就是说True和False 都不是boolean值。
2. 值为false的类型转换有： 空字符串，0和NaN，null，undefined。

### Number 类型

#### 浮点数

1. 因为浮点数需要的内存空间是整数的两倍，javascript会将可以转化为整数的浮点数解析为整数。如小数点后不带数字的浮点数，或者小数点后为0的数。
2. 极大极小的数可以转化为e表示法表示的浮点数表示，如2.13e7。
3. 浮点数的最高精度为17位小数，但精度会丢失。0.1+0.2!==0.3是IEEE754数值的浮点计算的通病。

#### 数值范围

1. 超出`Number.MAX_VALUE`将会被标记为 `Infinity`，小于`Number.MIN_VALUE`的值将会被标记为 `-Infinity`。
2. 可以通过`isFinite()`函数判断一个数值是不是有穷的。

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
Number.MAX_SAFE_INTEGER // 2^53-1 9007199254740991
Number.MIN_SAFE_INTEGER // -(2^53-1) -9007199254740991
```

3. 什么是安全值？超出安全值的数如何运算？
4. 判断是否是安全值 `Number.isSafeInteger()`


#### NaN

1. NaN(not a number) 是一个特殊的值, 任何数除以0就会返回这个错误。
2. NaN与任何值都不相等，包括它自己。
3. `isNaN()`函数会将传入的值尝试转换为数值，不能转换为数值的，返回true
4. `isNaN()`函数也适用于对象，基于对象调用的时候，会先调用对象的valueOf方法，然后确认该方法返回的值是否可以转为数值。如果不能，则基于这个返回值，继续调用toString方法，再测试返回值。

#### 数值转换

1. Number() 函数： 适用于任何类型

   | 输入      | 输出                                                         |
   | --------- | ------------------------------------------------------------ |
   | boolean   | true：1\|false：2                                            |
   | number    | 相等                                                         |
   | null      | 0                                                            |
   | undefined | NaN                                                          |
   | string    | "011"-> 11，"01.1"->1.1，"0xf"->15(16进制转化为10进制)，""->0，其它->NaN |
   | object    | 调用valueOf(),按上面规则处理返回值，如果结果是NaN，则调用toString方法，在按上面的规则处理返回值。 |

2. parseInt() 函数： 专用于字符串

   - 忽略空格，直到找到第一个非空格字符
   - 如果第一个字符不是数字或者是负号，返回NaN
   - 依次解析，遇到非数字字符，直接返回已解析的结果。如“1234blue”返回1234。
   - 小数点也会忽略，直接返回结果。如"12.5"返回12
   - 可以识别各种整数格式，如八进制和十六进制。“0xf”返回15,但八进制需要第二个参数，基数，否则ES5会识别为十进制。

3. parseFloat() 函数： 专用于字符串

   - 与parseInt相似，但是第一个小数点有效，直到遇到无效字符。
   - 只解析10进制，忽略前导0。
   - 如果解析的是一个可解析为整数的值，则会返回整数值。

### String 类型

1. 单引号，双引号相同
2. 字符串是不可变的，一旦创建，如果要改变，先销毁原来的字符串，再用另一个包含新值的字符串填充该变量
3. 转换为字符串，一般都是调用 toString 方法。null和undefined没有这个方法。number的可以输入基数。

### Object 类型

Object对象都具有：

1. Constructor: 保存用于创建当前对象的函数。
2. hasOwnProperty(propertyName): 检查给定的属性是否存在当前对象中，而不是原型中。
3. isPrototypeOf(object): 是否是给定对象的原型
4. prototypeIsEnumerable(propertyName): 是否能被 for...in 遍历
5. toLocalString()
6. toString()
7. valueOf(): 返回对象的字符串，数值或布尔值表示。通常与 toString 相同。

## 数据类型检测

### typeof 操作符 -- 检测原始值

| typeof 类型               | 返回值      | typeof 类型         | 返回值   |
| ------------------------- | ----------- | ------------------- | -------- |
| typeof "my name is fiona" | "string"    | typeof {}           | "object" |
| typeof true               | "boolean"   | typeof []           | "object" |
| typeof 1                  | "number"    | typeof new Date()   | "object" |
| typeof undefined          | "undefined" | typeof null         | "object" |
| typeof NaN                | "number"    | typeof new RegExp() | "object" |
| typeof function(){}       | 🎈"function" | typeof Symbol()     | "symbol" |

👏 将其用于一个未声明的变量也不会报错。(未定义的变量和值为 undefined 的变量通过 typeof 都将返回 undefined 。)

🐛 `typeof null`  返回"object",历史bug。

### 2. instanceof — 检测引用值

除了原始值以外，都是引用值。typeof在判断这些引用类型的时候，返回的都是“object”。

instanceof 不仅检测构造这个对象的构造器，还检测原型链。原型链包含了很多信息，包括定义对象所采用的继承模式, 因此都继承自 Object。

```javascript
//检测日期
var now = new Date();

console.log(now instanceof Date);   //true
console.log(now instanceof Object); //true

```

👏 javaScript中检测自定义类型最好的做法就是使用 instanceof 运算符，这也是唯一的方法。

💣 默认情况下，每个对象都继承自Object。`value instanceof Object` 都为true。

### 3. Object.proptotype.toString.call(value)

Array.isArray的补丁版本👇

```javascript
function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}
```

其它类型的检测

```javascript
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('hi') // "[object String]"
Object.prototype.toString.call({a:'hi'}) // "[object Object]"
Object.prototype.toString.call([1,'a']) // "[object Array]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(() => {}) // "[object Function]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"
```

### 4. in — 属性是否存在

判断属性存在的方法，最好是使用in运算符：

```javascript
var object = {
    count: 0,
    related: null
}

//good
if("count" in object){ //这里的代码会执行 }
if("related" in object){ //...}
//bad
if(object["count"]){ //这里的代码不会执行 }
if(object["related"] != null){//...}
```

👏  in 运算符可以解决，通过`.`或`[]` 运算符获取值并判断，当属性值为假值的时候，会出现错误的问题。如：0，false，""， null，undefined。

💣 `in` 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。

如果你只想检查实例对象的某个属性是否存在，则使用`hasOwnProperty()` 方法。

### 5. Object.hasOwnProperty

只想检查实例对象的某个属性是否存在，则使用`hasOwnProperty()`方法。所有继承自Object的javaScript对象都有这个方法。

```javascript
const Person = function(name) {
  this.name = name
}
Person.prototype.getName = function() {
  return this.name
}
let enkyoku = new Person('enkyoku')
enkyoku.age = 12

for (prop in enkyoku) {
  if (enkyoku.hasOwnProperty(prop)) {
    console.log('Property name is：' + prop)
  }
}

// 打印 name 和 age。 而不会打印出  getName
```

🐛 但在IE8及早期IE浏览器中，DOM对象并非继承自Object，所以不含有这个方法。

```javascript
//对于所有非DOM对象来说，最好的写法
if(object.hasOwnProperty("related")){
    //...
}

//对于不确定是否为DOM对象，则这样写，防止报错
if("hasOwnProperty" in object && object.hasOwnProperty("related")){
    //...
}
```

## 原理

### typeof

js 在底层存储变量的时候，会在变量的机器码低位的1-3位存储其类型信息👇

| 000 | 对象   | 010 | 浮点数 |
| --- | ------ | --- | ------ |
| 100 | 字符串 | 110 | 布尔   |
| 1   | 整数   |     |        |

但 `undefined` 和 `null` 这两个值的信息存储有点特殊：

- `null`：所有机器码均为0

- `undefined`：用 −2^30 整数来表示

🐛所以，`typeof` 在判断 `null` 的时候，由于 `null` 的所有机器码均为0，因此直接被当做了对象来看待。

然而用 `instanceof` 来判断的话👉

```javascript
null instanceof null // TypeError: Right-hand side of 'instanceof' is not an object
```

`null` 直接被判断为不是 object，这也是 JavaScript 的历史遗留bug，可以参考[typeof](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Ftypeof)。

因此在用 `typeof` 来判断变量类型的时候，我们需要注意，最好是用 `typeof` 来判断基本数据类型（包括`symbol`），避免对 null 的判断。

### instanceof

`instanceof` 来判断对象的具体类型，其实 `instanceof` 主要的作用就是判断一个实例是否属于某种类型。

`instanceof` 也可以判断一个实例是否是其父类型或者祖先类型的实例。

```javascript
function new_instance_of(leftVaule, rightVaule) {
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
     if (leftVaule === null) {
            return false;
        }
        if (leftVaule === rightProto) {
            return true;
        }
        leftVaule = leftVaule.__proto__
    }
}
```

`instanceof` 主要的实现原理就是只要右边变量的 `prototype` 在左边变量的原型链上即可。因此，`instanceof` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 `prototype`，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

### 其它

非常不推荐使用原始包装类型。String，Number 和 Boolean。

```javascript
const a = "I'm a string primitive";
const b = new String("I'm a String Object");
const c = String("I'm a string primitive")

typeof a; // returns 'string'
typeof b; // returns 'object'
typeof c; // returns 'string'
```

```javascript
const a = "I'm a string primitive";
const b = new String("I'm a String Object");
const c = String("I'm a string primitive")

a instanceof String; // returns false
b instanceof String; // returns true
c instanceof String; // return false
```

```javascript
const isString = (str) => {
  return typeof str === 'string' || str instanceof String
}
```
