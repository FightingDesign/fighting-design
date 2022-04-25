# BackTop 回到顶部

## 基本使用

回到顶部的基础用法

<tyh-back-top>Top</tyh-back-top>

```html
<tyh-back-top>Top</tyh-back-top>
```

## 位置偏移

bottom 和 right 属性可以配置距离右边和下边的距离

<tyh-backTop bottom="150px" right="120px">Go</tyh-backTop>

```html
<tyh-backTop bottom="150px" right="120px">Go</tyh-backTop>
```

## 插入 Icon

<tyh-backTop bottom="100px">
  <tyh-icon icon="tyh-ui-top" color="#409eff" />
</tyh-backTop>

```html
<tyh-backTop bottom="100px">
  <tyh-icon icon="tyh-ui-top" color="#409eff" />
</tyh-backTop>
```

## Attributes

| 参数     | 说明             | 类型   | 可选值           | 默认值 |
| -------- | ---------------- | ------ | ---------------- | ------ |
| bottom   | 距离下面的距离   | string | ——               | 50px   |
| right    | 距离右面的距离   | string | ——               | 50px   |
| behavior | 滚动模式         | string | smooth / instant | smooth |
| beyond   | 超出 xx 范围显示 | number | ——               | 100    |
