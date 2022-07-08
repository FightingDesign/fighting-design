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

<style scoped>
  .tooltip-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
