# StickyCard 粘性卡片

粘性卡片有没有听过？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/sticky-card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/sticky-card.md)

## 基本使用

`open` 可以控制卡片是否展开

<f-sticky-card :open="open1">
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
</f-sticky-card>

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

```html
<script lang="ts" setup>
  import { ref } from 'vue'

  const open1 = ref(false)
</script>

<template>
  <f-sticky-card :open="open1">
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
  </f-sticky-card>
</template>
```

</f-sticky-card>

## 来源内容

`source` 插槽可以插入来源内容

<f-sticky-card :open="open2">

<template #source>

<h1>你好世界！</h1>
<h1>你好世界！</h1>
<h1>你好世界！</h1>
</template>

  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
  <h1>Hello World！</h1>
</f-sticky-card>

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

```html
<script lang="ts" setup>
  import { ref } from 'vue'

  const open2 = ref(false)
</script>

<template>
  <f-sticky-card :open="open2">
    <template #source>
      <h1>你好世界！</h1>
      <h1>你好世界！</h1>
      <h1>你好世界！</h1>
    </template>

    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
  </f-sticky-card>
</template>
```

</f-sticky-card>

## Attributes

| 参数           | 说明               | 类型              | 可选值 | 默认值  |
| -------------- | ------------------ | ----------------- | ------ | ------- |
| `open`         | 是否展开           | boolean           | ——     | false   |
| `background`   | 内容背景色         | string            | ——     | #fff    |
| `open-text`    | 操作栏展开时的文字 | string            | ——     | 关闭    |
| `close-text`   | 操作栏关闭时的文字 | string            | ——     | 开启    |
| `open-height`  | 展开的高度         | string / number   | ——     | 800px   |
| `border-color` | 自定义边框颜色     | string            | ——     | #e5e5e5 |
| `open-end`     | 打开时的回调       | (e:boolean)=>void | ——     | null    |
| `close-end`    | 关闭时的回调       | (e:boolean)=>void | ——     | null    |

## Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| `default`     | 默认折叠内容         |
| `source`      | 来源内容             |
| `optionLeft`  | 操作栏自定义左侧内容 |
| `optionRight` | 操作栏自定义右侧内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  StickyCardInstance,
  StickyCardPropsType,
  StickyCardEmitInterface
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const open1 = ref(false)
  const open2 = ref(false)
</script>
