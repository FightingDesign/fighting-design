# Table 表格

将数据格式化

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/table)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/table.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

`data` 属性绑定需要展示的数据

`columns` 属性配置表格的头部内容，其中 `title` 为每一项的表头内容，`key` 对应 `data` 中每一项的键

::: demo

<template #source>
<f-table :data="data" :columns="columns" />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 原生驱动

当你 `data` 和 `columns` 属性都没有传递的时候，也可以将 `f-table` 看作是一个原生的 table 标签插入内容

`Fighting Design` 帮你内置好了样式

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>介绍</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>卡莉斯塔</td>
        <td>22</td>
        <td>她的被动可以在发动攻击后进行小距离的跳跃</td>
      </tr>
      <tr>
        <td>艾希</td>
        <td>22</td>
        <td>拥有强大减速和控制能力的远程射手</td>
      </tr>
      <tr>
        <td>李青</td>
        <td>34</td>
        <td>非常优秀的打野英雄</td>
      </tr>
      <tr>
        <td>贾克斯</td>
        <td>109</td>
        <td>取得优势的武器可以输出成吨的伤害</td>
      </tr>
    </tbody>
  </f-table>
</template>
```

:::

## 自定义宽度

`columns` 属性可携带一个可选的 `width` 属性来配置每一列的宽度，该值可为 string 或者 number 类型

::: demo

<template #source>
<f-table :data="data" :columns="columns3" />
</template>

```html
<template>
  <f-table :data="data" :columns="columns3" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns3 = ref([
    {
      title: '姓名',
      key: 'name',
      width: 90
    },
    {
      title: '年龄',
      key: 'age',
      width: '100px'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 带边框

`border` 属性可配置带有边框的表格

::: demo

<template #source>
<f-table :data="data" :columns="columns" border />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" border />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 斑马纹

`zebra` 属性可配置带有斑马纹的表格

::: demo

<template #source>
<f-table :data="data" :columns="columns" zebra />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" zebra />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 带有序号

`num` 属性可配置带有序号的表格

::: demo

<template #source>
<f-table :data="data" :columns="columns" num />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" num />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 自定义高度

`height` 属性可自定义表格内容部分的高度（不包括表头高度），当设置了合法的 `height` 之后，表头变为固定样式

::: demo

<template #source>
<f-table :data="data2" :columns="columns" :height="200" />
</template>

```html
<template>
  <f-table :data="data2" :columns="columns" :height="200" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])
  const data2 = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 对齐方式

`align` 属性配置表格的对齐方式

::: demo

<template #source>
<f-table :data="data" :columns="columns" align="center" />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" align="center" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 自定义模板

`columns` 属性可携带一个 `render` 函数，以自定义该列的渲染模板，使用 vue 内置的 [h 函数](https://cn.vuejs.org/api/render-function.html#h) 渲染

::: demo

<template #source>
<f-table :data="data" :columns="columns2" />
</template>

```html
<template>
  <f-table :data="data" :columns="columns2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FButton, FMessage } from 'fighting-design'

  const columns2 = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    },
    {
      title: '操作',
      render: h => {
        return h('div', { class: 'box' }, [
          h(
            FButton,
            {
              type: 'primary',
              round: true,
              size: 'mini',
              onClick: () => {
                FMessage.primary('查看详情')
              }
            },
            {
              default: () => '查看'
            }
          ),
          h(
            FButton,
            {
              type: 'danger',
              round: true,
              size: 'mini',
              onClick: () => {
                FMessage.danger('删除数据')
              }
            },
            {
              default: () => '删除'
            }
          )
        ])
      }
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 自定义样式

可以通过属性来自定义一些样式细节

::: demo

<template #source>
<f-table :data="data" :columns="columns" zebra zebra-color="skyblue" head-bg-color="orange" bg-color="#eef" />
</template>

```html
<template>
  <f-table
    :data="data"
    :columns="columns"
    zebra
    zebra-color="skyblue"
    head-bg-color="orange"
    bg-color="#eef"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## 多选的

`select` 配置项，配合 `on-select` 回调可实现表格选择

::: demo

<template #source>
<f-table :data="data" :columns="columns" select :on-select="onSelect" />
</template>

```html
<template>
  <f-table :data="data" :columns="columns" select :on-select="onSelect" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TableSelect } from 'fighting-design'

  const onSelect: TableSelect = values => {
    console.log(values)
  }

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
```

:::

## Attributes

| 参数            | 说明                 | 类型                                   | 可选值                  | 默认值 |
| --------------- | -------------------- | -------------------------------------- | ----------------------- | ------ |
| `data`          | 数据列表             | array                                  | ——                      | ——     |
| `columns`       | 标题数据             | array                                  | ——                      | ——     |
| `align`         | 内容对齐方式         | <a href="#tablealign">TableAlign</a>   | `left` `center` `right` | left   |
| `border`        | 是否显示边框         | boolean                                | ——                      | false  |
| `num`           | 是否显示序号         | boolean                                | ——                      | false  |
| `zebra`         | 是否显示斑马纹       | boolean                                | ——                      | false  |
| `zebra-color`   | 自定义斑马纹颜色     | string                                 | ——                      | ——     |
| `height`        | 自定义表格内容高度   | string / number                        | ——                      | ——     |
| `bg-color`      | 自定义背景颜色       | string                                 | ——                      | ——     |
| `head-bg-color` | 自定义头部背景颜色   | string                                 | ——                      | ——     |
| `show-head`     | 是否展示头部         | boolean                                | ——                      | true   |
| `select`        | 是否可多选           | boolean                                | ——                      | false  |
| `on-select`     | 选中值改变触发的回调 | <a href="#tableselect">TableSelect</a> | ——                      | ——     |

## Slots

| 插槽名称  | 说明说明                   |
| --------- | -------------------------- |
| `default` | 原生表格内容               |
| `tfoot`   | 自定义页脚                 |
| `noData`  | 没有数据时候的自定义占位图 |

## Interface

组件导出以下类型定义：

```ts
import type {
  TableInstance,
  TableProps,
  TableAlign,
  TableDate,
  TableRenderReturn,
  TableColumns,
  TableSelect
} from 'fighting-design'
```

### TableAlign

```ts
type TableAlign = 'left' | 'center' | 'right'
```

### TableRenderReturn

自定义模板函数渲染返回值类型

```ts
import type { VNode, RendererNode, RendererElement } from 'vue'

type TableRenderReturn = VNode<RendererNode, RendererElement, Record<string, any>>
```

### TableRender

```ts
import type { Component, Slot, Slots, VNode } from 'vue'

type Children = string | number | boolean | VNode | null | Children[]

type TableRender = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => TableRenderReturn | VNode
```

### TableRenderTitle

```ts
type TableRenderTitle = (
  h: TableRender,
  item: TableColumns,
  index: number
) => TableRenderReturn
```

### TableColumns

```ts
interface TableColumns {
  title: string | TableRenderTitle
  key?: string
  width?: number | string | undefined
  render?: TableRenderData
}
```

### TableRenderData

```ts
type TableRenderData = (
  h: TableRender,
  row: Record<string, any>,
  column: TableColumns,
  index: number
) => TableRenderReturn
```

### TableSelect

```ts
type TableSelect = (value: TableData) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'
  import demo1Vue from './demos/table/demo1.vue'
  import { FButton, FMessage } from 'fighting-design'

  const onSelect = values => {
    console.log(values)
  }

  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])

  const columns2 = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    },
    {
      title: '操作',
      render: (h) => {
        return h('div', { class: 'box' }, [
          h(
            FButton,
            {
              type: 'primary',
              round: true,
              size: 'mini',
              onClick: () => {
                FMessage.primary('查看详情')
              }
            },
            {
              default: () => '查看'
            }
          ),
          h(
            FButton,
            {
              type: 'danger',
              round: true,
              size: 'mini',
              onClick: () => {
                FMessage.danger('删除数据')
              }
            },
            {
              default: () => '删除'
            }
          )
        ])
      }
    }
  ])

  const columns3 = ref([
    {
      title: '姓名',
      key: 'name',
      width: 90
    },
    {
      title: '年龄',
      key: 'age',
      width: '100px'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])


  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])

  const data2 = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>
