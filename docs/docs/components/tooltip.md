# Tooltip 消息提示

`Tooltip` 消息信息提示组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/tooltip)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tooltip.md)

## 基本使用

`content` 设置弹出的信息内容，`position` 可以配置不同的弹出方向

<div class="tooltip-box">
  <f-tooltip content="上边的提示信息" position="top">
    <f-tag type="primary">上边的</f-tag>
  </f-tooltip>

  <f-tooltip content="下边的提示信息" position="bottom">
    <f-tag type="success">下边的</f-tag>
  </f-tooltip>

  <f-tooltip content="左边的提示信息" position="left">
    <f-tag type="danger">左边的</f-tag>
  </f-tooltip>

  <f-tooltip content="右边的提示信息" position="right">
    <f-tag type="warning">右边的</f-tag>
  </f-tooltip>
</div>

::: details 显示代码

```html
<f-tooltip content="上边的提示信息" position="top">
  <f-tag type="primary">信息</f-tag>
</f-tooltip>

<f-tooltip content="下边的提示信息" position="bottom">
  <f-tag type="success">信息</f-tag>
</f-tooltip>

<f-tooltip content="左边的提示信息" position="left">
  <f-tag type="danger">信息</f-tag>
</f-tooltip>

<f-tooltip content="右边的提示信息" position="right">
  <f-tag type="warning">信息</f-tag>
</f-tooltip>
```

:::

## 不同状态

`state` 属性可以配置不同的展示状态

<div class="tooltip-box">
  <f-tooltip content="Hover 展示" position="top" state="hover">
    <f-tag type="primary">Hover 展示</f-tag>
  </f-tooltip>

  <f-tooltip content="Active 展示" position="top" state="active">
    <f-tag type="success">Active 展示</f-tag>
  </f-tooltip>

  <f-tooltip content="Always 展示" position="top" state="always">
    <f-tag type="warning">Always 展示</f-tag>
  </f-tooltip>
</div>

::: details 显示代码

```html
<f-tooltip content="Hover 展示" position="top" state="hover">
  <f-tag type="primary">Hover 展示</f-tag>
</f-tooltip>

<f-tooltip content="Active 展示" position="top" state="active">
  <f-tag type="success">Active 展示</f-tag>
</f-tooltip>

<f-tooltip content="Always 展示" position="top" state="always">
  <f-tag type="warning">Always 展示</f-tag>
</f-tooltip>
```

:::

## 没有箭头

`no-arrow` 可以禁止显示箭头

<div class="tooltip-box">
  <f-tooltip content="有箭头的" position="top">
    <f-tag type="primary">有箭头的</f-tag>
  </f-tooltip>

  <f-tooltip content="没有箭头" position="top" no-arrow>
    <f-tag type="success">没有箭头</f-tag>
  </f-tooltip>
</div>

::: details 显示代码

```html
<f-tooltip content="Hover 展示" position="top">
  <f-tag type="primary">有箭头的</f-tag>
</f-tooltip>

<f-tooltip no-arrow content="Hover 展示" position="top">
  <f-tag type="success">没有箭头</f-tag>
</f-tooltip>
```

:::

## Attributes

| 参数       | 说明             | 类型    | 可选值                        | 默认值 |
| ---------- | ---------------- | ------- | ----------------------------- | ------ |
| `content`  | 提示内容         | string  | ——                            | bottom |
| `position` | 弹出方向         | string  | `top` `bottom` `right` `left` | bottom |
| `disabled` | 是否禁用         | boolean | ——                            | false  |
| `state`    | 展示状态         | string  | `hover` `active` `always`     | hover  |
| `no-arrow` | 是否显示箭头     | boolean | ——                            | false  |
| `bold`     | 是否加粗文字     | boolean | ——                            | false  |
| `bright`   | 是否使用浅色主题 | boolean | ——                            | false  |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认插槽 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<style scoped>
  .tooltip-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>
