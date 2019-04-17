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