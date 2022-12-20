# ExpandCard 折叠动效

针对于图片展示的一个扩展折叠动效组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/expand-card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/expand-card.md)

## 基本使用

`image-list` 需要传入一个图片数组集合来展示

::: demo

```vue
<script lang="ts" setup>
  const imageList = [
    'https://tianyuhao.cn/images/fighting-design/1.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]
</script>

<template>
  <f-expand-card :image-list="imageList" />
</template>
```

:::

## 描述信息

`image-list` 可以传入一个对象类型的数组，里面包含 `url` 和一个可选的 `text`，`text` 可用作图片的描述信息

::: demo

```vue
<script lang="ts" setup>
  const imageList = [
    {
      url: 'https://tianyuhao.cn/images/fighting-design/1.jpg',
      text: '第一张图片'
    },
    {
      url: 'https://tianyuhao.cn/images/fighting-design/2.jpg',
      text: '第二张图片'
    },
    {
      url: 'https://tianyuhao.cn/images/fighting-design/3.jpg',
      text: '第三张图片'
    }
  ]
</script>

<template>
  <f-expand-card :image-list="imageList" />
</template>
```

:::

## 圆角图片

`round` 属性可以配置圆角图片

::: demo

```vue
<script lang="ts" setup>
  const imageList = [
    'https://tianyuhao.cn/images/fighting-design/1.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]
</script>

<template>
  <f-expand-card round :image-list="imageList" />
</template>
```

:::

## Attributes

| 参数           | 说明                      | 类型                                                     | 可选值 | 默认值 |
| -------------- | ------------------------- | -------------------------------------------------------- | ------ | ------ |
| `image-list`   | 需要展示的图片列表        | <a href="#expandcardimagelist ">ExpandCardImageList </a> | ——     | []     |
| `round`        | 是否显示圆角              | boolean                                                  | ——     | false  |
| `height`       | 自定义高度                | string / number                                          | ——     | ——     |
| `width`        | 自定义宽度                | string / number                                          | ——     | ——     |
| `color`        | 左下角文字的颜色          | string                                                   | ——     | ——     |
| `expand-index` | 默认展开的索引，从 0 开始 | number                                                   | ——     | 0      |

## Interface

组件导出以下类型定义：

```ts
import type { ExpandCardInstance, ExpandCardProps, ExpandCardImageListItem, ExpandCardImageList } from 'fighting-design'
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

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/876843240" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/14799063?v=4" />
</a>
