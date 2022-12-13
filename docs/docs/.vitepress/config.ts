import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { head } from './utils/head'
import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from './src/node/index'

export default defineConfig({
  title: 'Fighting Design',
  head,
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
    // 自定义 markdown 语法
<<<<<<< HEAD
    config: (md) => demoBlockPlugin(md)
=======
    config: md => mdPlugin(md)
>>>>>>> master
  }
})
