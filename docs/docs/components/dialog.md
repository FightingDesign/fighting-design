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
    <h3>沁园春·雪</h3>

    <p>北国风光，千里冰封，万里雪飘。</p>
    <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
    <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
    <p>须晴日，看红装素裹，分外妖娆。</p>

    <br />

    <p>江山如此多娇，引无数英雄竞折腰。</p>
    <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
    <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
    <p>俱往矣，数风流人物，还看今朝。</p>

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

<demo2-vue />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible2 = true">打开</f-button>

  <f-dialog width="500px" title="Title" v-model:visible="visible2">
    <f-button @click="innerVisible = true">打开里层</f-button>

    <f-dialog
      width="300px"
      title="Title"
      v-model:visible="innerVisible"
      append-to-body
    >
      inner dialog
    </f-dialog>
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible2 = ref(false)
  const innerVisible = ref(false)
</script>
```

:::

## 触发事件

`open` 和 `open-end` 分别用来表示打开动画结束前后的事件

`close` 和 `close-end` 分别用来表示关闭动画结束前后执行的事件

<demo3-vue />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible3 = true">打开</f-button>

  <f-dialog
    title="Title"
    v-model:visible="visible3"
    :open="open"
    :open-end="openEnd"
    :close="close"
    :close-end="closeEnd"
  >
    <h3>沁园春·雪</h3>

    <p>北国风光，千里冰封，万里雪飘。</p>
    <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
    <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
    <p>须晴日，看红装素裹，分外妖娆。</p>

    <br />

    <p>江山如此多娇，引无数英雄竞折腰。</p>
    <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
    <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
    <p>俱往矣，数风流人物，还看今朝。</p>
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { FMessage } from 'fighting-design'

  const visible3 = ref(false)

  const open = () => FMessage('打开动画开始')
  const openEnd = () => FMessage('打开动画结束')

  const close = () => FMessage('关闭动画开始')
  const closeEnd = () => FMessage('关闭动画结束')
</script>
```

:::

## Attributes

| 参数              | 说明                 | 类型                       | 可选值 | 默认值 |
| ----------------- | -------------------- | -------------------------- | ------ | ------ |
| `v-model:visible` | 绑定值，控制是否展示 | boolean                    | ——     | false  |
| `title`           | 标题文字内容         | string                     | ——     | ——     |
| `append-to-body`  | 是否追加到 `body`    | boolean                    | ——     | false  |
| `width`           | 自定义宽度           | string / number            | ——     | ——     |
| `fullscreen`      | 是否全屏展示         | boolean                    | ——     | false  |
| `show-mask`       | 是否展示遮罩层       | boolean                    | ——     | true   |
| `mask-close`      | 是否点击遮罩层关闭   | boolean                    | ——     | true   |
| `modal-blur`      | 是否模糊遮罩层       | boolean                    | ——     | false  |
| `close-icon`      | 自定义关闭按钮 icon  | object (VNode / Component) | ——     | null   |
| `show-close-icon` | 是否展示关闭图标     | boolean                    | ——     | true   |
| `z-index`         | 层级                 | number                     | ——     | 1999   |
| `open`            | 打开动画开始的回调   | Function                   | ——     | null   |
| `open-end`        | 打开动画结束的回调   | Function                   | ——     | null   |
| `close`           | 关闭动画开始的回调   | Function                   | ——     | null   |
| `close-end`       | 关闭动画结束的回调   | Function                   | ——     | null   |

## Slots

| 名称        | 说明               |
| ----------- | ------------------ |
| `default`   | 默认内容           |
| `header`    | 自定义顶部内容     |
| `footer`    | 自定义底部内容     |
| `closeIcon` | 自定义关闭按钮图标 |

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
  import demo1Vue from './_demos/dialog/demo1.vue'
  import demo2Vue from './_demos/dialog/demo2.vue'
  import demo3Vue from './_demos/dialog/demo3.vue'
</script>
