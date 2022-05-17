import type { App } from 'vue'
import MeButton from './index.vue'

// 安装
MeButton.install = (app: App): void => {
  app.component('MeButton', MeButton)
}

export default MeButton
