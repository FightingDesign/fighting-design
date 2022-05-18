import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'
import './style/md.scss'
import './style/vitepress.scss'
import { VPTheme } from '../../../src/index'
import { h } from 'vue'

export default {
  ...VPTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  },
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}
