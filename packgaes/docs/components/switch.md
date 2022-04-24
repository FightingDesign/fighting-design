# Switch 开关

## 基本使用

开关的基本使用

<tyh-switch v-model="value1" />
<tyh-switch v-model="value1" />

```html
<template>
  <tyh-switch v-model="value1" />
  <tyh-switch v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
</script>
```

## 文字描述

closeText 属性可以配置左侧的文字

openText 属性可以配置右侧的文字

<tyh-switch v-model="value2" closeText="关闭" openText="开启" />

```html
<template>
  <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(true)
</script>
```

## 禁用状态

disabled 属性可以配置禁用开关

<tyh-switch v-model="value3" disabled />
<tyh-switch v-model="value4" disabled />

```html
<template>
  <tyh-switch v-model="value3" disabled />
  <tyh-switch v-model="value4" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(true)
  const value4 = ref(false)
</script>
```

## 自定义颜色

closeColor 属性可以配置自定义关闭颜色

openColor 属性可以配置自定义开启颜色

<tyh-switch v-model="value5" closeColor="red" openColor="green" />
<tyh-switch v-model="value6" closeColor="black" openColor="#eee" />

```html
<template>
  <tyh-switch v-model="value5" closeColor="red" openColor="green" />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value5 = ref(true)
  const value6 = ref(false)
</script>
```

## 自定义尺寸

width 属性可以自定义开关的尺寸 最小宽度为 20

<tyh-switch v-model="value7" :width="60" />

```html
<template>
  <tyh-switch v-model="value7" :width="60" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref(true)
</script>
```

## Attributes

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| v-model    | 绑定的值       | boolean | ——     | true    |
| closeColor | 关闭的颜色     | string  | ——     | #dcdfe6 |
| openColor  | 开启的颜色     | string  | ——     | #3a6ff4 |
| closeText  | 左侧的文字描述 | string  | ——     | ——      |
| openText   | 右侧的文字描述 | string  | ——     | ——      |
| disabled   | 是否禁用       | boolean | ——     | false   |
| width      | 开关尺寸       | number  | ——     | 40      |

## Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(true)
  const value3 = ref(true)
  const value4 = ref(false)
  const value5 = ref(true)
  const value6 = ref(false)
  const value7 = ref(true)
</script>
