# Breadcrumb 面包屑

这个面包屑不能吃

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/breadcrumb)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/breadcrumb.md)

## 基本使用

`f-breadcrumb` 的基本使用

::: demo

<template #source>
<f-breadcrumb>
<f-breadcrumb-item>首页</f-breadcrumb-item>
<f-breadcrumb-item>文章</f-breadcrumb-item>
<f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
</template>

```html
<f-breadcrumb>
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义样式

`font-color` 可以配置面包屑文字颜色

`icon-color` 可以自定义 icon 颜色

::: demo

<template #source>
<f-breadcrumb icon-color="#333" font-color="blue">
<f-breadcrumb-item>首页</f-breadcrumb-item>
<f-breadcrumb-item>文章</f-breadcrumb-item>
<f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
</template>

```html
<f-breadcrumb icon-color="#333" font-color="blue">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义分隔符

`separator` 属性可以自定义分隔符

::: demo

<template #source>
<f-breadcrumb :separator="FIconTag">
<f-breadcrumb-item>首页</f-breadcrumb-item>
<f-breadcrumb-item>文章</f-breadcrumb-item>
<f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
</template>

```html
<template>
  <f-breadcrumb :separator="FIconTag">
    <f-breadcrumb-item>首页</f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>
</template>

<script lang="ts" setup>
  import { FIconTag } from '@fighting-design/fighting-icon'
</script>
```

:::

## 自定义 icon

`f-breadcrumb-item` 组件内可以插入 `icon`

::: demo

<template #source>
<f-breadcrumb>
<f-breadcrumb-item>
<f-icon-skull />
</f-breadcrumb-item>
<f-breadcrumb-item>文章</f-breadcrumb-item>
<f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
</template>

```html
<template>
  <f-breadcrumb>
    <f-breadcrumb-item>
      <f-icon-skull />
    </f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>
</template>

<script lang="ts" setup>
  import { FIconSkull } from '@fighting-design/fighting-icon'
</script>
```

:::

## 自定义尺寸

`font-size` 可以自定义你想要的文字大小

::: demo

<template #source>
<f-breadcrumb font-size="18px">
<f-breadcrumb-item>首页</f-breadcrumb-item>
<f-breadcrumb-item>文章</f-breadcrumb-item>
<f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
</template>

```html
<f-breadcrumb font-size="18px">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## Breadcrumb Attractive

| 属性         | 说明               | 类型                                                               | 可选值 | 默认值 |
| ------------ | ------------------ | ------------------------------------------------------------------ | ------ | ------ |
| `separator`  | 自定义分隔符       | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `font-color` | 自定义导航文字颜色 | string                                                             | ——     | ——     |
| `font-size`  | 自定义文字大小     | string / number                                                    | ——     | ——     |
| `icon-color` | 自定义 icon 颜色   | string                                                             | ——     | ——     |

## Breadcrumb Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |

## Breadcrumb-item Attributes

| 属性         | 说明               | 类型                                                               | 可选值 | 默认值 |
| ------------ | ------------------ | ------------------------------------------------------------------ | ------ | ------ |
| `to`         | 跳转的路径         | string / <a href="#breadcrumbitemto">BreadcrumbItemTo</a>          | ——     | ——     |
| `separator`  | 自定义分隔符       | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `font-color` | 自定义导航文字颜色 | string                                                             | ——     | ——     |
| `icon-color` | 自定义 icon 颜色   | string                                                             | ——     | ——     |

## Breadcrumb-item Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  BreadcrumbInstance,
  BreadcrumbProps,
  BreadcrumbItemInstance,
  BreadcrumbItemProps,
  BreadcrumbItemTo
} from 'fighting-design'
```

### BreadcrumbItemTo

```ts
interface BreadcrumbItemTo {
  name: string
  query?: Object
}
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/onechuan" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/98402209?v=4" />
</a>

<script setup lang="ts">
  import { FIconTag, FIconSkull } from '@fighting-design/fighting-icon'
</script>
