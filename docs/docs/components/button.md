# Button 按钮

这个按钮可不简单

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/button)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/button.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

`simple` 属性可以配置简约的按钮，样式依然由 `type` 控制

::: demo 基本使用

```vue
<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>

  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
</template>
```

:::

## 圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮

::: demo 圆角按钮

```vue
<template>
  <f-button round type="default">默认按钮</f-button>
  <f-button round type="primary">主要按钮</f-button>
  <f-button round type="success">成功按钮</f-button>
  <f-button round type="danger">危险按钮</f-button>
  <f-button round type="warning">警告按钮</f-button>

  <f-button round simple type="default">默认按钮</f-button>
  <f-button round simple type="primary">主要按钮</f-button>
  <f-button round simple type="success">成功按钮</f-button>
  <f-button round simple type="danger">危险按钮</f-button>
  <f-button round simple type="warning">警告按钮</f-button>
</template>
```

:::

## 圆形按钮

`circle` 属性可以将按钮变成圆形按钮

::: demo 圆形按钮

```vue
<template>
  <f-button circle type="primary">圆</f-button>
  <f-button circle type="success">形</f-button>
  <f-button circle type="danger">按</f-button>
  <f-button circle type="warning">钮</f-button>
</template>
```

:::

## 带有 Icon

`before-icon` 或者 `after-icon` 可配置内容前后的 icon，当然你也可以直接通过插槽插入

::: demo 带有 Icon

```vue
<template>
  <f-button circle :before-icon="FIconApps" type="primary" />
  <f-button type="success" :before-icon="FIconApps" :after-icon="FIconBlock"> 前后都有 </f-button>
</template>
```

:::

