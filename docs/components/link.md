# Link 链接

一个超链接

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/link)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/link.md)

## 基本使用

`type` 属性可以配置不同的链接类型，展示不同的颜色状态

::: demo

<template #source>
<f-link href="" type="default">默认链接</f-link>
<f-link href="" type="primary">主要链接</f-link>
<f-link href="" type="success">成功链接</f-link>
<f-link href="" type="danger">危险链接</f-link>
<f-link href="" type="warning">警告链接</f-link>
<f-link href="" type="info">信息链接</f-link>
</template>

```html
<f-link href="" type="default">默认链接</f-link>
<f-link href="" type="primary">主要链接</f-link>
<f-link href="" type="success">成功链接</f-link>
<f-link href="" type="danger">危险链接</f-link>
<f-link href="" type="warning">警告链接</f-link>
<f-link href="" type="info">信息链接</f-link>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `link`

::: demo

<template #source>
<f-link href="" size="12px" type="default">默认链接</f-link>
<f-link href="" size="12px" type="primary">主要链接</f-link>
<f-link href="" size="16px" type="success">成功链接</f-link>
<f-link href="" :size="20" type="danger">危险链接</f-link>
<f-link href="" :size="24" type="warning">警告链接</f-link>
<f-link href="" :size="26" type="info">信息链接</f-link>
</template>

```html
<f-link href="" size="12px" type="default">默认链接</f-link>
<f-link href="" size="12px" type="primary">主要链接</f-link>
<f-link href="" size="16px" type="success">成功链接</f-link>
<f-link href="" :size="20" type="danger">危险链接</f-link>
<f-link href="" :size="24" type="warning">警告链接</f-link>
<f-link href="" :size="26" type="info">信息链接</f-link>
```

:::

## 不同状态

`state` 可以配置 `link` 的不同移入状态

::: demo

<template #source>
<f-link href="" state="line" type="primary">带有下划线</f-link>
<f-link href="" state="background" type="danger">hover 一下试试</f-link>
</template>

```html
<f-link href="" state="line" type="primary">带有下划线</f-link>
<f-link href="" state="background" type="danger">hover 一下试试</f-link>
```

:::

## 自定义颜色

如果你不喜欢 `type` 属性带了的不同颜色，你也可以使用 `color` 属性自定义你的 `link` 颜色

::: demo

<template #source>
<f-link href="" color="#58c8de">看我颜色好看吗</f-link>
<f-link href="" color="#e372ff">链接</f-link>
<f-link href="" color="#e49b33">还有我</f-link>
</template>

```html
<f-link href="" color="#58c8de">看我颜色好看吗</f-link>
<f-link href="" color="#e372ff">链接</f-link>
<f-link href="" color="#e49b33">还有我</f-link>
```

:::

## 禁用状态

`disabled` 可以让按钮处于禁用状态

::: demo

<template #source>
<f-link disabled href="" type="primary">不许点我</f-link>
<f-link disabled href="" state="line" type="success">不许点我</f-link>
<f-link disabled href="" state="background" type="warning">不许点我</f-link>
</template>

```html
<f-link disabled href="" type="primary">不许点我</f-link>
<f-link disabled href="" state="line" type="success">不许点我</f-link>
<f-link disabled href="" state="background" type="warning">不许点我</f-link>
```

:::

## 禁止跳转

你甚至可以拿 `link` 当作一个按钮来使用，那么要取消点击刷新和跳转的默认行为，使用 `no-link` 属性可以实现

::: demo

<template #source>
<f-link href="" no-link>拿我当按钮使用</f-link>
</template>

```html
<f-link href="" no-link>拿我当按钮使用</f-link>
```

:::

## Attributes

| 参数          | 说明                                                                                      | 类型                                                                   | 可选值                                           | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| `type`        | 不同类型                                                                                  | <a href="/components/interface.html#fightingtype">FightingType</a>     | `default` `primary` `success` `danger` `warning` | ——     |
| `href`        | 链接的地址                                                                                | string                                                                 | ——                                               | ——     |
| `size`        | 文字大小                                                                                  | string / number                                                        | ——                                               | ——     |
| `state`       | 鼠标移入的样式状态                                                                        | <a href="#linkstate">LinkState</a>                                     | `line` `background`                              | ——     |
| `disabled`    | 是否禁用                                                                                  | boolean                                                                | ——                                               | false  |
| `target`      | 原生 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) 属性 | <a href="/components/interface.html#fightingtarget">FightingTarget</a> | `_self` `_blank` `_parent` `_top`                | ——     |
| `color`       | 自定义 link 颜色                                                                          | string                                                                 | ——                                               | ——     |
| `no-copy`     | 是否禁止 copy                                                                             | boolean                                                                | ——                                               | false  |
| `no-link`     | 是否禁止链接跳转及重新加载（取消默认事件）                                                | boolean                                                                | ——                                               | false  |
| `after-icon`  | 之前的 icon                                                                               | <a href="/components/interface.html#fightingicon">FightingIcon</a>     | ——                                               | ——     |
| `before-icon` | 之后的 icon                                                                               | <a href="/components/interface.html#fightingicon">FightingIcon</a>     | ——                                               | ——     |
| `on-click`    | 点击执行的回调                                                                            | <a href="/components/interface.html#HandleMouse">HandleMouse</a>       | ——                                               | ——     |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Interface

组件导出以下类型定义：

```ts
import type { LinkInstance, LinkProps, LinkState } from 'fighting-design'
```

### LinkState

```ts
type LinkState = 'line' | 'background'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<style scoped>
  .f-link {
    margin: 5px;
  }
</style>
