# Tag 标签

## 基本使用

由 `type` 属性来选择 tag 的类型。基础预设的类型有`info`，`primary`，`warning`，`success`，`danger`。

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

`simple` 是否为明亮模式，默认为 false

<f-tag simple type="primary">明亮模式</f-tag>
<f-tag type="primary">深色模式</f-tag>

::: details 显示代码

```html
<f-tag simple type="primary">明亮模式</f-tag>
<f-tag type="primary">深色模式</f-tag>
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

`size` 自定义标签大小，有`large`, `middle`, `small`, `mini`四个可选值

<f-tag color="#909399" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag size="small">小标签</f-tag>
<f-tag color="#2d5af1" size="mini">超小标签</f-tag>

::: details 显示代码

```html
<f-tag color="#909399" size="large">大标签</f-tag>
<f-tag type="primary" size="middle">中等标签</f-tag>
<f-tag size="small">小标签</f-tag>
<f-tag color="#2d5af1" size="mini">超小标签</f-tag>
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

`closable` 表示标签是否可以被关闭

<f-tag color="blue" size="small" :closable="true">标签</f-tag>

::: details 显示代码

```html
<f-tag color="blue" size="small" :closable="true">标签</f-tag>
```

:::

## Attributes

| 参数         | 说明           | 类型    | 可选值                                        | 默认值 |
| ------------ | -------------- | ------- | --------------------------------------------- | ------ |
| `type`       | 标签类型       | string  | `info` `success` `danger` `warning` `primary` | info   |
| `simple`     | 是否为明亮模式 | boolean | ——                                            | false  |
| `size`       | 标签大小       | string  | `large` `middle` `small` `mini`               | small  |
| `color`      | 标签颜色       | string  | ——                                            | ——     |
| `round`      | 圆角值         | string  | ——                                            | ——     |
| `left-icon`  | 左侧 icon      | string  | ——                                            | ——     |
| `right-icon` | 右侧 icon      | string  | ——                                            | ——     |
| `block`      | 是否为块级元素 | boolean | ——                                            | false  |
| `hit`        | 是否显示边框   | boolean | ——                                            | true   |
| `closable`   | 是否可关闭     | boolean | ——                                            | false  |

<style scoped>
.f-tag {
  margin: 5px;
}
</style>
