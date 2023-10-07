# List 列表

展示你的列表信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/list)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/list.md)

## 基本使用

列表的基本使用

::: demo

<template #source>
<f-list>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
</f-list>
</template>

```html
<f-list>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
</f-list>
```

:::

## 斑马纹

`zebra` 属性可以配置斑马纹

::: demo

<template #source>
<f-list zebra>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
</f-list>
</template>

```html
<f-list zebra>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
</f-list>
```

:::

## 居中显示

`center` 属性可以居中显示文本

::: demo

<template #source>
<f-list center>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
<f-list-item>这是一段文字</f-list-item>
</f-list>

</template>

```html
<f-list center>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
  <f-list-item>这是一段文字</f-list-item>
</f-list>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的列表

::: demo

<template #source>
<f-list size="large">
<f-list-item>这是大号尺寸列表</f-list-item>
<f-list-item>这是大号尺寸列表</f-list-item>
</f-list>

<f-list size="middle">
<f-list-item>这是中号尺寸列表</f-list-item>
<f-list-item>这是中号尺寸列表</f-list-item>
</f-list>

<f-list size="small">
<f-list-item>这是小号尺寸列表</f-list-item>
<f-list-item>这是小号尺寸列表</f-list-item>
</f-list>

<f-list size="mini">
<f-list-item>这是迷你尺寸列表</f-list-item>
<f-list-item>这是迷你尺寸列表</f-list-item>
</f-list>
</template>

```html
<f-list size="large">
  <f-list-item>这是大号尺寸列表</f-list-item>
  <f-list-item>这是大号尺寸列表</f-list-item>
</f-list>

<f-list size="middle">
  <f-list-item>这是中号尺寸列表</f-list-item>
  <f-list-item>这是中号尺寸列表</f-list-item>
</f-list>

<f-list size="small">
  <f-list-item>这是小号尺寸列表</f-list-item>
  <f-list-item>这是小号尺寸列表</f-list-item>
</f-list>

<f-list size="mini">
  <f-list-item>这是迷你尺寸列表</f-list-item>
  <f-list-item>这是迷你尺寸列表</f-list-item>
</f-list>
```

:::

## List Attributes

| 参数           | 说明             | 类型                                                               | 可选值                          | 默认值 |
| -------------- | ---------------- | ------------------------------------------------------------------ | ------------------------------- | ------ |
| `zebra`        | 是否显示斑马纹   | boolean                                                            | ——                              | false  |
| `zebra-color`  | 自定义斑马纹颜色 | string                                                             | ——                              | ——     |
| `center`       | 是否居中         | boolean                                                            | ——                              | false  |
| `text-color`   | 自定义文字颜色   | string                                                             | ——                              | ——     |
| `border-color` | 自定义边框颜色   | string                                                             | ——                              | ——     |
| `size`         | 尺寸             | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle |
| `max-height`   | 最大高度         | string / number                                                    | ——                              | ——     |

## List Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 默认插槽   |
| `header`  | 自定义头部 |
| `footer`  | 自定义页脚 |

## ListItem Attributes

| 参数         | 说明           | 类型   | 可选值 | 默认值 |
| ------------ | -------------- | ------ | ------ | ------ |
| `background` | 自定义背景色   | string | ——     | ——     |
| `color`      | 自定义文字颜色 | string | ——     | ——     |

## ListItem Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认插槽 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ListInstance,
  ListProps,
  ListItemInstance,
  ListItemProps
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/HYzihong" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/50621078?v=4" />
</a>
