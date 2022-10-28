# Skeleton 骨架屏

`Skeleton` 在数据完整加载之前将您的内容显示为一个占位的预览。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/skeleton)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/skeleton.md)

## 基本使用

最简单的占位使用。

<f-skeleton />

::: details 显示代码

```html
<f-skeleton />
```

:::

`rounded` 圆角类型

<f-skeleton rounded />
<f-skeleton circled />

::: details 显示代码

```html
<f-skeleton rounded />

<f-skeleton circled />
```

:::

## 多行骨架屏

`rows` 可以配置多行效果

<f-skeleton :rows="3" />

::: details 显示代码

```html
<f-skeleton :rows="3" />
```

:::

## 动画效果

`animated` 可以配置动画效果

<f-skeleton animated />
<f-skeleton rounded animated />
<f-skeleton circled animated />

::: details 显示代码

```html
<f-skeleton animated />
<f-skeleton rounded animated />
<f-skeleton circled animated />
```

:::

## 不同尺寸

`size` 属性可以配置不同大小

<f-skeleton size="small" />
<f-skeleton size="default" />
<f-skeleton size="large" />

<f-skeleton rounded size="small" />
<f-skeleton rounded size="default" />
<f-skeleton rounded size="large" />

<f-skeleton circled size="small" />
<f-skeleton circled size="default" />
<f-skeleton circled size="large" />

::: details 显示代码

```html
<f-skeleton size="small" />
<f-skeleton size="default" />
<f-skeleton size="large" />

<f-skeleton rounded size="small" />
<f-skeleton rounded size="default" />
<f-skeleton rounded size="large" />

<f-skeleton circled size="small" />
<f-skeleton circled size="default" />
<f-skeleton circled size="large" />
```

:::

## 搭配组件使用

<f-skeleton animated :rows="2" :loading="loading">
  <f-list>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</f-skeleton>

<f-button :loading="loading" simple type="primary" @click="startLoad">
{{ loading ? '加载中...' : `开始加载` }}
</f-button>

::: details 显示代码

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

| 参数       | 说明                                     | 类型    | 可选值                    | 默认值  |
| ---------- | ---------------------------------------- | ------- | ------------------------- | ------- |
| `rounded`  | 是否带圆角的                             | boolean | --                        | false   |
| `animated` | 是否展示波浪动画                         | boolean | --                        | false   |
| `circled`  | 圆形占位图                               | boolean | --                        | false   |
| `rows`     | 渲染多行占位图                           | number  | --                        | 1       |
| `loading`  | 为 true 时，显示占位图。false 展示子组件 | boolean | --                        | false   |
| `size`     | 设置尺寸，提供三个属性值，默认 `default` | string  | `default` `small` `large` | default |

## Slots

| 名称      | 说明                     |
| --------- | ------------------------ |
| `default` | `loading` 结束待渲染组件 |

## Interface

组件导出以下类型定义：

```ts
import type {
  SkeletonInstance,
  SkeletonPropsType,
  SkeletonSizeType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jxzho" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/37285048?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const loading = ref(false)

  const startLoad = () => {
    loading.value = true
    setInterval(() => {
      loading.value = false
    }, 3000)
  }
</script>
