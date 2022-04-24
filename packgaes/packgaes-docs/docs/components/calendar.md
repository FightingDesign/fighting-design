# Calendar 日历

## 基本使用

日历的基本使用

v-model 绑定一个日期

<tyh-calendar v-model="value" />

```html
<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
```

## 定制大小

cellWidth 属性可以配置日期单元格的宽度

最小宽度为 28，如果小于 28 则按照 28 计算

<tyh-calendar v-model="value" :cellWidth="70" />
<tyh-calendar v-model="value" :cellWidth="10" />

```html
<template>
  <tyh-calendar v-model="value" :cellWidth="70" />
  <tyh-calendar v-model="value" :cellWidth="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
```

## Attributes

| 参数      | 说明       | 类型   | 可选值 | 默认值 |
| --------- | ---------- | ------ | ------ | ------ |
| v-model   | 绑定的日期 | object | ——     | ——     |
| cellWidth | 单元格宽度 | number | ——     | 50     |

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
