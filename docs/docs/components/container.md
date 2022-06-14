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

<f-container>
  <f-aside>Aside</f-aside>
  <f-main>Main</f-main>
</f-container>

<f-container>
  <f-header>Header</f-header>
  <f-container>
    <f-aside>Aside</f-aside>
    <f-main>Main</f-main>
  </f-container>
</f-container>

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

<f-container>
  <f-aside>Aside</f-aside>
  <f-container>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
  </f-container>
</f-container>

<f-container>
  <f-aside>Aside</f-aside>
  <f-container>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
    <f-footer>Footer</f-footer>
  </f-container>
</f-container>

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

<style scoped>
  .f-header,
  .f-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .f-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .f-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .f-container {
    margin-bottom: 40px;
  }

  .f-container:nth-child(5) .f-aside,
  .f-container:nth-child(6) .f-aside {
    line-height: 260px;
  }

  .f-container:nth-child(7) .f-aside {
    line-height: 320px;
  }
</style>
