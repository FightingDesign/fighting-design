<p align="center">
  <img height="160px" src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg">
  <h2 align="center" style="font-weight: 600">Fighting Design</h2>
</p>

<p align="center">
  Fighting design can quickly build interactive interfaces in vue3 applications, which looks good.
</p>

<p align="center">
  <a href="https://github.com/FightingDesign/fighting-design/blob/master/README.zh-CN.md">Chinese</a> | English 
</p>

<p align="center">
  <a href="https://github.com/FightingDesign/fighting-design/stargazers"><img src="https://img.shields.io/github/stars/FightingDesign/fighting-design" /></a>
  <a href="https://www.npmjs.com/package/fighting-design"><img src="https://badgen.net/npm/v/fighting-design" /></a>
  <a href="https://fighting.tianyuhao.cn"><img src="https://img.shields.io/badge/Fighting%20Design-Docs-blue" /></a>
  <a href="https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Fighting%20Design-CHANGELOG-blue" /></a>
</p>

## ✨ Features

- 🪐 60+ common components
- 💪 Developed with the latest features of Vue.js
- 🐆 Fully based on Vite, fast enough
- 🤟 Ultimate development experience
- 🥇 Ultra detailed JSDoc comments
- 🦩 Zero third party dependency
- 🪐 Different packaging modes which compatible with different projects
- 🏆 Support full import and on-demand import
- ✅ Written with TypeScript & Template
- 🖍️ Strict TypeScript Type
- ✔️ Easy to configure and easy to use
- 🚩 Complete and adequate unit tests
- 👍 Maintained by the community team
- ❤️ Developed according to actual demand
- 📃 High quality detailed documentation
- 📌 Improve RFC
- ☝️ Put forward demands and keep improving
- 🌍 More configuration options & flexible components
- 🛠 More features are under development

## 🔑 Install

Use `pnpm` install

```shell
pnpm add --save-dev fighting-design
```

Use `npm` install

```shell
npm install --save-dev fighting-design
```

Use `yarn` install

```shell
yarn add --save-dev fighting-design
```

## 🎉 Quick Start

Put the following code into `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

createApp(App).use(FightingDesign).mount('#app')
```

## 🪂 Quick experience

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

## 🐳 Related links

- [Official documents](https://fighting.tianyuhao.cn)
- [NPM](https://www.npmjs.com/package/fighting-design)
- [CONTRIBUTING](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md)
- [CHANGELOG](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md)

## 🌈 Join Fighting Design

Add WeChat & please note the `Github` username

<img width="200" height="200" src="https://raw.githubusercontent.com/Tyh2001/images/master/my/we-chat.jpg" >

## 💌 Special Thanks

Thanks to [everyone](https://github.com/FightingDesign/fighting-design/graphs/contributors) who has already contributed to `Fighting Design`!

<a href="https://github.com/FightingDesign/fighting-design/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FightingDesign/fighting-design" />
</a>

## 💬 LICENSE

[MIT](https://github.com/FightingDesign/fighting-design/blob/master/LICENSE)
