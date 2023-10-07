# Image 图片

预览图片

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/image.md)

## 基本使用

使用 `src` 属性设置图片的路径，`width` 设置图片的宽度，`height` 可以设置图片的高度

::: demo

<template #source>
<f-image width="200px" src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg" />
</template>

```html
<f-image
  width="200px"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"
/>
```

:::

## 使用本地图片

如需要使用本地图片，需要使用 [new URL(url, import.meta.url)](https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url) 手动导入图片资源使用：

::: demo

<template #source>
<f-image :src="url" />
</template>

```html
<script lang="ts" setup>
  const url = new URL('./image/1.jpg', import.meta.url).href
</script>

<template>
  <f-image :src="url" />
</template>
```

:::

## 适应容器方式

`fit` 属性可以配置不同的适应容器的方式，详见原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性

::: demo

<template #source>
<demo1-vue />
</template>

```html
<f-image
  width="110px"
  height="110px"
  fit="fill"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
/>
<f-image
  width="110px"
  height="110px"
  fit="contain"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
/>
<f-image
  width="110px"
  height="110px"
  fit="cover"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
/>
<f-image
  width="110px"
  height="110px"
  fit="none"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
/>
<f-image
  width="110px"
  height="110px"
  fit="scale-down"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
/>
```

:::

## 圆角图片

`round` 属性可以配置圆角图片，你需要传入一个具体的数值单位

::: demo

<template #source>
<f-image round="30px" height="190px" src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/2.jpg" />
</template>

```html
<f-image
  round="30px"
  height="190px"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/2.jpg"
/>
```

:::

## 懒加载

`lazy` 属性可以设置图片懒加载，详情可参考 `DevTools` 的 `Network`

::: demo

<template #source>
<f-image lazy width="200px" src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/3.jpg" />
</template>

```html
<f-image
  lazy
  width="200px"
  src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/3.jpg"
/>
```

:::

## 加载失败

`Fighting Design` 对于图片加载失败做了很多的处理，下面分别介绍一下

`err-src` 可以在 `src` 加载失败的时候，备用进行加载

`alt` 属性可以在图片加载失败的时候，展示信息

你也可以使用 `error` 插槽自定义你的错误信息展示

::: demo

<template #source>
<f-space spacing="large">
<f-image width="200px" src="https://abc.com/1.png" err-src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg" />
<f-image width="200px" src="https://abc.com/1.png" err-src="https://abc.com/1.png" alt="error" />
</f-space>

</template>

```html
<f-image
  width="200px"
  src="https://abc.com/1.png"
  err-src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"
/>
<f-image
  width="200px"
  src="https://abc.com/1.png"
  err-src="https://abc.com/1.png"
  alt="error"
/>
```

:::

## Attributes

| 参数              | 说明                                                                                                         | 类型                                                             | 可选值                                             | 默认值 |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------- | ------ |
| `src`             | 图片路径                                                                                                     | string                                                           | ——                                                 | ——     |
| `err-src`         | src 加载失败时加载的地址                                                                                     | string                                                           | ——                                                 | ——     |
| `alt`             | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                      | string                                                           | ——                                                 | ——     |
| `draggable`       | 是否可以拖动                                                                                                 | boolean                                                          | ——                                                 | true   |
| `lazy`            | 是否懒加载图片                                                                                               | boolean                                                          | ——                                                 | false  |
| `root-margin`     | 触发懒加载的距离                                                                                             | string / number                                                  | ——                                                 | 100px  |
| `width`           | 图片的宽度                                                                                                   | string / number                                                  | ——                                                 | ——     |
| `height`          | 图片的高度                                                                                                   | string / number                                                  | ——                                                 | ——     |
| `block`           | 是否为块级元素                                                                                               | boolean                                                          | ——                                                 | false  |
| `fit`             | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性     | <a href="/components/interface.html#fightingfit">FightingFit</a> | `fill` `contain` `cover` `none`<br /> `scale-down` | ——     |
| `select`          | 是否禁止选择                                                                                                 | boolean                                                          | ——                                                 | false  |
| `referrer-policy` | 原生 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax) 属性 | string                                                           | ——                                                 | ——     |
| `round`           | 配置圆角，传入一个数值                                                                                       | string / number                                                  | ——                                                 | ——     |
| `title`           | img 的 title                                                                                                 | string                                                           | ——                                                 | ——     |
| `on-load`         | 图片加载成功触发的回调                                                                                       | <a href="/components/interface.html#handleevent">HandleEvent</a> | ——                                                 | ——     |
| `on-error`        | 图片加载失败触发的回调                                                                                       | <a href="/components/interface.html#handleevent">HandleEvent</a> | ——                                                 | ——     |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| `error`  | 自定义加载失败提示 |

## Interface

组件导出以下类型定义：

```ts
import type { ImageInstance, ImageProps, ImageFit } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './demos/image/demo1.vue'
  const url = new URL('./image/1.jpg', import.meta.url).href
</script>
