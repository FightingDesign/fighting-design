import type { App } from 'vue'
import MeIcon from './index.vue'

// 安装
MeIcon.install = (app: App) => {
  app.component('MeIcon', MeIcon)
}

export default MeIcon
