# Countdown 倒计时

`countdown` 真的可以一直倒吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/countdown)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/countdown.md)

## 基本使用

::: demo

<template #source>
<demo1Vue/>
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const show = ref(false)
  const dateTime = ref(new Date().getTime() + 60 * 1000 * 2)
  const endCallback = (): void => {
    show.value = true
  }
</script>

<template>
  <view>
    <f-countdown :target="dateTime" :end-callback="endCallback"></f-countdown>
    <view v-if="show">定时结束</view>
  </view>
</template>
```

:::

## Attributes

| 名称             | 说明                 | 类型                                                                       |
| ---------------- | -------------------- | -------------------------------------------------------------------------- |
| `target`         | 指定到达的时间       | string - number                                                            |
| `styles`         | 倒计时组件样式       | [CSSProperties](https://cn.vuejs.org/api/utility-types.html#cssproperties) |
| `endCallback`    | 倒计时结束触发函数   | ( currentTimestamp: 当前时间戳 ) => void                                   |
| `timingCallback` | 倒计时每一秒触发函数 | ( date: 当前倒计时剩余时间 ) => void                                       |

## Interface

组件导出以下类型定义：

```ts
import type { CountdownInstance, CountdownProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>

<script setup lang="ts">
import demo1Vue from './_demos/countdown/demo1.vue'
</script>
