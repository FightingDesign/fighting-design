# Expandcard 折叠动效组件

`Expandcard` 是一个针对于图片展示的一个扩展折叠动效组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/expandcard)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/expandcard.md)

## 基本使用

`round` 属性确定是否显示圆角
`image-list` 属性是需要显示折叠动效的图片列表

<f-expand-card round :image-list="[{url:'xxx',text:'图片1'}]" />

::: details 显示代码

```html
<template>
  <f-expand-card round :image-list="imageList" />
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  const imageList = reactive([
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
  ])
</script>
```

:::

## 自定义圆角大小

`round` 属性可以自定义大小，只需要传入数字即可

<f-expand-card :round="round" :image-list="imageList" />

::: details 显示代码

```html
<template>
  <f-expand-card :round="round" :image-list="imageList" />
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  const round = ref(false)

  const imageList = reactive([
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
  ])
  round.value = 100
</script>
```

:::

## Attributes

| 参数         | 说明                    | 类型     | 可选值  | 默认值 |
| ------------ | ----------------------- | -------- | ------- | ------ | ----- |
| `image-list` | 需要展示的图片列表      | array    | ——      | []     |
| `round`      | 是否显示圆角&圆角的尺寸 | `boolean | number` | ——     | false |
| `color`      | 左下角文字的颜色        | string   | ——      | '#fff' |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/876843240" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/14799063?v=4" />
</a>

<style scoped>
.f-avatar,
.f-avatar-error {
  margin: 5px;
}
</style>
