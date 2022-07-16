# Page Header 页头

`Page Header` 用于展示概览和引导页级操作

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/page-header)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/page-header.md)

## 基本使用

<f-page-header @back="goBack" title="标题" />

::: details 显示代码
``

```html
<template>
  <f-page-header @back="goBack" title="标题" />
</template>
<script lang="ts" setup>
  const goBack = () => {
    console.log('go back')
  }
</script>
```

:::

## 自定义返回图标与返回文本

<f-page-header icon="f-icon-arrow-left" back-text="返回上一页" title="标题" />

::: details 显示代码

```html
<template>
  <f-page-header icon="f-icon-arrow-left" back-text="返回上一页" title="标题" />
</template>
```

:::

## 自定义副标题内容

<f-page-header title="标题" subtitle="副标题" />

::: details 显示代码

```html
<template>
  <f-page-header title="标题" subtitle="副标题" />
</template>
```

:::

## Attributes

| 属性             | 说明           | 类型                        | 默认值             |
| ---------------- | -------------- | --------------------------- | ------------------ |
| `icon`           | 返回图标       | `string`                    | `f-icon-leftarrow` |
| `icon-size`      | 返回图标大小   | `string`                    | ——                 |
| `back-text`      | 返回文本       | `string`                    | `返回`             |
| `title`          | 标题文本       | `string`                    | `标题`             |
| `title-class`    | 标题额外类名   | `string \| Object \| array` | ——                 |
| `title-bold`     | 标题是否粗体   | `boolean`                   | `false`            |
| `title-center`   | 标题是否居中   | `boolean`                   | `false`            |
| `title-color`    | 标题颜色       | `string`                    | `false`            |
| `subtitle`       | 副标题文本     | `string`                    | ——                 |
| `subtitle-class` | 副标题额外类名 | `string \| Object \| array` | ——                 |

## Slots

| 插槽名     | 说明             |
| ---------- | ---------------- |
| `icon`     | 自定义返回图标   |
| `title`    | 自定义标题内容   |
| `subtitle` | 自定义副标题内容 |

## Events

| 属性   | 说明             | 参数 |
| ------ | ---------------- | ---- |
| `back` | 点击左侧区域触发 | —    |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/yzj940619" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/42865478?v=4" />
</a>

<style scoped>
</style>

<script setup>
  const goBack = () => {
    console.log('go back')
  }
</script>
