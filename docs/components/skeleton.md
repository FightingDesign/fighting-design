# Skeleton 骨架屏

在数据完整加载之前显示的占位骨架

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/skeleton)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/skeleton.md)

## 基本使用

最简单的占位使用。

::: demo

<template #source>
<f-skeleton />
<f-skeleton />
</template>

```html
<f-skeleton /> <f-skeleton />
```

:::

## 多行骨架屏

`rows` 可以配置多行效果

::: demo

<template #source>
<f-skeleton :rows="3" />
</template>

```html
<f-skeleton :rows="3" />
```

:::

## 动画效果

`animated` 可以配置动画效果

::: demo

<template #source>
<f-skeleton animated />
<f-skeleton round animated />
</template>

```html
<f-skeleton animated /> <f-skeleton round animated />
```

:::

## 不同尺寸

`size` 属性可以配置不同大小

::: demo

<template #source>
<f-skeleton animated size="large" />
<f-skeleton animated size="middle" />
<f-skeleton animated size="small" />
<f-skeleton animated size="mini" />

<f-skeleton animated round size="large" />
<f-skeleton animated round size="middle" />
<f-skeleton animated round size="small" />
<f-skeleton animated round size="mini" />
</template>

```html
<f-skeleton animated size="large" />
<f-skeleton animated size="middle" />
<f-skeleton animated size="small" />
<f-skeleton animated size="mini" />

<f-skeleton animated round size="large" />
<f-skeleton animated round size="middle" />
<f-skeleton animated round size="small" />
<f-skeleton animated round size="mini" />
```

:::

## 差异的

`difference` 属性可以配在 rows 大于 3 的时候，第一个和最后一个会产生差异长度

::: demo

<template #source>
<f-skeleton animated :rows="5" difference />
</template>

```html
<f-skeleton animated :rows="5" difference />
```

:::

## 搭配组件使用

::: demo

<template #source>
<f-skeleton animated :rows="2" :loading="loading">
<f-list>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
</f-list>
</f-skeleton>

<f-button :loading="loading" simple type="primary" @click="startLoad">
{{ loading ? '加载中...' : `开始加载` }}
</f-button>
</template>

```html
<template>
  <f-skeleton animated :rows="2" :loading="loading">
    <f-list>
      <f-list-item>这是一段文字</f-list-item>
      <f-list-item>这是一段文字</f-list-item>
    </f-list>
  </f-skeleton>

  <f-button :loading="loading" simple type="primary" @click="startLoad">
    {{ loading ? '加载中...' : `开始加载` }}
  </f-button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading = ref(false)

  const startLoad = () => {
    loading.value = true
    setInterval(() => {
      loading.value = false
    }, 3000)
  }
</script>
```

:::

## Attributes

| 参数         | 说明                                     | 类型                                                               | 可选值                          | 默认值 |
| ------------ | ---------------------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `round`      | 是否带圆角的                             | boolean                                                            | ——                              | false  |
| `animated`   | 是否展示波浪动画                         | boolean                                                            | ——                              | false  |
| `rows`       | 渲染多行占位图                           | number                                                             | ——                              | 1      |
| `difference` | 首位是否有长度差异                       | boolean                                                            | ——                              | false  |
| `row-gap`    | 自定义间距尺寸                           | number / string                                                    | ——                              | ——     |
| `loading`    | 为 true 时，显示占位图。false 展示子组件 | boolean                                                            | ——                              | false  |
| `size`       | 自定义尺寸                               | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |

## Slots

| 名称      | 说明                     |
| --------- | ------------------------ |
| `default` | `loading` 结束待渲染组件 |

## Interface

组件导出以下类型定义：

```ts
import type { SkeletonInstance, SkeletonProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jxzho" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/37285048?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const loading = ref(false)

  const startLoad = () => {
    loading.value = true
    setInterval(() => {
      loading.value = false
    }, 3000)
  }
</script>
