# Radio 单选框

## 基本使用

Radio 的基本使用

label 属性可配置 Radio 的 value

<tyh-radio v-model="radio1" label="备选项1">备选项 1</tyh-radio>
<tyh-radio v-model="radio1" label="备选项2">备选项 2</tyh-radio>
<tyh-radio v-model="radio1" label="备选项3">备选项 3</tyh-radio>

```html
<template>
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
</script>
```

## 禁用状态

disabled 属性可以配置禁用状态

<tyh-radio v-model="radio2" disabled label="备选项1">备选项 1</tyh-radio>
<tyh-radio v-model="radio2" label="备选项2">备选项 2</tyh-radio>
<tyh-radio v-model="radio2" label="备选项3">备选项 3</tyh-radio>

```html
<template>
  <tyh-radio v-model="radio2" disabled label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio2 = ref('备选项2')
</script>
```

## 带有边框

border 属性可以配置边框

<tyh-radio v-model="radio3" label="备选项1" border>备选项 1</tyh-radio><tyh-radio v-model="radio3" label="备选项2" border>备选项 2</tyh-radio><tyh-radio v-model="radio3" label="备选项3" border>备选项 3</tyh-radio>

```html
<template>
  <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio3 = ref('备选项3')
</script>
```

## 配置大小

size 属性可以大小，但是必须是带有 border 属性的前提才可以正常工作

<tyh-radio v-model="radio4" label="备选项1" border size="large">备选项 1</tyh-radio><tyh-radio v-model="radio4" label="备选项2" border size="large">备选项 2</tyh-radio><tyh-radio v-model="radio4" label="备选项3" border size="large">备选项 3</tyh-radio><br><tyh-radio v-model="radio4" label="备选项1" border size="medium">备选项 1</tyh-radio><tyh-radio v-model="radio4" label="备选项2" border size="medium">备选项 2</tyh-radio><tyh-radio v-model="radio4" label="备选项3" border size="medium">备选项 3</tyh-radio><br><tyh-radio v-model="radio4" label="备选项1" border size="small">备选项 1</tyh-radio><tyh-radio v-model="radio4" label="备选项2" border size="small">备选项 2</tyh-radio><tyh-radio v-model="radio4" label="备选项3" border size="small">备选项 3</tyh-radio><br><tyh-radio v-model="radio4" label="备选项1" border size="mini">备选项 1</tyh-radio><tyh-radio v-model="radio4" label="备选项2" border size="mini">备选项 2</tyh-radio><tyh-radio v-model="radio4" label="备选项3" border size="mini">备选项 3</tyh-radio>

```html
<template>
  <tyh-radio v-model="radio4" label="备选项1" border size="large"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="large"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="large"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="medium"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="medium"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="medium"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="small"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="small"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="small"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="mini"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="mini"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="mini"
    >备选项3</tyh-radio
  >
</template>

<script setup>
  import { ref } from 'vue'
  const radio4 = ref('备选项1')
</script>
```

## Attributes

| 参数     | 说明           | 类型    | 可选值                        | 默认值 |
| -------- | -------------- | ------- | ----------------------------- | ------ |
| v-mod    | 绑定的值       | string  | ——                            | ——     |
| label    | Radio 的 value | string  | ——                            | ——     |
| name     | 原生 name 属性 | string  | ——                            | ——     |
| disabled | 是否禁用       | boolean | ——                            | false  |
| Boole    | 是否显示边框   | boolean | ——                            | false  |
| size     | 大小尺寸       | string  | large / medium / small / mini | large  |

## Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| change   | 改变 Radio 时触发 | 选中的值 |

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
  const radio2 = ref('备选项2')
  const radio3 = ref('备选项3')
  const radio4 = ref('备选项1')
</script>
