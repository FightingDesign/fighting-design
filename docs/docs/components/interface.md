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
