/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      vue(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        cleanVueFileName: true
      }),
      Components({
        dts: resolve(__dirname, '/packages/fighting-components/components.d.ts')
      })
    ],
    build: {
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      outDir: resolve(__dirname, 'dist/es'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.d.ts'),
        formats: ['es'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        external: ['vue'],
        preserveModules: true,
        output: {
          format: 'es',
          globals: {
            vue: 'Vue'
          }
        }
      },
      terserOptions: {
        // 打包取消 console 和 debugger
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
}
