# Number Animate 数字动画

动画不会停吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/number-animate)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/number-animate.md)

## 基本使用

`animationEnd` 动画结束触发执行函数

::: demo

<template #source>
<demo1-vue />
</template>

```html
<script setup lang="ts">
  import { FNotification } from 'fighting-design'
  import { reactive } from 'vue'
  const styles = reactive({ color: 'var(--vp-c-brand)' })
  const animationEnd = (time: number): void => {
    FNotification({
      title: '这是一条关于f-number-animate 组件的通知 ',
      message: '执行时间 :' + time
    })
  }
</script>
<template>
  <div class="f-number-animate-test">
    <div>基本使用 <f-number-animate :number="10000" :styles="styles" /></div>
    <div>
      locale-string 使用
      <f-number-animate :number="15000" :approximate-time="3000" locale-string :styles="styles" />
    </div>
    <div>
      animationEnd 使用
      <f-number-animate
        :number="20000"
        :approximate-time="4000"
        locale-string
        :animation-end="animationEnd"
        :styles="styles"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
  .f-number-animate-test {
    display: flex;
    div {
      text-align: center;
      flex: 1;
    }
  }
</style>
```

:::

## Attributes

| 参数              | 说明               | 类型                 | 可选值 | 默认值 |
| ----------------- | ------------------ | -------------------- | ------ | ------ |
| `number`          | 目标数字           | number               | ——     | 0      |
| `approximateTime` | 动画结束的大概时间 | number               | ——     | 2000   |
| `styles`          | 滚动组件样式       | object               | ——     | ——     |
| `localeString`    | 格式化数字         | Boolean              | ——     | false  |
| `animationEnd`    | 动画结束触发函数   | (number:用时 ) => {} | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { NumberAnimateInstance, NumberAnimateProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/number-animate/demo1.vue'
</script>
