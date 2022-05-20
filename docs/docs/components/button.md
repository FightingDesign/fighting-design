# Button 按钮

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="info">信息按钮</f-button>

`simple` 属性可以配置简约的按钮，去除原有的背景色，改为灰色背景，用不同的文字颜色展示不同的 `type` 类型的按钮，样式依然由 `type` 控制

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
<f-button simple type="info">信息按钮</f-button>

::: details 显示代码

```html
<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="info">信息按钮</f-button>

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
<f-button simple type="info">信息按钮</f-button>
```

:::

## 圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮

<f-button round type="default">默认按钮</f-button>
<f-button round type="primary">主要按钮</f-button>
<f-button round type="success">成功按钮</f-button>
<f-button round type="danger">危险按钮</f-button>
<f-button round type="warning">警告按钮</f-button>
<f-button round type="info">信息按钮</f-button>

<br />

<f-button round simple type="default">默认按钮</f-button>
<f-button round simple type="primary">主要按钮</f-button>
<f-button round simple type="success">成功按钮</f-button>
<f-button round simple type="danger">危险按钮</f-button>
<f-button round simple type="warning">警告按钮</f-button>
<f-button round simple type="info">信息按钮</f-button>

::: details 显示代码

```html
<f-button round type="default">默认按钮</f-button>
<f-button round type="primary">主要按钮</f-button>
<f-button round type="success">成功按钮</f-button>
<f-button round type="danger">危险按钮</f-button>
<f-button round type="warning">警告按钮</f-button>
<f-button round type="info">信息按钮</f-button>

<f-button round simple type="default">默认按钮</f-button>
<f-button round simple type="primary">主要按钮</f-button>
<f-button round simple type="success">成功按钮</f-button>
<f-button round simple type="danger">危险按钮</f-button>
<f-button round simple type="warning">警告按钮</f-button>
<f-button round simple type="info">信息按钮</f-button>
```

:::

## 禁用状态

`disabled` 属性可以将按钮变成禁用状态

`loading` 属性可以将按钮变成 `loading` 状态，也可以通过 `loadingIcon` 自定义 `loading` 图标样式

<f-button disabled type="default">默认按钮</f-button>
<f-button disabled type="primary">主要按钮</f-button>
<f-button disabled type="success">成功按钮</f-button>
<f-button disabled type="danger">危险按钮</f-button>
<f-button disabled type="warning">警告按钮</f-button>
<f-button disabled type="info">信息按钮</f-button>

<br />

<f-button loading type="default">默认按钮</f-button>
<f-button loading loadingIcon="f-icon-loading1" type="primary">主要按钮</f-button>
<f-button loading loadingIcon="f-icon-loading2" type="success">成功按钮</f-button>
<f-button loading loadingIcon="f-icon-loading3" type="danger">危险按钮</f-button>
<f-button loading loadingIcon="f-icon-loading4" type="warning">警告按钮</f-button>
<f-button loading loadingIcon="f-icon-loading5" type="info">信息按钮</f-button>

::: details 显示代码

```html
<f-button disabled type="default">默认按钮</f-button>
<f-button disabled type="primary">主要按钮</f-button>
<f-button disabled type="success">成功按钮</f-button>
<f-button disabled type="danger">危险按钮</f-button>
<f-button disabled type="warning">警告按钮</f-button>
<f-button disabled type="info">信息按钮</f-button>

<f-button loading type="default">默认按钮</f-button>
<f-button loading loadingIcon="f-icon-loading1" type="primary">
  主要按钮
</f-button>
<f-button loading loadingIcon="f-icon-loading2" type="success">
  成功按钮
</f-button>
<f-button loading loadingIcon="f-icon-loading3" type="danger">
  危险按钮
</f-button>
<f-button loading loadingIcon="f-icon-loading4" type="warning">
  警告按钮
</f-button>
<f-button loading loadingIcon="f-icon-loading5" type="info">信息按钮</f-button>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的按钮

<f-button size="large" type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button size="small" type="danger">危险按钮</f-button>
<f-button size="mini" type="warning">警告按钮</f-button>

::: details 显示代码

```html
<f-button size="large" type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button size="small" type="danger">危险按钮</f-button>
<f-button size="mini" type="warning">警告按钮</f-button>
```

:::

## 文字按钮

`text` 属性可以将按钮设置成文字按钮

`border` 可以给文字按钮添加边框，注意：border 属性只有在 `text` 值为 `true` 时生效

<f-button text type="default">默认按钮</f-button>
<f-button text type="primary">主要按钮</f-button>
<f-button text type="success">成功按钮</f-button>
<f-button text type="danger">危险按钮</f-button>
<f-button text type="warning">警告按钮</f-button>
<f-button text type="info">信息按钮</f-button>

<f-button text border type="default">默认按钮</f-button>
<f-button text border type="primary">主要按钮</f-button>
<f-button text border type="success">成功按钮</f-button>
<f-button text border type="danger">危险按钮</f-button>
<f-button text border type="warning">警告按钮</f-button>
<f-button text border type="info">信息按钮</f-button>

::: details 显示代码

```html
<f-button text type="default">默认按钮</f-button>
<f-button text type="primary">主要按钮</f-button>
<f-button text type="success">成功按钮</f-button>
<f-button text type="danger">危险按钮</f-button>
<f-button text type="warning">警告按钮</f-button>
<f-button text type="info">信息按钮</f-button>

