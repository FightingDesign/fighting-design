# @fighting-design/eslint-config <a href="https://www.npmjs.com/package/eslint-config-fighting"><img src="https://badgen.net/npm/v/eslint-config-fighting" /></a>

<a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/eslint-config/README.md">Chinese</a> | English

## 🤟 Introduce

`Fighting design` exclusive `eslint` configuration item, out of the box.

`eslint-config-fighting` is mainly for `*.vue` and `*.ts` files have strong format verification rules. If you want to pursue stricter verification rules and better code style, you can use them with confidence. On the contrary, if you don't understand the specifications or are not used to too many mandatory verification rules, you may feel very painful in use.

## 🔑 Install

Use `pnpm` install

```shell
pnpm add --save-dev eslint eslint-config-fighting
```

Use `npm` install

```shell
npm install --save-dev eslint eslint-config-fighting
```

Use `yarn` install

```shell
yarn add --save-dev eslint eslint-config-fighting
```

## 🐳 Use

Add the following code to the `.eslintrc` file

```json
{
  "extends": "fighting"
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

Refer to [index.js](https://github.com/FightingDesign/fighting-design/blob/master/packages/eslint-config/index.js) for details

## 💬 License

[MIT](https://github.com/FightingDesign/fighting-design/blob/master/packages/eslint-config/LICENSE)
