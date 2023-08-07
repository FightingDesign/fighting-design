# Empty 空状态

在展示空状态时的占位提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/empty)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/empty.md)

## 基本使用

`content` 属性可以配置展示的内容

::: demo

<template #source>
<f-empty content="在这里，后续提供更多服务" />
</template>

```html
<f-empty content="在这里，后续提供更多服务" />
```

:::

## 内容文字大小

`content-size` 属性可以配置 `empty` 内容的字体大小

::: demo

<template #source>
<f-empty :content-size="25" :icon-size="50" />

</template>

```html
<f-empty :content-size="25" :icon-size="50" />
```

:::

## 内容文字颜色

`content-color` 属性可以配置 `empty` 内容文字的颜色

::: demo

<template #source>
<f-empty content-color="orange" />
</template>

```html
<f-empty content-color="orange" />
```

:::

## 自定义图片

`image-src` 属性可以配置 `empty` 展示数据状态的图片

`image-size` 属性可以配置自定义的图片大小

::: demo

<template #source>
<f-empty image-src="https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg" image-size="200px" />
</template>

```html
<f-empty
  image-src="https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg"
  image-size="200px"
/>
```

:::

## 自定义背景色

`background` 属性可以配置 `empty` 的背景颜色

::: demo

<template #source>
<f-empty background="#489EE2" image-size="300px"/>
</template>

```html
<f-empty background="#489EE2" image-size="300px" />
```

:::

## 自定义页脚

`footer` 插槽可自定义页脚

::: demo

<template #source>
<f-empty>
<template #footer>我的数据哪去了？</template>
</f-empty>
</template>

```html
<f-empty>
  <template #footer>我的数据哪去了？</template>
</f-empty>
```

:::

## Attributes

| 参数            | 说明             | 类型   | 可选值 | 默认值   |
| --------------- | ---------------- | ------ | ------ | -------- |
| `content`       | 展示的内容       | string | ——     | 暂无数据 |
| `content-size`  | 内容文字大小     | string | ——     | ——       |
| `content-color` | 内容文字颜色     | string | ——     | ——       |
| `image-src`     | 自定义图片地址   | string | ——     | ——       |
| `image-size`    | 自定义图片尺寸   | string | ——     | ——       |
| `icon-size`     | 自定义 icon 尺寸 | string | ——     | 30       |
| `background`    | 自定义背景色     | string | ——     | ——       |

## Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义插入内容 |
| `footer`  | 自定义页脚内容 |

## Interface

组件导出以下类型定义：

```ts
import type { EmptyInstance, EmptyProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<style scoped>
  .f-empty {
    margin: 5px;
  }
</style>
