import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' // https://github.com/jpkleemans/vite-svg-loader
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./packages/fighting-icon'] // 手动设置包含路径的 glob
      }),
      svgLoader()
    ],
    build: {
      minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist-icon'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-icon/index.ts'),
        formats: ['es'],
        fileName: () => 'index.js'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true
        }
      }
    }
  } as UserConfigExport
}
