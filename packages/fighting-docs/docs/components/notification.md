# Notification 通知

## 使用前

使用前，你必须先引入它

```js
import { Notification } from 'tyh-ui2'
```

## 基本使用

通知的基本使用

通过引入 Notification 方法，接收一个对象

title 属性可以定义标题

message 属性可以定义内容

<tyh-button type="primary" @click="open1">展示通知</tyh-button>

```html
<template>
  <tyh-button type="primary" @click="open1">展示通知</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open1() {
    Notification({
      title: '提示',
      message: '这里是提示的文案'
    })
  }
</script>
```

## 不同类型的

type 属性可以配置不同类型的通知

<tyh-button type="primary" @click="open2">主要通知</tyh-button>
<tyh-button type="success" @click="open3">成功通知</tyh-button>
<tyh-button type="danger" @click="open4">危险通知</tyh-button>
<tyh-button type="warning" @click="open5">警告通知</tyh-button>

```html
<template>
  <tyh-button type="primary" @click="open2">主要通知</tyh-button>
  <tyh-button type="success" @click="open3">成功通知</tyh-button>
  <tyh-button type="danger" @click="open4">危险通知</tyh-button>
  <tyh-button type="warning" @click="open5">警告通知</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open2() {
    Notification({
      title: '主要提示',
      message: '这是一个主要提示',
      type: 'primary'
    })
  }
  function open3() {
    Notification({
      title: '成功提示',
      message: '这是一个成功提示',
      type: 'success'
    })
  }
  function open4() {
    Notification({
      title: '危险提示',
      message: '这是一个危险提示',
      type: 'danger'
    })
  }
  function open5() {
    Notification({
      title: '警告提示',
      message: '这是一个警告提示',
      type: 'warning'
    })
  }
</script>
```

## 不同的弹出位置

position 属性可以配置不同类型的通知

<tyh-button type="primary" @click="open6">上左</tyh-button>
<tyh-button type="primary" @click="open7">上右</tyh-button>
<tyh-button type="primary" @click="open8">下左</tyh-button>
<tyh-button type="primary" @click="open9">下右</tyh-button>

```html
<template>
  <tyh-button type="primary" @click="open6">上左</tyh-button>
  <tyh-button type="primary" @click="open7">上右</tyh-button>
  <tyh-button type="primary" @click="open8">下左</tyh-button>
  <tyh-button type="primary" @click="open9">下右</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open6() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-left'
    })
  }
  function open7() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-right'
    })
  }
  function open8() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-left'
    })
  }
  function open9() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-right'
    })
  }
</script>
```

## 自定义时长

time 属性可以自定义通知展示的时长

<tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>

```html
<template>
  <tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open10() {
    Notification({
      title: '提示',
      message: '4000 毫秒后自动关闭',
      time: 4000
    })
  }
</script>
```

## Attributes

| 参数     | 说明             | 类型    | 可选值                                            | 默认值    |
| -------- | ---------------- | ------- | ------------------------------------------------- | --------- |
| title    | 标题             | string  | ——                                                | ——        |
| message  | 提示信息         | string  | ——                                                | ——        |
| type     | 通知类型         | string  | primary / success / danger / warning              | ——        |
| time     | 展示的市场       | number  | ——                                                | 3500      |
| position | 弹出位置         | string  | top-left / top-right / bottom-left / bottom-right | top-right |
| close    | 是否显示关闭按钮 | boolean | ——                                                | true      |

<script setup>
  import { Notification } from 'tyh-ui2'
  function open1() {
    Notification({
      title: '提示',
      message: '这里是提示的文案'
    })
  }
  function open2() {
    Notification({
      title: '主要提示',
      message: '这是一个主要提示',
      type: 'primary'
    })
  }
  function open3() {
    Notification({
      title: '成功提示',
      message: '这是一个成功提示',
      type: 'success'
    })
  }
  function open4() {
    Notification({
      title: '危险提示',
      message: '这是一个危险提示',
      type: 'danger'
    })
  }
  function open5() {
    Notification({
      title: '警告提示',
      message: '这是一个警告提示',
      type: 'warning'
    })
  }
  function open6() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-left'
    })
  }
  function open7() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-right'
    })
  }
  function open8() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-left'
    })
  }
  function open9() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-right'
    })
  }
  function open10() {
    Notification({
      title: '提示',
      message: '4000 毫秒后自动关闭',
      time: 4000
    })
  }
</script>
