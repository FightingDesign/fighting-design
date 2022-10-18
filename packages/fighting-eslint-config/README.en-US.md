# @fighting-design/eslint-config <a href="https://www.npmjs.com/package/@fighting-design/eslint-config"><img src="https://badgen.net/npm/v/@fighting-design/eslint-config" /></a>

<a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/README.md">Chinese</a> | English

## 🤟 Introduce

`Fighting design` exclusive `eslint` configuration item, out of the box.

`@fighting-design/eslint-config` is mainly for `*.vue` and `*.ts` files have strong format verification rules. If you want to pursue stricter verification rules and better code style, you can use them with confidence. On the contrary, if you don't understand the specifications or are not used to too many mandatory verification rules, you may feel very painful in use.

## 🔑 Install

Use `pnpm` install

```shell
pnpm add --save-dev eslint @fighting-design/eslint-config
```

Use `npm` install

```shell
npm install --save-dev eslint @fighting-design/eslint-config
```

Use `yarn` install

```shell
yarn add --save-dev eslint @fighting-design/eslint-config
```

## 🐳 Use

Add the following code to the `.eslintrc` file

```json
{
  "extends": "@fighting-design"
}
```

在 `package.json` 中新增以下配置：

In The following configurations are added to `package.json`:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

Execute command：

```shell
# Detection code format specification
pnpm lint

# Fix format specification
pnpm lint:fix
```

## 🚧 Rule

Refer to [index.js](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/index.js) for details

## 💬 License

[MIT](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/LICENSE)
