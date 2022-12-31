# infinite-scrolling 无限滚动

一个标签

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tag)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tag.md)

## 基本使用

`scroll-view` 滚动到底触发执行函数

::: demo

<template #source>
<demo1-vue />
</template>

<script setup lang="ts">
  import demo1Vue from './_demos/infinite-scrolling/demo1.vue'
</script>

```html
<div>
  <f-infinite-scrolling @scroll-view="scrollView">
    <div class="item" v-for="item in length" style="">{{ item }}</div>
  </f-infinite-scrolling>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const length = ref(20)
  const loading = ref(false)
  const scrollView = (num: Number): void => {
    length.value += 10
  }
</script>
```

:::

## Attributes

| 参数              | 说明             | 类型           | 可选值 | 默认值                 |
| ----------------- | ---------------- | -------------- | ------ | ---------------------- |
| `is-loading`      | 开启加载         | boolean        | ——     | false                  |
| `styles`          | 滚动组件样式     | object         | ——     | {}                     |
| `scroll-distance` | 触发距离         | number         | ——     | 0                      |
| `@scroll-view`    | 滚动到底触发函数 | (number) => {} | ——     | scrollTop+clientHeight |
