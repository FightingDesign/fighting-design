# Link 链接

一个超链接

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/link)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/link.md)

## 基本使用

`type` 属性可以配置不同的链接类型，展示不同的颜色状态

<f-link href="" type="default">默认链接</f-link>
<f-link href="" type="primary">主要链接</f-link>
<f-link href="" type="success">成功链接</f-link>
<f-link href="" type="danger">危险链接</f-link>
<f-link href="" type="warning">警告链接</f-link>

::: details 显示代码

```html
<f-link href="" type="default">默认链接</f-link>
<f-link href="" type="primary">主要链接</f-link>
<f-link href="" type="success">成功链接</f-link>
<f-link href="" type="danger">危险链接</f-link>
<f-link href="" type="warning">警告链接</f-link>
```

:::

## 不同大小

`size` 属性可以配置不同大小的 `link`

<f-link href="" size="12px" type="default">默认链接</f-link>
<f-link href="" size="12px" type="primary">主要链接</f-link>
<f-link href="" size="16px" type="success">成功链接</f-link>
<f-link href="" :size="20" type="danger">危险链接</f-link>
<f-link href="" :size="24" type="warning">警告链接</f-link>

::: details 显示代码

```html
<f-link href="" size="12px" type="default">默认链接</f-link>
<f-link href="" size="12px" type="primary">主要链接</f-link>
<f-link href="" size="16px" type="success">成功链接</f-link>
<f-link href="" :size="20" type="danger">危险链接</f-link>
<f-link href="" :size="24" type="warning">警告链接</f-link>
```

:::

## 不同状态

`state` 可以配置 `link` 的不同状态，可选值为 `line` 和 `bag` 代表显示下划线和 `hover` 状态的显示背景色

<f-link href="" state="line" type="primary">带有下划线</f-link>
<f-link href="" state="bag" type="danger">hover 一下试试</f-link>

::: details 显示代码

```html
<f-link href="" state="line" type="primary">带有下划线</f-link>
<f-link href="" state="bag" type="danger">hover 一下试试</f-link>
```

:::

## 自定义颜色

如果你不喜欢 `type` 属性带了的不同颜色，你也可以使用 `color` 属性自定义你的 `link` 颜色

<f-link href="" color="#58c8de">看我颜色好看吗</f-link>
<f-link href="" color="#e372ff">链接</f-link>
<f-link href="" color="#e49b33">还有我</f-link>

::: details 显示代码

```html
<f-link href="" color="#58c8de">看我颜色好看吗</f-link>
<f-link href="" color="#e372ff">链接</f-link>
<f-link href="" color="#e49b33">还有我</f-link>
```

:::

## 禁用状态

`prohibit` 可以让按钮处于禁用状态

<f-link prohibit href="" type="primary">不许点我</f-link>
<f-link prohibit href="" state="line" type="success">不许点我</f-link>
<f-link prohibit href="" state="bag" type="warning">不许点我</f-link>

::: details 显示代码

```html
<f-link prohibit href="" type="primary">不许点我</f-link>
<f-link prohibit href="" state="line" type="success">不许点我</f-link>
<f-link prohibit href="" state="bag" type="warning">不许点我</f-link>
```

:::

## 禁止跳转

你甚至可以拿 `link` 当作一个按钮来使用，那么要取消点击刷新和跳转的默认行为，使用 `noLink` 属性可以实现

<f-link href="" noLink>拿我当按钮使用</f-link>

::: details 显示代码

```html
<f-link href="" noLink>拿我当按钮使用</f-link>
```

:::

## Attributes

| 参数          | 说明                                                                                      | 类型                       | 可选值                                                 | 默认值  |
| ------------- | ----------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------ | ------- |
| `type`        | link 的类型                                                                               | string                     | `default` `primary` `success`<br /> `danger` `warning` | primary |
| `href`        | 链接的地址                                                                                | string                     | ——                                                     | ——      |
| `size`        | link 的文字大小                                                                           | string / number            | ——                                                     | ——      |
| `state`       | link 状态的样式状态                                                                       | string                     | `line` `bag`                                           | ——      |
| `prohibit`    | 是否禁用                                                                                  | boolean                    | ——                                                     | false   |
| `target`      | 原生 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) 属性 | string                     | `_self` `_blank` `_parent` `_top`                      | ——      |
| `color`       | 自定义 link 颜色                                                                          | string                     | ——                                                     | ——      |
| `no-copy`     | 是否禁止 copy                                                                             | boolean                    | ——                                                     | false   |
| `no-link`     | 是否禁止链接跳转及重新加载（取消默认事件）                                                | boolean                    | ——                                                     | false   |
| `after-icon`  | 之前的 icon                                                                               | object (VNode / Component) | ——                                                     | null    |
| `before-icon` | 之后的 icon                                                                               | object (VNode / Component) | ——                                                     | null    |

## Slots

| 名称         | 说明        |
| ------------ | ----------- |
| `default`    | 默认内容    |
| `beforeIcon` | 之前的 icon |
| `afterIcon`  | 之后的 icon |

## Interface

组件导出以下类型定义：

```ts
import type {
  LinkInstance,
  LinkPropsType,
  LinkType,
  LinkTargetType,
  LinkHoverType
} from 'fighting-design'
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
