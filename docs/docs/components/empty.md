# Empty 空状态

`Empty` 用于页面中展示空状态时的占位提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/empty)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/empty.md)

## 基本使用

`content` 属性可以配置展示的内容

<f-empty content="在这里，后续提供更多服务" />

::: details 显示代码

```html
<f-empty content="在这里，后续提供更多服务" />
```

:::

## 内容文字大小

`content-size` 属性可以配置 `empty` 内容的字体大小

`content-size` 必须写入指定的数值和单位才可以正常工作

<f-empty content-size="30px" />

::: details 显示代码

```html
<f-empty content-size="30px" />
```

:::

## 内容文字颜色

`content-color` 属性可以配置 `empty` 内容文字的颜色

<f-empty content-color="orange" />

::: details 显示代码

```html
<f-empty content-color="orange" />
```

:::

## 自定义图片地址

`image-src` 属性可以配置 `empty` 展示数据状态的图片

<f-empty image-src="https://tianyuhao.cn/images/auto/1.jpg"/>

::: details 显示代码

```html
<f-empty image-src="https://tianyuhao.cn/images/auto/1.jpg" />
```

:::

## 自定义图片大小

`image-size` 属性可以配置自定义的图片大小

<f-empty image-src="https://tianyuhao.cn/images/auto/1.jpg" image-size="200px" />

::: details 显示代码

```html
<f-empty image-src="https://tianyuhao.cn/images/auto/1.jpg" image-size="200px" />
```

:::

## 自定义背景色

`background` 属性可以配置 `empty` 的背景颜色

<f-empty background="#489EE2" image-size="300px"/>

::: details 显示代码

```html
<f-empty background="#489EE2" image-size="300px" />
```

:::

## Attributes

| 参数            | 说明           | 类型   | 可选值 | 默认值   |
| --------------- | -------------- | ------ | ------ | -------- |
| `content`       | 展示的内容     | string | ——     | 暂无数据 |
| `content-size`  | 内容文字大小   | string | ——     | ——       |
| `content-color` | 内容文字颜色   | string | ——     | ——       |
| `image-src`     | 自定义图片地址 | string | ——     | ——       |
| `image-size`    | 自定义图片尺寸 | string | ——     | ——       |
| `background`    | 自定义背景色   | string | ——     | ——       |

## Slots

| 名称     | 说明           |
| -------- | -------------- |
| `footer` | 自定义页脚内容 |
| `image`  | 自定义图片     |

## Interface

组件导出以下类型定义：

```ts
import type { EmptyInstance, EmptyPropsType } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<style scoped>
.f-empty {
  margin: 5px;
}
</style>
