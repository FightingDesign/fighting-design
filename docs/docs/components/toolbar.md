# Toolbar 工具栏

`Toolbar` 工具栏组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/toolbar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/toolbar.md)

## 基本使用

工具栏的基本使用

<f-toolbar>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-email" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-editor" />
  </f-toolbar-item>
</f-toolbar>

::: details 显示代码

```html
<f-toolbar>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-email" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-editor" />
  </f-toolbar-item>
</f-toolbar>
```

:::

## 不同大小

`size` 属性可以配置不同的大小

<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>

::: details 显示代码

```html
<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>
```

:::

## 圆角

`round` 属性为圆角

<f-toolbar round>圆角</f-toolbar>

::: details 显示代码

```html
<f-toolbar round>圆角</f-toolbar>
```

:::

## 背景色

`background` 可以自定义背景色

`text-color` 可以自定义文字颜色

<f-toolbar background="#42B883" text-color="#fff">
 <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>

<f-toolbar background="#589EF8" text-color="#eee">
 <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>

<f-toolbar text-color="#333">
 <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>

::: details 显示代码

```html
<f-toolbar background="#42B883" text-color="#fff">
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>

<f-toolbar background="#589EF8" text-color="#eee">
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>

<f-toolbar text-color="#333">
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
</f-toolbar>
```

:::

## 毛玻璃

`vague` 属性可以将工具栏的背景变为毛玻璃效果，但是你的背景色 `background` 必须传入一个带有透明度的 [rgba](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba) 色值才可以正常工作

<div class="f-toolbar-vague-box">
  <f-toolbar round text-color="#fff" background="rgba(0,0,0,0.3)" vague>
    <f-toolbar-item>返回</f-toolbar-item>
    <f-toolbar-item>
      <f-icon size="30px" icon="f-icon-default-template" />
    </f-toolbar-item>
    <f-toolbar-item>
      <f-icon size="30px" icon="f-icon-Customermanagement" />
    </f-toolbar-item>
    <f-toolbar-item>操作</f-toolbar-item>
    <f-toolbar-item>激活</f-toolbar-item>
  </f-toolbar>
</div>

::: details 显示代码

```html
<template>
  <div class="f-toolbar-vague-box">
    <f-toolbar round text-color="#fff" background="rgba(0,0,0,0.3)" vague>
      <f-toolbar-item>返回</f-toolbar-item>
      <f-toolbar-item>
        <f-icon size="30px" icon="f-icon-default-template" />
      </f-toolbar-item>
      <f-toolbar-item>
        <f-icon size="30px" icon="f-icon-Customermanagement" />
      </f-toolbar-item>
      <f-toolbar-item>操作</f-toolbar-item>
      <f-toolbar-item>激活</f-toolbar-item>
    </f-toolbar>
  </div>
</template>

<style scoped>
  .f-toolbar-vague-box {
    width: 100%;
    height: 200px;
    background: url('https://pic3.zhimg.com/80/v2-4003384451219b69e0cfe7d3432ec3e6_720w.jpg')
      no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## Toolbar Attributes

| 参数          | 说明                                                 | 类型    | 可选值                          | 默认值 |
| ------------- | ---------------------------------------------------- | ------- | ------------------------------- | ------ |
| `size`        | 文字大小，必须写入指定的数值和单位                   | string  | `large` `middle` `small` `mini` | large  |
| `round`       | 显示为圆角                                           | boolean | ——                              | false  |
| `background`  | 背景颜色                                             | string  | ——                              | ——     |
| `text-color`  | 字体颜色                                             | string  | ——                              | ——     |
| `fixed`       | 是否固定定位                                         | boolean | ——                              | false  |
| `fixed-style` | 固定定位的样式，仅支持 `top` `right` `button` `left` | object  | ——                              | ——     |
| `fixed`       | 是否固定定位                                         | boolean | ——                              | false  |
| `width`       | 自定义宽度                                           | string  | ——                              | ——     |
| `height`      | 自定义高度                                           | string  | ——                              | ——     |
| `vague`       | 是否为毛玻璃效果                                     | boolean | ——                              | false  |

## Toolbar Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 子工具栏选项 |

## Toolbar-Item Attributes

| 参数    | 说明           | 类型   | 可选值 | 默认值 |
| ------- | -------------- | ------ | ------ | ------ |
| `color` | 自定义文字颜色 | string | ——     | ——     |

## Toolbar-Item Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Events

| 事件名称 | 说明               |
| -------- | ------------------ |
| `click`  | 点击之后触发的回调 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/ECO-M" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/23503047?v=4" />
</a>

<style scoped>
.f-toolbar {
  margin: 10px 0;
}
.f-toolbar-vague-box {
  width: 100%;
  height: 200px;
  background: url('https://pic3.zhimg.com/80/v2-4003384451219b69e0cfe7d3432ec3e6_720w.jpg')
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
