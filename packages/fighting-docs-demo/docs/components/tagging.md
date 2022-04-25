# Tagging 标注

## 基本使用

标注的基本用法，用于在文本之间标记重点信息

type 属性可以配置标注的类型

<tyh-tagging>标注 1</tyh-tagging>
<tyh-tagging type="primary">标注 2</tyh-tagging>
<tyh-tagging type="success">标注 3</tyh-tagging>
<tyh-tagging type="danger">标注 4</tyh-tagging>
<tyh-tagging type="warning">标注 5</tyh-tagging>

```html
<tyh-tagging>标注1</tyh-tagging>
<tyh-tagging type="primary">标注2</tyh-tagging>
<tyh-tagging type="success">标注3</tyh-tagging>
<tyh-tagging type="danger">标注4</tyh-tagging>
<tyh-tagging type="warning">标注5</tyh-tagging>
```

## 文字配置

size 属性可以配置标注的文字大小

<tyh-tagging size="14">使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。</tyh-tagging>

```html
<tyh-tagging size="14">
  使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
</tyh-tagging>
```

## Attributes

| 参数  | 说明     | 类型   | 可选值                                         | 默认值  |
| ----- | -------- | ------ | ---------------------------------------------- | ------- |
| type  | 类型     | string | default / primary / success / danger / warning | default |
| size  | 文字大小 | string | ——                                             | 13      |
| color | 文字颜色 | string | ——                                             | ——      |
