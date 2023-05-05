# Text 文字

让文字活起来

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/text)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/text.md)

## 基本使用

`type` 属性可以配置不同的文字类型，展示不同的颜色状态

::: demo

<template #source>
<f-text>普通文字</f-text>
<f-text type="primary">主要文字</f-text>
<f-text type="success">成功文字</f-text>
<f-text type="danger">危险文字</f-text>
<f-text type="warning">警告文字</f-text>
</template>

```html
<f-text>普通文字</f-text>
<f-text type="primary">主要文字</f-text>
<f-text type="success">成功文字</f-text>
<f-text type="danger">危险文字</f-text>
<f-text type="warning">警告文字</f-text>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `text`

::: demo

<template #source>
<f-text size="12px" type="primary">主要文字</f-text>
<f-text size="16px" type="success">成功文字</f-text>
<f-text size="20px" type="danger">危险文字</f-text>
<f-text size="24px" type="warning">警告文字</f-text>
</template>

```html
<f-text size="12px" type="primary">主要文字</f-text>
<f-text size="16px" type="success">成功文字</f-text>
<f-text size="20px" type="danger">危险文字</f-text>
<f-text size="24px" type="warning">警告文字</f-text>
```

:::

## 自定义颜色

如果你不喜欢 `type` 属性带了的不同颜色，你也可以使用 `color` 属性自定义你的 `text` 颜色

::: demo

<template #source>
<f-text color="#58c8de">hello</f-text>
<f-text color="#e372ff">自定义颜色的字体</f-text>
</template>

```html
<f-text color="#58c8de">hello</f-text> <f-text color="#e372ff">自定义颜色的字体</f-text>
```

:::

## 背景颜色

如果你希望文字带上背景颜色，你可以使用 `background` 属性自定义背景颜色

::: demo

<template #source>
<f-text background="#58c8de">背景颜色</f-text>
<f-text background="#e372ff">背景颜色</f-text>
<f-text background="#e49b33">背景颜色</f-text>
</template>

```html
<f-text background="#58c8de">背景颜色</f-text>
<f-text background="#e372ff">背景颜色</f-text>
<f-text background="#e49b33">背景颜色</f-text>
```

:::

## 文字独占一行

使用 `block` 属性可将文字显示为块状元素，独占一行

::: demo

<template #source>
<f-text type="primary" block>文字</f-text>
<f-text type="success" block>文字</f-text>
<f-text type="danger" block>文字</f-text>
</template>

```html
<f-text type="primary" block>文字</f-text>
<f-text type="success" block>文字</f-text>
<f-text type="danger" block>文字</f-text>
```

:::

## 字间距

使用 `spacing` 属性自定义字间距

::: demo

<template #source>
<f-text type="primary" spacing="10px" block>小间距</f-text>
<f-text type="success" spacing="20px" block>中等间距</f-text>
<f-text type="danger" spacing="30px" block>大间距</f-text>
</template>

```html
<f-text type="primary" spacing="10px" block>小间距</f-text>
<f-text type="success" spacing="20px" block>中等间距</f-text>
<f-text type="danger" spacing="30px" block>大间距</f-text>
```

:::

## 缩进量

使用 `indent` 属性规定文字块中首行文字的缩进

::: demo

<template #source>
<f-text type="primary" indent="30px" block>文字</f-text>
<f-text type="success" indent="50px" block>文字</f-text>
<f-text type="danger" indent="70px" block>文字</f-text>
</template>

```html
<f-text type="primary" indent="30px" block>文字</f-text>
<f-text type="success" indent="50px" block>文字</f-text>
<f-text type="danger" indent="70px" block>文字</f-text>
```

:::

## 是否加粗

使用 `bold` 属性可将文字设置为粗体显示

::: demo

<template #source>
<f-text>未加粗文字</f-text>
<f-text type="primary" bold>加粗的主要文字</f-text>
<f-text type="success" bold>加粗的成功文字</f-text>
<f-text type="danger" bold>加粗的危险文字</f-text>
</template>

```html
<f-text>未加粗文字</f-text>
<f-text type="primary" bold>加粗的主要文字</f-text>
<f-text type="success" bold>加粗的成功文字</f-text>
<f-text type="danger" bold>加粗的危险文字</f-text>
```

:::

## 文字修饰

使用 `decoration` 属性规定添加到文字的修饰，例如：`上划线（overline）`、`中划线（line-through）`、`下划线（underline）`等

::: demo

<template #source>
<f-text>标准文字</f-text>
<f-text type="primary" decoration="overline">上划线</f-text>
<f-text type="success" decoration="line-through">中划线</f-text>
<f-text type="danger" decoration="underline">下划线</f-text>
</template>

```html
<f-text>标准文字</f-text>
<f-text type="primary" decoration="overline">上划线</f-text>
<f-text type="success" decoration="line-through">中划线</f-text>
<f-text type="danger" decoration="underline">下划线</f-text>
```

:::

## 内边距

使用 `padding` 属性可定义元素边框与元素内容之间的空间，即上下左右的内边距

::: demo

<template #source>
<f-text background="#ECECEC" padding="10px">上下左右相同的简写</f-text>
<f-text type="primary" background="#ECECEC" padding="10px 30px">上下、左右分别相同</f-text>
<f-text type="success" background="#ECECEC" padding="10px 20px 30px 40px">分别定义上下左右</f-text>
</template>

```html
<f-text background="#ECECEC" padding="10px">上下左右相同的简写</f-text>
<f-text type="primary" background="#ECECEC" padding="10px 30px">
  上下、左右分别相同
