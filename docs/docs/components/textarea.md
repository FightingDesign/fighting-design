# Textarea 文本域

可多行输入的文本域

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/textarea)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/textarea.md)

## 基本使用

需要使用 `v-model` 绑定一个值

::: demo

<template #source>
<f-textarea v-model="value1" placeholder="请输入...." />
</template>

```html
<template>
  <f-textarea v-model="value1" placeholder="请输入...." />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
```

:::

## 可清空

`clear` 属性可配置可清空的文本框

::: demo

<template #source>
<f-textarea v-model="value2" clear />
</template>

```html
<template>
  <f-textarea v-model="value2" clear />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('可清空的')
</script>
```

:::

## 禁用状态

`disabled` 属性可禁用文本域

::: demo

<template #source>
<f-textarea v-model="value3" placeholder="请输入...." disabled />
</template>

```html
<template>
  <f-textarea v-model="value3" placeholder="请输入...." disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref('禁用的')
</script>
```

:::

## 只读状态

`readonly` 属性可配置只读文本域

::: demo

<template #source>
<f-textarea v-model="value4" placeholder="请输入...." readonly />
</template>

```html
<template>
  <f-textarea v-model="value4" placeholder="请输入...." readonly />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref('只读状态')
</script>
```

:::

## 不同拉伸方式

`resize` 属性可配置文本域不同的拉伸方式

::: demo

<template #source>
<f-textarea v-model="value5" placeholder="禁止拉伸" resize="none" />
<f-textarea v-model="value6" placeholder="随意拉伸" resize="both" />
<f-textarea v-model="value7" placeholder="水平拉伸" resize="horizontal" />
<f-textarea v-model="value8" placeholder="垂直拉伸" resize="vertical" />
</template>

```html
<template>
  <f-textarea v-model="value5" placeholder="禁止拉伸" resize="none" />
  <f-textarea v-model="value6" placeholder="随意拉伸" resize="both" />
  <f-textarea v-model="value7" placeholder="水平拉伸" resize="horizontal" />
  <f-textarea v-model="value8" placeholder="垂直拉伸" resize="vertical" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('none 禁止拉伸')
  const value6 = ref('both 随意拉伸')
  const value7 = ref('horizontal 水平拉伸')
  const value8 = ref('vertical 垂直拉伸')
</script>
```

:::

## Attributes

| 参数          | 说明                       | 类型            | 可选值                                       | 默认值  |
| ------------- | -------------------------- | --------------- | -------------------------------------------- | ------- |
| `v-model`     | 绑定值                     | string          | ——                                           | ——      |
| `rows`        | 元素的输入文本的行数       | string / number | ——                                           | 3       |
| `disabled`    | 是否禁用                   | boolean         | ——                                           | false   |
| `max-length`  | 最大输入长度上限           | number          | ——                                           | null    |
| `autofocus`   | 是否自动获取焦点           | boolean         | ——                                           | false   |
| `name`        | 原生 name 属性             | string          | ——                                           | f-input |
| `placeholder` | 占位符                     | string          | ——                                           | ——      |
| `readonly`    | 是否只读                   | boolean         | ——                                           | false   |
| `on-change`   | 绑定值发生变化时触发的回调 | Function        | ——                                           | null    |
| `on-blur`     | 失去焦点触发的回调         | Function        | ——                                           | null    |
| `on-focus`    | 获取焦点触发的回调         | Function        | ——                                           | null    |
| `resize`      | 拉伸方式                   | boolean         | `none` `both` <br /> `horizontal` `vertical` | none    |
| `clear`       | 是否可清空                 | boolean         | ——                                           | false   |

## Interface

组件导出以下类型定义：

```ts
import type {
  TextareaInstance,
  TextareaPropsType,
  TextareaChangeInterface,
  TextareaResizeType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref('可清空的')
  const value3 = ref('禁用的')
  const value4 = ref('只读状态')
  const value5 = ref('none 禁止拉伸')
  const value6 = ref('both 随意拉伸')
  const value7 = ref('horizontal 水平拉伸')
  const value8 = ref('vertical 垂直拉伸')
</script>
