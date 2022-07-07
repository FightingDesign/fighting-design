# Layout 布局

`Layout` 用于处理常见的一些网页布局，实现快速搭建

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/layout)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/layout.md)

## 基本使用

`f-layout` 外层容器, 可以实现垂直、水平、嵌套布局  
`f-main` 主体容器  
`f-header` 头部容器  
`f-aside` 侧栏容器
`f-footer` 底栏容器

## 基本布局

下面是由 `Fighting Design` 提供的几种常见的页面布局演示

<f-layout>
  <f-header>Header</f-header>
  <f-main>Main</f-main>
</f-layout>

<br />
<br />

<f-layout>
  <f-header>Header</f-header>
  <f-main>Main</f-main>
  <f-footer>Footer</f-footer>
</f-layout>

<br />
<br />

<f-layout>
  <f-aside>Aside</f-aside>
  <f-main>Main</f-main>
</f-layout>

<br />
<br />

<f-layout>
  <f-header>Header</f-header>
  <f-layout>
  <f-aside>Aside</f-aside>
  <f-main>Main</f-main>
</f-layout>
</f-layout>

<br />
<br />

<f-layout>
<f-header>Header</f-header>
<f-layout>
<f-aside width="70px">Aside1</f-aside>
<f-aside>Aside2</f-aside>
<f-main>Main</f-main>
</f-layout>
</f-layout>

<br />
<br />

<f-layout>
  <f-header>Header</f-header>
  <f-layout>
  <f-main>Main</f-main>
  <f-aside>Aside</f-aside>
</f-layout>
</f-layout>

<br />
<br />

<f-layout>
<f-header>Header</f-header>
<f-layout>
<f-aside>Aside</f-aside>
<f-layout>
<f-main>Main</f-main>
<f-footer>Footer</f-footer>
</f-layout>
</f-layout>
</f-layout>

<br />
<br />

<f-layout>
<f-aside>Aside</f-aside>
<f-layout>
<f-header>Header</f-header>
<f-main>Main</f-main>
</f-layout>
</f-layout>

<br />
<br />

<f-layout>
<f-aside>Aside</f-aside>
<f-layout>
<f-header>Header</f-header>
<f-main>Main</f-main>
<f-footer>Footer</f-footer>
</f-layout>
</f-layout>

::: details 显示代码

```html
<template>
  <f-layout>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
    <f-footer>Footer</f-footer>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-main>Main</f-main>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside>Aside</f-aside>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside width="70px">Aside1</f-aside>
      <f-aside>Aside2</f-aside>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-main>Main</f-main>
      <f-aside>Aside</f-aside>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside>Aside</f-aside>
      <f-layout>
        <f-main>Main</f-main>
        <f-footer>Footer</f-footer>
      </f-layout>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-layout>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-layout>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
      <f-footer>Footer</f-footer>
    </f-layout>
  </f-layout>
</template>

<style scoped>
  .f-header,
  .f-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .f-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .f-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
```

:::

## layout Attributes

| 参数        | 说明     | 类型   | 可选值                  | 默认值 |
| ----------- | -------- | ------ | ----------------------- | ------ |
| `direction` | 排列方向 | string | `horizontal` `vertical` | ——     |

## Header Attributes

| 参数     | 说明 | 类型   | 可选值 | 默认值 |
| -------- | ---- | ------ | ------ | ------ |
| `height` | 高度 | string | ——     | 60px   |

## Aside Attributes

| 参数    | 说明 | 类型   | 可选值 | 默认值 |
| ------- | ---- | ------ | ------ | ------ |
| `width` | 宽度 | string | ——     | 200px  |

## Footer Attributes

| 参数     | 说明 | 类型   | 可选值 | 默认值 |
| -------- | ---- | ------ | ------ | ------ |
| `height` | 高度 | string | ——     | 60px   |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/XiaoLi-sach" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/55753927?v=4" />
</a>

<style scoped>
 .f-header,
  .f-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .f-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .f-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
