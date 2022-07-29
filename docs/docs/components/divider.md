# Divider 分隔线

`Divider` 用户段落的分隔符

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/divider)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/divider.md)

## 基本使用

分隔线的基本使用

<f-divider margin="20px">我是分隔线</f-divider>

::: details 显示代码

```html
<f-divider>我是分隔线</f-divider>
```

:::

## 文字显示位置

`position` 属性可以配置文字显示的位置

<p/>
<f-divider position='left'>我是左边的文字</f-divider>
<p/>
<f-divider position='center'>我是居中的文字</f-divider>
<p/>
<f-divider position='right'>我是右边的文字</f-divider>
<p/>

::: details 显示代码

```html
<f-divider position="left">我是左边的文字</f-divider>
<f-divider position="center">我是居中的文字</f-divider>
<f-divider position="right">我是右边的文字</f-divider>
```

:::

## 自定义颜色

`color` 属性可以配置不同的线条颜色

`fontColor` 属性配置不同文字颜色

`background` 属性配置文字背景颜色

<f-divider margin="40px">默认颜色</f-divider>
<f-divider color='green' margin="40px" fontColor="green" background="#eee">我是绿色</f-divider>
<f-divider color='blue' margin="40px" fontColor="#fff" background="blue">我是蓝色</f-divider>

::: details 显示代码

```html
<f-divider margin="40px">默认颜色</f-divider>
<f-divider color="green" margin="40px" fontColor="green" background="#eee">
  我是绿色
</f-divider>
<f-divider color="blue" margin="40px" fontColor="#fff" background="blue">
  我是蓝色
</f-divider>
```

:::

## 上下距离

`margin` 可以配置上下的距离

<div>假装是内容</div>
<f-divider margin="60px" fontColor="blue">距离上下60px</f-divider>
<div>假装是内容</div>

::: details 显示代码

```html
<f-divider margin="60px" fontColor="blue">距离上下60px</f-divider>
```

:::

## 竖着显示

如果你不喜欢横着显示， `vertical` 属性可以竖着显示

如果使用 `vertical`属性，`color`&`background` 将会失效

<f-divider vertical>竖着显示</f-divider>

::: details 显示代码

```html
<f-divider vertical>竖着显示</f-divider>
```

:::

## 分隔符样式

当你厌倦了直线分隔符 `type` 属性可以让它换一个样式

<f-divider type="dashed">我是虚线</f-divider>
<f-divider type="dotted">我是圆点</f-divider>
<f-divider type="double">我是双实线</f-divider>

::: details 显示代码

```html
<f-divider type="dashed">我是虚线</f-divider>
<f-divider type="dotted">我是圆点</f-divider>
<f-divider type="double">我是双实线</f-divider>
```

:::

## Attributes

| 参数         | 说明         | 类型    | 可选值                             | 默认值 |
| ------------ | ------------ | ------- | ---------------------------------- | ------ |
| `position`   | 文字显示位置 | string  | `left` `center` `right`            | center |
| `vertical`   | 是否为竖线   | boolean | ——                                 | false  |
| `color`      | 线条颜色     | string  | ——                                 | ——     |
| `fontColor`  | 文字颜色     | string  | ——                                 | ——     |
| `background` | 背景颜色     | boolean | ——                                 | ——     |
| `margin`     | 上下边距     | string  | ——                                 | ——     |
| `type`       | 分隔符样式   | string  | `dashed` `dotted` `double` `solid` | solid  |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/JayMeDotDot" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/43527124?v=4" />
</a>
