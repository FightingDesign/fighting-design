import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fighting Design',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
      }
    ]
  ],
  description,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FightingDesign/fighting-design'
      }
    ],
    logo: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
  }
})
