import { createApp } from 'vue'
import App from './App.vue'

// 配置路由
// import router from './router'

// 开发阶段引入
<<<<<<< HEAD
import { register } from '../../packages/fighting-design/index'
// import '@fighting-design/fighting-theme'
=======
import FightingDesign from 'fighting-design'
import '@fighting-design/fighting-theme'
>>>>>>> master

// 打包阶段引入
// import FightingDesign from '../../dist'
// import '../dist/dist/index.css'

<<<<<<< HEAD
register()

createApp(App)
  // .use(FightingDesign)
=======
createApp(App)
  .use(FightingDesign)
  // .use(router)
>>>>>>> master
  .mount('#start')
