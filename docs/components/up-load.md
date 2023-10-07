# Up Load 文件上传

千万不要上传 2G 以上的文件

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/up-load)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/up-load.md)

## 基本使用

需要使用 `v-model:files` 绑定一个数组

::: demo

<template #source>
<f-up-load v-model:files="files1" />
</template>

```html
<template>
  <f-up-load v-model:files="files1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const files1 = ref([])
</script>
```

:::

## 上传多个

`multiple` 属性可配置上传多个文件

::: demo

<template #source>
<f-up-load v-model:files="files2" multiple />
</template>

```html
<template>
  <f-up-load v-model:files="files2" multiple />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const files2 = ref([])
</script>
```

:::

## 限制数量

`max-length` 属性可限制上传文件的数量

::: demo

<template #source>
<f-up-load v-model:files="files3" multiple :max-length="4" />
</template>

```html
<template>
  <f-up-load v-model:files="files3" multiple :max-length="4" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const files3 = ref([])
</script>
```

:::

## 拖拽上传

`drag` 属性可配置拖拽上传

::: demo

<template #source>
<f-up-load v-model:files="files4" multiple drag />
</template>

```html
<template>
  <f-up-load v-model:files="files4" multiple drag />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const files4 = ref([])
</script>
```

:::

## Attributes

| 参数            | 说明                               | 类型                                         | 可选值 | 默认值 |
| --------------- | ---------------------------------- | -------------------------------------------- | ------ | ------ |
| `v-model:files` | 文件列表                           | array                                        | ——     | ——     |
| `accept`        | 接受的文件类型                     | string                                       | ——     | ——     |
| `name`          | 原生 name 属性                     | string                                       | ——     | ——     |
| `drag`          | 是否可拖拽上传                     | boolean                                      | ——     | false  |
| `is-remove`     | 是否可删除                         | boolean                                      | ——     | true   |
| `show-list`     | 是否展示文件列表                   | boolean                                      | ——     | false  |
| `multiple`      | 是否可多选                         | boolean                                      | ——     | false  |
| `max-size`      | 最大上传尺寸                       | number                                       | ——     | ——     |
| `max-length`    | 最大上传数量                       | number                                       | ——     | ——     |
| `disabled`      | 是否禁用                           | boolean                                      | ——     | false  |
| `on-load`       | 上传成功后执行的回调               | <a href="#uploadcallback">UpLoadCallback</a> | ——     | ——     |
| `on-change`     | 绑定的文件列表发生改变时触发的回调 | <a href="#uploadcallback">UpLoadCallback</a> | ——     | ——     |

## Slots

| 名称      | 说明               |
| --------- | ------------------ |
| `default` | 自定义上传按钮样式 |

## Interface

组件导出以下类型定义：

```ts
import type { UpLoadInstance, UpLoadProps, UpLoadCallback } from 'fighting-design'
```

### UpLoadCallback

```ts
type UpLoadCallback = (files: File[]) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const files1 = ref([])
  const files2 = ref([])
  const files3 = ref([])
  const files4 = ref([])
</script>
