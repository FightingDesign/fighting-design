# Alert 警告

`Alert` 用于页面中展示重要的提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/alert)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/alert.md)

## 基本使用

`type` 属性可以配置不同的主题类型，展示不同的颜色状态

<f-alert type="default">默认提示信息</f-alert>
<f-alert type="primary">主要提示信息</f-alert>
<f-alert type="success">成功提示信息</f-alert>
<f-alert type="danger">危险提示信息</f-alert>
<f-alert type="warning">警告提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="default">默认提示信息</f-alert>
<f-alert type="primary">主要提示信息</f-alert>
<f-alert type="success">成功提示信息</f-alert>
<f-alert type="danger">危险提示信息</f-alert>
<f-alert type="warning">警告提示信息</f-alert>
```

:::

## 不同文字大小

`font-size` 属性可以配置不同大小的 `alert`

`font-size` 必须写入指定的数值和单位才可以正常工作

<f-alert font-size="12px" type="default">默认提示信息</f-alert>
<f-alert font-size="14px" type="primary">主要提示信息</f-alert>
<f-alert font-size="16px" type="success">成功提示信息</f-alert>
<f-alert font-size="20px" type="danger">危险提示信息</f-alert>
<f-alert font-size="24px" type="warning">警告提示信息</f-alert>

::: details 显示代码

```html
<f-alert font-size="12px" type="default">默认提示信息</f-alert>
<f-alert font-size="14px" type="primary">主要提示信息</f-alert>
<f-alert font-size="16px" type="success">成功提示信息</f-alert>
<f-alert font-size="20px" type="danger">危险提示信息</f-alert>
<f-alert font-size="24px" type="warning">警告提示信息</f-alert>
```

:::

## 是否加粗

使用 `bold` 属性可将文字设置为粗体显示

<f-alert type="default">未加粗的默认提示信息</f-alert>
<f-alert type="primary" bold>加粗的主要提示信息</f-alert>
<f-alert type="success" bold>加粗的成功提示信息</f-alert>
<f-alert type="danger" bold>加粗的危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="default">未加粗的默认提示信息</f-alert>
<f-alert type="primary" bold>加粗的主要提示信息</f-alert>
<f-alert type="success" bold>加粗的成功提示信息</f-alert>
<f-alert type="danger" bold>加粗的危险提示信息</f-alert>
```

:::

## 是否居中

使用 `center` 属性可将文本显示中间

<f-alert type="default">未居中的默认提示信息</f-alert>
<f-alert type="primary" center>居中的主要提示信息</f-alert>
<f-alert type="success" center>居中的成功提示信息</f-alert>
<f-alert type="danger" center>居中的危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="default">未居中的默认提示信息</f-alert>
<f-alert type="primary" center>居中的主要提示信息</f-alert>
<f-alert type="success" center>居中的成功提示信息</f-alert>
<f-alert type="danger" center>居中的危险提示信息</f-alert>
```

:::

## 带有 Icon

使用 `icon` 属性可增加某种状态的可读性

`icon` 必须使用内置的 [f-icon](https://fighting.tianyuhao.cn/components/icon.html)

<f-alert type="primary" icon="f-icon-template">主要提示信息</f-alert>
<f-alert type="success" icon="f-icon-success">成功提示信息</f-alert>
<f-alert type="danger" icon="f-icon-email">危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="primary" icon="f-icon-template">主要提示信息</f-alert>
<f-alert type="success" icon="f-icon-success">成功提示信息</f-alert>
<f-alert type="danger" icon="f-icon-email">危险提示信息</f-alert>
```

:::

## 可关闭

使用 `close` 属性可以让 `alert` 被关闭

