# 自定义主题

## 第一步

文档马上更新……

:::demo 这是一个描述

```vue
<template>
  <f-alert type="default">默认提示信息</f-alert>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert>

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
