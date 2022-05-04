import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
import fighting from '../packages/fighting-design'
import '@fighting-design/theme-style'


createApp(App)
  .use(fighting)
  .mount('#start')
