# Page Header 页头

用于展示概览和引导页级操作

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/page-header)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/page-header.md)

## 基本使用

`title` 属性可以配置标题内容，点击右侧返回可以触发 `back` 回调函数

<f-page-header title="标题" @back="goBack" />

::: details 显示代码

```html
<template>
  <f-page-header title="标题" @back="goBack" />
</template>

<script lang="ts" setup>
  const goBack = () => {
    console.log('go back')
  }
</script>
```

:::

## 自定义样式

`icon` 可以自定义返回图标，`back-text` 可以自定义返回文字内容

<f-page-header :icon="FIconReply" back-text="返回上一页" title="标题" />

::: details 显示代码

```html
<template>
  <f-page-header :icon="FIconReply" back-text="返回上一页" title="标题" />
</template>

<script lang="ts" setup>
  import { FIconReply } from '@fighting-design/fighting-icon'
</script>
```

:::

## 副标题

`subtitle` 可以配置带有副标题

<f-page-header title="标题" subtitle="副标题" />

::: details 显示代码

```html
<template>
  <f-page-header title="标题" subtitle="副标题" />
</template>
```

:::

## Attributes

| 属性           | 说明         | 类型                       | 可选值 | 默认值 |
| -------------- | ------------ | -------------------------- | ------ | ------ |
| `icon`         | 返回图标     | object (VNode / Component) | ——     | null   |
| `icon-size`    | 返回图标大小 | string / number            | ——     | 16px   |
| `back-text`    | 返回文本     | string                     | ——     | 返回   |
| `title`        | 标题文本     | string                     | ——     | 标题   |
| `title-bold`   | 标题是否粗体 | boolean                    | ——     | false  |
| `title-center` | 标题是否居中 | boolean                    | ——     | false  |
| `title-color`  | 标题颜色     | string                     | ——     | false  |
| `subtitle`     | 副标题文本   | string                     | ——     | ——     |

## Slots

| 插槽名     | 说明             |
| ---------- | ---------------- |
| `icon`     | 自定义返回图标   |
| `title`    | 自定义标题内容   |
| `subtitle` | 自定义副标题内容 |

## Events

| 属性   | 说明             | 参数 |
| ------ | ---------------- | ---- |
| `back` | 点击左侧区域触发 | ——   |

## Interface

组件导出以下类型定义：

```ts
import type { PageHeaderInstance, PageHeaderPropsType } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/yzj940619" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/42865478?v=4" />
</a>

<script setup>
  import { FIconReply } from '@fighting-design/fighting-icon'

  const goBack = () => {
    console.log('go back')
  }
</script>
