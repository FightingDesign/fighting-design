# Space 间距

设置组件之间的间距。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/space)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/space.md)

## 基本使用

`Space` 的基本使用

<f-space>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
</f-space>

::: details 显示代码

```html
<f-space>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
</f-space>
```

:::

## 间距尺寸

可使用 `spacing` 设置间距大小

<f-space style="margin-top: 15px" spacing="large">
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="middle">
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="small">
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="mini">
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
</f-space>

::: details 显示代码

```html
<f-space style="margin-top: 15px" spacing="large">
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
  <f-button type="primary">大型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="middle">
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
  <f-button type="primary">中型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="small">
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
  <f-button type="primary">小型间距</f-button>
</f-space>

<f-space style="margin-top: 15px" spacing="mini">
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
  <f-button type="primary">迷你间距</f-button>
</f-space>
```

:::

## 间距方向

可使用 `vertical` 设置间距是否为垂直方向。

<f-space vertical>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
</f-space>

::: details 显示代码

```html
<f-space vertical>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
</f-space>
```

:::

## Attributes

| 参数         | 说明           | 类型    | 可选值                          | 默认值 |
| ------------ | -------------- | ------- | ------------------------------- | ------ |
| `spacing`    | 间距尺寸       | string  | `large` `middle` `small` `mini` | middle |
| `vertical`   | 是否竖直排列   | boolean | ——                              | false  |
| `wrap`       | 是否换行       | boolean | ——                              | true   |
| `row-gap`    | 自定义纵向间距 | string  | ——                              | ——     |
| `column-gap` | 自定义横向间距 | string  | ——                              | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/godwei123" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40879937?v=4" />
</a>
