import DefaultTheme from 'vitepress/theme'
import fightingDesign from '@fighting-design/components'
import '@fighting-design/theme-style'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  }
}
