import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
import vpSearch from './components/vp-search.vue'
import vpDemo from './components/vp-demo.vue'

// import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// Don't remove this file, because it registers the demo components.
// import TableDemo from '../components/table/demo.vue'
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

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
    app.component('vp-demo', vpDemo)
    // app.component('TableDemo', TableDemo)
    // app.component('Demo', Demo)
    // app.component('DemoBlock', DemoBlock)
  }
}
