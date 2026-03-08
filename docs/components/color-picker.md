# color-picker 颜色选择器

颜色选择器组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/color-picker)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/color-picker.md)

## 基本使用

`v-model` 可以绑定一个颜色值

::: demo

<template #source>
  <f-color-picker v-model="color" @active-change="handleActiveChange" @change="handleChange"></f-color-picker>
</template>



```html
<template>
  <f-color-picker v-model="color" @active-change="handleActiveChange" @change="handleChange"></f-color-picker>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const color = ref('#2d5af1')
  const handleActiveChange = (value: string) => {
    console.log('activeChange', value)
  }
  const handleChange = (value: string) => {
    console.log('change', value)
  }
</script>

```

:::

## 不同尺寸 

`size` 属性可以配置颜色选择器的大小

::: demo

<template #source>
  <f-color-picker v-model="color2" size="small" />
  <f-color-picker v-model="color3" size="default" />
  <f-color-picker v-model="color4" size="large" />
</template>

```html
<template>
  <f-color-picker v-model="color1" size="small" />
  <f-color-picker v-model="color2" size="default" />
  <f-color-picker v-model="color3" size="large" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const color1 = ref('#ff0000')
  const color2 = ref('#000dff')
  const color3 = ref('#00ff00')
</script>

```

:::

## 禁用效果

`disabled` 可以禁用颜色选择器

::: demo

<template #source>
<f-color-picker :disabled="true" />
</template>

```html

<template>
  <f-color-picker :disabled="true" />
</template>

```

:::

## 显示透明度

`showAlpha` 可以显示透明度

::: demo

<template #source>
<f-color-picker v-model="color5"  @active-change="handleActiveChange" @change="handleChange"  show-alpha />
</template>

```html

<template>
  <f-color-picker v-model="color" @active-change="handleActiveChange" @change="handleChange" show-alpha />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const color = ref('rgba(255, 0, 0, 0.5)')
    const handleActiveChange = (value: string) => {
    console.log(value)
  }
  const handleChange = (value: string) => {
    console.log(value)
  }
</script>

```
:::

## Attributes

| 参数        | 说明                                                                          | 类型            | 可选值 | 默认值 |
| ----------- | ----------------------------------------------------------------------------- | --------------- | ------ | ------ |
| `modelValue / v-model` | 绑定值                                                                          | string          | ——     | ——     |
| `showAlpha` | 是否显示透明度                                                                          | boolean         | `false` `true`  | false  |
| `disabled`  | 是否禁用                                                                      | boolean         | `false` `true`  | false  |
| `size`  | 尺寸                                                                      | string         | `small` `default` `large`  | `small`  |
| `on-active-change`  | 激活颜色改变时触发                                                                      | function         | ——  | ——  |
| `on-change`  | 颜色改变时触发                                                                      | function         | ——  | ——  |


## Interface

组件导出以下类型定义：

```ts
import type { ColorPickerInstance, ColorPickerProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/yzz2333" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/65339647?v=4" />
</a>

<style scoped>
.f-color-picker{
    margin-right: 30px;
}
</style>




<script lang="ts" setup>
  import { ref } from 'vue'
  const color = ref('#2d5af1')
  const handleActiveChange = (value: string) => {
    console.log('activeChange', value)
  }
  const handleChange = (value: string) => {
    console.log('change', value)
  }
  const color2 = ref('#ff0000')
  const color3 = ref('#000dff')
  const color4 = ref('#00ff00')
  const color5 = ref('rgba(255, 0, 0, 0.5)')
</script>