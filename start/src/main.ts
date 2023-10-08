import { createApp } from 'vue'
import App from './App.vue'

// 开发阶段引入
// import fighting from '../../packages/fighting-design/index'

import FightingDesign from '../../dist/src/index.js'

console.log(FightingDesign)

createApp(App)
  .use(FightingDesign)
  .mount('#start')
