import { createApp } from 'vue'
import App from './App.vue'

// 开发阶段引入
// import fighting from '../../packages/fighting-design/index'

// core()

import FightingDesign from '../../dist/packages/fighting-design/index.js'

// import fighting from 'fighting-design'

console.log(FightingDesign)

createApp(App)
  .use(FightingDesign)
  .mount('#start')
