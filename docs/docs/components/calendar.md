## Calendar 日历

每天都有好心情

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/calendar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/calendar.md)

## 基本使用

`date` 属性需要绑定一个日期对象

<f-calendar v-model:date="date" />

::: details 显示代码

```html
<template>
  <f-calendar v-model:date="date" />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## Attributes

| 参数           | 说明     | 类型 | 可选值 | 默认值   |
| -------------- | -------- | ---- | ------ | -------- |
| `v-model:date` | 绑定日期 | date | ——     | new Date |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  const date = new Date()
</script>
