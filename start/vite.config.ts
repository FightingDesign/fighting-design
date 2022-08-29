import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), vueSetupExtend()],
    server: {
      port: 1216
    }
  }
}
