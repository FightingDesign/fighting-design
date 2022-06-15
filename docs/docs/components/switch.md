# Switch 开关

## 基本使用

<f-switch v-model="value1" />
<br />
<f-switch v-model="value2" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value1" />
  <f-switch v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 属性

| 参数               | 说明     | 类型    | 可选值               | 默认值 |
| ------------------ | -------- | ------- | -------------------- | ------ |
| modelValue/v-model | 绑定值   | string  | string               | false  |
| size               | 组件尺寸 | string  | large, middle, small | small  |
| disabled           | 是否禁用 | boolean | true,false           | false  |

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
