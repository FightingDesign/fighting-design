import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      port: 9999,
      fs: {
        /**
         * 可以为项目根目录的上一级提供服务
         *
         * @see allow https://cn.vitejs.dev/config/server-options.html#server-fs-allow
         */
        allow: [resolve(__dirname, '..', '..')]
      }
    },
    resolve: {
      alias: {
        'fighting-design': resolve(__dirname, '../packages/fighting-design/index.ts'),
        '@fighting-design/fighting-icon': resolve(
          __dirname,
          '../packages/fighting-icon/index.ts'
        )
      }
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
