import DefaultTheme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.use(FightingDesign)
  }
}
