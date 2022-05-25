# @fighting-design/fighting-type

中文 | [英文](./README.md)

## 介绍

`fighting-design` 为每个组件提供的类型系统

## 规范

每个组件中需要的定义 `type` 或者 `interface` 都必须在此目录中进行定义导出使用

在此新建 `组建名.d.ts` 文件内进行定义类型

最终全部都统一倒入 `index.ts` 的入口文件中

## 引入

在组件中可以直接引入 `@fighting-design/fighting-type` 使用

```ts
import type { xxx, xxx } from '@fighting-design/fighting-type'
```
