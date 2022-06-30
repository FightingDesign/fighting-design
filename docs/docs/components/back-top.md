# BackTop 返回顶部

`BackTop` 用户返回网页的顶部

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/back-top)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/back-top.md)

::: danger
由于 vitepress 使用服务端渲染展示，该组件暂不方便进行展示，后续更新。。。
:::

## 基本使用

`BackTop` 的基本使用

::: details 显示代码

```html
<f-back-top>返回顶部</f-back-top>
```

:::

## Attractive

| 参数             | 说明                                                                     | 类型    | 可选值          | 默认值 |
| ---------------- | ------------------------------------------------------------------------ | ------- | --------------- | ------ |
| `round`          | 是否为圆角                                                               | boolean | ——              | false  |
| `behavior`       | 滚动模式                                                                 | string  | `smooth` `auto` | smooth |
| `visible-height` | 超出的距离展示                                                           | number  | ——              | 200    |
| `right`          | 距离右侧的距离                                                           | string  | ——              | ——     |
| `bottom`         | 距离底部的距离                                                           | string  | ——              | ——     |
| `z-index`        | 原生 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) | number  | ——              | 200    |
| `top`            | 点击返回距离顶部的距离                                                   | number  | ——              | 0      |
| `listen-el`      | 监视指定元素，需要传入指定的 class 或 id，如：.box #app                  | string  | ——              | ——     |
| `background`     | 背景色                                                                   | string  | ——              | ——     |
| `color`          | 文字颜色                                                                 | string  | ——              | ——     |

## Slots

| 名称      | 说明 |
| --------- | ---- |
| `default` | 内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/XiaoLi-sach" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/55753927?v=4" />
</a>
