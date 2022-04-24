import fs from 'fs'
import path from 'path'

interface navType {
  text: string
  activeMatch: string
  link: string
}

// 导航栏
const nav: navType[] = [
  {
    text: '首页',
    activeMatch: `/`,
    link: '/'
  },
  {
    text: '组件',
    activeMatch: `^/components/`,
    link: '/components/install'
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    link: '/about/index'
  }
]

// 侧边栏
const sidebar: any = {
  '/components/': [
    {
      text: '开发指南',
      items: [{ text: '快速上手', link: '/components/install' }]
    },
    {
      text: '基础组件',
      items: [
        { text: 'Color 色彩', link: '/components/color' },
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Link 链接', link: '/components/link' },
        { text: 'Container 布局容器', link: '/components/container' }
      ]
    },
    {
      text: '表单',
      items: [
        { text: 'Table 表格', link: '/components/table' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Textarea 文本域', link: '/components/textarea' },
        { text: 'Select 选择器', link: '/components/select' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Rate 评分', link: '/components/rate' }
      ]
    },
    {
      text: '数据',
      items: [
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Tree 树形控件', link: '/components/tree' },
        { text: 'Avatar 头像', link: '/components/avatar' },
        { text: 'Text 文字', link: '/components/text' },
        { text: 'Tagging 标注', link: '/components/tagging' },
        { text: 'Skeleton 骨架', link: '/components/skeleton' }
      ]
    },
    {
      text: '提示',
      items: [
        { text: 'Alert 提示', link: '/components/alert' },
        { text: 'Message 提示框', link: '/components/message' },
        { text: 'Notification 通知', link: '/components/notification' },
        { text: 'Drawer 抽屉', link: '/components/drawer' }
      ]
    },
    {
      text: '导航',
      items: [
        { text: 'Menu 导航栏', link: '/components/menu' },
        { text: 'Crumbs 面包屑', link: '/components/crumbs' },
        { text: 'PageHeader 页头', link: '/components/pageHeader' }
      ]
    },
    {
      text: '其它',
      items: [
        { text: 'Dialog 对话框', link: '/components/dialog' },
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Calendar 日历', link: '/components/calendar' },
        { text: 'Division 分割线', link: '/components/division' },
        { text: 'TurnPage 翻页', link: '/components/turnPage' },
        { text: 'BackTop 回到顶部', link: '/components/backTop' },
        { text: 'Image 图片', link: '/components/image' },
        { text: 'Info 信息栏', link: '/components/info' }
      ]
    }
  ]
}

export default {
  title: 'Tyh Ui',
  description: 'hello',
  scrollOffset: 'header',
  // base: '/demo/',

  head: [
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './utils/restorePreference.js'),
        'utf-8'
      )
    ]
  ],
  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Tyh2001/tyh-ui' }]
  }
}
