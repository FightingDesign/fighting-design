import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
// import fightingDesign from '../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

// import fightingDesign from '../dist/packages/index/index'
// import { FButton } from '../dist/packages/index/index'

createApp(App)
  // .use(FButton)
  .mount('#start')
