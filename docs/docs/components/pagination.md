# Pagination 分页器

用它处理过多的数据吧

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/pagination)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/pagination.md)

## 基本使用

`v-model:current` 属性来绑定当前页码

`total` 属性配置总页数

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-pagination v-model:current="current" :total="total" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| ``   |      |      |        |        |

## Events

| 参数 | 说明 |
| ---- | ---- |
| ``   |      |

## Slots

| 插槽名称 | 说明说明 |
| -------- | -------- |
| ``       |          |

## Interface

组件导出以下类型定义：

```ts
import type {} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/OnlyShadows" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/54928569?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/pagination/demo1.vue'
</script>
