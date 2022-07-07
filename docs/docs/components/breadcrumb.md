# Breadcrumb 面包屑

`Breadcrumb` 用于管理页面的导航链接

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/breadcrumb)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/breadcrumb.md)

## 基本使用

在 `f-breadcrumb` 中使用 `f-breadcrumb-item` 标签表示从首页开始的多级导航，`f-breadcrumb` 组件接收一个 `String` 类型的参数 `separator` 来作为分隔符，当前默认为`/`

<f-breadcrumb separator="/">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb separator="/">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义分隔符、页面导航颜色

`f-breadcrumb` 组件接收一个 `String` 类型的参数 `separatorColor` 来作为分隔符颜色，默认为`gray`。`f-breadcrumb` 组件接收一个 `String` 类型的参数 `itemColor` 来作为页面导航颜色，默认为`gray`

<f-breadcrumb separator="/" separatorColor="blue" itemColor="blue">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb separator="/" separatorColor="blue" itemColor="blue">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义分隔符

`f-breadcrumb` 组件接收一个 `String` 类型的 `icon` 参数 `separator-icon` 来作为分隔符。

<f-breadcrumb separator-icon="f-icon-arrow-right">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb separator-icon="f-icon-arrow-right">
  <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定展示 icon

`f-breadcrumb-item` 组件内可以添加`icon`作为导航名。

<f-breadcrumb separator="/">
  <f-breadcrumb-item :to="{ path: '/' }"><f-icon size="16px" icon="f-icon-collection"/></f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<template>
  <f-breadcrumb separator="/">
    <f-breadcrumb-item :to="{ path: '/' }">
      <f-icon size="16px" icon="f-icon-collection" />
    </f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>
</template>

<script lang="ts" setup>
  import { FIcon } from '@fighting-design/fighting-components/icon'
</script>
```

:::

## Breadcrumb Attractive

| 属性              | 说明           | 类型     | 可选值 | 默认值 |
| ----------------- | -------------- | -------- | ------ | ------ |
| `separator`       | 分隔符         | `string` | ——     | ——     |
| `icon-separator`  | icon 分隔符    | `string` | ——     | ——     |
| `separator-color` | 分隔符颜色     | `string` | ——     | ——     |
| `item-color`      | 页面元素分隔符 | `string` | ——     | ——     |

## Breadcrumb Slots

| 插槽名  | 自定义默认内容 | 子标签          |
| ------- | -------------- | --------------- |
| default | 自定义默认内容 | Breadcrumb Item |

## Breadcrumb-item Attractive

| 属性      | 说明                                            | 类型              | 可选值 | 默认值  |
| --------- | ----------------------------------------------- | ----------------- | ------ | ------- |
| `to`      | 路由跳转目标，类似 `vue-router` 的 `to`属性     | `string` `object` | —      | —       |
| `replace` | 如果设置该属性为 `true`, 导航将不会留下历史记录 | `boolean`         | —      | `false` |

## Breadcrumb-item Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/onechuan" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/98402209?v=4" />
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
