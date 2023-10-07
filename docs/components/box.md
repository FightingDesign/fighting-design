# Box 盒子

万能的盒子元素

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/box)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/box.md)

## 基本使用

可以直接将它当做 div 来使用，它支持一些原生的常用属性配置

::: demo

<template #source>
<f-box width="200px" height="200px" padding="30px" background="skyblue">hello</f-box>
</template>

```html
<f-box width="200px" height="200px" padding="30px" background="skyblue">hello</f-box>
```

:::

## Attributes

| 参数         | 说明                                                                                    | 类型            | 可选值 | 默认值 |
| ------------ | --------------------------------------------------------------------------------------- | --------------- | ------ | ------ |
| `role`       | 原生属性 [Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) | string          | ——     | ——     |
| `padding`    | 内边距                                                                                  | string / number | ——     | ——     |
| `width`      | 宽度                                                                                    | string / number | ——     | ——     |
| `height`     | 高度                                                                                    | string / number | ——     | ——     |
| `background` | 自定义背景色                                                                            | string          | ——     | ——     |
| `display`    | 原生属性                                                                                | string          | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { BoxInstance, BoxProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
