# 贡献指南

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.en-US.md)

## 写在前面

👋 你好！欢迎使用 `Fighting Design`！

我很高兴你有兴趣为 `Fighting Design` 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

规范可能比较多，但是大多数都是一些比较细小的规范，请认真阅读。

## 启动项目

在贡献之前，你需要先将 `Fighting Design` 项目跑起来才行，那么前期的准备你需要：

- 安装 [node](http://nodejs.cn)，版本 `>= 16`
- 安装 [pnpm](https://pnpm.io/zh/)，最新版即可

如果你已经做好了前面的准备，可以直接跳过，从这里开始：

- `Fork` [fighting-design](https://github.com/FightingDesign/fighting-design)
- 将 `Fork` 的项目 `Clone` 到本地

接下来执行命令：

```shell
# 进入项目目录
cd fighting-design

# 安装依赖项
pnpm i

# 启动开发项目
pnpm start
```

## 命令说明

`Fighting Design` 内部设置了很多的命令，在 [package.json](https://github.com/FightingDesign/fighting-design/blob/master/package.json) 中可以看到：

```json
"scripts": {
 "clean": "rimraf dist",
  "start": "pnpm run -C start dev",
  "dev:docs": "pnpm run -C docs dev",
  "build": "pnpm clean && vite build && pnpm build:theme && pnpm move",
  "build:theme": "vite build --config vite.config.theme.ts",
  "build:docs": "pnpm run -C docs build",
  "build:start": "pnpm run -C start build",
  "move": "node script/moveFile.ts",
  "test": "vitest",
  "prettier": "prettier --write .",
  "commit": "cz"
},
```

下面详细介绍每一条命令

```shell
# 清除 dist
pnpm clean

# 启动开发测试项目
pnpm start

# 启动文档项目
pnpm dev:docs

# 打包（主要的打包，打包之后就是需要发布的包）
pnpm build

# 打包组件样式主题
pnpm build:theme

# 打包文档
pnpm build:docs

# 运行打包后的文档
pnpm serve:docs

# 打包开发测试项目
pnpm build:start

# 单元测试
pnpm test

# 代码格式化
pnpm prettier

# 启用提交插件
pnpm commit
```

## 开发规范

主要源文件都在 `fighting-design/packages` 目录下，其中每个子目录都有单独的 `README.md` 对指定目录进行说明，每个模块详细的规范参考下面文档：

**详细的规范在下面链接，千万不用忽略下面链接！！！**

- [fighting-components](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-components/README.md) 组件源文件目录
- [fighting-test](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-test/README.md) 单元测试目录
- [fighting-theme](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.md) 样式主题目录
- [fighting-utils](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-utils/README.md) 工具函数目录

下面是关于文档规范：

- [Docs](https://github.com/FightingDesign/fighting-design/blob/master/docs/README.md) 文档编写规范

## 提交规范

[Git](https://git-scm.com) 允许我们在每次提交时，附带一个提交信息作为说明，当执行 `commit` 的时候，需要严格按照下方说明规范进行填写说明信息，提交信息必须是下面信息中的一个，后面跟随 `英文的冒号+空格+信息`

例如：

```shell
git commit -m 'feat: 新增xxx功能'
```

类型必须是下面类型之一，并对照类型描述填写。

| 类型     | 描述                                 |
| -------- | ------------------------------------ |
| build    | 打包                                 |
| chore    | 改变构建流程或者增加依赖库、工具等   |
| ci       | CI 相关更改                          |
| docs     | 文档改变                             |
| feat     | 新功能                               |
| fix      | 修复                                 |
| perf     | 性能优化                             |
| refactor | 既不修复错误也不添加功能的代码更改   |
| revert   | 发布新版本                           |
| style    | 标记、空格、格式、缺少分号           |
| test     | 增加测试/测试用例                    |

但是 `Fighting Design` 内置了 [commitlint](https://github.com/conventional-changelog/commitlint) 插件可以辅助我们进行添加提交信息，那么就需要执行下面命令：

```shell
git add .

# 使用插件的提示来设置提交信息
pnpm commit

git push
```

## 关于 PR

在你提交 `PR` 之前，请务必保证你 `fork` 的仓库是当前最新的代码，以免发生冲突。

如果你并不了解如何提交 `PR`，可以参考我这篇文章 [Github 如何提交 PR？](https://juejin.cn/post/7108740596738719751)

所以，在提交 `PR` 之前，请务必**拉取最新的代码，拉取最新的代码，拉取最新的代码！**

## 常见问题

常见问题请参考 [COMMON_PROBLEM](https://github.com/FightingDesign/fighting-design/blob/master/.github/COMMON_PROBLEM.md)

也可以直接和[我](https://github.com/Tyh2001/Tyh2001)进行联系

## 财务贡献

开发不易，欢迎大家赞助！

<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" />
<img width="200px" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" />

## 非常感谢

感谢所有已经为 `Fighting Design` [做出贡献的人](https://github.com/FightingDesign/fighting-design/graphs/contributors)！

**Star**

[![Stargazers repo roster for @FightingDesign/fighting-design](https://reporoster.com/stars/FightingDesign/fighting-design)](https://github.com/FightingDesign/fighting-design/stargazers)

**Fork**

[![Forkers repo roster for @FightingDesign/fighting-design](https://reporoster.com/forks/FightingDesign/fighting-design)](https://github.com/FightingDesign/fighting-design/network/members)
