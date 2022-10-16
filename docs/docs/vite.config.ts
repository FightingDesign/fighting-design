import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import type { UserConfigExport } from 'vite'
import svgLoader from 'vite-svg-loader'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      svgLoader()
    ],
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
