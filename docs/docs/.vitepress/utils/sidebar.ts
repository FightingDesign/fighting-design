export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/install',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '引入', link: '/docs/import' }
      ]
    },
    {
      text: '指南',
      link: '/docs/install',
      items: [
        { text: '介绍', link: '/docs/introduce' },
        { text: '开发指南', link: '/docs/development' },
        { text: '项目指南', link: '/docs/guide' },
        { text: '贡献指南', link: '/docs/contribution' },
        { text: '规范指南', link: '/docs/standard' },
        { text: '加入我们', link: '/docs/join' }
      ]
    },
    {
      text: '历程',
      link: '/docs/changelog',
      items: [
        { text: '更新日志', link: '/docs/changelog' },
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
        { text: 'Link 链接', link: '/components/link' }
      ]
    },
    {
      text: '数据展示',
      link: '/components/',
      items: [{ text: 'Image 图片', link: '/components/image' }]
    }
  ]
}
