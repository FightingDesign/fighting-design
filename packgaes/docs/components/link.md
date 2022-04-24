# Link 链接

## 基本使用

链接的基本使用

<tyh-link url="">链接一</tyh-link>
<tyh-link url="" type="primary">链接二</tyh-link>
<tyh-link url="" type="success">链接三</tyh-link>
<tyh-link url="" type="danger">链接四</tyh-link>
<tyh-link url="" type="warning">链接五</tyh-link>

```html
<tyh-link url="">链接一</tyh-link>
<tyh-link url="" type="primary">链接二</tyh-link>
<tyh-link url="" type="success">链接三</tyh-link>
<tyh-link url="" type="danger">链接四</tyh-link>
<tyh-link url="" type="warning">链接五</tyh-link>
```

## 带有下划线

underline 属性可以配置带有下划线

<tyh-link :underline="false">链接一</tyh-link>
<tyh-link :underline="false" type="primary">链接二</tyh-link>
<tyh-link :underline="false" type="success">链接三</tyh-link>
<tyh-link :underline="false" type="danger">链接四</tyh-link>
<tyh-link :underline="false" type="warning">链接五</tyh-link>

```html
<tyh-link :underline="false">链接一</tyh-link>
<tyh-link :underline="false" type="primary">链接二</tyh-link>
<tyh-link :underline="false" type="success">链接三</tyh-link>
<tyh-link :underline="false" type="danger">链接四</tyh-link>
<tyh-link :underline="false" type="warning">链接五</tyh-link>
```

## 禁用链接

prohibit 属性可以禁用链接标签

<tyh-link url="" prohibit>禁用链接一</tyh-link>
<tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
<tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
<tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
<tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>

```html
<tyh-link url="" prohibit>禁用链接一</tyh-link>
<tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
<tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
<tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
<tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
```

## 带有 Icon

icon 属性可以配置 icon

<tyh-link url="" icon="tyh-ui-favorite-filling">链接一</tyh-link>
<tyh-link url="" icon="tyh-ui-attachment" type="primary">链接二</tyh-link>
<tyh-link url="" icon="tyh-ui-customer-service" type="success">链接三</tyh-link>
<tyh-link url="" icon="tyh-ui-filter" type="danger">链接四</tyh-link>
<tyh-link url="" icon="tyh-ui-good" type="warning">链接五</tyh-link>

```html
<tyh-link url="" icon="tyh-ui-favorite-filling">链接一</tyh-link>
<tyh-link url="" icon="tyh-ui-attachment" type="primary">链接二</tyh-link>
<tyh-link url="" icon="tyh-ui-customer-service" type="success">链接三</tyh-link>
<tyh-link url="" icon="tyh-ui-filter" type="danger">链接四</tyh-link>
<tyh-link url="" icon="tyh-ui-good" type="warning">链接五</tyh-link>
```

## Attributes

| 参数      | 说明           | 类型    | 可选值                               | 默认值 |
| --------- | -------------- | ------- | ------------------------------------ | ------ |
| url       | 跳转的路径     | string  | ——                                   | ——     |
| type      | 链接的类型     | string  | primary / success / danger / warning | ——     |
| underline | 无下划线       | boolean | ——                                   | true   |
| target    | 以新的窗口打开 | string  | 同原生 target 属性 \_blank           | ——     |
| icon      | icon           | string  | ——                                   | ——     |
| prohibit  | 禁用状态       | boolean | ——                                   | false  |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/tag">
    Tag 标签
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/input">
    Input 输入框
  </tyh-turn-page-item>
</tyh-turn-page>
