# Select 选择器

到了需要选择的时间了

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/select)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/select.md)

## 基本使用

使用 `v-model` 绑定一个值，`f-option` 组件定义每一个选项内容

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-select v-model="value" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
```

:::

## 优先级

`label` 的展示方式分为两种：`label` 属性和插槽，都可以实现，但有些时候这些属性可能都存在或者都不存在，所以 label 的优先级为：`slot > label > value`，也就是说，如果 slot 和 label 都不存在的时候，默认展示 value

`value` 也有着上面的情况，优先级关系为 `value > label > slot`

::: demo

<template #source>
<demo2-vue />
</template>

```html
<template>
  <f-select v-model="value" placeholder="请选择……">
    <f-option label="香蕉" :value="1"></f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3"></f-option>
    <f-option label="樱桃">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
```

:::

## 禁用状态

`disabled` 属性可以禁用整个选择器，也可以禁用指定选项

::: demo

<template #source>
<demo3-vue />
</template>

```html
<template>
  <f-select v-model="value" placeholder="请选择……" disabled>
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <f-select v-model="value" placeholder="请选择……" style="margin-left: 30px">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2" disabled>苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
```

:::

## Select Attributes

| 参数                 | 说明                       | 类型                                                               | 可选值                          | 默认值 |
| -------------------- | -------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `v-model:modelValue` | 绑定值                     | <a href="#selectmodelvalue">SelectModelValue</a>                   | ——                              | ——     |
| `width`              | 自定义宽度                 | string / number                                                    | ——                              | 190    |
| `name`               | 原生 name 属性             | string                                                             | ——                              | ——     |
| `placeholder`        | 占位符                     | string                                                             | ——                              | ——     |
| `clear`              | 是否可清除                 | boolean                                                            | ——                              | false  |
| `disabled`           | 是否禁用                   | boolean                                                            | ——                              | false  |
| `filter`             | 是否可过滤                 | boolean                                                            | ——                              | false  |
| `size`               | 尺寸                       | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |
| `on-change`          | 绑定值发生改变时触发的回调 | <a href="#selectchange">SelectChange</a>                           | ——                              | ——     |

## Select Slots

| 名称      | 说明               |
| --------- | ------------------ |
| `default` | 默认插入的选项内容 |

## Option Attributes

| 参数       | 说明                                    | 类型            | 可选值 | 默认值 |
| ---------- | --------------------------------------- | --------------- | ------ | ------ |
| `value`    | 选项的值                                | string / number | ——     | ——     |
| `label`    | 选项的标签，若不设置则默认与 value 相同 | string / number | ——     | ——     |
| `disabled` | 是否禁用                                | boolean         | ——     | false  |

## Option Slots

| 名称      | 说明               |
| --------- | ------------------ |
| `default` | 默认插入的标签内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  SelectInstance,
  SelectProps,
  SelectModelValue,
  SelectChange,
  OptionInstance,
  OptionProps
} from 'fighting-design'
```

### SelectModelValue

```ts
type SelectModelValue = string | number | boolean
```

### SelectChange

```ts
type SelectChange = (
  newValue: SelectModelValue,
  newLabel: SelectModelValue,
  evt: MouseEvent
) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'
  import demo1Vue from './demos/select/demo1.vue'
  import demo2Vue from './demos/select/demo2.vue'
  import demo3Vue from './demos/select/demo3.vue'
</script>
