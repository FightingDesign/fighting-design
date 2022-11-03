import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 将所有带短横线的标签名都视为自定义元素
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      }),
      vueSetupExtend(),
      svgLoader()
    ],
    server: {
      port: 1216
    }
  }
}
