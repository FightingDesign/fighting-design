# Progress 进度条

据说进度条都是假的

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/progress)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/progress.md)

## 基本使用

`percentage` 属性表示进度条对应的百分比，取值范围在 `0-100` 范围内。

`type` 属性可以配置不同的进度条样式，展示不同的颜色状态

::: demo

<template #source>

<f-progress type="default" :percentage="num" />
<f-progress type="primary" :percentage="num" />
<f-progress type="success" :percentage="num" />
<f-progress type="danger" :percentage="num" />
<f-progress type="warning" :percentage="num" />
<f-progress type="info" :percentage="num" />

<f-button-group>
<f-button simple round type="primary" :on-click="sun">减少</f-button>
<f-button simple round type="primary" :on-click="add">增加</f-button>
</f-button-group>
</template>

```html
<template>
  <f-progress type="default" :percentage="num" />
  <f-progress type="primary" :percentage="num" />
  <f-progress type="success" :percentage="num" />
  <f-progress type="danger" :percentage="num" />
  <f-progress type="warning" :percentage="num" />
  <f-progress type="info" :percentage="num" />

  <f-button-group>
    <f-button simple round type="primary" :on-click="sun">减少</f-button>
    <f-button simple round type="primary" :on-click="add">增加</f-button>
  </f-button-group>
</template>

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
```

:::

## 显示百分比

`show-text` 属性用来展示进度条百分比

`outside-text` 属性可配置在外部显示百分比

::: demo

<template #source>
<f-progress :percentage="10" show-text />
<f-progress type="danger" :percentage="70" outside-text show-text />
</template>

```html
<f-progress :percentage="10" show-text />
<f-progress type="danger" :percentage="70" outside-text show-text />
```

:::

## 自定义高度

`height` 属性可配置进度条的高度

::: demo

<template #source>
<f-progress :percentage="10" height="27px" show-text />
<f-progress type="success" :percentage="40" :height="40" show-text />
</template>

```html
<f-progress :percentage="10" height="27px" show-text />
<f-progress type="success" :percentage="40" :height="40" show-text />
```

:::

## 自定义颜色

可以通过 `color` 属性设置进度条的颜色，会覆盖 `type` 属性对应的颜色

`background` 属性来设置进度条背景色

::: demo

<template #source>
<f-progress type="danger" :percentage="70" color="#ff386a" />
<f-progress type="success" :percentage="40" background="#C3FFBD" />
</template>

```html
<f-progress type="danger" :percentage="70" color="#ff386a" />
<f-progress type="success" :percentage="40" background="#C3FFBD" />
```

:::

## 条纹状态

`stripe` 可以配置条纹样式

::: demo

<template #source>
<f-progress stripe type="default" :percentage="num" />
<f-progress stripe type="primary" :percentage="num" />
<f-progress stripe type="success" :percentage="num" />
<f-progress stripe type="danger" :percentage="num" />
<f-progress stripe type="warning" :percentage="num" />
<f-progress stripe type="info" :percentage="num" />

<f-button-group>
  <f-button simple round type="primary" :on-click="sun">减少</f-button>
  <f-button simple round type="primary" :on-click="add">增加</f-button>
</f-button-group>
</template>

```html
<template>
  <f-progress stripe type="default" :percentage="num" />
  <f-progress stripe type="primary" :percentage="num" />
  <f-progress stripe type="success" :percentage="num" />
  <f-progress stripe type="danger" :percentage="num" />
  <f-progress stripe type="warning" :percentage="num" />
  <f-progress stripe type="info" :percentage="num" />

  <f-button-group>
    <f-button simple round type="primary" :on-click="sun">减少</f-button>
    <f-button simple round type="primary" :on-click="add">增加</f-button>
  </f-button-group>
</template>

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
```

:::

## Attributes

| 参数           | 说明                   | 类型                                                               | 可选值                                                  | 默认值  |
| -------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- | ------- |
| `percentage`   | 百分比                 | number                                                             | `0 ~ 100`                                               | 0       |
| `type`         | 类型                   | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` `success` `danger` `warning` `info` | primary |
| `height`       | 自定义高度             | string / number                                                    | ——                                                      | ——      |
| `show-text`    | 是否显示百分比文字内容 | boolean                                                            | ——                                                      | false   |
| `outside-text` | 是否在外部显示文本     | boolean                                                            | ——                                                      | false   |
| `text-color`   | 百分比文字的颜色       | string                                                             | ——                                                      | ——      |
| `color`        | 进度条颜色             | string                                                             | ——                                                      | ——      |
| `background`   | 进度条背景色           | string                                                             | ——                                                      | ——      |
| `stripe`       | 是否开启条纹效果       | boolean                                                            | ——                                                      | false   |

## Interface

组件导出以下类型定义：

```ts
import type { ProgressInstance, ProgressProps } from 'fighting-design'
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

<script setup lang="ts">
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

<style scoped>
  .f-progress {
    margin-bottom: 10px;
  }
</style>
