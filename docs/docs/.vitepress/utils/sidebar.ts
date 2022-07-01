export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/install',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '引入使用', link: '/docs/import' }
      ]
    },
    {
      text: '指南',
      link: '/docs/introduce',
      items: [
        { text: '介绍', link: '/docs/introduce' },
        { text: '贡献指南', link: '/docs/contributing' },
        { text: '加入我们', link: '/docs/join' }
      ]
    },
    {
      text: '历程',
      link: '/docs/CHANGELOG',
      items: [
        { text: '更新日志', link: '/docs/CHANGELOG' },
        { text: '里程碑', link: '/docs/milepost' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      link: '/components/',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Link 链接', link: '/components/link' },
        { text: 'Text 文本', link: '/components/text' },
        { text: 'Layout 布局', link: '/components/layout' },
        { text: 'Space 间距', link: '/components/space' }
      ]
    },
    {
      text: '数据展示',
      link: '/components/',
      items: [
        { text: 'Badge 角标', link: '/components/badge' },
        { text: 'Image 图片', link: '/components/image' },
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Avatar 头像', link: '/components/avatar' }
      ]
    },
    {
      text: '导航组件',
      link: '/components/',
      items: [{ text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' }]
    },
    {
      text: '反馈组件',
      link: '/components/',
      items: [{ text: 'Loading 加载', link: '/components/loading' }]
    },
    {
      text: '其它',
      link: '/components/',
      items: [
        { text: 'Divider 分隔线', link: '/components/divider' },
        { text: 'BackTop 返回顶部', link: '/components/back-top' }
      ]
    }
  ]
} as const
