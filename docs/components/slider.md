# Slider 滑动输入条

用滑动的方式改变数值

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/slider)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/slider.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

使用 `v-model` 绑定一个数字

::: demo

<template #source>
{{ value1 }}
<f-slider v-model="value1" />
</template>

```html
<template>
  {{ value1 }}
  <f-slider v-model="value1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(50)
</script>
```

:::

## 最大最小值

`max` 和 `min` 限制数字值在最小值和最大值之间

::: demo

<template #source>
{{ value2 }}
<f-slider v-model="value2" :min="40" :max="60" />
</template>

```html
<template>
  {{ value2 }}
  <f-slider v-model="value2" :min="40" :max="60" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref(50)
</script>
```

:::

## 带步数

`step` 可配置步长

::: demo

<template #source>
{{ value3 }}
<f-slider v-model="value3" :step="10" />
</template>

```html
<template>
  {{ value3 }}
  <f-slider v-model="value3" :step="10" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(20)
</script>
```

:::

## 禁用

`disabled` 属性可禁用输入条

::: demo

<template #source>
<f-slider v-model="value4" disabled />
</template>

```html
<template>
  <f-slider v-model="value4" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref(70)
</script>
```

:::

## Attributes

| 参数                    | 说明             | 类型           | 可选值 | 默认值 |
| ----------------------- | ---------------- | -------------- | ------ | ------ |
| `v-model / model-value` | 绑定值           | number / array | ——     | 0      |
| `step`                  | 步长             | number         | ——     | 1      |
| `min`                   | 最小值           | number         | ——     | 0      |
| `max`                   | 最大值           | number         | ——     | 100    |
| `disabled`              | 是否禁用         | boolean        | ——     | false  |
| `range`                 | 是否可范围性取值 | boolean        | ——     | false  |
| `bg-color`              | 自定义滑块背景色 | string         | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { SliderInstance, SliderProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref(50)
  const value2 = ref(50)
  const value3 = ref(20)
  const value4 = ref(70)
</script>
