# Text 文本

## 基本使用

`type` 属性可以配置不同的文本类型，展示不同的颜色状态

<f-text>普通文本</f-text>
<f-text type="primary">主要文本</f-text>
<f-text type="success">成功文本</f-text>
<f-text type="danger">危险文本</f-text>
<f-text type="warning">警告文本</f-text>

::: details 显示代码

```html
<f-text>普通文本</f-text>
<f-text type="primary">主要文本</f-text>
<f-text type="success">成功文本</f-text>
<f-text type="danger">危险文本</f-text>
<f-text type="warning">警告文本</f-text>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `text`

`size` 必须写入指定的数值和单位才可以正常工作

<f-text size="12px" type="primary">主要文本</f-text>
<f-text size="16px" type="success">成功文本</f-text>
<f-text size="20px" type="danger">危险文本</f-text>
<f-text size="24px" type="warning">警告文本</f-text>

::: details 显示代码

```html
<f-text size="12px" type="primary">主要文本</f-text>
<f-text size="16px" type="success">成功文本</f-text>
<f-text size="20px" type="danger">危险文本</f-text>
<f-text size="24px" type="warning">警告文本</f-text>
```

:::

## 自定义颜色

如果你不喜欢 `type` 属性带了的不同颜色，你也可以使用 `color` 属性自定义你的 `text` 颜色

<f-text color="#58c8de">颜色 1</f-text>
<f-text color="#e372ff">颜色 2</f-text>
<f-text color="#e49b33">颜色 3</f-text>

::: details 显示代码

```html
<f-text color="#58c8de">颜色1</f-text>
<f-text color="#e372ff">颜色2</f-text>
<f-text color="#e49b33">颜色3</f-text>
```

:::

## 背景颜色

如果你希望文本带上背景颜色，你可以使用 `background` 属性自定义你的 `text` 背景颜色

<f-text background="#58c8de">背景颜色 1</f-text>
<f-text background="#e372ff">背景颜色 2</f-text>
<f-text background="#e49b33">背景颜色 3</f-text>

::: details 显示代码

```html
<f-text background="#58c8de">背景颜色1</f-text>
<f-text background="#e372ff">背景颜色2</f-text>
<f-text background="#e49b33">背景颜色3</f-text>
```

:::

## 文本独占一行

使用 `block` 属性可将文本显示为块状元素，独占一行

<f-text type="primary" block>文本 1</f-text>
<f-text type="success" block>文本 2</f-text>
<f-text type="danger" block>文本 3</f-text>

::: details 显示代码

```html
<f-text type="primary" block>文本1</f-text>
<f-text type="success" block>文本2</f-text>
<f-text type="danger" block>文本3</f-text>
```

:::

## 字间距

使用 `spacing` 属性可增加或减少字符间的空白（字符间距）

`spacing` 必须写入指定的数值和单位才可以正常工作

<f-text type="primary" spacing="10px" block>文本 1</f-text>
<f-text type="success" spacing="20px" block>文本 2</f-text>
<f-text type="danger" spacing="30px" block>文本 3</f-text>

::: details 显示代码

```html
<f-text type="primary" spacing="10px" block>文本1</f-text>
<f-text type="success" spacing="20px" block>文本2</f-text>
<f-text type="danger" spacing="30px" block>文本3</f-text>
```

:::

## 行高

使用 `line-height` 属性可设置行间的距离（行高）

`line-height` 必须写入指定的数值和单位才可以正常工作

<f-text type="primary" line-height="30px" block>文本 1</f-text>
<f-text type="success" line-height="50px" block>文本 2</f-text>
<f-text type="danger" line-height="70px" block>文本 3</f-text>

::: details 显示代码

```html
<f-text type="primary" line-height="30px" block>文本1</f-text>
<f-text type="success" line-height="50px" block>文本2</f-text>
<f-text type="danger" line-height="70px" block>文本3</f-text>
```

:::

## 缩进量

使用 `text-indent` 属性规定文本块中首行文本的缩进

`text-indent` 必须写入指定的数值和单位才可以正常工作

<f-text type="primary" text-indent="30px" block>文本 1</f-text>
<f-text type="success" text-indent="50px" block>文本 2</f-text>
<f-text type="danger" text-indent="70px" block>文本 3</f-text>

::: details 显示代码

```html
<f-text type="primary" text-indent="30px" block>文本1</f-text>
<f-text type="success" text-indent="50px" block>文本2</f-text>
<f-text type="danger" text-indent="70px" block>文本3</f-text>
```

:::

## 是否加粗

使用 `bold` 属性可将文本设置为粗体显示

<f-text>未加粗文本</f-text>
<f-text type="primary" bold>文本 1</f-text>
<f-text type="success" bold>文本 2</f-text>
<f-text type="danger" bold>文本 3</f-text>

::: details 显示代码

```html
<f-text>未加粗文本</f-text>
<f-text type="primary" bold>文本1</f-text>
<f-text type="success" bold>文本2</f-text>
<f-text type="danger" bold>文本3</f-text>
```

:::

## 文本修饰

使用 `decoration` 属性规定添加到文本的修饰，例如：上划线(overline)、中划线(line-through)、下划线(underline)等

<f-text>标准文本</f-text>
<f-text type="primary" decoration="overline">上划线</f-text>
<f-text type="success" decoration="line-through">中划线</f-text>
<f-text type="danger" decoration="underline">下划线</f-text>

::: details 显示代码

```html
<f-text>标准文本</f-text>
<f-text type="primary" decoration="overline">上划线</f-text>
<f-text type="success" decoration="line-through">中划线</f-text>
<f-text type="danger" decoration="underline">下划线</f-text>
```

:::

## 内边距

使用 `padding` 属性可定义元素边框与元素内容之间的空间，即上下左右的内边距

<f-text background="#ECECEC" padding="10px">上下左右相同的简写</f-text>
<f-text type="primary" background="#ECECEC" padding="10px 30px">上下、左右分别相同</f-text>
<f-text type="success" background="#ECECEC" padding="10px 20px 30px 40px">分别定义上下左右</f-text>

::: details 显示代码

```html
<f-text background="#ECECEC" padding="10px">上下左右相同的简写</f-text>
<f-text type="primary" background="#ECECEC" padding="10px 30px"
  >上下、左右分别相同</f-text
