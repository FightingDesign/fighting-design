# Count Down 倒计时

用于实时展示倒计时数值，并且支持毫秒级渲染

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/count-down)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/count-down.md)

## 基本使用

`time` 属性表示倒计时总时长，单位为毫秒。

::: demo

<template #source>
<f-count-down format="DD : HH : mm: ss" :time="timeStamp" :on-finish="handelFinish" />
</template>

```vue
<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const timeStamp = 10 * 1000

  const handelFinish = (): void => {
    FMessage.primary('倒计时结束')
  }
</script>

<template>
  <f-count-down format="DD : HH : mm: ss" :time="timeStamp" :on-finish="handelFinish" />
</template>
```

:::

## 自定义格式

可以使用 `format` 属性设置倒计时文本的内容。

其中`DD`代表天
`HH`代表小时
`mm`代表分钟
`ss`代表秒
`SSS`代表毫秒（开启毫秒级渲染才可以）

::: demo

<template #source>
<f-count-down format="DD 天 HH 小时 mm 分钟 ss 秒" :time="2 * 24 * 60 * 60 * 1000" />
</template>

```vue
<template>
  <f-count-down format="DD 天 HH 小时 mm 分钟 ss 秒" :time="2 * 24 * 60 * 60 * 1000" />
</template>
```

:::

## 毫秒级别渲染

`millisecond` 属性可以开启毫秒级渲染。当为 `false` 时，渲染间隔为 `1s`

::: demo

<template #source>
<f-count-down millisecond format="DD 天 HH 小时 mm 分钟 ss 秒 SSS 毫秒" :time="2*24*60*60*1000" />
</template>

```vue
<template>
  <f-count-down
    millisecond
    format="DD 天 HH 小时 mm 分钟 ss 秒 SSS 毫秒"
    :time="2 * 24 * 60 * 60 * 1000"
  />
</template>
```

:::

## 自定义样式

通过`插槽`获取实时剩余时间，`currentTime`格式

::: demo

<template #source>
<f-count-down :time="24 *60 * 60 * 1000">
<template #default="currentTime">
<span class="block">{{ currentTime.hours }}</span>
<span class="colon">:</span>
<span class="block">{{ currentTime.minutes }}</span>
<span class="colon">:</span>
<span class="block">{{ currentTime.seconds }}</span>
</template>
</f-count-down>
</template>

```vue
<template>
  <f-count-down :time="24 * 60 * 60 * 1000">
    <template #default="currentTime">
      <span class="block">{{ currentTime.hours }}</span>
      <span class="colon">:</span>
      <span class="block">{{ currentTime.minutes }}</span>
      <span class="colon">:</span>
      <span class="block">{{ currentTime.seconds }}</span>
    </template>
  </f-count-down>
</template>

<style>
  .colon {
    display: inline-block;
    color: #ee0a24;
    margin-left: calc(var(--count-down-text-size) / 2);
  }

  .block {
    display: inline-block;
    width: calc(var(--count-down-text-size) * 2);
    margin-left: var(--count-down-text-size);
    font-size: var(--count-down-text-size);
    color: #fff;
    text-align: center;
    background-color: #087ed3;
    border-radius: 4px * 2;
  }
</style>
```

:::

## Attributes

| 参数          | 说明                                                    | 类型                                           | 可选值 | 默认值   |
| ------------- | ------------------------------------------------------- | ---------------------------------------------- | ------ | -------- |
| `time`        | 倒计时时长，单位毫秒                                    | string / number                                | ——     | ——       |
| `interval`    | 倒计时渲染间隔，单位毫秒（开启`millisecond`则此项无效） | number                                         | ——     | `1000`   |
| `format`      | 时间格式                                                | string                                         | ——     | HH:mm:ss |
| `auto-start`  | 是否自动开始倒计时                                      | boolean                                        | ——     | true     |
| `millisecond` | 是否开始毫秒级渲染                                      | boolean                                        | ——     | false    |
| `on-finish`   | 倒计时结束后触发的回调                                  | <a href="#countdownfinish">CountDownFinish</a> | ——     | ——       |

## Methods

| 参数       | 说明                                                         | 参数                  |
| ---------- | ------------------------------------------------------------ | --------------------- |
| `start`    | 开始倒计时                                                   | ——                    |
| `pause`    | 暂停倒计时                                                   | ——                    |
| `on-reset` | 重设倒计时，若 `autostart` 为 `true`，重设后会自动开始倒计时 | `total-time` 倒计时长 |

## Slots

| 名称      | 说明       | 参数                    |
| --------- | ---------- | ----------------------- |
| `default` | 自定义内容 | currentTime:CurrentTime |

## Interface

组件导出以下类型定义：

```ts
import type { CountDownInstance, CountDownProps, CountDownFinish } from 'fighting-design'
```

### CountDownFinish

```ts
type CountDownFinish = () => void
```

<!-- ### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） | -->

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                    | 描述     |
| ----------------------- | -------- |
| --count-down-font-size  | 字体大小 |
| --count-down-font-color | 字体颜色 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/JetTsang" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76730587?s=96&v=4" />
</a>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { FMessage } from 'fighting-design'


  const timeStamp = 10 * 1000

  const handelFinish = (): void => {
    FMessage.primary('倒计时结束')
  }
</script>

<style>
  .colon {
    display: inline-block;
    color: #ee0a24;
    margin-left: calc(var(--count-down-text-size) / 2);
  }

  .block {
    display: inline-block;
    width: calc(var(--count-down-text-size) * 2);
    margin-left: var(--count-down-text-size);
    font-size: var(--count-down-text-size);
    color: #fff;
    text-align: center;
    background-color: #087ed3;
    border-radius: 4px * 2;
  }
</style>
