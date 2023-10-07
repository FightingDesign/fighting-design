# Layout 布局

处理常见的一些网页布局，实现快速搭建

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/layout)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/layout.md)

## 基本使用

- `f-layout` 外层容器, 可以实现垂直、水平、嵌套布局
- `f-main` 主体容器
- `f-header` 头部容器
- `f-aside` 侧栏容器
- `f-footer` 底栏容器

## 基本布局

下面是由 `Fighting Design` 提供的几种常见的页面布局演示

::: demo

<template #source>

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

</template>

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
    background-color: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .f-aside {
    background-color: #65adf0;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .f-main {
    background-color: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
```

:::

## layout Attributes

| 参数        | 说明     | 类型                                           | 可选值                  | 默认值 |
| ----------- | -------- | ---------------------------------------------- | ----------------------- | ------ |
| `direction` | 排列方向 | <a href="#layoutdirection">LayoutDirection</a> | `horizontal` `vertical` | ——     |

## Header Attributes

| 参数      | 说明   | 类型            | 可选值 | 默认值 |
| --------- | ------ | --------------- | ------ | ------ |
| `height`  | 高度   | string / number | ——     | ——     |
| `padding` | 内边距 | string / number | ——     | ——     |

## Main Attributes

| 参数      | 说明   | 类型            | 可选值 | 默认值 |
| --------- | ------ | --------------- | ------ | ------ |
| `padding` | 内边距 | string / number | ——     | ——     |

## Aside Attributes

| 参数      | 说明   | 类型            | 可选值 | 默认值 |
| --------- | ------ | --------------- | ------ | ------ |
| `width`   | 宽度   | string / number | ——     | ——     |
| `padding` | 内边距 | string / number | ——     | ——     |

## Footer Attributes

| 参数      | 说明   | 类型            | 可选值 | 默认值 |
| --------- | ------ | --------------- | ------ | ------ |
| `height`  | 高度   | string / number | ——     | ——     |
| `padding` | 内边距 | string / number | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  AsideProps,
  AsideInstance,
  FooterInstance,
  FooterProps,
  HeaderInstance,
  HeaderProps,
  LayoutInstance,
  LayoutProps,
  LayoutDirection,
  MainInstance,
  MainProps
} from 'fighting-design'
```

### LayoutDirection

```ts
type LayoutDirection = 'horizontal' | 'vertical'
```

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
    background-color: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .f-aside {
    background-color: #65adf0;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .f-main {
    background-color: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
