# Button 按钮

功能很强大的按钮

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/button)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/button.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

`simple` 属性可以配置简约的按钮，样式依然由 `type` 控制

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>

<br />

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>

</template>

```html
<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
```

</f-sticky-card>

## 圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button round type="default">默认按钮</f-button>
<f-button round type="primary">主要按钮</f-button>
<f-button round type="success">成功按钮</f-button>
<f-button round type="danger">危险按钮</f-button>
<f-button round type="warning">警告按钮</f-button>

<br />

<f-button round simple type="default">默认按钮</f-button>
<f-button round simple type="primary">主要按钮</f-button>
<f-button round simple type="success">成功按钮</f-button>
<f-button round simple type="danger">危险按钮</f-button>
<f-button round simple type="warning">警告按钮</f-button>
</template>

```html
<f-button round type="default">默认按钮</f-button>
<f-button round type="primary">主要按钮</f-button>
<f-button round type="success">成功按钮</f-button>
<f-button round type="danger">危险按钮</f-button>
<f-button round type="warning">警告按钮</f-button>

<f-button round simple type="default">默认按钮</f-button>
<f-button round simple type="primary">主要按钮</f-button>
<f-button round simple type="success">成功按钮</f-button>
<f-button round simple type="danger">危险按钮</f-button>
<f-button round simple type="warning">警告按钮</f-button>
```

</f-sticky-card>

## 禁用状态

`disabled` 属性可以将按钮变成禁用状态

`loading` 属性可以将按钮变成 `loading` 状态

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button disabled type="default">默认按钮</f-button>
<f-button disabled type="primary">主要按钮</f-button>
<f-button disabled type="success">成功按钮</f-button>
<f-button disabled type="danger">危险按钮</f-button>
<f-button disabled type="warning">警告按钮</f-button>

<br />

<f-button loading type="default">默认按钮</f-button>
<f-button loading type="primary">主要按钮</f-button>
<f-button loading type="success">成功按钮</f-button>
<f-button loading type="danger">危险按钮</f-button>
<f-button loading type="warning">警告按钮</f-button>
</template>

```html
<f-button disabled type="default">默认按钮</f-button>
<f-button disabled type="primary">主要按钮</f-button>
<f-button disabled type="success">成功按钮</f-button>
<f-button disabled type="danger">危险按钮</f-button>
<f-button disabled type="warning">警告按钮</f-button>

<f-button loading type="default">默认按钮</f-button>
<f-button loading type="primary">主要按钮</f-button>
<f-button loading type="success">成功按钮</f-button>
<f-button loading type="danger">危险按钮</f-button>
<f-button loading type="warning">警告按钮</f-button>
```

</f-sticky-card>

## 不同尺寸

`size` 属性可以配置不同尺寸的按钮

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button size="large" type="primary">大型按钮</f-button>
<f-button size="middle" type="success">中型按钮</f-button>
<f-button size="small" type="danger">小型按钮</f-button>
<f-button size="mini" type="warning">迷你按钮</f-button>
</template>

```html
<f-button size="large" type="primary">大型按钮</f-button>
<f-button size="middle" type="success">中型按钮</f-button>
<f-button size="small" type="danger">小型按钮</f-button>
<f-button size="mini" type="warning">迷你按钮</f-button>
```

</f-sticky-card>

## 文字按钮

`text` 属性可以将按钮设置成文字按钮

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button text type="default">默认按钮</f-button>
<f-button text type="primary">主要按钮</f-button>
<f-button text type="success">成功按钮</f-button>
<f-button text type="danger">危险按钮</f-button>
<f-button text type="warning">警告按钮</f-button>

<br />

<f-button text round type="default">默认按钮</f-button>
<f-button text round type="primary">主要按钮</f-button>
<f-button text round type="success">成功按钮</f-button>
<f-button text round type="danger">危险按钮</f-button>
<f-button text round type="warning">警告按钮</f-button>
</template>

```html
<f-button text type="default">默认按钮</f-button>
<f-button text type="primary">主要按钮</f-button>
<f-button text type="success">成功按钮</f-button>
<f-button text type="danger">危险按钮</f-button>
<f-button text type="warning">警告按钮</f-button>

<f-button text round type="default">默认按钮</f-button>
<f-button text round type="primary">主要按钮</f-button>
<f-button text round type="success">成功按钮</f-button>
<f-button text round type="danger">危险按钮</f-button>
<f-button text round type="warning">警告按钮</f-button>
```

</f-sticky-card>

## 带有阴影

可以自定义按钮的阴影样式，可传入一个原生 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

