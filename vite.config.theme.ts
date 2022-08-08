import type { UserConfigExport } from 'vite'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    build: {
      minify: true,
      outDir: resolve(__dirname, 'dist/dist'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-theme/index.scss'),
        formats: ['es'],
        name: 'style',
        fileName: 'style'
      },
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    }
  }
}
