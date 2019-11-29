---
title: 继承
date: 2019-11-29 11:45:13
categories:
- javascript
tags:
- javascript
- 继承
---

## 原型链继承

```javascript
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}

function SubType() {
  this.subprotoype = false
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subprotoype
}

var instance = new SubType()
var instance2 = new SubType()
instance.colors.push('black')
console.log(instance2.colors)  // [ 'red', 'blue', 'green', 'black' ]
```

缺点：

- 子类通过原型protptype对父类实例化，继承父类，子类的实例可以更改父类构造函数中的继承的共有属性，直接影响其它子类。
- 无法向父类传递参数。

## 构造函数继承

```javascript
function SuperType(name) {
  this.name = name
}

SuperType.prototype.getName = function() {
  return this.name
}

function SubType() {
  SuperType.call(this, 'Fiona')
  this.age = 18
}

var instance = new SubType()
console.log(instance.age)   // 18
console.log(instance.name)  // 'fiona'
console.log(instance.getName)  // undefined
```

缺点：

- 超类原型中的方法不可见
- 方法都在构造函数中定义，函数复用无从谈起。

## 组合继承

```javascript
function SuperType(name) {
  this.name = name
}

SuperType.prototype.getName = function() {
  return this.name
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}

// 继承方法
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

SubType.prototype.getAge = function() {
  return this.age
}

var instance = new SubType('Fiona', 18)
console.log(instance.getAge())   // 18
console.log(instance.getName())   // 'Fiona'
```

缺点：

- 无论何种情况下，都会调用两次超类型构造函数。

## 原型式继承/Object.create

```javascript
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// ES5 
Object.create(o)

var person = {
  name: 'Nicholas',
  friends: ['Shelly', 'Court', 'Van']
}

var otherPerson = Object.create(person)
otherPerson.name = 'Greg'
otherPerson.friends.push('Fiona')

var yetOtherPerson = Object.create(person, {
  name: {
    value: 'Linda'
  }
})
yetOtherPerson.friends.push('Jessica')

console.log(person.friends) // [ 'Shelly', 'Court', 'Van', 'Fiona', 'Jessica' ]
```

缺点：

- 包含引用类型值的原型，会被实例分享。

适用场景：

- 只想要一个对象与另一个对象相似

## 寄生式继承

```javascript
function createAnother(original) {
  var clone = object(original) // 调用函数创建一个对象
  clone.sayHi = function() {   // 增强这个对象
    console.log('hi')
  }
  return clone // 返回这个对象
}

var person = {
  name: 'Nicholas',
  friends: ['Shelly', 'Court', 'Van']
}

var anotherPerson = createAnother(person)
anotherPerson.sayHi()
```

同原型式继承相似，只是在函数内部以某种方式增强对象，再返回新对象。

缺点：

- 同构造函数相似，不能做到函数复用。

## 寄生组合式继承

```javascript
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getName = function() {
  return this.name
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.getAge = function() {
  return this.age
}

var instance = new SubType('Fiona', 18)
console.log(instance.getAge())
console.log(instance.getName())
```

优点：

- 正常使用 instanceof 和 isPrototypeOf 
- 无需执行两次超级构造函数

## Class继承

```javascript
class SuperType {
  constructor(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  getName() {
    return this.name;
  }
}

class SubType extends SuperType {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

let sub = new SubType("fiona", 16);
```

