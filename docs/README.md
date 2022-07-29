# Docs 规范指南

## 前言

`Docs` 是 `Fighting Design` 官方文档目录，使用 [VitePress](https://github.com/vuejs/vitepress) 进行开发。

`vitePress` 是一个 `Vite` 和 `Vue` 支持的静态站点生成器，使用 [MarkDown](https://zh.wikipedia.org/zh-tw/Markdown) 进行编写。如果你还不了解 `MarkDown`，可以通过[这里](http://younghz.github.io/Markdown/)进行学习。

如果你也想编写自己的 `blog`，可以在 [VitePress](https://github.com/vuejs/vitepress) 官方进行学习使用。[vitePress-demo](https://github.com/Tyh2001/vitePress-demo) 是我已经配置好的一个项目，也可以拿来开箱即用。

## 线上地址

- 官方文档：[Fighting Design](https://fighting.tianyuhao.cn)
- 仓库地址：[Docs](https://github.com/FightingDesign/fighting-design/tree/master/docs)

## 编写规范

首先需要在 [docs/docs/components](https://github.com/FightingDesign/fighting-design/tree/master/docs/docs/components) 目录下，新建一个以组件小写名，去掉首字母 `F` 的 `*.md` 文件。如：`button`，而不是 `FButton`。

- `*.md` 内，只允许出现一个一级标题 `#`，后面全部使用二级标题 `##`，禁止出现二级标题以下的标题
- 一级标题为`组件的名称 + 中文描述`，中间要带有空格。如：`Button 按钮`、`Icon 图标`。这里的组件名要以大写开头
- 接下来每个二级标题用于描述配置信息，配置信息下面要写入简单的描述。如下，取自 [button.md](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/button.md)：

```
## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态
```

- 并不是组件的所有配置项都要带有演示用例，突出主要即可
- 英文名要用反引号包裹，左右两边要带有空格。如： `type` 配置按钮的类型
- 描述信息之后要带有具体的配置例子
- 你需要提供演效果的代码段，代码段使用 `VitePress` 内置的 `::: details` 语法，可以解析为原生 [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) 标签，但是你需要注意 `::: details` 语法需要带有闭合标签禁止折叠 `:::`，因为之前就有过类似的错误 [pull #8](https://github.com/FightingDesign/fighting-design/pull/8)。例：

```
::: details 显示代码

// code...

:::
```

- 在组件演示完之后，要写详细的 `Attributes`（必须）、`Slots`（可选）、`Events`（可选）描述信息。使用 `table` 进行编写，格式规范参考如下：

Attributes

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ---- | ---- | ------ | ------ |
| `xxx` | xxx  | xxx  | `xxx`  | xxx    |

Slots

| 名称  | 说明 |
| ----- | ---- |
| `xxx` | xxx  |

Events

| 事件名称 | 说明 | 回调参数 |
| -------- | ---- | -------- |
| `xxx`    | xxx  | xxx      |

- 在上面表格中的 `Attributes 的参数列`、`Attributes 的可选值列`、`Slots 的名称列`、`Events 的事件名称列` 的内容需要使用反引号包裹，每一项都应该使用 [kebab-case](https://staging-cn.vuejs.org/guide/components/props.html#prop-passing-details) 形式
- 表格中需要详细的描述好每个选项

## 扩展语法

- 在 `*.md` 内部可以直接写入 `vue` 组件代码，完全可以正常解析
- 在 `*.md` 内不页可以直接定义和本页面相关的样式，或者 `js` 语法，你完全可以像下面这样使用：

```
# xxx

## xxx

code....

<script setup>
javascript code...
</script>

<style scoped>
css code...
<style>
```

## 引入

在你新建的组件文档文件之后，你需要在 [sidebar](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/.vitepress/utils/sidebar.ts) 中引入你的文档，才可以正常显示

## 测试

在项目根目录执行命令：

```shell
pnpm dev:docs
```

来启动测试文档

## 格式化

目前 `Fighting Design` 暂时还没有配置 [Eslint](https://github.com/eslint/eslint)，但是你可以在根目录执行下面命令进行全局格式化代码：

```shell
pnpm prettier
```

## 贡献者

文档在 `Attributes` 或者 `Slots` 的结尾需要加入 `Contributors（贡献者）` 如果你参与了某个组件的开发或者维护，那么就可以将你放在该组件下发的开发者列表中！

格式如下:

`a` 标签的 `href` 属性用作你的 `Github` 首页地址，`FAvatar` 组件的头像地址用作你的 `Github` 头像地址。可在 `Github` 首页右键头像，复制头像地址填入。

```html
<a href="" target="_blank">
  <f-avatar round src="" />
</a>
```

例如我的：

```html
<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
```

## 写在最后

规范可能随时会增加或者修改，在编写文档前请认真阅读规范指南。
