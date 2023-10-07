# Pagination 分页器

用它处理过多的数据吧

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/pagination)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/pagination.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

`v-model:current` 属性来绑定当前页码

`total` 属性配置总页数

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-pagination v-model:current="current" :total="total" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
</script>
```

:::

## 页数选择器

`page-select` 属性可添加一个每页大小的选择器、传入值是一个数字类型的数组

::: demo
<template #source>
<demo2-vue/>
</template>

```html
<template>
  <f-pagination
    v-model:current="current"
    v-model:page-size="pagesize"
    :total="total"
    :page-select="pageSelect"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

  const pagesize = ref(10)

  const pageSelect = ref([10, 20, 30, 40, 50])
</script>
```

:::

## 带背景色或圆角

`background` 属性控制分页是否带背景色

`round` 属性控制分页是否带圆角

::: demo
<template #source>
<demo3-vue />
</template>

```html
<template>
  <f-pagination v-model:current="current" :total="total" background />

  <f-pagination v-model:current="current" :total="total" background round />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
</script>
```

:::

## 自定 Icon

::: demo
<template #source>
<f-pagination v-model:current="current" :total="100" :prev-icon="FIconCloud" :next-icon="FIconBlock" />
</template>

```html
<template>
  <f-pagination
    v-model:current="current"
    :total="100"
    :prev-icon="FIconCloud"
    :next-icon="FIconBlock"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconCloud, FIconBlock } from '@fighting-design/fighting-icon'

  const current = ref(1)
  const total = ref(100)
</script>
```

:::

## 禁用状态

`disabled` 属性表示是否禁用分页功能

::: demo
<template #source>
<f-pagination v-model:current="current" :total="100" disabled />
</template>

```html
<template>
  <f-pagination v-model:current="current" :total="100" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
</script>
```

:::

## 展示快速跳转搜索框

`jump-search` 属性表示是否禁用分页功能

::: demo
<template #source>
<f-pagination v-model:current="current" :total="100" jump-search />
</template>

```html
<template>
  <f-pagination v-model:current="current" :total="100" jump-search />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
</script>
```

:::

## Attributes

| 参数                  | 说明                           | 类型                                                               | 可选值 | 默认值 |
| --------------------- | ------------------------------ | ------------------------------------------------------------------ | ------ | ------ |
| `v-model:current`     | 当前选中页码                   | number                                                             | ——     | 1      |
| `v-model:page-size`   | 每页多少条                     | number                                                             | ——     | 10     |
| `total`               | 总页数                         | number                                                             | ——     | 0      |
| `page-select`         | 开启页数选择器，可选每页多少条 | number[]                                                           | ——     | ——     |
| `background`          | 是否带有背景色                 | boolean                                                            | ——     | false  |
| `round`               | 是否带有圆角                   | boolean                                                            | ——     | false  |
| `prev-icon`           | 自定义的上一页图标             | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `next-icon`           | 自定义的下一页图标             | <a href="/components/interface.html#fightingicon">FightingIcon</a> | ——     | ——     |
| `disabled`            | 是否禁用                       | boolean                                                            | ——     | false  |
| `jump-search`         | 是否展示快速跳转搜索框         | boolean                                                            | ——     | false  |
| `on-change`           | 改变页码回调函数               | <a href="#paginationevent">PaginationEvent</a>                     | ——     | ——     |
| `on-prev`             | 点击上一页触发的回调           | <a href="#paginationevent">PaginationEvent</a>                     | ——     | ——     |
| `on-next`             | 点击下一页触发的回调           | <a href="#paginationevent">PaginationEvent</a>                     | ——     | ——     |
| `on-page-size-change` | 每页条数发生变化时触发的回调   | <a href="#paginationevent">PaginationEvent</a>                     | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  PaginationInstance,
  PaginationProps,
  PaginationEvent
} from 'fighting-design'
```

### PaginationEvent

```ts
type PaginationEvent = (current: number, pageSize: number, evt: MouseEvent) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/OnlyShadows" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/54928569?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './demos/pagination/demo1.vue'
  import demo2Vue from './demos/pagination/demo2.vue'
  import demo3Vue from './demos/pagination/demo3.vue'
  import { FIconCloud, FIconBlock } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
</script>
