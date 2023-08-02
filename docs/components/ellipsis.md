# Ellipsis 文本省略

文字的省略，支持行数，最大宽度，tooltip, 展开收起。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/ellipsis)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/ellipsis.md)


## 基本使用

`max-width` 属性表示最长宽度，不填默认`auto`。

::: demo

<template #source>
<f-ellipsis :max-width="150">
七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
永远不改变，拥抱过的美丽都再也不破碎
</f-ellipsis>
</template>


```vue
<script lang="ts" setup>
  import { FEllipsis } from 'fighting-design'
</script>

<template>
  <f-ellipsis :max-width="150"></f-ellipsis>
</template>
``` 

::: 

## 最大行数

`line-clamp` 属性表示最大行数，默认`1`。

::: demo

<template #source>
<f-ellipsis :max-width="150" :line-clamp=2>
七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
永远不改变，拥抱过的美丽都再也不破碎
</f-ellipsis>
</template>


```vue
<script lang="ts" setup>
  import { FEllipsis } from 'fighting-design'
</script>

<template>
  <f-ellipsis :max-width="150" :line-clamp=2></f-ellipsis>
</template>
```
:::


## 点击展开收缩

`toggle-click` 属性表示是否点击展开，默认`false`。

::: demo

<template #source>
<f-ellipsis :max-width="150" :line-clamp=2 toggle-click>
七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
永远不改变，拥抱过的美丽都再也不破碎
</f-ellipsis>
</template>


```vue
<script lang="ts" setup>
  import { FEllipsis } from 'fighting-design'
</script>

<template>
  <f-ellipsis :max-width="150" :line-clamp=2 toggle-click></f-ellipsis>
</template>
```
:::

## 自适应宽度
如果`文字省略`状态，`tool-tip`默认开启, 反之关闭。

::: demo

<template #source>
<f-ellipsis>
七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远。
</f-ellipsis>
<f-ellipsis :max-width='150'>
七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远。
</f-ellipsis>
</template>


```vue
<script lang="ts" setup>
  import { FEllipsis } from 'fighting-design'
</script>

<template>
  <f-ellipsis>
    七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
    永远不改变，拥抱过的美丽都再也不破碎。
  </f-ellipsis>
</template>
```
:::


## 内容为空

空内容默认转换为`-`

::: demo

<template #source>
<f-ellipsis>
</f-ellipsis>
</template>


```vue
<script lang="ts" setup>
  import { FEllipsis } from 'fighting-design'
</script>

<template>
  <f-ellipsis>
  </f-ellipsis>
</template>
```
:::


## Attributes

| 参数           | 说明     | 类型      | 可选值          | 默认值       |
|--------------|--------|---------|--------------|-----------|
| `line-clamp` | 最大行数   | number  | ——           | `1`       |
| `tooltip`    | 悬浮显示内容 | boolean | TooltipProps | ——        | `true`   |
| `max-width`  | 最大宽度   | number  | ——           | undefined |
| `toggle-click`  | 点击展开收缩 | boolean | ——           | false     |


## Slots

| 名称      | 说明       | 参数                    |
| --------- | ---------- | ----------------------- |
| `default` | 自定义内容 | —— |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/zhoufanglu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/24451091?v=4" />
</a>
