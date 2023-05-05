# Rate 评分

用于评分或打星

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/rate)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/rate.md)

## 基本使用

通过 `v-model` 绑定一个值

::: demo

<template #source>
<f-rate v-model="value1" />
</template>

```html
<template>
  <f-rate v-model="value1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(1)
</script>
```

:::

## 自定义颜色

`effect-color` 属性可以配置星星选中时的颜色，`invalid-color`属性可以配置星星未选中时的颜色

::: demo

<template #source>

<f-rate v-model="value2" effect-color="red" invalid-color="#eee" />
</template>

```html
<template>
  <f-rate v-model="value2" effect-color="red" invalid-color="#eee" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref(2)
</script>
```

:::

## 辅助文字

`text-show` 和 `text-arr` 属性可以配置星星选中时提示的文字

::: demo

<template #source>
<f-rate v-model="value3" text-show :text-arr="['1星', '2星', '3星', '4星', '5星']" />
</template>

```html
<template>
  <f-rate v-model="value3" text-show :text-arr="['1星', '2星', '3星', '4星', '5星']" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(4)
</script>
```

:::

## 自定义 icon

`icon` 属性可以自定义 `icon`

::: demo

<template #source>
<f-rate v-model="value4" :icon="FIconKey" />
</template>

```html
<template>
  <f-rate v-model="value4" :icon="FIconKey" />
</template>

<script lang="ts" setup>
  import { FIconKey } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value4 = ref(4)
</script>
```

:::

## Attributes

| 参数             | 说明                       | 类型                                                               | 可选值 | 默认值                                   |
| ---------------- | -------------------------- | ------------------------------------------------------------------ | ------ | ---------------------------------------- |
| `v-model`        | 绑定值                     | number                                                             | ——     | ——                                       |
| `max`            | 最大分值，展示的星星数量   | number                                                             | ——     | 5                                        |
| `effect-color`   | 选中颜色                   | string                                                             | ——     | #fcc202                                  |
| `invalid-color ` | 未选中的颜色               | string                                                             | ——     | #eef                                     |
| `readonly`       | 是否只读                   | boolean                                                            | ——     | false                                    |
| `icon`           | 自定义 icon                | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——                                       |
| `size`           | 图标尺寸                   | string / number                                                    |        | 25                                       |
| `text-show`      | 是否展示辅助文字           | boolean                                                            | ——     | false                                    |
| `text-color`     | 辅助文字颜色               | string                                                             | ——     | ——                                       |
| `text-arr`       | 辅助文字数组               | array                                                              | ——     | ['极差', '失望', '一般', '不错', '很棒'] |
| `text-size`      | 辅助文字尺寸               | string / number                                                    | ——     | ——                                       |
| `on-change`      | 当分数发生改变时触发的回调 | <a href="#ratechange">RateChange</a>                               | ——     | ——                                       |

## Interface

组件导出以下类型定义：

```ts
import type { RateInstance, RateProps, RateChange } from 'fighting-design'
```

### RateChange

```ts
type RateChange = (value: number) => number
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/caicailv" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/46363316?v=4" />
</a>

<script setup lang="ts">
  import { FIconKey } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value1 = ref(2)
  const value2 = ref(3)
  const value3 = ref(4)
  const value4 = ref(4)
</script>
