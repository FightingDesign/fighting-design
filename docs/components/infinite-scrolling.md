# Infinite Scrolling 无限滚动

永远不会到底吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/infinite-scrolling)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/infinite-scrolling.md)

## 基本使用

`on-scroll-end` 滚动到底触发执行函数

::: demo

<template #source>
<f-infinite-scrolling :on-scroll-end="onScrollEnd">

<div v-for="item in length" :key="item" class="f-infinite-scrolling-item" style="">{{ item }}</div>
</f-infinite-scrolling>
</template>

```html
<template>
  <f-infinite-scrolling :on-scroll-end="onScrollEnd">
    <div v-for="item in length" :key="item" class="f-infinite-scrolling-item" style="">
      {{ item }}
    </div>
  </f-infinite-scrolling>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    setTimeout(() => {
      length.value += 10
    }, 1000)
  }
</script>

<style scoped>
  .f-infinite-scrolling {
    height: 400px;
  }

  .f-infinite-scrolling-item {
    width: 100%;
    height: 40px;
    background-color: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
```

:::

## Attributes

| 参数             | 说明             | 类型                                         | 可选值 | 默认值 |
| ---------------- | ---------------- | -------------------------------------------- | ------ | ------ |
| `distance`       | 触发距离         | number / string                              | ——     | 0      |
| `on-scroll-when` | 滚动时触发的回调 | <a href="#scrollcallback">ScrollCallback</a> | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { InfiniteScrollingProps, ScrollCallback } from 'fighting-design'
```

### ScrollCallback

```ts
type ScrollCallback = () => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    setTimeout(() => {
      length.value += 10
    }, 1000)
  }
</script>

<style>
  .f-infinite-scrolling {
    height: 400px;
  }
  
  .f-infinite-scrolling-item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
