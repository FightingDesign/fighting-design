import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import FightingSetupNamePlugin from '../packages/fighting-setup-name'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [
      vue(),
      FightingSetupNamePlugin()
    ],
    server: {
      port: 1216
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '../packages/fighting-design') // 使用 @ 访问 src 目录
      }
    }
  }
}
