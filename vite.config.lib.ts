/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite'

const input: string = resolve(
  __dirname,
  'packages/fighting-components/index.ts'
)

export default (): UserConfigExport => {
  return {
    mode: 'production',
    build: {
      target: 'modules',
      minify: false,
      emptyOutDir: false,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      outDir: resolve(__dirname, 'dist/lib'),
      rollupOptions: {
        external: ['vue'],
        input,
        output: [
          {
            format: 'cjs',
            dir: 'dist/lib',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: 'components'
          }
        ]
      },
      lib: {
        entry: input,
        formats: ['cjs']
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
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
    ]
  }
}
