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

2. margin和padding在垂直方向上的取值如果是百分比，那么是按照什么来计算百分比的呢？

例如：

```html
<div style="border: 1px solid #ccc;height: 200px;width: 100px;">
  <div style="margin-top: 50%;height: 20px; width: 30px;"></div>
</div>
```

那么子盒子的上外边距是多少呢？

> 宽度优先算法

3. 