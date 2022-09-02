# CONTRIBUTING

> English documents are not synchronized in time most of the time. Please refer to Chinese documents for details.

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md)

## Write in front

👋 Hello! Welcome use `Fighting Design`!

I am glad that you are interested in contributing to `Fighting Design`. Before submitting your contribution, be sure to take a moment to read the following guidelines.

There may be many specifications, but most of them are small specifications. Please read them carefully.

## Start project

Before you make a contribution, you need to run the `Fighting Design` project. Then you need to:

- Install [node](http://nodejs.cn),version `>= 16`
- Install [pnpm](https://pnpm.io/zh/),the latest version is enough

If you are ready, you can skip directly and start from here:

- `Fork` [fighting-design](https://github.com/FightingDesign/fighting-design)
- `Clone fork` items locally

Next, execute the command:

```shell
# Enter project directory
cd fighting-design

# Install dependencies
pnpm i

# Start development project
pnpm start
```

## Command description

There are many commands set in `Fighting Design`,You can see in [package.json](https://github.com/FightingDesign/fighting-design/blob/master/package.json):

```json
  "scripts": {
    "clean": "rimraf dist",
    "start": "pnpm run -C start dev",
    "dev:docs": "pnpm run -C docs dev",
    "build": "pnpm clean && pnpm build:css && vite build && pnpm build:lib && pnpm build:umd && pnpm build:theme && pnpm move",
    "build:es": "vite build --config vite.config.ts",
    "build:lib": "vite build --config vite.config.lib.ts",
    "build:umd": "vite build --config vite.config.umd.ts",
    "build:css": "vite build --config vite.config.css.ts",
    "build:theme": "vite build --config vite.config.theme.ts",
    "build:docs": "pnpm run -C docs build",
    "serve:docs": "pnpm run -C docs serve",
    "build:start": "pnpm run -C start build",
    "move": "node script/move.ts",
    "new": "pnpm run -C packages/add-component new",
    "test": "vitest",
    "prettier": "prettier --write .",
    "commit": "cz",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
```

## Development specification

The main source files are in the `fighting-design/packages` directory, and each subdirectory has a separate `README.md` describes the specified directory. Refer to the following documents for detailed specifications of each module:

**The detailed specifications are listed in the following links. Do not ignore the following links!!!**

- [fighting-design](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-design/README.md) Component source file directory
- [fighting-theme](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.md) Style theme catalog
- [Docs](https://github.com/FightingDesign/fighting-design/blob/master/docs/README.md) Document preparation specification

## Commit specification

[Git](https://git-scm.com) allows us to attach a submission information as a description each time we submit. When we execute a `commit`, we need to fill in the description information in strict accordance with the specification below. The submission information must be one of the following information, followed by the `colon + space + information in English`

For example:

```shell
git commit -m 'feat: Add XXX function'
```

The type must be one of the following types and filled in against the type description.

| type     | describe                                                               |
| -------- | ---------------------------------------------------------------------- |
| build    | build                                                                  |
| chore    | Change the construction process or add dependent libraries, tools, etc |
| ci       | Ci related changes                                                     |
| docs     | Document change                                                        |
| feat     | new function                                                           |
| fix      | repair                                                                 |
| perf     | performance optimization                                               |
| refactor | Code changes that neither fix errors nor add features                  |
| revert   | Release new version                                                    |
| style    | Tag, space, format, missing semicolon                                  |
| test     | Add test / test case                                                   |

However, `Fighting Design` has built-in [commitlint](https://github.com/conventional-changelog/commitlint) plug-in to assist us in adding submission information, so we need to execute the following commands:

```shell
git add .

# Use the prompt of the plug-in to set the submission information
pnpm commit

git push
```

## About PR

Before you submit `PR`, please make sure that your `fork` warehouse is the latest code to avoid conflicts.

Therefore, before submitting `PR`, please be sure to **pull the latest code, pull the latest code, and pull the latest code!**

## Common problem

Please refer to [COMMON_PROBLEM.md](https://github.com/FightingDesign/fighting-design/blob/master/.github/COMMON_PROBLEM.md), You can also contact [me](https://github.com/Tyh2001/Tyh2001) directly.

## Financial contribution

Development is not easy, welcome to sponsor!

<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" />
<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" />

## Thank a lot

Thank all those who have [contributors](https://github.com/FightingDesign/fighting-design/graphs/contributors) to `Fighting Design`!
