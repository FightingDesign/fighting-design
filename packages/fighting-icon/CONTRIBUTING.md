# 贡献指南

## 👋 写在前面

你好！欢迎使用 `@fighting-design/fighting-icon`！

我很高兴你有兴趣为 `@fighting-design/fighting-icon` 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

## 🔓 贡献

`fighting-icon` 使用 [icones](https://github.com/antfu/icones) 作为图标库，如何需要全新的 svg 可进行贡献，规则如下：

## 🚧 规范

- 可在 [icones](https://icones.js.org) 官网搜索需要的 svg 进行添加到 [fighting-icon/src](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-icon/src) 目录下
- 目录下新建以 `f-icon-xxx` 形式的文件夹
- 文件夹内部新建 `index.vue`
- 文件名必须以全部小写形式，中间使用短横线连接
- 添加的 svg 需要在 [fighting-icon/default.ts](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-icon/default.ts) 目录中统一导出
