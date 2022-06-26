# Loading 加载

## 基本使用

`show` 属性可以控制是否展示 `loading` 加载

<f-button type="primary" @click="onclick">开始 loading</f-button>
<f-loading :show="loading1" />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick">开始 loading</f-button>
  <f-loading :show="loading1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading1 = ref(false)

  function onclick() {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }
</script>
```

:::

<script setup>
  import { ref } from 'vue'

  const loading1 = ref(false)

  function onclick() {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }
</script>
