# Table 表格

将数据格式化

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/table)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/table.md)

## 基本使用

## Attributes

| 参数                   | 说明                       | 类型     | 可选值                   | 默认值 |
| ---------------------- | -------------------------- | -------- | ------------------------ | ------ |
| `modelValue / v-model` | 绑定值                     | string   | ——                       | false  |
| `size`                 | 组件尺寸                   | string   | `large` `middle` `small` | middle |
| `disabled`             | 是否禁用                   | boolean  | ——                       | false  |
| `icon`                 | 自定义 icon                | string   | ——                       | ——     |
| `close-color`          | 自定义关闭状态背景色       | string   | ——                       | ——     |
| `open-color`           | 自定义开启状态背景色       | string   | ——                       | ——     |
| `open-text`            | 自定义右侧的文字描述       | string   | ——                       | ——     |
| `close-text`           | 自定义左侧的文字描述       | string   | ——                       | ——     |
| `square`               | 是否为方形开关             | boolean  | ——                       | false  |
| `change`               | 绑定值发生改变时触发的回调 | Function | ——                       | null   |

## Interface

组件导出以下类型定义：

```ts
import type {
  SwitchInstance,
  SwitchPropsType,
  SwitchSizeType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

</script>
