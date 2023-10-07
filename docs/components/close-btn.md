# Close Btn 关闭按钮

想不到关闭按钮也可以如此精致吧？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/close-btn)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/close-btn.md)

## 基本使用

插槽插入一个 `svg-icon` 即可

::: demo

<template #source>
<f-close-btn :icon="FIconCross" />
</template>

```html
<template>
  <f-close-btn :icon="FIconCross" />
</template>

<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>
```

:::

## 禁用状态

`disabled` 可禁用一个关闭按钮

::: demo

<template #source>
<f-close-btn disabled :icon="FIconCross" />
</template>

```html
<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-close-btn disabled :icon="FIconCross" />
</template>
```

:::

## Attributes

| 参数          | 说明               | 类型                                                               | 可选值 | 默认值 |
| ------------- | ------------------ | ------------------------------------------------------------------ | ------ | ------ |
| `size`        | 自定义尺寸         | string / number                                                    | ——     | ——     |
| `round`       | 是否为圆角的       | boolean                                                            | ——     | false  |
| `disabled`    | 是否禁用           | boolean                                                            | ——     | false  |
| `color`       | 自定义颜色         | string                                                             | ——     | ——     |
| `hover-color` | 鼠标移入的颜色     | string                                                             | ——     | ——     |
| `icon`        | 自定义 icon        | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `on-click`    | 点击之后执行的回调 | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——     | ——     |

## Slots

| 名称      | 说明                     |
| --------- | ------------------------ |
| `default` | 默认插槽，自定义关闭按钮 |

## Interface

组件导出以下类型定义：

```ts
import type { CloseBtnInstance, CloseBtnProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>
