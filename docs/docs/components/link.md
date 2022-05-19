# Link 链接

## 基本使用

`type` 属性可以配置不同的链接类型，展示不同的颜色状态

<f-link type="primary">主要链接</f-link>
<f-link type="success">成功链接</f-link>
<f-link type="danger">危险链接</f-link>
<f-link type="warning">警告链接</f-link>
<f-link type="info">信息链接</f-link>

## Attributes

| 参数      | 说明                                                                                     | 类型    | 可选值                                                | 默认值  |
| --------- | ---------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------- | ------- |
| type      | link 的类型                                                                              | string  | ` primary` `success`<br /> `danger` `warning` `info ` | primary |
| href      | 链接的地址                                                                               | string  | ——                                                    | ——      |
| size      | link 的文字大小                                                                          | string  | ——                                                    | ——      |
| hover     | hover 状态的样式                                                                         | string  | `line` `bag`                                          | ——      |
| prohibit  | 是否禁用                                                                                 | boolean | ——                                                    | false   |
| leftIcon  | 左侧的 icon                                                                              | string  | ——                                                    | ——      |
| rightIcon | 右侧的 icon                                                                              | string  | ——                                                    | ——      |
| target    | 原生 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href)属性 | string  | `_self` `_blank` `_parent` `_top `                    | ——      |
| underline | 是否带有下划线                                                                           | boolean | ——                                                    | false   |
| color     | 自定义 link 颜色                                                                         | string  | ——                                                    | ——      |
| noCopy    | 是否禁止 copy                                                                            | boolean | ——                                                    | false   |

<style scoped>
.f-link {
  margin: 5px;
}
</style>
