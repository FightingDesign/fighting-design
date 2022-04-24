# Alert 提示

## 基本使用

提示的基本使用

message 属性可以配置提示文字

type 属性可以配置类型

<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />

```html
<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />
```

## 带有 icon

icon 属性可以配置 icon
<tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />

```html
<tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />
```

## 可以关闭的

close 属性可以配置宽度

动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现

<tyh-alert
v-show="isShow1"
close
message="点击关闭普通提示"
@close="isShow1 = false"
/>
<tyh-alert
v-show="isShow2"
close
type="primary"
message="点击关闭主要提示"
@close="isShow2 = false"
/>
<tyh-alert
v-show="isShow3"
close
type="success"
message="点击关闭成功提示"
@close="isShow3 = false"
/>
<tyh-alert
v-show="isShow4"
close
type="danger"
message="点击关闭危险提示"
@close="isShow4 = false"
/>
<tyh-alert
v-show="isShow5"
close
type="warning"
message="点击关闭警告提示"
@close="isShow5 = false"
/>

```html
<template>
  <tyh-alert
    v-show="isShow1"
    close
    message="点击关闭普通提示"
    @close="isShow1 = false"
  />
  <tyh-alert
    v-show="isShow2"
    close
    type="primary"
    message="点击关闭主要提示"
    @close="isShow2 = false"
  />
  <tyh-alert
    v-show="isShow3"
    close
    type="success"
    message="点击关闭成功提示"
    @close="isShow3 = false"
  />
  <tyh-alert
    v-show="isShow4"
    close
    type="danger"
    message="点击关闭危险提示"
    @close="isShow4 = false"
  />
  <tyh-alert
    v-show="isShow5"
    close
    type="warning"
    message="点击关闭警告提示"
    @close="isShow5 = false"
  />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>
```

## 文字居中

center 属性可以配置文字居中

<tyh-alert center message="这是一个普通提示" />
<tyh-alert center type="primary" message="这是一个主要提示" />
<tyh-alert center type="success" message="这是一个成功提示" />
<tyh-alert center type="danger" message="这是一个危险提示" />
<tyh-alert center type="warning" message="这是一个警告提示" />

```html
<tyh-alert center message="这是一个普通提示" />
<tyh-alert center type="primary" message="这是一个主要提示" />
<tyh-alert center type="success" message="这是一个成功提示" />
<tyh-alert center type="danger" message="这是一个危险提示" />
<tyh-alert center type="warning" message="这是一个警告提示" />
```

## 简约提示

simple 属性可以配置简约提示

<tyh-alert simple message="简约的普通提示" />
<tyh-alert simple type="primary" message="简约的主要提示" />
<tyh-alert simple type="success" message="简约的成功提示" />
<tyh-alert simple type="danger" message="简约的危险提示" />
<tyh-alert simple type="warning" message="简约的警告提示" />

```html
<tyh-alert simple message="简约的普通提示" />
<tyh-alert simple type="primary" message="简约的主要提示" />
<tyh-alert simple type="success" message="简约的成功提示" />
<tyh-alert simple type="danger" message="简约的危险提示" />
<tyh-alert simple type="warning" message="简约的警告提示" />
```

## Attributes

| 参数    | 说明             | 类型    | 可选值                               | 默认值 |
| ------- | ---------------- | ------- | ------------------------------------ | ------ |
| message | 提示的文字       | string  | ——                                   | ——     |
| type    | 提示类型         | string  | primary / success / danger / warning | ——     |
| icon    | icon 类名        | string  | ——                                   | ——     |
| close   | 是否展示关闭按钮 | boolean | ——                                   | false  |
| center  | 是否文字居中对齐 | boolean | ——                                   | false  |
| simple  | 简约的提示       | boolean | ——                                   | false  |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 Alert 时触发的回调 |          |

<script setup>
  import { ref } from 'vue'
  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>
