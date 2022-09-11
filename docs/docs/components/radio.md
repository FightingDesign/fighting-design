# Radio 单选框

你只有一个选择

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/radio)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/radio.md)

## 基本使用

需要使用 `v-model` 绑定一个值

<f-radio-group v-model="radio1">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio1">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
</script>
```

:::

## 带有边框

`border` 属性可以配置带有边框的效果

<f-radio-group v-model="radio2" border>
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio2" border>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio2 = ref('1')
</script>
```

:::

## 展示小圆圈

在边框单选中，默认隐藏小圆圈，你也可以通过 `circle` 来设置是否展示小圆圈，但是对于非边框的单选不会工作

<f-radio-group v-model="radio3" border>
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

<br />
<br />

<f-radio-group v-model="radio3" border circle>
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio3" border>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio3" border circle>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio3 = ref('1')
</script>
```

:::

## 不同尺寸

`size` 属性可以配置不同的尺寸

<f-radio-group v-model="radio4" border size="large">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

<br />

<f-radio-group v-model="radio4" border size="middle">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

<br />

<f-radio-group v-model="radio4" border size="small">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

<br />

<f-radio-group v-model="radio4" border size="mini">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio4" border size="large">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="middle">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="small">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="mini">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio4 = ref('1')
</script>
```

:::

## 纵向排列

`vertical` 属性可以纵向排列

<f-radio-group v-model="radio5" vertical>
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio5" vertical>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio5 = ref('1')
</script>
```

:::

## 禁用状态

`disabled` 属性可以禁用指定选项，作用在 `f-radio-group` 组件上可以全部禁用，作用在 `f-radio` 上可以指定禁用某一项

<f-radio-group v-model="radio6" disabled>
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

<br />
<br />

<f-radio-group v-model="radio6">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2" disabled>备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

::: details 显示代码

```html
<template>
  <f-radio-group v-model="radio6" disabled>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio6">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2" disabled>备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script setup>
  import { ref } from 'vue'

  const radio6 = ref('1')
</script>
```

:::

## RadioGroup Attributes

| 参数                   | 说明           | 类型                      | 可选值                          | 默认值 |
| ---------------------- | -------------- | ------------------------- | ------------------------------- | ------ |
| `modelValue / v-model` | 绑定值         | string / number / boolean | ——                              | ——     |
| `disabled`             | 是否禁用       | boolean                   | ——                              | false  |
| `vertical`             | 是否禁用排列   | boolean                   | ——                              | false  |
| `column-gap`           | 横向排列的间距 | string / number           | ——                              | false  |
| `row-gap`              | 纵向排列的间距 | string / number           | ——                              | false  |
| `border`               | 是否显示边框   | boolean                   | ——                              | false  |
| `size`                 | 尺寸           | string                    | `large` `middle` `small` `mini` | middle |
| `circle`               | 是否现在小圆圈 | boolean                   | ——                              | false  |

## Radio Attributes

| 参数                   | 说明           | 类型                      | 可选值 | 默认值  |
| ---------------------- | -------------- | ------------------------- | ------ | ------- |
| `modelValue / v-model` | 绑定值         | string / number / boolean | ——     | ——      |
| `disabled`             | 是否禁用       | boolean                   | ——     | false   |
| `name`                 | 自定义 name    | string                    | ——     | f-radio |
| `label`                | 单选框对应的值 | string / number / boolean | ——     | ——      |

## RadioGroup Events

| 事件名称 | 说明             |
| -------- | ---------------- |
| `change` | 绑定值变化时触发 |

## Radio Events

| 事件名称 | 说明             |
| -------- | ---------------- |
| `change` | 绑定值变化时触发 |

## RadioGroup Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 插入 `f-radio` |

## Radio Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 单选框对应的值 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/tangtts" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/50451042?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
  const radio2 = ref('1')
  const radio3 = ref('1')
  const radio4 = ref('1')
  const radio5 = ref('1')
  const radio6 = ref('1')
</script>
