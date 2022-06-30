# 更新日志

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.en-US.md)

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