<!-- <script lang="ts" setup>
  import { FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
</script> -->

## 禁用状态

`disabled` 属性可以将按钮变成禁用状态

`loading` 属性可以将按钮变成 `loading` 状态

::: demo 禁用状态

```vue
<template>
  <f-button disabled type="default">默认按钮</f-button>
  <f-button disabled type="primary">主要按钮</f-button>
  <f-button disabled type="success">成功按钮</f-button>
  <f-button disabled type="danger">危险按钮</f-button>
  <f-button disabled type="warning">警告按钮</f-button>

  <f-button loading type="default">默认按钮</f-button>
  <f-button loading type="primary">主要按钮</f-button>
  <f-button loading type="success">成功按钮</f-button>
  <f-button loading type="danger">危险按钮</f-button>
  <f-button loading type="warning">警告按钮</f-button>
</template>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的按钮

::: demo 不同尺寸

```vue
<template>
  <f-button size="large" type="primary">大型按钮</f-button>
  <f-button size="middle" type="success">中型按钮</f-button>
  <f-button size="small" type="danger">小型按钮</f-button>
  <f-button size="mini" type="warning">迷你按钮</f-button>
</template>
```

:::

## 文字按钮

`text` 属性可以将按钮设置成文字按钮

::: demo 文字按钮

```vue
<template>
  <f-button text type="default">默认按钮</f-button>
  <f-button text type="primary">主要按钮</f-button>
  <f-button text type="success">成功按钮</f-button>
  <f-button text type="danger">危险按钮</f-button>
  <f-button text type="warning">警告按钮</f-button>

  <f-button text round type="default">默认按钮</f-button>
  <f-button text round type="primary">主要按钮</f-button>
  <f-button text round type="success">成功按钮</f-button>
  <f-button text round type="danger">危险按钮</f-button>
  <f-button text round type="warning">警告按钮</f-button>
</template>
```

:::

## 带有阴影

可以自定义按钮的阴影样式，可传入一个原生 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

或者也可以通过 [Neumorphism](https://neumorphism.io) 自己手动调节阴影样式

::: demo 带有阴影

```vue
<template>
  <f-button shadow="0 1px 10px 0 #f0f0f0" type="default">默认按钮</f-button>
  <f-button shadow="0 1px 10px 0 #2d5af1" type="primary">主要按钮</f-button>
  <f-button shadow="0 1px 10px 0 #52b35e" type="success">成功按钮</f-button>
  <f-button shadow="0 1px 10px 0 #ff0200" type="danger">危险按钮</f-button>
  <f-button shadow="0 1px 10px 0 #fcc202" type="warning">警告按钮</f-button>
</template>
```

:::

## 涟漪效果

`ripples` 可以配置是否展示点击涟漪效果，也可以通过 `ripples-color` 自定义涟漪背景色

::: demo 涟漪效果

```vue
<template>
  <f-button type="primary">没有涟漪</f-button>
  <f-button type="success" ripples>涟漪效果</f-button>
  <f-button type="warning" ripples>点我试试</f-button>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green"> 自定义涟漪颜色 </f-button>
</template>
```

:::

## 按钮组

使用 `f-button-group` 组件包裹按钮组件可以实现按钮组效果

`vertical` 属性可以配置纵向排列的按钮组

::: demo 按钮组

```vue
<template>
  <f-button-group direction="horizontal">
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group direction="vertical">
    <f-button type="primary">上边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">下边的</f-button>
  </f-button-group>
</template>
```

:::

## 自定义颜色

`color` 属性可以自定义按钮的颜色，使用自定义颜色之后，`simple` 和 `text` 将不会再继续工作，不过自定义颜色仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号

使用自定义颜色之后 `Fighting Design` 会自动推断 `hover` 和 `active` 的效果，那么需要使用 `font-color` 来自定义文字的颜色

::: demo 自定义颜色

```vue
<template>
  <f-button font-color="#fff" color="#ff0de5" round>自定义颜色</f-button>
  <f-button font-color="#fff" color="#22c1c3" loading>loading</f-button>
</template>
```

:::

## Button Attributes

| 参数            | 说明                                                                                                                                                                                                          | 类型                                                               | 可选值                                           | 默认值   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| `type`          | 按钮的类型 （不同类型对应不同的背景和字体颜色，非自定义按钮颜色时有效）                                                                                                                                       | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` `success` `danger` `warning` | default  |
| `size`          | 按钮尺寸                                                                                                                                                                                                      | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini`                  | middle   |
| `bold`          | 按钮文字是否加粗                                                                                                                                                                                              | boolean                                                            | ——                                               | false    |
| `circle`        | 是否为圆形按钮                                                                                                                                                                                                | boolean                                                            | ——                                               | false    |
| `round`         | 是否为圆角按钮                                                                                                                                                                                                | boolean                                                            | ——                                               | false    |
| `font-size`     | 文字字体大小                                                                                                                                                                                                  | string / number                                                    | ——                                               | 15px     |
| `font-color`    | 文字字体颜色                                                                                                                                                                                                  | string                                                             | ——                                               | ——       |
| `block`         | 是否为块级元素                                                                                                                                                                                                | boolean                                                            | ——                                               | false    |
| `href`          | 链接按钮的地址                                                                                                                                                                                                | string                                                             | ——                                               | ——       |
| `target`        | 原生 target 属性，在 link 类型存在时生效                                                                                                                                                                      | <a href="#buttontarget">ButtonTarget</a>                           | `_blank` `_self` `_parent` `_top`                | \_self   |
| `loading`       | 是否展示 loading 状态                                                                                                                                                                                         | boolean                                                            | ——                                               | false    |
| `disabled`      | 是否禁用按钮                                                                                                                                                                                                  | boolean                                                            | ——                                               | false    |
| `before-icon`   | 之前的 icon                                                                                                                                                                                                   | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                               | ——       |
| `after-icon`    | 之后的 icon                                                                                                                                                                                                   | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                               | ——       |
| `loading-icon`  | loading 状态下的 icon                                                                                                                                                                                         | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                               | ——       |
| `autofocus`     | 是否自动获取焦点                                                                                                                                                                                              | boolean                                                            | ——                                               | false    |
| `name`          | 按钮的名字                                                                                                                                                                                                    | string                                                             | ——                                               | f-button |
| `shadow`        | 按钮的阴影                                                                                                                                                                                                    | string                                                             | ——                                               | ——       |
| `text`          | 是否为文字按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                                                            | ——                                               | false    |
| `simple`        | 是否为简约按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                                                            | ——                                               | false    |
| `ripples`       | 是否启用点击涟漪效果                                                                                                                                                                                          | boolean                                                            | ——                                               | false    |
| `ripples-color` | 涟漪背景色                                                                                                                                                                                                    | string                                                             | ——                                               | ——       |
| `native-type`   | 按钮的原生类型                                                                                                                                                                                                | <a href="#buttonnative">ButtonNative</a>                           | `button` `submit` `reset`                        | button   |
| `color`         | 自定义按钮的背景颜色，仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号。如果未指定`font-color`，则字体颜色默认为白色 | string                                                             | ——                                               | ——       |
| `on-click`      | 点击执行的回调                                                                                                                                                                                                | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——                                               | ——       |

## ButtonGroup Attributes

| 参数        | 说明     | 类型                                                               | 可选值                          | 默认值     |
| ----------- | -------- | ------------------------------------------------------------------ | ------------------------------- | ---------- |
| `size`      | 按钮尺寸 | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle     |
| `direction` | 排列方式 | <a href="#buttongroupdirection">ButtonGroupDirection</a>           | `horizontal` `vertical`         | horizontal |

## Button Slots

| 名称          | 说明              |
| ------------- | ----------------- |
| `default`     | 按钮的内容        |
| `beforeIcon`  | 之前的 icon       |
| `afterIcon`   | 之后的 icon       |
| `loadingIcon` | 按钮 loading icon |

## ButtonGroup Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 按钮组的内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ButtonInstance,
  ButtonProps,
  ButtonTarget,
  ButtonNative,
  ButtonGroupInstance,
  ButtonGroupProps,
  ButtonGroupDirection
} from 'fighting-design'
```

### ButtonTarget

```ts
type ButtonTarget = '_blank' | '_self' | '_parent' | '_top'
```

### ButtonNative

```ts
import type { ButtonHTMLAttributes } from 'vue'

type ButtonNative = NonNullable<ButtonHTMLAttributes['type']>
```

### ButtonGroupDirection

```ts
type ButtonGroupDirection = 'horizontal' | 'vertical'
```

### ButtonClick

```ts
type ButtonClick = (evt: MouseEvent) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/lxqddd" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/56574505?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a>

<script setup lang="ts">
  // import { FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
</script>

<style>
  .f-button {
    margin: 5px;
  }
  .f-button-group-vertical .f-button,
  .f-button-group .f-button {
    margin: 0;
  }
</style>
