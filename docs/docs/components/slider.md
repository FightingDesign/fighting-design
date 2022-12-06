# Slider 滑动输入条

Slider 组件可以让用户通过自定义最大值、最小值、步长，来直观的设置某个数字或数字范围。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/slider)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/slider.md)

## 基本使用

使用 `v-model` 绑定一个数字。

::: demo

<template #source>
<f-space>
<f-slider v-model="value1"></f-slider>
</f-space>
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(50)
</script>

<template>
  <f-slider v-model="value1"></f-slider>
</template>
```

:::

## 最大值/最小值

限制数字值在最小值和最大值之间。

::: demo

<template #source>
<f-space>
<f-slider v-model="value2" :min="40" :max="60"></f-slider>
</f-space>
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const value2 = ref(50)
</script>

<template>
  <f-slider v-model="value2" :min="40" :max="60"></f-slider>
</template>
```

:::

## 带步数

::: demo

<template #source>
<f-space>
<f-slider v-model="value3" :step="10"></f-slider>
</f-space>
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const value3 = ref(50)
</script>

<template>
  <f-slider v-model="value3" :step="10"></f-slider>
</template>
```

:::

<!-- ## 范围取值 -->

## 禁用

::: demo

<template #source>
<f-space>
<f-slider v-model="value4" disabled></f-slider>
</f-space>
</template>

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const value4 = ref(40)
</script>

<template>
  <f-slider v-model="value4" disabled></f-slider>
</template>
```

:::

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref(50)
  const value2 = ref(50)
  const value3 = ref(50)
  const value4 = ref(50)
</script>
