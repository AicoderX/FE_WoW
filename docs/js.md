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