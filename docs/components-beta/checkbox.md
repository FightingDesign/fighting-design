# Checkbox 复选框

你可以有多个选择

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/checkbox)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/checkbox.md)

## 基础使用

绑定单个复选框，配合 `v-model` 绑定一个 `boolean` 值

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const option = ref(true)
</script>

<template>
  <f-checkbox v-model="option" label="酸辣土豆丝" />
</template>
```

:::

## 复选组

多个选项可使用 `f-checkbox-group` 复选框组

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const option = ref(['汉堡'])
</script>

<template>
  <f-checkbox-group v-model="option">
    <f-checkbox label="鸡肉卷" />
    <f-checkbox label="鸡排" />
    <f-checkbox label="汉堡" />
  </f-checkbox-group>
</template>
```

:::

## 全选及半选

::: warning
功能暂不稳定，谨慎使用！
:::

给复选框添加 `indeterminate` 属性使其显示半选时的状态，且此属性仅控制样式

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const checkAll = ref(false)
  const indeterminate = ref(false)
  const checkedOptions = ref<string[]>([])
  const optionList = ref(['红buff', '蓝buff', '大龙', '小龙'])

  const onCheckboxChange = (e: boolean): void => {
    checkedOptions.value = e ? optionList.value : []
    indeterminate.value = false
  }

  const onGroupChange = (val: string[]): void => {
    const halfStatus = !!(val.length && val.length < optionList.value.length)
    if (val.length === optionList.value.length) {
      checkAll.value = true
    }
    indeterminate.value = halfStatus
  }
</script>

<template>
  <div>
    <f-checkbox v-model="checkAll" label="全都要" :indeterminate="indeterminate" :change="onCheckboxChange" />
  </div>

  <f-checkbox-group v-model="checkedOptions" :change="onGroupChange">
    <f-checkbox v-for="(item, index) in optionList" :key="index" :label="item" />
  </f-checkbox-group>
</template>
```

:::

## 禁用选项

直接添加`disabled` 属性即可，当在 `f-checkbox-group` 组件上使用 `disabled` 属性时，会将其内部组件全部禁用掉

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const option = ref([])
</script>

<template>
  <f-checkbox label="选项一" disabled />

  <br />

  <f-checkbox-group v-model="option" disabled>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <br />

  <f-checkbox-group v-model="option">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" disabled />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
```

:::

## 带边框

`border` 属性可设置边框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const option = ref([])
</script>

<template>
  <f-checkbox-group v-model="option" border size="large">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <br />
  <br />

  <f-checkbox-group v-model="option" border>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <br />
  <br />

  <f-checkbox-group v-model="option" border size="small">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
```

:::

## Checkbox Attributes

| 参数                   | 说明                   | 类型                                                 | 可选值 | 默认值 |
| ---------------------- | ---------------------- | ---------------------------------------------------- | ------ | ------ |
| `modelValue / v-model` | 绑定值                 | <a href="#checkboxmodelvalue">CheckboxModelValue</a> | ——     | ——     |
| `disabled`             | 是否禁用               | boolean                                              | ——     | false  |
| `label`                | 单选框对应的值         | <a href="#checkboxlabel">CheckboxLabel</a>           | ——     | ——     |
| `indeterminate`        | 是否为半选状态样式     | boolean                                              | ——     | false  |
| `on-change`            | 绑定值变化时触发的回调 | <a href="#checkboxchange">CheckboxChange</a>         | ——     | ——     |

## CheckboxGroup Attributes

| 参数                   | 说明                   | 类型                                                               | 可选值                          | 默认值 |
| ---------------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `modelValue / v-model` | 绑定值                 | string[]                                                           | ——                              | ——     |
| `disabled`             | 是否禁用               | boolean                                                            | ——                              | false  |
| `border`               | 是否显示边框           | boolean                                                            | ——                              | false  |
| `size`                 | 尺寸                   | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |
| `vertical`             | 是否纵向排列           | boolean                                                            | ——                              | false  |
| `column-gap`           | 横向排列的间距         | string / number                                                    | ——                              | ——     |
| `row-gap`              | 纵向排列的间距         | string / number                                                    | ——                              | ——     |
| `on-change`            | 绑定值变化时触发的回调 | <a href="#checkboxgroupchange">CheckboxGroupChange</a>             | ——                              | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  CheckboxInstance,
  CheckboxProps,
  CheckboxModelValue,
  CheckboxLabel,
  CheckboxChange,
  CheckboxGroupInstance,
  CheckboxGroupProps,
  CheckboxGroupChange
} from 'fighting-design'
```

### CheckboxModelValue

```ts
type CheckboxModelValue = boolean | 'true' | 'false'
```

### CheckboxLabel

```ts
type CheckboxLabel = string | number | boolean
```

### CheckboxChange

```ts
type CheckboxChange = (val: CheckboxLabelType) => void
```

### CheckboxGroupChange

```ts
type CheckboxGroupChange = (val: string[]) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/laine001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40457081?v=4" />
</a>
