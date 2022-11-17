# Loading 加载

加载中……

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/loading)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/loading.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

可以在指定元素上绑定 `v-loading` 属性来实现加载状态

::: demo

<template #source>
<demo1-vue />
</template>

```html
<template>
  <f-button :click="startLoading">开始加载</f-button>
  <f-table v-loading="loading" :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading = ref(false)

  const startLoading = (): void => {
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 2000)
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

| 参数         | 说明               | 类型                       | 可选值 | 默认值 |
| ------------ | ------------------ | -------------------------- | ------ | ------ |
| `v-loading`  | 是否开始 loading   | boolean                    | ——     | false  |
| `text`       | 加载中文案         | string                     | ——     | ——     |
| `font-color` | 加载中文案颜色     | string                     | ——     | ——     |
| `fullscreen` | 是否全屏显示       | boolean                    | ——     | false  |
| `background` | 自定义遮罩层背景色 | string                     | ——     | ——     |
| `icon`       | 自定义 icon        | object (VNode / Component) | ——     | ——     |

## Slots

| 插槽名称 | 说明说明    |
| -------- | ----------- |
| `icon`   | 自定义 icon |

## Interface

组件导出以下类型定义：

```ts
import type {
  LoadingInstance,
  LoadingPropsType,
  LoadingElInterface
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/yn22638" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/48940123?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<a href="https://github.com/LAINE001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40457081?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/loading/demo1.vue'
  import { FIconSnowflake } from '@fighting-design/fighting-icon'
</script>
