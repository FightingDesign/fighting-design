import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'Fighting Design',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0,user-scalable=no'
      }
    ]
  ],
  description,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FightingDesign/fighting-design'
      }
    ],
    logo: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
