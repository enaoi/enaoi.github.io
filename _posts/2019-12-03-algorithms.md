---
title: 基础算法
date: 2019-12-03 16:25:10
categories:
- algorithms
- javascript
tags:
- algorithms
- javascript
---
算法常常是很多面试中对数组排序和查找题目的关键。

## 基础概念

### 复杂度的定义和计算

> 时间复杂度：评估执行程序所需的时间。可以估算出程序对处理器的使用程度。
> 空间复杂度：评估执行程序所需的存储空间。可以估算出程序对计算机内存的使用程度。

一般面试或者工作的时候没有特别说明的话，复杂度就是指时间复杂度。

。如果一个算法所花费的时间与算法中代码语句执行次数成正比，那么那个算法执行语句越多，它的花费时间也就越多。我们把一个算法中的语句执行次数称为时间频度。通常用T(n)表示。

在时间频度T(n)中，n又代表着问题的规模，当n不断变化时，T(n)也会不断地随之变化。为了了解这个变化的规律，时间复杂度这一概念就被引入了。一般情况下算法基础本操作的重复执行次数为问题规模n的某个函数，用也就是时间频度T(n)。如果有某个辅助函数f(n)，当趋于无穷大的时候，T(n)/f(n)的极限值是不为零的某个常数，那么f(n)是T(n)的同数量级函数，记作T(n)=O(f(n))，被称为算法的渐进时间复杂度，又简称为时间复杂度。

### 大O表示法

**用O(n)来体现算法时间复杂度的记法被称作大O表示法。**

**推导大O阶有一下三种规则：**

1. 用常数1取代运行时间中的所有加法常数
2. 只保留最高阶项
3. 去除最高阶的常数

## 排序算法

### JS内置排序

```javascript
Array.prototype.jsSort = function () {
    return this.sort(function (a, b) {
        return a - b;
    })
}
```

### 冒泡排序

冒泡排序(未考虑undefined情况),稳定，但耗时时间最长

![bubble sort](../images/algorithms/bubble.gif)

#### 方便理解的basicBubbleSort

```javascript
function swap(array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubble(originalArray) {
  const array = [...originalArray]
  var len = array.length - 1;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
```

#### 实际使用的bubbleSort

```javascript
function bubbleSort(originalArray) {
  let swapped = false
  const array = [...originalArray]
  let counter = 0
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      counter += 1
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  } while (swapped)
  console.log(counter)
  return array
}
```

#### 支持自定义升序降序的bubbleSort

```javascript
function bubbleSort(originalArray, sortFunc) {
  let swapped = false
  const array = [...originalArray]
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && sortFunc(array[i], array[i + 1]) > 0) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  } while (swapped)

  return array
}

bubbleSort(array.slice(), (a, b) => a - b)
```

### 选择排序

选择排序总是有O(n2)时间复杂度，对于较大的list效率低下，一般的比相似的插入排序表现差。
但优点是简单，在某些情况表现比复杂算法更好，特别是auxiliary memory 限制的情况下。

![selection sort](../images/algorithms/selection.gif)

```javascript
function selectionSort (originalArray) {
  const array = [...originalArray]
  let min
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]]
    }
  }
  return array
}
```

### 插入排序

将数组中的所有元素依次跟前面已经排好的元素相比较，如果选择的元素比已排序的元素小，则交换，直到全部元素都比较过。
![image](../images/algorithms/insert.gif)

```javascript
function InsertSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}
```

### 几种基础排序的比较

100,000数据量下的时间

| 算法      | 时间      |
| --------- | --------- |
| bubble    | 26761.796ms |
| selection | 4471.341ms  |
| insert    | 2581.578ms   |

### 希尔排序

希尔排序是插入排序的一种更高效率的实现。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。在这里，我就使用了这种方法。

```javascript
shellSort() {
    const N = this.dataStore.length;
    let h = 1;
    while (h < N / 3) {   // 动态定义间隔
        h = h * 3 + 1
    }
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j - h >= 0 && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h)
            }
        }
        h = (h - 1) / 3
    }
}
```

### 归并排序

