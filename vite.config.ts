import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { name, version } from './packages/fighting-design/package.json'
import { visualizer } from 'rollup-plugin-visualizer'
import type { UserConfigExport, PluginOption } from 'vite'

export default (): UserConfigExport => {
  return {
    /**
     * 插件配置
     *
     * @see plugins https://cn.vitejs.dev/config/shared-options.html#plugins
     */
    plugins: [
      /**
       * vue 插件
       *
       * @see vite-plugin-vue https://github.com/vitejs/vite-plugin-vue
       * @see defineModel https://github.com/vuejs/rfcs/discussions/503
       */
      vue({
        script: {
          defineModel: true
        }
      }),
      /**
       * 打包类型
       *
       * @see vite-plugin-dts https://github.com/qmhc/vite-plugin-dts
       */
      dts({
        skipDiagnostics: true, // 是否跳过类型诊断
        staticImport: true, // 是否将动态引入转换为静态
        outputDir: ['./dist/lib', './dist/es'], // 可以指定一个数组来输出到多个目录中
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./packages/fighting-design'], // 手动设置包含路径的 glob
        /**
         * 构建后回调钩子
         */
        afterBuild: (): void => {
          move()
        }
      }),
      /**
       * 可视化捆绑包
       *
       * @see rollup-plugin-visualizer https://github.com/btd/rollup-plugin-visualizer
       */
      visualizer() as PluginOption
    ],
    css: {},
    /**
     * 构建配置项
     *
     * @see 构建选项 https://cn.vitejs.dev/config/build-options.html
     */
    build: {
      target: 'modules', // 这是指 支持原生 ES 模块、原生 ESM 动态导入
      minify: true, // 压缩代码
      chunkSizeWarningLimit: 2, // 打包的组件超过 2kb 警告提示
      reportCompressedSize: true, // 启用 gzip 压缩大小报告
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'), // 指定输出路径
      /**
       * 库模式
       *
       * @see 库模式 https://cn.vitejs.dev/guide/build.html#library-mode
       */
      lib: {
        name: 'FightingDesign',
        entry: resolve(__dirname, 'packages/fighting-design/index.ts') // 打包入口
      },
      /**
       * rollup 配置项
       *
       * @see big-list-of-options https://rollupjs.org/guide/en/#big-list-of-options
       */
      rollupOptions: {
        /**
         * 确保外部化处理那些你不想打包进库的依赖
         *
         * @see external https://rollupjs.org/guide/en/#external
         */
        external: ['vue'],
        output: [
          {
            name: 'FightingDesign', // 包名
            format: 'umd',
            exports: 'named',
            sourcemap: false,
            dir: 'dist/dist',
            entryFileNames: 'index.umd.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            manualChunks: undefined,
            inlineDynamicImports: false,
            globals: {
              vue: 'Vue'
            } // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          },
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
            dir: 'dist/es',
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
              return `${chunkInfo.name.slice(
                0,
                chunkInfo.name.lastIndexOf('/') + 1
              )}index.js`
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
          },
          {
            format: 'cjs',
            exports: 'named',
            dir: 'dist/lib',
            sourcemap: false,
            entryFileNames: (chunkInfo): string => {
              return `${chunkInfo.name.slice(
                0,
                chunkInfo.name.lastIndexOf('/') + 1
              )}index.js`
            },
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            generatedCode: {
              symbols: true
            }
          }
        ]
      }
    }
  }
}

/**
 * 打包结束之后将一些静态文件进行移入
 */
const move = (): void => {
  const files = [
    { input: './README.md', outDir: 'dist/README.md' },
    { input: './packages/fighting-design/package.json', outDir: 'dist/package.json' },
    { input: './LICENSE', outDir: 'dist/LICENSE' }
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn('\n' + `${name} ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
