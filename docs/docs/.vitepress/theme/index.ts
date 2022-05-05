import DefaultTheme from 'vitepress/theme'
import fightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/theme-style'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  }
}
