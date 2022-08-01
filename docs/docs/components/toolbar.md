# Toolbar 工具栏

`Toolbar` 工具栏组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/toolbar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/toolbar.md)

## 基本使用

工具栏子组件

<f-toolbar>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-email" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-editor" />
  </f-toolbar-item>
</f-toolbar>

```html
<f-toolbar>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-default-template" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-Customermanagement" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-email" />
  </f-toolbar-item>
  <f-toolbar-item>
    <f-icon size="30px" icon="f-icon-editor" />
  </f-toolbar-item>
</f-toolbar>
```

## 不同大小

`size` 属性可以配置不同的大小

<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>

::: details 显示代码

```html
<f-toolbar size="large">大型工具栏</f-toolbar>
<f-toolbar size="middle">中型工具栏</f-toolbar>
<f-toolbar size="small">小型工具栏</f-toolbar>
<f-toolbar size="mini">迷你工具栏</f-toolbar>
```

:::

## 圆角

`round` 属性为圆角

<f-toolbar round>圆角</f-toolbar>

::: details 显示代码

```html
<f-toolbar round>圆角</f-toolbar>
```

:::

## 背景色

`background` 属性为背景色

<f-toolbar background="#42B883">圆角</f-toolbar>
<f-toolbar background="#589EF8">圆角</f-toolbar>
<f-toolbar background="#BABABB">圆角</f-toolbar>
<f-toolbar background="#DBDBDB">圆角</f-toolbar>
<f-toolbar background="#F2F3F5">圆角</f-toolbar>

::: details 显示代码

```html
<f-toolbar background="#42B883">圆角</f-toolbar>
<f-toolbar background="#589EF8">圆角</f-toolbar>
<f-toolbar background="#BABABB">圆角</f-toolbar>
<f-toolbar background="#DBDBDB">圆角</f-toolbar>
<f-toolbar background="#F2F3F5">圆角</f-toolbar>
```

:::

## Attributes

| 参数          | 说明                                                 | 类型    | 可选值                  | 默认值 |
| ------------- | ---------------------------------------------------- | ------- | ----------------------- | ------ |
| `size`        | 文字大小，必须写入指定的数值和单位                   | string  | large middle small mini | large  |
| `round`       | 显示为圆角                                           | boolean | ——                      | false  |
| `background`  | 背景颜色                                             | string  | ——                      | ——     |
| `text-color`  | 字体颜色                                             | string  | ——                      | ——     |
| `fixed`       | 是否固定定位                                         | boolean | ——                      | false  |
| `fixed-style` | 固定定位的样式，仅支持 `top` `right` `button` `left` | {}      | ——                      |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/ECO-M" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/23503047?v=4" />
</a>

<style scoped>
.f-toolbar {
  margin: 10px 0;
}
</style>
