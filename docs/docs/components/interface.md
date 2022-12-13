# Interface 接口类型

Fighting Design 内部导出的一些类型接口

## ClassList

```ts
type ClassList = readonly (string | Record<string, unknown>)[]
```

## FightingType

```ts
type FightingType = 'primary' | 'success' | 'danger' | 'warning' | 'default'
```

## FightingSize

```ts
type FightingSize = 'large' | 'middle' | 'small' | 'mini'
```

## FightingIcon

```ts
import type { VNode, Component } from 'vue'

type FightingIcon = VNode | Component
```

## HandleMouse

针对一些点击事件的类型接口，用于 `f-button` `f-link` `f-svg-icon`

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
type FightingLang = 'en-US' | 'zh-CH'
```

## InputChange

```ts
type InputChange = (value: string) => void
```
