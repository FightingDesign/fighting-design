import { createApp } from 'vue'
import App from './src/App.vue'

// 开发阶段引入
import FightingDesign from '@fighting-design/fighting-components'
import { FDrawer } from '@fighting-design/fighting-components/drawer'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/theme/style.css'

// console.log(FightingDesign)

createApp(App).use(FightingDesign).use(FDrawer).mount('#start')
