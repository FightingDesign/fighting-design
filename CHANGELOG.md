# 更新日志

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.en-US.md)

- 新增 `f-swap` 组件
- 修复 `f-image-preview` 组件预览旋转方向错误的问题

## 0.7.0-beta.2 (2022-10-22)

- 新增 `f-input` 组件

## 0.7.0-beta.1 (2022-10-21)

**重要更新**

- 永久废除 `f-icon` 组件
- 更新所有组件的 `class` 命名规范

**新功能**

- 新增 `f-close-btn` 组件 `icon` 配置项
- 新增 `f-close-btn` 组件 `color` 属性
- 新增 `f-alert` 组件 `beforeIcon` 和 `closeIcon` 插槽
- 新增 `f-alert` 组件 `before-icon` 和 `close-icon` 配置项
- 新增 `f-dialog` 组件 `closeIcon` 插槽
- 新增 `f-dialog` 组件 `close-icon` 配置项
- 新增 `f-drawer` 组件 `closeIcon` 插槽
- 新增 `f-drawer` 组件 `close-icon` 配置项
- 新增 `f-link` 组件 `beforeIcon` `afterIcon` 插槽
- 新增 `f-avatar` 组件 `icon` 插槽
- 新增 `f-avatar` 组件 `icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- 新增 `f-loading` 组件 `icon` 插槽
- 新增 `f-svg-icon` 组件 `icon` 配置项

**其它改动**

- `f-link` 组件 `before-icon` `after-icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-button` 组件 `before-icon` `after-icon` `loading-icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-avatar` 组件 `icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-loading` 组件 `icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-page-header` 组件 `icon-size` 支持 `number` 类型
- `f-page-header` 组件 `icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-rate` 组件 `icon` 改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-toolbar-item` 组件 `icon` 改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-tag` 组件 `before-icon` `after-icon` 改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-breadcrumb` 组件 `separator-icon` 配置项更名为 `separator`
- `f-breadcrumb` 组件 `separator` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-notification` 组件 `close-btn` 参数默认值改为 `null`
- `f-button` 组件 `before-icon` `loading-icon` `after-icon` 配置项改为 `VNode / Component` 类型，默认值修改为 `null`
- `f-sticky-card` 组件插槽名由 `option-left` `option-right` 改为 `optionLeft` `optionRight`
- 更新 `f-message` 组件 `icon` 默认值和可选类型
- 废除 `f-calendar` 组件 `show-footer` 配置项
- 废除 `f-alert` 组件 `icon` 属性
- 废除 `f-avatar` 组件 `load-animation` 配置项

## 0.7.0-alpha.9 (2022-10-19)

- 更新类型入口配置文件

## 0.7.0-alpha.8 (2022-10-19)

- 主要针对打包类型文件做了优化

## 0.7.0-alpha.7 (2022-10-17)

**新功能**

- 新增 `f-svg-icon` 组件
- 新增 `f-close-btn` 组件

**修复**

- 修复 `f-dialog` 组件参数错误问题
- 修复 `f-dialog` 组件样式细节

## 0.7.0-alpha.6 (2022-10-15)

**重点更新**

- `f-mask` 组件现已更名为 `f-popup`
- 针对 `f-popup` `f-drawer` `f-dialog` 弹出相关组件做了进一步优化封装

**修复 Bug**

- 修复 `f-popup` 组件 `z-index` 属性丢失问题
- `f-popup` 组件新增 `mask-background` 和 `mask-opacity` `popup-size` `padding` 配置项

## 0.7.0-alpha.5 (2022-10-13)

**新增**

- 新增 `f-mask` 组件

**新特性**

- `f-drawer` 组件 `with-header` 配置项改为 `showHeader`
- `f-drawer` 组件新增 `showCloseBtn` 配置项
- `f-drawer` 组件新增 `modal-blur` 配置项
- `f-dialog` 组件新增 `modal-blur` 配置项
- `f-dialog` 组件移除 `top` 配置项
- `f-dialog` 组件新增 `show-close-icon` 配置项
- `f-dialog` 组件 `width` `height` 配置项支持 `number` 类型
- `f-dialog` 组件的 `open`、`open-end`、`close`、`close-end` 回调参数由 `emit` 传递改为 `props` 传递
- `f-loading` 组件新增 `icon-color` 属性
- `f-dialog` 组件废除 `height` 组件

**修复 Bug**

- 修复 `message` `f-dialog` `f-switch` 组件 props 校验器的拼写错误

## 0.7.0-alpha.4 (2022-10-11)

- 新增 `f-checkbox` 组件
- 新增 `f-rate` 组件
- 废除 `f-radio-group` 组件 `circle` 配置项
- 修复 `f-radio` 组件 `border` 状态禁用样式细节
- 优化部分组件语义化属性

## 0.7.0-alpha.3 (2022-10-06)

- 更新 `umd` 打包入口
- 优化 `f-icon` 组件样式实现
- `f-link` 组件类名规范优化
- 优化 `f-link` 组件内部实现
- 优化 `f-text` 组件内部实现
- `f-text` 组件 `size` `spacing` `line-height` `text-indent` `padding` `width` 属性支持 `number` 类型参数
- `f-text` 组件 `text-indent` 属性改为 `indent`
- `f-text` 内部导出新类型 `TextDecorationType`

## 0.7.0-alpha.2 (2022-09-29)

- 修复部分组件类型规范问题

## 0.7.0-alpha.1 (2022-09-27)

**fix**

- 修复 `f-button` 组件 `font-color` 默认值
- 修复 `f-button` 组件 `font-size` 默认值

**fest**

- `f-back-top` 组件 `right` `bottom` 配置项支持 `number` 类型
- `f-image` 组件 `round` 配置项支持 `number` 类型
- `f-image` 组件废除 `caption` 和 `caption-color` 配置项
- `f-watermark` 组件 `font-size` 配置项支持 `number` 类型参数
- `f-progress` 组件 `width` `height` 配置项支持 `number` 类型参数
- `f-alert` 组件废除 `fixed-style` 配置项
- `f-alert` 组件 `font-size` 配置项支持 `number` 类型参数
- `f-alert` 组件 `type` 默认值改为 `default`
- `f-alert` 组件 `font-size` 默认值改为 `15px`
- `f-alert` 组件新增 `title-size` 和 `title-color` 属性
- `f-alert` 组件 `overflow` 配置项移除 `ellipsis` 选项
- `f-footer` 组件 `height` `padding` 配置项添加默认值
- `f-header` 组件 `height` `padding` 配置项添加默认值
- `f-main` 组件 `padding` 配置项添加默认值
- `f-toolbar` 组件废除 `fixed-style` 配置项

**perf**

- 优化了组件的 `props` 提示
- 新增类型导出
- 优化 `f-avatar` 组件部分样式的实现，减少代码开销
- 优化 `f-back-top` 组件部分样式的实现，减少代码开销
- 优化 `f-back-top` 组件部分 `props` 默认值
- 优化 `f-badge` 组件样式实现

## 0.6.5-alpha.5 (2022-09-25)

**fest**

- 新增 `sticky-card` 组件
- `f-list` 组件新增 `header` 和 `footer` 插槽
- 优化 `f-button` 组件性能

**fix**

- 修复 `f-calendar` 组件的一些日期显示错误的问题

## 0.6.5-alpha.4 (2022-09-23)

**fix**

- 修复 `f-image-preview` 和 `f-calendar` 组件内容按需引入问题

## 0.6.5-alpha.3 (2022-09-22)

**fest**

- `f-header` 组件新增 `padding` 类型
- `f-header` 组件的 `height` 属性支持 `number` 类型
- `f-footer` 组件新增 `padding` 配置项
- `f-footer` 组件的 `height` 属性支持 `number` 类型
- `f-main` 组件的 `padding` 属性支持 `number` 类型
- `f-aside` 组件的 `width` 属性支持 `number` 类型
- `f-aside` 组件新增 `padding` 配置项

**fix**

- 修复组件 `name` 导致的打包类型报错问题

## 0.6.5-alpha.2 (2022-09-21)

- 新增 `f-calendar` 组件
- `f-text` 组件的 `size` 属性支持 `number` 类型
- 新增组件类型导出

## 0.6.5-alpha.1 (2022-09-16)

- 新增 `f-expand-card` 组件
- 优化 `f-toolbar-item` 和 `f-toolbar` 组件样式细节
- `f-toolbar-item` 新增 `data-key` `icon` `icon-size` 配置项
- `f-toolbar` 新增 `click` 回调参数
- `f-toolbar` 针对于苹果 `Safari` 点击失效做出兼容
- `f-toolbar` 组件废除 `vague` 配置项

## 0.6.4-alpha.10 (2022-09-14)

- 测试修复按需引入

## 0.6.4-alpha.9 (2022-09-14)

- 测试修复按需引入

## 0.6.4-alpha.8 (2022-09-14)

- 测试修复按需引入

## 0.6.4-alpha.7 (2022-09-14)

**fix**

- 修复 `f-button` 组件自定义颜色的 `hover` 和 `disabled` 样式
- 修复 `f-page-header` 组件样式细节
- 修复 `f-button` 组件 `text` 配置项样式细节
- 修复 `f-image` 组件 `width` 属性的一些问题

**fest**

- `f-icon` 组件的 `size` 属性支持 `number` 类型
- `f-button` 组件的 `font-size` 属性支持 `number` 类型
- `f-image` 组件 `rootMargin` `width` `height` 属性支持 `number` 类型
- `f-avatar` 组件 `rootMargin` 属性支持 `number` 类型
- 新增 `f-image-preview` 组件
- `f-image` 组件新增 `click` 回调

**other**

- 废除 `f-page-header` 的 `titleClass` 和 `subtitleClass` 配置项
- `f-lint` 组件 `left-icon` `right-icon` 配置项更名为 `before-icon` `after-icon`
- `f-button` 组件 `left-icon` `right-icon` 配置项更名为 `before-icon` `after-icon`
- `f-tag` 组件 `left-icon` `right-icon` 配置项更名为 `before-icon` `after-icon`
- `f-loading` 组件的 `text-color` `text-size` 配置项更名为 `font-color` `font-size`
- `f-empty` 组件废除 `style-list` 配置项
- 拆分 `f-empty` 组件
- 优化 `f-avatar` 样式细节
- `f-image` 组件废除点击大图预览功能，此功能抽离至 `f-image-preview` 组件
- `f-image` 组件废除属性：`modal-close` `show-close-btn` `preview-list` `preview-show-index` `preview-z-index` `preview-show-option` `preview-round`
- 测试修复按需引入

## 0.6.4-alpha.6 (2022-09-11)

**fest**

- 新增 `f-ripple` 涟漪组件
- 新增 `f-radio` `f-radio-group` 组件

**fix**

- 修复 `f-button` `f-loading` 动画样式问题
- 修复 `f-list-item` 换行高度不自适应的问题

## 0.6.4-alpha.5 (2022-09-06)

- 测试修复副作用组件注册

## 0.6.4-alpha.4 (2022-09-06)

- 测试修复副作用组件注册

## 0.6.4-alpha.3 (2022-09-05)

- 测试修复副作用组件注册

## 0.6.4-alpha.2 (2022-09-05)

- 测试修复副作用组件注册

## 0.6.4-alpha.1 (2022-09-03)

- 修复类型

## 0.6.3-alpha.3 (2022-09-03)

- 修复了部分组件类型
- 修复了按需引入仍然全部打包的问题

## 0.6.3-alpha.2 (2022-09-02)

- 修复的配置文件
- 一件修复在 `vitepress` 的错误

## 0.6.3-alpha.1 (2022-09-02)

- 已修复打包引入相关的问题
- 但是在 `vitepress` 中仍存在问题，在正常项目中可以正常使用

## 0.6.2-alpha.10 (2022-09-02)

- 测试修复打包引入问题

## 0.6.2-alpha.9 (2022-09-02)

- 测试修复打包引入问题

## 0.6.2-alpha.8 (2022-09-02)

- 测试修复打包引入问题

## 0.6.2-alpha.7 (2022-09-02)

- 测试修复打包引入问题

## 0.6.2-alpha.6 (2022-08-31)

- 修复已知的一些引入相关配置问题

## 0.6.2-alpha.5 (2022-08-30)

**fest**

- 新增 `f-loading-bar` 组件
- 新增 `notification` 组件

**fix**

- 修复按钮组件样式
- 更新 `f-card` 组件 `shadow` 参数默认值。现改为 `never`

## 0.6.2-alpha.4 (2022-08-29)

**fest**

- `f-image` 组件新增 `title` 配置项

**fix**

- 修复 `f-card` 组件样式细节
- 修复 `f-skeleton` 的一些样式相关细节

## 0.6.2-alpha.3 (2022-08-28)

- 新增 `f-skeleton` 骨架屏组件
- 优化 `f-button` `f-alert` 组件圆角样式
- 优化 `f-alert` 样式细节
- 优化 `f-alert` 组件 `overflow` 配置项
- 移除 `f-alert` 组件 `overflow` 配置项的 `roll` 可选参数
- 移除 `f-novel-coronavirus` 组件
- 修复 `Load` 图片加载类加载死循环的问题
- 优化 `f-image` 组件加载过程中是撕裂样式

## 0.6.2-alpha.2 (2022-08-20)

- 修复已知打包问题

## 0.6.2-alpha.1 (2022-08-20)

- 修复按钮涟漪效果类
- 修复已知打包问题

## 0.6.1 (2022-08-19)

- 优化 `f-list` 组件
- 修复 `f-card` 组件样式细节
- 更新 `success` 和 `warning` 的色号细节
- 新增 `f-empty` 空状态组件
- 优化按钮自定义颜色配置项的 `hover` 和 `active` 的实现方式
- `f-tooltip` 组件新增 `background` 和 `font-color` 配置项
- 优化图片加载类
- `f-avatar` 增加错误处理插槽，增加错误处理提示信息
- 优化 `f-avatar` 加载细节处理
- `f-avatar` 组件新增 `load-animation` 配置项
- 优化掉 `f-drawer` 部分导致文档打包报错的逻辑
- 增加了 `hooks` 对部分类和函数的参数抽离，性能优化了 `f-image` `f-avatar` `f-button` `f-watermark` 组件
- `f-button` 对于涟漪效果做了单例模式的优化

## 0.6.0-bate.2 (2022-08-11)

- 更新入口文件

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
