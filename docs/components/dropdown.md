# Dropdown 下拉菜单

永远不知道下拉菜单里有什么

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/dropdown)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/dropdown.md)

## 基本使用

默认插槽可插入触发器，`content` 插槽插入展示的内容

::: demo

<template #source>
<demo1-vue />
</template>

```html
<f-dropdown>
  <f-button type="primary">下拉菜单</f-button>

  <template #content>
    <f-dropdown-item>猕猴桃</f-dropdown-item>
    <f-dropdown-item>哈密瓜</f-dropdown-item>
    <f-dropdown-item>火龙果</f-dropdown-item>
    <f-dropdown-item>柠檬</f-dropdown-item>
  </template>
</f-dropdown>
```

:::

## 禁用状态

::: demo

<template #source>
<demo2-vue />
</template>

```html
<f-dropdown disabled>
  <f-button>全部禁用</f-button>

  <template #content>
    <f-dropdown-item>猕猴桃</f-dropdown-item>
    <f-dropdown-item>哈密瓜</f-dropdown-item>
    <f-dropdown-item>火龙果</f-dropdown-item>
    <f-dropdown-item>柠檬</f-dropdown-item>
  </template>
</f-dropdown>

<f-dropdown style="margin-top: 20px">
  <f-button>禁用指定的</f-button>

  <template #content>
    <f-dropdown-item>猕猴桃</f-dropdown-item>
    <f-dropdown-item disabled>哈密瓜</f-dropdown-item>
    <f-dropdown-item>火龙果</f-dropdown-item>
    <f-dropdown-item>柠檬</f-dropdown-item>
  </template>
</f-dropdown>
```

:::

## Dropdown Attributes

| 参数             | 说明                     | 类型                                                                 | 可选值          | 默认值 |
| ---------------- | ------------------------ | -------------------------------------------------------------------- | --------------- | ------ |
| `spacing`        | 触发器和内容直接的间距   | string / number                                                      | ——              | ——     |
| `trigger`        | 触发方式                 | <a href="/components/trigger.html#triggertrigger">TriggerTrigger</a> | `click` `hover` | hover  |
| `disabled`       | 是否禁用                 | boolean                                                              | ——              | false  |
| `width`          | 自定义宽度               | string / number                                                      | ——              | ——     |
| `arrow`          | 是否带有箭头             | boolean                                                              | ——              | false  |
| `enter-duration` | 弹出动画持续时间         | number                                                               | ——              | ——     |
| `leave-duration` | 关闭动画持续时间         | number                                                               | ——              | ——     |
| `on-change`      | 弹窗状态改变时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a>   | ——              | ——     |
| `on-open`        | 弹窗状态打开时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a>   | ——              | ——     |
| `on-close`       | 弹窗状态关闭时触发的回调 | <a href="/components/interface.html#handlechange">HandleChange</a>   | ——              | ——     |

## DropdownItem Attributes

| 参数       | 说明               | 类型                                                             | 可选值 | 默认值 |
| ---------- | ------------------ | ---------------------------------------------------------------- | ------ | ------ |
| `disabled` | 是否禁用           | boolean                                                          | ——     | false  |
| `on-click` | 点击之后的回调函数 | <a href="/components/interface.html#handlemouse">HandleMouse</a> | ——     | ——     |

## Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 触发器内容   |
| `content` | 下拉菜单内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  DropdownInstance,
  DropdownProps,
  DropdownItemInstance,
  DropdownItemProps
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './demos/dropdown/demo1.vue'
  import demo2Vue from './demos/dropdown/demo2.vue'
</script>