原理：把一系列排好序的子序列合并成一个大的完整有序序列。
缺点：需要相当大的空间来合并子数组。

所有递归的方式都可以用迭代重写。
一般来讲，归并排序会使用递归的方式来实现。但对于JavaScript，嵌套过深。所以使用迭代重写。

![image](../images/algorithms/merge.gif)

```javascript

```

### 快速排序

快速排序的基本思想：挖坑填数+分治法

阮一峰的版本：

1. 从序列当中选择一个基准数(pivot)，在这里我们选择序列当中第一个数最为基准数
2. 将序列当中的所有数依次遍历，比基准数大的位于其右侧，比基准数小的位于其左侧
3. 重复步骤2，直到所有子集当中只有一个元素为止。

```javascript
const quickSort = function (list) {
    if (arr.length <= 1) return list;
    let pivotIndex = Math.floor(list.length / 2)
    let lesser = [], greater = [], pivot = list.splice(pivotIndex, 1)[0];
    for (let i = 1, l = list.length; i < l; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i])
        } else {
            greater.push(list[i])
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater))
}
```

es6的实现版本：

```javascript
function quickSortES6(arr) {
    if (arr.length <= 1) return arr;
    let [pivot, ...reset] = arr;
    return [
        ...quickSort(reset.filter(item => item < pivot)),
        pivot,
        ...quickSort(reset.filter(item => item >= pivot))
    ]
}
```

更多合理的方式：

```javascript
 sort(arr, start, end) {
      if (start >= end) return;
      let i = start, j = end, baseValue = arr[end];
      while (i < j) {
          while (i < j && arr[i] <= baseValue) {
              i++
          }
          arr[j] = arr[i]
          while (i < j && arr[j] >= baseValue) {
              j--
          }
          arr[i] = arr[j]
      }
      arr[j] = baseValue;
      this.sort(arr, start, j - 1);
      this.sort(arr, j + 1, end)
  }

  quickSort() {
      const start = 0, end = this.dataStore.length - 1;
      this.sort(this.dataStore, start, end)
  }
```

## 检索算法

### 二分法排序

只针对有序的数据集：

1. 将数组第一位设置为下边界
2. 将数组最后以为设置为上边界
3. 若下边界小于等于上边界：
   - 找到中点
   - 如果中点 < 数值：则将下边界移到中点+1的位置
   - 如果中点 > 数值：则将上边界移到中点-1的位置
   - 如果相等，则找到该数据，返回下标

```javascript
function binSearch(arr, v) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < v) {
            start = mid + 1
        } else if (arr[mid] > v) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return -1;
}
```

## 高级算法

### 动态规划

动态规划有时被认为是一种和递归相反的技术。
递归从顶部开始将问题分解，通过解决小问题太解决整体问题。
动态规划从底部开始解决问题，将小问题解决掉，然后合并成一个整体解决方案。

递归算法简洁，但不高效。

```javascript
// 斐波那契数列
// 递归
function fib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}
// 动态规划
function dynFib(n) {
    var val = []
    for (var i = 0; i < n; ++i) {
        val[i] = 0
    }
    if (n == 1 || n == 2) {
        return 1
    } else {
        val[1] = 1
        val[2] = 2
        for (var i = 3; i < n; i++) {
            val[i] = val[i - 1] + val[i - 2]
        }
        return val[n - 1]
    }

}
```

寻找最长公共子串

```javascript
function longcs(str1, str2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(str1.length + 1)
    for (var i = 0; i <= str1.length + 1; i++) {
        lcsarr[i] = new Array(str2.length + 1)
        for (var j = 0; j <= str2.length + 1; j++) {
            lcsarr[i][j] = 0
        }
    }

    for (var i = 0; i <= str1.length; i++) {
        for (var j = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                lcsarr[i][j] = 0
            } else {
                if (str1[i - 1] === str2[i - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
                } else {
                    lcsarr[i][j] = 0
                }
            }

            if (max <= lcsarr[i][j]) {
                max = lcsarr[i][j]
                index = i
            }

        }
    }
    return str2.slice(index - max, index)
}
```
