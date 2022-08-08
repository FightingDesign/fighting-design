import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default (): UserConfigExport => {
  return {
    plugins: [vue(), vueSetupExtend()],
    build: {
      outDir: resolve(__dirname, 'dist/dist'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
        name: 'FightingDesign',
        formats: ['umd'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          format: 'umd',
          globals: {
            vue: 'Vue'
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
}
