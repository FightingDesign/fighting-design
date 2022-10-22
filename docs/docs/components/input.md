# Input 输入框

输入框

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input.md)

## 基本使用

需要使用 `v-model` 绑定一个值

<f-input v-model="value1" type="text" placeholder="请输入...." />

::: details 显示代码

```html
<template>
  <f-input v-model="value1" type="text" placeholder="请输入...." />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| ``   |      |      | ——     | ——     |

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

<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>
