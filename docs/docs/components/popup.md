# Popup 弹出窗口

弹窗相关就用它！

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/popup)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/popup.md)

## 基本使用

`v-model:visible` 属性来控制展示状态

`direction` 属性可以配置不同的弹出方向

<demo2-vue />

::: details 显示代码

```html
<template>
  <f-space>
    <f-button type="primary" @click="onShow('center')">居中弹出</f-button>
    <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
    <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
    <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
    <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
  </f-space>

  <f-popup v-model:visible="visible2" :direction="direction" :padding="30">
    <h3>沁园春·雪</h3>

    <p>北国风光，千里冰封，万里雪飘。</p>
    <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
    <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
    <p>须晴日，看红装素裹，分外妖娆。</p>

    <br />

    <p>江山如此多娇，引无数英雄竞折腰。</p>
    <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
    <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
    <p>俱往矣，数风流人物，还看今朝。</p>
  </f-popup>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const visible2 = ref(false)
  const direction = ref('center')

  const onShow = (dir) => {
    direction.value = dir
    visible2.value = true
  }
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
| `padding`         | 自定义内边距         | string / number | ——                                            | ——               |

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
  import demo2Vue from './_demos/popup/demo2.vue'
</script>
