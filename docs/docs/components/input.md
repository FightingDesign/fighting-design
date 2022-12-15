# Input 输入框

输入框

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input.md)

## 基本使用

需要使用 `v-model` 绑定一个值

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" placeholder="请输入...." />
</template>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的文本框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('不同尺寸的')
</script>

<template>
  <f-space vertical>
    <f-input v-model="value" type="text" size="large" />
    <f-input v-model="value" type="text" size="middle" />
    <f-input v-model="value" type="text" size="small" />
    <f-input v-model="value" type="text" size="mini" />
  </f-space>
</template>
```

:::

## 搜索框

`search` 可配置可搜索的输入框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" search placeholder="请输入...." />
</template>
```

:::

## 不同类型

`type` 可配置不同类型的输入框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" placeholder="请输入...." />
</template>
```

:::

## 展示密码

`show-password` 可展示密码内容

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('123456')
</script>

<template>
  <f-input v-model="value" type="password" show-password />
</template>
```

:::

## 前缀 icon

`icon` 可配置前缀 `icon`

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconCloud } from '@fighting-design/fighting-icon'

  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" :icon="FIconCloud" />
</template>
```

:::

## 可清空

`clear` 属性可配置可清空的文本框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('可清空的')
</script>

<template>
  <f-input v-model="value" type="text" clear />
</template>
```

:::

## 只读或禁用

`readonly` 和 `disabled` 属性可配置只读或禁用的文本框

::: demo

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('点我试试吧')
</script>

<template>
  <f-space vertical>
    <f-input v-model="value" type="text" readonly />
    <f-input v-model="value" type="text" disabled />
  </f-space>
</template>
```

:::

## Attributes

| 参数            | 说明                       | 类型                                                               | 可选值                          | 默认值  |
| --------------- | -------------------------- | ------------------------------------------------------------------ | ------------------------------- | ------- |
| `v-model`       | 绑定值                     | string                                                             | ——                              | ——      |
| `type`          | 类型                       | <a href="#inputtype">InputType</a>                                 | `text` `password` `number`      | text    |
| `size`          | 尺寸                       | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle  |
| `disabled`      | 是否禁用                   | boolean                                                            | ——                              | false   |
| `max`           | 最大值                     | number                                                             | ——                              | ——      |
| `min`           | 最小值                     | number                                                             | ——                              | ——      |
| `max-length`    | 最大输入长度上限           | number                                                             | ——                              | ——      |
| `autofocus`     | 是否自动获取焦点           | boolean                                                            | ——                              | false   |
| `name`          | 原生 name 属性             | string                                                             | ——                              | f-input |
| `placeholder`   | 占位符                     | string                                                             | ——                              | ——      |
| `clear`         | 是否可清空                 | boolean                                                            | ——                              | false   |
| `search`        | 是否为搜索框               | boolean                                                            | ——                              | false   |
| `readonly`      | 是否只读                   | boolean                                                            | ——                              | false   |
| `show-password` | 是否展示显示密码图标       | boolean                                                            | ——                              | false   |
| `enter-search`  | 是否按下回车触发搜索       | boolean                                                            | ——                              | false   |
| `icon`          | 自定义前缀 icon            | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——                              | ——      |
| `on-search`     | 点击搜索触发的回调         | <a href="#inputsearch">InputSearch</a>                             | ——                              | ——      |
| `on-change`     | 绑定值发生变化时触发的回调 | <a href="#inputchange">InputChange</a>                             | ——                              | ——      |
| `on-blur`       | 失去焦点触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-focus`      | 获取焦点触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-enter`      | 按下回车触发的回调         | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |
| `on-input`      | 原生 input 事件回调        | <a href="/components/interface.html#handleevent">HandleEvent</a>   | ——                              | ——      |

## Slots

| 插槽名称    | 说明说明       |
| ----------- | -------------- |
| `searchBtn` | 自定义搜索按钮 |

## Interface

组件导出以下类型定义：

```ts
import type { InputInstance, InputProps, InputType, InputChange, InputSearch } from 'fighting-design'
```

### InputType

```ts
type InputType = 'text' | 'password' | 'number'
```

### InputChange

```ts
type InputChange = (value: string) => void
```

### InputSearch

```ts
type InputSearch = ({ evt: Event, value: string }) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
