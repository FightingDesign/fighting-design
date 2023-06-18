# Tag 标签

一个标签

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tag)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/tag.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

::: demo

<template #source>
<f-tag type="default">默认</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>
</template>

```html
<f-tag type="default">默认</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>
```

:::

## 简约的

`simple` 属性可以配置简约的提示，样式依然由 `type` 控制

::: demo

<template #source>
<f-tag simple type="default">默认</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>
</template>

```html
<f-tag simple type="default">默认</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>
```

:::

## 线性的

`line` 属性可以配置线性的提示，样式依然由 `type` 控制

::: demo

<template #source>
<f-tag line type="default">默认</f-tag>
<f-tag line type="primary">普通</f-tag>
<f-tag line type="warning">警告</f-tag>
<f-tag line type="success">成功</f-tag>
<f-tag line type="danger">失败</f-tag>
</template>

```html
<f-tag line type="default">默认</f-tag>
<f-tag line type="primary">普通</f-tag>
<f-tag line type="warning">警告</f-tag>
<f-tag line type="success">成功</f-tag>
<f-tag line type="danger">失败</f-tag>
```

:::

## 自定义颜色

`background` 和 `color` 可以自定义标签颜色，将覆盖原有的 `type`

::: demo

<template #source>
<f-tag background="skyblue">天蓝色</f-tag>
<f-tag background="blue" color="#fff">深蓝色</f-tag>
</template>

```html
<f-tag background="skyblue">天蓝色</f-tag>
<f-tag background="blue" color="#fff">深蓝色</f-tag>
```

:::

## 标签大小

`size` 自定义标签大小

::: demo

<template #source>
<f-tag type="primary" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag type="primary" size="small">小标签</f-tag>
<f-tag type="primary" size="mini">超小标签</f-tag>
</template>

```html
<f-tag type="primary" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag type="primary" size="small">小标签</f-tag>
<f-tag type="primary" size="mini">超小标签</f-tag>
```

:::

## 块级元素

通过 `block` 属性可以将标签设置为块级元素。

::: demo

<template #source>
<f-tag block type="default">默认</f-tag>
<f-tag block type="primary">普通</f-tag>
<f-tag block type="warning">警告</f-tag>
<f-tag block type="success">成功</f-tag>
<f-tag block type="danger">失败</f-tag>
</template>

```html
<f-tag block type="default">默认</f-tag>
<f-tag block type="primary">普通</f-tag>
<f-tag block type="warning">警告</f-tag>
<f-tag block type="success">成功</f-tag>
<f-tag block type="danger">失败</f-tag>
```

:::

## 可关闭的

`close` 可配置可以关闭的

::: demo

<template #source>
<f-tag close type="default">默认</f-tag>
<f-tag close type="primary">普通</f-tag>
<f-tag close type="warning">警告</f-tag>
<f-tag close type="success">成功</f-tag>
<f-tag close type="danger">失败</f-tag>
</template>

```html
<f-tag close type="default">默认</f-tag>
<f-tag close type="primary">普通</f-tag>
<f-tag close type="warning">警告</f-tag>
<f-tag close type="success">成功</f-tag>
<f-tag close type="danger">失败</f-tag>
```

:::

## Attributes

| 参数          | 说明                   | 类型                                                               | 可选值                                           | 默认值 |
| ------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------ | ------ |
| `type`        | 标签类型               | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `success` `danger` `warning` `primary` | ——     |
| `close`       | 是否可关闭             | boolean                                                            | ——                                               | false  |
| `line`        | 线性的                 | boolean                                                            | ——                                               | false  |
| `round`       | 圆角                   | boolean                                                            | ——                                               | false  |
| `background`  | 自定义背景色           | string                                                             | ——                                               | ——     |
| `color`       | 自定义文字颜色         | string                                                             | ——                                               | ——     |
| `before-icon` | 左侧 icon              | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                               | ——     |
| `after-icon`  | 右侧 icon              | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                               | ——     |
| `size`        | 标签大小               | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini`                  | small  |
| `simple`      | 是否为简约模式         | boolean                                                            | ——                                               | false  |
| `block`       | 是否为块级元素         | boolean                                                            | ——                                               | false  |
| `on-close`    | 点击关闭按钮触发的回调 | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——                                               | ——     |
| `on-click`    | 点击执行的回调         | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——                                               | ——     |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | tag 的内容 |

## Interface

组件导出以下类型定义：

```ts
import type { TagInstance, TagProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/konvyi" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/44802220?v=4" />
</a>

<style scoped>
  .f-tag {
    margin: 5px;
  }
</style>
