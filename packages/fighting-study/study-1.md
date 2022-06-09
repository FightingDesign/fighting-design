# 单元测试配置

## 技术栈

**vitest**

`vitest` 是一个由 [antfu](https://github.com/antfu) 开发的一款基于 [vite](https://github.com/vitejs/vite) 的原生测试框架。它很快！

- [vitest](https://github.com/vitest-dev/vitest)
- [vitest 英文文档](https://vitest.dev)
- [vitest 中文文档](https://cn.vitest.dev)

**test-utils**

`test-utils` 是一款 Vue 3 的 Vue 测试工具

- [test-utils](https://github.com/vuejs/test-utils)
- [test-utils 文档](https://test-utils.vuejs.org)

**happy-dom**

`happy-dom` 是没有图形用户界面的 Web 浏览器的 JavaScript 实现。它包括来自 WHATWG DOM 和 HTML 的许多 Web 标准。

- [happy-dom](https://github.com/capricorn86/happy-dom)

## 安装插件

安装 `vitest` 和 `test-utils`：

```shell
pnpm add vitest @vue/test-utils@next -w
```

这时候两个主要的测试工具就已经安装好了，接下来就可以进入测试阶段了

## 配置命令

在项目根目录下的 `package.json` 中新增下面命令，来执行 `vitest` 单元测试

```json
"scripts": {
  "test": "vitest"
}
```

## 编写测试

> 下面先不必纠结测试的编写方式，后两章将会详细介绍单元测试的写法

我在项目中新建了 `fighting-design\packages\fighting-test` 目录，来编写测试文件

首先新建了一个 `button.spec.ts` 文件，接下来需要来对按钮组件进行测试

在真正的测试之前呢，我们需要先验证一下 `vitest` 安装和命令我们到底有没有配置正确，所以先随便写一段测试来验证一下

```ts
import { expect, test } from 'vitest'

test('test', () => {
  expect(true).toBe(true)
})
```

然后执行命令：

```shell
pnpm test
```

打印日志：

```shell
Test Files 1 passed (1)
Tests 1 passed (1)
Time 1.20s (in thread 3ms, 39979.75%)

PASS Waiting for file changes...
press h to show help, press q to quit
```

结果为测试通过，证明单元测试我们目前配置的已经没有问题了，所以接下来引入组件测试

## 测试组件

> 下面先不必纠结测试的编写方式，后两章将会详细介绍单元测试的写法，这里仅仅为了暴露问题

现在要测试组件了，那么先将组件引入进来，再引入 `test-utils` 中的 `mount` 方法

```ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { FButton } from '@fighting-design/fighting-components'
```

然后开始写测试代码，下面先测试传递一个指定的 `type` 类型之后，`FButton` 将会有一个新的 `class`

```ts
describe('FButton', () => {
  it('type', () => {
    const wrapper = mount(FButton, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('f-button-primary')
  })
})
```

当给组件传递了一个 `type: 'primary'` 的 `props` 参数的时候，那么 `FButton` 组件将会拼接为 `f-button-primary`，来实现不同的样式，看似以上的代码是没有任何问题的，接下来测试一下之后，发现直接报错了，错误日志如下：

```shell
 FAIL  packages/fighting-test/button.spec.ts > FButton > type
ReferenceError: document is not defined
 ❯ Proxy.mount node_modules/.pnpm/@vue+test-utils@2.0.0-rc.18_vue@3.2.33/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js:7840:14
 ❯ packages/fighting-test/button.spec.ts:8:20
      6| describe('FButton', () => {
      7|   it('type', () => {
      8|     const wrapper = mount(FButton, {
       |                    ^
      9|       props: { type: 'primary' }
     10|     })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
Test Files  1 failed (1)
     Tests  1 failed (1)
      Time  5ms
```

错误日志的一条关进信息就是：`document is not defined`

所以带着这个问题，我去了官方仓库的 `issues` 中找到了[答案](https://github.com/vitest-dev/vitest/issues/990)，发现也有人和我报了相同的错误，下面给出了答案，需要在 `vitest.config.ts` 中新增配置项，所以配置如下：

```ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom'
  }
})
```

这时我以为重新进行测试就可以正常运行了，但是执行了 `pnpm test` 之后，提示我需要安装 `happy-dom`：

```shell
PS D:\项目文件\fighting-design> pnpm test

> @ test D:\项目文件\fighting-design
> vitest

 MISSING DEP  Can not find dependency 'happy-dom'

? Do you want to install happy-dom? » (y/N)
```

然后执行安装命令：

```shell
pnpm add happy-dom -w
```

安装完成之后，再一次重新执行测试，发现测试已经通过了：

```shell
 RERUN  packages/fighting-test/button.spec.ts

 √ packages/fighting-test/button.spec.ts (1)

Test Files  2 passed (2)
     Tests  5 passed (5)
      Time  87ms


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

其实在上面问题中，后面我在[vue 官方文档中](https://staging-cn.vuejs.org/guide/scaling-up/testing.html)的[测试使用指南](https://staging-cn.vuejs.org/guide/scaling-up/testing.html#recipes)中也找到了答案。

## 写在最后

上面单元测试部分代码仅仅为了演示，或者暴露问题，详细的单元测试编写方式将会在后续两章节中进行介绍。
