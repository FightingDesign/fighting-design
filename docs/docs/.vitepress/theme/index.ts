import DefaultTheme from 'vitepress/theme'
import fightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/theme-style'
import './style/md.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  }
}
