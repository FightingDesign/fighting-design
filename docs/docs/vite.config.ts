import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend() // 设置组件名插件
    ],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      port: 9999 // 端口号
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule): void => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
}
