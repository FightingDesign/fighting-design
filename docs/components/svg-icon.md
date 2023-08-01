# Svg Icon 图标

使用 svg 的图标库

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/svg-icon)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/svg-icon.md)

## 使用之前

在使用 `svg-icon` 组件之前，需要先进行安装

```shell
# pnpm
pnpm add --save-dev @fighting-design/fighting-icon

# npm
npm i --save-dev @fighting-design/fighting-icon

# yarn
yarn add --save-dev @fighting-design/fighting-icon
```

## 你需要注意

- `svg-icon` 同时支持 `icon` 配置项和默认插槽来实现 `icon` 的展示，但 `icon` 配置项的优先级高于插槽
- Fighting Design 内部其它一切依赖 `svg-icon` 的所有组件，都依赖这个规则

## 贡献

Fighting Design 使用 [icones](https://icones.js.org) 作为图标库，如下面图表满足不了当前的需求，可进行贡献，贡献指南参考 [CONTRIBUTING.md](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-icon/CONTRIBUTING.md)

## 基本使用

`f-svg-icon` 需要插入一个 `svg`

`color` 和 `size` 属性可分别对于颜色和字体大小进行配置

它同时支持 `icon` 属性传递和插槽

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-svg-icon>
    <f-icon-apps />
  </f-svg-icon>

  <f-svg-icon color="red">
    <f-icon-bluetooth />
  </f-svg-icon>

  <f-svg-icon size="34px" :icon="FIconBook" />
</template>

<script lang="ts" setup>
  import { FIconApps, FIconBluetooth, FIconBook } from '@fighting-design/fighting-icon'
</script>
```

:::

## 集合

`svg-icon` 集合，**点击即可直接复制**，共收入 {{num}} 个图标

<demo2-vue />

## Attributes

| 参数       | 说明           | 类型                                                               | 可选值 | 默认值 |
| ---------- | -------------- | ------------------------------------------------------------------ | ------ | ------ |
| `color`    | icon 颜色      | string                                                             | ——     | ——     |
| `size`     | icon 大小      | string / number                                                    | ——     | ——     |
| `icon`     | icon 内容      | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `on-click` | 点击触发的回调 | <a href="/components/interface.html#HandleMouse">HandleMouse</a>   | ——     | ——     |

## Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | icon 的内容 |

## Interface

组件导出以下类型定义：

```ts
import type { SvgIconInstance, SvgIconProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './demos/svg-icon/demo1.vue'
  import demo2Vue from './demos/svg-icon/demo2.vue'
  import Svg from '@fighting-design/fighting-icon'

  const num = Object.keys(Svg).length
</script>
