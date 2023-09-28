# Watermark 水印

据说水印容易让人讨厌？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/watermark)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/watermark.md)

## 基本使用

`content` 可以配置想要显示的文字内容

::: demo

<template #source>
<f-watermark content="机密文件">
<f-card title="绝对机密">
<f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
<f-text block>这是一个重要的文件</f-text>
</f-card>
</f-watermark>
</template>

```html
<template>
  <f-watermark content="机密文件">
    <f-card title="绝对机密">
      <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
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

::: demo

<template #source>
<f-watermark content="保密协议" font-color="blue" :font-size="30">
<f-card title="绝对机密">
<f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
<f-text block>这是一个重要的文件</f-text>
</f-card>
</f-watermark>
</template>

```html
<template>
  <f-watermark content="保密协议" font-color="blue" :font-size="16">
    <f-card title="绝对机密">
      <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
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

| 参数        | 说明                                                                          | 类型            | 可选值 | 默认值 |
| ----------- | ----------------------------------------------------------------------------- | --------------- | ------ | ------ |
| `content`   | 水印内容                                                                      | string          | ——     | ——     |
| `gap`       | 间距                                                                          | number          | ——     | 40     |
| `fontSize`  | 文字大小                                                                      | number          | ——     | 40     |
| `fontColor` | 文字颜色                                                                      | string          | ——     | #111   |
| `zIndex`    | 原生 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) 属性 | number / string | ——     | 9999   |

## Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 水印覆盖的内容 |

## Interface

组件导出以下类型定义：

```ts
import type { WatermarkInstance, WatermarkProps } from 'fighting-design'
```

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
