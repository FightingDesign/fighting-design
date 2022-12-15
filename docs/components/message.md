# Message 消息提示

用于主动操作后的反馈提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/message)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/message.md)

## 基本使用

::: demo

```vue
<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const openMessage = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
</script>

<template>
  <f-button type="primary" @click="openMessage">打开</f-button>
</template>
```

:::

## 自定义消息

`message` 属性可接收`string`显示文本，也可接收`VNode`自定义消息

限定最大宽度为`500px`

::: demo

```vue
<script lang="ts" setup>
  import { h } from 'vue'
  import { FMessage } from 'fighting-design'

  const openMessage = () => {
    FMessage({
      message: h('div', [
        h('p', [h('span', '这是一条'), h('b', ' 非常重要 '), h('span', '的消息提示')]),
        h('p', '这里是一些不重要的内容')
      ]),
      type: 'primary'
    })
  }
</script>

<template>
  <f-button type="primary" @click="openMessage">打开</f-button>
</template>
```

:::

## 多种类型

::: demo

```vue
<template>
  <f-space>
    <f-button type="default" @click="openDefault">默认的</f-button>
    <f-button type="primary" @click="openPrimary">主要的</f-button>
    <f-button type="success" @click="openSuccess">成功的</f-button>
    <f-button type="warning" @click="openWarning">危险的</f-button>
    <f-button type="danger" @click="openDanger">警告的</f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FMessage } from 'fighting-design'

  const openDefault = () => {
    FMessage('这是一条消息提示')
  }

  const openPrimary = () => {
    FMessage.primary('这是一条重要消息提示')
  }

  const openSuccess = () => {
    FMessage.success('这是一条成功消息提示')
  }

  const openWarning = () => {
    FMessage.warning('这是一条警告消息提示')
  }

  const openDanger = () => {
    FMessage.danger('这是一条失败消息提示')
  }
</script>
```

:::

## 可关闭

`close` 属性可配置带有关闭按钮

`duration` 属性可配置自动关闭时长，如果设置为 0 则不会自动关闭

可以传递`close-btn`属性来自定义关闭按钮，支持字符串与 `VNode`

::: demo

```vue
<template>
  <f-space>
    <f-button type="primary" @click="openClose1">打开</f-button>
    <f-button type="primary" @click="openClose2">打开</f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FMessage } from 'fighting-design'

  const openClose1 = () => {
    FMessage({
      message: '这是一条5秒后消失的消息',
      type: 'primary',
      close: true,
      duration: 5000
    })
  }

  const openClose2 = () => {
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

## 多个位置

::: demo

```vue
<template>
  <f-space>
    <f-button type="primary" @click="openPlacement('top')">顶部</f-button>
    <f-button type="primary" @click="openPlacement('top-left')">左上</f-button>
    <f-button type="primary" @click="openPlacement('top-right')">右上</f-button>
    <f-button type="success" @click="openPlacement('bottom')">底部</f-button>
    <f-button type="success" @click="openPlacement('bottom-left')">左下</f-button>
    <f-button type="success" @click="openPlacement('bottom-right')">右下</f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FMessage } from 'fighting-design'

  const openPlacement = placement => {
    FMessage({
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      duration: 0,
      placement: placement
    })
  }
</script>
```

:::

## Attributes

| 参数         | 说明                                         | 类型                                                                        | 可选值                                                             | 默认值  |
| ------------ | -------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| `message`    | 消息文本                                     | string / VNode                                                              | ——                                                                 | false   |
| `type`       | 消息类型                                     | <a href="/components/interface.html#fightingtype">FightingType</a>          | `default` `primary` `success` `danger` `warning`                   | default |
| `duration`   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | number                                                                      | ——                                                                 | 3000    |
| `round`      | 是否为圆角类型                               | boolean                                                                     | ——                                                                 | false   |
| `close`      | 是否可关闭                                   | boolean                                                                     | ——                                                                 | false   |
| `icon`       | 消息 icon                                    | <a href="/components/interface.html#fightingicon">FightingIcon</a>          | ——                                                                 | ——      |
| `color`      | 字体颜色                                     | string                                                                      | ——                                                                 | ——      |
| `placement`  | 位置                                         | <a href="#messageplacement">MessagePlacement</a>                            | `top` `bottom` `top-left` `top-right` `bottom-left` `bottom-right` | top     |
| `offset`     | 偏移距离                                     | number                                                                      | ——                                                                 | 20      |
| `background` | 自定义背景色                                 | string                                                                      | ——                                                                 | ——      |
| `close-btn`  | 关闭按钮                                     | string / <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                                                                 | ——      |
| `z-index`    | 层级                                         | boolean                                                                     | ——                                                                 | 1000    |
| `on-close`   | 关闭之后的回调                               | Function                                                                    | ——                                                                 | ——      |

## Events

`FMessage` 调用之后返回 `Message` 实例，如果需要手动关闭实例，可以调用它的 `close` 方法。

| 事件名称 | 说明               |
| -------- | ------------------ |
| `close`  | 关闭当前的 Message |

## Interface

组件导出以下类型定义：

```ts
import type { MessageInstance, MessageProps, MessagePlacement } from 'fighting-design'
```

### MessagePlacement

```ts
type MessagePlacement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>
