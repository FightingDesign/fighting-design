# Switch 开关

`Switch` 是一个开关组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/switch)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/switch.md)

## 基本使用

`switch` 的基本使用，需要使用 `v-model` 绑定一个值

<f-switch v-model="value1" />
<br />
<f-switch v-model="value2" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value1" />
  <f-switch v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `switch`

  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value3 = ref(true)
</script>
```

:::

## 禁用状态

`disabled` 属性可以禁用 `switch`

<f-switch v-model="value4" disabled />
<f-switch v-model="value5" disabled />

::: details 显示代码

```html
<template>
  <f-switch v-model="value4" disabled />
  <f-switch v-model="value5" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value4 = ref(true)
  const value5 = ref(false)
</script>
```

:::

## 方形的

`square` 属性可以将 `switch` 设置为方形样式

<f-switch v-model="value6" square />

::: details 显示代码

```html
<template>
  <f-switch v-model="value6" square />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value6 = ref(true)
</script>
```

:::

## 自定义颜色

`close-color` 和 `open-color` 可以自定义开关的颜色

<f-switch v-model="value7" close-color="red" open-color="skyblue" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value7" close-color="red" open-color="skyblue" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value7 = ref(true)
</script>
```

:::

## 描述文字

`close-text` 和 `open-text` 可以自定义开关左右的描述文字

<f-switch v-model="value8" close-text="关闭" open-text="开启" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value8" close-text="关闭" open-text="开启" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value8 = ref(true)
</script>
```

:::

## 带有 icon

`icon` 可以让 `switch` 上带有 `icon`

<f-switch v-model="value9" icon="f-icon-editor" />

::: details 显示代码

```html
<template>
  <f-switch v-model="value9" icon="f-icon-editor" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value9 = ref(true)
</script>
```

:::

## Attributes

| 参数                   | 说明                 | 类型    | 可选值                   | 默认值 |
| ---------------------- | -------------------- | ------- | ------------------------ | ------ |
| `modelValue / v-model` | 绑定值               | string  | ——                       | false  |
| `size`                 | 组件尺寸             | string  | `large` `middle` `small` | middle |
| `disabled`             | 是否禁用             | boolean | ——                       | false  |
| `icon`                 | 自定义 icon          | string  | ——                       | ——     |
| `close-color`          | 自定义关闭状态背景色 | string  | ——                       | ——     |
| `open-color`           | 自定义开启状态背景色 | string  | ——                       | ——     |
| `open-text`            | 自定义右侧的文字描述 | string  | ——                       | ——     |
| `close-text`           | 自定义左侧的文字描述 | string  | ——                       | ——     |
| `square`               | 是否为方形开关       | boolean | ——                       | false  |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/pengyinghao" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/34115313?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(false)
  const value6 = ref(true)
  const value7 = ref(true)
  const value8 = ref(true)
  const value9 = ref(true)
</script>

<style scoped>
.f-switch {
  margin: 5px;
}
</style>
