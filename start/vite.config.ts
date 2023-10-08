import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
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
      })
    ],
    server: {
      port: 1216
    },
    resolve: {
      alias: {
        'fighting-design': resolve(__dirname, '../packages/fighting-design/index.ts')
      }
    }
  }
}
