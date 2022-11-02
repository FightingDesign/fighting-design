import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'
import commonjsExternals from 'vite-plugin-commonjs-externals'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [
      vue(),
      vueSetupExtend(),
      svgLoader()
      // commonjsExternals({
      //   externals: ['fs'] //这里
      // })
    ],
    server: {
      host: '0.0.0.0',
      port: 1216
    }
  }
}
