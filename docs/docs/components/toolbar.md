# Toolbar 工具栏

`Toolbar` 工具栏组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/toolbar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/toolbar.md)

## 基本使用

工具栏的基本使用，`icon` 可以配置带有图表的选项

<f-toolbar>
  <f-toolbar-item :icon="FIconApps" />
  <f-toolbar-item :icon="FIconBlock" />
  <f-toolbar-item :icon="FIconCameraVideoSlash" />
  <f-toolbar-item :icon="FIconClock" />
</f-toolbar>

::: details 显示代码

```html
<template>
  <f-toolbar>
    <f-toolbar-item :icon="FIconApps" />
    <f-toolbar-item :icon="FIconBlock" />
    <f-toolbar-item :icon="FIconCameraVideoSlash" />
    <f-toolbar-item :icon="FIconClock" />
  </f-toolbar>
</template>

<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'
</script>
```

:::

## 不同大小

`size` 属性可以配置不同的大小

<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>

::: details 显示代码

```html
<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>
```

:::

## 圆角

`round` 属性为圆角

<f-toolbar round>圆角</f-toolbar>

::: details 显示代码

```html
<f-toolbar round>圆角</f-toolbar>
```

:::

## 背景色

`background` 可以自定义背景色

`text-color` 可以自定义文字颜色

<f-toolbar background="#42B883" text-color="#fff">
  <f-toolbar-item>操作</f-toolbar-item>
  <f-toolbar-item>更多</f-toolbar-item>
  <f-toolbar-item>返回</f-toolbar-item>
</f-toolbar>

::: details 显示代码

```html
<f-toolbar background="#42B883" text-color="#fff">
  <f-toolbar-item>操作</f-toolbar-item>
  <f-toolbar-item>更多</f-toolbar-item>
  <f-toolbar-item>返回</f-toolbar-item>
</f-toolbar>
```

:::

## 点击事件

`f-toolbar` 采用[事件委托](https://zh.javascript.info/event-delegation)，可以给 `f-toolbar` 添加事件，并给每个 `f-toolbar-item` 添加唯一的 `data-key`，那么在 `click` 的回调中就可以解构出 `key` 用于区分

也可以给每个 `f-toolbar-item` 单独添加点击事件

<f-toolbar @click="handleClick">
<f-toolbar-item data-key="1" :icon="FIconApps" />
<f-toolbar-item data-key="2" :icon="FIconBlock" />
<f-toolbar-item data-key="3" :icon="FIconCameraVideoSlash" />
<f-toolbar-item data-key="4" :icon="FIconClock" />
</f-toolbar>

::: details 显示代码

```html
<template>
  <f-toolbar @click="handleClick">
    <f-toolbar-item data-key="1" :icon="FIconApps" />
    <f-toolbar-item data-key="2" :icon="FIconBlock" />
    <f-toolbar-item data-key="3" :icon="FIconCameraVideoSlash" />
    <f-toolbar-item data-key="4" :icon="FIconClock" />
  </f-toolbar>
</template>

<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'

  const handleClick = ({ key, evt }) => {
    console.log(key, evt)
  }
</script>
```

:::

## Toolbar Attributes

| 参数          | 说明                                                 | 类型    | 可选值                          | 默认值 |
| ------------- | ---------------------------------------------------- | ------- | ------------------------------- | ------ |
| `size`        | 文字大小，必须写入指定的数值和单位                   | string  | `large` `middle` `small` `mini` | large  |
| `round`       | 显示为圆角                                           | boolean | ——                              | false  |
| `background`  | 背景颜色                                             | string  | ——                              | ——     |
| `text-color`  | 字体颜色                                             | string  | ——                              | ——     |
| `fixed`       | 是否固定定位                                         | boolean | ——                              | false  |
| `fixed-style` | 固定定位的样式，仅支持 `top` `right` `button` `left` | object  | ——                              | ——     |
| `width`       | 自定义宽度                                           | string  | ——                              | ——     |
| `height`      | 自定义高度                                           | string  | ——                              | ——     |

## Toolbar Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 子工具栏选项 |

## Toolbar Events

| 事件名称 | 说明               |
| -------- | ------------------ |
| `click`  | 点击之后触发的回调 |

## Toolbar-Item Attributes

| 参数        | 说明             | 类型                       | 可选值 | 默认值 |
| ----------- | ---------------- | -------------------------- | ------ | ------ |
| `data-key`  | 唯一值           | string / number            | ——     | ——     |
| `color`     | 自定义文字颜色   | string                     | ——     | ——     |
| `icon`      | 自定义 icon      | object (VNode / Component) | ——     | null   |
| `icon-size` | 自定义 icon 大小 | string / number            | ——     | 16px   |

## Toolbar-Item Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Toolbar-Item Events

| 事件名称 | 说明               |
| -------- | ------------------ |
| `click`  | 点击之后触发的回调 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ToolbarInstance,
  ToolbarPropsType,
  ToolbarType,
  ToolbarClickEmitInterface,
  ToolbarItemInstance,
  ToolbarItemPropsType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/ECO-M" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/23503047?v=4" />
</a>

<script setup>
  import { FIconApps, FIconBlock, FIconCameraVideoSlash, FIconClock } from '@fighting-design/fighting-icon'

  const handleClick = ({ key, evt }) => {
    console.log(key, evt)
  }
</script>

<style scoped>
.f-toolbar {
  margin: 10px 0;
}
</style>