<f-button text border type="default">默认按钮</f-button>
<f-button text border type="primary">主要按钮</f-button>
<f-button text border type="success">成功按钮</f-button>
<f-button text border type="danger">危险按钮</f-button>
<f-button text border type="warning">警告按钮</f-button>
<f-button text border type="info">信息按钮</f-button>
```

:::

## 按钮组

使用 `<f-button-group>` 标签包裹按钮组件可以实现按钮组效果

`vertical` 属性可以配置纵向排列的按钮组

<f-button-group>
  <f-button round type="primary">左边的</f-button>
  <f-button round type="primary">中间的</f-button>
  <f-button round type="primary">右边的</f-button>
</f-button-group>

<br />
<br />

<f-button-group vertical>
  <f-button type="primary">上边的</f-button>
  <f-button type="primary">中间的</f-button>
  <f-button round type="primary">下边的</f-button>
</f-button-group>

::: details 显示代码

```html
<f-button-group>
  <f-button round type="primary">左边的</f-button>
  <f-button round type="primary">中间的</f-button>
  <f-button round type="primary">右边的</f-button>
</f-button-group>

<f-button-group vertical>
  <f-button type="primary">上边的</f-button>
  <f-button type="primary">中间的</f-button>
  <f-button round type="primary">下边的</f-button>
</f-button-group>
```

:::

## 带有阴影

你可以自定义按钮的阴影样式，可传入一个原生 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

或者也可以通过 [Neumorphism](https://neumorphism.io) 自己手动调节阴影样式

<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="default">默认按钮</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="primary">主要按钮</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="success">成功按钮</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="danger">危险按钮</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="warning">警告按钮</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="info">信息按钮</f-button>

::: details 显示代码

```html
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="default">
  默认按钮
</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="primary">
  主要按钮
</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="success">
  成功按钮
</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="danger">
  危险按钮
</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="warning">
  警告按钮
</f-button>
<f-button shadow="7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4" type="info">
  信息按钮
</f-button>
```

:::

## Button Attributes

| 参数         | 说明                                     | 类型    | 可选值                                                         | 默认值   |
| ------------ | ---------------------------------------- | ------- | -------------------------------------------------------------- | -------- |
| blob         | 按钮文字是否加粗                         | boolean | ——                                                             | false    |
| round        | 是否为圆角按钮                           | boolean | ——                                                             | false    |
| fontSize     | 文字字体大小                             | string  | ——                                                             | ——       |
| fontColor    | 文字字体颜色                             | string  | ——                                                             | ——       |
| size         | 按钮尺寸                                 | string  | `large` `middle` `small` `mini`                                | middle   |
| block        | 是否为块级元素                           | boolean | ——                                                             | false    |
| link         | 链接按钮的地址                           | string  | ——                                                             | ——       |
| target       | 原生 target 属性，在 link 类型存在时生效 | string  | `_blank` `_self` `_parent` `_top`                              | \_self   |
| loading      | 是否展示 loading 状态                    | boolean | ——                                                             | false    |
| disabled     | 是否禁用按钮                             | boolean | ——                                                             | false    |
| icon         | 按钮的 icon                              | string  | ——                                                             | ——       |
| loadingIcon  | loading 状态的 icon                      | string  | ——                                                             | ——       |
| iconPosition | icon 的位置（不会对 loading 生效）       | string  | `left` `right`                                                 | left     |
| type         | 按钮的类型                               | string  | `default` `primary` `success` <br /> `danger` `warning` `info` | default  |
| autofocus    | 是否自动获取焦点                         | boolean | ——                                                             | false    |
| name         | 按钮的名字                               | string  | ——                                                             | f-button |
| shadow       | 按钮的阴影                               | string  | ——                                                             | ——       |
| text         | 是否为文字按钮                           | boolean | ——                                                             | false    |
| long         | 按钮长度是否为 100%                      | boolean | ——                                                             | false    |
| simple       | 是否为简约按钮                           | boolean | ——                                                             | false    |
| border       | 是否显示边框（仅在 text: true）时生效    | boolean | ——                                                             | false    |

## ButtonGroup Attributes

| 参数     | 说明         | 类型    | 可选值                          | 默认值 |
| -------- | ------------ | ------- | ------------------------------- | ------ |
| size     | 按钮尺寸     | string  | `large` `middle` `small` `mini` | middle |
| vertical | 是否纵向排列 | boolean | ——                              | false  |

## Button Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |

## ButtonGroup Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 按钮组的内容 |

<style scoped>
.f-button {
  margin: 5px;
}
.f-button-group-vertical .f-button,
.f-button-group .f-button {
  margin: 0;
}
</style>
