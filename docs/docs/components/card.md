# Card 卡片

## 基本使用

`title` 属性可以配置卡片的标题

<f-card title="卡片标题">卡片标题</f-card>

::: details 显示代码
```html
<f-card title="卡片标题">卡片标题</f-card>
```

`round` 是否为圆角卡片
<f-card round>圆角卡片</f-card>

::: details 显示代码
```html
<f-card round>圆角卡片</f-card>
```

`target` 渐变样式，`never`为无渐变，`hover`为移入显示渐变，`always`为一直有渐变
<f-card target="never">无渐变</f-card>
<f-card target="hover">移入显示渐变</f-card>
<f-card target="always">一直有渐变</f-card>

::: details 显示代码
```html
<f-card target="never">无渐变</f-card>
<f-card target="hover">移入显示渐变</f-card>
<f-card target="always">一直有渐变</f-card>
```



:::

## Card Attributes

| 参数         | 说明                                     | 类型    | 可选值                                                         | 默认值   |
| ------------ | ---------------------------------------- | ------- | -------------------------------------------------------------- | -------- |
| title         |  卡片标题                       | string | ——                                                             |       |
| round        | 是否为圆角卡片                           | boolean | ——                                                             | 
| padding        | 卡片内边距                          | string | ——                                                             |   20px  ｜
| target        | 渐变触发方式                           | string | never, hover, always                                 |     always   ｜
