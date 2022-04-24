# Dialog 对话框

## 基本使用

抽屉的基本使用

title 属性可以配置抽屉的标题

footer 插槽可以配置操作区内容

<tyh-button simple @click="open1 = true">点我打开</tyh-button>

<tyh-dialog v-model="open1" title="这是标题">欢迎使用 tyh-ui 的 dialog 对话框！<template v-slot:footer><tyh-button type="primary" style="margin-right: 20px">确定</tyh-button><tyh-button type="primary" simple @click="open1 = false">取消</tyh-button></template></tyh-dialog>

```html
<template>
  <tyh-button simple @click="open1 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open1" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open1 = ref(false)
</script>
```

## 不带头部信息

不带有 title 和关闭按钮

showHeader 属性可以配置不带头部信息

<tyh-button simple @click="open2 = true">点我打开</tyh-button><tyh-dialog v-model="open2" title="这是标题" :showHeader="false">欢迎使用 tyh-ui 的 dialog 对话框！<template v-slot:footer><tyh-button type="primary" style="margin-right: 20px">确定</tyh-button><tyh-button type="primary" simple @click="open2 = false">取消</tyh-button></template></tyh-dialog>

```html
<template>
  <tyh-button simple @click="open2 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open2" title="这是标题" :showHeader="false">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open2 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
</script>
```

## 多层嵌套

width 属性可以配置宽度

top 属性可以配置距离顶部的距离

<tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>

<tyh-dialog v-model="open3" title="这是标题" width="50%">欢迎使用 tyh-ui 的 dialog 对话框！<tyh-button type="success" @click="open4 = true">打开第二层</tyh-button><tyh-dialog v-model="open4" title="这是标题" top="10vh">hi ～我是第二层的 dialog 对话框</tyh-dialog></tyh-dialog>

```html
<template>
  <tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>

  <tyh-dialog v-model="open3" title="这是标题" width="50%">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <tyh-button type="success" @click="open4 = true">打开第二层</tyh-button>
    <tyh-dialog v-model="open4" title="这是标题" top="10vh">
      hi～我是第二层的 dialog 对话框
    </tyh-dialog>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open3 = ref(false)
  const open4 = ref(false)
</script>
```

## Attributes

| 参数         | 说明                   | 类型    | 可选值 | 默认值 |
| ------------ | ---------------------- | ------- | ------ | ------ |
| v-model      | 绑定值                 | boolean | ——     | false  |
| width        | 宽度                   | string  | ——     | 30%    |
| top          | 顶部距离               | string  | ——     | 15vh   |
| title        | 标题                   | string  | ——     | ——     |
| appendToBody | 是否镶嵌到 body 上     | boolean | ——     | false  |
| modal        | 是否显示遮罩层         | boolean | ——     | true   |
| modalClose   | 点击遮罩层是否可以关闭 | boolean | ——     | true   |
| showClose    | 是否显示关闭按钮       | boolean | ——     | true   |
| showHeader   | 是否显示头部信息       | boolean | ——     | true   |
| zIndex       | z-index 属性           | number  | ——     | 3500   |

## Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| open     | 打开时的回调         | ——       |
| onOpen   | 打开动画结束时的回调 | ——       |
| close    | 关闭时的回调         | ——       |
| onClose  | 关闭动画结束时的回调 | ——       |

## Slots

| 插槽名称 | 说明说明     |
| -------- | ------------ |
| title    | 自定义标题   |
| footer   | 自定义操作区 |
| default  | 内容         |

<script setup>
  import { ref } from 'vue'
  const open1 = ref(false)
  const open2 = ref(false)
  const open3 = ref(false)
  const open4 = ref(false)
</script>
