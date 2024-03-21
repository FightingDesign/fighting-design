# 更新日志

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.en-US.md)

## 0.67.4 (2024-03-21)

- 修复 image 组件参数错误问题

## 0.67.3 (2024-03-05)

- 修复 `f-up-load` 组件配置 `show-list` 之后在特定情况下列表无法清空的问题
- 修复 `f-select` 组件配置 `filter` 绑定值错误的问题

## 0.67.2 (2024-03-01)

- 新增 `f-form-item` 对象深层校验
- 修复 `f-form-item` 对于数据类型参数无法识别报错的问题

## 0.67.1 (2024-01-02)

- 修复 package.json 配置问题

## 0.67.0 (2024-01-02)

- 更新依赖项版本 vue@3.3.0 => vue@3.4.3
- 修复 package.json 配置问题

## 0.66.4 (2023-12-24)

- 新增 `f-select` 组件 `filter` 配置项

## 0.66.3 (2023-12-21)

- 修复 `f-table` 组件 `data` 参数响应式丢失问题

## 0.66.2 (2023-12-20)

- 新增 `f-tabale` 组件 `select` 和 `on-select` 配置项

## 0.66.1 (2023-12-19)

- 修复 `f-pagination` 组件在 `total` 小于 `page-size` 时候显示页码错误的问题
- 修复 `f-pagination` 组件在执行 `on-prev` 和 `on-next` 回调的时候为执行 `on-change` 的问题

## 0.66.0 (2023-12-18)

- 修复 `f-table` 组件对于英文字母的文字不换行样式的问题
- 修复 `f-table` 组件返回类型
- 修复 `f-aside` 组件样式被挤压的问题
- 修复 `f-header` 组件高度无法自动撑开的问题
- 修复 `f-select` 组件选中值的类型判断条件
- 新增 `f-table` 组件 `noData` 插槽

## 0.65.0 (2023-12-12)

- 更新 `f-menu` 组件 `on-menu-item-click` 和 `on-submenu-click` 方法参数接收顺序
- 更新 `f-swap` 组件 `on-change` 方法参数接收顺序
- 修复 `f-calendar` 组件部分回调失效问题
- 修复 `f-date-picker` 选择日期失效问题
- 修复 `f-tooltip` 组件受到布局影响的样式问题

## 0.64.1 (2023-12-01)

- 修复 `f-submenu` 组件折叠动画太慢的问题

## 0.64.0 (2023-10-07)

- 修复 `f-dialog` 样式的详细问题
- 修复 `f-watermark` 可删除问题

## 0.63.1 (2023-08-28)

- 修复 `f-select` 组件多个不会触发滚动到选中元素问题

## 0.63.0 (2023-08-25)

- 优化 `f-dialog` 组件样式
- 新增 `f-select` 组件展开默认滚动到选中元素效果
- 优化 `f-calendar` 组件
- 修复 `f-collapse-animation` 组件宽度过渡失效问题

## 0.62.2 (2023-08-23)

- 修复 `f-collapse-animation` 组件样式细节

## 0.62.1 (2023-08-23)

- 修复 `f-collapse-animation` 组件样式细节

## 0.62.0 (2023-08-23)

- `f-collapse-animation` 组件新增 `width-animation` 配置项

## 0.61.0 (2023-08-15)

- 优化 `f-drawer` `f-dialog` 组件样式
- 优化 `f-radio` 和 `f-checkbox` 样式细节
- 重构 `f-tree` 组件
- 新增 `f-confirm-box` 组件

## 0.60.0 (2023-08-04)

- 优化 `f-radio` 组件样式
- 废除 `f-tabs-pane` 组件
- 新增 `f-tabs-item` 组件
- 新增 `f-switch` 组件 `loading` 配置项
- 废除 `f-tabs` 组件 `edit-status` `on-edit` 配置项
- 废除 `f-infinite-scrolling` 组件 `on-scroll-when` 配置项
- 废除 `f-infinite-scrolling` 组件 `styles` 配置项
- 废除 `f-infinite-scrolling` 组件 `loading` 配置项
- 重构 `f-infinite-scrolling` 组件
- 重构 `f-tabs` 组件
- 废除 `f-infinite-scrolling` 组件 `on-scroll-end` 参数类型修改
- 修复 `f-textarea`、`f-input`、`f-dialog`、`f-drawer`、`f-date-picker`、`f-image-preview`、`f-input-number`、`f-pagination`、`f-radio-group`、`f-swap`、`f-select`、`f-switch`、`f-time-pick`、`f-up-load`、`f-rate` 组件在双向绑定空值时的警告问题

## 0.52.0 (2023-07-14)

- 新增 `f-avatar-group` 组件

## 0.51.0 (2023-06-26)

- 重构 `f-input` 组件样式
- 废除 `f-input` 组件 `background`、`active-background` 、`active-border-color` 配置项
- 重构 `f-textarea` 组件样式

## 0.50.1 (2023-06-21)

**修复**

- 修复 `defineModel` 类型错误问题
- 修复组件内部警告或错误信息不提示问题
- 修复 `f-back-top` 传递错误参数报错问题
- 修复 `f-pagination` 组件切换每页大小失效问题
- 修复 `f-pagination` 组件 round 对于切换按钮失效问题

**改动**

