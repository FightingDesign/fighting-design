import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts
import { resolve } from 'path'
// import { copyFileSync } from 'fs'
// import { version } from './packages/fighting-design/package.json'
// import { visualizer } from 'rollup-plugin-visualizer' // https://github.com/btd/rollup-plugin-visualizer
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue()
      // dts({
      //   // logDiagnostics: true, // 是否打印类型诊断信息
      //   // skipDiagnostics: false, // 是否跳过类型诊断
      //   // aliasesExclude: ['./alert.vue'], // 设置在转换别名时哪些路径需要排除
      //   staticImport: true,   //是否将动态引入转换为静态
      //   // outputDir: ['./dist/lib', './dist/es'], // 可以指定一个数组来输出到多个目录中
      //   // outputDir: ['./dist/es'], // 可以指定一个数组来输出到多个目录中
      //   insertTypesEntry: true, // 是否生成类型声明入口
      //   cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
      //   copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
      //   include: ['./packages/fighting-design'], // 手动设置包含路径的 glob
      //   // 构建后回调钩子
      //   afterBuild: (): void => {
      //     // move()
      //     console.log('结束了')
      //   }
      // }),
      // vueSetupExtend(),
      // visualizer()
    ],
    build: {
      target: 'modules', // 这是指 支持原生 ES 模块、原生 ESM 动态导入
      minify: true, // 压缩代码
      chunkSizeWarningLimit: 2, // 打包的组件超过 2kb 警告提示
      reportCompressedSize: true, // 启用 gzip 压缩大小报告
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'), // 指定输出路径
      // 库模式 https://cn.vitejs.dev/guide/build.html#library-mode
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.ts'), // 打包入口
        name: 'FightingDesign' // 包名
      },
      rollupOptions: {
        output: [
          {
            /**
             * 打包模式
             *
             * @see output.format https://cn.rollupjs.org/configuration-options/#output-format
             */
            format: 'es',
            /**
             * 导出模式
             *
             * @see exports https://cn.rollupjs.org/configuration-options/#output-exports
             */
            exports: 'named',
            /**
             * 输出路径
             *
             * @see output.dir https://cn.rollupjs.org/configuration-options/#output-dir
             */
            dir: 'dist/src',
            /**
             * @see output.sourcemap https://cn.rollupjs.org/configuration-options/#output-sourcemap
             */
            sourcemap: false,
            /**
             * 输出后的文件名
             *
             * @see output.entryFileNames https://cn.rollupjs.org/configuration-options/#output-entryfilenames
             */
            entryFileNames: (chunkInfo): string => {
              const _name = chunkInfo.name
              const firstSlashIndex = _name.indexOf('/')
              const secondSlashIndex = _name.indexOf('/', firstSlashIndex + 1)
              const result = _name.slice(secondSlashIndex + 1, _name.lastIndexOf('/') + 1)
              const regex = /node_modules/

              if (regex.test(result)) {
                return '_vue/index.js'
              }

              return result + 'index.js'
            },
            /**
             * 输出的 chunk文件名
             *
             * @see output.chunkfilenames https://cn.rollupjs.org/configuration-options/#output-chunkfilenames
             */
            chunkFileNames: '[name].js',
            /**
             * 输出资产文件名
             *
             * @see output.assetfilenames https://cn.rollupjs.org/configuration-options/#output-assetfilenames
             */
            assetFileNames: '[name].[ext]',
            /**
             * @see output.inlinedynamicimports https://cn.rollupjs.org/configuration-options/#output-inlinedynamicimports
             */
            inlineDynamicImports: false,
            /**
             * @see output.manualchunks https://cn.rollupjs.org/configuration-options/#output-manualchunks
             */
            manualChunks: undefined,
            /**
             * 使用原始模块名作为文件名
             *
             * @see output.preserveModules https://cn.rollupjs.org/configuration-options/#output-preservemodules
             */
            preserveModules: true,
            /**
             * 是否允许在自动生成的代码片断中使用
             *
             * @see output.generatedCode.symbols https://cn.rollupjs.org/configuration-options/#output-generatedcode-symbols
             */
            generatedCode: {
              symbols: true
            }
          }
        ]
      }
    }
  } as UserConfigExport
}

// const move = (): void => {
//   const files = [
//     { input: './README.md', outDir: 'dist/README.md' },
//     {
//       input: './packages/fighting-design/package.json',
//       outDir: 'dist/package.json'
//     },
//     { input: './LICENSE', outDir: 'dist/LICENSE' }
//   ] as const

//   files.forEach((item): void => {
//     copyFileSync(item.input, item.outDir)
//   })

//   console.warn('\n' + `Fighting Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
// }
