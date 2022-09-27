# ExpandCard 折叠动效

针对于图片展示的一个扩展折叠动效组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/expand-card)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/expand-card.md)

## 基本使用

`image-list` 需要传入一个图片数组集合来展示

<f-expand-card  :image-list="imageList" />

::: details 显示代码

```html
<template>
  <f-expand-card :image-list="imageList" />
</template>

<script lang="ts" setup>
  const imageList = [
    'https://tianyuhao.cn/images/fighting-design/1.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]
</script>
```

:::

## 描述信息

`image-list` 可以传入一个对象类型的数组，里面包含 `url` 和一个可选的 `text`，`text` 可用作图片的描述信息

<f-expand-card  :image-list="imageList2" />

::: details 显示代码

```html
<template>
  <f-expand-card :image-list="imageList2" />
</template>

<script lang="ts" setup>
  const imageList2 = [
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
```

:::

## 圆角图片

`round` 属性可以配置圆角图片

<f-expand-card round :image-list="imageList" />

::: details 显示代码

```html
<template>
  <f-expand-card round :image-list="imageList" />
</template>

<script lang="ts" setup>
  const imageList = [
    'https://tianyuhao.cn/images/fighting-design/1.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]
</script>
```

:::

## Attributes

| 参数         | 说明               | 类型            | 可选值 | 默认值 |
| ------------ | ------------------ | --------------- | ------ | ------ |
| `image-list` | 需要展示的图片列表 | array           | ——     | []     |
| `round`      | 是否显示圆角       | boolean         | ——     | false  |
| `height`     | 自定义高度         | string / number | ——     | 300px  |
| `width`      | 自定义宽度         | string / number | ——     | ——     |
| `color`      | 左下角文字的颜色   | string          | ——     | '#fff' |

## Interface

组件导出以下类型定义：

```ts
import type {
  ExpandCardInstance,
  ExpandCardImageListType,
  ExpandCardPropsType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/876843240" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/14799063?v=4" />
</a>

<script setup>
    const imageList = [
    'https://tianyuhao.cn/images/fighting-design/1.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]
  const imageList2 = [
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
