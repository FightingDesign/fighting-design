/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      vue(),
      dts({
        copyDtsFiles: true
      }),
      Components({
        dts: resolve(__dirname, '/packages/fighting-components/components.d.ts')
      })
    ],
    build: {
      outDir: resolve(__dirname, 'dist/lib'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
        formats: ['cjs'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        external: ['vue'],
        preserveModules: true,
        output: {
          format: 'cjs',
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
}
