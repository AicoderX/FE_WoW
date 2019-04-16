# css问题集锦

1. 解决Safari下input样式无法设置的问题

```css
input[type=text] {
  -webkit-appearance:none;
}
```

> 值得注意的是，checkbox,radio在chrome下直接不显示了。。找了半天原来是它惹的祸。看来使用时还需要指定特定的input类型

另外还有Safari光标不居中，大部分方案是通过padding实现各个浏览器统一。

参考： [https://www.cnblogs.com/humaotegong/p/6629060.html?utm_source=itdadao&utm_medium=referral](https://www.cnblogs.com/humaotegong/p/6629060.html?utm_source=itdadao&utm_medium=referral)