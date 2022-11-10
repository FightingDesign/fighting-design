import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), vueSetupExtend(), svgLoader()],
    server: {
      // port: 1216
    }
  }
}
