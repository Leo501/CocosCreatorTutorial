# BigNumber64Demo
> 介绍如何在 javascript 处理64位大数。
### 方案1
[long.js](https://github.com/dcodeIO/long.js) 库
##### 介绍 
A Long class for representing a 64 bit two's-complement integer value derived from the Closure Library for stand-alone use and extended with unsigned support.

##### 简单使用
~~~
var Long = require("long");

var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);

console.log(longVal.toString());
~~~

##### 优势
* 可以把服务器发过来的高位、底位数据合成一个大数。显示，+、-、*、/、。

### 方案2
[bignumber.js](https://github.com/alexbardas/bignumber.js) 库
##### 介绍
BigNumber.js is a light javascript library for node.js and the browser. It supports arithmetic operations on Big Integers.

It is build with performance in mind, uses the fastest algorithms and supports all basic arithmetic operations (+, -, *, /, %, ^, abs). Works with both positive and negative big integers.

##### 简单介绍
~~~
var BigNumber = require('big-number');

BigNumber(5).plus(97).minus(53).plus(434).multiply(5435423).add(321453).multiply(21).div(2).pow(2);
// 760056543044267246001
~~~

##### 优势
* 支持add/plus, minus/subtract, multiply/mult, divide/div, power/pow, mod, equals, lt, lte, gt, gte, isZero, abs

