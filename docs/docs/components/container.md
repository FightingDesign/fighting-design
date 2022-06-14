# Container 布局容器

## 基本使用

`f-container` 外层容器, 可以实现垂直、水平、嵌套布局  
`f-header` 头部容器  
`f-footer` 底部容器  
`f-main` 主体容器  
`f-aside` 侧边容器

## 基本布局

<f-container>
<f-header>Header</f-header>
<f-main>Main</f-main>
</f-container>

::: details 显示代码

```html
<f-container>
  <f-header>Header</f-header>
  <f-main>Main</f-main>
</f-container>
```

:::

<f-container>
<f-header>Header</f-header>
<f-main>Main</f-main>
<f-footer>Footer</f-footer>
</f-container>

::: details 显示代码

```html
<f-container>
  <f-header>Header</f-header>
  <f-main>Main</f-main>
  <f-footer>Footer</f-footer>
</f-container>
```

:::

<f-container>
<f-header>Header</f-header>
<f-container>
<f-aside>Aside</f-aside>
<f-container>
<f-main>Main</f-main>
<f-footer>Footer</f-footer>
</f-container>
</f-container>
</f-container>

::: details 显示代码

```html
<f-container>
  <f-header>Header</f-header>
  <f-container>
    <f-aside>Aside</f-aside>
    <f-container>
      <f-main>Main</f-main>
      <f-footer>Footer</f-footer>
    </f-container>
  </f-container>
</f-container>
```

:::

<div class="container-body">
<f-container>
<f-header>Header</f-header>
<f-container>
<f-aside>Aside</f-aside>
<f-container>
<f-main>Main</f-main>
<f-footer>Footer</f-footer>
</f-container>
</f-container>
</f-container>
</div>

::: details 显示代码

```html
<f-container>
  <f-header>Header</f-header>
  <f-container>
    <f-aside>Aside</f-aside>
    <f-container>
      <f-main>Main</f-main>
      <f-footer>Footer</f-footer>
    </f-container>
  </f-container>
</f-container>
```

:::

<div class="container-body">
<f-container>
<f-aside width="200px">Aside</f-aside>
<f-main>Main</f-main>
</f-container>
</div>

::: details 显示代码

```html
<div class="container-body">
  <f-container>
    <f-aside width="200px">Aside</f-aside>
    <f-main>Main</f-main>
  </f-container>
</div>
```

:::

<div class="container-body">
<f-container>
<f-aside width="200px">Aside</f-aside>
<f-container>
<f-header>Header</f-header>
<f-main>Main</f-main>
</f-container>
</f-container>
</div>

::: details 显示代码

```html
<div class="container-body">
  <f-container>
    <f-aside width="200px">Aside</f-aside>
    <f-container>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
    </f-container>
  </f-container>
</div>
```

:::

## Container 属性

| 参数          | 说明     | 类型   | 可选值                | 默认值                                                           |
| ------------- | -------- | ------ | --------------------- | ---------------------------------------------------------------- |
| `orientation` | 排列方向 | string | horizontal / vertical | 子元素中有 f-header 或 f-footer 时为 vertical，否则为 horizontal |

## Header 属性

| 参数     | 说明 | 类型   | 可选值 | 默认值 |
| -------- | ---- | ------ | ------ | ------ |
| `height` | 高度 | string | ——     | 50px   |

## Aside 属性

| 参数    | 说明 | 类型   | 可选值 | 默认值 |
| ------- | ---- | ------ | ------ | ------ |
| `width` | 宽度 | string | ——     | 300px  |

## Footer 属性

| 参数     | 说明 | 类型   | 可选值 | 默认值 |
| -------- | ---- | ------ | ------ | ------ |
| `height` | 高度 | string | ——     | 50px   |
