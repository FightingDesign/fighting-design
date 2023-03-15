# Tree 树

树形结构

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tree)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tree.md)

:::danger
组件仍在测试阶段，高频更新中，谨慎使用！
:::

## 基本使用

需要传入一个 `data` 的树形结构来展示

::: demo

<template #source>
<f-tree :data="data" />
</template>

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const data = ref([
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
    {
      label: 'Node 2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3'
    }
  ])
</script>

<template>
  <f-tree :data="data" />
</template>
```

:::

## Attributes

| 参数   | 说明 | 类型  | 可选值 | 默认值 |
| ------ | ---- | ----- | ------ | ------ |
| `data` | 数据 | array | ——     | array  |

## Interface

组件导出以下类型定义：

```ts
import type { TreeInstance, TreeProps, TreeDataItem, TreeData } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const data = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [{ label: 'Node 1-1-1' }, { label: 'Node 1-1-2' }, { label: 'Node 1-1-3' }]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
      ]
    },
    {
      label: 'Node 2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3'
    }
  ])
</script>
