# Rate 评分

## 基本使用

评分的基本使用

v-model 绑定评分值

<tyh-rate v-model="value1" />

```html
<template>
  <tyh-rate v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
</script>
```

## 配置颜色

color 属性可以配置选中的 icon 颜色

voidColor 属性可以配置未选中的 icon 颜色

<tyh-rate v-model="value2" />
<tyh-rate v-model="value2" color="red" voidColor="#eee" />

```html
<template>
  <tyh-rate v-model="value2" />
  <tyh-rate v-model="value2" color="red" voidColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(2)
</script>
```

## 辅助文字

showText 属性可以配置是否显示辅助文字

SayText 属性可以配置辅助文字数组

<tyh-rate v-model="value3" showText />
<tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
/>

```html
<template>
  <tyh-rate v-model="value3" showText />
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(2)
</script>
```

## Attributes

| 参数      | 说明               | 类型    | 可选值 | 默认值                                   |
| --------- | ------------------ | ------- | ------ | ---------------------------------------- |
| v-model   | 绑定值             | number  | ——     | ——                                       |
| color     | 选中的 icon 颜色   | string  | ——     | #fbcc30                                  |
| voidColor | 未选中的 icon 颜色 | string  | ——     | #C6D1DE                                  |
| showText  | 是否显示辅助文字   | boolean | ——     | false                                    |
| sayText   | 自定义辅助文字数组 | boolean | ——     | ['极差', '失望', '一般', '惊喜', '满意'] |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| change   | 分值改变时的回调 | ——       |

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
  const value2 = ref(2)
  const value3 = ref(2)
</script>
