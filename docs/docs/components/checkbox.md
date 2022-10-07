# 复选框

你可以有多个选择

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/radio)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/radio.md)

## 基础使用

绑定单个复选框，配合`v-model`绑定一个`boolean`值

<f-checkbox v-model="selected1" label="酸辣土豆丝"></f-checkbox>

::: details 显示代码

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const selected1 = ref(false)
</script>
<template>
  <f-checkbox v-model="selected1" label="酸辣土豆丝"></f-checkbox>
</template>
```
:::

## 复选组

多个选项可使用`f-checkbox-group`复选框组

<f-checkbox-group v-model="selection">
  <f-checkbox label="鸡肉卷"></f-checkbox>
  <f-checkbox label="鸡排"></f-checkbox>
  <f-checkbox label="汉堡"></f-checkbox>
</f-checkbox-group>
<span>{{ selection }} </span>

::: details 显示代码

```html
<script lang="ts" setup>
  import { ref } from 'vue'
  const selection = ref(['汉堡'])
</script>
<template>
  <f-checkbox-group v-model="selection">
    <f-checkbox label="鸡肉卷"></f-checkbox>
    <f-checkbox label="鸡排"></f-checkbox>
    <f-checkbox label="汉堡"></f-checkbox>
  </f-checkbox-group>
  <span>{{ selection }} </span>
</template>
```
:::

## 禁用选项

直接添加`disabled`属性即可，当在`f-checkbox-group`组件上使用`disabled`属性时，会将其内部组件全部禁用掉

<f-checkbox label="选项一" disabled></f-checkbox>
<f-checkbox-group v-model="selection2" disabled>
  <f-checkbox label="选项一"></f-checkbox>
  <f-checkbox label="选项二"></f-checkbox>
  <f-checkbox label="选项三"></f-checkbox>
</f-checkbox-group>

<f-checkbox-group v-model="selection2">
  <f-checkbox label="选项一"></f-checkbox>
  <f-checkbox label="选项二" disabled></f-checkbox>
  <f-checkbox label="选项三"></f-checkbox>
</f-checkbox-group>

::: details 展开代码
```html
<template>
  <f-checkbox label="选项一" disabled></f-checkbox>
  <f-checkbox-group v-model="selection2" disabled>
    <f-checkbox label="选项一"></f-checkbox>
    <f-checkbox label="选项二"></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>

  <f-checkbox-group v-model="selection2">
    <f-checkbox label="选项一"></f-checkbox>
    <f-checkbox label="选项二" disabled></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>
</template>
```
:::


## 带边框

直接添加`border`属性可设置边框，只生效于`group`组件，
`FightingDesign`还提供了`size`选项，默认为`middle`

<f-checkbox-group v-model="selection3" border size="large">
  <f-checkbox label="选项一"></f-checkbox>
  <f-checkbox label="选项二"></f-checkbox>
  <f-checkbox label="选项三"></f-checkbox>
</f-checkbox-group>

<f-checkbox-group v-model="selection3" border>
  <f-checkbox label="选项一"></f-checkbox>
  <f-checkbox label="选项二"></f-checkbox>
  <f-checkbox label="选项三"></f-checkbox>
</f-checkbox-group>

<f-checkbox-group v-model="selection3" border size="small">
  <f-checkbox label="选项一"></f-checkbox>
  <f-checkbox label="选项二"></f-checkbox>
  <f-checkbox label="选项三"></f-checkbox>
</f-checkbox-group>

:::details 显示代码
```html
<template>
  <f-checkbox-group v-model="selection3" border size="large">
    <f-checkbox label="选项一"></f-checkbox>
    <f-checkbox label="选项二"></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>

  <f-checkbox-group v-model="selection3" border>
    <f-checkbox label="选项一"></f-checkbox>
    <f-checkbox label="选项二"></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>

  <f-checkbox-group v-model="selection3" border size="small">
    <f-checkbox label="选项一"></f-checkbox>
    <f-checkbox label="选项二"></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>
</template>
```
:::

## CheckboxGroup Attributes

| 参数                   | 说明           | 类型                      | 可选值                          | 默认值 |
| ---------------------- | -------------- | ------------------------- | ------------------------------- | ------ |
| `modelValue / v-model` | 绑定值         | array[]<`string/number/boolean`> | ——                              | ——     |
| `disabled`             | 是否禁用       | boolean                   | ——                              | false  |
| `border`               | 是否显示边框   | boolean                   | ——                              | false  |
| `size`                 | 尺寸           | string                    | `large/middle/small` | middle |

## Checkbox Attributes

| 参数                   | 说明           | 类型                      | 可选值 | 默认值  |
| ---------------------- | -------------- | ------------------------- | ------ | ------- |
| `modelValue / v-model` | 绑定值         |  boolean                   | ——     | ——      |
| `disabled`             | 是否禁用       | boolean                   | ——     | false   |
| `label`                | 单选框对应的值 | string / number / boolean | ——     | ——      |

## CheckboxGroup Events
| 事件名称 | 说明             |
| -------- | ---------------- |
| `change` | 绑定值变化时触发 |

## Checkbox Events

| 事件名称 | 说明             |
| -------- | ---------------- |
| `change` | 绑定值变化时触发 |

## Interface
组件导出以下类型定义：
```ts
import type {
  RadioInstance,
  RadioPropsType,
  RadioLabelType,
  RadioGroupInstance,
  RadioGroundPropsType,
  RadioGroupSizeType
} from 'fighting-design'
```

## Contributors
<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/laine001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40457081?v=4" />
</a>

<script lang="ts" setup>
import { ref } from 'vue'
const selected1 = ref(false)
const selection = ref([])
const selection2 = ref([])
const selection3 = ref([])
</script>
