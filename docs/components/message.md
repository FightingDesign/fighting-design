# Message 消息提示

用于主动操作后的反馈提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/message)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/message.md)

## 基本使用

::: demo

<template #source>
<f-button type="primary" @click="openMessage">打开</f-button>
</template>

```html
<template>
  <f-button type="primary" @click="openMessage">打开</f-button>
</template>

<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const openMessage = () => {
    FMessage('这是一条消息提示')
  }
</script>
```

:::

## 自定义消息

`message` 属性可接收`string`显示文本，也可接收`VNode`自定义消息

限定最大宽度为`500px`

::: demo

<template #source>
<f-button type="primary" @click="openMessageVNode">打开</f-button>
</template>

```html
<template>
  <f-button type="primary" @click="openMessageVNode">打开</f-button>
</template>

<script lang="ts" setup>
  import { h } from 'vue'
  import { FMessage } from 'fighting-design'

  const openMessageVNode = () => {
    FMessage({
      message: h('div', [
        h('p', [h('span', '这是一条'), h('b', ' 非常重要 '), h('span', '的消息提示')]),
        h('p', '这里是一些不重要的内容')
      ]),
      type: 'primary'
    })
  }
</script>
```

:::

## 多种类型

::: demo

<template #source>
<f-space>
<f-button @click="openMessage">default</f-button>
<f-button type="primary" @click="openMessagePrimary">primary</f-button>
<f-button type="success" @click="openMessageSuccess">success</f-button>
<f-button type="warning" @click="openMessageWarning">warning</f-button>
<f-button type="danger" @click="openMessageDanger">danger</f-button>
</f-space>
</template>

```html
<template>
  <f-space>
    <f-button @click="openMessage">default</f-button>
    <f-button type="primary" @click="openMessagePrimary">primary</f-button>
    <f-button type="success" @click="openMessageSuccess">success</f-button>
    <f-button type="warning" @click="openMessageWarning">warning</f-button>
    <f-button type="danger" @click="openMessageDanger">danger</f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FMessage } from 'fighting-design'

  const openMessage = () => {
    FMessage('这是一条消息提示')
  }

  const openMessagePrimary = () => {
    FMessage.primary('这是一条重要消息提示')
  }

  const openMessageSuccess = () => {
    FMessage.success('这是一条成功消息提示')
  }

  const openMessageWarning = () => {
    FMessage.warning('这是一条警告消息提示')
  }

  const openMessageDanger = () => {
    FMessage.danger('这是一条失败消息提示')
  }
</script>
```

:::

## 可关闭

可以添加关闭按钮。

默认的 `Message` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `close` 设置为 `true`。

此外，`Message` 拥有可控的 duration， 默认的关闭时间为 `2500 毫秒`，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。

可以传递 `close-btn` 属性来自定义关闭按钮，支持字符串与 `VNode`。

::: demo

<template #source>
<f-space>
<f-button type="primary" @click="openMessageClose1">5 秒后关闭</f-button>
<f-button type="primary" @click="openMessageClose2">不自动关闭</f-button>
</f-space>
</template>

```html
<template>
  <f-button type="primary" @click="openMessageClose1">show</f-button>
  <f-button type="primary" @click="openMessageClose2">show</f-button>
</template>

<script setup lang="ts">
  import { FMessage } from 'fighting-design'

  const openMessageClose1 = () => {
    FMessage({
      message: '这是一条5秒后消失的消息',
      type: 'primary',
      close: true,
      duration: 5000
    })
  }

  const openMessageClose2 = () => {
    FMessage({
      message: '这是一条不会自动消失的消息',
      type: 'primary',
      close: true,
      closeBtn: '关闭',
      duration: 0
    })
  }
</script>
```

:::

## 不同位置

`placement` 配置项可调整不同弹出位置

::: demo

<template #source>
<f-space>
<f-button type="primary" @click="openMessagePlacement('top')">顶部</f-button>
<f-button type="primary" @click="openMessagePlacement('top-left')">左上</f-button>
<f-button type="primary" @click="openMessagePlacement('top-right')">右上</f-button>
<f-button type="success" @click="openMessagePlacement('bottom')">底部</f-button>
<f-button type="success" @click="openMessagePlacement('bottom-left')">左下</f-button>
<f-button type="success" @click="openMessagePlacement('bottom-right')">右下</f-button>
</f-space>
</template>

