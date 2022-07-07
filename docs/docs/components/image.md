# Image 图片

`Image` 用于图片的展示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/image)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/image.md)

## 基本使用

使用 `src` 属性设置图片的路径，`width` 设置图片的宽度，`height` 可以设置图片的高度

<f-image width="200px" src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png" />

<f-image height="129px" src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png" />

::: details 显示代码

```html
<f-image
  width="200px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>
<f-image
  height="129px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
/>
```

:::

## 适应容器方式

`fit` 属性可以配置不同的适应容器的方式，详见原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性

<f-image
    width="110px"
    height="110px"
    style="border:1px solid #333;margin:10px"
    v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
    :key="index"
    :fit="fit"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

::: details 显示代码

```html
<f-image
  width="110px"
  height="110px"
  style="border:1px solid #333;margin:10px"
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>
```

:::

## 大图预览

你可以通过 `preview-list` 属性传入一个数组，存入需要预览的图片地址，可以实现预览效果

<f-image
  width="200px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
  :preview-list="listImg"
/>

::: details 显示代码

```html
<template>
  <f-image
    width="200px"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
    :preview-list="listImg"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png'
  ]
</script>
```

:::

## 隐藏预览操作栏

如果在大图预览的时候，你不需要使用下放的操作栏，可以通过 `preview-show-option` 属性将其隐藏

<f-image
  width="200px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
  :preview-list="listImg"
  :preview-show-option="false"
/>

::: details 显示代码

```html
<template>
  <f-image
    width="200px"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
    :preview-list="listImg"
    :preview-show-option="false"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png'
  ]
</script>
```

:::

## 说明文字

`caption` 属性可以在图片上加入一些说明文字

也可以使用 `caption-color` 配置不同的颜色

<f-image height="190px" caption="漂亮的玫瑰花" src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png" />

<f-image height="190px" caption="看远处的埃菲尔铁塔" caption-color="skyblue" src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png" />

::: details 显示代码

```html
<f-image
  height="190px"
  caption="漂亮的玫瑰花"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

<f-image
  height="190px"
  caption="看远处的埃菲尔铁塔"
  caption-color="skyblue"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png"
/>
```

:::

## 圆角图片

`round` 属性可以配置圆角图片，你需要传入一个具体的数值单位

<f-image round="30px" height="190px" caption="漂亮的玫瑰花" src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png" />

::: details 显示代码

```html
<f-image
  round="30px"
  height="190px"
  caption="漂亮的玫瑰花"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>
```

:::

## 懒加载

`lazy` 属性可以设置图片懒加载，详情可参考 `DevTools` 的 `Network`

<f-image width="200px" lazy src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a72738a7113.png" />

::: details 显示代码

```html
<f-image
  width="200px"
  lazy
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a72738a7113.png"
/>
```

:::

## 加载失败

`Fighting Design` 对于图片加载失败做了很多的处理，下面分别介绍一下

`err-src` 可以在 `src` 加载失败的时候，备用进行加载

`alt` 属性可以在图片加载失败的时候，展示信息

你也可以使用 `error` 插槽自定义你的错误信息展示

<f-image
    width="200px"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png2"
    block
    err-src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

<f-image
    width="200px"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png2"
    block
    err-src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png2"
/>

::: details 显示代码

```html
<f-image
  width="200px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png2"
  block
  err-src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

<f-image
  width="200px"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png2"
  block
  err-src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png2"
/>
```

:::

## Attributes

| 参数                  | 说明                                                                                                         | 类型     | 可选值                                       | 默认值 |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------- | ------ |
| `src`                 | 图片路径                                                                                                     | string   | ——                                           | ——     |
| `alt`                 | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                      | string   | ——                                           | ——     |
| `draggable`           | 是否可以拖动                                                                                                 | boolean  | ——                                           | true   |
| `lazy`                | 是否懒加载图片                                                                                               | boolean  | ——                                           | false  |
| `root-margin`         | 触发懒加载的距离                                                                                             | string   | ——                                           | 100px  |
| `width`               | 图片的宽度                                                                                                   | string   | ——                                           | ——     |
| `height`              | 图片的高度                                                                                                   | string   | ——                                           | ——     |
| `block`               | 是否为块级元素                                                                                               | boolean  | ——                                           | false  |
| `fit`                 | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性     | string   | `fill` `contain` `cover` `none` `scale-down` | ——     |
| `no-select`           | 是否禁止选择                                                                                                 | boolean  | ——                                           | false  |
| `referrer-policy`     | 原生 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax) 属性 | string   | ——                                           | ——     |
| `round`               | 配置圆角，传入一个单位                                                                                       | string   | ——                                           | ——     |
| `err-src`             | 加载失败时要显示的地址                                                                                       | string   | ——                                           | ——     |
| `caption`             | 图片上的说明文字                                                                                             | string   | ——                                           | ——     |
| `caption-color`       | 图片上的说明文字的颜色                                                                                       | string   | ——                                           | #fff   |
| `modal-close`         | 是否点击遮罩层关闭预览窗                                                                                     | boolean  | ——                                           | true   |
| `show-close-btn`      | 是否展示预览窗口的关闭按钮                                                                                   | boolean  | ——                                           | true   |
| `preview-list`        | 开启图片预览                                                                                                 | string[] | ——                                           | []     |
| `preview-show-index`  | 图片预览展示的首张图的索引，从 0 开始                                                                        | number   | ——                                           | 0      |
| `preview-z-index`     | 图片预览展示的 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)                           | number   | ——                                           | 999    |
| `preview-show-option` | 是否展示图片预览下面的操作栏                                                                                 | boolean  | ——                                           | true   |
| `preview-round`       | 预览图的圆角，传入一个单位                                                                                   | string   | ——                                           | ——     |

## Events

| 事件名称 | 说明             | 类型               |
| -------- | ---------------- | ------------------ |
| `load`   | 图片加载成功触发 | (e: Event) => void |
| `error`  | 图片加载失败触发 | (e: Event) => void |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| `error`  | 自定义加载失败提示 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  const listImg = [
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png'
  ]
</script>

<style scoped>
  .my-error {
    width: 200px;
    height: 150px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: rgb(240, 239, 255);
    border-radius: 10px;
  }
</style>
