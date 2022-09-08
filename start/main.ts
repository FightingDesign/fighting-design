import { FRadioGroup } from './../packages/fighting-design/radio/index';
import { createApp } from 'vue'
import App from './src/App.vue'

// 开发阶段引入
import FightingDesign from '../packages/fighting-design/index'
import { FRadio } from '../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import { FButton } from '../dist'
// import '../dist/dist/index.css'
console.log(FRadio)

createApp(App)
  .use(FRadio).use(FightingDesign).use(FRadioGroup)
  .mount('#start')
