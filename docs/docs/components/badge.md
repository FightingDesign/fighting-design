# Badge 角标

`Badge` 用于展示角标提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/badge)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/badge.md)

## 基本使用

`type` 属性可以配置角标的主题

<f-badge value="11">
  <f-button>default</f-button>
</f-badge>
<f-badge value="12" type="primary">
  <f-button>primary</f-button>
</f-badge>
<f-badge value="13" type="success">
  <f-button>success</f-button>
</f-badge>
<f-badge value="14" type="warning">
  <f-button>warning</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge value="11">
  <f-button>default</f-button>
</f-badge>
<f-badge value="12" type="primary">
  <f-button>primary</f-button>
</f-badge>
<f-badge value="13" type="success">
  <f-button>success</f-button>
</f-badge>
<f-badge value="14" type="warning">
  <f-button>warning</f-button>
</f-badge>
```

:::

## 最大值

`max` 属性可以配置角标的最大值，该值仅在 `value` 的值是 `Number` 时生效

<f-badge :value="123">
  <f-button>默认最多99</f-button>
</f-badge>
<f-badge :value="37" :max="20">
  <f-button>最多20</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge :value="123">
  <f-button>默认最多99</f-button>
</f-badge>
<f-badge :value="37" :max="20">
  <f-button>最多20</f-button>
</f-badge>
```

:::

## 小红点

设置 `dot` 属性，展示为一个点

<f-badge dot class="item">消息</f-badge>

::: details 显示代码

```html
<f-badge dot class="item">消息</f-badge>
```

:::

## 自定义文字

`value` 除了 `Number` 类型，还可以是 `String`，自定义内容

<f-badge value="hot">
  <f-button>customize</f-button>
</f-badge>
<f-badge value="new">
  <f-button>customize</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge value="hot">
  <f-button>customize</f-button>
</f-badge>
<f-badge value="new">
  <f-button>customize</f-button>
</f-badge>
```

:::

## 自定义颜色

你也可以自定义 `badge` 的颜色

<f-badge :value="123" color="skyblue" text-color="black">
  <f-button>自定义颜色</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge :value="123" color="skyblue" text-color="black">
  <f-button>自定义颜色</f-button>
</f-badge>
```

:::

## Attributes

| 参数         | 说明                                          | 类型          | 可选值                                 | 默认值 |
| ------------ | --------------------------------------------- | ------------- | -------------------------------------- | ------ |
| `value`      | 显示值                                        | string number | ——                                     | ——     |
| `max`        | `value` 为数字时的最大值，超出显示为 `value+` | number        | ——                                     | 99     |
| `dot`        | 展示为一个点                                  | boolean       | ——                                     | false  |
| `show`       | 是否显示                                      | boolean       | ——                                     | true   |
| `type`       | 样式主题                                      | string        | `primary` `success` `danger` `warning` | danger |
| `color`      | 自定义颜色                                    | string        | ——                                     | ——     |
| `text-color` | 自定义文字颜色                                | string        | ——                                     | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>

<style scoped>
.f-badge {
  margin: 10px;
}
</style>
