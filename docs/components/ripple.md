# Ripple 涟漪

点击就会产生涟漪的组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/ripple)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/ripple.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

::: demo

<template #source>
<f-ripple v-for="(item, i) in typeList" :key="i" :type="item">

  <div class="list">
    <f-text :type="item">{{ item }} 涟漪</f-text>
  </div>
</f-ripple>
</template>

```html
<template>
  <f-ripple v-for="(item, i) in typeList" :key="i" :type="item">
    <div class="list">
      <f-text :type="item">{{ item }} 涟漪</f-text>
    </div>
  </f-ripple>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { FightingType } from 'fighting-design'

  const typeList = ref<FightingType[]>([
    'default',
    'primary',
    'success',
    'danger',
    'warning'
  ])
</script>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## 自定义涟漪颜色

`ripples-color` 属性可以自定义涟漪颜色

::: demo

<template #source>
<f-ripple ripples-color="orange">

  <div class="list">
    <f-text color="orange">自定义涟漪颜色</f-text>
  </div>
</f-ripple>

<f-ripple ripples-color="blue">
  <div class="list">
    <f-text color="blue">自定义涟漪颜色</f-text>
  </div>
</f-ripple>

<f-ripple ripples-color="purple">
  <div class="list">
    <f-text color="purple">自定义涟漪颜色</f-text>
  </div>
</f-ripple>
</template>

```html
<template>
  <f-ripple ripples-color="orange">
    <div class="list">
      <f-text color="orange">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>

  <f-ripple ripples-color="blue">
    <div class="list">
      <f-text color="blue">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>

  <f-ripple ripples-color="purple">
    <div class="list">
      <f-text color="purple">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## 禁用状态

`disabled` 可以禁用涟漪效果

::: demo

<template #source>
<f-ripple type="primary" disabled>

  <div class="list">
    <f-text type="primary">禁止使用</f-text>
  </div>
</f-ripple>

<f-ripple type="primary">
  <div class="list">
    <f-text type="primary">可以使用</f-text>
  </div>
</f-ripple>
</template>

```html
<template>
  <f-ripple type="primary" disabled>
    <div class="list">
      <f-text type="primary">禁止使用</f-text>
    </div>
  </f-ripple>

  <f-ripple type="primary">
    <div class="list">
      <f-text type="primary">可以使用</f-text>
    </div>
  </f-ripple>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## 自定义透明度

`start-opacity` 和 `end-opacity`自定义涟漪开始和结束时候的透明度

::: demo

<template #source>
<f-ripple type="primary" :start-opacity="0.7" :end-opacity="0.3">

  <div class="list">
    <f-text type="primary">自定义涟漪透明度</f-text>
  </div>
</f-ripple>
</template>

```html
<template>
  <f-ripple type="primary" :start-opacity="0.7" :end-opacity="0.3">
    <div class="list">
      <f-text type="primary">自定义涟漪透明度</f-text>
    </div>
  </f-ripple>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## Attributes

| 参数            | 说明                 | 类型                                                               | 可选值                                           | 默认值 |
| --------------- | -------------------- | ------------------------------------------------------------------ | ------------------------------------------------ | ------ |
| `type`          | 涟漪类型             | <a href="/components/interface.html#fightingtype">FightingType</a> | `default` `primary` `success` `danger` `warning` | ——     |
| `ripples-color` | 自定义涟漪颜色       | string                                                             | ——                                               | ——     |
| `duration`      | 移除涟漪节点的时间   | number                                                             | ——                                               | 400    |
| `disabled`      | 是否禁用             | boolean                                                            | ——                                               | false  |
| `start-opacity` | 涟漪动画开始的透明度 | number                                                             | ——                                               | 0.5    |
| `end-opacity`   | 涟漪动画结束的透明度 | number                                                             | ——                                               | 0      |

## Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 默认插入的内容 |

## Interface

组件导出以下类型定义：

```ts
import type { RippleInstance, RippleProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script lang="ts" setup>
  const typeList = ['default', 'primary', 'success', 'danger', 'warning']
</script>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
