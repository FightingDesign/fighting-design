/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Components from 'unplugin-vue-components/vite'
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      vue(),
      dts({
        insertTypesEntry: false,
        cleanVueFileName: true,
        copyDtsFiles: true // 是否将 .d.ts 源文件复制到 outputDir 中
      }),
      Components({
        dts: resolve(
          __dirname,
          '/packages/fighting-components/global-components.d.ts'
        )
      })
    ],
    mode: 'production',
    build: {
      target: 'modules',
      minify: true, // 压缩
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      outDir: resolve(__dirname, 'dist/es'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
        formats: ['es'],
        fileName: (): string => {
          return 'index.js'
        }
      },
      rollupOptions: {
        external: ['vue'],
        preserveModules: true,
        output: {
          format: 'es',
          preserveModules: true, // 让打包目录和目录对应
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
}
