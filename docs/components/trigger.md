# Trigger 触发器

需要触发才能实现的下拉菜单

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/trigger)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/trigger.md)

## 基本使用

`trigger` 属性可配置不同的触发方式，默认插槽展示触发器，`content` 插槽插入弹出内容

::: demo

<template #source>
<f-trigger trigger="hover">
<f-button type="primary">hover 触发</f-button>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
</template>
</f-trigger>

<f-trigger trigger="click" style="margin-left: 120px">
<f-button type="primary">click 触发</f-button>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
</template>
</f-trigger>
</template>

```html
<f-trigger trigger="hover">
  <f-button type="primary">hover 触发</f-button>

  <template #content>
    <f-empty content="在这里，后续提供更多服务" />
  </template>
</f-trigger>

<f-trigger trigger="click" style="margin-left: 120px">
  <f-button type="primary">click 触发</f-button>

  <template #content>
    <f-empty content="在这里，后续提供更多服务" />
  </template>
</f-trigger>
```

:::

## 多层嵌套

也可以多层嵌套实现

::: demo

<template #source>
<f-trigger trigger="click">
<f-text type="primary">click 触发</f-text>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
<f-trigger trigger="click">
<f-text type="primary">click 触发</f-text>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
<f-trigger trigger="click">
<f-text type="primary">click 触发</f-text>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
</template>
</f-trigger>
</template>
</f-trigger>
</template>
</f-trigger>
</template>

```html
<f-trigger trigger="click">
  <f-text type="primary">click 触发</f-text>

  <template #content>
    <f-empty content="在这里，后续提供更多服务" />
    <f-trigger trigger="click">
      <f-text type="primary">click 触发</f-text>

      <template #content>
        <f-empty content="在这里，后续提供更多服务" />
        <f-trigger trigger="click">
          <f-text type="primary">click 触发</f-text>

          <template #content>
            <f-empty content="在这里，后续提供更多服务" />
          </template>
        </f-trigger>
      </template>
    </f-trigger>
  </template>
</f-trigger>
```

:::

## 自定义动画时长

`enter-duration` 和 `leave-duration` 属性可自定义动画时长

::: demo

<template #source>
<f-trigger trigger="click" :enter-duration="0.4" :leave-duration="0.4">
<f-text type="primary">click 触发</f-text>

<template #content>
<f-empty content="在这里，后续提供更多服务" />
</template>
</f-trigger>
</template>

```html
<f-trigger trigger="click" :enter-duration="0.4" :leave-duration="0.4">
  <f-text type="primary">click 触发</f-text>

  <template #content>
    <f-empty content="在这里，后续提供更多服务" />
  </template>
</f-trigger>
```

:::

## Attributes

| 参数             | 说明                     | 类型                                                               | 可选值          | 默认值 |
| ---------------- | ------------------------ | ------------------------------------------------------------------ | --------------- | ------ |
| `spacing`        | 触发器和内容之间的间距   | string / number                                                    | ——              | ——     |
| `disabled`       | 是否禁用                 | boolean                                                            | ——              | false  |
| `trigger`        | 触发方式                 | <a href="#triggertrigger">TriggerTrigger</a>                       | `hover` `click` | hover  |
| `width`          | 自定义宽度               | string / number                                                    | ——              | ——     |
| `arrow`          | 是否带有箭头             | boolean                                                            | ——              | false  |
| `enter-duration` | 弹出动画持续时间         | number                                                             | ——              | ——     |
| `leave-duration` | 关闭动画持续时间         | number                                                             | ——              | ——     |
| `on-change`      | 弹窗状态改变时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——              | ——     |
| `on-open`        | 弹窗状态打开时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——              | ——     |
| `on-close`       | 弹窗状态关闭时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——              | ——     |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 触发器内容 |
| `content` | 弹出内容   |

## Methods

| 参数    | 说明       |
| ------- | ---------- |
| `close` | 关闭触发器 |

## Interface

组件导出以下类型定义：

```ts
import type { TriggerInstance, TriggerProps, TriggerTrigger } from 'fighting-design'
```

### TriggerTrigger

```ts
type TriggerTrigger = 'hover' | 'click'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
