# Interface 接口类型

Fighting Design 内部导出的一些类型接口

- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/interface.md)

## ClassList

用于类名列表集合类型

```ts
type ClassList = readonly (string | Record<string, unknown>)[]
```

## FightingType

用于定于组件的类型，不同的类型将会展示不同的样式，主要用于 `f-alert` `f-button` `f-fighting-global` `f-link` `FMessage` `FNotification` `f-ripple` `f-tag` `f-text` 组件

```ts
type FightingType = 'primary' | 'success' | 'danger' | 'warning' | 'default' | 'info'
```

## FightingSize

用于定于组件的尺寸。主要用于 `f-avatar` `f-button` `f-checkbox` `f-fighting-global` `f-input-number` `f-input` `f-list` `f-radio` `f-skeleton` `f-space` `f-switch` `f-tag` `f-toolbar` 组件

```ts
type FightingSize = 'large' | 'middle' | 'small' | 'mini'
```

## FightingIcon

主要用于 `f-svg-icon` 组件的参数类型

```ts
import type { VNode, Component } from 'vue'

type FightingIcon = VNode | Component
```

## FightingTarget

该来下指定在何处显示链接的资源，详情参考 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target)。主要用于 `f-link` `f-button`

```ts
type FightingTarget = '_blank' | '_self' | '_parent' | '_top'
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
