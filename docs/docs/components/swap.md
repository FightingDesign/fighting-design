# Swap 切换

`Swap` 是一个切换组件

## 基本使用

`Swap` 的基本使用，需要使用 `v-model` 绑定一个值

<f-swap v-model="value1" />
<f-swap v-model="value2" />

::: details 显示代码

```html
<template>
  <f-swap v-model="value1" />
  <f-swap v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `swap`

  <f-swap v-model="value3" size="large" />
  <f-swap v-model="value3" size="middle" />
  <f-swap v-model="value3" size="small" />

::: details 显示代码

```html
<template>
  <f-swap v-model="value3" size="large" />
  <f-swap v-model="value3" size="middle" />
  <f-swap v-model="value3" size="small" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value3 = ref(false)
</script>
```

:::

## 不同类型

`type` 属性可以配置不同类型的 `swap`
<f-swap v-model="value4" size="middle" type="sound" />
<f-swap v-model="value5" size="middle" type="theme"/>
<f-swap v-model="value6" size="middle" type="flip" />
<f-swap v-model="value7" size="middle" type="favorites" />

::: details 显示代码

```html
<template>
  <f-swap v-model="value4" size="middle" type="sound" />
  <f-swap v-model="value5" size="middle" type="theme" />
  <f-swap v-model="value6" size="middle" type="flip" />
  <f-swap v-model="value7" size="middle" type="favorites" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
</script>
```

:::

## 图标转换

`type` 属性可以配置不同类型的 `swap`
<f-swap v-model="value9" size="middle" type="rotate" />
::: details 显示代码

```html
<template>
  <f-swap v-model="value9" size="middle" type="rotate" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value9 = ref(true)
</script>
```

:::

## Attributes

| 参数      | 说明     | 类型   | 可选值                                      | 默认值 |
| --------- | -------- | ------ | ------------------------------------------- | ------ |
| `v-model` | 绑定值   | string | ——                                          | false  |
| `size`    | 组件尺寸 | string | `large` `middle` `small`                    | middle |
| `type`    | 类型     | string | `sound` `theme` `rotate` `flip` `favorites` | sound  |

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
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
  const value3 = ref(false)
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
  const value8 = ref(true)
  const value9 = ref(true)
</script>

<style scoped>
.f-swap {
  margin: 5px;
}
</style>
