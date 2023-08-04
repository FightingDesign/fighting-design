# Tabs 标签页

在同一块区域切换内容

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tabs)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/tabs.md)

## 基本使用

tabs 的基本使用

::: demo

<template #source>
<f-tabs>
<f-tabs-item label="如烟">

<p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
<p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
</f-tabs-item>
<f-tabs-item label="盛夏光年">
<p>长大 难道是人必经的溃烂。</p>
</f-tabs-item>
<f-tabs-item label="我心中尚未崩坏的地方">
<p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
</f-tabs-item>
</f-tabs>
</template>

```html
<f-tabs>
  <f-tabs-item label="如烟">
    <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
    <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
  </f-tabs-item>
  <f-tabs-item label="盛夏光年">
    <p>长大 难道是人必经的溃烂。</p>
  </f-tabs-item>
  <f-tabs-item label="我心中尚未崩坏的地方">
    <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
  </f-tabs-item>
</f-tabs>
```

:::

## 多种风格及方向

配置 `type`、`position` 实现不同风格与不同方向的排列组合

::: demo

<template #source>
<f-tabs :type="type" :position="position">
<f-tabs-item label="知足">

<p>怎么去拥有一道彩虹，怎么去拥抱一夏天的风</p>
</f-tabs-item>
<f-tabs-item label="星空">
<p>摸不到的颜色是否叫彩虹，看不到的拥抱是否叫做微风</p>
</f-tabs-item>
<f-tabs-item label="彩虹">
<p>你的爱就像彩虹，我张开了手却只能抱住风</p>
</f-tabs-item>
</f-tabs>
  <div>
    风格：
    <f-radio-group v-model="type">
      <f-radio label="line">line</f-radio>
      <f-radio label="card">card</f-radio>
      <f-radio label="segment">segment</f-radio>
    </f-radio-group>
  </div>
  <div>
    方向：
    <f-radio-group v-model="position">
      <f-radio label="top">top</f-radio>
      <f-radio label="right">right</f-radio>
      <f-radio label="bottom">bottom</f-radio>
      <f-radio label="left">left</f-radio>
    </f-radio-group>
  </div>
</template>

```html
<template>
  <f-tabs :type="type" :position="position">
    <f-tabs-item label="知足">
      <p>怎么去拥有一道彩虹，怎么去拥抱一夏天的风</p>
    </f-tabs-item>
    <f-tabs-item label="星空">
      <p>摸不到的颜色是否叫彩虹，看不到的拥抱是否叫做微风</p>
    </f-tabs-item>
    <f-tabs-item label="彩虹">
      <p>你的爱就像彩虹，我张开了手却只能抱住风</p>
    </f-tabs-item>
  </f-tabs>

  <div>
    风格：
    <f-radio-group v-model="type">
      <f-radio label="line">line</f-radio>
      <f-radio label="card">card</f-radio>
      <f-radio label="segment">segment</f-radio>
    </f-radio-group>
  </div>

  <div>
    方向：
    <f-radio-group v-model="position">
      <f-radio label="top">top</f-radio>
      <f-radio label="right">right</f-radio>
      <f-radio label="bottom">bottom</f-radio>
      <f-radio label="left">left</f-radio>
    </f-radio-group>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsType, TabsPosition } from 'fighting-design'

  const type = ref<TabsType>('line')
  const position = ref<TabsPosition>('top')
</script>
```

:::

## 对齐方式

使用 `justify-content` 参数配置对齐方式，仅针对 `line` 风格，并且只有上下方向生效

::: demo

<template #source>
<f-tabs :justifyContent="justifyContent">
<f-tabs-item label="登录">

<p>在这登录</p>
</f-tabs-item>
<f-tabs-item label="注册">
<p>在这注册！！</p>
</f-tabs-item>
</f-tabs>

