# 更新日志

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.en-US.md)

## 0.6.0-bate.1 (2022-08-11)

- 改变样式表的文件名引入方式
- 修复打包配置项

## 0.5.1-bate.5 (2022-08-10)

- `F-alert` 样式引入
- `F-text` 细节样式优化
- 加入版本号导出
- 更新 prop 的类型

## 0.5.1-bate.4 (2022-08-09)

- 测试修复打包引入路径错误的问题

## 0.5.1-bate.3 (2022-08-09)

- 测试修复打包引入路径错误的问题

## 0.5.1-bate.2 (2022-08-09)

- 测试修复打包引入路径错误的问题

## 0.5.1-bate.1 (2022-08-09)

- 修复了打包类型相关的问题

## 0.5.0-bate.2 (2022-08-08)

- 修复了打包类型相关的问题

## 0.5.0-bate.1 (2022-08-08)

主要修复了打包的相关的配置项，在[上一个版本](https://github.com/FightingDesign/fighting-design/releases/tag/0.4.2-bate.9)中，如果需要按需引入组件，那么会有很多异常的错误信息，这个版本主要是针对打包做了很大的优化，已经修复了按需引入导致的致命错误。

对于目录结构也做了很大程度的优化，之前是将 `utils` 目录是单独抽离出来，但是现在也和组件是同级关系，只为了能够更好的打包。

## 0.4.2-bate.9 (2022-07-04)

**fest**

- `Alert` 组件新增 `fixed` `fixed-style` 配置项
- 新增 `f-list` 组件
- 新增 `f-list-item` 组件
- 新增 `message` 组件
- `f-text` 组件新增 `center` 配置项
- 新增 `f-watermark` 组件

**fix**

- 修复 `f-tag` 组件样式细节
- 优化 `f-card` 组件细节样式

## 0.4.2-bate.8 (2022-07-23)

**fest**

- `Tag` 组件新增 `text` 配置项，实现文字标签
- `Tag` 组件改变了部分样式细节，加入边框
- `Avatar` 组件新增 `font-size`、`font-color`、`text`、`root-margin` 配置项
- `Avatar` 组件将 `size` 属性改为可配置 `number` 类型参数
- 新增了样式按需引入

## 0.4.1-bate.7 (2022-07-19)

- 主要修复了引入样式的报错配置

## 0.4.0-bate.6 (2022-07-18)

**feat**

- `progress` 组件新增 `textInside` 配置项
- 新增 `novel-coronavirus` 组件
- 新增 `cjs` 和 `umd` 打包模式

## 0.3.2-bate.5 (2022-07-17)

**feat**

- `Tooltip` 组件移除部分配置项
- 重做 `tooltip` 组件

**fix**

- 修复 `Tag` 组件不展示的问题
- 修复 `Alert` 组件的展示状态和关闭回调

## 0.3.1-bate.4 (2022-07-15)

- `Link` 组件新增 `default` 配置 `type`
- `button` 组件 `ripples` 默认值改为 `false`

## 0.3.0-bate.3 (2022-07-13)

**feat**

- 新增 `progress` 组件配置项
- 新增 `alert` 组件

**fix**

- 修复 `progress` 组件百分百展示状态
- 修复 `text` 组件样式细节
- 修复 `button` 组件样式细节
- 修改 `button` 组件文字按钮的样式
- 移除 `tag` 组件 `info` 属性，改为 `default`

## 0.2.0-bate.2 (2022-07-08)

**feat**

- 新增 `drawer` 组件
- 新增 `page-header` 组件

**fix**

- 修复 `tag` 基础样式
- 修复 `switch` 基础样式

## 0.1.0-bate.1 (2022-07-05)

**feat**

- 新增 `dialog` 组件
- 新增 `space` 组件
- 新增 `progress` 组件
- 新增 `captcha` 组件 （bate）
- 新增 `tooltip` 组件 （bate）

**fix**

- 修复 `BackTop` 组件的监听目标报错问题

## 0.0.12-alpha.12 (2022-06-29)

**fix**

- 修复 `back-top` 组件的功能

**feat**

- `back-top` 组件新增 `z-index`、`top`、`listen-el`、`background`、`color` 配置项
- 新增 `breadcrumb` 组件

## 0.0.11-alpha.11 (2022-06-26)

**fix**

- 修复打包路径错误问题

## 0.0.10-alpha.10 (2022-06-26)

**feat**

- 新增 `FText` 组件
- 新增 `FAvatar` 组件
- 新增 `FLoading` 组件

**fix**

- `FButton` 组件 `blob` 配置项改为 `bold`，用于文字加粗

## 0.0.9-alpha.9 (2022-06-14)

**feat**

- `FLayout` 新增 `direction` 配置项

**fix**

- `FContainer` 组件改名为 `FLayout`

## 0.0.8-alpha.8 (2022-06-12)

**feat**

- 新增 `FTag` 组件
- 新增 `FDivider` 组件
- 新增 `Badge` 组件
- 新增 `FContainer` 组件
- 新增 `FSwitch` 组件
- 新增 `FButton` 组件 `color` 配置项

**fix**

- `FButton` 组件 `link` 属性改为 `href`
- 重构 `FButton` 组件
- 废除 `FButton` 的 `info` 类型
- 废除 `FButton` 的 `border` 属性
- 废除 `FButton` 的 `long` 属性
- 废除 `FLink` 的 `info` 类型
- 废除 `FIcon` 的 `opacity` 属性

## 0.0.7-alpha.7 (2022-06-04)

**feat**

- 新增 `FCard` 组件
- 新增 `FButton` 组件点击的涟漪效果

**fix**

- 修复 `FButton` 组件的圆角度数
- 修复 `FButtonGroup` 类型

## 0.0.6-alpha.6 (2022-05-31)

**fix**

- 修复 `FImage` 组件旋转方向一致的问题
- 修复 `FIcon` 组件预览窗操作点击失效问题，处理点击焦点位置
- 修复 `FIcon`、`FButton` 组件的类型问题
- `FImage` 组件的 `select` 属性改为 `no-select` 用于禁止选择

**feat**

- 新增 `FImage` 组件预览窗图片预加载功能
- 新增 `FImage` 组件预览窗渐入动画效果
- 新增 `FImage` 组件预览窗点击遮罩层隐藏功能，可通过 `modal-close` 配置项来配置
- 新增 `FImage` 组件预览窗图标样式优化了一些细节
- 新增 `FImage` 组件预览图左右按钮切换加入图片长度识别，是否展示效果
- 新增 `FImage` 组件 `show-close-btn` 配置项可配置是否展示预览窗的关闭按钮
- 新增 `FImage` 组件可通过鼠标滚轮放大缩小图片功能
- 新增 `FImage` 组件 `preview-round` 配置项，可配置预览图的圆角

## 0.0.5-alpha.5 (2022-05-27)

- 新增 `FImage` 组件
- 增加新的 `icon`

## 0.0.4-alpha.4 (2022-05-23)

- 新增 `FLink` 组件
- 取消 `FButton` 固定高度
- 废除 `FButton` 组件的 `icon` 和 `iconPosition` 属性
- 新增 `FButton` 组件的 `leftIcon` 和 `rightIcon` 属性

## 0.0.3-alpha.3 (2022-05-18)

- 修复按钮组件一些显示问题的样式
- 删除了一个不显示的 `icon`
- 取消组件默认导出
- 压缩组件代码

## 0.0.2-alpha.2 (2022-05-17)

- 更新配置文件
- 新增打包文件

## 0.0.1-alpha.1 (2022-05-17)

- 新增 `FButton`、`FButtonGroup`、`FIcon` 组件
