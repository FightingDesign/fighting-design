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
      vue(),
      dts({
        insertTypesEntry: false,
        cleanVueFileName: true,
        copyDtsFiles: true
      }),
      vueSetupExtend(),
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
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      emptyOutDir: false,
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
        output: {
          preserveModules: true,
          exports: 'named' // https://rollupjs.org/guide/en/#outputexports
        }
      }
    }
  }
}
