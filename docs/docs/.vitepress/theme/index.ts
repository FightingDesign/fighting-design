import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
import Search from './components/Search.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
        * 导航栏插入搜索的输入框插槽
        * 更多插槽参考
        * 
        * https://github.com/vuejs/vitepress/blob/main/docs/guide/theme-introduction.md 
        */
      'nav-bar-content-before': () => h(Search)
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
