import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    plugins: [vue(),
    // vueSetupExtend(),
    svgLoader()
    ],
    build: {
      target: 'modules', // 这是指 支持原生 ES 模块、原生 ESM 动态导入
      minify: true, // 压缩代码
      chunkSizeWarningLimit: 2, // 打包的组件超过 2kb 警告提示
      reportCompressedSize: true, // 启用 gzip 压缩大小报告
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist-svg'), // 指定输出路径
      lib: {
        entry: resolve(__dirname, 'packages/fighting-icon/index.ts'), // 打包入口文件
        formats: ['es'], // 打包的模式
        fileName: () => 'index.js' // 输出的包文件名
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true // 让打包目录和目录对应 https://rollupjs.org/guide/en/#outputpreservemodules
        }
      }
    }
  }
}
