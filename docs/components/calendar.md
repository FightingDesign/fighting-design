# Calendar 日历

每天都有好心情

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/calendar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/calendar.md)

## 基本使用

`date` 属性需要绑定一个日期对象

::: demo

<template #source>
<f-calendar v-model:date="date" />
</template>

```html
<template>
  <f-calendar v-model:date="date" />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## 显示农历

`lunar` 可以配置显示农历的日历

::: demo

<template #source>
<f-calendar v-model:date="date" lunar />
</template>

```html
<template>
  <f-calendar v-model:date="date" lunar />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## 带有边框

`border` 可以配置带有边框的日历

::: demo

<template #source>
<f-calendar v-model:date="date" border />
</template>

```html
<template>
  <f-calendar v-model:date="date" border />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## 不显示页头

`show-header` 可以控制是否显示头部操作栏

::: demo

<template #source>
<f-calendar v-model:date="date" :show-header="false"/>
</template>

```html
<template>
  <f-calendar v-model:date="date" :show-header="false" />
</template>

<script lang="ts" setup>
  const date = new Date()
</script>
```

:::

## Attributes

| 参数               | 说明                                     | 类型                                         | 可选值 | 默认值   |
| ------------------ | ---------------------------------------- | -------------------------------------------- | ------ | -------- |
| `v-model:date`     | 绑定日期                                 | date                                         | ——     | new Date |
| `lunar`            | 是否显示农历或节日，仅支持 `1900 ~ 2100` | boolean                                      | ——     | false    |
| `show-header`      | 是否显示头部                             | boolean                                      | ——     | true     |
| `border`           | 是否显示边框                             | boolean                                      | ——     | false    |
| `border-color`     | 自定义边框颜色                           | string                                       | ——     | ——       |
| `day-cell-height`  | 日期单元格高度                           | string / number                              | ——     | ——       |
| `week-cell-height` | 星期单元格高度                           | string / number                              | ——     | ——       |
| `on-change`        | 日期和月份任何变时触发的回调             | <a href="#calendarchange">CalendarChange</a> | ——     | ——       |
| `on-change-month`  | 月份改变时触发的回调                     | <a href="#calendarchange">CalendarChange</a> | ——     | ——       |
| `on-change-date`   | 日期改变时触发的回调                     | <a href="#calendarchange">CalendarChange</a> | ——     | ——       |

## Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| `last-change` | 自定义上个月切换按钮 |
| `now-change`  | 自定义今天切换按钮   |
| `next-change` | 自定义下个月切换按钮 |

## Interface

组件导出以下类型定义：

```ts
import type { CalendarInstance, CalendarProps, CalendarChange } from 'fighting-design'
```

### CalendarChange

```ts
type CalendarChange = (year: number, month: number, date: number) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/briver0825" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/87807886?v=4" />
</a>

<script setup lang="ts">
  const date = new Date()
</script>
