# Image 图片

## 基本使用

<f-image src="https://github.com/Tyh2001/images/blob/master/1.jpg?raw=true"/>

## Attributes

| 参数                | 说明                                                                                                         | 类型    | 可选值                                       | 默认值 |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | ------- | -------------------------------------------- | ------ |
| src                 | 图片路径                                                                                                     | string  | ——                                           | ——     |
| alt                 | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                      | string  | ——                                           | ——     |
| draggable           | 是否可以拖动                                                                                                 | boolean | ——                                           | true   |
| lazy                | 是否懒加载图片                                                                                               | boolean | ——                                           | false  |
| root-margin         | 触发懒加载的举例距离                                                                                         | string  | ——                                           | 100px  |
| width               | 图片的宽度                                                                                                   | string  | ——                                           | ——     |
| height              | 图片的高度                                                                                                   | string  | ——                                           | ——     |
| block               | 是否为块级元素                                                                                               | boolean | ——                                           | false  |
| fit                 | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性     | string  | `fill` `contain` `cover` `none` `scale-down` | ——     |
| select              | 是否可以选择复制                                                                                             | boolean | ——                                           | false  |
| referrer-policy     | 原生 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax) 属性 | string  | ——                                           | ——     |
| preview-list        | 开启图片预览                                                                                                 | array   | ——                                           | []     |
| preview-show-index  | 图片预览展示的首张图的索引，从 0 开始                                                                        | number  | ——                                           | 0      |
| preview-show-option | 是否展示图片预览下面的操作栏                                                                                 | boolean | ——                                           | true   |
| radius              | 配置圆角，传入一个单位                                                                                       | string  |                                              | 18px   |
| err-src             | 加载失败时要显示的地址                                                                                       |         |                                              |        |
|                     |                                                                                                              |         |                                              |        |
