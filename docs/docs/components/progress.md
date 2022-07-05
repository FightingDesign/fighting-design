# Progress 进度条

`Progress` 是一个进度条，用于展示进度

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/progress)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/progress.md)

## 基本使用

`percentage` 属性表示进度条对应的百分比，取值范围在 `0-100`范围内。

`type` 属性可以配置不同的进度条样式，展示不同的颜色状态

<f-progress type="primary" :percentage="10" />
<f-progress type="success" :percentage="30" />
<f-progress type="danger" :percentage="60" />
<f-progress type="warning" :percentage="100" />

`square` 和 `linear` 属性可以分别配置方形或线形的进度条

<f-progress type="primary" :percentage="10" square />
<f-progress type="success" :percentage="40" linear />

::: details 显示代码

```html
<f-progress type="primary" :percentage="10" />
<f-progress type="success" :percentage="30" />
<f-progress type="danger" :percentage="60" />
<f-progress type="warning" :percentage="100" />

<f-progress type="primary" :percentage="10" square />
<f-progress type="success" :percentage="40" linear />
```

:::

## 显示百分比

`show-text` 属性用来展示进度条百分比，线性的不会显示

<f-progress :percentage="10" show-text />
<f-progress type="success" :percentage="40" show-text />
<f-progress type="danger" :percentage="70" linear show-text />
<f-progress type="warning" :percentage="100" linear show-text />

::: details 显示代码

```html
<f-progress :percentage="10" show-text />
<f-progress type="success" :percentage="40" show-text />
<f-progress type="danger" :percentage="70" linear show-text />
<f-progress type="warning" :percentage="100" linear show-text />
```

:::

## 自定义宽高

`width` 和 `height` 属性接收一个字符串，用于自定义进度条宽高

<f-progress :percentage="10" width="360px" height="27px" show-text />
<f-progress type="success" :percentage="40" width="100%" height="20px" show-text />

::: details 显示代码

```html
<f-progress :percentage="10" width="360px" height="27px" show-text />
<f-progress
  type="success"
  :percentage="40"
  width="100%"
  height="20px"
  show-text
/>
```

:::

## 自定义颜色

可以通过 `color` 属性设置进度条的颜色，该属性接受一个十六进制的颜色值，会覆盖 `type` 属性对应的颜色。

<f-progress :percentage="10" color="#D540ED" linear />
<f-progress type="success" :percentage="40" color="#42CB12" linear />
<f-progress type="danger" :percentage="70" color="#ff386a" />
<f-progress type="warning" :percentage="100" color="#e1d327" />

::: details 显示代码

```html
<f-progress :percentage="10" color="#D540ED" linear />
<f-progress type="success" :percentage="40" color="#42CB12" linear />
<f-progress type="danger" :percentage="70" color="#ff386a" />
<f-progress type="warning" :percentage="100" color="#e1d327" />
```

:::

可以通过 `background` 属性来设置进度条背景色，该属性接受一个十六进制的颜色值

<f-progress :percentage="10" background="#bfcdf0" linear />
<f-progress type="success" :percentage="40" background="#C3FFBD" linear />
<f-progress type="danger" :percentage="70" background="#f4d1d1" />
<f-progress type="warning" :percentage="90" background="#f0e3bf" />

::: details 显示代码

```html
<f-progress :percentage="10" background="#bfcdf0" linear />
<f-progress type="success" :percentage="40" background="#C3FFBD" linear />
<f-progress type="danger" :percentage="70" background="#f4d1d1" />
<f-progress type="warning" :percentage="90" background="#f0e3bf" />
```

:::

## Attributes

| 参数         | 说明                   | 类型    | 可选值                                 | 默认值  |
| ------------ | ---------------------- | ------- | -------------------------------------- | ------- |
| `progress`   | 百分比                 | number  | `0 ~1 00`                              | 0       |
| `type`       | 进度条状态             | string  | `primary` `success` `warning` `danger` | primary |
| `width`      | 自定义宽度             | number  | ——                                     | ——      |
| `height`     | 自定义高度             | number  | ——                                     | ——      |
| `square`     | 方形                   | boolean | ——                                     | true    |
| `linear`     | 线性                   | boolean | ——                                     | false   |
| `show-text`  | 是否显示百分比文字内容 | boolean | ——                                     | false   |
| `color`      | 进度条颜色             | string  | ——                                     | ——      |
| `background` | 进度条背景色           | string  | ——                                     | ——      |

<!-- ## Slots

| 名称      | 说明                                          |
| --------- | --------------------------------------------- |
| `default` | 自定义进度百分比内容，参数为 `{ percentage }` |

## Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| `full`   | 进度达到 100% 时的回调 | -        | -->

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
<a href="https://github.com/ding139725" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/48934746?v=4" />
</a>
<a href="https://github.com/lzyaom" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/26430638?v=4" />
</a>

<style scoped>
.f-progress {
  margin-bottom: 10px;
}
</style>
