# Breadcrumb 面包屑

`Breadcrumb` 用于管理页面的导航链接

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/breadcrumb)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/breadcrumb.md)

## 基本使用

`f-breadcrumb` 的基本使用

<f-breadcrumb>
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb>
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义样式

`separator-color` 可以自定义隔符颜色

`item-color` 可以配置导航文字颜色

<f-breadcrumb separator-color="#333" item-color="blue">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb separator-color="#333" item-color="blue">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义分隔符

`separator-icon` 属性可以自定义分隔符

<f-breadcrumb separator-icon="f-icon-arrow-right">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb separator-icon="f-icon-arrow-right">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定展示 icon

`f-breadcrumb-item` 组件内可以添加 `icon` 作为导航名。

<f-breadcrumb>
  <f-breadcrumb-item>
    <f-icon size="16px" icon="f-icon-collection" />
  </f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb>
  <f-breadcrumb-item>
    <f-icon size="16px" icon="f-icon-collection" />
  </f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## 自定义尺寸

`font-size` 可以自定义你想要的文字大小

<f-breadcrumb font-size="18px">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>

::: details 显示代码

```html
<f-breadcrumb font-size="18px">
  <f-breadcrumb-item>首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>
</f-breadcrumb>
```

:::

## Breadcrumb Attractive

| 属性              | 说明           | 类型     | 可选值 | 默认值 |
| ----------------- | -------------- | -------- | ------ | ------ |
| `separator`       | 分隔符         | `string` | ——     | /      |
| `icon-separator`  | icon 分隔符    | `string` | ——     | ——     |
| `separator-color` | 分隔符颜色     | `string` | ——     | ——     |
| `item-color`      | 页面元素分隔符 | `string` | ——     | ——     |
| `font-size`       | 自定义文字大小 | `string` | ——     | ——     |

## Breadcrumb Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

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
