# CONTRIBUTING

English | [Chinese](https://github.com/Tyh2001/fighting-design/blob/master/CONTRIBUTING.md)

## Write in front

👋 Hello! Welcome use `Fighting Design`!

I am glad that you are interested in contributing to `Fighting Design`. Before submitting your contribution, be sure to take a moment to read the following guidelines.

There may be many specifications, but most of them are small specifications. Please read them carefully.

## Start project

Before you make a contribution, you need to run the `Fighting Design` project. Then you need to:

- Install [node](http://nodejs.cn),version `>= 16`
- Install [pnpm](https://pnpm.io/zh/),the latest version is enough

If you are ready, you can skip directly and start from here:

- `Fork` [fighting-design](https://github.com/tyh2001/fighting-design)
- `Clone Fork` items locally

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

There are many commands set in `Fighting Design`,You can see in [package.json](https://github.com/Tyh2001/tyh-ui/blob/master/package.json):

```json
"scripts": {
  "clean": "rimraf dist",
  "dev": "pnpm vite",
  "dev:docs": "pnpm run -C docs dev",
  "build": "run-s build:*",
  "build:components": "vite build",
  "build:theme": "vite build --config vite.config.css.ts",
  "build:types": "vite build --config vite.config.types.ts",
  "build:docs": "pnpm run -C docs build",
  "serve:docs": "pnpm run -C docs serve",
  "test": "vitest",
  "prettier": "prettier --write ."
},
```

Each command is described in detail below

```shell
# Clean dits
pnpm clean

# Start development test project
pnpm dev

# Start document project
pnpm dev:docs

# Build (the main build, after which is the package to be released)
pnpm build

# Build components
pnpm build:components

# Build component style theme
pnpm build:theme

# Build component type
pnpm build:type

# build documents
pnpm build:docs

# Run build document
pnpm serve:docs

# It is used to move files, and move some files that do not need to be packaged to the dist directory (basically not used)
pnpm move

# unit testing
pnpm test

# Code formatting
pnpm prettier
```

## Development specification

The main source files are in the `fighting-design/packages` directory, and each subdirectory has a separate `README.md` describes the specified directory. Refer to:

- [fighting-components](https://github.com/Tyh2001/fighting-design/blob/master/packages/fighting-components/README.md) Component source file directory
- [fighting-test](https://github.com/Tyh2001/fighting-design/blob/master/packages/fighting-test/README.md) Unit test directory
- [fighting-theme](https://github.com/Tyh2001/fighting-design/blob/master/packages/fighting-theme/README.md) Style theme catalog
- [fighting-type](https://github.com/Tyh2001/fighting-design/blob/master/packages/fighting-type/README.md) Type catalog
- [fighting-utils](https://github.com/Tyh2001/fighting-design/blob/master/packages/fighting-utils/README.md) Tool function directory

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

## About PR

Before you submit `PR`, please make sure that your `fork` warehouse is the latest code to avoid conflicts.

Therefore, before submitting `PR`, please be sure to **pull the latest code, pull the latest code, and pull the latest code!**

## Common problem

Please refer to [COMMON_PROBLEM](https://github.com/Tyh2001/fighting-design/blob/master/.github/COMMON_PROBLEM.md)

You can also contact [me](https://github.com/Tyh2001/Tyh2001) directly

## Financial contribution

Development is not easy, welcome to sponsor!

<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" />
<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" />

## Thank a lot

Thank all those who have [contributors](https://github.com/tyh2001/fighting-design/graphs/contributors) to `Fighting Design`!

**Star**

[![Stargazers repo roster for @tyh2001/fighting-design](https://reporoster.com/stars/tyh2001/fighting-design)](https://github.com/tyh2001/fighting-design/stargazers)

**Fork**

[![Forkers repo roster for @tyh2001/fighting-design](https://reporoster.com/forks/tyh2001/fighting-design)](https://github.com/tyh2001/fighting-design/network/members)
