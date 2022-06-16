# Switch 开关

## 基本使用

`switch` 的基本使用，需要使用 `v-model` 绑定一个值

<f-switch v-model="value1" />
<br />
<f-switch v-model="value2" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value1" />
  <f-switch v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `switch`

  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value3 = ref(true)
</script>
```

:::

## 禁用状态

`disabled` 属性可以禁用 `switch`

<f-switch v-model="value4" disabled />
<f-switch v-model="value5" disabled />

::: details 显示代码

```html
<template>
  <f-switch v-model="value4" disabled />
  <f-switch v-model="value5" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value4 = ref(true)
  const value5 = ref(false)
</script>
```

:::

## 方形的

`square` 属性可以将 `switch` 设置为方形样式

<f-switch v-model="value6" square />

::: details 显示代码

```html
<template>
  <f-switch v-model="value6" square />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value6 = ref(true)
</script>
```

:::

## 属性

| 参数               | 说明     | 类型    | 可选值               | 默认值 |
| ------------------ | -------- | ------- | -------------------- | ------ |
| modelValue/v-model | 绑定值   | string  | string               | false  |
| size               | 组件尺寸 | string  | large, middle, small | small  |
| disabled           | 是否禁用 | boolean | true,false           | false  |

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(false)
  const value6 = ref(true)
</script>

<style scoped>
.f-switch {
  margin: 5px;
}
</style>
