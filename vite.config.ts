import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts
import { visualizer } from 'rollup-plugin-visualizer' // https://github.com/btd/rollup-plugin-visualizer
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      dts({
        // logDiagnostics: true, // 是否打印类型诊断信息
        // skipDiagnostics: false, // 是否跳过类型诊断
        staticImport: true,   //是否将动态引入转换为静态
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./packages/fighting-design'] // 手动设置包含路径的 glob
      }),
      vueSetupExtend(),
      visualizer()
    ],
    build: {
      target: 'modules', // 这是指 支持原生 ES 模块、原生 ESM 动态导入
      minify: true, // 压缩代码
      chunkSizeWarningLimit: 2, // 打包的组件超过 2kb 警告提示
      reportCompressedSize: true, // 启用 gzip 压缩大小报告
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/es'), // 指定输出路径
      // 库模式 https://cn.vitejs.dev/guide/build.html#library-mode
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.ts'), // 打包入口文件
        formats: ['es'], // 打包的模式
        fileName: () => 'index.js' // 输出的包文件名
      },
      rollupOptions: {
        external: ['vue'], // 确保外部化处理那些你不想打包进库的依赖
        output: {
          preserveModules: true // 让打包目录和目录对应 https://rollupjs.org/guide/en/#outputpreservemodules
        }
      }
    }
  }
}
