# Date Picker 日期选择器

选取你想要的时间

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/date-picker)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/date-picker.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

使用 `v-model:date` 绑定一个值

::: demo

<template #source>
<f-date-picker v-model:date="value1" />
</template>

```html
<template>
  <f-date-picker v-model:date="value1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
```

:::

## Attributes

| 参数           | 说明                   | 类型                                                               | 可选值                          | 默认值     |
| -------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------- | ---------- |
| `v-model:date` | 绑定值                 | string                                                             | ——                              | ——         |
| `disabled`     | 是否禁用               | boolean                                                            | ——                              | false      |
| `clear`        | 是否可清空             | boolean                                                            | ——                              | false      |
| `format`       | 时间格式               | string                                                             | ——                              | YYYY/MM/DD |
| `placeholder`  | 占位符                 | string                                                             | ——                              | ——         |
| `size`         | 尺寸                   | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle     |
| `add-zero`     | 不满 10 的是否前面加 0 | boolean                                                            | ——                              | false      |

## Interface

组件导出以下类型定义：

```ts
import type { DatePickerInstance, DatePickerProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref('')
</script>