- 组件 `f-pagination` 参数 `page-sizes` 改为 `page-select`

## 0.50.0 (2023-06-20)

**新增**

- 新增 `f-select` 箭头样式
- 新增 `f-trigger` 组件 `width` 配置项
- 新增 `f-dropdown` 组件 `width` 配置项

**修复**

- 修复 `f-form-item` 组件 name 错误导致的报错

**其它**

- 优化 `f-space` 组件样式细节
- 优化 emit 实现方式
- `f-select` 组件 `width` 默认值改为 190

## 0.44.0 (2023-06-18)

- 修改 `f-tag` 关闭逻辑，从内部状态改为数据启动
- 新增 `f-tag` 组件 `on-click` 配置项

## 0.43.3 (2023-06-18)

- 修复 `f-dialog` 样式问题

## 0.43.2 (2023-06-18)

- 优化 `f-badge` `f-tag` `f-toolbar` `f-table` 组件样式细节

## 0.43.1 (2023-06-16)

- 修复 `f-dialog` 组件样式细节

## 0.42.0 (2023-06-16)

**修复**

- 修复 `f-notification` 动画失效问题
- 修复 `f-input` 组件 type 响应式丢失问题
- 修复 `f-up-load` 继续多选重置之前文件的问题
- 修复 `f-collapse-animation` 组件初始展开关闭时动画失效的问题

**优化**

- 优化 `f-message` 组件样式细节
- 优化 `f-notification` 组件样式细节
- 优化 `f-text` 组件样式细节

**废除**

- 废除 `f-dialog` height 配置项
- 废除 `f-drawer` size 配置项
- 废除 `f-popup` 组件
- 重构 `f-dialog` `f-drawer` 组件

**新增**

- 新增 `f-dialog` 组件 `mask-background` `mask-opacity` `show-header` 配置项
- 新增 `f-drawer` 组件 `mask-background` `mask-opacity` `show-header` 配置项

## 0.41.0 (2023-06-04)

**修复**

- 修复 `f-popup` 层级问题
- 修复 `f-calender` 回到当前时间错误的问题
- 修复 `f-dialog` 头部样式问题
- 修复 `f-time-picker` 组件样式问题

**其它**

- `f-calender` 组件废除 `CalendarChangeParams` 类型
- `f-calender` 组件新增 `on-change` 回调

## 0.40.4 (2023-06-04)

**修复**

- 修复 `f-button` 组件部分参数响应式丢失问题
- 修复 `f-drawer` 组件内容部分超出不显示滚动条问题
- 修复 `f-popup` 组件内容部分超出不显示滚动条问题

**其它**

- `f-popup` 组件 `z-index` 配置项默认值改为 null

## 0.40.3 (2023-05-22)

- 修复 `f-avatar` 组件意外的边距展示问题

## 0.40.2 (2023-05-20)

**新增**

- `f-collapse-animation` 组件新增 `width-animation` `animation-time` `on-open` `on-close` `on-open-end` `on-close-end` 配置项

## 0.40.1 (2023-05-19)

**更新**

- `f-textarea` 组件新增 `on-enter` 配置项
- `f-textarea` 组件按下 Enter 不会触发换行，改为 Ctrl + Enter 换行

**修复**

- 修复 `f-textarea` 组件 `close` 按钮样式错误问题

## 0.40.0 (2023-05-19)

**更新**

- `f-input` 组件 `autocomplete` 配置项默认值改为 off
- `f-textarea` 组件新增 `auto-height` 配置项

**修复**

- 修复 `f-input` 组件 `on-enter` 类型

## 0.39.0 (2023-05-18)

- 修复 `f-option` 关闭报错问题
- 修复 `f-time-pick` 关闭报错问题
- 修复 `f-main` 组件名错误问题
- 修复 `f-ripple` 组件名错误问题
- 修复 `f-option` 点击报错问题

## 0.38.0 (2023-05-11)

**修复**

- 修复 `f-form` 类型错误
- 修复 `f-skeleton` 组件样式
- 修复 `f-trigger` 组件触发时间错误的问题

## 0.37.0 (2023-05-10)

**更新**

- `f-skeleton` 组件样式细节优化
- `f-skeleton` 组件新增 `row-gap` 和 `difference` 配置项
- `f-form` 组件 `on-submit` 回调参数类型修改，由一个对象类型，改为四个参数类型
- `f-form-item` 组件新增 `validator` 校验方法
- 新增部分 `hooks` 封装

**修复**

- 修复 `f-form` 组件没有传递 rules 和 name 也触发表单校验的问题
- 修复点击 `f-trigger` 内容部分也会关闭的问题

## 0.36.1 (2023-05-08)

- 修复 `f-dialog` 样式问题
- `f-form` 新增 `submit` 和 `validate` 方法

## 0.36.0 (2023-05-08)

**优化**

- 优化 `f-trigger` 和 `f-dropdown` 样式细节
- 优化部分组件类型
- 优化部分 hooks 参数

**修复**

- 修复 `f-trigger` 组件 hover 状态移出内容立即隐藏的问题
- 修复 `f-back-top` 组件添加事件监听组件卸载未移除的问题

## 0.35.0 (2023-05-07)

**优化**

- 优化 `f-input` 和 `f-textarea` 样式细节

**新增**

