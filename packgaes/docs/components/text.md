# Text 文字

## 基本使用

文字的基础用法

type 自定义不同的类型

<tyh-text>这是一段普通文字</tyh-text>
<tyh-text type="primary">这是主要普通文字</tyh-text>
<tyh-text type="success">这是一段成功文字</tyh-text>
<tyh-text type="danger">这是一段危险文字</tyh-text>
<tyh-text type="warning">这是一段警告文字</tyh-text>

```html
<tyh-text>这是一段普通文字</tyh-text>
<tyh-text type="primary">这是主要普通文字</tyh-text>
<tyh-text type="success">这是一段成功文字</tyh-text>
<tyh-text type="danger">这是一段危险文字</tyh-text>
<tyh-text type="warning">这是一段警告文字</tyh-text>
```

## 独占一行

block 属性可以配置独占一行

<tyh-text block>这是一段普通文字</tyh-text>
<tyh-text block type="primary">这是主要普通文字</tyh-text>
<tyh-text block type="success">这是一段成功文字</tyh-text>
<tyh-text block type="danger">这是一段危险文字</tyh-text>
<tyh-text block type="warning">这是一段警告文字</tyh-text>

```html
<tyh-text block>这是一段普通文字</tyh-text>
<tyh-text block type="primary">这是主要普通文字</tyh-text>
<tyh-text block type="success">这是一段成功文字</tyh-text>
<tyh-text block type="danger">这是一段危险文字</tyh-text>
<tyh-text block type="warning">这是一段警告文字</tyh-text>
```

## 文字大小

size 属性可以配置文字大小

这是一段普通文字

<tyh-text block size="15">这是一段普通文字</tyh-text>
<tyh-text block size="18" type="primary">这是主要普通文字</tyh-text>
<tyh-text block size="21" type="success">这是一段成功文字</tyh-text>
<tyh-text block size="24" type="danger">这是一段危险文字</tyh-text>
<tyh-text block size="27" type="warning">这是一段警告文字</tyh-text>

```html
<tyh-text block size="15">这是一段普通文字</tyh-text>
<tyh-text block size="18" type="primary">这是主要普通文字</tyh-text>
<tyh-text block size="21" type="success">这是一段成功文字</tyh-text>
<tyh-text block size="24" type="danger">这是一段危险文字</tyh-text>
<tyh-text block size="27" type="warning">这是一段警告文字</tyh-text>
```

## 自定义颜色

color 属性可以配置自定义颜色

自定义颜色优先级大于 type

<tyh-text block color="red">这是一段文字</tyh-text>
<tyh-text block color="skyblue" type="primary">这是主要文字</tyh-text>
<tyh-text block color="orange" type="success">这是一段文字</tyh-text>
<tyh-text block color="pink" type="danger">这是一段文字</tyh-text>
<tyh-text block color="black" type="warning">这是一段文字</tyh-text>

```html
<tyh-text block color="red">这是一段文字</tyh-text>
<tyh-text block color="skyblue" type="primary">这是主要文字</tyh-text>
<tyh-text block color="orange" type="success">这是一段文字</tyh-text>
<tyh-text block color="pink" type="danger">这是一段文字</tyh-text>
<tyh-text block color="black" type="warning">这是一段文字</tyh-text>
```

## Attributes

| 参数  | 说明         | 类型    | 可选值                                         | 默认值  |
| ----- | ------------ | ------- | ---------------------------------------------- | ------- |
| type  | 按钮的类型   | string  | default / primary / success / danger / warning | default |
| block | 是否独占一行 | boolean | ——                                             | false   |
| size  | 文字大小     | string  | ——                                             | 16      |
| color | 自定义颜色   | string  | ——                                             | ——      |
