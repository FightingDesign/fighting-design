# Avatar Group 头像组

多个头像的集合

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/avatar-group)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/avatar-group.md)

## 基本使用

在 `<f-avatar-group>` 组件内部插入 `<f-avatar>` 组件

::: demo

<template #source>
<f-avatar-group>
<f-avatar text="1" font-color="#fff" background="orange" />
<f-avatar text="2" font-color="#fff" background="blue" />
<f-avatar text="3" font-color="#fff" background="skyblue" />
<f-avatar text="4" font-color="#fff" background="green" />
<f-avatar text="5" font-color="#fff" background="black" />
</f-avatar-group>
</template>

```html
<f-avatar-group>
  <f-avatar text="1" font-color="#fff" background="orange" />
  <f-avatar text="2" font-color="#fff" background="blue" />
  <f-avatar text="3" font-color="#fff" background="skyblue" />
  <f-avatar text="4" font-color="#fff" background="green" />
  <f-avatar text="5" font-color="#fff" background="black" />
</f-avatar-group>
```

:::

## 偏移量

`position-size` 可配置偏移量

::: demo

<template #source>
<f-avatar-group :position-size="10">
<f-avatar src="https://avatars.githubusercontent.com/u/73180970?v=4" />
<f-avatar src="https://avatars.githubusercontent.com/u/117809217?v=4" />
<f-avatar src="https://avatars.githubusercontent.com/u/73180970?v=4" />
<f-avatar src="https://avatars.githubusercontent.com/u/117809217?v=4" />
</f-avatar-group>
</template>

```html
<f-avatar-group :position-size="10">
  <f-avatar src="https://avatars.githubusercontent.com/u/73180970?v=4" />
  <f-avatar src="https://avatars.githubusercontent.com/u/117809217?v=4" />
  <f-avatar src="https://avatars.githubusercontent.com/u/73180970?v=4" />
  <f-avatar src="https://avatars.githubusercontent.com/u/117809217?v=4" />
</f-avatar-group>
```

:::

## Attributes

| 参数            | 说明                                                                                                     | 类型                                                                        | 可选值                                       | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- | ------ |
| `position-size` | 偏移量                                                                                                   | string / number                                                             | ——                                           | ——     |
| `round`         | 是否为圆角                                                                                               | boolean                                                                     | ——                                           | false  |
| `fit`           | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性 | <a href="/components/interface.html#fightingfit">FightingFit</a>            | `fill` `contain` `cover` `none` `scale-down` | ——     |
| `size`          | 图片大小                                                                                                 | <a href="/components/interface.html#fightingsize">FightingSize</a> / number | `large` `middle` `small` `mini`              | middle |
| `lazy`          | 是否懒加载头像                                                                                           | boolean                                                                     | ——                                           | false  |

## Slots

| 插槽名称  | 说明说明 |
| --------- | -------- |
| `default` | 默认插槽 |

## Interface

组件导出以下类型定义：

```ts
import type { AvatarGroupInstance } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
