# Slider 滑动输入条

Slider组件可以让用户通过自定义最大值、最小值、步长，来直观的设置某个数字或数字范围。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/slider)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/slider.md)

## 基本使用
使用 `v-model` 绑定一个数字。

::: demo

<template #source>
{{value1}}
<f-slider v-model="value1" />
</template>

```html
<template #source>
  {{value1}}
  <f-slider v-model="value1" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref(50)
</script>
```

:::

## 最大值/最小值

限制数字值在最小值和最大值之间。

::: demo

<template #source>
{{value2}}
<f-slider v-model="value2" :min="10" :max="20" />
</template>

```html
<template>
  {{value2}}
  <f-slider v-model="value2" :min="10" :max="20" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value2 = ref(15)
</script>
```

:::


## 带步数

::: demo

<template #source>
{{value1}}
<f-slider v-model="value3" :step="5" :min="0" :max="100" />
</template>

```html
<template #source>
  {{value3}}
  <f-slider v-model="value3" :step="5" :min="0" :max="100"/>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value3 = ref(20)
</script>
```

:::

## 范围取值

## 颜色/禁用


<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref(50)

  const value2 = ref(15)

  const value3 = ref(20)
</script>