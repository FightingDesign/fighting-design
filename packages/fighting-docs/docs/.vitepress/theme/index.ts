import DefaultTheme from 'vitepress/theme'
// import { install } from "element-plus"
// import "element-plus/dist/index.css"

// export default {
//   ...DefaultTheme,
//   enhanceApp({ app }) {
//     install(app)
//   }
// }


// import { VPTheme } from '@vue/theme'

export default {
  // ...VPTheme,
  ...DefaultTheme,
  enhanceApp({ app }) { }
}

// export default Object.assign({}, VPTheme, {
//   enhanceApp({ app }) { }
// })