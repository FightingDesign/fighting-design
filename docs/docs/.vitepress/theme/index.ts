import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
import { vpSearch, vpDemo } from './components'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * https://github.com/vuejs/vitepress/blob/main/docs/guide/theme-introduction.md
       * https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
       */
      'nav-bar-content-before': () => h(vpSearch)
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
    app.component('vp-demo', vpDemo)
  }
}
