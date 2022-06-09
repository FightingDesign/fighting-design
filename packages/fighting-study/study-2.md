# Vitest 基本 API

## 前言

这一章先简单的介绍一下 `Vitest` 的一些基本 `API`

下面是官方文档地址，方便进行查阅

- [中文文档](https://cn.vitest.dev)
- [英文文档](https://vitest.dev)

## describe

[describe](https://cn.vitest.dev/api/#describe) 会形成一个作用域，可以将一系列相关的放在这个统一的作用域中，可以让代码变得更加规范和清晰，可以接收两个参数

- `string` 作用域名称，可以自定义
- `Function` 测试函数

引入：

```ts
import { describe } from 'vitest'
```

例子：

```ts
describe('text-1', () => {
  // ...
})

describe('text-2', () => {
  // ...
})
```

## test

[test](https://cn.vitest.dev/api/#test) 用于定义一个测试，接收两个参数

- `string` 测试的名称，可以自己随意定义
- `Function` 测试函数

引入：

```ts
import { test } from 'vitest'
```

例子：

```ts
describe('text-1', () => {
  test('text', () => {
    // ...
  })
})
```

另外 `text` 还有一个别名叫 `it`，这两个其实是一个 `API`，不用去纠结其中的差异，使用别名也可以进行引入使用

```ts
import { it } from 'vitest'

describe('text-1', () => {
  it('text', () => {
    // ...
  })
})
```

## expect

[expect](https://cn.vitest.dev/api/#expect) 用于创建`断言`

引入：

```ts
import { expect } from 'vitest'
```

这里先介绍一下断言是什么意思：

> 可以理解为断定一个表达式结果为真，不为真就通过抛异常或者其他方式使这个测试用例失败。

它只接收一个参数：

- 测试的实例

## toContain

[toContain](https://cn.vitest.dev/api/#tocontain) 用于断言检查值是否在数组中，用在 `expect` 之后，并不需要引入

## 写在最后

上面简单介绍了一些 `Vitest` 的常用 `API`，接下来随时用随时再进行更新，毕竟单元测试这个东西，用一点儿学一点儿就够了。
