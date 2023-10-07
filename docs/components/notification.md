# Notification 通知

用于主动操作后的反馈提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/notification)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/notification.md)

## 基本使用

::: demo

<template #source>
<f-button type="primary" @click="openNotification">打开</f-button>
</template>

```html
<template>
  <f-button type="primary" @click="openNotification">打开</f-button>
</template>

<script lang="ts" setup>
  import { FNotification } from 'fighting-design'

  const openNotification = () => {
    FNotification({
      title: '这是一条通知',
      message: '这是通知内容'
    })
  }
</script>
```

:::

## 自定义消息

`notification` 属性可接收 `string` 显示文本，也可接收 `VNode` 自定义消息

::: demo

<template #source>
<f-button type="primary" @click="openVNode">打开</f-button>
</template>

```html
<template>
  <f-button type="primary" @click="openVNode">打开</f-button>
</template>

<script lang="ts" setup>
  import { h } from 'vue'
  import { FNotification } from 'fighting-design'

  const openVNode = () => {
    FNotification({
      title: h('span', [h('span', '这是'), h('b', '自定义标题')]),
      message: h('div', [
        h('p', [h('span', '这是一条'), h('b', ' 非常重要 '), h('span', '的通知')]),
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
<f-button @click="openNotification">default</f-button>
<f-button type="primary" @click="openNotificationPrimary">primary</f-button>
<f-button type="success" @click="openNotificationSuccess">success</f-button>
<f-button type="warning" @click="openNotificationWarning">warning</f-button>
<f-button type="danger" @click="openNotificationDanger">danger</f-button>
</f-space>
</template>

```html
<template>
  <f-space>
    <f-button @click="openNotification">default</f-button>
    <f-button type="primary" @click="openNotificationPrimary">primary</f-button>
    <f-button type="success" @click="openNotificationSuccess">success</f-button>
    <f-button type="warning" @click="openNotificationWarning">warning</f-button>
    <f-button type="danger" @click="openNotificationDanger">danger</f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FNotification } from 'fighting-design'

  const openNotification = () => {
    FNotification({
      title: '这是一条通知',
      message: '这是通知内容'
    })
  }

  const openNotificationPrimary = () => {
    FNotification.primary('这是一条重要通知')
  }

  const openNotificationSuccess = () => {
    FNotification.success('这是一条成功通知')
  }

  const openNotificationWarning = () => {
    FNotification.warning('这是一条警告通知')
  }

  const openNotificationDanger = () => {
    FNotification.danger('这是一条失败通知')
  }
</script>
```

:::

## 可关闭

可以添加关闭按钮。

默认的 `Notification` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `close` 设置为 `true`。

此外，`Notification` 拥有可控的 duration， 默认的关闭时间为 `2500 毫秒`，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。

可以传递 `close-btn` 属性来自定义关闭按钮，支持字符串与 `VNode`。

::: demo

<template #source>
<f-space>
<f-button type="primary" @click="openNotificationClose1">5 秒后关闭</f-button>
<f-button type="primary" @click="openNotificationClose2">不自动关闭</f-button>
</f-space>

</template>

```html
<template>
  <f-button type="primary" @click="openNotificationClose1">打开</f-button>
  <f-button type="primary" @click="openNotificationClose2">打开</f-button>
</template>