<div>
  对齐方式：
  <f-radio-group v-model="justifyContent">
    <f-radio label="flex-start">flex-start</f-radio>
    <f-radio label="center">center</f-radio>
    <f-radio label="flex-end">flex-end</f-radio>
    <f-radio label="space-between">space-between</f-radio>
    <f-radio label="space-around">space-around</f-radio>
  </f-radio-group>
</div>
</template>

```html
<template>
  <f-tabs :justify-content="justifyContent">
    <f-tabs-item label="登录">
      <p>在这登录</p>
    </f-tabs-item>
    <f-tabs-item label="注册">
      <p>在这注册！！</p>
    </f-tabs-item>
  </f-tabs>

  <div>
    对齐方式：
    <f-radio-group v-model="justifyContent">
      <f-radio label="flex-start">flex-start</f-radio>
      <f-radio label="center">center</f-radio>
      <f-radio label="flex-end">flex-end</f-radio>
      <f-radio label="space-between">space-between</f-radio>
      <f-radio label="space-around">space-around</f-radio>
    </f-radio-group>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsJustifyContent } from 'fighting-design'

  const justifyContent = ref<TabsJustifyContent>()
</script>
```

:::

## 切换时的回调

`on-switch` 回调里可在切换时候做点什么

::: demo

<template #source>
<f-tabs :on-switch="onSwitch">
<f-tabs-item label="个人信息" name="name">

<p>小芳，女</p>
</f-tabs-item>
<f-tabs-item label="爱好(等一秒)" name="hobby">
<p>疯狂星期四，V 我 50~</p>
</f-tabs-item>
<f-tabs-item label="年龄" name="age" />
</f-tabs>
</template>

```html
<template>
  <f-tabs :on-switch="onSwitch">
    <f-tabs-item label="个人信息" name="name">
      <p>小芳，女</p>
    </f-tabs-item>
    <f-tabs-item label="爱好(等一秒)" name="hobby">
      <p>疯狂星期四，V我50~</p>
    </f-tabs-item>
    <f-tabs-item label="年龄" name="age" />
  </f-tabs>
</template>

<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const onSwitch = (name: unknown): boolean | Promise<boolean> => {
    switch (name) {
      case 'hobby':
        return new Promise<boolean>(resolve => {
          FMessage.warning('稍等一下~')
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      case 'age':
        FMessage.danger('这个不能说')
        return false
      default:
        return true
    }
  }
</script>
```

:::

## 前缀和后缀

`prefix` 和 `suffix` 可配置前缀和后缀的插槽

::: demo

<template #source>
<f-tabs>
<template #prefix>
<f-button type="primary">前缀</f-button>
</template>
<template #suffix>
<f-button type="primary">后缀</f-button>
</template>

<f-tabs-item label="如烟">
<p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
<p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
</f-tabs-item>
<f-tabs-item label="盛夏光年">
<p>长大 难道是人必经的溃烂。</p>
</f-tabs-item>
<f-tabs-item label="我心中尚未崩坏的地方">
<p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
</f-tabs-item>
</f-tabs>
</template>

```html
<f-tabs>
  <template #prefix>
    <f-button type="primary">前缀</f-button>
  </template>
  <template #suffix>
    <f-button type="primary">后缀</f-button>
  </template>

  <f-tabs-item label="如烟">
    <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
    <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
  </f-tabs-item>
  <f-tabs-item label="盛夏光年">
    <p>长大 难道是人必经的溃烂。</p>
  </f-tabs-item>
  <f-tabs-item label="我心中尚未崩坏的地方">
    <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
  </f-tabs-item>
</f-tabs>
```

:::

## 触发方式

`trigger` 属性可配置改变触发方式

::: demo

<template #source>
<f-tabs :trigger="trigger">
<f-tabs-item label="如烟">

<p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
<p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
</f-tabs-item>
<f-tabs-item label="盛夏光年">
<p>长大 难道是人必经的溃烂。</p>
</f-tabs-item>
<f-tabs-item label="我心中尚未崩坏的地方">
<p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
</f-tabs-item>
</f-tabs>

