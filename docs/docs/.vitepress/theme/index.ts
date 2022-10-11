import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
// import MenuBar from './components/MenuBar.vue'

// console.log(Theme)

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // 'home-features-after': () => h(MenuBar),
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
