# Interface 接口类型

Fighting Design 内部导出的一些类型接口

## ClassList

```ts
type ClassList = readonly (string | Record<string, unknown>)[]
```

## FightingType

用于定于组件的类型，不同的类型将会展示不同的样式，主要用于 `f-alert` `f-button` `f-fighting-global` `f-link` `FMessage` `FNotification` `f-ripple` `f-tag` `f-text` 组件

```ts
type FightingType = 'primary' | 'success' | 'danger' | 'warning' | 'default' | 'info'
```

## FightingSize

用于定于组件的尺寸。主要用于 `f-avatar` `f-button` `f-checkbox` `f-fighting-global` `f-input=number` `f-input` `f-list` `f-radio` `f-skeleton` `f-space` `f-switch` `f-tag` `f-toolbar` 组件

```ts
type FightingSize = 'large' | 'middle' | 'small' | 'mini'
```

## FightingIcon

```ts
import type { VNode, Component } from 'vue'

type FightingIcon = VNode | Component
```

## HandleMouse

针对一些点击事件的类型接口，用于 `f-button` `f-link` `f-svg-icon` 组件

```ts
type HandleMouse = (evt: MouseEvent) => void
```

## HandleEvent

用于一些基础的事件类型接口，用于 `f-image`

```ts
type HandleEvent = (evt: vent) => void
```

## HandleChange

用于改变状态的事件类型接口，用于 `f-switch`

```ts
type HandleChange = (target: boolean) => void
```

## FightingLang

```ts
type FightingLang = 'en-US' | 'zh-CN'
```

## InputChange

```ts
type InputChange = (value: string) => void
```

## FightingFit

适应容器的方式类型，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性，用于 `f-avatar` `f-image` 组件

```ts
type FightingFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
```
