# Space 间距

设置组件之间的间距。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/space)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/space.md)

## 基本使用

`Space` 的基本使用

<f-space>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
</f-space>

::: details 显示代码

```html
<f-space>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
</f-space>
```

:::

## 对齐方式

可使用 `position` 设置对齐方式，可选值：`center（默认）`、`start`、`end`、`baseline`

<f-space vertical>
  <f-space position="start">
    <f-tag type="primary">普通</f-tag>
    <f-tag type="primary">普通</f-tag>
    <f-tag type="primary">普通</f-tag>
  </f-space>

  <f-space position="center">
    <f-tag type="warning">警告</f-tag>
    <f-tag type="warning">警告</f-tag>
    <f-tag type="warning">警告</f-tag>
  </f-space>

  <f-space position="end">
    <f-tag type="success">成功</f-tag>
    <f-tag type="success">成功</f-tag>
    <f-tag type="success">成功</f-tag>
  </f-space>

  <f-space position="baseline">
    <f-tag type="danger">失败</f-tag>
    <f-tag type="danger">失败</f-tag>
    <f-tag type="danger">失败</f-tag>
  </f-space>
</f-space>

::: details 显示代码

```html
<f-space vertical>
  <f-space position="start">
    <f-tag type="primary">普通</f-tag>
    <f-tag type="primary">普通</f-tag>
    <f-tag type="primary">普通</f-tag>
  </f-space>

  <f-space position="center">
    <f-tag type="warning">警告</f-tag>
    <f-tag type="warning">警告</f-tag>
    <f-tag type="warning">警告</f-tag>
  </f-space>

  <f-space position="end">
    <f-tag type="success">成功</f-tag>
    <f-tag type="success">成功</f-tag>
    <f-tag type="success">成功</f-tag>
  </f-space>

  <f-space position="baseline">
    <f-tag type="danger">失败</f-tag>
    <f-tag type="danger">失败</f-tag>
    <f-tag type="danger">失败</f-tag>
  </f-space>
</f-space>
```

:::

## 间距尺寸

可使用 `spacing` 设置间距大小，内置可选值：`small（8px，默认）、middle（16px）、large（24px）`，并且支持传入 `number` 来自定义间距大小，也支持传入 `array` 来同时设置水平和垂直方向的间距。

<f-space :style="{marginBottom:'10px'}">
<div>spacing 间距大小</div>
<select v-model="spacing" class="space-md-select">
  <option value="small">small</option>
  <option value="middle">middle</option>
  <option value="large">large</option>
  <option :value="20">20</option>
  <option :value="[20,40]">[20,40]</option>
  <option :value="['small','middle']">['small','middle']</option>
</select>
</f-space>
<br/>
<f-space :spacing="spacing" wrap >
<f-button type="primary" v-for="item in 12" :key="item">按钮</f-button>
</f-space>

<script setup>
  import { ref } from 'vue'
  let spacing = ref('small')
</script>

<style scoped>
.space-md-select{
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid transparent;
    height: 32px;
    font-weight: 400;
    background-color: rgba(46,50,56,0.08);
    display: inline-flex;
    vertical-align: middle;
    position: relative;
    outline: none;
    cursor: pointer;
}
</style>

::: details 显示代码

```html
<template>
  <f-space>
    <div>spacing 间距大小</div>
    <select v-model="spacing" class="space-md-select">
      <option value="small">small</option>
      <option value="middle">middle</option>
      <option value="large">large</option>
      <option :value="20">20</option>
      <option :value="[20,40]">[20,40]</option>
      <option :value="['small','middle']">['small','middle']</option>
    </select>
  </f-space>
  <br />
  <f-space :spacing="spacing" wrap>
    <f-button type="primary" v-for="item in 12" :key="item">按钮</f-button>
  </f-space>
</template>

<script setup>
  import { ref } from 'vue'
  let spacing = ref('small')
</script>
```

:::

## 间距方向

可使用 vertical 设置间距是否为垂直方向，默认情况下为 false。

<f-space vertical>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
</f-space>

::: details 显示代码

```html
<f-space vertical>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
</f-space>
```

:::

## 换行

当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。

<f-space wrap>
  <f-button type="primary" v-for="item in 9" :key="item">主要按钮</f-button>
</f-space>

::: details 显示代码

```html
<f-space wrap>
  <f-button type="primary" v-for="item in 10" :key="item">主要按钮</f-button>
</f-space>
```

:::

## 样式

<f-space :style="{ marginBottom: '30px' }">
  <f-button type="primary">按钮</f-button>
</f-space>

<p>text</p>

::: details 显示代码

```html
<f-space :style="{ marginBottom: '30px' }">
  <f-button type="primary">按钮</f-button>
</f-space>

<p>text</p>
```

:::

## 自定义类名

<f-space className="space-margin-bottom">
  <f-button type="primary">按钮</f-button>
</f-space>

<div>text</div>

<style scoped>
.space-margin-bottom{
  margin-bottom:10px
}
</style>

::: details 显示代码

```html
<f-space className="space-margin-bottom">
  <f-button type="primary">按钮</f-button>
</f-space>

<div>text</div>

<style scoped>
  .space-margin-bottom {
    margin-bottom: 10px;
  }
</style>
```

:::

## Attributes

| 参数        | 说明           | 类型                                         | 可选值                            | 默认值   |
| ----------- | -------------- | -------------------------------------------- | --------------------------------- | -------- |
| `position`  | 对齐方式       | `string`                                     | `start` `center` `end` `baseline` | `center` |
| `spacing`   | 间距尺寸       | `string`, `number` , `Array<number\|string>` | `small` `middle` `large`          | `small`  |
| `vertical`  | 间距方向       | `boolean`                                    | ——                                | `false`  |
| `wrap`      | 换行           | `boolean`                                    | ——                                | `false`  |
| `style`     | 样式           | `object`                                     | ——                                | ——       |
| `className` | 自定义样式类名 | `string`                                     | ——                                | ——       |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/godwei123" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40879937?v=4" />
</a>
