# Tag 标签

`Tag` 用于标签展示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/tag)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tag.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

<f-tag type="info">信息</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>

::: details 显示代码

```html
<f-tag type="info">信息</f-tag>
<f-tag type="primary">普通</f-tag>
<f-tag type="warning">警告</f-tag>
<f-tag type="success">成功</f-tag>
<f-tag type="danger">失败</f-tag>
```

:::

## 模式

`simple` 属性可以配置简约的按钮，样式依然由 `type` 控制

<f-tag simple type="info">信息</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>

::: details 显示代码

```html
<f-tag simple type="info">信息</f-tag>
<f-tag simple type="primary">普通</f-tag>
<f-tag simple type="warning">警告</f-tag>
<f-tag simple type="success">成功</f-tag>
<f-tag simple type="danger">失败</f-tag>
```

:::

## 色彩

`color` 自定义标签颜色

<f-tag simple color="#ff0200">浅色模式</f-tag>
<f-tag color="#2d5af1">深色模式</f-tag>

::: details 显示代码

```html
<f-tag simple color="#ff0200">浅色模式</f-tag>
<f-tag color="#2d5af1">深色模式</f-tag>
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

## 边框

通过 `hit` 属性可以设置标签是否有边框。

<f-tag size="small" type="warning" :hit="false">深色模式</f-tag>

::: details 显示代码

```html
<f-tag size="small" simple type="warning" :hit="false">深色模式</f-tag>
```

:::

## icon

通过 `leftIcon` 和 `rightIcon` 可以设置左右 icon 的值，注意：当同时设置 `rightIcon` 与 `closable` 时，关闭的 icon 将始终位于最右侧。

<f-tag type="info" size="small" leftIcon="f-icon-Daytimemode">标签</f-tag>
<f-tag type="primary" size="small" rightIcon="f-icon-email">标签</f-tag>
<f-tag type="danger" simple size="small" rightIcon="f-icon-form-fill" closable>标签</f-tag>

::: details 显示代码

```html
<f-tag type="info" size="small" leftIcon="f-icon-calendar-fill">标签</f-tag>
<f-tag type="primary" size="small" rightIcon="f-icon-CurrencyConverter-fill">
  标签
</f-tag>
<f-tag type="danger" simple size="small" rightIcon="f-icon-form-fill" closable>
  标签
</f-tag>
```

:::

## 是否可关闭

`close` 可配置可以关闭的

<f-tag v-show="isShow1" close @on-close="isShow1 = false" type="info">
信息
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
  <f-tag v-show="isShow1" close @on-close="isShow1 = false" type="info">
    信息
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

| 参数         | 说明           | 类型    | 可选值                                        | 默认值 |
| ------------ | -------------- | ------- | --------------------------------------------- | ------ |
| `type`       | 标签类型       | string  | `info` `success` `danger` `warning` `primary` | info   |
| `simple`     | 是否为简约模式 | boolean | ——                                            | false  |
| `size`       | 标签大小       | string  | `large` `middle` `small` `mini`               | small  |
| `color`      | 标签颜色       | string  | ——                                            | ——     |
| `round`      | 圆角           | boolean | ——                                            | false  |
| `left-icon`  | 左侧 icon      | string  | ——                                            | ——     |
| `right-icon` | 右侧 icon      | string  | ——                                            | ——     |
| `block`      | 是否为块级元素 | boolean | ——                                            | false  |
| `close`      | 是否可关闭     | boolean | ——                                            | false  |

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
