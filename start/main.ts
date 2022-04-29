import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件样式
import '@fighting-design/theme-style'

import fighting from '../packages/fighting-design'

console.log(fighting)

createApp(App)
  .use(fighting)
  .mount('#start')
