# Tag 标签

`Tag` 用于评分或打星

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/rate)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/rate.md)

## 基本使用

通过`v-model`绑定选中星星数量,通过`max`控制星星总个数
<f-rate :max="10" v-model="rateVal" />

::: details 显示代码

```html
<f-rate :max="10" v-model="rateVal" />
```

## 自定义颜色

`effect-color` 属性可以配置星星选中时的颜色, `invalid-color`属性可以配置星星未选中时的颜色
<f-rate effect-color="red" invalid-color="green"  />

::: details 显示代码

```html
<f-rate effect-color="red" invalid-color="green" />
```

## 辅助文字

`text-show`+`text-arr`属性可以配置星星选中时提示的文字
<f-rate 
    :text-arr="['一','二','三','四','五']" 
    :text-show="true"
  />

::: details 显示代码

```html
<f-rate :text-arr="['一','二','三','四','五']" :text-show="true" />
```

:::

## Attributes

| 参数             | 说明                         | 类型            | 可选值 | 默认值 |
| ---------------- | ---------------------------- | --------------- | ------ | ------ |
| `v-model`        | 绑定值                       | number          | ——     | ——     |
| `effect-color`   | 选中颜色                     | string          | ——     | ——     |
| `invalid-color ` | 未选中的颜色                 | string          | ——     | ——     |
| `readonly`       | 是否只读                     | boolean         | ——     | false  |
| `max`            | 最大分值，展示的星星数量     | number          | ——     | 5      |
| `half`           | 是否可半选                   | boolean         | ——     | false  |
| `double-clear`   | 是否双击第一个颗星星可以清空 | boolean         | ——     | false  |
| `size`           | 星星尺寸                     | string / number |        | ——     |
| `text-show`      | 是否展示辅助文字             | boolean         | ——     | false  |
| `text-color`     | 辅助文字颜色                 | string          | ——     | ——     |
| `text-arr`       | 辅助文字数组                 | []              | ——     | ——     |
| `text-size`      | 辅助文字尺寸                 | string / number | ——     | ——     |

## Events

| 事件名称 | 说明                                                   |
| -------- | ------------------------------------------------------ |
| `change` | 在非只读情况下,点击星星时触发,并且携带当前星星数量参数 |

## Interface

组件导出以下类型定义：

```ts
import type { RatePropsType, RateInstance } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/caicailv" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/46363316?s=400&u=1acd849d3c5c95055bf4eebd713532f613abdca3&v=4" />
</a>
