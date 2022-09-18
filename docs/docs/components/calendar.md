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

## 不显示页头

`show-header` 可以控制是否显示头部操作栏

<f-calendar v-model:date="date" :show-header="false"/>

::: details 显示代码

```html
<template>
  <f-calendar v-model:date="date" :show-header="false" />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## 带有页脚

`show-footer` 属性可以配置带有页脚详细信息的日历

<f-calendar v-model:date="date" show-footer/>

::: details 显示代码

```html
<template>
  <f-calendar v-model:date="date" show-footer />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## Attributes

| 参数           | 说明               | 类型    | 可选值 | 默认值   |
| -------------- | ------------------ | ------- | ------ | -------- |
| `v-model:date` | 绑定日期           | date    | ——     | new Date |
| `lunar`        | 是否显示农历和节日 | boolean | ——     | false    |
| `show-header`  | 是否显示头部       | boolean | ——     | true     |
| `show-footer`  | 是否显示页脚       | boolean | ——     | false    |
| `square`       | 是否日期直角样式   | boolean | ——     | false    |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  const date = new Date()
</script>
