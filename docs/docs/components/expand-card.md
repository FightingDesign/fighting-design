# ExpandCard 折叠动效

`ExpandCard` 是一个针对于图片展示的一个扩展折叠动效组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/expandcard)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/expandcard.md)

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
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  ]
</script>
```

:::

## 描述信息

`image-list` 可以传入一个对象类型的数组，里面包含 `url` 和一个可选的 `text`，`text` 可用作图片的描述信息

<f-expand-card  :image-list="imageList" />

::: details 显示代码

```html
<template>
  <f-expand-card :image-list="imageList2" />
</template>

<script lang="ts" setup>
  const imageList2 = [
    {
      url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: '第一张图片'
    },
    {
      url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: '第二张图片'
    },
    {
      url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
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
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  ]

  const imageList2 = [
    {
      url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: '第一张图片'
    },
    {
      url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: '第二张图片'
    },
    {
      url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      text: '第三张图片'
    }
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

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/876843240" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/14799063?v=4" />
</a>

<script setup>
const imageList = [
  {
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    text: '图片1'
  },
  {
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  }
]
</script>

<style scoped>
.f-avatar,
.f-avatar-error {
  margin: 5px;
}
</style>
