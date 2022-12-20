# Switch 开关

这不是 switch 游戏机，而是个开关

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/switch)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/switch.md)

## 基本使用

`switch` 的基本使用，需要使用 `v-model` 绑定一个值

::: demo

```vue
<script lang="ts" setup>
  import { reactive } from 'vue'

  const value = reactive({
    value1: true,
    value2: false
  })
</script>

<template>
  <f-switch v-model="value.value1" />
  <f-switch v-model="value.value2" />
</template>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `switch`

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<template>
  <f-switch v-model="value" size="large" />
  <f-switch v-model="value" size="middle" />
  <f-switch v-model="value" size="small" />
  <f-switch v-model="value" size="mini" />
</template>
```

:::

## 禁用状态

`disabled` 属性可以禁用 `switch`

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)
  const value2 = ref(false)
</script>

<template>
  <f-switch v-model="value1" disabled />
  <f-switch v-model="value2" disabled />
</template>
```

:::

## 方形的

`square` 属性可以将 `switch` 设置为方形样式

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<template>
  <f-switch v-model="value" square />
</template>
```

:::

## 自定义颜色

`close-color` 和 `active-color` 可以自定义开关的颜色

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<template>
  <f-switch v-model="value" close-color="red" active-color="skyblue" />
</template>
```

:::

## 描述文字

`close-text` 和 `active-text` 可以自定义开关左右的描述文字

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<template>
  <f-switch v-model="value" close-text="关闭" active-text="开启" />
</template>
```

:::

## 带有 icon

`icon` 可以让 `switch` 上带有 `icon`

::: demo

```vue
<script lang="ts" setup>
  import { FIconSnowflake } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value = ref(true)
</script>

<template>
  <f-switch v-model="value" :icon="FIconSnowflake" />
</template>
```

:::

## Attributes

| 参数                   | 说明                       | 类型                                                               | 可选值                          | 默认值 |
| ---------------------- | -------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `modelValue / v-model` | 绑定值                     | string                                                             | ——                              | false  |
| `size`                 | 组件尺寸                   | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |
| `disabled`             | 是否禁用                   | boolean                                                            | ——                              | false  |
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
