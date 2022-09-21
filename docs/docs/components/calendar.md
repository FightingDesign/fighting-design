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

## 显示农历

`lunar` 可以配置显示农历的日历

<f-calendar v-model:date="date" lunar/>

::: details 显示代码

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

<f-calendar v-model:date="date" border/>

::: details 显示代码

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

## 备忘事件

`memorandum` 将指定日期添加备忘事件项

<f-calendar v-model:date="date" :memorandum="memorandumList"/>

::: details 显示代码

```html
<template>
  <f-calendar v-model:date="date" :memorandum="memorandumList" />
</template>

<script lang="ts" setup>
  const date = new Date()

  const memorandumList = {
    '2022-9-21': [
      { type: 'danger', content: '今天要考试' },
      { type: 'success', content: '今天要去露营' },
      { type: 'danger', content: '晚上有饭局' },
      { type: 'danger', content: '今天早点睡' }
    ],
    '2022-9-27': [
      { type: 'default', content: '今天要考试' },
      { type: 'danger', content: '今天要考试' },
      { type: 'danger', content: '今天要考试' }
    ]
  }
</script>
```

:::

## Attributes

| 参数               | 说明               | 类型            | 可选值 | 默认值   |
| ------------------ | ------------------ | --------------- | ------ | -------- |
| `v-model:date`     | 绑定日期           | date            | ——     | new Date |
| `lunar`            | 是否显示农历和节日 | boolean         | ——     | false    |
| `show-header`      | 是否显示头部       | boolean         | ——     | true     |
| `show-footer`      | 是否显示页脚       | boolean         | ——     | false    |
| `border`           | 是否显示边框       | boolean         | ——     | false    |
| `border-color`     | 自定义边框颜色     | string          | ——     | #eee     |
| `day-cell-height`  | 日期单元格高度     | string / number | ——     | 85px     |
| `week-cell-height` | 星期单元格高度     | string / number | ——     | 50px     |
| `memorandum`       | 备忘事件           | object          | ——     | null     |

## Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| `last-change` | 自定义上个月切换按钮 |
| `now-change`  | 自定义今天切换按钮   |
| `next-change` | 自定义下个月切换按钮 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  const date = new Date()

  const memorandumList = {
    '2022-9-21': [
      { type: 'danger', content: '今天要考试' },
      { type: 'success', content: '今天要去露营' },
      { type: 'danger', content: '晚上有饭局' },
      { type: 'danger', content: '今天早点睡' }
    ],
    '2022-9-27': [
      { type: 'default', content: '今天要考试' },
      { type: 'danger', content: '今天要考试' },
      { type: 'danger', content: '今天要考试' }
    ]
  }
</script>
