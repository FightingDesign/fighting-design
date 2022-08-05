# Watermark 水印

据说水印容易让人讨厌？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/watermark)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/watermark.md)

## 基本使用

`content` 可以配置想要显示的文字内容，`height` 和 `width` 可以配置背景图片的尺寸

<f-watermark content="机密文件" :height="100" :width="130">
  <f-card title="绝对机密">
    <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
    <f-text block>这是一个重要的文件</f-text>
  </f-card>
</f-watermark>

::: details 显示代码

```html
<template>
  <f-watermark content="机密文件" :height="100" :width="130">
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>
</template>

<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
```

:::

## 自定义文字样式

`font-color` 和 `font-size` 可以自定义你需要的文字大小和颜色

<f-watermark content="机密文件" :height="100" :width="130" font-color="red" font-size="16px">
  <f-card title="绝对机密">
    <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
    <f-text block>这是一个重要的文件</f-text>
  </f-card>
</f-watermark>

::: details 显示代码

```html
<template>
  <f-watermark
    content="机密文件"
    :height="100"
    :width="130"
    font-color="red"
    font-size="16px"
  >
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>
</template>

<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
```

:::

## 自定义背景

如果你不喜欢文字的背景，也可以使用你喜欢的自定义图片当作背景，只需要通过 `image` 传入一个地址即可

`image` 的优先级高于 `content` 的水印内容

<f-watermark image="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg">
  <f-card title="绝对机密">
    <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
    <f-text block>这是一个重要的文件</f-text>
  </f-card>
</f-watermark>

::: details 显示代码

```html
<template>
  <f-watermark
    image="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
  >
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>
</template>

<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
```

:::

## Attributes

| 参数        | 说明                                                                          | 类型    | 可选值 | 默认值 |
| ----------- | ----------------------------------------------------------------------------- | ------- | ------ | ------ |
| `content`   | 水印内容                                                                      | string  | ——     | ——     |
| `width`     | 水印的宽度                                                                    | number  | ——     | 280    |
| `height`    | 水印的高度                                                                    | number  | ——     | 200    |
| `fontSize`  | 文字大小                                                                      | string  | ——     | 30px   |
| `fontColor` | 文字颜色                                                                      | string  | ——     | #333   |
| `image`     | 自定义图片水印                                                                | string  | ——     | ——     |
| `block`     | 是否为块级元素                                                                | boolean | ——     | false  |
| `zIndex`    | 原生 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) 属性 | number  | ——     | 100    |

## Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 水印覆盖的内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
