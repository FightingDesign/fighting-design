# Fighting Global 全局配置

可控制全局组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/fighting-global)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/fighting-global.md)

## 基本使用

`type` 属性可以配置内部组件的类型，组件本身的 `type` 权重高于 `fighting-global`

::: demo

<template #source>
<f-fighting-global type="primary">
<f-space>
<f-button>默认按钮</f-button>
<f-button>主要按钮</f-button>
<f-button>成功按钮</f-button>
<f-button>危险按钮</f-button>
<f-button>警告按钮</f-button>

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
</f-space>
</f-fighting-global>
</template>

```html
<f-fighting-global type="primary">
  <f-space>
    <f-button>默认按钮</f-button>
    <f-button>主要按钮</f-button>
    <f-button>成功按钮</f-button>
    <f-button>危险按钮</f-button>
    <f-button>警告按钮</f-button>

    <f-button simple type="default">默认按钮</f-button>
    <f-button simple type="primary">主要按钮</f-button>
    <f-button simple type="success">成功按钮</f-button>
    <f-button simple type="danger">危险按钮</f-button>
    <f-button simple type="warning">警告按钮</f-button>
  </f-space>
</f-fighting-global>
```

:::

## 不同尺寸

`size` 属性可配置内部组件的尺寸

::: demo

<template #source>
<f-fighting-global size="mini">
<f-space>
<f-button>默认按钮</f-button>
<f-button>主要按钮</f-button>
<f-button>成功按钮</f-button>
<f-button>危险按钮</f-button>
<f-button>警告按钮</f-button>

<f-switch v-model="value3" />
</f-space>
</f-fighting-global>
</template>

```html
<template>
  <f-fighting-global size="mini">
    <f-space>
      <f-button>默认按钮</f-button>
      <f-button>主要按钮</f-button>
      <f-button>成功按钮</f-button>
      <f-button>危险按钮</f-button>
      <f-button>警告按钮</f-button>

      <f-switch v-model="value3" />
    </f-space>
  </f-fighting-global>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(true)
</script>
```

:::

## 配置语言

有些组件自带文案内容，`lang` 属性可以单独配置不同的语音

::: demo

<template #source>
<f-fighting-global lang="zh-CN">
<f-empty />
</f-fighting-global>

<f-fighting-global lang="en-US">
<f-empty />
</f-fighting-global>
</template>

```html
<f-fighting-global lang="zh-CN">
  <f-empty />
</f-fighting-global>

<f-fighting-global lang="en-US">
  <f-empty />
</f-fighting-global>
```

:::

## Attributes

| 参数   | 说明         | 类型                                                               | 可选值                                                  | 默认值 |
| ------ | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------- | ------ |
| `type` | 子组件的类型 | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` <br /> `success` `danger` `warning` | ——     |
| `size` | 子组件的尺寸 | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini`                         | ——     |
| `lang` | 子组件的语言 | <a href="/components/interface.html#fightinglang">FightingLang</a> | `en-US` `zh-CN`                                         | zh-CN  |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Interface

组件导出以下类型定义：

```ts
import type { FightingGlobalProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(true)
</script>
