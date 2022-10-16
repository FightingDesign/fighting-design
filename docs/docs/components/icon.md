# Icon 图标

一个小图标组件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/icon)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/icon.md)

## 基本使用

通过 `icon` 属性来给 `icon` 添加类名，来显示不同的图标

`size` 属性可以配置 `icon` 的大小，后面必须要加入单位

<f-icon size="40px" icon="f-icon-default-template" />
<f-icon size="40px" icon="f-icon-Customermanagement" />
<f-icon size="40px" icon="f-icon-Daytimemode" />
<f-icon size="40px" icon="f-icon-editor" />
<f-icon size="40px" icon="f-icon-email" />

::: details 显示代码

```html
<f-icon size="40px" icon="f-icon-default-template" />
<f-icon size="40px" icon="f-icon-Customermanagement" />
<f-icon size="40px" icon="f-icon-Daytimemode" />
<f-icon size="40px" icon="f-icon-editor" />
<f-icon size="40px" icon="f-icon-email" />
```

:::

## Attributes

| 参数         | 说明                           | 类型            | 可选值 | 默认值 |
| ------------ | ------------------------------ | --------------- | ------ | ------ |
| `icon`       | icon 的 class                  | string          | ——     | ——     |
| `font-class` | FontClass 用于自定义 icon 集合 | string          | ——     | ——     |
| `color`      | icon 的颜色                    | string          | ——     | ——     |
| `size`       | icon 的字体大小                | string / number | ——     | 16px   |

## Events

| 事件名称 | 说明     |
| -------- | -------- |
| `click`  | 点击触发 |

## Icon 集合

点击即可复制类名

<icon-vue />

## Interface

组件导出以下类型定义：

```ts
import type { IconInstance, IconPropsType } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
import iconVue from './_components/icon.vue'
</script>
