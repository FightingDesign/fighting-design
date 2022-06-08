import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router'

// 开发阶段引入
import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/theme/index.css'

console.log(FightingDesign)

createApp(App).use(FightingDesign).use(router).mount('#start')
