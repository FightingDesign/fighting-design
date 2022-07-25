// import { nav } from './utils/nav'
// import { sidebar } from './utils/sidebar'
// import { description } from './utils/description'
// import getBase from '../../src/vitepress/config/baseConfig'

// export default (async () => {
//   const base = await getBase()
//   return {
//     ...base,

//     vite: {
//       ...base.vite,
//       build: {
//         minify: false
//       }
//     },
//     title: 'Fighting Design',
//     head: [
//       [
//         'link',
//         {
//           rel: 'icon',
//           href: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
//         }
//       ]
//     ],
//     description,
//     darkMode: true,

// })()

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
        href: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
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
    logo: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
  }
})
