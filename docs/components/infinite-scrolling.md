# Infinite Scrolling 无限滚动

永远不会到底吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/infinite-scrolling)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/infinite-scrolling.md)

## 基本使用

`scrollEnd` 滚动到底触发执行函数

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-infinite-scrolling :isLoading="false" :scrollEnd="scrollEnd" :scrollWhen="scrollWhen">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)
  const loading = ref(false)

  const scrollEnd = (num: number): void => {
    length.value += 10
  }
  const scrollWhen = (num: number) => {
    console.log(num)
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

## isLoading 加载使用

`isLoading` 显示加载效果...

::: demo

<template #source>
<demo2-vue />
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(10)
  const loading = ref(false)
  const scrollEnd = (): void => {
    loading.value = true
    setTimeout(() => {
      length.value += 10
      loading.value = false
    }, 2000)
  }
</script>

<template>
  <f-infinite-scrolling :is-loading="loading" :scroll-end="scrollEnd">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

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

| 参数            | 说明             | 类型                                | 可选值 | 默认值 |
| --------------- | ---------------- | ----------------------------------- | ------ | ------ |
| `scrollDitance` | 触发距离         | number                              | ——     | 0      |
| `isLoading`     | 开启加载         | boolean                             | ——     | false  |
| `styles`        | 滚动组件样式     | object                              | ——     | ——     |
| `scrollEnd`     | 滚动到底触发函数 | (number:scTop+clitHei+scrDis) => {} | ——     | ——     |
| `scrollWhen`    | 滚动时触发函数   | (number:滚动的距离 ) => {}          | ——     | ——     |

## Contributors

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/infinite-scrolling/demo1.vue'
  import demo2Vue from './_demos/infinite-scrolling/demo2.vue'

</script>
