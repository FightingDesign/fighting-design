# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'

import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

createApp(App).use(FightingDesign).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { FButton, FCard } from 'fighting-design'

// 样式按需引入
import 'fighting-design/theme/button.css'
import 'fighting-design/theme/card.css'

createApp(App).use(FButton).use(FCard).mount('#app')
```

## 使用 UMD

可通过 `UMD` 模式在 `*.html` 中引入 `Fighting Design`，快速构建您的程序

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/fighting-design/dist/index.css"
  />
</head>

<body>
  <div id="app">
    <f-space>
      <f-button round type="default">默认按钮</f-button>
      <f-button round type="primary">主要按钮</f-button>
      <f-button round type="success">成功按钮</f-button>
      <f-button round type="danger">危险按钮</f-button>
      <f-button round type="warning">警告按钮</f-button>
    </f-space>

    <f-divider>华丽的分隔线</f-divider>

    <f-button type="primary" @click="visible = true">打开 Dialog</f-button>
    <f-dialog title="Title" v-model:visible="visible">
      欢迎使用 Fighting Design！
    </f-dialog>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/fighting-design/dist/index.umd.js"></script>
  <script>
    const { createApp, ref } = Vue

    const app = createApp({
      setup() {
        const visible = ref(false)

        return { visible }
      }
    })

    app.use(FightingDesign.default)
    app.mount('#app')
  </script>
</body>
```