</f-text>
<f-text type="success" background="#ECECEC" padding="10px 20px 30px 40px">
  分别定义上下左右
</f-text>
```

:::

## 省略文本

`ellipsis` 属性可以配置是否省略文本，需配合 `width` 属性使用，超出显示省略号

::: demo

<template #source>
<f-text ellipsis width="90px">省略文字省略文字省略文字省略文字</f-text>
</template>

```html
<f-text ellipsis width="90px">省略文字省略文字省略文字省略文字</f-text>
```

:::

## Attributes

| 参数          | 说明                                  | 类型                                                               | 可选值                                           | 默认值  |
| ------------- | ------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ | ------- |
| `type`        | 类型                                  | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` `success` `danger` `warning` | default |
| `size`        | 文字大小                              | string / number                                                    | ——                                               | ——      |
| `color`       | 文字颜色                              | string                                                             | ——                                               | ——      |
| `background`  | 背景颜色                              | string                                                             | ——                                               | ——      |
| `block`       | 是否独占一行                          | boolean                                                            | ——                                               | false   |
| `spacing`     | 文字间距                              | string / number                                                    | ——                                               | ——      |
| `line-height` | 行高                                  | string / number                                                    | ——                                               | ——      |
| `indent`      | 首字符缩进量                          | string / number                                                    | ——                                               | ——      |
| `bold`        | 文字是否以粗体显示                    | boolean                                                            | ——                                               | false   |
| `decoration`  | 文字的修饰                            | <a href="#textdecoration">TextDecoration</a>                       | `overline` `line-through` `underline`            | ——      |
| `padding`     | 内边距                                | string / number                                                    | ——                                               | ——      |
| `width`       | 宽度                                  | string / number                                                    | ——                                               | ——      |
| `ellipsis`    | 是否省略文本，需配合 `width` 宽度使用 | boolean                                                            | ——                                               | ——      |
| `center`      | 是否居中                              | boolean                                                            | ——                                               | false   |

## Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | text 的内容 |

## Interface

组件导出以下类型定义：

```ts
import type { TextInstance, TextProps, TextDecoration } from 'fighting-design'
```

### TextDecoration

```ts
type TextDecoration = 'overline' | 'line-through' | 'underline'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<style scoped>
  .f-text {
    margin: 5px;
  }
</style>
