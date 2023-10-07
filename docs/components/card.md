# Card 卡片

放入你想展示的内容

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/card.md)

## 基本使用

`title` 属性可以配置卡片的标题

::: demo

<template #source>
<f-card title="卡片标题">Card 卡片</f-card>
</template>

```html
<f-card title="卡片标题">Card 卡片</f-card>
```

:::

## 圆角卡片

`round` 是否为圆角卡片

::: demo

<template #source>
<f-card round title="圆角的">Card 卡片</f-card>
</template>

```html
<f-card round title="圆角的">Card 卡片</f-card>
```

:::

## 不同状态

`shadow` 属性可以配置阴影样式

::: demo

<template #source>
<f-card>从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">总是显示</f-card>
</template>

```html
<f-card>从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">总是显示</f-card>
```

:::

## 自定义样式

多种配置项可自定义卡片的样式

::: demo

<template #source>
<f-card title="卡片标题" title-bold title-color="blue" background="#eee" border-color="blue">Card 卡片</f-card>
</template>

```html
<f-card
  title="卡片标题"
  title-bold
  title-color="blue"
  background="#eee"
  border-color="blue"
  >Card 卡片</f-card
>
```

:::

## 可关闭的

`close` 可配置带有关闭按钮的卡片

::: demo

<template #source>
<f-card title="卡片标题" close>Card 卡片</f-card>
</template>

```html
<f-card title="卡片标题" close>Card 卡片</f-card>
```

:::

## Attributes

| 参数           | 说明              | 类型                                 | 可选值           | 默认值 |
| -------------- | ----------------- | ------------------------------------ | ---------------- | ------ |
| `title`        | 卡片标题          | string                               | ——               | ——     |
| `round`        | 是否为圆角卡片    | boolean                              | ——               | false  |
| `padding`      | 卡片内边距        | string                               | ——               | ——     |
| `shadow`       | 阴影样式          | <a href="#cardshadow">CardShadow</a> | `hover` `always` | ——     |
| `border-color` | 自定义边框颜色    | string                               | ——               | ——     |
| `background`   | 自定义背景颜色    | string                               | ——               | ——     |
| `title-color`  | 自定义 title 颜色 | string                               | ——               | ——     |
| `title-bold`   | title 是否加粗    | boolean                              | ——               | false  |
| `close`        | 是否可关闭        | boolean                              | ——               | false  |
| `on-close`     | 是否可关闭        | <a href="#cardclose">CardClose</a>   | ——               | ——     |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 默认内容   |
| `header`  | 自定义头部 |

## Interface

组件导出以下类型定义：

```ts
import type { CardInstance, CardProps, CardShadow, CardClose } from 'fighting-design'
```

### CardShadow

```ts
type CardShadow = 'hover' | 'always'
```

### CardClose

```ts
type CardClose = (target: boolean) => void
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                  | 描述     |
| --------------------- | -------- |
| `--card-border-color` | 边框颜色 |
| `--card-background`   | 背景颜色 |
| `--card-padding`      | 内边距   |
| `--card-title-color`  | 标题颜色 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/konvyi" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/44802220?v=4" />
</a>

<style scoped>
  .f-card {
    margin: 15px;
  }
</style>
