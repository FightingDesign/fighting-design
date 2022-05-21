# @fighting-design/fighting-type

English | [Chinese](./CHANGELOG.zh-CN.md)

## Introduction

`Fighting design` type system provided for each component

## Standard

Each component needs to define `type` or `interface`, which must be defined in this directory for export

New here `component name.d.ts` type defined in file

Finally, all are imported uniformly `index.ts` in the entry file of

## Import

You can directly use `@fighting-design/fighting-type` in the component

```ts
import type { xxx, xxx } from '@fighting-design/fighting-type'
```
