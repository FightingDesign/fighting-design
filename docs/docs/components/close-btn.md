# Close Btn 关闭按钮

想不到关闭按钮也可以如此精致吧？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/close-btn)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/close-btn.md)

## 基本使用

插槽插入一个 `svg-icon` 即可

<f-close-btn>
  <f-icon-cross />
</f-close-btn>

::: details 显示代码

```html
<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-close-btn>
    <f-icon-cross />
  </f-close-btn>
</template>
```

:::

## 禁用状态

`disabled` 可禁用一个关闭按钮

<f-close-btn disabled>
  <f-icon-cross />
</f-close-btn>

::: details 显示代码

```html
<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-close-btn disabled>
    <f-icon-cross />
  </f-close-btn>
</template>
```

:::

## Attributes

| 参数       | 说明         | 类型                       | 可选值 | 默认值 |
| ---------- | ------------ | -------------------------- | ------ | ------ |
| `size`     | 自定义尺寸   | string / number            | ——     | ——     |
| `round`    | 是否为圆角的 | boolean                    | ——     | false  |
| `disabled` | 是否禁用     | boolean                    | ——     | false  |
| `color`    | 自定义颜色   | string                     | ——     | ——     |
| `icon`     | 自定义 icon  | object (VNode / Component) | ——     | null   |

## Slots

| 名称      | 说明                     |
| --------- | ------------------------ |
| `default` | 默认插槽，自定义关闭按钮 |

## Interface

组件导出以下类型定义：

```ts
import type { CloseBtnInstance, CloseBtnPropsType } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import { FIconCross } from '../../../packages/fighting-icon/index.ts'
</script>
