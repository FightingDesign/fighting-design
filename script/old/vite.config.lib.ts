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
        staticImport: true, //是否将动态引入转换为静态
        insertTypesEntry: true,
        cleanVueFileName: true,
        copyDtsFiles: true,
        include: ['./packages/fighting-design']
      }),
      vueSetupExtend()
    ],
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/lib'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.ts'),
        formats: ['cjs'],
        fileName: () => 'index.cjs'
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
