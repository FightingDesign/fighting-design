import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default {
  title: 'Fighting Design',
  description: '', // 页面的描述 添加到 mate 标签中

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
