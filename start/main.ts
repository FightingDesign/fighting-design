import { createApp } from 'vue'
import App from './src/App.vue'

// 开发阶段引入
import { FButton, FImagePreview } from '../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/dist/index.css'

console.log(FButton)

createApp(App)
  .use(FButton)
  .use(FImagePreview)
  // .use(FightingDesign)
  .mount('#start')
