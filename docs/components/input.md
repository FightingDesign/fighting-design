# Input 输入框

输入框

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input.md)

## 基本使用

需要使用 `v-model` 绑定一个值

::: demo

<template #source>
<f-input v-model="value1" type="text" placeholder="请输入...." />
</template>

```html
<template>
  <f-input v-model="value1" type="text" placeholder="请输入...." />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的文本框

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-input v-model="value2" type="text" size="large" />
  <f-input v-model="value2" type="text" size="middle" />
  <f-input v-model="value2" type="text" size="small" />
  <f-input v-model="value2" type="text" size="mini" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('不同尺寸的')
</script>
```

:::

## 搜索框

`search` 可配置可搜索的输入框

::: demo

<template #source>
<f-input v-model="value3" type="text" search placeholder="请输入...." />
</template>

```html
<template>
  <f-input v-model="value3" type="text" search placeholder="请输入...." />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref('')
</script>
```

:::

## 不同类型

`type` 可配置不同类型的输入框

::: demo

<template #source>
<demo2-vue />
</template>

```html
<template>
  <f-input v-model="value4" type="text" placeholder="请输入...." />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref('')
</script>
```

:::

## 展示密码

`show-password` 可展示密码内容

::: demo

<template #source>
<f-input v-model="value5" type="password" show-password />
</template>

```html
<template>
  <f-input v-model="value5" type="password" show-password />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('123456')
</script>
```

:::

## 前缀 icon

`icon` 可配置前缀 `icon`

::: demo

<template #source>
<f-input v-model="value6" type="text" :icon="FIconCloud" />
</template>

```html
<template>
  <f-input v-model="value6" type="text" :icon="FIconCloud" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconCloud } from '@fighting-design/fighting-icon'

  const value6 = ref('')
</script>
```

:::

## 可清空

`clear` 属性可配置可清空的文本框

::: demo

<template #source>
<f-input v-model="value7" type="text" clear />
</template>

```html
<template>
  <f-input v-model="value7" type="text" clear />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value7 = ref('可清空的')
</script>
```

:::

## 只读或禁用

`readonly` 和 `disabled` 属性可配置只读或禁用的文本框

::: demo

<template #source>
<demo3-vue />
</template>

```html
<template>
  <f-input v-model="value8" type="text" readonly />
  <f-input v-model="value8" type="text" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value8 = ref('点我试试吧')
</script>
```

:::

## Attributes

| 参数                | 说明                       | 类型                                                               | 可选值                          | 默认值  |
| ------------------- | -------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------- |
| `v-model`           | 绑定值                     | string                                                             | ——                              | ——      |
| `type`              | 类型                       | <a href="#inputtype">InputType</a>                                 | `text` `password` `number`      | text    |
| `size`              | 尺寸                       | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle  |
| `disabled`          | 是否禁用                   | boolean                                                            | ——                              | false   |
| `max`               | 最大值                     | number                                                             | ——                              | ——      |
| `min`               | 最小值                     | number                                                             | ——                              | ——      |
| `max-length`        | 最大输入长度上限           | number                                                             | ——                              | ——      |
| `width`             | 自定义宽度                 | string / number                                                    | ——                              | ——      |
| `height`            | 自定义高度                 | string / number                                                    | ——                              | ——      |
| `autofocus`         | 是否自动获取焦点           | boolean                                                            | ——                              | false   |
| `name`              | 原生 name 属性             | string                                                             | ——                              | f-input |
| `placeholder`       | 占位符                     | string                                                             | ——                              | ——      |
| `placeholder-color` | 自定义占位符颜色           | string                                                             | ——                              | ——      |
| `text-color`        | 自定义文字颜色             | string                                                             | ——                              | ——      |
| `font-size`         | 自定义字体大小             | string / number                                                    | ——                              | ——      |
| `autocomplete`      | 是否开启自动填充特性提示   | string                                                             | ——                              | off     |
| `clear`             | 是否可清空                 | boolean                                                            | ——                              | false   |
| `search`            | 是否为搜索框               | boolean                                                            | ——                              | false   |
| `readonly`          | 是否只读                   | boolean                                                            | ——                              | false   |
| `show-password`     | 是否展示显示密码图标       | boolean                                                            | ——                              | false   |
| `enter-search`      | 是否按下回车触发搜索       | boolean                                                            | ——                              | false   |
| `icon`              | 自定义前缀 icon            | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                              | ——      |
| `on-blur`           | 失去焦点触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-focus`          | 获取焦点触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-search`         | 点击搜索触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-change`         | 绑定值发生变化时触发的回调 | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-input`          | 原生 input 事件回调        | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-enter`          | 按下回车触发的回调         | <a href="#inputenter">InputEnter</a>                               | ——                              | ——      |

## Slots

| 插槽名称    | 说明说明       |
| ----------- | -------------- |
| `searchBtn` | 自定义搜索按钮 |
| `before`    | 前缀内容       |
| `after`     | 后缀内容       |

## Interface

组件导出以下类型定义：

```ts
import type { InputInstance, InputProps, InputType, InputEnter } from 'fighting-design'
```

### InputType

```ts
type InputType = 'text' | 'password' | 'number'
```

### InputEnter

```ts
type InputEnter = (value: string, evt: KeyboardEvent) => void
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                          | 描述               |
| ----------------------------- | ------------------ |
| `--input-background`          | 默认背景色         |
| `--input-active-background`   | 选中状态背景色     |
| `--input-text-color`          | 文字颜色           |
| `--input-active-border-color` | 选中状态边框背景色 |
| `--input-height`              | 高度               |
| `--input-width`               | 宽度               |
| `--input-font-size`           | 文字大小           |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'
  import demo1Vue from './demos/input/demo1.vue'
  import demo2Vue from './demos/input/demo2.vue'
  import demo3Vue from './demos/input/demo3.vue'
  import { FIconCloud } from '@fighting-design/fighting-icon'

  const value1 = ref('')
  const value3 = ref('')
  const value5 = ref('123456')
  const value6 = ref('')
  const value7 = ref('可清空的')
</script>
