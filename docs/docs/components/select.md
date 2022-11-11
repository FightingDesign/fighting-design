# Select 选择器

到了需要选择的时间了

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/select)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/select.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

使用 `v-model` 绑定一个值，`f-option` 组件定义每一个选项内容

::: demo

<template #source>
<f-select v-model="value1" placeholder="请选择……">
<f-option :value="1">香蕉</f-option>
<f-option :value="2">苹果</f-option>
<f-option :value="3">哈密瓜</f-option>
<f-option :value="4">樱桃</f-option>
</f-select>
</template>

```html
<template>
  <f-select v-model="value1" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
```

:::

## Select Attributes

| 参数                   | 说明           | 类型            | 可选值 | 默认值 |
| ---------------------- | -------------- | --------------- | ------ | ------ |
| `v-model / modelValue` | 绑定值         | string          | ——     | ——     |
| `width`                | 自定义宽度     | string / number | ——     | ——     |
| `name`                 | 原生 name 属性 | string          | ——     | ——     |
| `placeholder`          | 占位符         | string          | ——     | ——     |
| `clear`                | 是否可清除     | boolean         | ——     | false  |
| `disabled`             | 是否禁用       | boolean         | ——     | false  |

## Select Slots

| 名称      | 说明               |
| --------- | ------------------ |
| `default` | 默认插入的选项内容 |

## Option Attributes

| 参数       | 说明                                    | 类型            | 可选值 | 默认值 |
| ---------- | --------------------------------------- | --------------- | ------ | ------ |
| `value`    | 选项的值                                | string / number | ——     | null   |
| `label`    | 选项的标签，若不设置则默认与 value 相同 | string / number | ——     | null   |
| `disabled` | 是否禁用                                | boolean         | ——     | false  |

## Option Slots

| 名称      | 说明               |
| --------- | ------------------ |
| `default` | 默认插入的标签内容 |

## Interface

组件导出以下类型定义：

```ts
import type {} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
