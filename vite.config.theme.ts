import type { UserConfigExport } from 'vite'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    build: {
      outDir: resolve(__dirname, 'dist/dist'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'packages/fighting-theme/index.scss'),
        output: {
          assetFileNames: '[name].[ext]' // 取消文件名 hash 值 https://rollupjs.org/guide/en/#outputassetfilenames
        }
      }
    }
  }
}
