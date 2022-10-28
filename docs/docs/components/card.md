# Card 卡片

`Card` 是一个卡片，用于展示内容

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/card.md)

## 基本使用

`title` 属性可以配置卡片的标题

<f-card title="卡片标题">Card 卡片</f-card>

::: details 显示代码

```html
<f-card title="卡片标题">Card 卡片</f-card>
```

:::

## 圆角卡片

`round` 是否为圆角卡片

<f-card round title="圆角的">Card 卡片</f-card>

::: details 显示代码

```html
<f-card round title="圆角的">Card 卡片</f-card>
```

:::

## 不同状态

`shadow` 属性可以配置阴影样式

<f-card shadow="never">从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">总是显示</f-card>

::: details 显示代码

```html
<f-card shadow="never">从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">总是显示</f-card>
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                   | 默认值 |
| --------- | -------------- | ------- | ------------------------ | ------ |
| `title`   | 卡片标题       | string  | ——                       | ——     |
| `round`   | 是否为圆角卡片 | boolean | ——                       | false  |
| `padding` | 卡片内边距     | string  | ——                       | 20px   |
| `shadow`  | 阴影样式       | string  | `never` `hover` `always` | always |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 默认内容   |
| `header`  | 自定义头部 |

## Interface

组件导出以下类型定义：

```ts
import type {
  CardInstance,
  CardPropsType,
  CardShadowType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/konvyi" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/44802220?v=4" />
</a>

<style scoped>
  .f-card {
    margin: 15px;
  }
</style>
