# Collapse Animation 折叠动画

更丝滑的下拉过度

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/collapse-animation)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/collapse-animation.md)

## 基本使用

传递一个 `opened` 的布尔值判断是否展开

::: demo

<template #source>
<f-switch v-model="isOpen" size="middle" />

<f-collapse-animation :opened="isOpen">
<h1>Hello</h1>
<h1>你看到我了吗？</h1>

<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>
</f-collapse-animation>
</template>

```html
<template>
  <f-switch v-model="isOpen" size="middle" />

  <f-collapse-animation :opened="isOpen">
    <h1>Hello</h1>
    <h1>你看到我了吗？</h1>

    <f-button type="primary">主要按钮</f-button>
    <f-button type="success">成功按钮</f-button>
    <f-button type="danger">危险按钮</f-button>
    <f-button type="warning">警告按钮</f-button>
  </f-collapse-animation>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
</script>
```

:::

## 禁用状态

`disabled` 属性可禁用

::: demo

<template #source>
<f-switch v-model="isOpen2" size="middle" />

<f-collapse-animation :opened="isOpen2" disabled>
<h1>Hello</h1>
<h1>禁止使用！！</h1>
</f-collapse-animation>
</template>

```html
<template>
  <f-switch v-model="isOpen2" size="middle" />

  <f-collapse-animation :opened="isOpen2" disabled>
    <h1>Hello</h1>
    <h1>禁止使用！！</h1>
  </f-collapse-animation>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const isOpen2 = ref(true)
</script>
```

:::

## Attributes

| 参数               | 说明               | 类型                                                                | 可选值 | 默认值 |
| ------------------ | ------------------ | ------------------------------------------------------------------- | ------ | ------ |
| `opened`           | 是否打开           | boolean                                                             | ——     | false  |
| `disabled`         | 是否禁用           | boolean                                                             | ——     | false  |
| `height-animation` | 是否高度自适应     | boolean                                                             | ——     | true   |
| `width-animation`  | 是否宽度自适应     | boolean                                                             | ——     | false  |
| `animation-time`   | 动画时间           | number                                                              | ——     | 0.747  |
| `on-open`          | 打开动画开始的回调 | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——     | ——     |
| `on-open-end`      | 打开动画结束的回调 | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——     | ——     |
| `on-close`         | 关闭动画开始的回调 | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——     | ——     |
| `on-close-end`     | 关闭动画结束的回调 | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——     | ——     |

## Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 默认插入内容 |

## Interface

组件导出以下类型定义：

```ts
import type { CollapseAnimationInstance, CollapseAnimationProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
  const isOpen2 = ref(true)
</script>
