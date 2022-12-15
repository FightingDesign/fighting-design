import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import FightingSetupNamePlugin from '../packages/fighting-setup-name'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), FightingSetupNamePlugin()],
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
