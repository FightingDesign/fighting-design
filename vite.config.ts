import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { version } from './packages/fighting-design/package.json'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      dts({
        outputDir: ['./dist/lib', './dist/es'], // 可以指定一个数组来输出到多个目录中
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true,
        copyDtsFiles: true,
        aliasesExclude: ['./alert.vue'], // 设置在转换别名时哪些路径需要排除
        include: ['./packages/fighting-design'],
        // 构建后回调钩子
        afterBuild: () => {
          move()
        }
      }),
      vueSetupExtend()
    ],
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.ts'),
        name: 'FightingDesign'
      },
      rollupOptions: {
        external: ['vue'],
        output: [
          {
            format: 'umd', // 打包模式
            exports: 'named', //  // https://rollupjs.org/guide/en/#outputexports
            sourcemap: false, // https://rollupjs.org/guide/en/#outputsourcemap
            dir: 'dist/dist',
            entryFileNames: 'index.umd.js', // 打包后的文件名
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            namespaceToStringTag: true, // https://rollupjs.org/guide/en/#outputnamespacetostringtag
            inlineDynamicImports: false, // https://rollupjs.org/guide/en/#outputinlinedynamicimports
            // manualChunks: undefined,
            globals: { vue: 'Vue' }  // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          },
          {
            format: 'es',
            exports: 'named',
            dir: 'dist/es',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            namespaceToStringTag: true,
            inlineDynamicImports: false,
            // manualChunks: undefined,
            preserveModules: true
          },
          {
            format: 'cjs',
            exports: 'named',
            dir: 'dist/lib',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            namespaceToStringTag: true,
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true
          }
        ]
      }
    }
  }
}

const move = () => {
  const files = [
    { input: './README.md', outDir: 'dist/README.md' },
    {
      input: './packages/fighting-design/package.json',
      outDir: 'dist/package.json'
    },
    { input: './LICENSE', outDir: 'dist/LICENSE' }
  ]

  files.forEach((item) => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn('\n' + `Fighting Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
}