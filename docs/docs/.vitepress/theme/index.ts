import DefaultTheme from 'vitepress/theme'
import fightingDesign from '../../../../packages/fighting-design'
import '@fighting-design/theme-style'
import './style/components.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  }
}
