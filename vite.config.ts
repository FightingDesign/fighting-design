import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts
import { visualizer } from 'rollup-plugin-visualizer' // https://github.com/btd/rollup-plugin-visualizer
import svgLoader from 'vite-svg-loader' // https://github.com/jpkleemans/vite-svg-loader

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      dts({
        // root: './packages/fighting-design', // 执行的根目录
        // logDiagnostics: true, // 是否打印类型诊断信息
        // skipDiagnostics: false, // 是否跳过类型诊断
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./packages/fighting-design'] // 手动设置包含路径的 glob
      }),
      vueSetupExtend(),
      visualizer(),
      svgLoader()
    ],
    mode: 'production',
    build: {
      target: 'modules',
      minify: true, // 压缩
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/es'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.ts'),
        formats: ['es'],
        fileName: (): string => {
          return 'index.mjs'
        }
      },
      rollupOptions: {
        external: ['vue'], // 确保外部化处理那些你不想打包进库的依赖
        output: {
          preserveModules: true // 让打包目录和目录对应 https://rollupjs.org/guide/en/#outputpreservemodules
        }
        // https://rollupjs.org/guide/en/#treeshake
        // treeshake: {
        //   moduleSideEffects: false
        // }
      }
    }
  }
}
