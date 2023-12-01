import { createApp } from 'vue'
import App from './App.vue'

console.clear = (): string => ''

createApp(App).mount('#app')
