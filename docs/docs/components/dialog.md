# Dialog 对话框

`Dialog` 组件在保留当前页面状态的情况下，弹出对话框，告知用户相关信息，并进行一些操作。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/dialog)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/dialog.md)

## 基本使用

`v-model:visible` 属性来控制展示状态

<demo1-vue />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-dialog v-model:visible="visible1" title="标题文字">
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>

    <template #footer>
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
    </template>
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(false)
</script>
```

:::

## 多层嵌套

如果需要在一个 `dialog` 内部嵌套另一个 `dialog`，需要使用 `append-to-body` 属性

> 通常不建议使用嵌套对话框。如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 将内层 dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 dialog 和遮罩层级关系的正确。

<demo2-vue />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible2 = true">打开</f-button>

  <f-dialog
    width="500px"
    height="400px"
    title="Title"
    v-model:visible="visible2"
  >
    <f-button @click="innerVisible = true">打开里层</f-button>

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

<demo3-vue />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible3 = true">打开</f-button>

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

## 遮罩层模糊

可以通过 `modal-blur` 属性设置是否高斯模糊遮罩层

<demo4-vue />

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

| 参数              | 说明               | 类型            | 可选值 | 默认值       |
| ----------------- | ------------------ | --------------- | ------ | ------------ |
| `v-model:visible` | 绑定值             | boolean         | ——     | false        |
| `title`           | `title` 内容       | string          | ——     | ——           |
| `append-to-body`  | 是否追加到 `body`  | boolean         | ——     | false        |
| `width`           | `dialog` 宽度      | string / number | ——     | ——           |
| `height`          | `dialog` 高度      | string / number | ——     | ——           |
| `modal`           | 是否展示蒙层       | boolean         | ——     | true         |
| `modal-close`     | 点击蒙层是否关闭   | boolean         | ——     | true         |
| `close-icon`      | 自定义关闭图标     | string          | ——     | f-icon-close |
| `show-close-icon` | 是否展示关闭图标   | boolean         | ——     | true         |
| `z-index`         | `dialog` 层级      | number          | ——     | 1999         |
| `modal-blur`      | 是否模糊遮罩层     | boolean         | ——     | false        |
| `open`            | 打开动画开始的回调 | Function        | ——     | null         |
| `open-end`        | 打开动画结束的回调 | Function        | ——     | null         |
| `close`           | 关闭动画开始的回调 | Function        | ——     | null         |
| `close-end`       | 关闭动画结束的回调 | Function        | ——     | null         |

## Slots

| 名称      | 说明              |
| --------- | ----------------- |
| `default` | `Dialog` 内容     |
| `header`  | `Dialog` 顶部内容 |
| `footer`  | `Dialog` 底部内容 |

## Interface

组件导出以下类型定义：

```ts
import type { DialogInstance, DialogPropsType } from 'fighting-design'
```

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
  import demo1Vue from './_demos/dialog/demo1.vue'
  import demo2Vue from './_demos/dialog/demo2.vue'
  import demo3Vue from './_demos/dialog/demo3.vue'
  import demo4Vue from './_demos/dialog/demo4.vue'
</script>
