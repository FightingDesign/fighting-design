import { createApp } from 'vue'
import App from './App.vue'
import FightingDesign from '../../fighting-design/index'
import '@fighting-design/fighting-theme'

console.clear = (): string => ''

createApp(App).use(FightingDesign).mount('#app')
