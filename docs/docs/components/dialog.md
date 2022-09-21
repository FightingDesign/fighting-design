# Dialog 对话框

`Dialog` 组件在保留当前页面状态的情况下，弹出对话框，告知用户相关信息，并进行一些操作。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/dialog)
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

<!-- 如果需要在一个 `Dialog` 内部嵌套另一个 `Dialog`，可以直接写在默认插槽中。 -->

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。

通常不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。

<f-button type="primary" @click="visible2 = true">show</f-button>
<f-dialog width="500px" height="400px" title="Title" v-model:visible="visible2">
<f-button @click="innerVisible = true">show inner</f-button>
<f-dialog width="300px" title="Title" v-model:visible="innerVisible" append-to-body>
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
    <f-dialog
      width="300px"
      title="Title"
      v-model:visible="innerVisible"
      append-to-body
    >
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

## 高斯模糊遮罩层

可以通过`modal-blur`属性设置是否高斯模糊遮罩层。

<f-button type="primary" @click="visible4 = true">show</f-button>
<f-dialog title="Title" v-model:visible="visible4" modal-blur>
fighting-design
</f-dialog>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible4 = true">show</f-button>
  <f-dialog title="Title" v-model:visible="visible4" modal-blur>
    fighting-design
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const visible4 = ref(false)
</script>
```

:::

## Attributes

| 参数              | 说明                  | 类型    | 可选值 | 默认值       |
| ----------------- | --------------------- | ------- | ------ | ------------ |
| `v-model:visible` | 绑定值                | boolean | ——     | false        |
| `title`           | header 文案           | string  | ——     | ——           |
| `append-to-body`  | 是否追加到 `body`     | boolean | ——     | false        |
| `width`           | `dialog` 宽度         | string  | ——     | 332px        |
| `height`          | `dialog` 高度         | string  | ——     | 188px        |
| `top`             | `dialog` 距离顶部高度 | string  | ——     | 13vh         |
| `modal`           | 是否展示蒙层          | boolean | ——     | true         |
| `modal-close`     | 点击蒙层是否关闭      | boolean | ——     | true         |
| `close-icon`      | 关闭图标              | string  | ——     | f-icon-close |
| `z-index`         | `dialog` 层级         | boolean | ——     | 1999         |

## Slots

| 名称      | 说明              |
| --------- | ----------------- |
| `default` | `Dialog` 内容     |
| `title`   | `Dialog` 顶部内容 |
| `footer`  | `Dialog` 底部内容 |

## Events

| 事件名称    | 说明                          |
| ----------- | ----------------------------- |
| `open`      | `Dialog` 打开动画开始之前回调 |
| `open-end`  | `Dialog` 打开动画开始之后回调 |
| `close`     | `Dialog` 关闭动画开始之前回调 |
| `close-end` | `Dialog` 关闭动画开始之后回调 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/wmasfoe" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/61968242?v=4" />
</a>

<a href="https://github.com/wmasfoe" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40457081?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const visible1 = ref(false)
  const visible2 = ref(false)
  const visible3 = ref(false)
  const visible4 = ref(false)
  const innerVisible = ref(false)
  const close = () => {
    console.log('关闭之前');
  }
  const closeEnd = () => {
    console.log('关闭之后');
  }
</script>
