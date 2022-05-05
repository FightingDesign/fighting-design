import DefaultTheme from 'vitepress/theme'
import fightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/theme-style'
import './style/md.scss'
import './style/vitepress.scss'
import { VPTheme } from '../../../src/index'

export default {
  // ...DefaultTheme,
  ...VPTheme,
  enhanceApp({ app }) {
    app.use(fightingDesign)
  }
}

// export default Object.assign({}, VPTheme, {
//   enhanceApp({ app }) {
//     app.use(fightingDesign)
//   }
// })
