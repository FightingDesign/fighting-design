# Infinite Scrolling 无限滚动

永远不会到底吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/infinite-scrolling)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/infinite-scrolling.md)

## 基本使用

`scroll-view` 滚动到底触发执行函数

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-infinite-scrolling :is-loading="false" @scroll-view="scrollView">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)
  const loading = ref(false)

  const scrollView = (num: number): void => {
    length.value += 10
  }
</script>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
```

:::

## Attributes

| 参数              | 说明             | 类型           | 可选值 | 默认值 |
| ----------------- | ---------------- | -------------- | ------ | ------ |
| `scroll-distance` | 触发距离         | number         | ——     | 0      |
| `is-loading`      | 开启加载         | boolean        | ——     | false  |
| `styles`          | 滚动组件样式     | object         | ——     | ——     |
| `@scroll-view`    | 滚动到底触发函数 | (number) => {} | ——     | ——     |

<script setup lang="ts">
  import demo1Vue from './_demos/infinite-scrolling/demo1.vue'
</script>
