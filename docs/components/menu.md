# Menu 导航菜单

多功能导航菜单栏

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/menu)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/menu.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

::: demo

<template #source>
<f-menu active-name="1">
<template #before>
<f-avatar round src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg" size="mini" />
</template>

<f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
<f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
<f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

<f-submenu>
<template #title> 选项列表 </template>
<f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
<f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
<f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
</f-submenu>

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
  <f-menu active-name="1">
    <template #before>
      <f-avatar
        round
        src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

    <f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
    <f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
    <f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
    </f-submenu>

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

## 不同模式

`mode` 属性可配置不同模式

:::demo

<template #source>

<h3>垂直的</h3>
<f-menu mode="vertical" active-name="1">
<template #before>
<f-avatar round src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg" size="mini" />
</template>

<f-menu-item disabled name="1" :icon="FIconApps">首页</f-menu-item>
<f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
<f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

<f-submenu>
<template #title> 选项列表 </template>
<f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
<f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
<f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
</f-submenu>

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

<h3>内联的</h3>

<f-menu mode="inline" active-name="2-1">
<template #before>
<f-avatar round src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg" size="mini" />
</template>

<f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
<f-submenu>
<template #title> 选项列表 </template>
<f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
<f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
<f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
</f-submenu>

<f-menu-item-group title="选项列表">
<f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
<f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
<f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
</f-menu-item-group>

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
  <h3>垂直的</h3>
  <f-menu mode="vertical" active-name="1">
    <template #before>
      <h1>123</h1>
    </template>

    <f-menu-item disabled name="1" :icon="FIconApps">首页</f-menu-item>
    <f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
    <f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
    </f-submenu>

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

  <br />
  <br />
  <br />

  <h3>内联的</h3>

  <f-menu mode="inline" active-name="2-1">
    <template #before>
      <h1>123</h1>
    </template>

    <f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
    </f-submenu>

    <f-menu-item-group title="选项列表">
      <f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
    </f-menu-item-group>

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

| 参数                 | 说明                        | 类型                                       | 可选值                           | 默认值     |
| -------------------- | --------------------------- | ------------------------------------------ | -------------------------------- | ---------- |
| `mode`               | 不同模式                    | <a href="#menumode">MenuMode</a>           | `horizontal` `vertical` `inline` | horizontal |
| `active-name`        | 默认激活的 name             | string / number                            | ——                               | ——         |
| `on-menu-item-click` | 点击 `f-menu-item` 时的回调 | <a href="#menuitemclick">MenuItemClick</a> | ——                               | ——         |
| `on-submenu-click`   | 点击 `f-submenu` 时的回调   | <a href="#submenuclick">SubmenuClick</a>   | ——                               | ——         |

## MenuItem Attributes

| 参数        | 说明        | 类型                                                               | 可选值 | 默认值 |
| ----------- | ----------- | ------------------------------------------------------------------ | ------ | ------ |
| `icon`      | 自定义 icon | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `font-size` | 文字大小    | string / number                                                    | ——     | ——     |
| `color`     | 文字颜色    | string                                                             | ——     | ——     |
| `to`        | 跳转的路径  | string                                                             | ——     | ——     |
| `name`      | 唯一标识    | string / number                                                    | ——     | ——     |
| `disabled`  | 是否禁用    | boolean                                                            | ——     | false  |

## MenuItemGroup Attributes

| 参数    | 说明 | 类型   | 可选值 | 默认值 |
| ------- | ---- | ------ | ------ | ------ |
| `title` | 标题 | string | ——     | ——     |

## Submenu Attributes

| 参数       | 说明     | 类型    | 可选值 | 默认值 |
| ---------- | -------- | ------- | ------ | ------ |
| `disabled` | 是否禁用 | boolean | ——     | false  |
| `opened`   | 是否展开 | boolean | ——     | false  |

## Menu Slots

| 名称      | 说明             |
| --------- | ---------------- |
| `default` | 默认插入的内容   |
| `before`  | 主内容之前的内容 |
| `after`   | 主内容之后的内容 |

## MenuItem Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 默认插入的内容 |

## MenuItem Group Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 默认插入的内容 |

## Submenu Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 默认插入的内容 |
| `title`   | 标题内容       |

## Interface

组件导出以下类型定义：

```ts
import type {
  MenuInstance,
  MenuProps,
  MenuMode,
  MenuItemClick,
  SubmenuClick,
  MenuItemInstance,
  MenuItemProps,
  FMenuItemGroup,
  MenuItemGroupProps,
  SubmenuInstance,
  SubmenuProps
} from 'fighting-design'
```

### MenuMode

```ts
type MenuMode = 'horizontal' | 'vertical' | 'inline'
```

### MenuItemClick

```ts
type MenuItemClick = (name: string, evt: MouseEvent) => void
```

### SubmenuClick

```ts
type SubmenuClick = (target: boolean, evt: MouseEvent) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  import { FIconApps, FIconBlock, FIconCameraVideoSlash, FIconClock } from '@fighting-design/fighting-icon'
</script>
