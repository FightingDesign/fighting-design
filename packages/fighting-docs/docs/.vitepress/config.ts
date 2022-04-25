import fs from 'fs'
import path from 'path'
// import { nav } from './utils/nav'
// import { sidebar } from './utils/sidebar'

const sidebar = {
  '/components/': [
    {
      text: '开发指南',
      items: [{ text: '快速上手', link: '/components/install' }]
    }
  ]
}

const nav: object[] = [
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

export default {
  title: 'Tyh Ui',
  description: '', // 页面的描述 添加到 mate 标签中
  // base: '/demo/',

  // head: [
  //   [
  //     'script',
  //     {},
  //     fs.readFileSync(
  //       path.resolve(__dirname, './utils/restorePreference.js'),
  //       'utf-8'
  //     )
  //   ]
  // ],
  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    // socialLinks: [{ icon: 'github', link: 'https://github.com/Tyh2001/tyh-ui' }]
  }
}
