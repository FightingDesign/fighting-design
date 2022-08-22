# @fighting-design/fighting-components

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/README.en-US.md)

## 说明

此目录是 `Fighting Design` 的所有组件的源文件目录。

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

`Fighting Design` 内置了新增组件的快捷命令，可以快速帮助你创建组件所需要的文件，参考 [new-component](https://github.com/FightingDesign/fighting-design/blob/master/script/new-component/README.md)，命令：

```
pnpm new <component-name>
```

下面分别介绍一下每个文件的作用：

- `interface.d.ts` 写入组件和 `Props` 相关的所有类型
- `component.ts` 写入 `Props` 和 `Emits`
- `component.vue` 组件的源文件
- `index.ts`主入口文件 包含注册组件

下面将会分别介绍一下每个文件内部的一些规范。

## interface.d.ts

`interface.d.ts` 用于定义类型，每个组件中变量、函数、`Props` 相关的所有类型需要在这里定义。

导出统一使用 `export`

## component.vue

这是组件的源文件，内部结构为：

```html
<script lang="ts" setup name=""></script>

<template></template>
```

> 注意：\*.vue 文件必须将 script 在上 template 在下

**结构规范**

- 组件内只有两个标签（必须的）`<script lang="ts" setup name="">` `<template> `
- 两大标签之间必须要有一个空行
- `script` 必须带有 `lang="ts" setup name=""` 三个标记，注意标记顺序

**script 规范**

- `script` 上的 `name` 属性是组件的名字，使用的 [unplugin-vue-setup-extend-plus](https://github.com/chenxch/unplugin-vue-setup-extend-plus) 插件。组件名必须以 `F` 开头，后面跟组件名，组件名首字母大写，例如：`FButton`
- 引入的类型，必须使用 `type` 标记，比如：`import type { xxx } from 'xxx'`
- 在所有 `import` 之后要带有一个空行，之后是 `prop` 和 `emit`
- `prop` 和 `emit` 之后，也要带一个空行，再继续编写其它代码
- 后面可以进行编写组件需要的逻辑函数，函数必须使用 `箭头函数`，除非特殊情况外，每个函数之间要有一个空行隔开。可见下面例子，取自 [f-button](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/button/src/button.vue)

**template 规范**

- 每个组件都必须要有一个自己专属的 `class`，格式为 `f-组件名`，例如 `f-button` `f-icon`
- 单个 `class` 不使用数组。反面例子：`:class="['f-button']"`；正面例子：`class="f-button"`
- 可以使用单标签均使用单标签，比如：`<slot />`
- 可以简化的都需要简化，比如 `:style="{ color }"`

**Ts 类型规范**

- 能定义类型的地方就要定义类型
- 就算是类型自动推倒出来了，也要写入类型
- `type` 或者 `interface` 等禁止在组件中直接定义，定义类型请在 `interface.d.ts` 中定义
- 禁止出现 `any`。如有特殊情况可发起 [讨论](https://github.com/FightingDesign/fighting-design/discussions) 或者群里提问
- 定义函数类型通常命名规范为 `函数名+Interface`，但是由于这种规则定义的名称较长，你也可以使用简短的别名来定义（别名的定义仅限于自定义的接口类型，例如 `ComputedRef` 是从 `vue` 中引入的则不可以设置别名），例如下面代码，取自 [preview-list](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/image/components/preview-list.vue)：

```ts
import type {
  switchImageInterface as a,
  optionClickInterface as b,
  onImgMousewheelInterface as c,
  handleCloseInterface as d
} from '../src/interface'
```

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

```ts
// interface.d.ts 中定义类型
export interface funInterface {
  (a: number, b: number): number
}
```

```ts
// 引入使用类型
import type { funInterface as a } from './interface'

const fun: a = (a: number, b: number): number => {
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
- 导出统一使用默认导出，如下代码：

```ts
import FButton from './src/button.vue'

import { install } from '../_utils'

install(FButton, FButton.name)

export default FButton
```

## 工具函数

在 `packages/fighting-components/_utils` 目录中可以定义一些工具函数和类，文件名统一使用短横杠连接，不可以出现大写字母。

定义的函数需要在 `index.ts` 中统一导出。

工具函数的类型可以在 `packages/fighting-components/_interface` 中进行定义。

## 主入口文件

主入口文件是 `@fighting-design/fighting-components/index.ts` 这里导入了所有的组件

如果你新建了一个新的组件，那么需要在此处进行引入，还需要在 `components` 对象中添加组件。

另外在 `export` 中也需要进行导出。

## 写在结尾

这里的规范可能比较多，此文件可能更新会较为频繁，请大家在开发全新组件的时候，请务必先阅读此文件。
