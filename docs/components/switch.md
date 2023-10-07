# Switch 开关

这不是 switch 游戏机，而是个开关

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/switch)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/switch.md)

## 基本使用

`switch` 的基本使用，需要使用 `v-model` 绑定一个值

::: demo

<template #source>
<f-switch v-model="value1" />
<br />
<f-switch v-model="value2" />
</template>

```html
<template>
  <f-switch v-model="value1" />
  <f-switch v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `switch`

::: demo

<template #source>
<f-switch v-model="value3" size="large" />
<f-switch v-model="value3" size="middle" />
<f-switch v-model="value3" size="small" />
<f-switch v-model="value3" size="mini" />
</template>

```html
<template>
  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />
  <f-switch v-model="value3" size="mini" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(true)
</script>
```

:::

## 禁用状态

`disabled` 属性可以禁用 `switch`

::: demo

<template #source>
<f-switch v-model="value4" disabled />
<f-switch v-model="value5" disabled />
</template>

```html
<template>
  <f-switch v-model="value4" disabled />
  <f-switch v-model="value5" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref(true)
  const value5 = ref(false)
</script>
```

:::

## 加载状态

`loading` 属性可以加载 `switch`

::: demo

<template #source>
<f-switch v-model="value4" loading />
<f-switch v-model="value5" loading />
</template>

```html
<template>
  <f-switch v-model="value4" loading />
  <f-switch v-model="value5" loading />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref(true)
  const value5 = ref(false)
</script>
```

:::

## 方形的

`square` 属性可以将 `switch` 设置为方形样式

::: demo

<template #source>
<f-switch v-model="value6" square />
</template>

```html
<template>
  <f-switch v-model="value6" square />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value6 = ref(true)
</script>
```

:::

## 自定义颜色

`close-color` 和 `active-color` 可以自定义开关的颜色

::: demo

<template #source>
<f-switch v-model="value7" close-color="red" active-color="skyblue" />
</template>

```html
<template>
  <f-switch v-model="value7" close-color="red" active-color="skyblue" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value7 = ref(true)
</script>
```

:::

## 描述文字

`close-text` 和 `active-text` 可以自定义开关左右的描述文字

::: demo

<template #source>
<f-switch v-model="value8" close-text="关闭" active-text="开启" />
</template>

```html
<template>
  <f-switch v-model="value8" close-text="关闭" active-text="开启" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value8 = ref(true)
</script>
```

:::

## 带有 icon

`icon` 可以让 `switch` 上带有 `icon`

::: demo

<template #source>
<f-switch v-model="value9" :icon="FIconSnowflake" />
</template>

```html
<template>
  <f-switch v-model="value9" :icon="FIconSnowflake" />
</template>

<script lang="ts" setup>
  import { FIconSnowflake } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value9 = ref(true)
</script>
```

:::

## Attributes

| 参数                   | 说明                       | 类型                                                               | 可选值                          | 默认值 |
| ---------------------- | -------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `modelValue / v-model` | 绑定值                     | string                                                             | ——                              | false  |
| `size`                 | 组件尺寸                   | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |
| `disabled`             | 是否禁用                   | boolean                                                            | ——                              | false  |
| `loading`              | 是否为加载状态             | boolean                                                            | ——                              | false  |
| `icon`                 | 自定义 icon                | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                              | ——     |
| `close-color`          | 自定义关闭状态背景色       | string                                                             | ——                              | ——     |
| `active-color`         | 自定义开启状态背景色       | string                                                             | ——                              | ——     |
| `active-text`          | 自定义右侧的文字描述       | string                                                             | ——                              | ——     |
| `close-text`           | 自定义左侧的文字描述       | string                                                             | ——                              | ——     |
| `square`               | 是否为方形开关             | boolean                                                            | ——                              | false  |
| `icon-size`            | 自定义 icon 大小           | string / number                                                    | ——                              | ——     |
| `on-change`            | 绑定值发生改变时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——                              | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { SwitchInstance, SwitchProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/pengyinghao" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/34115313?v=4" />
</a>

<a href="https://github.com/zhoufanglu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/24451091?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'
  import { FIconSnowflake } from '@fighting-design/fighting-icon'

  const value1 = ref(true)
  const value2 = ref(false)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(false)
  const value6 = ref(true)
  const value7 = ref(true)
  const value8 = ref(true)
  const value9 = ref(true)
</script>

<style scoped>
  .f-switch {
    margin: 5px;
  }
</style>