```html
<script setup lang="ts">
  import { FMessage } from 'fighting-design'
  import type { MessagePlacement } from 'fighting-design'

  const openMessagePlacement = (placement: MessagePlacement): void => {
    FMessage({
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      duration: 0,
      placement: placement
    })
  }
</script>

<template>
  <f-space>
    <f-button type="primary" @click="openMessagePlacement('top')">顶部</f-button>
    <f-button type="primary" @click="openMessagePlacement('top-left')">左上</f-button>
    <f-button type="primary" @click="openMessagePlacement('top-right')">右上</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom')">底部</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom-left')">左下</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom-right')">右下</f-button>
  </f-space>
</template>
```

:::

## Attributes

| 参数         | 说明                                         | 类型                                                                                         | 可选值                                                             | 默认值  |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| `message`    | 消息文本                                     | string / <a target="_blank" href="https://cn.vuejs.org/api/render-function.html#h">VNode</a> | ——                                                                 | false   |
| `type`       | 消息类型                                     | <a href="/components/interface.html#fightingtype">FightingType</a>                           | `default` `primary` `success` `danger` `warning`                   | default |
| `duration`   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | number                                                                                       | ——                                                                 | 2500    |
| `round`      | 是否为圆角类型                               | boolean                                                                                      | ——                                                                 | false   |
| `close`      | 是否可关闭                                   | boolean                                                                                      | ——                                                                 | false   |
| `icon`       | 消息 icon                                    | <a href="/components/interface.html#fightingicon">FightingIcon</a>                           | ——                                                                 | ——      |
| `color`      | 字体颜色                                     | string                                                                                       | ——                                                                 | ——      |
| `placement`  | 位置                                         | <a href="#messageplacement">MessagePlacement</a>                                             | `top` `bottom` `top-left` `top-right` `bottom-left` `bottom-right` | top     |
| `offset`     | 偏移距离                                     | number                                                                                       | ——                                                                 | 20      |
| `background` | 自定义背景色                                 | string                                                                                       | ——                                                                 | ——      |
| `close-btn`  | 关闭按钮                                     | string / <a href="/components/interface.html#fightingicon">FightingIcon</a>                  | ——                                                                 | ——      |
| `z-index`    | 层级                                         | boolean                                                                                      | ——                                                                 | 1000    |
| `on-close`   | 关闭之后的回调                               | <a href="#messageclose">MessageClose</a>                                                     | ——                                                                 | ——      |

## Interface

组件导出以下类型定义：

```ts
import type {
  MessageInstance,
  MessageProps,
  MessagePlacement,
  MessageClose
} from 'fighting-design'
```

### MessagePlacement

```ts
type MessagePlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
```

### MessageClose

```ts
type MessageClose = (evt?: MouseEvent) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a>

<script setup lang="ts">
  import { h } from 'vue'
  import { FMessage } from 'fighting-design'

  const openMessage = () => {
    FMessage('这是一条消息提示')
  }

  const openMessagePrimary = () => {
    FMessage.primary('这是一条重要消息提示')
  }

  const openMessageSuccess = () => {
    FMessage.success('这是一条成功消息提示')
  }

  const openMessageWarning = () => {
    FMessage.warning('这是一条警告消息提示')
  }

  const openMessageDanger = () => {
    FMessage.danger('这是一条失败消息提示')
  }

  const openMessageClose1 = () => {
    FMessage({
      message: '这是一条5秒后消失的消息',
      type: 'primary',
      close: true,
      duration: 5000
    })
  }

  const openMessageClose2 = () => {
    FMessage({
      message: '这是一条不会自动消失的消息',
      type: 'primary',
      close: true,
      closeBtn: '关闭',
      duration: 0
    })
  }

  const openMessagePlacement = (placement) => {
    FMessage({
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      placement: placement
    })
  }

  const openMessageVNode = () => {
    FMessage({
      message: h('div', [
        h('p', [
          h('span', '这是一条'),
          h('b', ' 非常重要 '),
          h('span', '的消息提示')
        ]),
        h('p', '这里是一些不重要的内容')
      ]),
      type: 'primary',
    })
  }
</script>
