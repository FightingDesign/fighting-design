import { createApp } from 'vue'
import App from './src/App.vue'

// 开发阶段引入
import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/theme/index.css'

// 测试路径
// import FightingDesign from '../dist/index.es'

console.log(FightingDesign)

createApp(App).use(FightingDesign).mount('#start')
