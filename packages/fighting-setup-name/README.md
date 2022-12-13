# @fighting-design/vite-plugin-vue-fighting-setup-name <a href="https://www.npmjs.com/package/@fighting-design/vite-plugin-vue-fighting-setup-name"><img src="https://badgen.net/npm/v/@fighting-design/vite-plugin-vue-fighting-setup-name" /></a>

中文 | [英文]()

## 📢 介绍

Fighting Design 内部使用的 vite 插件，用于设置组件名。

## ⚒️ 安装

```shell
# pnpm
pnpm add --save-dev @fighting-design/vite-plugin-vue-fighting-setup-name

# npm
npm i --save-dev @fighting-design/vite-plugin-vue-fighting-setup-name

# yarn
yarn --save-dev add @fighting-design/vite-plugin-vue-fighting-setup-name
```

## 💡 使用

在 `vite.config.ts` 中引入下面内容

```ts
import vue from '@vitejs/plugin-vue'
import FightingSetupNamePlugin from '@fighting-design/vite-plugin-vue-fighting-setup-name'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), FightingSetupNamePlugin()]
  }
}
```
