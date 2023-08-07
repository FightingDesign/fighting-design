# Image Preview 图片预览

点击开启大图预览

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image-preview)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/image-preview.md)

## 基本使用

`v-model:visible` 绑定一个布尔值来控制预览框的展示状态

`img-list` 需要传入一个图片的数组集合

::: demo

<template #source>
<f-button type="primary" @click="show1 = true">打开</f-button>
<f-image-preview v-model:visible="show1" :img-list="listImg" />
</template>

```html
<template>
  <f-button type="primary" @click="show1 = true">打开</f-button>
  <f-image-preview v-model:visible="show1" :img-list="listImg" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const show1 = ref(false)

  const listImg = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
```

:::

## 隐藏操作栏

通过 `is-option` 属性将操作栏隐藏

::: demo

<template #source>
<f-button type="primary" @click="show2 = true">打开</f-button>
<f-image-preview v-model:visible="show2" :is-option="false" :img-list="listImg" />
</template>

```html
<template>
  <f-button type="primary" @click="show2 = true">打开</f-button>
  <f-image-preview v-model:visible="show2" :is-option="false" :img-list="listImg" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const show2 = ref(false)

  const listImg = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
```

:::

## Attributes

| 参数              | 说明                                                                               | 类型                                                             | 可选值 | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------ | ------ |
| `v-model:visible` | 是否展示预览框                                                                     | boolean                                                          | ——     | false  |
| `append-to-body`  | 是否追加到 `body`                                                                  | boolean                                                          | ——     | false  |
| `img-list`        | 图片集合                                                                           | array                                                            | ——     | []     |
| `modal-close`     | 是否点击遮罩层关闭预览窗                                                           | boolean                                                          | ——     | true   |
| `is-close-btn`    | 是否展示关闭按钮                                                                   | boolean                                                          | ——     | true   |
| `show-index`      | 图片预览展示的首张图的索引，从 0 开始                                              | number                                                           | ——     | 0      |
| `z-index`         | 图片预览展示的 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) | number                                                           | ——     | ——     |
| `is-option`       | 是否展示图片预览下面的操作栏                                                       | boolean                                                          | ——     | true   |
| `round`           | 预览图的圆角，传入一个单位                                                         | string                                                           | ——     | ——     |
| `on-close`        | 关闭之后触发的回调                                                                 | <a href="/components/interface.html#HandleMouse">HandleMouse</a> | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { ImagePreviewInstance, ImagePreviewProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const show1 = ref(false)
  const show2 = ref(false)
  const listImg = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
