# Dropdown 下拉菜单

你永远不知道下拉菜单里有什么

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/dropdown)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/dropdown.md)

## 基本使用

默认插槽可插入触发器，`content` 插槽插入展示的内容

<demo1-vue />

::: details 显示代码

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

<demo2-vue />

::: details 显示代码

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

<f-dropdown style="margin-left: 80px">
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

| 参数       | 说明                   | 类型            | 可选值 | 默认值 |
| ---------- | ---------------------- | --------------- | ------ | ------ |
| `spacing`  | 触发器和内容直接的间距 | string / number | ——     | null   |
| `disabled` | 是否禁用               | boolean         | ——     | false  |

## DropdownItem Attributes

| 参数       | 说明               | 类型     | 可选值 | 默认值 |
| ---------- | ------------------ | -------- | ------ | ------ |
| `disabled` | 是否禁用           | boolean  | ——     | false  |
| `click`    | 点击之后的回调函数 | Function | ——     | null   |

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
  DropdownPropsType,
  DropdownItemInstance,
  DropdownItemPropsType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/dropdown/demo1.vue'
  import demo2Vue from './_demos/dropdown/demo2.vue'
</script>
