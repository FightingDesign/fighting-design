import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    /** 针对 css 的配置项 */
    css: {
      postcss: {
        plugins: [
          /**
           * 针对一些前沿的 css 进行降级
           *
           * @see postcss-preset-env https://www.npmjs.com/package/postcss-preset-env
           */
          postcssPresetEnv(),
          /**
           * 自动添加浏览器厂商前缀
           *
           * @see autoprefixer https://github.com/postcss/autoprefixer
           */
          autoprefixer()
        ]
      }
    },
    build: {
      outDir: resolve(__dirname, 'dist/dist'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'packages/fighting-theme/index.scss'),
        output: {
          /**
           * 取消文件名 hash 值
           *
           * @see output.assetFileNames https://rollupjs.org/guide/en/#outputassetfilenames
           */
          assetFileNames: '[name].[ext]'
        }
      }
    }
  }
}
