# Crumbs 面包屑

## 基本使用

面包屑的基本用法

<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>

```html
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
```

## 不同的分隔符

通过给父组件 separator 属性可以配置不同的分隔符，使用 icon 类名

<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>

```html
<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
```

## 跳转路由

通过给子组件 to 属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示

<tyh-crumbs>
<tyh-crumbs-item to="/">首页</tyh-crumbs-item>
<tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
<tyh-crumbs-item>文章管理</tyh-crumbs-item>
<tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>

```html
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
```

## Attributes

tyh-crumbs

| 参数      | 说明                | 类型   | 可选值 | 默认值            |
| --------- | ------------------- | ------ | ------ | ----------------- |
| separator | 分隔符，icon 的类名 | string | ——     | tyh-ui-xiexian-01 |

tyh-crumbs-item

| 参数 | 说明       | 类型   | 可选值 | 默认值 |
| ---- | ---------- | ------ | ------ | ------ |
| to   | 跳转的路径 | string | ——     | ——     |
