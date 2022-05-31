import { createApp } from 'vue'
import App from './src/App.vue'

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/theme/index.css'

// 开发阶段引入
import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'

console.log(FightingDesign)

createApp(App).use(FightingDesign).mount('#start')
