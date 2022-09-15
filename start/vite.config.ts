import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), vueSetupExtend(), svgLoader()],
    server: {
      port: 1216
    }
  }
}
