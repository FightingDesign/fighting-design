import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 开发阶段引入
import FightingDesign, { FButton } from '../../packages/fighting-design/index'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../../dist'
// import '../dist/dist/index.css'

import AButton from './components/button.vue'
import AButtonCe from './components/button.ce.vue'

const AButtonElement = defineCustomElement(AButton)
const AButtonCeElement = defineCustomElement(AButtonCe)

console.dir(AButton)
console.dir(AButtonCe)

customElements.define('a-button', AButtonElement)
customElements.define('a-button-ce', AButtonCeElement)

createApp(App).use(FightingDesign).mount('#start')
