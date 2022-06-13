# @fighting-design/fighting-components

中文 | [英文](./README.en-US.md)

## 说明

此目录是 `Fighting Design` 的所有组件的源文件。

## 新增组件

在新增组件之前，请与[我](https://github.com/Tyh2001/Tyh2001)取得联系，或者在 [discussions](https://github.com/FightingDesign/fighting-design/discussions) 新建一个讨论，讨论的格式可参考[这里](https://github.com/FightingDesign/fighting-design/discussions/5)。

如果想要新增组件，需要在 `fighting-components` 目录下新建一个`以组件名称`为名的文件夹，内部目录结构如下：

```
├── src
|  ├── interface.d.ts
|  ├── component.ts
|  └── component.vue
└── index.ts
```

下面分别介绍一下每个文件的作用：

- `interface.d.ts` 写入组件和 `Props` 相关的所以类型
- `component.ts` 写入 `Props` 和 `Emits`
- `component.vue` 组件的源文件
- `index.ts`主入口文件 包含注册组件

下面将会分别介绍一下每个文件内部的一些规范。

## 公共规范

- 字符串全部使用单引号
- 去掉末尾的分号
- `tab` 始终为两个空格
- 文件末尾加空行

## interface.d.ts

> 由于打包问题，已经废除原有 @fighting-design/fighting-type 目录，类型改为以下定义方式

`interface.d.ts` 用于定义类型，每个组件中变量、函数、`Props` 相关的所有类型需要在这里定义。

导出统一使用 `export`

## component.vue

这是组件的源文件，内部结构为：

```html
<template></template>

<script lang="ts" setup name=""></script>
```

**结构规范**

- 组建内只有两个标签（必须的）`<template>` `<script lang="ts" setup name="">`
- 两大标签之间必须要有一个空行
- 末尾要有一个空行
- `script` 必须带有 `lang="ts" setup name=""` 三个标记，注意标记顺序

**template 规范**

- 每个组件都必须要有一个自己专属的 `class`，格式为 `f-组件名`，例如 `f-button` `f-icon`
- 单个 `class` 不使用数组。反面例子：`:class="['f-button']"`；正面例子：`class="f-button"`
- 可以使用单标签均使用单标签，比如：`<slot />`
- 可以简化的都需要简化，比如 `:style="{ color }"`

**script 规范**

- `script` 上的 `name` 属性是组件的名字，使用的 [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend) 插件。组件名必须以 `F` 开头，后面跟组件名，组件名首字母大写，例如：`FButton`
- 引入的类型，必须使用 `type` 标记，比如：`import type { xxx } from 'xxx'`
- 在所有 `import` 之后要带有一个空行，之后是 `prop` 和 `emit`
- `prop` 和 `emit` 之后，也要带一个空行
- 后面可以进行编写组件需要的逻辑函数，函数必须使用 `箭头函数`，除非特殊情况外，每个函数之间要有一个空行隔开。可见下面例子，取自 [f-button](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/button/src/button.vue)

```ts
import { computed, ComputedRef } from 'vue'
import { Props, Emits } from './button'
import type { onClickInterface } from '@fighting-design/fighting-type'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const onClick = (evt) => {}

const iconClass = computed(() => {})
```

**Ts 类型规范**

- 能定义类型的地方就要定义类型
- 就算是类型自动推倒出来了，也要写入类型
- `type` 或者 `interface` 等禁止在组件中直接定义，定义类型请在 `interface.d.ts` 中定义
- 禁止出现 `any`。如有特殊情况可发起 [讨论](https://github.com/FightingDesign/fighting-design/discussions) 或者群里提问

下面举例常用的定义类型规范：

- 定义 `ref`

```ts
import { ref } from 'vue'
import type { Ref } from 'vue'

const test: Ref<string> = ref<string>('hello')
```

- 定义 `computed`

```ts
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const com: ComputedRef<string> = computed<string>((): string => {
  return 'hello'
})
```

- 定义函数

`interface.d.ts` 中定义类型

```ts
export interface funInterface {
  (a: number, b: number): number
}
```

引入使用类型

```ts
import type { funInterface } from './interface'

const fun: funInterface = (a: number, b: number): number => {
  return a + b
}
```

## component.ts

这里是来定义组件的 `Props` 和 `Emits` 的文件

- 导出的名称必须叫 `Props` 和 `Emits` （首字母大写）
- 每个 `props` 都必须标记类型
- 每个 `props` 都必须标记默认值，就算默认值是 `false` 或者是空字符串也要标记
- 如有可选项需要对其进行校验，一般使用 `validator` + `ts` 双重校验。可参考文档 [Prop 校验](https://staging-cn.vuejs.org/guide/components/props.html#prop-validation) 和 [PropType](https://staging-cn.vuejs.org/api/utility-types.html#proptypet)
- `default` 和 `validator` 使用箭头函数定义，必须明确返回值和参数值的类型
- `Props` 和 `Emits` 对象结尾必须加入 [as const](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference)
- 数组结尾加入 `as const`

## index.ts

这里需要用来定义、挂载、注册、导出组件

参考文档

- [安装插件](https://staging-cn.vuejs.org/api/application.html#app-use)
- [全局注册组件](https://staging-cn.vuejs.org/guide/components/registration.html#global-registration)

这里规范并不多，只有四行代码

- 每行代码之间要有一个空行
- 结尾要有空行
- 导出必须使用 `export { xxx }` 导出，而不是 `export default`

例：

```ts
import FButton from './src/button.vue'

import { install } from '@fighting-design/fighting-utils'

install(FButton, FButton.name)

export { FButton }
```

## 主入口文件

主入口文件是 `@fighting-design/fighting-components/index.ts` 这里导入了所有的组件

如果你新建了一个新的组件，那么需要在此处进行引入，还需要在 `components` 对象中添加组件。

另外在 `export` 中也需要进行导出。

## 写在结尾

这里的规范可能比较多，此文件可能更新会较为频繁，请大家在开发全新组件的时候，请务必先阅读此文件。
