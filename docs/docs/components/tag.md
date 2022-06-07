# Tag 标签

::: warning
该组件仍在开发测试阶段，配置项和样式随时会有较大改动！
:::

## 基本使用

`theme` 主题，有两个属性值：`dark`和`light`表示不同展示形式的标签

<f-tag theme="light" color="red">浅色模式</f-tag>
<f-tag theme="dark" color="blue">深色模式</f-tag>

::: details 显示代码

```html
<f-tag theme="light" color="red">浅色模式</f-tag>
<f-tag theme="dark" color="blue">深色模式</f-tag>
```

:::

## 色彩

`color` 自定义标签颜色

<f-tag theme="light" color="#ff0200">浅色模式</f-tag>
<f-tag theme="dark" color="#2d5af1">深色模式</f-tag>

::: details 显示代码

```html
<f-tag theme="light" color="#ff0200">浅色模式</f-tag>
<f-tag theme="dark" color="#2d5af1">深色模式</f-tag>
```

:::

## 标签大小

`size` 自定义标签大小，有`large`, `middle`, `small`, `mini`四个可选值

<f-tag theme="light" color="#909399" size="large">大标签</f-tag>
<f-tag theme="dark" color="blue" size="middle">中等标签</f-tag>
<f-tag theme="light" size="small">小标签</f-tag>
<f-tag theme="dark" color="#2d5af1" size="mini">超小标签</f-tag>

::: details 显示代码

```html
<f-tag theme="light" size="large">大标签</f-tag>
<f-tag theme="dark" color="blue" size="middle">中等标签</f-tag>
<f-tag theme="light" size="small">小标签</f-tag>
<f-tag theme="dark" color="#2d5af1" size="mini">超小标签</f-tag>
```

:::

## 是否可关闭

`closable` 表示标签是否可以被关闭

<f-tag theme="light" color="blue" size="large" closable="true">标签</f-tag>

::: details 显示代码

```html
<f-tag theme="light" color="blue" size="large" closable="true">标签</f-tag>
```

:::

## Tag Attributes

| 参数       | 说明       | 类型    | 可选值                            | 默认值  |
| ---------- | ---------- | ------- | --------------------------------- | ------- |
| `theme`    | 标签主题   | string  | `light`, `dark`                   | light   |
| `color`    | 标签颜色   | string  | ——                                | #bdc3c7 |
| `closable` | 是否可关闭 | boolean | ——                                | false   |
| `size`     | 标签大小   | string  | `large`, `middle`, `small` `mini` | middle  |

<style scoped>
.f-tag {
  margin: 5px;
}
</style>
