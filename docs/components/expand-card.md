# Expand Card 折叠动效

针对于图片展示的一个扩展折叠动效组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/expand-card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/expand-card.md)

## 基本使用

`image-list` 需要传入一个图片数组集合来展示

::: demo

<template #source>
<f-expand-card  :image-list="imageList" />
</template>

```html
<template>
  <f-expand-card :image-list="imageList" />
</template>

<script lang="ts" setup>
  const imageList = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
```

:::

## 描述信息

`image-list` 可以传入一个对象类型的数组，里面包含 `url` 和一个可选的 `text`，`text` 可用作图片的描述信息

::: demo

<template #source>
<f-expand-card  :image-list="imageList2" />
</template>

```html
<template>
  <f-expand-card :image-list="imageList2" />
</template>

<script lang="ts" setup>
  const imageList2 = [
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
      text: '第一张图片'
    },
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
      text: '第二张图片'
    },
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg',
      text: '第三张图片'
    }
  ]
</script>
```

:::

## 圆角图片

`round` 属性可以配置圆角图片

::: demo

<template #source>
<f-expand-card round :image-list="imageList" />
</template>

```html
<template>
  <f-expand-card round :image-list="imageList" />
</template>

<script lang="ts" setup>
  const imageList = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
```

:::

## 纵向排列

`vertical` 属性可以配置纵向排列

::: demo

<template #source>
<f-expand-card vertical :image-list="imageList" />
</template>

```html
<template>
  <f-expand-card vertical :image-list="imageList" />
</template>

<script lang="ts" setup>
  const imageList = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]
</script>
```

:::

## Attributes

| 参数           | 说明                      | 类型                                                   | 可选值 | 默认值 |
| -------------- | ------------------------- | ------------------------------------------------------ | ------ | ------ |
| `image-list`   | 需要展示的图片列表        | <a href="#expandcardimagelist">ExpandCardImageList</a> | ——     | []     |
| `round`        | 是否显示圆角              | boolean                                                | ——     | false  |
| `height`       | 自定义高度                | string / number                                        | ——     | ——     |
| `width`        | 自定义宽度                | string / number                                        | ——     | ——     |
| `color`        | 左下角文字的颜色          | string                                                 | ——     | ——     |
| `expand-index` | 默认展开的索引，从 0 开始 | number                                                 | ——     | 0      |
| `vertical`     | 是否纵向排列              | boolean                                                | ——     | false  |
| `on-change`    | 切换时执行的回调          | <a href="#expandcardchange ">ExpandCardChange</a>      | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  ExpandCardInstance,
  ExpandCardProps,
  ExpandCardImageListItem,
  ExpandCardImageList
} from 'fighting-design'
```

### ExpandCardImageListItem

```ts
interface ExpandCardImageListItem {
  url: string
  text?: string
}
```

### ExpandCardImageList

```ts
type ExpandCardImageList = ExpandCardImageListItem[] | string[]
```

### ExpandCardChange

```ts
type ExpandCardChange = (
  evt: MouseEvent,
  index: number,
  item: ExpandCardImageListItem
) => void
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                   | 描述     |
| ---------------------- | -------- |
| `--expand-card-height` | 高度     |
| `--expand-card-width`  | 宽度     |
| `--expand-card-color`  | 文字颜色 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/876843240" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/14799063?v=4" />
</a>

<script setup lang="ts">
  const imageList = [
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg'
  ]

  const imageList2 = [
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
      text: '第一张图片'
    },
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
      text: '第二张图片'
    },
    {
      url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg',
      text: '第三张图片'
    }
  ]
</script>
