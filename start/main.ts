import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
import fighting from '../packages/fighting-design/index'
// import fightingDesign from '../dist/index.es'
// import fightingDesign from '../dist/index.umd'
import '@fighting-design/theme-style'

createApp(App)
  .use(fighting)
  // .use(fightingDesign)
  .mount('#start')