或者也可以通过 [Neumorphism](https://neumorphism.io) 自己手动调节阴影样式

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button shadow="0 2px 7px 0 #f0f0f0" type="default">默认按钮</f-button>
<f-button shadow="0 2px 7px 0 #2d5af1" type="primary">主要按钮</f-button>
<f-button shadow="0 2px 7px 0 #52b35e" type="success">成功按钮</f-button>
<f-button shadow="0 2px 7px 0 #ff0200" type="danger">危险按钮</f-button>
<f-button shadow="0 2px 7px 0 #fcc202" type="warning">警告按钮</f-button>
</template>

```html
<f-button shadow="0 2px 7px 0 #f0f0f0" type="default">默认按钮</f-button>
<f-button shadow="0 2px 7px 0 #2d5af1" type="primary">主要按钮</f-button>
<f-button shadow="0 2px 7px 0 #52b35e" type="success">成功按钮</f-button>
<f-button shadow="0 2px 7px 0 #ff0200" type="danger">危险按钮</f-button>
<f-button shadow="0 2px 7px 0 #fcc202" type="warning">警告按钮</f-button>
```

</f-sticky-card>

## 涟漪效果

`ripples` 可以配置是否展示点击涟漪效果，也可以通过 `ripples-color` 自定义涟漪背景色

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button type="primary">主要按钮</f-button>
<f-button type="success" ripples>涟漪效果</f-button>
<f-button type="warning" ripples>点我试试</f-button>
<f-button type="danger" ripples simple>看看我</f-button>
<f-button type="success" text ripples ripples-color="green">自定义涟漪颜色</f-button>
</template>

```html
<f-button type="primary">主要按钮</f-button>
<f-button type="success" ripples>涟漪效果</f-button>
<f-button type="warning" ripples>点我试试</f-button>
<f-button type="danger" ripples simple>看看我</f-button>
<f-button type="success" text ripples ripples-color="green">
  自定义涟漪颜色
</f-button>
```

</f-sticky-card>

## 按钮组

使用 `<f-button-group>` 标签包裹按钮组件可以实现按钮组效果

`vertical` 属性可以配置纵向排列的按钮组

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
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
</template>

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

</f-sticky-card>

## 自定义颜色

`color` 属性可以自定义按钮的颜色，使用自定义颜色之后，`simple` 和 `text` 将不会再继续工作，不过自定义颜色仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号

使用自定义颜色之后 `Fighting Design` 会自动推断 `hover` 和 `active` 的效果，那么需要使用 `font-color` 来自定义文字的颜色

<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">

<template #source>
<f-button font-color="#fff" color="#ff0de5" round>自定义颜色</f-button>
<f-button font-color="#fff" color="#22c1c3" loading>loading</f-button>
</template>

```html
<f-button font-color="#fff" color="#ff0de5" round>自定义颜色</f-button>
<f-button font-color="#fff" color="#22c1c3" loading>loading</f-button>
```

</f-sticky-card>

## Button Attributes

| 参数            | 说明                                                                                                                                                        | 类型                       | 可选值                                                  | 默认值   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------- | -------- |
| `bold`          | 按钮文字是否加粗                                                                                                                                            | boolean                    | ——                                                      | false    |
| `circle`        | 是否为圆形按钮                                                                                                                                              | boolean                    | ——                                                      | false    |
| `round`         | 是否为圆角按钮                                                                                                                                              | boolean                    | ——                                                      | false    |
| `font-size`     | 文字字体大小                                                                                                                                                | string / number            | ——                                                      | 14px     |
| `font-color`    | 文字字体颜色                                                                                                                                                | string                     | ——                                                      | #fff     |
| `size`          | 按钮尺寸                                                                                                                                                    | string                     | `large` `middle` `small` `mini`                         | middle   |
| `block`         | 是否为块级元素                                                                                                                                              | boolean                    | ——                                                      | false    |
| `href`          | 链接按钮的地址                                                                                                                                              | string                     | ——                                                      | ——       |
| `target`        | 原生 target 属性，在 link 类型存在时生效                                                                                                                    | string                     | `_blank` `_self` `_parent` `_top`                       | \_self   |
| `loading`       | 是否展示 loading 状态                                                                                                                                       | boolean                    | ——                                                      | false    |
| `disabled`      | 是否禁用按钮                                                                                                                                                | boolean                    | ——                                                      | false    |
| `before-icon`   | 之前的 icon                                                                                                                                                 | object (VNode / Component) | ——                                                      | null     |
| `after-icon`    | 之后的 icon                                                                                                                                                 | object (VNode / Component) | ——                                                      | null     |
| `loading-icon`  | loading 状态下的 icon                                                                                                                                       | object (VNode / Component) | ——                                                      | null     |
| `type`          | 按钮的类型                                                                                                                                                  | string                     | `default` `primary` `success` <br /> `danger` `warning` | default  |
| `autofocus`     | 是否自动获取焦点                                                                                                                                            | boolean                    | ——                                                      | false    |
| `name`          | 按钮的名字                                                                                                                                                  | string                     | ——                                                      | f-button |
| `shadow`        | 按钮的阴影                                                                                                                                                  | string                     | ——                                                      | ——       |
| `text`          | 是否为文字按钮                                                                                                                                              | boolean                    | ——                                                      | false    |
| `simple`        | 是否为简约按钮                                                                                                                                              | boolean                    | ——                                                      | false    |
| `ripples`       | 是否启用点击涟漪效果                                                                                                                                        | boolean                    | ——                                                      | false    |
| `ripples-color` | 涟漪背景色                                                                                                                                                  | string                     | ——                                                      | #fff     |
| `native-type`   | 按钮的原生类型                                                                                                                                              | string                     | `button` `submit` `reset`                               | button   |
| `color`         | 自定义按钮的颜色，仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号 | string                     | ——                                                      | ——       |

## ButtonGroup Attributes

| 参数       | 说明         | 类型    | 可选值                          | 默认值 |
| ---------- | ------------ | ------- | ------------------------------- | ------ |
| `size`     | 按钮尺寸     | string  | `large` `middle` `small` `mini` | middle |
| `vertical` | 是否纵向排列 | boolean | ——                              | false  |

## Button Slots

| 名称          | 说明              |
| ------------- | ----------------- |
| `default`     | 按钮的内容        |
| `beforeIcon`  | 之前的 icon       |
| `afterIcon`   | 之后的 icon       |
| `loadingIcon` | 按钮 loading icon |

## ButtonGroup Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 按钮组的内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ButtonInstance,
  ButtonPropsType,
  ButtonSizeType,
  ButtonTargetType,
  ButtonType,
  ButtonNativeType,
  ButtonGroupInstance,
  ButtonGroupPropsType,
  ButtonGroupSizeType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/lxqddd" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/56574505?v=4" />
</a>

<style scoped>
.f-button {
  margin: 5px;
}
.f-button-group-vertical .f-button,
.f-button-group .f-button {
  margin: 0;
}
</style>
