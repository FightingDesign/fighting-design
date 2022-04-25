<br />

<p align="center">
  <img height="160px" src="https://tianyuhao.cn/fighting/imgs/logo.png">
  <h2 align="center" style="font-weight: 600">Fighting Design</h2>

  <p align="center">
    是一款使用 TypeScript + Template 编写的 Vue3 轻量级组件库
  </p>
</p>

## ✨ 特性

- ✅ 使用 TypeScript + Template 编写
- ✔️ 配置简单，上手容易

## :key: 安装

使用 `npm` 安装

```shell
npm install fighting-design --save
```

使用 `yarn` 安装

```shell
yarn add fighting-design --save
```

## :tada: 快速上手

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'
import fighting from 'fighting-design'
import 'fighting-design/style/index.css'

createApp(App).use(fighting).mount('#app')
```
