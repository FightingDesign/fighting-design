# BackTop 返回顶部

`BackTop` 用户返回网页的顶部

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/back-top)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/back-top.md)

## 基本使用

`BackTop` 的基本使用

<f-back-top>返回顶部</f-back-top>

::: details 显示代码

```html
<f-back-top>返回顶部</f-back-top>
```

:::

## 不同滚动模式

`behavior` 属性可以配置不同的滚动模式

<f-back-top bottom="90px" behavior="auto">auto 模式</f-back-top>
<f-back-top bottom="140px" behavior="smooth">smooth 模式</f-back-top>

::: details 显示代码

```html
<f-back-top bottom="90px" behavior="auto">auto 模式</f-back-top>
<f-back-top bottom="140px" behavior="smooth">smooth 模式</f-back-top>
```

:::

## 圆形的

`round` 属性可以配置圆形的样式

<f-back-top bottom="190px" round>
  <f-icon size="20px" icon="f-icon-rising" />
</f-back-top>

::: details 显示代码

```html
<f-back-top bottom="190px" round>
  <f-icon size="20px" icon="f-icon-rising" />
</f-back-top>
```

:::

## 自定义样式

你也可以自定义 `back-top` 的样式和位置

<f-back-top bottom="190px" right="100px" round color="red">
  <f-icon size="20px" icon="f-icon-favorites-fill" />
</f-back-top>

::: details 显示代码

```html
<f-back-top bottom="190px" right="100px" round color="red">
  <f-icon size="20px" icon="f-icon-favorites-fill" />
</f-back-top>
```

:::

## 监听目标

可以使用 `listen-el` 来监视一个指定的节点，传入 `class` 或 `id`，例如 `.box #app`

<div class="f-box">
  <p v-for="i in 20">这是一段文字{{ i + 1 }}</p>
</div>

<f-back-top listen-el=".f-box" right="200px">监听目标</f-back-top>

::: details 显示代码

```html
<template>
  <div class="f-box">
    <p v-for="i in 20">这是一段文字{{ i + 1 }}</p>
  </div>
  <f-back-top listen-el=".f-box" right="200px">监听目标</f-back-top>
</template>

<style scoped>
  .f-box {
    width: 100%;
    height: 100px;
    border: 4px solid skyblue;
    overflow: auto;
  }
</style>
```

:::

## Attractive

| 参数             | 说明                                                                     | 类型    | 可选值          | 默认值 |
| ---------------- | ------------------------------------------------------------------------ | ------- | --------------- | ------ |
| `round`          | 是否为圆角                                                               | boolean | ——              | false  |
| `behavior`       | 滚动模式                                                                 | string  | `smooth` `auto` | smooth |
| `visible-height` | 超出的距离展示                                                           | number  | ——              | 200    |
| `right`          | 距离右侧的距离                                                           | string  | ——              | ——     |
| `bottom`         | 距离底部的距离                                                           | string  | ——              | ——     |
| `z-index`        | 原生 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) | number  | ——              | 200    |
| `top`            | 点击返回距离顶部的距离                                                   | number  | ——              | 0      |
| `listen-el`      | 监视指定元素，需要传入指定的 class 或 id，如：.box #app                  | string  | ——              | ——     |
| `background`     | 背景色                                                                   | string  | ——              | ——     |
| `color`          | 文字颜色                                                                 | string  | ——              | ——     |

## Slots

| 名称      | 说明 |
| --------- | ---- |
| `default` | 内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/XiaoLi-sach" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/55753927?v=4" />
</a>

<style scoped>
  .f-box {
    width: 100%;
    height: 100px;
    border: 4px solid skyblue;
    overflow: auto;
  }
</style>
