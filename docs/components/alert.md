# Alert 警告

用于页面中展示重要的提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/alert)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/alert.md)

## 基本使用

`type` 属性可以配置不同的主题类型，展示不同的颜色状态

::: demo

<template #source>
<f-alert type="default">默认提示信息</f-alert>
<f-alert type="primary">主要提示信息</f-alert>
<f-alert type="success">成功提示信息</f-alert>
<f-alert type="danger">危险提示信息</f-alert>
<f-alert type="warning">警告提示信息</f-alert>
<f-alert type="info">信息提示信息</f-alert>
</template>

```html
<f-alert type="default">默认提示信息</f-alert>
<f-alert type="primary">主要提示信息</f-alert>
<f-alert type="success">成功提示信息</f-alert>
<f-alert type="danger">危险提示信息</f-alert>
<f-alert type="warning">警告提示信息</f-alert>
<f-alert type="info">信息提示信息</f-alert>
```

:::

## 不同文字大小

`font-size` 属性可以配置不同大小的 `alert`

::: demo

<template #source>
<f-alert :font-size="12" type="default">默认提示信息</f-alert>
<f-alert :font-size="14" type="primary">主要提示信息</f-alert>
<f-alert :font-size="16" type="success">成功提示信息</f-alert>
<f-alert font-size="20px" type="danger">危险提示信息</f-alert>
<f-alert font-size="24px" type="warning">警告提示信息</f-alert>
<f-alert font-size="27px" type="info">信息提示信息</f-alert>
</template>

```html
<f-alert :font-size="12" type="default">默认提示信息</f-alert>
<f-alert :font-size="14" type="primary">主要提示信息</f-alert>
<f-alert :font-size="16" type="success">成功提示信息</f-alert>
<f-alert font-size="20px" type="danger">危险提示信息</f-alert>
<f-alert font-size="24px" type="warning">警告提示信息</f-alert>
<f-alert font-size="27px" type="info">信息提示信息</f-alert>
```

:::

## 是否加粗

使用 `bold` 属性可将文字设置为粗体显示

::: demo

<template #source>
<f-alert type="default">未加粗的默认提示信息</f-alert>
<f-alert type="primary" bold>加粗的主要提示信息</f-alert>
<f-alert type="success" bold>加粗的成功提示信息</f-alert>
<f-alert type="danger" bold>加粗的危险提示信息</f-alert>
</template>

```html
<f-alert type="default">未加粗的默认提示信息</f-alert>
<f-alert type="primary" bold>加粗的主要提示信息</f-alert>
<f-alert type="success" bold>加粗的成功提示信息</f-alert>
<f-alert type="danger" bold>加粗的危险提示信息</f-alert>
```

:::

## 是否居中

使用 `center` 属性可将文本显示中间

::: demo

<template #source>
<f-alert type="default">未居中的默认提示信息</f-alert>
<f-alert type="primary" center>居中的主要提示信息</f-alert>
<f-alert type="success" center>居中的成功提示信息</f-alert>
<f-alert type="danger" center>居中的危险提示信息</f-alert>
</template>

```html
<f-alert type="default">未居中的默认提示信息</f-alert>
<f-alert type="primary" center>居中的主要提示信息</f-alert>
<f-alert type="success" center>居中的成功提示信息</f-alert>
<f-alert type="danger" center>居中的危险提示信息</f-alert>
```

:::

## 可关闭

使用 `close` 属性可以让 `alert` 被关闭

::: demo

<template #source>
<f-alert type="primary" close>主要提示信息</f-alert>
<f-alert type="success" close>成功提示信息</f-alert>
<f-alert type="danger" close>危险提示信息</f-alert>
</template>

```html
<f-alert type="primary" close>主要提示信息</f-alert>
<f-alert type="success" close>成功提示信息</f-alert>
<f-alert type="danger" close>危险提示信息</f-alert>
```

:::

## 简约模式

使用 `simple` 属性可以配置简约的 `alert`，样式依然由 `type` 控制

::: demo

<template #source>
<f-alert simple type="default">默认提示信息</f-alert>
<f-alert simple type="primary">主要提示信息</f-alert>
<f-alert simple type="success">成功提示信息</f-alert>
<f-alert simple type="danger">危险提示信息</f-alert>
<f-alert simple type="warning">警告提示信息</f-alert>
<f-alert simple type="info">信息提示信息</f-alert>
</template>

```html
<f-alert simple type="default">默认提示信息</f-alert>
<f-alert simple type="primary">主要提示信息</f-alert>
<f-alert simple type="success">成功提示信息</f-alert>
<f-alert simple type="danger">危险提示信息</f-alert>
<f-alert simple type="warning">警告提示信息</f-alert>
<f-alert simple type="info">信息提示信息</f-alert>
```

:::

## 圆角

`round` 属性可以配置 `alert` 显示为圆角

::: demo

<template #source>
<f-alert type="primary" round>主要提示信息</f-alert>
<f-alert type="success" round>成功提示信息</f-alert>
<f-alert type="danger" round>危险提示信息</f-alert>
</template>

```html
<f-alert type="primary" round>主要提示信息</f-alert>
<f-alert type="success" round>成功提示信息</f-alert>
<f-alert type="danger" round>危险提示信息</f-alert>
```

:::

## 背景颜色

