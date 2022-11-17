import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' // https://github.com/jpkleemans/vite-svg-loader
import { resolve } from 'path'
// import dts from 'vite-plugin-dts'
import { copyFileSync } from 'fs'
import { version } from './packages/fighting-icon/package.json'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      // dts({
      //   insertTypesEntry: true, // 是否生成类型声明入口
      //   cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
      //   copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
      //   include: ['./packages/fighting-icon'], // 手动设置包含路径的 glob
      //   // 构建后回调钩子
      //   afterBuild: (): void => {
      //     move()
      //   }
      // }),
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

const move = (): void => {
  const files = [
    { input: './packages/fighting-icon/README.md', outDir: 'dist-icon/README.md' },
    {
      input: './packages/fighting-icon/package.json',
      outDir: 'dist-icon/package.json'
    },
    { input: './packages/fighting-icon/LICENSE', outDir: 'dist-icon/LICENSE' }
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn('\n' + `Fighting Icon ${version} 版本打包成功 🎉🎉🎉` + '\n')
}

setTimeout(() => move(), 3000)
