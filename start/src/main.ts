import { createApp } from 'vue'
import App from './App.vue'

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 开发阶段引入
// import FightingDesign from '../../packages/fighting-design/index'

import { FButton } from '../../dist/es/button';

import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../../dist'
// import '../dist/dist/index.css'

createApp(App).use( FButton ).mount('#start')
