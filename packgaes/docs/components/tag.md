# Tag 标签

## 基本使用

标签的基本使用

<tyh-tag>标签一</tyh-tag>
<tyh-tag type="primary">标签二</tyh-tag>
<tyh-tag type="success">标签三</tyh-tag>
<tyh-tag type="danger">标签四</tyh-tag>
<tyh-tag type="warning">标签五</tyh-tag>

```html
<tyh-tag>标签一</tyh-tag>
<tyh-tag type="primary">标签二</tyh-tag>
<tyh-tag type="success">标签三</tyh-tag>
<tyh-tag type="danger">标签四</tyh-tag>
<tyh-tag type="warning">标签五</tyh-tag>
```

## 不同尺寸

size 属性可以配置不同的尺寸

<tyh-tag type="primary">标签</tyh-tag>
<tyh-tag size="small" type="primary">标签</tyh-tag>
<tyh-tag size="mini" type="primary">标签</tyh-tag>

```html
<tyh-tag type="primary">标签</tyh-tag>
<tyh-tag size="small" type="primary">标签</tyh-tag>
<tyh-tag size="mini" type="primary">标签</tyh-tag>
```

## 圆角标签

round 属性可以配置圆角显示

<tyh-tag round>标签一</tyh-tag>
<tyh-tag round type="primary">标签二</tyh-tag>
<tyh-tag round type="success">标签三</tyh-tag>
<tyh-tag round type="danger">标签四</tyh-tag>
<tyh-tag round type="warning">标签五</tyh-tag>

```html
<tyh-tag round>标签一</tyh-tag>
<tyh-tag round type="primary">标签二</tyh-tag>
<tyh-tag round type="success">标签三</tyh-tag>
<tyh-tag round type="danger">标签四</tyh-tag>
<tyh-tag round type="warning">标签五</tyh-tag>
```

## 可关闭

设置 isClose 属性可以定义一个标签是否可移除

动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现

<tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
<tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">标签二</tyh-tag>
<tyh-tag v-show="show3" type="success" isClose @close="show3 = false">标签三</tyh-tag>
<tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">标签四</tyh-tag>
<tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">标签五</tyh-tag>

```html
<template>
  <tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" type="success" isClose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">
    标签五
  </tyh-tag>
</template>

<script setup>
  import { ref } from 'vue'
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
</script>
```

## Attributes

| 参数    | 说明             | 类型    | 可选值                                         | 默认值  |
| ------- | ---------------- | ------- | ---------------------------------------------- | ------- |
| type    | 标签的类型       | string  | default / primary / success / danger / warning | default |
| size    | 标签的尺寸       | string  | — / small / mini                               | ——      |
| round   | 配置圆角显示     | boolean | ——                                             | false   |
| isClose | 是否显示关闭按钮 | boolean | ——                                             | false   |

## Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| close    | 关闭 Tag 时触发的回调 | ——       |

<script setup>
  import { ref } from 'vue'
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
</script>
