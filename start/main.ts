import { createApp } from 'vue'
import App from './src/App.vue'

// 开发阶段引入
import FightingDesign, { FAlert } from '../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import { FButton } from '../dist'
// import '../dist/dist/index.css'

console.log(FightingDesign)

createApp(App)
  .use(FAlert)
  .mount('#start')
