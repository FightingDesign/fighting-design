import DefaultTheme from 'vitepress/theme'
import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'
import './style/vitepress.scss'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.use(FightingDesign)
  }
}
