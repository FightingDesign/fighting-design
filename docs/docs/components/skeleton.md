# Skeleton 骨架屏

`Skeleton` 在数据完整加载之前将您的内容显示为一个占位的预览。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/skeleton)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/skeleton.md)

## 基本使用

最简单的占位使用。

<f-skeleton></f-skeleton>

::: details 显示代码

```html
<f-skeleton></f-skeleton>
```

:::

`rounded` 圆角类型

<f-skeleton rounded></f-skeleton>
<f-skeleton circled></f-skeleton>

::: details 显示代码

```html
<f-skeleton rounded></f-skeleton>
<f-skeleton circled></f-skeleton>
```

:::

## 多行骨架屏

<f-skeleton :rows="3"></f-skeleton>

::: details 显示代码

```html
<f-skeleton :rows="3"></f-skeleton>
```

:::

## 动画效果

<f-skeleton animated></f-skeleton>
<f-skeleton rounded animated></f-skeleton>
<f-skeleton circled animated></f-skeleton>

::: details 显示代码

```html
<f-skeleton animated></f-skeleton>
<f-skeleton rounded animated></f-skeleton>
<f-skeleton circled animated></f-skeleton>
```

:::

## 尺寸属性 `size` & 自定义尺寸

<f-skeleton size="small"></f-skeleton>
<f-skeleton size="default"></f-skeleton>
<f-skeleton size="large"></f-skeleton>

<f-skeleton rounded size="small"></f-skeleton>
<f-skeleton rounded size="default"></f-skeleton>
<f-skeleton rounded size="large"></f-skeleton>

<f-skeleton circled size="small"></f-skeleton>
<f-skeleton circled size="default"></f-skeleton>
<f-skeleton circled size="large"></f-skeleton>

自定义尺寸
<f-skeleton style="width: 100px; height: 100px;"></f-skeleton>

::: details 显示代码

```html
<template>
  <f-skeleton size="small"></f-skeleton>
  <f-skeleton size="default"></f-skeleton>
  <f-skeleton size="large"></f-skeleton>

  <f-skeleton rounded size="small"></f-skeleton>
  <f-skeleton rounded size="default"></f-skeleton>
  <f-skeleton rounded size="large"></f-skeleton>

  <f-skeleton circled size="small"></f-skeleton>
  <f-skeleton circled size="default"></f-skeleton>
  <f-skeleton circled size="large"></f-skeleton>

  <f-skeleton style="width: 100px; height: 100px;"></f-skeleton>
</template>
```

:::

## 搭配组件加载使用

<f-skeleton animated :rows="2" :loading="loading">
  <f-list>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</f-skeleton>
<div>
  <f-button :loading="loading" simple type="primary" @click="startLoad">
    {{ seconds !== -1 ? `${seconds}s loading...` : `start load` }}
  </f-button>
</div>

::: details 显示代码

```html
<template>
  <f-skeleton animated :rows="2" :loading="loading">
    <f-list>
      <f-list-item>这是一段文字</f-list-item>
      <f-list-item>这是一段文字</f-list-item>
    </f-list>
  </f-skeleton>
  <div>
    <f-button :loading="loading" simple type="primary" @click="startLoad">
      {{ seconds !== -1 ? `${seconds}s loading...` : `start load` }}
    </f-button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const SEC_DEFAULT = 2
  const loading = ref(false)
  const seconds = ref(-1)

  const startLoad = () => {
    seconds.value = SEC_DEFAULT
    loading.value = true
    let timer = setInterval(() => {
      if (seconds.value === 0) {
        loading.value = false
        clearInterval(timer)
        timer = undefined
      }
      seconds.value = seconds.value - 1
    }, 1000)
  }
</script>
```

:::

## Attributes

| 参数       | 说明                                     | 类型      | 可选值                    | 默认值    |
| ---------- | ---------------------------------------- | --------- | ------------------------- | --------- |
| `rounded`  | 是否带圆角的                             | `boolean` | --                        | `false`   |
| `animated` | 是否展示波浪动画                         | `boolean` | --                        | `false`   |
| `circled`  | 圆形占位图                               | `boolean` | --                        | `false`   |
| `rows`     | 渲染多行占位图                           | `number`  | --                        | 1         |
| `loading`  | 为 true 时，显示占位图。false 展示子组件 | `boolean` | --                        | `false`   |
| `size`     | 设置尺寸，提供三个属性值，默认 `default` | `string`  | `default` `small` `large` | `default` |

## Slots

| 名称  | 说明 | slot-scope |
| ----- | ---- | ---- |
| `default` | `loading` 结束待渲染组件  | -- |

## Contributors

<a href="https://github.com/jxzho" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/37285048?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const SEC_DEFAULT = 2
  const loading = ref(false)
  const seconds = ref(-1)

  const startLoad = () => {
    seconds.value = SEC_DEFAULT
    loading.value = true
    let timer = setInterval(() => {
      if (seconds.value === 0) {
        loading.value = false
        clearInterval(timer) 
        timer = undefined
      }
      seconds.value = seconds.value - 1
    }, 1000)
  }
</script>
