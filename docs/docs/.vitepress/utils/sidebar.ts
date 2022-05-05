export const sidebar = [
  {
    text: '开发指南',
    children: [{ text: '快速上手', link: '/components/install' }]
  },
  {
    text: '基础组件',
    children: [
      { text: 'Button 按钮', link: '/components/button' },
      { text: 'Icon 图标', link: '/components/icon' },
    ]
  }
]

export const sidebar2 = {
  '/components/': [
    // {
    //   text: '开发指南',
    //   items: [
    //     { text: '快速上手', link: '/components/install' },
    //     { text: 'Button 按钮', link: '/components/button' }
    //   ]
    // },
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
      ]
    }
  ]
}
