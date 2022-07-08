import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import getBase from '../../src/vitepress/config/baseConfig'

export default (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      }
    },
    title: 'Fighting Design',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
        }
      ]
    ],
    description,
    darkMode: true,

    // 主题配置
    themeConfig: {
      nav,
      sidebar,
      darkMode: true,
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/FightingDesign/fighting-design'
        }
      ],
      logo: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
    }
  }
})()