如果你希望文字带上背景颜色，你可以使用 `background` 属性自定义你的 `alert` 背景颜色

::: demo

<template #source>
<f-alert type="primary" background="#58c8de">主要提示信息</f-alert>
<f-alert type="success" background="#e372ff">成功提示信息</f-alert>
<f-alert type="danger" background="#e49b33">危险提示信息</f-alert>
</template>

```html
<f-alert type="primary" background="#58c8de">主要提示信息</f-alert>
<f-alert type="success" background="#e372ff">成功提示信息</f-alert>
<f-alert type="danger" background="#e49b33">危险提示信息</f-alert>
```

:::

## 带有标题

`title` 可以配置一个标题信息，标题会加粗

::: demo

<template #source>
<f-alert type="primary" title="Hello~">今天代码写的很愉快！</f-alert>
<f-alert type="success" title="标题">心情很不错</f-alert>
</template>

```html
<f-alert type="primary" title="Hello~">今天代码写的很愉快！</f-alert>
<f-alert type="success" title="标题">心情很不错</f-alert>
```

:::

## 滚动列表

`alert-list` 可传入一个数组进行滚动展示

::: demo

<template #source>
<f-alert :alert-list="alertList" title="你知道吗？" type="primary" />
</template>

```html
<template>
  <f-alert :alert-list="alertList" title="你知道吗？" type="primary" />
</template>

<script lang="ts" setup>
  const alertList = [
    '把大象放进冰箱需要几步？',
    '第一步：打开冰箱门',
    '第二步：把大象装进去',
    '第三步：关好冰箱门'
  ]
</script>
```

:::

## 自定义前缀 icon

::: demo
<template #source>
<f-alert type="default" :before-icon="FIconFaceSmile">默认提示信息</f-alert>
<f-alert type="primary" :before-icon="FIconFaceSmile">主要提示信息</f-alert>
<f-alert type="success" :before-icon="FIconFaceSmile">成功提示信息</f-alert>
<f-alert type="danger" :before-icon="FIconFaceSmile">危险提示信息</f-alert>
</template>

```html
<template>
  <f-alert type="default" :before-icon="FIconFaceSmile">默认提示信息</f-alert>
  <f-alert type="primary" :before-icon="FIconFaceSmile">主要提示信息</f-alert>
  <f-alert type="success" :before-icon="FIconFaceSmile">成功提示信息</f-alert>
  <f-alert type="danger" :before-icon="FIconFaceSmile">危险提示信息</f-alert>
</template>

<script lang="ts" setup>
  import { FIconFaceSmile } from '@fighting-design/fighting-icon'
</script>
```

:::

## Attributes

| 参数          | 说明                   | 类型                                                               | 可选值                                                  | 默认值  |
| ------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- | ------- |
| `type`        | 类型                   | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` `success` `danger` `warning` `info` | default |
| `font-size`   | 副标题文字大小         | string / number                                                    | ——                                                      | ——      |
| `title-size`  | 主标题文字大小         | string / number                                                    | ——                                                      | ——      |
| `bold`        | 文字是否以粗体显示     | boolean                                                            | ——                                                      | false   |
| `center`      | 是否居中               | boolean                                                            | ——                                                      | false   |
| `close`       | 可关闭                 | boolean                                                            | ——                                                      | false   |
| `simple`      | 简约模式               | boolean                                                            | ——                                                      | false   |
| `title`       | 标题                   | string                                                             | ——                                                      | ——      |
| `round`       | 显示为圆角             | boolean                                                            | ——                                                      | false   |
| `background`  | 背景颜色               | string                                                             | ——                                                      | ——      |
| `color`       | 副标题字体颜色         | string                                                             | ——                                                      | ——      |
| `title-color` | 主标题字体颜色         | string                                                             | ——                                                      | ——      |
| `fixed`       | 是否固定定位           | boolean                                                            | ——                                                      | false   |
| `alert-list`  | 滚动列表               | array (string[])                                                   | ——                                                      | ——      |
| `duration`    | 滚动列表滚动时间间隔   | number                                                             | ——                                                      | ——      |
| `before-icon` | 自定义前缀 icon        | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                                      | ——      |
| `close-icon`  | 自定义关闭 icon        | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                                      | ——      |
| `on-close`    | 点击关闭之后执行的回调 | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——                                                      | ——      |

## Slots

| 名称         | 说明               |
| ------------ | ------------------ |
| `default`    | 自定义副标题的内容 |
| `title`      | 自定义主标题的内容 |
| `closeIcon`  | 自定义关闭 icon    |
| `beforeIcon` | 自定义前缀 icon    |

## Interface

组件导出以下类型定义：

```ts
import type { AlertInstance, AlertProps } from 'fighting-design'
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                    | 描述     |
| ----------------------- | -------- |
| `--alert-border-radius` | 圆角大小 |
| `--alert-color`         | 文字颜色 |
| `--alert-background`    | 背景色   |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/HeHasGun" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/66313154?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a>

<script lang="ts" setup>
  import { FIconFaceSmile } from '@fighting-design/fighting-icon'
  const alertList = ['把大象放进冰箱需要几步？', '第一步：打开冰箱门', '第二步：把大象装进去', '第三步：关好冰箱门']
</script>

<style scoped>
  .f-alert {
    margin: 5px;
  }
</style>
