# 自定义主题

## 第一步

文档马上更新……

`switch` 的基本使用，需要使用 `v-model` 绑定一个值

::: demo

```vue
<script lang="ts" setup>
  import { reactive } from 'vue'

  const value = reactive({
    value1: true,
    value2: false
  })
</script>

<template>
  <f-switch v-model="value.value1" />
  <f-switch v-model="value.value2" />
</template>

<style>
  .f-switch {
    margin: 40px;
  }
</style>
```

:::
