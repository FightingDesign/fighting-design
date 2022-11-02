import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 开发阶段引入
import FightingDesign from '../../packages/fighting-design/index'
import { default as FButton } from '../../packages/fighting-design/button/src/button.vue'
import '@fighting-design/fighting-theme'

// 打包阶段引入
// import FightingDesign from '../../dist'
// import '../dist/dist/index.css'

import css from '../../packages/fighting-theme/src/button.scss'

console.log(css)

import AButton from './components/button.vue'
import AButtonCe from './components/button.ce.vue'

const AButtonElement = defineCustomElement(AButton)
const AButtonCeElement = defineCustomElement(AButtonCe)
const FButtonElement = defineCustomElement(FButton)

FButton.styles = [css]

console.dir(AButton)
console.dir(AButtonCe)
console.dir(FButton)

customElements.define('a-button', AButtonElement)
customElements.define('a-button-ce', AButtonCeElement)
customElements.define('f-button', FButtonElement)

createApp(App)
// .use(FightingDesign)
.mount('#start')
