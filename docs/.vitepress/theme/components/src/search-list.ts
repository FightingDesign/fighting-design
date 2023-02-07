export type SearchList = { title: string; rule: string; url: string }[]

/**
 * 搜索列表
 *
 * @param { string } title 展示的标题
 * @param { string } rule 匹配规则
 * @param { string } url 跳转的地址
 */
export const searchList = [
  { title: '安装', rule: '安装', url: 'docs/install' },
  {
    title: '快速上手',
    rule: '快速上手完整引入自动导入按需引入',
    url: 'docs/import'
  },
  { title: '介绍', rule: '介绍', url: 'docs/introduce' },
  { title: '贡献指南', rule: '贡献指南', url: 'docs/contributing' },
  { title: '加入我们', rule: '加入我们', url: 'docs/join' },
  { title: '更新日志', rule: '更新日志', url: 'docs/changelog' },
  { title: '里程碑', rule: '里程碑', url: 'docs/milepost' },
  { title: 'Button 按钮', rule: 'buttonButton 按钮', url: 'components/button' },
  {
    title: 'Svg Icon 图标',
    rule: 'svg-iconSvgIcon图标',
    url: 'components/svg-icon'
  },
  { title: 'Link 链接', rule: 'linkLink链接', url: 'components/link' },
  { title: 'Text 文字', rule: 'textText文字', url: 'components/text' },
  { title: 'Layout 布局', rule: 'layoutLayout布局', url: 'components/layout' },
  { title: 'Space 间距', rule: 'spaceSpace间距', url: 'components/space' },
  { title: 'Color 色彩', rule: 'colorColor色彩', url: 'components/color' },
  { title: 'Badge 角标', rule: 'badgeBadge角标', url: 'components/badge' },
  { title: 'Image 图片', rule: 'imageImage图片', url: 'components/image' },
  {
    title: 'Image Preview 图片预览',
    rule: 'image-previewImagePreview图片预览',
    url: 'components/image-preview'
  },
  { title: 'Card 卡片', rule: 'cardCard卡片', url: 'components/card' },
  { title: 'Tag 标签', rule: 'tagTag标签', url: 'components/tag' },
  { title: 'Switch 开关', rule: 'switchSwitch开关', url: 'components/switch' },
  { title: 'Avatar 头像', rule: 'avatarAvatar头像', url: 'components/avatar' },
  {
    title: 'Progress 进度条',
    rule: 'progressProgress进度条',
    url: 'components/progress'
  },
  { title: 'Empty 空状态', rule: 'emptyEmpty空状态', url: 'components/empty' },
  { title: 'List 列表', rule: 'listList列表', url: 'components/list' },
  { title: 'Radio 单选框', rule: 'radioRadio单选框', url: 'components/radio' },
  {
    title: 'Checkbox 复选框',
    rule: 'checkboxCheckbox复选框多选框',
    url: 'components/checkbox'
  },
  {
    title: 'ExpandCard 折叠动效',
    rule: 'expand-cardExpandCard折叠动效',
    url: 'components/expand-card'
  },
  { title: 'Tree 树', rule: 'treeTree树', url: 'components/tree' },
  {
    title: 'StickyCard 粘性卡片',
    rule: 'sticky-cardStickyCard粘性卡片',
    url: 'components/sticky-card'
  },
  { title: 'Rate 评分', rule: 'rateRate评分', url: 'components/rate' },
  { title: 'Input 输入框', rule: 'inputInput输入框', url: 'components/input' },
  {
    title: 'Up Load 文件上传',
    rule: 'up-loadUpLoad文件上传',
    url: 'components/up-load'
  },
  { title: 'Table 表格', rule: 'tableTable表格', url: 'components/table' },
  {
    title: 'Breadcrumb 面包屑',
    rule: 'breadcrumbBreadcrumb面包屑',
    url: 'components/breadcrumb'
  },
  {
    title: 'Page Header 页头',
    rule: 'page-headerPageHeader页头',
    url: 'components/page-header'
  },
  {
    title: 'Close Btn 关闭按钮',
    rule: 'close-btnCloseBtn关闭按钮',
    url: 'components/close-btn'
  },
  {
    title: 'Dropdown 下拉菜单',
    rule: 'dropdownDropdown下拉菜单',
    url: 'components/dropdown'
  },
  { title: 'Alert 警告', rule: 'alertAlert警告', url: 'components/alert' },
  {
    title: 'Loading 加载',
    rule: 'loadingLoading加载',
    url: 'components/loading'
  },
  {
    title: 'Message 消息提示',
    rule: 'messageMessage消息提示',
    url: 'components/message'
  },
  {
    title: 'Notification 通知',
    rule: 'notificationNotification通知',
    url: 'components/notification'
  },
  {
    title: 'Skeleton 骨架屏',
    rule: 'skeletonSkeleton骨架屏',
    url: 'components/skeleton'
  },
  {
    title: 'Loading Bar 加载条',
    rule: 'loading-barLoadingBar加载条',
    url: 'components/loading-bar'
  },
  {
    title: 'BackTop 返回顶部',
    rule: 'back-topBackTop返回顶部',
    url: 'components/back-top'
  },
  {
    title: 'Dialog 对话框',
    rule: 'dialogDialog对话框',
    url: 'components/dialog'
  },
  { title: 'Drawer 抽屉', rule: 'drawerDrawer抽屉', url: 'components/drawer' },
  {
    title: 'Tooltip 消息提示',
    rule: 'tooltipTooltip消息提示',
    url: 'components/tooltip'
  },
  {
    title: 'Popup 弹出窗口',
    rule: 'popupPopup弹出窗口',
    url: 'components/popup'
  },
  { title: 'Swap 切换', rule: 'swapSwap 切换', url: 'components/swap' },
  {
    title: 'Toolbar 工具栏',
    rule: 'toolbarToolbar工具栏',
    url: 'components/toolbar'
  },
  {
    title: 'Divider 分隔线',
    rule: 'dividerDivider分隔线',
    url: 'components/divider'
  },
  {
    title: 'Watermark 水印',
    rule: 'watermarkWatermark水印',
    url: 'components/watermark'
  },
  { title: 'Ripple 涟漪', rule: 'rippleRipple涟漪', url: 'components/ripple' },
  {
    title: 'Calendar 日历',
    rule: 'calendarCalendar日历',
    url: 'components/calendar'
  },
  {
    title: 'Select 选择器',
    rule: 'selectSelect选择器',
    url: 'components/select'
  },
  { title: 'Tabs 标签页', rule: 'tabsTabs标签页', url: 'components/tabs' },
  {
    title: 'Textarea 文本域',
    rule: 'textareaTextarea文本域',
    url: 'components/textarea'
  },
  {
    title: 'Pagination 分页器',
    rule: 'paginationPagination分页器',
    url: 'components/pagination'
  },
  {
    title: 'Time Picker 时间选择器',
    rule: 'time-pickerTimePicker时间选择器',
    url: 'components/time-picker'
  },
  {
    title: 'Date Picker 日期选择器',
    rule: 'date-pickerDatePicker日期选择器',
    url: 'components/date-picker'
  },
  {
    title: 'Input Number 数字输入框',
    rule: 'input-numberInputNumber数字输入框',
    url: 'components/input-number'
  },
  {
    title: 'Trigger 触发器',
    rule: 'triggerTrigger触发器',
    url: 'components/trigger'
  },
  {
    title: 'Menu 导航菜单',
    rule: 'menuMenu导航菜单',
    url: 'components/menu'
  },
  {
    title: 'CollapseAnimation 折叠动画',
    rule: 'collapse-animationCollapseAnimation折叠动画',
    url: 'components/collapse-animation'
  },
  {
    title: 'Slider 滑动输入条',
    rule: 'sliderSlider滑动输入条',
    url: 'components/slider'
  },
  {
    title: 'Fighting Global 全局配置',
    rule: 'fighting-globalFightingGlobal全局配置',
    url: 'components/fighting-global'
  },
  {
    title: 'Interface 接口类型',
    rule: 'interfaceInterface 接口类型',
    url: 'components/interface'
  },
  {
    title: 'Form 表单',
    rule: 'formForm 表单',
    url: 'components/form'
  },
  {
    title: 'Box 盒子',
    rule: 'boxBox 盒子',
    url: 'components/box'
  },
  {
    title: 'InfiniteScrolling 无限滚动',
    rule: 'infinite-scrollingInfinite Scrolling 无限滚动',
    url: 'components/infinite-scrolling'
  },
  {
    title: 'NumberAnimate 数字动画',
    rule: 'number-animateNumberAnimate 数字动画',
    url: 'components/number-animate'
  },
  {
    title: 'Countdown 倒计时',
    rule: 'Countdown  倒计时',
    url: 'components/countdown'
  }
] as const
