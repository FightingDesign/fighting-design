<p align="center">
  <img height="160px" src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg">
  <h2 align="center" style="font-weight: 600">Fighting Design</h2>
</p>

<p align="center">
  Fighting Design 可在 vue3 应用程序中快速构建交互界面，看起来还不错。
</p>

<p align="center">
  中文 | <a href="https://github.com/FightingDesign/fighting-design/blob/master/README.md">English</a>
</p>

<p align="center">
  <a href="https://github.com/FightingDesign/fighting-design/stargazers"><img src="https://img.shields.io/github/stars/FightingDesign/fighting-design" /></a>
  <a href="https://www.npmjs.com/package/fighting-design"><img src="https://badgen.net/npm/v/fighting-design" /></a>
  <a href="https://fighting.tianyuhao.cn"><img src="https://img.shields.io/badge/Fighting%20Design-Docs-blue" /></a>
  <a href="https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Fighting%20Design-CHANGELOG-blue" /></a>
</p>

## ✨ 特性

- 🪐 60+ 常用组件
- 💪 使用 Vue.js 最新特性开发
- 🐆 全面基于 Vite，速度够快
- 🤟 极致的开发体验
- 🥇 超详细的 JSDoc 注释
- 🦩 零第三方依赖
- ✂️ 完善的代码提示
- 🪐 不同打包模式，兼容不同项目
- 🏆 支持完整引入和按需引入
- ✅ 使用 TypeScript + Template 编写
- 🖍️ 严格的 TypeScript 类型
- ✔️ 配置简单，上手容易
- 🚩 单元测试
- 👍 社区团队维护
- ❤️ 根据实际需求开发
- 📃 优质详细的文档
- 📌 完善 RFC
- ☝️ 提出需求，不断完善
- 🌍 更多配置项，灵活组件
- 🛠 更多特性开发中

## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev fighting-design
```

使用 `npm` 安装

```shell
npm install --save-dev fighting-design
```

使用 `yarn` 安装

```shell
yarn add --save-dev fighting-design
```

## 🎉 快速上手

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

createApp(App).use(FightingDesign).mount('#app')
```

## 🪂 快速体验

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

## 🐳 相关链接

- [官方文档](https://fighting.tianyuhao.cn)
- [NPM](https://www.npmjs.com/package/fighting-design)
- [贡献指南](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md)
- [更新日志](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md)

## 🌈 加入 Fighting Design

添加微信请备注 `Github` 用户名

<img width="200" height="200" src="https://raw.githubusercontent.com/Tyh2001/images/master/my/we-chat.jpg" >

## 💌 特别感谢

感谢所有已经为 `Fighting Design` [做出贡献的人](https://github.com/FightingDesign/fighting-design/graphs/contributors)！

<a href="https://github.com/FightingDesign/fighting-design/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FightingDesign/fighting-design" />
</a>

## 💬 执照

[MIT](https://github.com/FightingDesign/fighting-design/blob/master/LICENSE)
