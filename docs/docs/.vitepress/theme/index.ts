import fightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'
import './style/md.scss'
import './style/vitepress.scss'
import { VPTheme } from '../../../src/index'
import { h } from 'vue'

export default {
  ...VPTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  },
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}
