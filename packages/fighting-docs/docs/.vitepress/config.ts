import fs from 'fs'
import path from 'path'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default {
  title: 'Tyh Ui',
  description: 'hello',
  scrollOffset: 'header',
  // base: '/demo/',

  head: [
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './utils/restorePreference.js'),
        'utf-8'
      )
    ]
  ],
  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Tyh2001/tyh-ui' }]
  }
}
