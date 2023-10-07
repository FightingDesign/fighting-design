# Divider 分隔线

段落的分隔符

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/divider)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/divider.md)

## 基本使用

分隔线的基本使用

::: demo

<template #source>
<f-divider margin="20px">我是分隔线</f-divider>
</template>

```html
<f-divider>我是分隔线</f-divider>
```

:::

## 文字显示位置

`position` 属性可以配置文字显示的位置

::: demo

<template #source>

<p/>
<f-divider position='left'>我是左边的文字</f-divider>
<p/>
<f-divider position='center'>我是居中的文字</f-divider>
<p/>
<f-divider position='right'>我是右边的文字</f-divider>
<p/>
</template>

```html
<f-divider position="left">我是左边的文字</f-divider>
<f-divider position="center">我是居中的文字</f-divider>
<f-divider position="right">我是右边的文字</f-divider>
```

:::

## 自定义颜色

`color` 属性可以配置不同的线条颜色

`font-color` 属性配置不同文字颜色

`background` 属性配置文字背景颜色

::: demo

<template #source>
<f-divider margin="40px">默认颜色</f-divider>
<f-divider color="green" margin="40px" font-color="green" background="#eee">我是绿色</f-divider>
<f-divider color="blue" margin="40px" font-color="#fff" background="blue">我是蓝色</f-divider>

</template>

```html
<f-divider margin="40px">默认颜色</f-divider>
<f-divider color="green" margin="40px" font-color="green" background="#eee"
  >我是绿色</f-divider
>
<f-divider color="blue" margin="40px" font-color="#fff" background="blue"
  >我是蓝色</f-divider
>
```

:::

## 上下距离

`margin` 可以配置上下的距离

::: demo

<template #source>

<div>假装是内容</div>
<f-divider margin="60px" font-color="blue">距离上下60px</f-divider>
<div>假装是内容</div>
</template>

```html
<f-divider margin="60px" font-color="blue">距离上下60px</f-divider>
```

:::

## 竖着显示

`vertical` 属性可以竖着显示，将不会展示默认插槽

::: demo

<template #source>
<f-divider vertical />
</template>

```html
<f-divider vertical />
```

:::

## 分隔符样式

当你厌倦了直线分隔符 `type` 属性可以让它换一个样式

::: demo

<template #source>
<f-divider type="dashed">我是虚线</f-divider>
<f-divider type="dotted">我是圆点</f-divider>
<f-divider type="double">我是双实线</f-divider>
</template>

```html
<f-divider type="dashed">我是虚线</f-divider>
<f-divider type="dotted">我是圆点</f-divider>
<f-divider type="double">我是双实线</f-divider>
```

:::

## Attributes

| 参数         | 说明                                     | 类型                                           | 可选值                             | 默认值 |
| ------------ | ---------------------------------------- | ---------------------------------------------- | ---------------------------------- | ------ |
| `position`   | 文字显示位置                             | <a href="#dividertype">DividerType</a>         | `left` `center` `right`            | center |
| `vertical`   | 是否为竖线                               | boolean                                        | ——                                 | false  |
| `color`      | 线条颜色                                 | string                                         | ——                                 | ——     |
| `font-color` | 文字颜色                                 | string                                         | ——                                 | ——     |
| `background` | 背景颜色                                 | boolean                                        | ——                                 | ——     |
| `margin`     | 上下边距                                 | string / number                                | ——                                 | ——     |
| `height`     | 自定义高度，仅在 vertical 为 true 时生效 | string / number                                | ——                                 | ——     |
| `type`       | 分隔符类型                               | <a href="#dividerposition">DividerPosition</a> | `dashed` `dotted` `double` `solid` | solid  |

## Interface

组件导出以下类型定义：

```ts
import type {
  DividerInstance,
  DividerProps,
  DividerPosition,
  DividerType
} from 'fighting-design'
```

### DividerType

```ts
type DividerType = 'dashed' | 'dotted' | 'double' | 'solid'
```

### DividerPosition

```ts
type DividerPosition = 'left' | 'center' | 'right'
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                   | 描述     |
| ---------------------- | -------- |
| `--divider-type`       | 线的类型 |
| `--divider-color`      | 线条颜色 |
| `--divider-background` | 背景颜色 |
| `--divider-font-color` | 文字颜色 |
| `--divider-margin`     | 边距     |
| `--divider-height`     | 高度     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/JayMeDotDot" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/43527124?v=4" />
</a>
