import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
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
        // dir: resolve(__dirname, 'dist/dist'),
        format: 'es'
      }
    }
  }
})