>
<f-text type="success" background="#ECECEC" padding="10px 20px 30px 40px"
  >分别定义上下左右</f-text
>
```

:::

## Attributes

| 参数          | 说明                                                                           | 类型    | 可选值                                                  | 默认值  |
| ------------- | ------------------------------------------------------------------------------ | ------- | ------------------------------------------------------- | ------- |
| `type`        | 类型                                                                           | string  | `default` `info` `primary` `success` `danger` `warning` | primary |
| `size`        | 文字大小，必须写入指定的数值和单位                                             | string  | ——                                                      | ——      |
| `color`       | 字体颜色                                                                       | string  | ——                                                      | ——      |
| `background`  | 背景颜色                                                                       | string  | ——                                                      | #FFF    |
| `block`       | 是否独占一行                                                                   | boolean | ——                                                      | false   |
| `spacing`     | 字符间距，必须写入指定的数值和单位                                             | string  | ——                                                      | ——      |
| `line-height` | 行高，必须写入指定的数值和单位                                                 | string  | ——                                                      | ——      |
| `text-indent` | 首行文本的缩进量，必须写入指定的数值和单位                                     | string  | ——                                                      | ——      |
| `bold`        | 文本是否以粗体显示                                                             | boolean | ——                                                      | false   |
| `decoration`  | 文本的修饰，例如：上划线(overline)、中划线(line-through)、下划线(underline)等  | string  | ——                                                      | ——      |
| `padding`     | 定义元素边框与元素内容之间的空间，即上下左右的内边距，必须写入指定的数值和单位 | string  | ——                                                      | ——      |

## Text Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | text 的内容 |

<style scoped>
.f-text {
  margin: 5px;
}
</style>
