import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign, { FStickyCard } from '../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
import vpSearch from './components/vp-search.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see layout-slots https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
       */
      'nav-bar-content-before': () => h(vpSearch)
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
    app.component('vp-demo', FStickyCard)
  }
}
