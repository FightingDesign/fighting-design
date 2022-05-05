import './styles/index.css'
import VPApp from './components/VPApp.vue'
import VPNotFound from './components/VPNotFound.vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
}

export { VPTheme }

export type { Config } from './config'
