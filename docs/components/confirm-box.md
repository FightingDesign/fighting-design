# Confirm Box 确认框

操作之前加点料？

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/confirm-box)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/confirm-box.md)

## 使用前

使用前，你需要先引入：

```ts
import { FConfirmBox } from 'fighting-design'
```

## 基本使用

传递一个配置对象，可打开确认框

`title` 和 `content` 配置标题和提示的内容信息

`on-confirm` 和 `on-cancel` 分别处理点击确定和点击取消的回调方法

::: demo

<template #source>
<f-button :on-click="open1">提示</f-button>
</template>

```html
<template>
  <f-button :on-click="open1">提示</f-button>
</template>

<script lang="ts" setup>
  import { FConfirmBox, FMessage } from 'fighting-design'

  const open1 = (): void => {
    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: () => {
        FMessage.success('点击了确定')
      },
      onCancel: () => {
        FMessage.danger('点击了取消')
      }
    })
  }
</script>
```

:::

## 异步调用

`on-confirm` 和 `on-cancel` 可传入一个异步方法或者 `Promise`，那么会等待方法响应之后再关闭

在未响应期间，按钮和关闭按钮处于禁用状态

::: demo

<template #source>
<f-button :on-click="open2">提示</f-button>
</template>

```html
<template>
  <f-button :on-click="open2">提示</f-button>
</template>

<script lang="ts" setup>
  import { FConfirmBox, FMessage } from 'fighting-design'

  const getDate = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ code: 200, res: [1, 2, 3] })
      }, 2000)
    })
  }

  const open2 = (): void => {
    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: async () => {
        await getDate()
        FMessage.success('点击了确定')
      },
      onCancel: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            FMessage.danger('点击了取消')
            resolve('123')
          }, 2000)
        })
      }
    })
  }
</script>
```

:::

## Attributes

| 参数           | 说明                   | 类型                                                               | 可选值 | 默认值 |
| -------------- | ---------------------- | ------------------------------------------------------------------ | ------ | ------ |
| `title`        | 标题                   | string                                                             | ——     | ——     |
| `content`      | 提示内容               | string                                                             | ——     | ——     |
| `confirm-text` | 确认按钮文字           | string / number                                                    | ——     | ——     |
| `cancel-text`  | 取消按钮文字           | string / number                                                    | ——     | ——     |
| `on-confirm`   | 点击确定执行的回调方法 | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——     | ——     |
| `on-cancel`    | 点击取消执行的回调方法 | <a href="/components/interface.html#handlemouse">HandleMouse</a>   | ——     | ——     |
| `on-open`      | 开启之后执行的回调方法 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——     | ——     |
| `on-close`     | 关闭之后执行的回调方法 | <a href="/components/interface.html#handlechange">HandleChange</a> | ——     | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup lang="ts">
  import { FConfirmBox, FMessage } from 'fighting-design'

  const open1 = (): void => {
    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: () => {
        FMessage.success('点击了确定')
      },
      onCancel: () => {
        FMessage.danger('点击了取消')
      }
    })
  }

   const getDate = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ code: 200, res: [1, 2, 3] })
      }, 2000)
    })
  }

  const open2 = (): void => {
    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: async () => {
        await getDate()
        FMessage.success('点击了确定')
      },
      onCancel: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            FMessage.danger('点击了取消')
            resolve('123')
          }, 2000)
        })
      }
    })
  }
</script>
