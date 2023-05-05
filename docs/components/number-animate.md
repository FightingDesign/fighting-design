# Number Animate 数字动画

动画不会停吗？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/number-animate)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/number-animate.md)

## 基本使用

`from` 和 `to` 参数配置开始的数字和目标数字

::: demo

<template #source>
<f-number-animate :from="0" :to="15000" />
</template>

```html
<f-number-animate :from="0" :to="15000" />
```

:::

## 格式化

`locale-string` 属性可格式化数字

::: demo

<template #source>
<f-number-animate locale-string :from="100" :to="9999" />
</template>

```html
<f-number-animate locale-string :from="100" :to="9999" />
```

:::

## 动画时长

`approximate-time` 属性可配置动画时长

::: demo

<template #source>
<f-number-animate :approximate-time="3000" :from="100" :to="2000" />
</template>

```html
<f-number-animate :approximate-time="3000" :from="100" :to="2000" />
```

:::

## 重新播放

组件内部暴露 `run` 方法可重新调用播放动画

::: demo

<template #source>
<f-button type="default" :on-click="change">重新播放</f-button>
<f-number-animate ref="animate" :from="0" :to="15000" />
</template>

```html
<template>
  <f-button type="default" :on-click="change">重新播放</f-button>
  <f-number-animate ref="animate" :from="0" :to="15000" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { NumberAnimateInstance } from 'fighting-design'

  const animate = ref<NumberAnimateInstance>()

  const change = (): void => {
    animate.value.run()
  }
</script>
```

:::

## Attributes

| 参数               | 说明                   | 类型                                                                       | 可选值 | 默认值 |
| ------------------ | ---------------------- | -------------------------------------------------------------------------- | ------ | ------ |
| `from`             | 开始数字               | number                                                                     | ——     | 0      |
| `to`               | 目标数字               | number                                                                     | ——     | ——     |
| `approximate-time` | 动画结束的大概时间     | number                                                                     | ——     | 2000   |
| `locale-string`    | 格式化数字             | boolean                                                                    | ——     | false  |
| `styles`           | 滚动组件样式           | [CSSProperties](https://cn.vuejs.org/api/utility-types.html#cssproperties) | ——     | ——     |
| `automatic`        | 是否初始化自动播放动画 | boolean                                                                    | ——     | true   |
| `on-animation-end` | 动画结束触发函数       | <a href="#animationend">AnimationEnd</a>                                   | ——     | ——     |

## Methods

| 参数  | 说明         |
| ----- | ------------ |
| `run` | 重新播放动画 |

## Interface

组件导出以下类型定义：

```ts
import type {
  NumberAnimateInstance,
  NumberAnimateProps,
  AnimationEnd
} from 'fighting-design'
```

### AnimationEnd

```ts
type AnimationEnd = (elapsed: number) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const animate = ref<NumberAnimateInstance>()

  const change = (): void => {
    animate.value.run()
  }
</script>
