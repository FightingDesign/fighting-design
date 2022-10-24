# Swap 切换

精致的切换组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md)

## 基本使用

需要使用 `v-model` 绑定一个值

`icon-on` 和 `icon-off` 分别控制切换的不同图标

<f-swap v-model="value1" :icon-on="FIconSun" :icon-off="FIconMoon" />
<f-swap v-model="value2" :icon-on="FIconSun" :icon-off="FIconMoon" />

::: details 显示代码

```html
<template>
  <f-swap v-model="value1" :icon-on="FIconSun" :icon-off="FIconMoon" />
  <f-swap v-model="value2" :icon-on="FIconSun" :icon-off="FIconMoon" />
</template>

<script lang="ts" setup>
  import { FIconSun, FIconMoon } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同尺寸

`size` 属性可配置不同的尺寸

<f-swap v-model="value3" :size="50" :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown" />
<f-swap v-model="value4" size="30px" :icon-on="FIconEye" :icon-off="FIconEyeSlash" />

::: details 显示代码

```html
<template>
  <f-swap
    v-model="value5"
    :size="50"
    :icon-on="FIconFaceSmile"
    :icon-off="FIconFaceFrown"
  />
  <f-swap
    v-model="value6"
    size="30px"
    :icon-on="FIconEye"
    :icon-off="FIconEyeSlash"
  />
</template>

<script lang="ts" setup>
  import {
    FIconFaceFrown,
    FIconFaceSmile,
    FIconEye,
    FIconEyeSlash
  } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value3 = ref(true)
  const value4 = ref(true)
</script>
```

:::

## 不同动画

`type` 属性可以配置不同的动画类型

<f-swap v-model="value5" type="default" :icon-on="FIconEye" :icon-off="FIconEyeSlash" />
<f-swap v-model="value6" type="sound" :icon-on="FIconSun" :icon-off="FIconMoon" />
<f-swap v-model="value7" type="swap" :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown" />

::: details 显示代码

```html
<template>
  <f-swap
    v-model="value5"
    type="default"
    :icon-on="FIconEye"
    :icon-off="FIconEyeSlash"
  />
  <f-swap
    v-model="value6"
    type="sound"
    :icon-on="FIconSun"
    :icon-off="FIconMoon"
  />
  <f-swap
    v-model="value7"
    type="swap"
    :icon-on="FIconFaceSmile"
    :icon-off="FIconFaceFrown"
  />
</template>

<script lang="ts" setup>
  import {
    FIconSun,
    FIconMoon,
    FIconFaceSmile,
    FIconFaceFrown,
    FIconEye,
    FIconEyeSlash
  } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
</script>
```

:::

## Attributes

| 参数        | 说明                         | 类型                       | 可选值                   | 默认值  |
| ----------- | ---------------------------- | -------------------------- | ------------------------ | ------- |
| `v-model`   | 绑定值                       | boolean                    | ——                       | false   |
| `size`      | 组件尺寸                     | string / number            | ——                       | 40      |
| `type`      | 动画类型                     | string                     | `sound` `swap` `default` | default |
| `icon-on`   | 打开展示的图标               | object (VNode / Component) | ——                       | null    |
| `icon-off`  | 关闭展示的图标               | object (VNode / Component) | ——                       | null    |
| `on-change` | 当绑定值发生改变时触发的回调 | Function                   | ——                       | null    |

## Interface

组件导出以下类型定义：

```ts
import type {
  SwapInstance,
  SwapPropsType,
  SwapType,
  SwapOnChangeInterface
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/ChetSerenade" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/44160015?v=4" />
</a>

<script lang="ts" setup>
  import { 
   FIconSoundUp,
   FIconSoundMute,
   FIconSun,
   FIconMoon,
   FIconFaceSmile,
   FIconFaceFrown,
   FIconEye,
   FIconEyeSlash
   } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value1 = ref(true)
  const value2 = ref(false)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
</script>

<style scoped>
.f-swap {
  margin: 5px;
}
</style>
