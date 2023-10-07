import { createApp } from 'vue'
import App from './App.vue'

// 开发阶段引入
import { core } from '../../packages/fighting-design/index'

core()

createApp(App).mount('#start')
