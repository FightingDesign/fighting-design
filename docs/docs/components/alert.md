# Alert 警告

`Alert` 用于页面中展示重要的提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/alert)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/alert.md)

## 基本使用

`type` 属性可以配置不同的主题类型，展示不同的颜色状态，默认值为 `primary`

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

`size` 属性可以配置不同大小的 `alert`

`size` 必须写入指定的数值和单位才可以正常工作

<f-alert size="12px" type="default">默认提示信息</f-alert>
<f-alert size="14px" type="primary">主要提示信息</f-alert>
<f-alert size="16px" type="success">成功提示信息</f-alert>
<f-alert size="20px" type="danger">危险提示信息</f-alert>
<f-alert size="24px" type="warning">警告提示信息</f-alert>

::: details 显示代码

```html
<f-alert size="12px" type="default">默认提示信息</f-alert>
<f-alert size="14px" type="primary">主要提示信息</f-alert>
<f-alert size="16px" type="success">成功提示信息</f-alert>
<f-alert size="20px" type="danger">危险提示信息</f-alert>
<f-alert size="24px" type="warning">警告提示信息</f-alert>
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

## 使用ICON

使用 `icon` 属性可增加某种状态的可读性

`icon` 必须使用内置的 `f-icon`

<f-alert type="primary" icon="f-icon-template">主要提示信息</f-alert>
<f-alert type="success" icon="f-icon-editor">成功提示信息</f-alert>
<f-alert type="danger" icon="f-icon-email">危险提示信息</f-alert>

::: details 显示代码

```html
<f-alert type="primary" icon="f-icon-template">主要提示信息</f-alert>
<f-alert type="success" icon="f-icon-editor">成功提示信息</f-alert>
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

## 缩进量

使用 `text-indent` 属性规定文字块中首行文字的缩进

`text-indent` 必须写入指定的数值和单位才可以正常工作

<f-alert type="primary" text-indent="30px" block>文字</f-alert>
<f-alert type="success" text-indent="50px" block>文字</f-alert>
<f-alert type="danger" text-indent="70px" block>文字</f-alert>

::: details 显示代码

```html
<f-alert type="primary" text-indent="30px" block>文字</f-alert>
<f-alert type="success" text-indent="50px" block>文字</f-alert>
<f-alert type="danger" text-indent="70px" block>文字</f-alert>
```

:::

## 文字修饰

使用 `decoration` 属性规定添加到文字的修饰，例如：`上划线（overline）`、`中划线（line-through）`、`下划线（underline）`等

<f-alert>标准文字</f-alert>
<f-alert type="primary" decoration="overline">上划线</f-alert>
<f-alert type="success" decoration="line-through">中划线</f-alert>
<f-alert type="danger" decoration="underline">下划线</f-alert>

::: details 显示代码

```html
<f-alert>标准文字</f-alert>
<f-alert type="primary" decoration="overline">上划线</f-alert>
<f-alert type="success" decoration="line-through">中划线</f-alert>
<f-alert type="danger" decoration="underline">下划线</f-alert>
```

:::

## 内边距

使用 `padding` 属性可定义元素边框与元素内容之间的空间，即上下左右的内边距

<f-alert background="#ECECEC" padding="10px">上下左右相同的简写</f-alert>
<f-alert type="primary" background="#ECECEC" padding="10px 30px">上下、左右分别相同</f-alert>
<f-alert type="success" background="#ECECEC" padding="10px 20px 30px 40px">分别定义上下左右</f-alert>

::: details 显示代码

```html
<f-alert background="#ECECEC" padding="10px">上下左右相同的简写</f-alert>
<f-alert type="primary" background="#ECECEC" padding="10px 30px">
  上下、左右分别相同
</f-alert>
<f-alert type="success" background="#ECECEC" padding="10px 20px 30px 40px">
  分别定义上下左右
</f-alert>
```

:::

## Attributes

| 参数          | 说明                                                                           | 类型    | 可选值                                           | 默认值  |
| ------------- | ------------------------------------------------------------------------------ | ------- | ------------------------------------------------ | ------- |
| `type`        | 类型                                                                           | string  | `default` `primary` `success` `danger` `warning` | primary |
| `size`        | 文字大小，必须写入指定的数值和单位                                             | string  | ——                                               | ——      |
| `color`       | 字体颜色                                                                       | string  | ——                                               | ——      |
| `background`  | 背景颜色                                                                       | string  | ——                                               | #FFF    |
| `block`       | 是否独占一行                                                                   | boolean | ——                                               | false   |
| `spacing`     | 字符间距，必须写入指定的数值和单位                                             | string  | ——                                               | ——      |
| `line-height` | 行高，必须写入指定的数值和单位                                                 | string  | ——                                               | ——      |
| `text-indent` | 首行文字的缩进量，必须写入指定的数值和单位                                     | string  | ——                                               | ——      |
| `bold`        | 文字是否以粗体显示                                                             | boolean | ——                                               | false   |
| `decoration`  | 文字的修饰，例如：上划线(overline)、中划线(line-through)、下划线(underline)等  | string  | ——                                               | ——      |
| `padding`     | 定义元素边框与元素内容之间的空间，即上下左右的内边距，必须写入指定的数值和单位 | string  | ——                                               | ——      |

## Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | text 的内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<style scoped>
.f-alert {
  margin: 5px;
}
</style>
