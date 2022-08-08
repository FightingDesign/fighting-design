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
      minify: false, // 压缩
      emptyOutDir: false,
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      outDir: resolve(__dirname, 'dist/es'),
      rollupOptions: {
        external: ['vue'], // 忽略打包vue文件
        input,
        output: {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
          preserveModules: true, // 让打包目录和我们目录对应
          preserveModulesRoot: 'components', // 配置打包根目录
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: input,
        formats: ['es']
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
