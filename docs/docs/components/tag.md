# Tag 标签

`Tag` 用于标签展示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/tag)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tag.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

<f-tag type="default">默认</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>

::: details 显示代码

```html
<f-tag type="default">默认</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>
```

:::

## 简约的

`simple` 属性可以配置简约的提示，样式依然由 `type` 控制

<f-tag simple type="default">默认</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>

::: details 显示代码

```html
<f-tag simple type="default">默认</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>
```

:::

## 自定义颜色

`background` 和 `color` 可以自定义标签颜色，将覆盖原有的 `type`

<f-tag background="skyblue">天蓝色</f-tag>
<f-tag background="blue" color="#fff">深蓝色</f-tag>

::: details 显示代码

```html
<f-tag background="skyblue">天蓝色</f-tag>
<f-tag background="blue" color="#fff">深蓝色</f-tag>
```

:::

## 标签大小

`size` 自定义标签大小

<f-tag type="primary" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag type="primary" size="small">小标签</f-tag>
<f-tag type="primary" size="mini">超小标签</f-tag>

::: details 显示代码

```html
<f-tag type="primary" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag type="primary" size="small">小标签</f-tag>
<f-tag type="primary" size="mini">超小标签</f-tag>
```

:::

## 圆角属性

通过 `round` 来设置圆角的值。接受一个单位值，默认为无圆角。

<f-tag type="primary" size="small" round="6px">标签</f-tag>

::: details 显示代码

```html
<f-tag type="primary" size="small" round="6px">标签</f-tag>
```

:::

## 块级元素

通过 `block` 属性可以将标签设置为块级元素。

<f-tag type="primary" size="small">标签</f-tag>
<f-tag type="primary" size="small" block>标签</f-tag>

::: details 显示代码

```html
<f-tag type="primary" size="small">标签</f-tag>
<f-tag type="primary" size="small" block>标签</f-tag>
```

:::

## 带有 icon

通过 `leftIcon` 和 `rightIcon` 可以设置左右 icon 的值，注意：当同时设置 `rightIcon` 与 `closable` 时，关闭的 icon 将始终位于最右侧。

<f-tag type="default" size="small" leftIcon="f-icon-Daytimemode">标签</f-tag>
<f-tag type="primary" size="small" rightIcon="f-icon-email">标签</f-tag>
<f-tag type="danger" simple size="small" rightIcon="f-icon-form-fill" closable>标签</f-tag>

::: details 显示代码

```html
<f-tag type="default" size="small" leftIcon="f-icon-calendar-fill">标签</f-tag>
<f-tag type="primary" size="small" rightIcon="f-icon-CurrencyConverter-fill">
  标签
</f-tag>
<f-tag type="danger" simple size="small" rightIcon="f-icon-form-fill" closable>
  标签
</f-tag>
```

:::

## 可关闭的

`close` 可配置可以关闭的

<f-tag v-show="isShow1" close @on-close="isShow1 = false" type="default">
默认
</f-tag>
<f-tag v-show="isShow2" close @on-close="isShow2 = false" type="primary">
普通
</f-tag>
<f-tag v-show="isShow3" close @on-close="isShow3 = false" type="warning">
警告
</f-tag>
<f-tag v-show="isShow4" close @on-close="isShow4 = false" type="success">
成功
</f-tag>
<f-tag v-show="isShow5" close @on-close="isShow5 = false" type="danger">
失败
</f-tag>

::: details 显示代码

```html
<template>
  <f-tag v-show="isShow1" close @on-close="isShow1 = false" type="default">
    默认
  </f-tag>
  <f-tag v-show="isShow2" close @on-close="isShow2 = false" type="primary">
    普通
  </f-tag>
  <f-tag v-show="isShow3" close @on-close="isShow3 = false" type="warning">
    警告
  </f-tag>
  <f-tag v-show="isShow4" close @on-close="isShow4 = false" type="success">
    成功
  </f-tag>
  <f-tag v-show="isShow5" close @on-close="isShow5 = false" type="danger">
    失败
  </f-tag>
</template>

<script setup>
  import { ref } from 'vue'

  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>
```

:::

## Attributes

| 参数         | 说明           | 类型    | 可选值                                           | 默认值  |
| ------------ | -------------- | ------- | ------------------------------------------------ | ------- |
| `type`       | 标签类型       | string  | `default` `success` `danger` `warning` `primary` | default |
| `close`      | 是否可关闭     | boolean | ——                                               | false   |
| `round`      | 圆角           | boolean | ——                                               | false   |
| `background` | 自定义背景色   | string  | ——                                               | ——      |
| `color`      | 自定义文字颜色 | string  | ——                                               | ——      |
| `left-icon`  | 左侧 icon      | string  | ——                                               | ——      |
| `right-icon` | 右侧 icon      | string  | ——                                               | ——      |
| `size`       | 标签大小       | string  | `large` `middle` `small` `mini`                  | small   |
| `simple`     | 是否为简约模式 | boolean | ——                                               | false   |
| `block`      | 是否为块级元素 | boolean | ——                                               | false   |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | tag 的内容 |

## Events

| 事件名称   | 说明             | 类型                    |
| ---------- | ---------------- | ----------------------- |
| `on-close` | 点击关闭按钮触发 | (e: MouseEvent) => void |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/konvyi" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/44802220?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>

<style scoped>
.f-tag {
  margin: 5px;
}
</style>
