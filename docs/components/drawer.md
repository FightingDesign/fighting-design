# Drawer 抽屉

在浏览器中使用抽屉

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/drawer)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/drawer.md)

## 基本使用

`v-model:visible` 属性来控制展示状态

::: demo

<template #source>
<f-space>
<f-button type="primary" @click="onShow('left')">从左往右开</f-button>
<f-button type="primary" @click="onShow('right')">从右往左开</f-button>
<f-button type="primary" @click="onShow('top')">从上往下开</f-button>
<f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
</f-space>

<f-drawer v-model:visible="visible1" title="Title" :direction="direction">
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
</f-drawer>
</template>

```html
<template>
  <f-space>
    <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
    <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
    <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
    <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
  </f-space>

  <f-drawer v-model:visible="visible1" title="Title" :direction="direction">
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
  </f-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { DrawerDirection } from 'fighting-design'

  const visible1 = ref(false)
  const direction = ref<DrawerDirection>('right')

  const onShow = (dir: DrawerDirection): void => {
    direction.value = dir
    visible1.value = true
  }
</script>
```

:::

## 多层嵌套

`drawer` 组件也拥有多层嵌套的方法

::: demo

<template #source>

<div>
<f-button type="primary" @click="visible2 = true">打开</f-button>
<f-drawer v-model:visible="visible2" title="Title" size="50%" append-to-body>
<f-button type="primary" @click="visible3 = true">打开内层 drawer</f-button>
<f-drawer v-model:visible="visible3" title="Title"> 内层 drawer </f-drawer>
</f-drawer>
</div>
</template>

```html
<template>
  <f-button type="primary" @click="visible2 = true">打开</f-button>

  <f-drawer title="Title" append-to-body v-model:visible="visible2">
    <f-button type="primary" @click="visible3 = true">打开内层 drawer</f-button>
    <f-drawer title="Title" v-model:visible="visible3"> 内层 drawer </f-drawer>
  </f-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const visible2 = ref(false)
  const visible3 = ref(false)
</script>
```

:::

## Attributes

| 参数              | 说明                                                                                | 类型                                                                | 可选值                        | 默认值 |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------- | ------ |
| `v-model:visible` | 绑定值，控制是否展示                                                                | boolean                                                             | ——                            | false  |
| `append-to-body`  | 是否追加到 body                                                                     | boolean                                                             | ——                            | false  |
| `direction`       | 弹出方向                                                                            | <a href="#drawerdirection">DrawerDirection</a>                      | `top` `left` `bottom` `right` | right  |
| `title`           | 标题文字内容                                                                        | string                                                              | ——                            | ——     |
| `show-mask`       | 是否展示遮罩层                                                                      | boolean                                                             | ——                            | true   |
| `show-header`     | 是否展示头部                                                                        | boolean                                                             | ——                            | true   |
| `mask-close`      | 点击遮罩层是否可关闭                                                                | boolean                                                             | ——                            | true   |
| `mask-opacity`    | 遮罩层透明度                                                                        | number                                                              | ——                            | ——     |
| `mask-background` | 遮罩层背景色                                                                        | string                                                              | ——                            | ——     |
| `modal-blur`      | 是否模糊遮罩层                                                                      | boolean                                                             | ——                            | false  |
| `close-icon`      | 自定义关闭按钮 icon                                                                 | <a href="/components/interface.html#fightingicon">FightingIcon</a>  | ——                            | ——     |
| `show-close-icon` | 是否展示关闭按钮                                                                    | boolean                                                             | ——                            | true   |
| `z-index`         | 层级，原生 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) 属性 | number                                                              | ——                            | ——     |
| `on-open`         | 打开动画开始的回调                                                                  | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——                            | ——     |
| `on-open-end`     | 打开动画结束的回调                                                                  | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——                            | ——     |
| `on-close`        | 关闭动画开始的回调                                                                  | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——                            | ——     |
| `on-close-end`    | 关闭动画结束的回调                                                                  | <a href="/components/dialog.html#dialogcallback">DialogCallback</a> | ——                            | ——     |

## Slots

| 名称        | 说明               |
| ----------- | ------------------ |
| `default`   | 默认内容           |
| `header`    | 自定义顶部内容     |
| `footer`    | 自定义底部内容     |
| `closeIcon` | 自定义关闭按钮图标 |

## Interface

组件导出以下类型定义：

```ts
import type { DrawerInstance, DrawerProps, DrawerDirection } from 'fighting-design'
```

### DrawerDirection

```ts
type DrawerDirection = 'left' | 'top' | 'right' | 'bottom'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/wang-zhixin" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/50623519?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(false)
  const visible2 = ref(false)
  const visible3 = ref(false)
  const direction = ref('right')

  const onShow = (dir: string): void => {
    direction.value = dir
    visible1.value = true
  }
</script>
