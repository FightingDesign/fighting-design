# Empty 空状态

`Empty` 用于页面中展示空状态时的占位提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/empty)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/empty.md)

## 基本使用

`content` 属性可以配置展示的内容

<f-empty content="在这里，后续提供更多服务"></f-empty>

::: details 显示代码

```html
<f-empty content="在这里，后续提供更多服务"></f-empty>
```

:::
## Attributes

| 参数          | 说明                                                 | 类型    | 可选值                                           | 默认值  |
| ------------- | ---------------------------------------------------- | ------- | ------------------------------------------------ | ------- |
| `background`  | 背景颜色                                             | string  | ——                                               | ——      |

## Slots

| 名称      | 说明           |
| --------- | ------------- |
| `footer`  | 自定义页脚内容 |
| `image`   | 自定义图片     |

## Contributors

<a href="https://github.com/jardeng" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/19302222?v=4" />
</a>

<style scoped>
.f-empty {
  margin: 5px;
}
</style>
