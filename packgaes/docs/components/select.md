# Select 选择器

## 基本使用

选择器的基本用法

<tyh-select v-model="value" placeholder="请选择">
  <tyh-option
    v-for="(item, index) in options"
    :key="index"
    :value="item.value"
  >
    {{ item.label }}
  </tyh-option>
</tyh-select>

```html
<template>
  <tyh-select v-model="value" placeholder="请选择">
    <tyh-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </tyh-option>
  </tyh-select>
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref('选项2')
  const options = [
    {
      value: '选项1',
      label: '上海'
    },
    {
      value: '选项2',
      label: '北京'
    },
    {
      value: '选项3',
      label: '杭州'
    },
    {
      value: '选项4',
      label: '天津'
    },
    {
      value: '选项5',
      label: '大连'
    }
  ]
</script>
```

## Attributes

tyh-select

| 参数    | 说明      | 类型   | 可选值 | 默认值 |
| ------- | --------- | ------ | ------ | ------ |
| v-model | 绑定值    | string | ——     | ——     |
| name    | 原生 name | string | ——     | ——     |

tyh-option

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| value | 选项的值   | string | ——     | ——     |
| label | 分组的组名 | string | ——     | ——     |

<script setup>
  import { ref } from 'vue'
  const value = ref('选项2')
  const options = [
    {
      value: '选项1',
      label: '上海'
    },
    {
      value: '选项2',
      label: '北京'
    },
    {
      value: '选项3',
      label: '杭州'
    },
    {
      value: '选项4',
      label: '天津'
    },
    {
      value: '选项5',
      label: '大连'
    }
  ]
</script>
