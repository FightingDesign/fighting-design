# Menu 导航菜单

多功能导航菜单栏

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/menu)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/menu.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

::: demo

<template #source>
<f-menu>
<template #before>
<f-avatar round src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg" size="mini" />
</template>

<f-menu-item :icon="FIconApps">首页</f-menu-item>
<f-menu-item :icon="FIconBlock">选项</f-menu-item>
<f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
<f-menu-item :icon="FIconClock">操作</f-menu-item>

<template #after>
<f-dropdown>
<f-button>设置</f-button>

<template #content>
<f-dropdown-item>猕猴桃</f-dropdown-item>
<f-dropdown-item>哈密瓜</f-dropdown-item>
<f-dropdown-item>火龙果</f-dropdown-item>
<f-dropdown-item>柠檬</f-dropdown-item>
</template>
</f-dropdown>
</template>
</f-menu>
</template>

```html
<template>
  <f-menu>
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

    <f-menu-item :icon="FIconApps">首页</f-menu-item>
    <f-menu-item :icon="FIconBlock">选项</f-menu-item>
    <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
    <f-menu-item :icon="FIconClock">操作</f-menu-item>

    <template #after>
      <f-dropdown>
        <f-button>设置</f-button>

        <template #content>
          <f-dropdown-item>猕猴桃</f-dropdown-item>
          <f-dropdown-item>哈密瓜</f-dropdown-item>
          <f-dropdown-item>火龙果</f-dropdown-item>
          <f-dropdown-item>柠檬</f-dropdown-item>
        </template>
      </f-dropdown>
    </template>
  </f-menu>
</template>

<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'
</script>
```

:::

## Menu Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| ``   |      |      |        |        |

## Menu Slots

| 名称 | 说明 |
| ---- | ---- |
| ``   |      |

## Menu-Item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| ``   |      |      |        |        |

## Menu-Item Slots

| 名称 | 说明 |
| ---- | ---- |
| ``   |      |

## Interface

组件导出以下类型定义：

```ts
import type {} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