- `f-input` 和 `f-textarea` 组件新增 `font-size` 配置项
- `f-dialog` 组件新增 `height` 配置项
- `f-popup` 组件新增 `fullscreen` 配置项

**修复**

- 修复 `f-radio` 组件样式问题
- 修复 `f-checkbox` 组件样式问题
- 废除 `f-checkbox` 组件 `indeterminate` 配置项
- 修复 `f-trigger` 组件层级关系和缩放位置显示错误问题

## 0.34.0 (2023-05-05)

**修复**

- 修复 `f-avatar` `f-image` 组件绑定动态 src 图片不变化的问题
- 修复 `f-avatar` `f-image` 组件对齐样式问题
- 修复 `f-dialog` `f-popup` 类型错误

**新增**

- 新增 `f-count-down` 倒计时组件

**更改**

- `f-dialog` 宽高样式修改
- `f-up-load` 组件 `show-list` 默认值改为 false

## 0.33.2 (2023-05-01)

- 修复 `f-avatar` 组件 `round` 对于 `text` 失效问题

## 0.33.1 (2023-04-27)

- `f-form` 组件新增 `label-position` 配置项
- 优化 `f-form` 样式细节

## 0.33.0 (2023-04-25)

- 废除 `f-table` 组件 `optional` 配置项
- `f-table` 组件类型优化
- 优化 `f-input` `f-textarea` 组件实现

**Fix**

- 修复 `f-tooltip` 组件部分情况 `disabled` 无效
- 修复 utils `isFunction` 方法，解决部分组件对于 `async` 函数失效问题

## 0.32.0 (2023-04-12)

- 修复 `FMessage` 不同弹出位置错误的问题
- 修复 `FMessage` 多弹出偏移量错误问题

## 0.31.1 (2023-04-10)

- 修复 `FMessage` 不同弹出位置错误的问题

## 0.31.0 (2023-04-10)

- `FNotification` 组件 type 默认值改为 null
- `FNotification` 组件 duration 默认值改为 2500
- `FNotification` 组件废除 close Events
- `FNotification` 组件样式优化
- `FMessage` 组件 duration 默认值改为 2500
- `FMessage` 组件废除 close Events
- `FMessage` 和 `FNotification` 添加 `on-close` 回调参数类型
- `f-sticky-card` 组件样式细节优化

## 0.30.0 (2023-04-01)

- 修复 message 组件导出类型

## 0.28.2 (2023-04-01)

- 修复全局类型错误

## 0.28.1 (2023-04-01)

- `f-progress` 组件新增 `start` 配置项
- 优化类型配置文件，修复打包目录结构

## 0.28.0 (2023-03-21)

- `f-image` 组件 `no-select` 配置项改为 `select`
- 优化 `f-image` 和 `f-avatar` 组件
- `f-radio` 组件废除 `border` 配置项
- `f-radio` 组件新增 `background` 配置项
- `f-radio` 组件样式重构

## 0.27.2 (2023-03-13)

**修复**

- 修复 `f-pagination` 切换也码数显示错误的问题

## 0.27.1 (2023-03-10)

**新增**

- `f-input` 组件新增 `width` 和 `height` 配置项
- `f-input` 组件兼容全局配置

**优化**

- 优化 `f-textarea` 样式细节

**其它**

- `f-textarea` 组件 `resize` 配置项默认值改为 null

## 0.27.0 (2023-03-08)

**修复**

- 修复 `f-select` 组件 width 失效问题
- 修复 `f-box` 组件样式问题
- 修复 `f-table` 组件样式参数失效问题
- 修复 `f-pagination` 组件下拉菜单选择失效问题
- 修复 `f-pagination` 点击错位的问题
- 修复 `f-pagination` 样式问题

**优化**

- 优化 `f-toolbar` 组件回调参数和类型
- 优化 `f-input` 组件回调参数和类型
- 优化 `f-pagination` 组件样式细节

**新增**

- `f-select` 组件新增 `on-change` 配置项

## 0.26.2 (2023-03-01)

**修复**

- 修复 `f-slider` 组件偏移量错误的问题

**其它**

- `f-select` 组件新增 `size` 配置项
- 优化 `f-pagination` 组件

## 0.26.1 (2023-02-28)

**修复**

- 修复 `f-slider` 组件偏移量错误的问题

**其它**

- 优化 `f-expand-card` 组件细节
- `f-expand-card` 组件新增 `on-change` 配置项

## 0.26.0 (2023-02-24)

- 优化 `f-back-top` 组件实现
- `f-menu` 组件新增 `on-menu-item-click` `on-submenu-click` 配置项
- 修复 `f-menu` 组件折叠问题
- 重构 `f-collapse-animation` 组件

## 0.25.1 (2023-02-21)

- 修复 `f-submenu` 组件类名问题

## 0.25.0 (2023-02-21)

- 优化 `f-image-preview` 组件弹出动画效果
- `f-image-preview` 组件新增 `append-to-body` 配置项
- 完善全部组件 ts 类型注释
- `f-expand-card` 组件新增 `vertical` 配置项

## 0.24.0 (2023-02-17)

