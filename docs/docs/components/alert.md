# Alert 警告

`Alert` 用于页面中展示重要的提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/alert)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/alert.md)

## 基本使用

`type` 属性可以配置不同的主题类型，展示不同的颜色状态，默认值为 `primary`

`title` 属性可设置标题

<f-alert type="default" title="默认提示信息"></f-alert>
<f-alert type="primary" title="主要提示信息"></f-alert>
<f-alert type="success" title="成功提示信息"></f-alert>
<f-alert type="danger" title="危险提示信息"></f-alert>
<f-alert type="warning" title="警告提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="default" title="默认提示信息"></f-alert>
<f-alert type="primary" title="主要提示信息"></f-alert>
<f-alert type="success" title="成功提示信息"></f-alert>
<f-alert type="danger" title="危险提示信息"></f-alert>
<f-alert type="warning" title="警告提示信息"></f-alert>
```

:::

## 不同文字大小

`size` 属性可以配置不同大小的 `alert`

`size` 必须写入指定的数值和单位才可以正常工作

<f-alert size="12px" type="default" title="默认提示信息"></f-alert>
<f-alert size="14px" type="primary" title="主要提示信息"></f-alert>
<f-alert size="16px" type="success" title="成功提示信息"></f-alert>
<f-alert size="20px" type="danger" title="危险提示信息"></f-alert>
<f-alert size="24px" type="warning" title="警告提示信息"></f-alert>

::: details 显示代码

```html
<f-alert size="12px" type="default" title="默认提示信息"></f-alert>
<f-alert size="14px" type="primary" title="主要提示信息"></f-alert>
<f-alert size="16px" type="success" title="成功提示信息"></f-alert>
<f-alert size="20px" type="danger" title="危险提示信息"></f-alert>
<f-alert size="24px" type="warning" title="警告提示信息"></f-alert>
```

:::

## 是否加粗

使用 `bold` 属性可将文字设置为粗体显示

<f-alert type="default" title="未加粗的默认提示信息"></f-alert>
<f-alert type="primary" bold title="加粗的主要提示信息"></f-alert>
<f-alert type="success" bold title="加粗的成功提示信息"></f-alert>
<f-alert type="danger" bold title="加粗的危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="default" title="未加粗的默认提示信息"></f-alert>
<f-alert type="primary" bold title="加粗的主要提示信息"></f-alert>
<f-alert type="success" bold title="加粗的成功提示信息"></f-alert>
<f-alert type="danger" bold title="加粗的危险提示信息"></f-alert>
```

:::

## 是否居中

使用 `center` 属性可将文本显示中间

<f-alert type="default" title="未居中的默认提示信息"></f-alert>
<f-alert type="primary" center title="居中的主要提示信息"></f-alert>
<f-alert type="success" center title="居中的成功提示信息"></f-alert>
<f-alert type="danger" center title="居中的危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="default" title="未居中的默认提示信息"></f-alert>
<f-alert type="primary" center title="居中的主要提示信息"></f-alert>
<f-alert type="success" center title="居中的成功提示信息"></f-alert>
<f-alert type="danger" center title="居中的危险提示信息"></f-alert>
```

:::

## 使用ICON

使用 `icon` 属性可增加某种状态的可读性

`icon` 必须使用内置的 `f-icon`

<f-alert type="primary" icon="f-icon-template" title="主要提示信息"></f-alert>
<f-alert type="success" icon="f-icon-success" title="成功提示信息"></f-alert>
<f-alert type="danger" icon="f-icon-email" title="危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="primary" icon="f-icon-template" title="主要提示信息"></f-alert>
<f-alert type="success" icon="f-icon-success" title="成功提示信息"></f-alert>
<f-alert type="danger" icon="f-icon-email" title="危险提示信息"></f-alert>
```

:::

## 可关闭

使用 `close` 属性可以让 `alert` 被关闭

<f-alert type="primary" close title="主要提示信息"></f-alert>
<f-alert type="success" close title="成功提示信息"></f-alert>
<f-alert type="danger" close title="危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="primary" close title="主要提示信息"></f-alert>
<f-alert type="success" close title="成功提示信息"></f-alert>
<f-alert type="danger" close title="危险提示信息"></f-alert>
```

:::

## 简约模式

使用 `simple` 属性可以配置简约的 `alert`，样式依然由 `type` 控制

<f-alert type="primary" simple title="主要提示信息"></f-alert>
<f-alert type="success" simple title="成功提示信息"></f-alert>
<f-alert type="danger" simple title="危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="primary" simple title="主要提示信息"></f-alert>
<f-alert type="success" simple title="成功提示信息"></f-alert>
<f-alert type="danger" simple title="危险提示信息"></f-alert>
```

:::

## 圆角

`round` 属性可以配置 `alert` 显示为圆角

<f-alert type="primary" round title="主要提示信息"></f-alert>
<f-alert type="success" round title="成功提示信息"></f-alert>
<f-alert type="danger" round title="危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="primary" round title="主要提示信息"></f-alert>
<f-alert type="success" round title="成功提示信息"></f-alert>
<f-alert type="danger" round title="危险提示信息"></f-alert>
```

:::

## 背景颜色

如果你希望文字带上背景颜色，你可以使用 `background` 属性自定义你的 `alert` 背景颜色

<f-alert type="primary" background="#58c8de" title="主要提示信息"></f-alert>
<f-alert type="success" background="#e372ff" title="成功提示信息"></f-alert>
<f-alert type="danger" background="#e49b33" title="危险提示信息"></f-alert>

::: details 显示代码

```html
<f-alert type="primary" background="#58c8de" title="主要提示信息"></f-alert>
<f-alert type="success" background="#e372ff" title="成功提示信息"></f-alert>
<f-alert type="danger" background="#e49b33" title="危险提示信息"></f-alert>
```

:::

## 自定义文本颜色

如果你不喜欢 `type` 属性带了的不同颜色，你也可以使用 `color` 属性自定义你的 `text` 颜色

<f-alert type="primary" color="#e49b33">hello</f-alert>
<f-alert type="success" color="#e372ff">自定义颜色的字体</f-alert>

::: details 显示代码

```html
<f-alert type="primary" color="#e49b33">hello</f-alert>
<f-alert type="success" color="#e372ff">自定义颜色的字体</f-alert>
```

:::

## Attributes

| 参数          | 说明                                                                           | 类型    | 可选值                                           | 默认值  |
| ------------- | ------------------------------------------------------------------------------ | ------- | ------------------------------------------------ | ------- |
| `type`        | 类型                                                                          | string  | `default` `primary` `success` `danger` `warning` | primary |
| `size`        | 文字大小，必须写入指定的数值和单位                                               | string  | ——                                               | ——      |
| `bold`        | 文字是否以粗体显示                                                              | boolean | ——                                               | false   |
| `center`      | 是否居中                                                                       | boolean | ——                                               | false   |
| `icon`        | ICON                                                                          | string  | ——                                               | ——      |
| `close`       | 可关闭                                                                         | boolean  | ——                                              | ——      |
| `simple`      | 简约模式                                                                       | boolean  | ——                                               | ——      |
| `title`       | 标题                                                                           | string  | ——                                               | ——      |
| `round`       | 显示为圆角                                                                     | boolean  | ——                                               | ——      |
| `background`  | 背景颜色                                                                       | string  | ——                                               | ——      |
| `color`       | 字体颜色                                                                       | string  | ——                                               | ——      |

## Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | 副标题的内容 |

## Contributors

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<style scoped>
.f-alert {
  margin: 5px;
}
</style>