<script setup lang="ts">
  import { h } from 'vue'
  import { FNotification } from '@fighting-design'

  const openNotificationClose1 = () => {
    FNotification({
      title: '一条通知',
      message: '这是一条5秒后消失的消息',
      type: 'primary',
      close: true,
      duration: 5000
    })
  }

  const openNotificationClose2 = () => {
    FNotification({
      title: '一条通知',
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
<f-button type="primary" @click="openNotificationPlacement('top-left')">左上</f-button>
<f-button type="primary" @click="openNotificationPlacement('top-right')">右上</f-button>
<f-button type="success" @click="openNotificationPlacement('bottom-left')">左下</f-button>
<f-button type="success" @click="openNotificationPlacement('bottom-right')">右下</f-button>
</f-space>
</template>

```html
<template>
  <f-space>
    <f-button type="primary" @click="openNotificationPlacement('top-left')">
      左上
    </f-button>
    <f-button type="primary" @click="openNotificationPlacement('top-right')">
      右上
    </f-button>
    <f-button type="success" @click="openNotificationPlacement('bottom-left')">
      左下
    </f-button>
    <f-button type="success" @click="openNotificationPlacement('bottom-right')">
      右下
    </f-button>
  </f-space>
</template>

<script setup lang="ts">
  import { FNotification } from 'fighting-design'
  import type { NotificationPlacement } from 'fighting-design'

  const openNotificationPlacement = (placement: NotificationPlacement): void => {
    FNotification({
      title: '一条通知',
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

| 参数         | 说明                                         | 类型                                                                                         | 可选值                                              | 默认值    |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------- |
| `title`      | 通知标题                                     | string / <a target="_blank" href="https://cn.vuejs.org/api/render-function.html#h">VNode</a> | ——                                                  | ——        |
| `message`    | 通知文本                                     | string / <a target="_blank" href="https://cn.vuejs.org/api/render-function.html#h">VNode</a> | ——                                                  | ——        |
| `type`       | 消息类型                                     | <a href="/components/interface.html#fightingtype">FightingType</a>                           | `default` `primary` `success` `danger` `warning`    | ——        |
| `duration`   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | number                                                                                       | ——                                                  | 2500      |
| `round`      | 是否为圆角类型                               | boolean                                                                                      | ——                                                  | false     |
| `close`      | 是否可关闭                                   | boolean                                                                                      | ——                                                  | false     |
| `show-icon`  | 是否显示按钮                                 | boolean                                                                                      | ——                                                  | true      |
| `icon`       | 自定义前缀 icon                              | <a href="/components/interface.html#fightingicon">FightingIcon</a>                           | ——                                                  | ——        |
| `color`      | 自定义字体颜色                               | string                                                                                       | ——                                                  | ——        |
| `background` | 自定义背景色                                 | string                                                                                       | ——                                                  | ——        |
| `placement`  | 弹出位置                                     | <a href="#notificationplacement">NotificationPlacement</a>                                   | `top-left` `top-right` `bottom-left` `bottom-right` | top-right |
| `offset`     | 偏移距离                                     | number                                                                                       | ——                                                  | 20        |
| `close-btn`  | 自定义关闭按钮                               | string / <a target="_blank" href="https://cn.vuejs.org/api/render-function.html#h">VNode</a> | ——                                                  | ——        |
| `z-index`    | 层级                                         | boolean                                                                                      | ——                                                  | 1000      |
| `on-close`   | 关闭之后回调                                 | <a href="/components/message.html#messageclose">MessageClose</a>                             | ——                                                  | ——        |

## Interface

组件导出以下类型定义：

```ts
import type {
  NotificationInstance,
  NotificationProps,
  NotificationPlacement
} from 'fighting-design'
```

### NotificationPlacement

```ts
type NotificationPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<script setup lang="ts">
  import { h } from 'vue'
  import { FNotification } from 'fighting-design'

  const openNotification = () => {
    FNotification({
      title: '这是一条通知',
      message: '这是通知内容'
    })
  }

  const openNotificationPrimary = () => {
    FNotification.primary('这是一条重要通知')
  }

  const openNotificationSuccess = () => {
    FNotification.success('这是一条成功通知')
  }

  const openNotificationWarning = () => {
    FNotification.warning('这是一条警告通知')
  }

  const openNotificationDanger = () => {
    FNotification.danger('这是一条失败通知')
  }

  const openNotificationClose1 = () => {
    FNotification({
      title: '一条通知',
      message: '这是一条5秒后消失的消息',
      type: 'primary',
      close: true,
      duration: 5000
    })
  }

  const openNotificationClose2 = () => {
    FNotification({
      title: '一条通知',
      message: '这是一条不会自动消失的消息',
      type: 'primary',
      close: true,
      closeBtn: '关闭',
      duration: 0
    })
  }

  const openNotificationPlacement = (placement) => {
    FNotification({
      title: '一条通知',
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      placement: placement
    })
  }

  const openVNode = () => {
    FNotification({
      title: h('span', [
        h('span', '这是'),
        h('b', '自定义标题'),
      ]),
      message: h('div', [
        h('p', [
          h('span', '这是一条'),
          h('b', ' 非常重要 '),
          h('span', '的通知')
        ]),
        h('p', '这里是一些不重要的内容')
      ]),
      type: 'primary',
    })
  }
</script>