<div>
  触发方式：
  <f-radio-group v-model="trigger">
    <f-radio label="click">click</f-radio>
    <f-radio label="hover">hover</f-radio>
  </f-radio-group>
</div>
</template>

```html
<template>
  <f-tabs :trigger="trigger">
    <f-tabs-item label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-item>
    <f-tabs-item label="盛夏光年">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-item>
    <f-tabs-item label="我心中尚未崩坏的地方">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-item>
  </f-tabs>

  <div>
    触发方式：
    <f-radio-group v-model="trigger">
      <f-radio label="click">click</f-radio>
      <f-radio label="hover">hover</f-radio>
    </f-radio-group>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsTrigger } from 'fighting-design'

  const trigger = ref<TabsTrigger>('click')
</script>
```

:::

## Tabs Attributes

| 参数                  | 说明                                   | 类型                                                 | 可选值                                                                         | 默认值 |
| --------------------- | -------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------ | ------ |
| `v-model:model-value` | 绑定值，选中选项卡的 name              | <a href="#tabsmodelvalue">TabsModelValue</a>         | ——                                                                             | ——     |
| `type`                | 风格类型                               | <a href="#tabstype">TabsType</a>                     | `line` `card` `segment`                                                        | line   |
| `position`            | 头部位置                               | <a href="#tabsposition">TabsPosition</a>             | `left` `right` `top` `bottom`                                                  | top    |
| `justify-content`     | 对齐方式（仅针对上下方向的 line 有效） | <a href="#tabsjustifycontent">TabsJustifyContent</a> | `flex-start` `center` `flex-end` `space-between` `space-around` `space-evenly` | ——     |
| `trigger`             | 触发方式                               | <a href="#tabstrigger">TabsTrigger</a>               | `click` `hover`                                                                | click  |
| `on-switch`           | 切换前的回调                           | <a href="#tabsswitch">TabsSwitch</a>                 | ——                                                                             | ——     |

## Tabs Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 标签的内容 |
| `prefix`  | 标签的前缀 |
| `suffix`  | 标签的后缀 |

## TabsPane Attributes

| 参数    | 说明                 | 类型                                         | 可选值 | 默认值 |
| ------- | -------------------- | -------------------------------------------- | ------ | ------ |
| `name`  | 标签的标识符         | <a href="#tabsmodelvalue">TabsModelValue</a> | ——     | ——     |
| `label` | 标签项的标题         | string                                       | ——     | ——     |
| `lazy`  | 标签内容是否延迟渲染 | boolean                                      | ——     | false  |

## TabsPane Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 标签项的内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  TabsInstance,
  TabsProps,
  TabsModelValue,
  TabsTrigger,
  TabsPosition,
  TabsType,
  TabsJustifyContent,
  TabsSwitch,
  TabsNavInstance,
  TabsPaneInstance,
  TabsPaneProps
} from 'fighting-design'
```

### TabsModelValue

```ts
type TabsModelValue = string | number
```

### TabsSwitch

```ts
type TabsSwitch = (name: TabsModelValue) => boolean | void
```

### TabsType

```ts
type TabsType = 'line' | 'card' | 'segment'
```

### TabsPosition

```ts
type TabsPosition = 'left' | 'right' | 'top' | 'bottom'
```

### Tabsjustifycontent

```ts
type TabsJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
```

### TabsTrigger

```ts
type TabsTrigger = 'hover' | 'click'
```

## Tabs Methods

| 参数         | 说明         |
| ------------ | ------------ |
| `activeName` | 当前选中的值 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FMessage } from 'fighting-design'

  const type = ref('line')
  const position = ref('top')
  const justifyContent = ref()
  const trigger = ref('click')

  const onSwitch = (name) => {
    switch(name) {
      case 'hobby':
        return new Promise<boolean>((resolve) => {
          FMessage.warning('稍等一下~')
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      case 'age':
        FMessage.danger('这个不能说')
        return false
      default: 
        return true
    }
  }
</script>