<f-alert type="primary" close>主要提示信息</f-alert>
<f-alert type="success" close>成功提示信息</f-alert>
<f-alert type="danger" close>危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="primary" close>主要提示信息</f-alert>
<f-alert type="success" close>成功提示信息</f-alert>
<f-alert type="danger" close>危险提示信息</f-alert>
```

:::

## 简约模式

使用 `simple` 属性可以配置简约的 `alert`，样式依然由 `type` 控制

<f-alert simple type="default">默认提示信息</f-alert>
<f-alert simple type="primary">主要提示信息</f-alert>
<f-alert simple type="success">成功提示信息</f-alert>
<f-alert simple type="danger">危险提示信息</f-alert>
<f-alert simple type="warning">警告提示信息</f-alert>

::: details 显示代码

```html
<f-alert simple type="default">默认提示信息</f-alert>
<f-alert simple type="primary">主要提示信息</f-alert>
<f-alert simple type="success">成功提示信息</f-alert>
<f-alert simple type="danger">危险提示信息</f-alert>
<f-alert simple type="warning">警告提示信息</f-alert>
```

:::

## 圆角

`round` 属性可以配置 `alert` 显示为圆角

<f-alert type="primary" round>主要提示信息</f-alert>
<f-alert type="success" round>成功提示信息</f-alert>
<f-alert type="danger" round>危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="primary" round>主要提示信息</f-alert>
<f-alert type="success" round>成功提示信息</f-alert>
<f-alert type="danger" round>危险提示信息</f-alert>
```

:::

## 背景颜色

如果你希望文字带上背景颜色，你可以使用 `background` 属性自定义你的 `alert` 背景颜色

<f-alert type="primary" background="#58c8de">主要提示信息</f-alert>
<f-alert type="success" background="#e372ff">成功提示信息</f-alert>
<f-alert type="danger" background="#e49b33">危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="primary" background="#58c8de">主要提示信息</f-alert>
<f-alert type="success" background="#e372ff">成功提示信息</f-alert>
<f-alert type="danger" background="#e49b33">危险提示信息</f-alert>
```

:::

## 带有标题

`title` 可以配置一个标题信息

<f-alert type="primary" title="Hello~">今天代码写的很愉快！</f-alert>
<f-alert type="success" title="标题">心情很不错</f-alert>

::: details 显示代码

```html
<f-alert type="primary" title="Hello~">今天代码写的很愉快！</f-alert>
<f-alert type="success" title="标题">心情很不错</f-alert>
```

:::

## Attributes

| 参数          | 说明                                                 | 类型    | 可选值                                           | 默认值  |
| ------------- | ---------------------------------------------------- | ------- | ------------------------------------------------ | ------- |
| `type`        | 类型                                                 | string  | `default` `primary` `success` `danger` `warning` | primary |
| `font-size`   | 文字大小，必须写入指定的数值和单位                   | string  | ——                                               | ——      |
| `bold`        | 文字是否以粗体显示                                   | boolean | ——                                               | false   |
| `center`      | 是否居中                                             | boolean | ——                                               | false   |
| `icon`        | Icon                                                 | string  | ——                                               | ——      |
| `close`       | 可关闭                                               | boolean | ——                                               | ——      |
| `simple`      | 简约模式                                             | boolean | ——                                               | ——      |
| `title`       | 标题                                                 | string  | ——                                               | ——      |
| `round`       | 显示为圆角                                           | boolean | ——                                               | ——      |
| `background`  | 背景颜色                                             | string  | ——                                               | ——      |
| `color`       | 字体颜色                                             | string  | ——                                               | ——      |
| `fixed`       | 是否固定定位                                         | boolean | ——                                               | false   |
| `fixed-style` | 固定定位的样式，仅支持 `top` `right` `button` `left` | {}      | ——                                               | {}      |
| `overflow`    | 文字超出的展示状态                                   | string  | `hidden` `roll` `ellipsis`                       | ——      |

## Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 副标题的内容 |

## Events

| 事件名称    | 说明               |
| ----------- | ------------------ |
| `close-end` | 关闭之后触发的回调 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/HeHasGun" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/66313154?v=4" />
</a>

<style scoped>
.f-alert {
  margin: 5px;
}
</style>
