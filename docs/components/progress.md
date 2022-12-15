# Progress 进度条

据说进度条都是假的

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/progress)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/progress.md)

## 基本使用

`percentage` 属性表示进度条对应的百分比，取值范围在 `0-100`范围内。

`type` 属性可以配置不同的进度条样式，展示不同的颜色状态

`square` 和 `linear` 属性可以分别配置方形或线形的进度条

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(10)

  const sun = () => {
    if (num.value > 0) {
      num.value -= 10
    }
  }

  const add = () => {
    if (num.value < 100) {
      num.value += 10
    }
  }
</script>

<template>
  <f-space vertical>
    <f-progress type="primary" :percentage="num" />
    <f-progress type="success" :percentage="num" />
    <f-progress type="danger" :percentage="num" />
    <f-progress type="warning" :percentage="num" />

    <f-progress type="primary" :percentage="num" square />
    <f-progress type="success" :percentage="num" linear />
  </f-space>

  <f-button-group>
    <f-button simple round type="primary" @click="sun">减少</f-button>
    <f-button simple round type="primary" @click="add">增加</f-button>
  </f-button-group>
</template>
```

:::

## 显示百分比

`show-text` 属性用来展示进度条百分比，线性的不会显示，当自定义高度小于 `18px` 自动隐藏百分比。可以通过 `text-inside` 属性控制百分比内容是否在进度条内显示

::: demo

```vue
<template>
  <f-space vertical>
    <f-progress :percentage="10" show-text />
    <f-progress type="success" :percentage="40" :show-text="false" />
    <f-progress type="danger" :percentage="70" linear height="18px" text-inside />
    <f-progress type="warning" :percentage="90" linear show-text />
  </f-space>
</template>
```

:::

## 自定义宽高

`width` 和 `height` 属性接收一个字符串，用于自定义进度条宽高

::: demo

```vue
<template>
  <f-space vertical>
    <f-progress type="success" :percentage="40" width="100%" height="20px" show-text text-inside />
    <f-progress :percentage="10" width="360px" height="27px" show-text />
  </f-space>
</template>
```

:::

## 自定义颜色

可以通过 `color` 属性设置进度条的颜色，会覆盖 `type` 属性对应的颜色

`background` 属性来设置进度条背景色

::: demo

```vue
<template>
  <f-space vertical>
    <f-progress type="danger" :percentage="70" color="#ff386a" />
    <f-progress type="success" :percentage="40" background="#C3FFBD" />
  </f-space>
</template>
```

:::

## 条纹状态

`stripe` 可以配置条纹样式

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(10)

  const sun = () => {
    if (num.value > 0) {
      num.value -= 10
    }
  }

  const add = () => {
    if (num.value < 100) {
      num.value += 10
    }
  }
</script>

<template>
  <f-space vertical>
    <f-progress :height="25" stripe type="primary" :percentage="num" />
    <f-progress :height="25" stripe type="success" :percentage="num" />
    <f-progress :height="25" stripe type="danger" :percentage="num" />
    <f-progress :height="25" stripe type="warning" :percentage="num" />
  </f-space>

  <f-button-group>
    <f-button simple round type="primary" @click="sun">减少</f-button>
    <f-button simple round type="primary" @click="add">增加</f-button>
  </f-button-group>
</template>
```

:::

## Attributes

| 参数          | 说明                         | 类型                                     | 可选值                                 | 默认值  |
| ------------- | ---------------------------- | ---------------------------------------- | -------------------------------------- | ------- |
| `percentage`  | 百分比                       | number                                   | `0 ~ 100`                              | 0       |
| `type`        | 进度条类型                   | <a href="#progresstype">ProgressType</a> | `primary` `success` `warning` `danger` | primary |
| `width`       | 自定义宽度                   | string / number                          | ——                                     | ——      |
| `height`      | 自定义高度                   | string / number                          | ——                                     | 6px     |
| `square`      | 方形                         | boolean                                  | ——                                     | false   |
| `linear`      | 线性                         | boolean                                  | ——                                     | false   |
| `show-text`   | 是否显示百分比文字内容       | boolean                                  | ——                                     | true    |
| `text-inside` | 百分比文字是否在进度条内显示 | boolean                                  | ——                                     | false   |
| `text-color`  | 百分比文字的颜色             | string                                   | ——                                     | ——      |
| `color`       | 进度条颜色                   | string                                   | ——                                     | ——      |
| `background`  | 进度条背景色                 | string                                   | ——                                     | ——      |
| `stripe`      | 是否开启条纹效果             | boolean                                  | ——                                     | false   |

## Interface

组件导出以下类型定义：

```ts
import type { ProgressInstance, ProgressProps, ProgressType } from 'fighting-design'
```

### ProgressType

```ts
type ProgressType = 'primary' | 'success' | 'danger' | 'warning'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/ding139725" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/48934746?v=4" />
</a>

<a href="https://github.com/lzyaom" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/26430638?v=4" />
</a>