- `f-progress` 组件 `type` 新增 `info` 和 `default` 配置项
- `f-swap` 组件 `type` 废除 `default` 配置项
- `f-link` 组件 `state` 配置项的 `bag` 可选值改为 `background`
- `f-link` 组件废除 `beforeIcon` 和 `afterIcon` 插槽
- `f-divider` 组件新增 `height` 配置项，优化部分参数配置

## 0.23.1 (2023-02-16)

- 优化部分 ts 类型错误
- 添加部分浏览器兼容适配
- 优化部分 utils 方法的严格性

## 0.23.0 (2023-02-15)

- `f-badge` 组件优化细节
- `f-slider` 组件废除 `range` 配置项
- `f-slider` 组件新增 `background` `active-color` `width` 配置项
- `f-card` 组件新增 `border-color` `background` `title-color` `title-bold` `close` `on-close` 配置项
- `f-input` 组件新增 `autocomplete` 配置项
- `f-input` 组件新增 `before` 插槽
- `f-date-picker` 组件新增 `placeholder` `add-zero` 配置项
- 修复 `f-date-picker` 清空时的警告提示

## 0.22.1 (2023-02-07)

- `f-calendar` 组件废除 `memorandum` 配置项
- 优化 `f-calendar` 组件农历描述的优先级展示状态
- 大幅度优化内部代码实现

## 0.22.0 (2023-02-03)

- `f-button` `f-alert` `f-badge` `f-tag` 组件新增 type 为 info 可选项
- `f-alert` 组件样式微调
- `f-aside` 组件新增 `background` 配置项
- `f-input` 样式微调
- `f-input` 组件新增 `background` `text-color` `active-background` `active-border-color` 配置项

## 0.21.0 (2023-02-01)

- `f-badge` 组件 type 新增 default 配置项
- `f-badge` 组件 `color` 配置项改为 `background`
- `f-badge` 组件 `font-color` 配置项改为 `color`
- 所有组件样式优化

## 0.20.3 (2023-01-31)

- 针对 `f-button` 组件样式做了较大优化，内部样式实现优化

## 0.20.2 (2023-01-30)

- 修复 `f-switch` 在 `f-fighting-global` 下失效问题

## 0.20.1 (2023-01-29)

- 修复 `FNotification` 组件名错误的问题
- 优化 `FMessage` 和 `FNotification` 组件公共方法

## 0.20.0 (2023-01-17)

- 优化 `f-space` 样式细节
- 修复 `f-tabs` 一些已知问题
- 废除 `f-progress` 组件 `width`、`square` `linear` `text-inside` 配置项
- 新增 `f-progress` 组件 `outside-text` 配置项

## 0.19.2 (2023-01-16)

- 优化 `f-image` 和 `f-avatar` 组件类型
- 优化 `f-up-load` 回调类型
- 完善更多组件的 `role`

## 0.19.1 (2023-01-13)

- 优化 `f-dropdown-item` 样式细节
- 优化 `f-trigger` 关闭展示细节处理

## 0.19.0 (2023-01-12)

**优化**

- 优化 `f-tag` 样式细节
- 优化 `f-button` 样式细节
- 优化 `f-alert` 样式细节

**修复**

- 修复 `f-ripple` 组件响应式失效问题
- 修复 `f-text` 组件响应式失效问题
- 修复 `f-button` 涟漪失效问题

## 0.18.0 (2023-01-12)

**修复**

- 修复 `f-tree` 类型问题

## 0.17.3 (2023-01-11)

**修复**

- 修复 `f-button` 在 icon 状态下导致的意外边距问题
- 修复 `f-input-number` 组件 size 失效问题

**新增**

- 新增 `f-input-number` 组件 `button-type` 配置项

## 0.17.2 (2023-01-11)

**修复**

- 修复 `f-alert` 滚动失效问题

## 0.17.1 (2023-01-10)

**修复**

- 修复 `f-alert` `f-link` `f-ripple` `f-tag` `f-text` 响应式失效问题
- 修复 `f-number-animate` 返回 NaN 的问题

## 0.17.0 (2023-01-09)

**优化**

- 优化部分组件 css
- 针对 `f-tabs` 组件做了较大优化
- 优化 `f-tabs` 样式

**打包**

- 优化了 css 打包，加入 postcss 配置项

## 0.16.0 (2023-01-05)

**修复**

