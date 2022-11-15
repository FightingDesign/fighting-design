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

## Attributes

| 参数          | 说明                       | 类型            | 可选值                                       | 默认值  |
| ------------- | -------------------------- | --------------- | -------------------------------------------- | ------- |
| `v-model`     | 绑定值                     | string          | ——                                           | ——      |
| `cols`        | 可视宽度                   | string / number |                                              | 50      |
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
</script>
