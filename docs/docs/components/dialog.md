# Dialog 对话框

`Dialog` 组件在保留当前页面状态的情况下，弹出对话框，告知用户相关信息，并进行一些操作。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/dialog)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/dialog.md)

## 基本使用

需要设置 `v-model:visible` 属性，它接受 `Boolean` 类型的值，当为 `true` 时展示 `Dialog`。

`Dialog` 分为三个部分，`title`、`body` 和 `footer`，其中 `body` 为默认插槽，其余均为[具名插槽](https://staging-cn.vuejs.org/guide/components/slots.html#named-slots)。
除此之外，还提供了 `title` 属性用来快速的设置 `Dialog` 的 `title`，我们为它编写了一些默认样式。

<f-button type="primary" @click="visible1 = true">show</f-button>
<f-dialog title="Title" v-model:visible="visible1">
fighting-design
</f-dialog>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible1 = true">show</f-button>
  <f-dialog title="Title" v-model:visible="visible1">
    fighting-design
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const visible1 = ref(false)
</script>
```

:::

## 多层嵌套

如果需要在一个 `Dialog` 内部嵌套另一个 `Dialog`，可以直接写在默认插槽中。

<f-button type="primary" @click="visible2 = true">show</f-button>
<f-dialog width="500px" height="400px" title="Title" v-model:visible="visible2">
<f-button @click="innerVisible = true">show inner</f-button>
<f-dialog width="300px" title="Title" v-model:visible="innerVisible">
inner dialog
</f-dialog>
<template #title>
title slot
</template>
</f-dialog>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible2 = true">show</f-button>
  <f-dialog
    width="500px"
    height="400px"
    title="Title"
    v-model:visible="visible2"
  >
    <f-button @click="innerVisible = true">show inner</f-button>
    <f-dialog width="300px" title="Title" v-model:visible="innerVisible">
      inner dialog
    </f-dialog>
    <template #title> title slot </template>
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const visible2 = ref(false)
  const innerVisible = ref(false)
</script>
```

:::

## 关闭时销毁

提供了两个事件 `close`、`close-end` 分别用来表示关闭前、关闭后执行的事件。

<f-button type="primary" @click="visible3 = true">show</f-button>
<f-dialog title="Title" v-model:visible="visible3" @close="close" @close-end="closeEnd">
fighting-design
</f-dialog>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible3 = true">show</f-button>
  <f-dialog
    title="Title"
    v-model:visible="visible3"
    @close="close"
    @close-end="closeEnd"
  >
    fighting-design
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const visible3 = ref(false)
  const close = () => {
    console.log('关闭之前')
  }
  const closeEnd = () => {
    console.log('关闭之后')
  }
</script>
```

:::

## Attributes

| 参数              | 说明                  | 类型    | 可选值                                                     | 默认值       |
| ----------------- | --------------------- | ------- | ---------------------------------------------------------- | ------------ |
| `v-model:visible` | 绑定值                | boolean | ——                                                         | false        |
| `title`           | header 文案           | string  | ——                                                         | ——           |
| `append-to-body`  | 是否追加到 `body`     | boolean | ——                                                         | false        |
| `width`           | `Dialog` 宽度         | string  | ——                                                         | 332px        |
| `height`          | `Dialog` 高度         | string  | ——                                                         | 188px        |
| `top`             | `Dialog` 距离顶部高度 | string  | ——                                                         | 13vh         |
| `modal`           | 是否展示蒙层          | boolean | ——                                                         | true         |
| `modal-close`     | 点击蒙层是否关闭      | boolean | ——                                                         | true         |
| `close-icon`      | 关闭图标              | string  | [more](https://fighting.tianyuhao.cn/components/icon.html) | f-icon-close |
| `z-index`         | `Dialog` 层级         | boolean | ——                                                         | 1999         |

## Slots

| 名称      | 说明              |
| --------- | ----------------- |
| `default` | `Dialog` 内容     |
| `title`   | `Dialog` 顶部内容 |
| `footer`  | `Dialog` 底部内容 |

## Events

| 事件名称    | 说明                  | 类型                    |
| ----------- | --------------------- | ----------------------- |
| `open`      | `Dialog` 打开之前回调 | `(e: Event) => boolean` |
| `open-end`  | `Dialog` 打开之后回调 | `(e: Event) => boolean` |
| `close`     | `Dialog` 关闭之前回调 | `(e: Event) => boolean` |
| `close-end` | `Dialog` 关闭之后回调 | `(e: Event) => boolean` |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/Rin-Nohara" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/61968242?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const visible1 = ref(false)
  const visible2 = ref(false)
  const visible3 = ref(false)
  const innerVisible = ref(false)
  const close = () => {
    console.log('关闭之前');
  }
  const closeEnd = () => {
    console.log('关闭之后');
  }
</script>
