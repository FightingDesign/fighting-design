import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [vueSetupExtend()],
    optimizeDeps: {
      exclude: ['vitepress']
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
    },
    server: {
      port: 9999
    }
  }
}
