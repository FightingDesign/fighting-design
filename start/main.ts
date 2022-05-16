import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
import fightingDesign from '../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

createApp(App)
  .use(fightingDesign)
  .mount('#start')
