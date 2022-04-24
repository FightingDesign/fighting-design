# TurnPage 翻页

## 基本使用

翻页的基础用法

direction 属性用于配置子组件，此属性为必传参数，它决定了你的翻页标识文字的显示位置

<tyh-turn-page><tyh-turn-page-item direction="left" url="">上一页</tyh-turn-page-item><tyh-turn-page-item direction="right" url="">下一页</tyh-turn-page-item></tyh-turn-page>

```html
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="">上一页</tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">下一页</tyh-turn-page-item>
</tyh-turn-page>
```

## 居中显示

center 属性可以配置居中显示

<tyh-turn-page center><tyh-turn-page-item direction="left" url="">上一页 - 居中</tyh-turn-page-item><tyh-turn-page-item direction="right" url="">下一页 - 居中</tyh-turn-page-item></tyh-turn-page>

```html
<tyh-turn-page center>
  <tyh-turn-page-item direction="left" url="">
    上一页 - 居中
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">
    下一页 - 居中
  </tyh-turn-page-item>
</tyh-turn-page>
```

## 自定义图标

icon 属性可以配置其他 icon

<tyh-turn-page><tyh-turn-page-item direction="left" url="" icon="tyh-ui-shouye-xianxing">首页</tyh-turn-page-item><tyh-turn-page-item direction="right" url="" icon="tyh-ui-direction-right">下一页</tyh-turn-page-item></tyh-turn-page>

```html
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="" icon="tyh-ui-shouye-xianxing">
    首页
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="" icon="tyh-ui-direction-right">
    下一页
  </tyh-turn-page-item>
</tyh-turn-page>
```

## Attributes

tyh-turn-page

| 参数   | 说明     | 类型    | 可选值 | 默认值 |
| ------ | -------- | ------- | ------ | ------ |
| center | 居中显示 | boolean | ——     | false  |

tyh-turn-page-item

| 参数      | 说明       | 类型    | 可选值       | 默认值 |
| --------- | ---------- | ------- | ------------ | ------ |
| direction | 文字位置   | string  | left / right | ——     |
| url       | 跳转的路由 | string  | ——           | ——     |
| icon      | 左右的图标 | string  | ——           | ——     |
| prohibit  | 是否禁用   | boolean | ——           | false  |
