import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { head } from './utils/head'
import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'Fighting Design',
  head,
  description,
  lastUpdated: true,
  cacheDir: '../../node_modules', // https://vitepress.vuejs.org/config/app-configs#cachedir
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
    // 自定义 markdown 语法
    config: md => mdPlugin(md)
  }
})
