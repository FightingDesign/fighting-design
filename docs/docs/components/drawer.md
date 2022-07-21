# Drawer 抽屉

在浏览器中使用抽屉

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/drawer)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/drawer.md)

## 基本使用

呼出一个临时的侧边栏, 可以从多个方向呼出

<f-space>
  <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
  <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
  <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
  <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>

  <f-drawer title="Title" :direction="direction" v-model:visible="visible1">
    fighting-design
  </f-drawer>
</f-space>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
  <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
  <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
  <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>

  <f-drawer title="Title" :direction="direction" v-model:visible="visible1">
    fighting-design
  </f-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const visible1 = ref(false)
  const direction = ref('right')

  const onShow = (dir) => {
    direction.value = dir
    visible1.value = true
  }
</script>
```

:::

## 不显示 title

当你不需要标题到时候, 你还可以去掉标题

<f-button type="primary" @click="visible2 = true">show</f-button>
<f-drawer title="Title" :withHeader="false" v-model:visible="visible2">
fighting-design
</f-drawer>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible2 = true">show</f-button>
  <f-drawer title="Title" :withHeader="false" v-model:visible="visible2">
    fighting-design
  </f-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const visible2 = ref(false)
</script>
```

:::

## 自定义内容

和 `Dialog` 组件一样, `Drawer` 同样可以在其内部嵌套各种丰富的操作

<f-button type="primary" @click="visible3 = true">show</f-button>
<f-drawer title="Title" v-model:visible="visible3">
<f-button type="warning" @click="visible3 = false">hidden</f-button>
</f-drawer>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible3 = true">Show</f-button>
  <f-drawer title="Title" v-model:visible="visible3">
    <f-button type="warning" @click="visible3 = false">Close</f-button>
  </f-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const visible3 = ref(false)
</script>
```

:::

## 多层嵌套

`Drawer` 组件也拥有多层嵌套的方法

<f-button type="primary" @click="visible4 = true">show</f-button>
<f-drawer title="Title" size="50%" append-to-body v-model:visible="visible4">
<f-button type="primary" @click="visible5 = true">打开内层 drawer</f-button>
<f-drawer title="Title" v-model:visible="visible5">
内层 drawer
</f-drawer>
</f-drawer>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible4 = true">show</f-button>

  <f-drawer title="Title" size="50%" append-to-body v-model:visible="visible4">
    <f-button type="primary" @click="visible5 = true">打开内层 drawer</f-button>
    <f-drawer title="Title" v-model:visible="visible5"> 内层 drawer </f-drawer>
  </f-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const visible4 = ref(false)
  const visible5 = ref(false)
</script>
```

:::

## Attributes

| 参数              | 说明            | 类型    | 可选值                        | 默认值 |
| ----------------- | --------------- | ------- | ----------------------------- | ------ |
| `v-model:visible` | 绑定值          | boolean | ——                            | false  |
| `direction`       | 弹出方向        | boolean | `top` `left` `bottom` `right` | ——     |
| `title`           | 标题            | string  | ——                            | ——     |
| `with-header`     | 是否展示标题    | boolean | ——                            | true   |
| `append-to-body`  | 是否追加到 body | boolean | ——                            | false  |
| `size`            | 大小尺寸        | string  | ——                            | 30%    |
| `modal`           | 是否展示蒙层    | boolean | ——                            | true   |
| `z-index`         | 原生属性        | boolean | ——                            | 1999   |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/wang-zhixin" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/50623519?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const visible1 = ref(false)
  const visible2 = ref(false)
  const visible3 = ref(false)
  const visible4 = ref(false)
  const visible5 = ref(false)

  const direction = ref('right')

  const onShow = dir => {
    direction.value = dir
    visible1.value = true
  }
</script>
