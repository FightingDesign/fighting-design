/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '开发指南',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '快速上手', link: '/docs/import' }
      ]
    },
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/docs/introduce' },
        { text: '贡献指南', link: '/docs/contributing' },
        { text: '加入我们', link: '/docs/join' }
      ]
    },
    {
      text: '历程',
      items: [
        { text: '更新日志', link: '/docs/changelog' },
        { text: '里程碑', link: '/docs/milepost' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Svg Icon 图标', link: '/components/svg-icon' },
        { text: 'Link 链接', link: '/components/link' },
        { text: 'Text 文本', link: '/components/text' },
        { text: 'Layout 布局', link: '/components/layout' },
        { text: 'Space 间距', link: '/components/space' },
        { text: 'Color 色彩', link: '/components/color' },
        { text: 'Box 盒子', link: '/components/box' }
      ]
    },
    {
      text: '类型接口',
      items: [{ text: 'Interface 接口类型', link: '/components/interface' }]
    },
    {
      text: '配置组件',
      items: [{ text: 'Fighting Global 全局配置', link: '/components/fighting-global' }]
    },
    {
      text: '数据输入',
      items: [
        { text: 'Form 表单', link: '/components/form' },
        { text: 'Badge 角标', link: '/components/badge' },
        { text: 'Image 图片', link: '/components/image' },
        { text: 'Image Preview 图片预览', link: '/components/image-preview' },
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Avatar 头像', link: '/components/avatar' },
        { text: 'Progress 进度条', link: '/components/progress' },
        { text: 'Empty 空状态', link: '/components/empty' },
        { text: 'List 列表', link: '/components/list' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'Checkbox 复选框', link: '/components/checkbox' },
        { text: 'ExpandCard 折叠动效', link: '/components/expand-card' },
        { text: 'Tree 树', link: '/components/tree' },
        { text: 'StickyCard 粘性卡片', link: '/components/sticky-card' },
        { text: 'Rate 评分', link: '/components/rate' },
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Up Load 文件上传', link: '/components/up-load' },
        { text: 'Table 表格', link: '/components/table' },
        { text: 'Select 选择器', link: '/components/select' },
        { text: 'Textarea 文本域', link: '/components/textarea' },
        { text: 'Pagination 分页器', link: '/components/pagination' },
        { text: 'Time Picker 时间选择器', link: '/components/time-picker' },
        { text: 'Date Picker 日期选择器', link: '/components/date-picker' },
        { text: 'Input Number 数字输入框', link: '/components/input-number' },
        { text: 'Slider 滑动输入条', link: '/components/slider' }
      ]
    },
    {
      text: '导航组件',
      items: [
        { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
        { text: 'Page Header 页头', link: '/components/page-header' },
        { text: 'Close Btn 关闭按钮', link: '/components/close-btn' },
        { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
        { text: 'Trigger 触发器', link: '/components/trigger' },
        { text: 'Menu 导航菜单', link: '/components/menu' }
      ]
    },
    {
      text: '反馈组件',
      items: [
        { text: 'Alert 提示', link: '/components/alert' },
        { text: 'Loading 加载', link: '/components/loading' },
        { text: 'Message 消息提示', link: '/components/message' },
        { text: 'Notification 通知', link: '/components/notification' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
        { text: 'BackTop 返回顶部', link: '/components/back-top' },
        { text: 'Dialog 对话框', link: '/components/dialog' },
        { text: 'Drawer 抽屉', link: '/components/drawer' },
        { text: 'Tooltip 消息提示', link: '/components/tooltip' },
        { text: 'Popup 弹出窗口', link: '/components/popup' },
        { text: 'Swap 切换', link: '/components/swap' }
      ]
    },
    {
      text: '其它',
      items: [
        { text: 'Tabs 标签页', link: '/components/tabs' },
        { text: 'Toolbar 工具栏', link: '/components/toolbar' },
        { text: 'Divider 分隔线', link: '/components/divider' },
        { text: 'Watermark 水印', link: '/components/watermark' },
        { text: 'Ripple 涟漪', link: '/components/ripple' },
        { text: 'Calendar 日历', link: '/components/calendar' },
        { text: 'Infinite Scrolling 无限滚动', link: '/components/infinite-scrolling' },
        { text: 'Number Animate 数字动画', link: '/components/number-animate' },
        {
          text: 'CollapseAnimation 折叠动画',
          link: '/components/collapse-animation'
        }
      ]
    }
  ]
}
