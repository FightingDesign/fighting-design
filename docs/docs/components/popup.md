# Popup 弹出窗口

弹窗相关就用它！

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/popup)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/popup.md)

## 基本使用

`v-model:visible` 属性来控制展示状态

<f-button type="primary" @click="visible1 = true">打开</f-button>

<f-popup v-model:visible="visible1">
  <p>这是一段文字</p>
  <p>这是一段文字</p>
  <p>这是一段文字</p>
</f-popup>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-popup v-model:visible="visible1">
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
  </f-popup>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(false)
</script>
```

:::

## Attributes

| 参数              | 说明                 | 类型            | 可选值                                        | 默认值           |
| ----------------- | -------------------- | --------------- | --------------------------------------------- | ---------------- |
| `v-model:visible` | 绑定值，控制是否展示 | boolean         | ——                                            | false            |
| `append-to-body`  | 是否追加到 `body`    | boolean         | ——                                            | false            |
| `show-mask`       | 是否展示遮罩层       | boolean         | ——                                            | true             |
| `mask-close`      | 是否点击遮罩层关闭   | boolean         | ——                                            | true             |
| `modal-blur`      | 是否模糊遮罩层       | boolean         | ——                                            | false            |
| `z-index`         | 层级                 | number          | ——                                            | 1999             |
| `mask-background` | 自定义遮罩层背景色   | string          | ——                                            | rgba(35, 39, 46) |
| `mask-opacity`    | 遮罩层透明度         | number          | ——                                            | 0.5              |
| `direction`       | 弹出方向             | string          | `left` `right` <br /> `top` `bottom` `center` | center           |
| `popupSize`       | 弹出窗口尺寸         | string / number | ——                                            | ——               |

## Events

| 事件名称    | 说明               |
| ----------- | ------------------ |
| `open`      | 打开动画开始的回调 |
| `open-end`  | 打开动画结束的回调 |
| `close`     | 关闭动画开始的回调 |
| `close-end` | 关闭动画结束的回调 |

## Slots

| 插槽名称  | 说明说明 |
| --------- | -------- |
| `default` | 默认内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  PopupInstance,
  PopupPropsType,
  PopupDirectionType
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(false)
</script>
