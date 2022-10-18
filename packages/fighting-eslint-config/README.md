# @fighting-design/eslint-config <a href="https://www.npmjs.com/package/@fighting-design/eslint-config"><img src="https://badgen.net/npm/v/@fighting-design/eslint-config" /></a>

中文 | <a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/README.en-US.md">English</a>

## 🤟 介绍

`Fighting Design` 专属 `eslint` 配置项，开箱即用。

`@fighting-design/eslint-config` 主要针对于 `*.vue` 和 `*.ts` 文件做了很大强度的格式校验规则，如果想追求更严格的校验规则和更优质的代码风格，可放心使用。反之如果并不太了解其中的规范，或不习惯过多的强制校验规则，可能会在使用中感到十分痛苦。

## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev eslint @fighting-design/eslint-config
```

使用 `npm` 安装

```shell
npm install --save-dev eslint @fighting-design/eslint-config
```

使用 `yarn` 安装

```shell
yarn add --save-dev eslint @fighting-design/eslint-config
```

## 🐳 使用

将下面代码添加到 `.eslintrc` 文件中

```json
{
  "extends": "@fighting-design"
}
```

在 `package.json` 中新增以下配置：

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

执行命令：

```shell
# 检测代码格式规范
pnpm lint

# 修复格式规范
pnpm lint:fix
```

## 🚧 规则

详情参考 [index.js](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/index.js)

## 💬 执照

[MIT](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/LICENSE)
