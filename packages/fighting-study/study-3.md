# test-utils 基本 API

## 前言

这一章先简单的介绍一下 `test-utils` 的一些基本 `API`，如果你还不了解 [Vitest 基本 API](./Vitest%20%E5%9F%BA%E6%9C%AC%20API.md)，请先阅读它。

下面是官方文档地址，方便进行查阅

- [github](https://github.com/vuejs/test-utils)
- [官方文档](https://test-utils.vuejs.org)

## mount 包装器

其实在 `test-utils` 中，现在需要用到的，只有一个 `mount` 函数，更多的是是一些在 `mount` 上的方法，使用之前，你需要先引入它：

```ts
import { mount } from '@vue/test-utils'
```

接下来需要在单元测试文件 `xxx.spec.ts` 中引入组件，再将组件实例专递到 `mount` 函数得到一个`包装器`

```ts
import { FButton } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'

describe('FButton', () => {
  test('class', () => {
    // 包装器实例
    const wrapper = mount(FButton)
  })
})
```

包装器函数中也可以传递第二个参数，是一个对象，对象内部可以传入组件需要的 `Props` 和 `Slots` 对象：

```ts
import { FButton } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'

describe('FButton', () => {
  test('class', () => {
    // 包装器实例
    const wrapper = mount(FButton, {
      props: { blob: true }, // 传递 props
      slots: { default: '按钮' } // 传递 slots
    })
  })
})
```

大多数组件，都是通过传递 `Props` 和 `Slots` 来实现的各种功能，下面介绍一下包装器的一些方法

## wrapper.classes

[wrapper.classes](https://test-utils.vuejs.org/api/#classes) 方法可以获取到最外层元素的 `class` 类名

比如在 [FButton](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/button/src/button.vue) 组件中，可以通过传递 `round` 的参数类让按钮变成圆角状态，需要通过一个布尔值来判断是否作用类名，下面伪代码：

```html
<button :class="['f-button', { 'f-button-round': round }]">
  <slot />
</button>
```

上面的代码中 `f-button` 这个类名的固定的，`f-button-round` 是通过参数来决定的，那么测试代码如下：

```ts
test('class', () => {
  // 包装器实例，这里并不需要传递 props
  const wrapper = mount(FButton)

  // 断言 使用 wrapper.classes() 获取到 class
  // 使用 toContain 检查断言结果，检测是否存在类名 f-button，测试通过
  expect(wrapper.classes()).toContain('f-button')
})

test('round', () => {
  const wrapper = mount(FButton, {
    // 传递了 round 参数
    props: { round: true }
  })

  // 因为 round 为 true，所以 f-button-round 类名会作用，测试通过
  expect(wrapper.classes()).toContain('f-button-round')
})
```

## wrapper.attributes

除了获取类名，还可以获取属性，[wrapper.attributes](https://test-utils.vuejs.org/api/#attributes) 方法可以获取到最外层元素的指定属性

例如下面伪代码，按钮组件需要通过传递一个 `color` 来决定按钮的文字颜色，这时就需要获取到 `style` 属性了

```html
<button :style="{ color }">
  <slot />
</button>
```

测试代码如下：

```ts
test('color', () => {
  const wrapper = mount(FButton, {
    // 传递了 round 参数
    props: { color: 'red' }
  })

  // 使用 attributes 获取指定的 style 属性，断言结果为 red，测试通过
  expect(wrapper.attributes('style')).toContain('red')
})
```

## wrapper.find

有些时候，并不仅仅只获取到最外层元素的类名或者属性，对于内部的元素也是需要验证的，[wrapper.find](https://test-utils.vuejs.org/api/#find) 方法可以获取到指定的内部元素，可以传递类名获取到指定元素

```html
<button>
  <span class="f-text" :style="{ color }">
    <slot />
  </span>
</button>
```

测试代码：

```ts
test('class', () => {
  const wrapper = mount(FButton, {
    props: { color: 'red' }
  })

  // 获取内部类名为 f-text 的元素，再获取它的 style
  expect(wrapper.find('.f-text').attributes('style')).toContain('red')
})
```
