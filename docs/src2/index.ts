import VPApp from './components/RightList.vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
}

export { VPTheme }
