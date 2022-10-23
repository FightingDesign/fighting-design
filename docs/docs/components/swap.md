# Swap 切换

`Swap` 是一个切换组件

## 基本使用

`Swap` 的基本使用，需要使用 `v-model` 绑定一个值
<f-swap v-model="value1" :icon-on="FIconSoundUp"  :icon-off="FIconSoundMute"/>
<f-swap v-model="value2" :icon-on="FIconSoundUp"  :icon-off="FIconSoundMute" />

::: details 显示代码

```html
<template>
  <f-swap v-model="value1"  :icon-on="FIconSun" :icon-off="FIconMoon"/>
  <f-swap v-model="value2"  :icon-on="FIconSun" :icon-off="FIconMoon"/>
</template>

<script lang="ts" setup>
  import { FIconSoundUp,FIconSoundMute, } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `swap`
  <f-swap v-model="value3" type='f--sound' size="large" :icon-on="FIconSun" :icon-off="FIconMoon" />
  <f-swap v-model="value3" type='f--sound' size="middle" :icon-on="FIconSun" :icon-off="FIconMoon" />
  <f-swap v-model="value3" type='f--sound' size="small"  :icon-on="FIconSun" :icon-off="FIconMoon"/>

::: details 显示代码

```html
<template>
  <f-swap v-model="value3" type='f--sound' size="large" :icon-on="FIconSun" :icon-off="FIconMoon" />
  <f-swap v-model="value3" type='f--sound' size="middle" :icon-on="FIconSun" :icon-off="FIconMoon" />
  <f-swap v-model="value3" type='f--sound' size="small"  :icon-on="FIconSun" :icon-off="FIconMoon"/>
</template>

<script lang="ts" setup>
  import { FIconSun,FIconMoon, } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'
  const value3 = ref(false)
</script>
```

:::

## 不同类型

`icon-on、icon-off` 属性可以配置不同类型的 `swap`
<f-swap v-model="value4" size="middle" type='f--sound'  :icon-on="FIconSun" :icon-off="FIconMoon" :cartoon="sound" />
<f-swap v-model="value5" size="middle" :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown"/>
<f-swap v-model="value6" size="middle" :icon-on="FIconEye" :icon-off="FIconEyeSlash"/>

::: details 显示代码

```html
<template>
<f-swap v-model="value4" size="middle" :icon-on="FIconSun" :icon-off="FIconMoon" :cartoon="sound" />
<f-swap v-model="value5" size="middle" :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown"/>
<f-swap v-model="value6" size="middle" :icon-on="FIconEye" :icon-off="FIconEyeSlash"/>
</template>

<script lang="ts" setup>
  import { FIconSun,FIconMoon,FIconFaceFrown,FIconFaceSmile,FIconEye,FIconEyeSlash } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
</script>
```

:::

## 不同动画

`type` 属性可以配置不同的动画类型
<f-swap v-model="value7" size="middle" type='f--sound' :icon-on="FIconSun" :icon-off="FIconMoon" />
<f-swap v-model="value8" size="middle" type='f--swap'  :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown"/>
::: details 显示代码

```html
<template>
<f-swap v-model="value7" size="middle" type='f--sound' :icon-on="FIconSun" :icon-off="FIconMoon" />
<f-swap v-model="value8" size="middle" type='f--swap'  :icon-on="FIconFaceSmile" :icon-off="FIconFaceFrown"/>
</template>

<script lang="ts" setup>
    import { FIconSun,FIconMoon,FIconFaceFrown,FIconFaceSmile} from '@fighting-design/
  import { ref } from 'vue'
  const value7 = ref(true)
  const value8 = ref(true)
</script>
```

:::

## Attributes

| 参数       | 说明           | 类型   | 可选值                            | 默认值     |
|------------|--------------|--------|-----------------------------------|------------|
| `v-model`  | 绑定值         | string | ——                                | false      |
| `size`     | 组件尺寸       | string | `large` `middle` `small`          | middle     |
| `type`     | 动画类型       | string | `f--sound` `f--swap` `f--default` | f--default |
| `icon-on`  | 图表类型状态一 | string | `必传值`                          | ——         |
| `icon-off` | 图表类型状态二 | string | `必传值`                          | ——         |
## Interface

组件导出以下类型定义：

```ts
import type { 
  SwapPropsType,
  SwapInstance, 
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
  const value8 = ref(true)
</script>

<style scoped>
.f-swap {
  margin: 5px;
}
</style>
