import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'// https://github.com/qmhc/vite-plugin-dts

export default defineConfig({
  plugins: [
    vue(),
    dts({
      //声明文件输出目录
      //默认值基于vite配置输出选项
      // outputDir: 'dist-type',

      //手动设置条目文件的根路径
      //每个文件的输出路径将基于它进行计算
      //默认值是所有文件的最小公共路径
      //       entryRoot: './ahdjahjsh',

      insertTypesEntry: true, // 是否生成类型条目文件
      copyDtsFiles: true, // 是否复制。d.ts源文件到 outputDir 默认为 true
      cleanVueFileName: true // //是否转换文件名'。vue。d、 ts“至”。d、 ts' //默认值：false
    })],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
      name: 'fightingDesign',
      formats: ['es', 'umd'],
      fileName: 'index' // 不用加后缀
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    }
  }
})
