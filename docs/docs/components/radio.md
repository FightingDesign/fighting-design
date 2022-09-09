# Radio 单选框

你只有一个选择

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/radio)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/radio.md)

## 基本使用

<f-radio-group v-model="radio1">
  <f-radio label="1">备选项1</f-radio>
  <f-radio label="2">备选项2</f-radio>
  <f-radio label="3">备选项3</f-radio>
</f-radio-group>

## Attributes

| 参数            | 说明                              | 类型                      | 可选值 | 默认值  |
| --------------- | --------------------------------- | ------------------------- | ------ | ------- |
| value / v-model | 绑定值                            | string / number / boolean | ——     | ——      |
| disabled        | 是否禁用                          | boolean                   | ——     | false   |
| text-color      | 按钮形式的 Radio 激活时的文本颜色 | string                    | —      | #ffffff |

## Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

<script setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
</script>
