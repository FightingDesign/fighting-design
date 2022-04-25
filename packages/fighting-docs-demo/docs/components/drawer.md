# Drawer 抽屉

## 基本使用

抽屉的基本使用

title 属性可以配置抽屉的标题

direction 属性可以配置抽屉的弹出方向

<tyh-button type="primary" @click="open = true">点我打开</tyh-button>

<tyh-radio v-model="radio" label="right">从右面弹出</tyh-radio>
<tyh-radio v-model="radio" label="left">从左面弹出</tyh-radio>
<tyh-radio v-model="radio" label="bottom">从下面弹出</tyh-radio>
<tyh-radio v-model="radio" label="top">从上面弹出</tyh-radio>

<tyh-drawer v-model="open" :direction="radio" title="这是标题">hello，欢迎使用 tyh-ui!</tyh-drawer>

```html
<template>
  <tyh-button type="primary" @click="open = true">点我打开</tyh-button>

  <tyh-radio v-model="radio" label="right">从右面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="left">从左面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="bottom">从下面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="top">从上面弹出</tyh-radio>

  <tyh-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
</script>
```

## 不带头部信息

不带有 title 和关闭按钮

showHeader 属性可以配置不带头部信息

<tyh-button type="primary" @click="open2 = true">点我打开</tyh-button>

<tyh-drawer v-model="open2" direction="right" :showHeader="false">hello，欢迎使用 tyh-ui!</tyh-drawer>

```html
<template>
  <tyh-button type="primary" @click="open2 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
</script>
```

## 多层嵌套

size 属性可以配置宽度或者高度

<tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>

<tyh-drawer v-model="open3" direction="right" size="50%"><tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>hello，欢迎使用 tyh-ui!<tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer></tyh-drawer>

```html
<template>
  <tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open3" direction="right" size="50%">
    <tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>
    hello，欢迎使用 tyh-ui!
    <tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer>
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open3 = ref(false)
  const open4 = ref(false)
</script>
```

## Attributes

| 参数         | 说明                   | 类型    | 可选值                      | 默认值 |
| ------------ | ---------------------- | ------- | --------------------------- | ------ |
| v-model      | 绑定值                 | boolean | ——                          | false  |
| direction    | 弹出方向               | string  | top / left / bottom / right | right  |
| size         | 宽度或高度             | string  | ——                          | 30%    |
| title        | 标题                   | string  | ——                          | ——     |
| appendToBody | 是否镶嵌到 body 上     | boolean | ——                          | false  |
| modal        | 是否显示遮罩层         | boolean | ——                          | true   |
| modalClose   | 点击遮罩层是否可以关闭 | boolean | ——                          | true   |
| showClose    | 是否显示关闭按钮       | boolean | ——                          | true   |
| showHeader   | 是否显示头部信息       | boolean | ——                          | true   |
| zIndex       | z-index 属性           | number  | ——                          | 3500   |

## Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| open     | 打开时的回调         | ——       |
| onOpen   | 打开动画结束时的回调 | ——       |
| close    | 关闭时的回调         | ——       |
| onClose  | 关闭动画结束时的回调 | ——       |

## Slots

| 插槽名称 | 说明说明   |
| -------- | ---------- |
| title    | 自定义标题 |
| default  | 内容       |

<script setup>
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
  const open2 = ref(false)
  const open3 = ref(false)
  const open4 = ref(false)
</script>
