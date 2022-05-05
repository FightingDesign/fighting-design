// import DefaultTheme from 'vitepress/theme'
import fightingDesign from '../../../../packages/fighting-design/index'
import '@fighting-design/theme-style'
import './style/md.scss'
import './style/vitepress.scss'
// import { VPTheme } from '@vue/theme'
import { VPTheme } from '../../../src/index'
import { h } from 'vue'
// import { VPTheme } from '../../../src/index'

export default {
  // ...DefaultTheme,
  ...VPTheme,
  // enhanceApp({ app }) {
  //   app.use(fightingDesign)
  // },
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}



// uncomment to test CSS variables override
// import './override.css'

// export default {
//   ...VPTheme,
//   Layout() {
//     return h(VPTheme.Layout, null, {
//     })
//   }
// }

