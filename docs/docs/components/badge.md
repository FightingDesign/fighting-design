# Badge 角标

`Badge` 用于展示角标提示信息

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/badge)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/badge.md)

## 基本使用

`type` 属性可以配置角标的主题

<f-badge value="11" class="item">
  <f-button>default</f-button>
</f-badge>
<f-badge value="12" type="primary" class="item">
  <f-button>primary</f-button>
</f-badge>
<f-badge value="13" type="success" class="item">
  <f-button>success</f-button>
</f-badge>
<f-badge value="14" type="warning" class="item">
  <f-button>warning</f-button>
</f-badge>

<style>
  .item {
    margin-right: 20px;
  }
</style>

::: details 显示代码

```html
<f-badge value="11" class="item">
  <f-button>default</f-button>
</f-badge>
<f-badge value="12" type="primary" class="item">
  <f-button>primary</f-button>
</f-badge>
<f-badge value="13" type="success" class="item">
  <f-button>success</f-button>
</f-badge>
<f-badge value="14" type="warning" class="item">
  <f-button>warning</f-button>
</f-badge>

<style>
  .item {
    margin-right: 20px;
  }
</style>
```

:::

## 最大值

`max` 属性可以配置角标的最大值，该值仅在`value`的值是`Number`时生效

<f-badge :value="123" class="item">
  <f-button>默认最多99</f-button>
</f-badge>
<f-badge :value="37" :max="20" class="item">
  <f-button>最多20</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge :value="123" class="item">
  <f-button>默认最多99</f-button>
</f-badge>
<f-badge :value="37" :max="20" class="item">
  <f-button>最多20</f-button>
</f-badge>
```

:::

## 点

设置`isDot`属性，展示为一个点

<f-badge isDot class="item">消息</f-badge>

::: details 显示代码

```html
<f-badge isDot class="item">消息</f-badge>
```

:::

## 自定义文字

`value` 除了`Number`类型，还可以是`String`，自定义内容

<f-badge value="hot" class="item">
  <f-button>customize</f-button>
</f-badge>
<f-badge value="new" class="item">
  <f-button>customize</f-button>
</f-badge>

::: details 显示代码

```html
<f-badge value="hot" class="item">
  <f-button>customize</f-button>
</f-badge>
<f-badge value="new" class="item">
  <f-button>customize</f-button>
</f-badge>
```

:::

## Attributes

| 参数     | 说明                                          | 类型          | 可选值                                  | 默认值 |
| -------- | --------------------------------------------- | ------------- | --------------------------------------- | ------ |
| `value`  | 显示值                                        | string number | ——                                      | ——     |
| `max`    | `value` 为数字时的最大值，超出显示为 `value+` | number        | ——                                      | 99     |
| `isDot`  | 展示为一个点                                  | boolean       | ——                                      | false  |
| `hidden` | 是否显示                                      | boolean       | ——                                      | true   |
| `type`   | 样式主题                                      | string        | `primary` `success` `danger` `warning ` | danger |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>
