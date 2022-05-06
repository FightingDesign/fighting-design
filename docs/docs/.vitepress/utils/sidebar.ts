export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/install',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '引入', link: '/docs/import' },
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
        { text: '加入我们', link: '/docs/join' },
      ]
    },
    {
      text: '版本',
      link: '/docs/changelog',
      items: [
        { text: '更新日志', link: '/docs/changelog' }
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
      ]
    }
  ]
}
