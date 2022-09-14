# Image Preview 图片预览

点击开启大图预览

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image-preview)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/image-preview.md)

## 基本使用

`v-model:visible` 绑定一个布尔值来控制预览框的展示状态

`preview-list` 需要传入一个图片的数组集合

<f-button type="primary" @click="show1 = true">打开</f-button>
<f-image-preview v-model:visible="show1" :preview-list="listImg" />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="show1 = true">打开</f-button>
  <f-image-preview v-model:visible="show1" :preview-list="listImg" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const show1 = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]
</script>
```

:::

## 隐藏预览操作栏

通过 `preview-show-option` 属性将操作栏隐藏

<f-button type="primary" @click="show2 = true">打开</f-button>
<f-image-preview v-model:visible="show2" :preview-show-option="false" :preview-list="listImg" />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="show2 = true">打开</f-button>
  <f-image-preview
    v-model:visible="show2"
    :preview-show-option="false"
    :preview-list="listImg"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const show2 = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]
</script>
```

:::

## Attributes

| 参数                  | 说明                                                                               | 类型     | 可选值 | 默认值 |
| --------------------- | ---------------------------------------------------------------------------------- | -------- | ------ | ------ |
| `modal-close`         | 是否点击遮罩层关闭预览窗                                                           | boolean  | ——     | true   |
| `preview-list`        | 开启图片预览                                                                       | string[] | ——     | []     |
| `preview-show-index`  | 图片预览展示的首张图的索引，从 0 开始                                              | number   | ——     | 0      |
| `preview-z-index`     | 图片预览展示的 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) | number   | ——     | 999    |
| `preview-show-option` | 是否展示图片预览下面的操作栏                                                       | boolean  | ——     | true   |
| `preview-round`       | 预览图的圆角，传入一个单位                                                         | string   | ——     | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const show1 = ref(false)
  const show2 = ref(false)
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]
</script>
