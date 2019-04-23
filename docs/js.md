# JavaScript 面试题目集锦

## JS编程题目

1. 编程实现fn函数的逻辑

```js
function fn(paths, obj) {
  // 实现逻辑
}

var obj = {
  a: {
    b: {
      c: {
        d: 333
      }
    }
  }
};

// 函数调用获得对应的结果
fn(['a', 'b', 'c', 'd'], obj); // 333  =>  obj.a.b.c.d
fn(['a', 'b', 'c'], obj);      // {d: 333}  =>  obj.a.b.c
fn(['a', 'b'], obj);           // {c: { d: 33}}  =>  obj.a.b
fn(['a'], obj);                // {b: {c: { d: 33}}}  =>  obj.a

fn(['b'], obj); // undefined
```

答案：

```js
function fn(paths, obj) {
  let temp;
  for(let i = 0; paths && i < paths.length; i++) {
    if(i ===  0) {
      temp = obj[paths[i]];
    } else {
      temp = temp[paths[i]];
    }
    if(temp === undefined) {
      return undefined;
    }
  }
  return temp;
}

```

2. 求字符串中字符出现的次数

```js
let s = 'abcd09saf*sfdsl09-=@#~!as_=0()';
let res = [];
let m = {};
for(let k of s) {
  if(m[k]) {
    m[k]++;
  } else {
    m[k] = 1;
  }
}

console.log('m :', m);

// 运行结果：

m : { '0': 3,
  '9': 2,
  a: 3,
  b: 1,
  c: 1,
  d: 2,
  s: 4,
  f: 2,
  '*': 1,
  l: 1,
  '-': 1,
  '=': 2,
  '@': 1,
  '#': 1,
  '~': 1,
  '!': 1,
  _: 1,
  '(': 1,
  ')': 1 }
```

3. 程序运行结果

```js
var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
```

代码解析：
依次输出：undefined -> 10 -> 20

> JavaScript的作用域是静态作用域，非执行时期才确定。另外函数内部考察的是变量提升。

类似题目2：

```js
console.log(a + 9);  // undefined =>(Number) NaN,   NaN + 9 => NaN
var a = 10;
function Add() {
  console.log(a);  // undefined
  var a = 8;
  console.log(a);  // 8
}
Add();  // a不是一个函数，抛出异常
```

4. js闭包题目

```js
// 以下代码运行的结果是：？
for(var i = 0; i < 10; i++) {
  setTimeout(()=>{
    console.log(a);
  }, 1000);
}

// 解决办法
for(var i = 0; i < 10; i++) {
  (function(a){
    setTimeout(()=>{
      console.log(a);
    }, 1000)
  })(i);
}
```

5. 计数排序算法题目

```js
var t = [1, 8, 9, 10, 2, 9, 8, 10, 33, 55, 45, 45, 3, 32, 19];

// 数组t为包含 1-100之间的正整数值的无序数组（数组元素的个数不确定）

// 1. 请输出  统计的每个数组元素出现的次数。
// 2. 根据元素出现的次数，合并输出排序后的结果。

var arr = Array(101).fill(0);
t.forEach(function(item) {
  arr[item]++;
})
var result = [];
arr.forEach(function(item, index) {
  result = result.concat(Array(item).fill(index));
})
console.log('result :', result);
```