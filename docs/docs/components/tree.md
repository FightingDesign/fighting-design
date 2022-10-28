# Tree 树

树形结构

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tree)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tree.md)

:::warning
开发中，暂未实现
:::

## 基本使用

需要传入一个 `data` 的树形结构来展示

<f-tree :data="data" />

::: details 显示代码

```html
<template>
  <f-tree :data="data" />
</template>

<script lang="ts" setup>
  const data = [
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
      ]
    },
    { label: 'Node 2' }
  ]
</script>
```

:::

## Attributes

| 参数   | 说明 | 类型  | 可选值 | 默认值 |
| ------ | ---- | ----- | ------ | ------ |
| `data` | 数据 | array | ——     | array  |

## Interface

组件导出以下类型定义：

```ts
import type { FTreeInstance, treeDataInterface } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  const data = [
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
      ]
    },
    { label: 'Node 2' }
  ]
</script>
