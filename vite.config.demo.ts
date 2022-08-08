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
      // outDir: 'es', // 打包文件目录
      // 压缩
      minify: false,
      emptyOutDir: false,
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      outDir: resolve(__dirname, 'dist/es'),
      // css分离
      // cssCodeSplit: true,
      rollupOptions: {
        // 忽略打包vue文件
        external: ['vue'],
        input,
        output: [
          {
            format: 'es',
            dir: 'dist/es',
            // 不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            // 配置打包根目录
            preserveModulesRoot: 'components'
          },
          {
            format: 'cjs',
            dir: 'dist/lib',
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            // 配置打包根目录
            preserveModulesRoot: 'components'
          }
        ]
      },
      lib: {
        entry: input,
        formats: ['es', 'cjs']
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
