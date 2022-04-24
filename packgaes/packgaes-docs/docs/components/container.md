# Container 布局容器

## 基本使用

用于布局的容器组件，方便快速搭建页面的基本结构：

`<tyh-container>`：外层容器

`<tyh-header>`：顶栏容器

`<tyh-aside>`：侧边栏容器

`<tyh-main>`：主要区域容器

`<tyh-footer>`：底栏容器

常见页面布局

<div>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>
</div>

<div>
  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
</div>

```html
<template>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
</template>

<style scoped>
  .tyh-header,
  .tyh-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .tyh-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .tyh-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .tyh-container {
    margin-bottom: 40px;
  }

  .tyh-container:nth-child(5) .tyh-aside,
  .tyh-container:nth-child(6) .tyh-aside {
    line-height: 260px;
  }

  .tyh-container:nth-child(7) .tyh-aside {
    line-height: 320px;
  }
</style>
```

## Attributes

tyh-container

| 参数      | 说明             | 类型   | 可选值                | 默认值 |
| --------- | ---------------- | ------ | --------------------- | ------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | ——     |

tyh-header

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | ——     | 60px   |

tyh-aside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | ——     | 200px  |

tyh-footer

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | ——     | 60px   |

<style scoped>
  .tyh-header,
  .tyh-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .tyh-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .tyh-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .tyh-container {
    margin-bottom: 40px;
  }

  .tyh-container:nth-child(5) .tyh-aside,
  .tyh-container:nth-child(6) .tyh-aside {
    line-height: 260px;
  }

  .tyh-container:nth-child(7) .tyh-aside {
    line-height: 320px;
  }
</style>
