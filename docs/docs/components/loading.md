# Loading 加载

`Loading` 用于加载状态的提示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/loading)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/loading.md)

## 基本使用

`show` 属性可以控制是否展示 `loading` 加载

<f-button type="primary" @click="onclick1">开始 loading</f-button>
<f-loading :show="loading1" />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick1">开始 loading</f-button>
  <f-loading :show="loading1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading1 = ref(false)

  function onclick1() {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }
</script>
```

:::

## 自定义文案

`text` 和 `icon` 属性可以自定义展示的 `icon` 和说明文字

<f-button type="primary" @click="onclick2">玩命加载</f-button>
<f-loading :show="loading2" text="玩命加载中……" icon="f-icon-loading6" />

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick2">玩命加载</f-button>
  <f-loading :show="loading2" text="玩命加载中……" icon="f-icon-loading6" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading2 = ref(false)

  function onclick2() {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
    }, 1500)
  }
</script>
```

:::

## Attributes

| 参数         | 说明             | 类型    | 可选值 | 默认值 |
| ------------ | ---------------- | ------- | ------ | ------ |
| `show`       | 是否展示 loading | boolean | ——     | false  |
| `close`      | 是否点击可以关闭 | boolean | ——     | false  |
| `text`       | 说明文字         | string  | ——     | ——     |
| `icon`       | loading 的 icon  | string  | ——     | ——     |
| `text-color` | 说明文字颜色     | string  | ——     | ——     |
| `text-size`  | 说明文字大小     | string  | ——     | ——     |
| `background` | 遮罩层背景色     | string  | ——     | ——     |
| `opacity`    | 遮罩层透明度     | number  | ——     | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
<a href="https://github.com/yn22638" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/48940123?v=4" />
</a>

<script setup>
  import { ref } from 'vue'

  const loading1 = ref(false)

  function onclick1() {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }

  const loading2 = ref(false)

  function onclick2() {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
    }, 1500)
  }
</script>
