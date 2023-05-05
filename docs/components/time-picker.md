# Time Picker 时间选择器

选取你想要的时间

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/time-picker)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/time-picker.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

使用 `v-model:time` 绑定一个值

::: demo

<template #source>
<f-time-picker v-model:time="value1" />
</template>

```html
<template>
  <f-time-picker v-model:time="value1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
```

:::

## Attributes

| 参数           | 说明       | 类型                                                               | 可选值                          | 默认值 |
| -------------- | ---------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `v-model:time` | 绑定值     | string                                                             | ——                              | ——     |
| `disabled`     | 是否禁用   | boolean                                                            | ——                              | false  |
| `clear`        | 是否可清空 | boolean                                                            | ——                              | false  |
| `placeholder`  | 占位符     | string                                                             | ——                              | ——     |
| `size`         | 尺寸       | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |

## Interface

组件导出以下类型定义：

```ts
import type { TimePickerInstance, TimePickerProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref('')
</script>
