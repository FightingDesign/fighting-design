import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
import fightingDesign from '../dist'
// import { FButton } from '../dist/packages/index'
// import '@fighting-design/fighting-theme'
import '../dist/theme/index.css'

console.log(fightingDesign)

// import fightingDesign from '../dist/packages/index/index'
// import { FButton } from '../dist/packages/index/index'

createApp(App)
  // .use(FButton)
  .use(fightingDesign)
  .mount('#start')
