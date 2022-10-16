# Svg Icon 图标

svg icon

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/svg-icon)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/svg-icon.md)

## 使用之前

在使用 `svg-icon` 组件之前，需要先进行安装

```shell
# pnpm
pnpm add @fighting-design/fighting-icon

# npm
npm i @fighting-design/fighting-icon

# yarn
yarn add @fighting-design/fighting-icon
```

## 基本使用

`f-svg-icon` 需要插入一个 `svg`

`color` 和 `size` 属性可分别对于颜色和字体大小进行配置

<demo1-vue />

::: details 显示代码

```html
<template>
  <f-svg-icon>
    <f-icon-apps />
  </f-svg-icon>

  <f-svg-icon color="red">
    <f-icon-bluetooth />
  </f-svg-icon>

  <f-svg-icon size="34px">
    <f-icon-book />
  </f-svg-icon>
</template>

<script lang="ts" setup>
  import {
    FIconApps,
    FIconBluetooth,
    FIconBook
  } from '@fighting-design/fighting-icon'
</script>
```

:::

## Attributes

| 参数    | 说明          | 类型            | 可选值 | 默认值 |
| ------- | ------------- | --------------- | ------ | ------ |
| `color` | icon 颜色     | string          | ——     | ——     |
| `size`  | icon 字体大小 | string / number | ——     | 21px   |

## Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | icon 的内容 |

## Events

| 事件名称 | 说明     |
| -------- | -------- |
| `click`  | 点击触发 |

## 集合

`svg-icon` 集合列表

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import demo1Vue from './_demos/svg-icon/demo1.vue'
</script>
