# Tree 树

树形结构

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tree)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/tree.md)

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

## 禁用指定项

数据中使用 `disabled` 可以禁用指定项

::: demo

<template #source>
<f-tree :data="data2" />
</template>

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const data2 = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          disabled: true,
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
      label: 'Node 3',
      disabled: true
    }
  ])
</script>

<template>
  <f-tree :data="data2" />
</template>
```

:::

## 多选状态

使用 `is-check` 配置项可配置多选，`v-model:check` 可获得选中的值

数据中可以使用 `value` 自定义选中返回的内容，默认为 label

::: demo

<template #source>
{{checkLabels}}
<f-tree :data="data3" is-check v-model:check="checkLabels" />
</template>

```vue
<script lang="ts" setup>
  import { ref } from 'vue'

  const checkLabels = ref([])

  const data3 = ref([
    {
      label: 'Node 1',
      value: '选择1',
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
      value: '选择2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3',
      value: 333
    }
  ])
</script>

<template>
  {{ checkLabels }}
  <f-tree v-model:check="checkLabels" :data="data3" is-check />
</template>
```

:::

## 自定义 icon

数据中可以使用 `icon` 自定义图标

::: demo

<template #source>
<f-tree :data="data4" />
</template>

```vue
<script lang="ts" setup>
  import { ref, h } from 'vue'
  import { FIconAppsMinus, FIconCandy, FIconClover } from '@fighting-design/fighting-icon'

  const data4 = ref([
    {
      label: 'Node 1',
      icon: h(FIconClover),
      children: [
        {
          label: 'Node 1-1',
          icon: h(FIconClover),
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        {
          label: 'Node 1-3',
          children: [
            { label: 'Node 1-3-1' },
            { label: 'Node 1-3-2' },
            { label: 'Node 1-3-3' }
          ]
        }
      ]
    },
    {
      label: 'Node 2',
      icon: h(FIconAppsMinus),
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3',
      icon: h(FIconCandy)
    }
  ])
</script>

<template>
  <f-tree :data="data4" />
</template>
```

:::

## 自定义缩进量

`offset` 配置项可配置子节点的缩进偏移量

::: demo

<template #source>
<f-tree :data="data" :offset="60" />
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
  <f-tree :data="data" :offset="60" />
</template>
```

:::

## 点击的回调

`on-click-label` 配置项传入一个方法，接收 5 个参数，分别是：事件对象、当前的元素数据、打开状态、格式化后的树形数据

::: demo

<template #source>
<f-tree :data="data" :on-click-label="onClickLabel" />
</template>

```vue
<script lang="ts" setup>
  import { ref } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { TreeClickLabel } from 'fighting-design'

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

  const onClickLabel: TreeClickLabel = (evt, model, isOpen, tree): void => {
    console.log(evt, model, isOpen, tree)
    FMessage(`evt:${evt}、model:${model}、isOpen:${isOpen}、tree:${tree}`)
  }
</script>

<template>
  <f-tree :data="data" :on-click-label="onClickLabel" />
</template>
```

:::

## Attributes

| 参数             | 说明               | 类型                                                              | 可选值 | 默认值 |
| ---------------- | ------------------ | ----------------------------------------------------------------- | ------ | ------ |
| `data`           | 树形数据           | <a href="/components/tree.html#treedata">TreeData</a>             | ——     | []     |
| `is-check`       | 是否可多选         | boolean                                                           | ——     | false  |
| `offset`         | 子节点缩进偏移量   | number                                                            | ——     | 40     |
| `on-click-label` | 点击标签执行的回调 | <a href="/components/tree.html#treeclicklabel">TreeClickLabel</a> | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  TreeInstance,
  TreeProps,
  TreeDataItem,
  TreeData,
  TreeClickLabel,
  TreeItemModel
} from 'fighting-design'
```

### TreeDataItem

```ts
/**
 * 树形结构每一项类型接口
 *
 * @param { string } label label
 * @param { number | string } value 多选 checkbox 绑定的值
 * @param { boolean } disabled 是否禁用当前标签
 * @param { Object } icon 自定义 icon
 * @param { Array } [children] 孩子节点
 */
export interface TreeDataItem {
  label: string
  value?: number | string
  disabled?: boolean
  icon?: FightingIcon
  children?: TreeDataItem[]
}
```

### TreeData

```ts
/** 树形结构数组类型 */
export type TreeData = TreeDataItem[]
```

### TreeClickLabel

```ts
/**
 * 点击每一项 label 执行的回调方法类型
 *
 * @param { Object } evt 事件对象
 * @param { string } label label
 * @param { number } level 层级
 * @param { Object } isOpen 展开状态
 * @param { Array } tree 格式化后的树形数据
 */
export type TreeClickLabel = (
  evt: MouseEvent,
  model: TreeItemModel,
  isOpen: boolean,
  tree: TreeItemModel[]
) => void
```

### TreeItemModel

```ts
/**
 * 子数每一项的类型接口
 *
 * @param { string } label 标签
 * @param { number } __level 层级
 * @param { number | string } value 多选 checkbox 绑定的值
 * @param { boolean } disabled 是否禁用
 * @param { Array } [children] 子节点
 */
export interface TreeItemModel {
  label: string
  __level: number
  icon?: FightingIcon
  value?: number | string
  disabled?: boolean
  children?: TreeItemModel[]
}
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref, h } from 'vue'
  import { FIconAppsMinus, FIconCandy, FIconClover } from '@fighting-design/fighting-icon'
  import { FMessage } from 'fighting-design'
  import type { TreeClickLabel } from 'fighting-design'

  const checkLabels = ref([])

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

   const data2 = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          disabled: true,
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
      label: 'Node 3',
      disabled: true
    }
  ])

  const data3 = ref([
    {
      label: 'Node 1',
      value: '选择1',
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
      value: '选择2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3',
      value: 333
    }
  ])

  const data4 = ref([
    {
      label: 'Node 1',
      icon: h(FIconClover),
      children: [
        {
          label: 'Node 1-1',
          icon: h(FIconClover),
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        {
          label: 'Node 1-3',
          children: [
            { label: 'Node 1-3-1' },
            { label: 'Node 1-3-2' },
            { label: 'Node 1-3-3' }
          ]
        }
      ]
    },
    {
      label: 'Node 2',
      icon: h(FIconAppsMinus),
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3',
      icon: h(FIconCandy)
    }
  ])

  const onClickLabel = (evt, model, isOpen, tree) => {
    console.log(evt, model, isOpen, tree)
    FMessage(`evt:${evt}、model:${model}、isOpen:${isOpen}、tree:${tree}`)
  }
</script>
