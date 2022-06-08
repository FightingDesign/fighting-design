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
        { text: '贡献指南', link: '/docs/CONTRIBUTING' },
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
        { text: 'Link 链接', link: '/components/link' }
      ]
    },
    {
      text: '数据展示',
      link: '/components/',
      items: [
        { text: 'Image 图片', link: '/components/image' },
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Divider 分隔符', link: '/components/divider' },
      ]
    }
  ]
}