- 修复 `f-input` 在黑暗模式下不显示 `placeholder` 的问题 [issues#330](https://github.com/FightingDesign/fighting-design/issues/330)
- 修复 `f-ripple` 组件在全局配置下 `type` 失效问题
- 修复全局配置组件响应式丢失问题

**新增**

- 新增 `f-input` 组件 `placeholder-color` 配置项
- 新增 `f-calendar` 组件国际化配置
- 新增 `f-page-header` 组件国际化配置

**其它改动**

- `f-avatar` 组件 `font-size` 默认值改为 null
- `f-avatar` 组件 `font-color` 默认值改为 null
- `f-calendar` 组件 `border-color` 默认值改为 null
- `f-calendar` 组件 `day-cell-height` 默认值改为 null
- `f-calendar` 组件 `week-cell-height` 默认值改为 null
- `f-page-header` 组件 `back-text` 默认值改为 null
- 废除 `f-sticky-card` 组件 `background` 配置项

## 0.15.0 (2023-01-03)

**修复**

- 修复 `f-alert` 组件 `center` 失效问题

**新增**

- 新增 `f-infinite-scrolling` 组件
- 新增 `f-number-animate` 组件

## 0.14.0 (2022-12-30)

**新增**

- 新增 `f-alert` 组件 `alert-list` 配置项

**优化**

- 废除 `f-alert` 组件 `overflow` 配置项
- 优化 `f-popup` 组件弹出状态针对滚动条的处理
- 优化 `f-dialog` `f-drawer` 组件样式细节

**修复**

- 修复 `f-checkbox` 组件 `border` 状态样式问题
- 修复 `f-input-number` 警告错误

## 0.13.2 (2022-12-29)

- 修复 `f-ripple` 组件失效问题

## 0.13.1 (2022-12-29)

**修复**

- 修复 `f-svg-icon` 类型
- 修复 `f-rate` 类型
- 修复 `f-calendar` 组件样式问题 [#315](https://github.com/FightingDesign/fighting-design/pull/315)

## 0.13.0 (2022-12-28)

**新功能**

- 新增 `f-box` 组件
- 完善 `f-tree` 组件

**修复**

- 修复 `f-button` 组件涟漪效果报错问题

## 0.12.0 (2022-12-20)

**新功能**

- 新增 `f-form` 组件
- 新增 `f-form-item` 组件

**修复**

- 修复 `f-space` 组件样式细节
- 修复 `f-back-top` 组件 `z-index` 失效问题

**其它更新**

- 废除 `loading-bar` 组件
- 优化 `f-input` 组件类型

## 0.11.2 (2022-12-15)

**新增**

- 新增 `f-button` 组件 `spread` 配置项

**修复**

- 修复 `f-image-preview` 的警告错误
- 修复 `f-button` 组件样式细节
- 修复 `f-tag` 组件样式细节
- 修复 `f-space` 组件样式细节

**其它改动**

- `f-space` 组件废除 `wrap` 配置项
- `f-space` 组件新增 `nowrap` 配置项
- `f-space` 组件 `row-gap` `column-gap` 配置项支持 `number` 类型

## 0.11.1 (2022-12-13)

- 修复 `f-tag` 组件 `size` 失效问题 [issues#309](https://github.com/FightingDesign/fighting-design/issues/309)
- 修复一些细节类型问题
- 优化 `f-image` 和 `f-avatar` 组件加载过程中的样式处理优化

## 0.11.0 (2022-12-13)

**新功能**

- `f-fighting-global` 组件新增 `lang` 配置项
- `f-toolbar` 组件 `width` 和 `height` 配置项支持 `number` 类型

**其它更新**

- 修复了全局组件的类型

## 0.10.0 (2022-12-11)

**修复**

- 修复 `f-list` 和 `f-list-item` 组件 bug
- 修复 `f-trigger` 组件禁用效果失效问题

**新增**

- 新增 `f-fighting-global` 组件
- 新增 `f-list` 组件 `zebra-color` 配置项
- 新增 `f-list` 组件 `size` 配置项新增 `mini` 可选项

**其它更新**

- `f-button` 组件样式细节优化
- `f-sticky-card` 组件移除 `open-height` 配置项
- `f-rate` 组件 `size` 配置项默认值改为 25

## 0.9.0 (2022-12-07)

- 完善 `f-menu` 组件
- 优化部分组件 `role` 属性
- 优化 `f-svg-icon` 组件样式细节

## 0.9.0-alpha.8 (2022-12-06)

**新功能**

- 新增 `f-slider` 组件

**优化项**

- 优化 `f-toolbar` 组件点击相关逻辑
- 优化 `f-pagination` 组件样式实现
- 优化 `f-tag` 组件内部逻辑
- 优化 `f-button` 组件实现
- 优化 `f-ripple` 组件实现
- 废除 `f-ripple` 组件 `no-select` 配置项

**其它改动**

- `f-card` 组件 `padding` 配置项默认值修改
- `f-card` 组件 `shadow` 配置项可选参数修改
- `f-pagination` 组件 `prev-click` 配置项改为 `on-prev`
- `f-pagination` 组件 `next-click` 配置项改为 `on-next`
- `f-pagination` 组件 `change` 配置项改为 `on-change`
- `f-tooltip` 组件 `content` 配置项支持 `number` 类型
- `f-breadcrumb` 和 `f-breadcrumb-item` 组件参数进行了部分改动
- 全局导出类型较大幅度改动，详情参考文档组件导出类型

## 0.9.0-alpha.7 (2022-12-01)

**新增**

- 新增 `f-breadcrumb-item` 组件 `to` 配置项
- 完善更多 `f-menu` 组件功能

**优化**

- 优化 `f-switch` 细节样式和性能
- 优化 `f-button` 样式处理逻辑
- 优化 `f-dropdown-item` 样式细节
- 优化 `f-option` 样式细节
- 优化 `f-select` 样式细节

**改动**

- `f-link` 组件 `prohibit` 配置项改为 `disabled`
- `f-switch` 组件 `open-color` 改为 `active-color`
- `f-switch` 组件 `open-text` 改为 `active-text`

## 0.9.0-alpha.6 (2022-11-29)

**新功能**

- 新增 `f-menu` 组件
- 新增 `f-menu-item` 组件
- 新增 `f-menu-item-group` 组件
- 新增 `f-submenu` 组件
- 新增 `f-collapse-animation` 组件
- 新增 `f-button-group` 组件 `direction` 配置项

**修复**

- 修复 `f-pagination` 组件细节问题
- 修复 `f-button` 组件样式细节

**其它改动**

- 废除 `f-button-group` 组件 `vertical` 配置项
- 优化 `f-sticky-card` 组件

## 0.9.0-alpha.5 (2022-11-25)

**新功能**

- 新增 `f-trigger` 组件

**其它更新**

- 优化 `f-space` 组件样式细节
- `f-sticky-card` 组件 `open-end` `close-end` 回调参数改为 `on-open` `on-close`

## 0.9.0-alpha.4 (2022-11-23)

**新功能**

- 新增 `f-date-picker` 组件
- 新增 `f-time-picker` 组件
- 新增 `f-input-number` 组件
- 新增 `f-input` 组件 `type` 属性 `number` 类型
- 新增 `f-input` 组件 `after-icon` 配置项
- 新增 `f-input` 组件 `on-input` 配置项
- 新增 `f-input` 组件 `after` 插槽
- 新增 `f-textarea` 组件 `on-input` 配置项
- 新增 `f-input` 组件加入查看密码切换动画效果
- 新增 `f-breadcrumb-item` 组件 `color` `icon-color` `separator` 配置项
- 新增 `f-tag` 组件关闭动画
- 新增 `f-card` 组件 padding 实现 number 类型参数

**修复 Bug**

- 修复 `f-input` 组件 `on-change` 回调错误的问题
- 修复 `f-textarea` 组件 `on-change` 回调错误的问题
- 修复 `f-list-item` 单独使用报错的问题

**其它更新**

- 优化 `f-input` 组件查看密码方式
- 优化 `f-dropdown` 组件样式细节
- 优化 `f-alert` 组件样式细节
- 优化 `f-back-top` 组件样式细节
- 重构 `f-calendar` 组件头部样式
- 重构 `f-calendar` 组件内部细节
- 重构 `f-tag` 组件内部细节
- 废除 `f-list` 组件 `list-style` 配置项
- 重构 `f-skeleton` 组件 `size` 配置项
- 废除 `f-skeleton` 组件 `circled` 配置项
- 废除 `f-close-btn` 组件 `no-hover` 配置项
- `f-breadcrumb` 组件 `separator-color` 参数改为 `icon-color`
- `f-breadcrumb` 组件 `item-color` 参数改为 `color`
- `f-skeleton` 组件 `rounded` 参数改为 `round`
- `f-back-top` 组件 `bottom` `right` `background` `color` 参数默认值更新
- `f-toolbar-item` 组件 `click` 参数改为 `on-click`
- `f-toolbar-item` 组件 `data-key` 参数改为 `index`
- `f-toolbar-item` 组件 `icon-size` 参数改为默认值 16
- `f-toolbar` 组件 `click` 参数改为 `on-click`
- `f-image-preview` 组件 `close` 回调改为 `on-close`
- `f-alert` 组件 `close-end` 回调改为 `on-close`
- `f-button` 组件 `click` 回调改为 `on-click`
- `f-avatar` 组件 `load` `error` 回调改为 `on-load` `on-error`
- `f-image` 组件 `load` `error` 回调改为 `on-load` `on-error`
- `f-calendar` 组件 `change-switch` `change-date` 回调改为 `on-change-month` `on-change-date`
- `f-card` 组件 `padding` 参数改为默认值为 20
- `f-checkbox` 组件 `change` 参数改为 `on-change`
- `f-checkbox-group` 组件 `change` 参数改为 `on-change`
- `f-close-btn` 组件 `click` 参数改为 `on-click`
- `f-dialog` 组件 `open` `open-end` `close` `close-end` 改为 `on-open` `on-open-end` `on-close` `on-close-end`
- `f-drawer` 组件 `open` `open-end` `close` `close-end` 改为 `on-open` `on-open-end` `on-close` `on-close-end`
- `f-popup` 组件 `open` `open-end` `close` `close-end` 改为 `on-open` `on-open-end` `on-close` `on-close-end`
- `f-dropdown-item` 组件 `click` 参数改为 `on-click`
- `f-link` 组件 `click` 参数改为 `on-click`
- `f-message` 组件 `close-end` 参数改为 `on-close`
- `f-notification` 组件 `close-end` 参数改为 `on-close`
- `f-page-header` 组件 `back` 参数改为 `on-back`
- `f-radio` 组件 `change` 参数改为 `on-change`
- `f-radio-group` 组件 `change` 参数改为 `on-change`
- `f-svg-icon` 组件 `click` 参数改为 `on-click`
- `f-switch` 组件 `change` 参数改为 `on-change`
- `f-tag` 组件 `close-end` 参数改为 `on-close`
- `f-up-load` 组件 `change` `load` 参数改为 `on-change` `on-load`

## 0.9.0-alpha.3 (2022-11-18)

- 更新类型配置文件
- 修复 `f-checkbox-group` 类型错误

## 0.9.0-alpha.2 (2022-11-18)

**修复 Bug**

- 修复 `f-swap` 组件样式细节
- 修复 `f-empty` 组件样式细节
- 修复 `f-pagination` 组件样式细节
- 修复 `f-up-load` 组件样式细节
- 修复 `f-switch` 组件样式细节
- 修复 `f-card` 组件样式细节
- 修复 `f-textarea` 组件样式细节
- 修复 `f-checkbox-group` 类型错误
- 更新类型配置文件

## 0.9.0-alpha.1 (2022-11-17)

**新功能**

- 新增 `f-checkbox` 组件 `indeterminate` 配置项
- 新增 `f-textarea` 组件
- 新增 `f-pagination` 组件
- 新增 `f-tabs` 组件
- 重构 `loading` 组件
- `f-empty` 组件 `content-size` 配置项支持 `number` 类型
- `f-empty` 组件新增 `icon-size` 配置项

**修复**

- 修复 `f-select` 组件在存在绑定值之后不显示 `label` 的问题
- 修复 `f-radio-group` 组件样式细节
- 修复 `f-text` 组件样式细节
- 修复 `f-button` 组件样式细节

**其它**

- `f-switch` 组件 `size` 配置项新增 `mini` 可选择
- `f-switch` 组件新增 `icon-size` 配置项
- 优化全局组件部分参数默认值

## 0.8.1-alpha.4 (2022-11-13)

- 新增 `f-back-top` 组件显示隐藏的动画样式
- 新增 `f-alert` 组件显示隐藏的动画样式
- 优化 `f-popup` 弹出动画样式
- 优化 `f-dropdown` 弹出动画样式

## 0.8.1-alpha.3 (2022-11-11)

**新增**

- 新增 `f-dropdown` 组件
- 新增 `f-dropdown-item` 组件
- 新增 `f-option` 组件
- 新增 `f-select` 组件
- 新增 `f-table` 组件 `show-head` 配置项

**修复**

- 修复　`f-button` 组件样式细节
- 修复　`f-drawer` 和 `f-dialog` 组件回调参数失效问题

## 0.8.1-alpha.2 (2022-11-08)

**修复**

- 修复 `f-button` 组件自定义颜色的样式细节
- 修复 `f-table` 组件样式细节

## 0.8.1-alpha.1 (2022-11-08)

**新特性**

- `f-checkbox` 组件新增 `show-label` 配置项
- `f-checkbox` 组件 `modelValue` 配置项新增 `array` 类型
- 新增 `f-table` 组件

**其它**

- 优化了些 `f-button` 组件的样式细节
- 优化 `f-toolbar` 组件的一些内部实现和类型

## 0.8.0-alpha.6 (2022-11-06)

**修复 Bug**

- 修复 `f-image-preview` 图片预览组件操作栏点击失效的问题
- 优化部分组件类型

## 0.8.0-alpha.5 (2022-11-04)

- 对于 ts 类型方面，做了进一步的优化
- 新增 `f-up-load` 组件

## 0.8.0-alpha.4 (2022-11-02)

- 主要针对目录结构进行了规范处理
- 优化一些类型文件的位置

## 0.8.0-alpha.3 (2022-11-01)

**修复 Bug**

- 修复 `FMessage` `FNotification` 组件的报错问题
- 修复 `f-radio` `f-radio-group` 组件禁用状态的样式问题
- 修复 `f-checkbox` `f-checkbox-group` 组件禁用状态的样式问题
- 修复 `f-alert` 关闭按钮样式细节
- 修复 `f-tag` 关闭按钮样式细节

**改进优化**

- `f-image` `f-avatar` 组件废除 `error` 和 `load` emit 回调，新增 `error` 和 `load` props 可选项
- `f-calendar` 组件废除 `change-date` 和 `change-switch` emit 回调，新增 `change-date` 和 `change-switch` props 可选项
- `f-alert` 组件废除 `close-end` emit 回调，新增 `close-end` props 可选项
- `f-tag` 组件废除 `close-end` emit 回调，新增 `close-end` props 可选项
- `f-page-header` 组件废除 `back` emit 回调，新增 `back` props 可选项
- `f-rate` 组件废除 `change` emit 回调，新增 `change` props 可选项
- `f-checkbox-group` 组件废除 `change` emit 回调，新增 `change` props 可选项
- `f-link` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-button` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-toolbar` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-toolbar-item` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-switch` 组件废除 `change` emit 回调，新增 `change` props 可选项
- `f-close-btn` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-loading` 组件废除 `close` emit 回调，新增 `close-end` props 可选项
- `f-svg-icon` 组件废除 `click` emit 回调，新增 `click` props 可选项
- `f-radio` 组件废除 `change` emit 回调，新增 `change` props 可选项
- `f-radio-group` 组件废除 `change` emit 回调，新增 `change` props 可选项
- `f-radio` 组件在边框状态下样式做了改变
- `f-close-btn` 新增 `no-hover` 配置项

## 0.8.0-alpha.2 (2022-10-28)

- 修复按需导入组件类型的问题 [#232](https://github.com/FightingDesign/fighting-design/pull/232)

## 0.8.0-alpha.1 (2022-10-28)

- 修复一些类型的问题
- 优化组件代码属性提示
- 优化构建产物
- 优化 `f-image-preview` 组件样式细节 [#227](https://github.com/FightingDesign/fighting-design/pull/227)

## 0.7.1-alpha.2 (2022-10-26)

- 优化组件打包后的类型

## 0.7.1-alpha.1 (2022-10-25)

- 新增 `f-swap` 组件
- 修复 `f-image-preview` 组件预览旋转方向错误的问题
- 优化 `f-image-preview` 组件内部性能
- `f-popup` 组件 `open` `open-end` `close` `close-end` 改为 `props` 参数

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

- `f-progress` 组件新增 `textInside` 配置项
- 新增 `f-novel-coronavirus` 组件
- 新增 `cjs` 和 `umd` 打包模式

## 0.3.2-bate.5 (2022-07-17)

**feat**

- `f-tooltip` 组件移除部分配置项
- 重做 `f-tooltip` 组件

**fix**

- 修复 `f-tag` 组件不展示的问题
- 修复 `f-alert` 组件的展示状态和关闭回调

## 0.3.1-bate.4 (2022-07-15)

- `f-link` 组件新增 `default` 配置 `type`
- `f-button` 组件 `ripples` 默认值改为 `false`

## 0.3.0-bate.3 (2022-07-13)

**feat**

- 新增 `f-progress` 组件配置项
- 新增 `f-alert` 组件

**fix**

- 修复 `f-progress` 组件百分百展示状态
- 修复 `f-text` 组件样式细节
- 修复 `f-button` 组件样式细节
- 修改 `f-button` 组件文字按钮的样式
- 移除 `f-tag` 组件 `info` 属性，改为 `default`

## 0.2.0-bate.2 (2022-07-08)

**feat**

- 新增 `f-drawer` 组件
- 新增 `f-page-header` 组件

**fix**

- 修复 `f-tag` 基础样式
- 修复 `f-switch` 基础样式

## 0.1.0-bate.1 (2022-07-05)

**feat**

- 新增 `dialog` 组件
- 新增 `space` 组件
- 新增 `progress` 组件
- 新增 `captcha` 组件 （bate）
- 新增 `tooltip` 组件 （bate）

**fix**

- 修复 `f-back-top` 组件的监听目标报错问题

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

- 新增 `f-text` 组件
- 新增 `f-avatar` 组件
- 新增 `f-loading` 组件

**fix**

- `f-button` 组件 `blob` 配置项改为 `bold`，用于文字加粗

## 0.0.9-alpha.9 (2022-06-14)

**feat**

- `f-layout` 新增 `direction` 配置项

**fix**

- `f-container` 组件改名为 `f-layout`

## 0.0.8-alpha.8 (2022-06-12)

**feat**

- 新增 `f-tag` 组件
- 新增 `f-divider` 组件
- 新增 `f-badge` 组件
- 新增 `f-container` 组件
- 新增 `f-switch` 组件
- 新增 `f-button` 组件 `color` 配置项

**fix**

- `f-button` 组件 `f-link` 属性改为 `href`
- 重构 `f-button` 组件
- 废除 `f-button` 的 `info` 类型
- 废除 `f-button` 的 `border` 属性
- 废除 `f-button` 的 `long` 属性
- 废除 `f-ink` 的 `info` 类型
- 废除 `f-con` 的 `opacity` 属性

## 0.0.7-alpha.7 (2022-06-04)

**feat**

- 新增 `FCard` 组件
- 新增 `f-button` 组件点击的涟漪效果

**fix**

- 修复 `f-button` 组件的圆角度数
- 修复 `f-button-group` 类型

## 0.0.6-alpha.6 (2022-05-31)

**fix**

- 修复 `f-mage` 组件旋转方向一致的问题
- 修复 `f-con` 组件预览窗操作点击失效问题，处理点击焦点位置
- 修复 `f-con`、`f-button` 组件的类型问题
- `f-mage` 组件的 `select` 属性改为 `no-select` 用于禁止选择

**feat**

- 新增 `f-mage` 组件预览窗图片预加载功能
- 新增 `f-mage` 组件预览窗渐入动画效果
- 新增 `f-mage` 组件预览窗点击遮罩层隐藏功能，可通过 `modal-close` 配置项来配置
- 新增 `f-mage` 组件预览窗图标样式优化了一些细节
- 新增 `f-mage` 组件预览图左右按钮切换加入图片长度识别，是否展示效果
- 新增 `f-mage` 组件 `show-close-btn` 配置项可配置是否展示预览窗的关闭按钮
- 新增 `f-mage` 组件可通过鼠标滚轮放大缩小图片功能
- 新增 `f-mage` 组件 `preview-round` 配置项，可配置预览图的圆角

## 0.0.5-alpha.5 (2022-05-27)

- 新增 `f-mage` 组件
- 增加新的 `icon`

## 0.0.4-alpha.4 (2022-05-23)

- 新增 `f-ink` 组件
- 取消 `f-button` 固定高度
- 废除 `f-button` 组件的 `icon` 和 `icon-position` 属性
- 新增 `f-button` 组件的 `left-icon` 和 `right-icon` 属性

## 0.0.3-alpha.3 (2022-05-18)

- 修复按钮组件一些显示问题的样式
- 删除了一个不显示的 `icon`
- 取消组件默认导出
- 压缩组件代码

## 0.0.2-alpha.2 (2022-05-17)

- 更新配置文件
- 新增打包文件

## 0.0.1-alpha.1 (2022-05-17)

- 新增 `f-button`、`f-button-group`、`f-con` 组件
