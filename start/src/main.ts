import { createApp } from 'vue'
import App from './App.vue'

// 配置路由
// import router from './router'

// 开发阶段引入
import FightingDesign from 'fighting-design'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../../dist'
// import '../dist/dist/index.css'

createApp(App)
  .use(FightingDesign)
  // .use(router)
  .mount('#start')
